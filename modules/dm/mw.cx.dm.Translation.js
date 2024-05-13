'use strict';

/**
 * CX Translation model
 *
 * @abstract
 * @mixes OO.EventEmitter
 *
 * @constructor
 * @param {mw.cx.dm.WikiPage} sourceWikiPage Details of source wiki page
 * @param {mw.cx.dm.WikiPage} targetWikiPage Details of target wiki page
 * @param {HTMLDocument} sourceDom
 * @param {HTMLDocument} targetDom
 */
mw.cx.dm.Translation = function MwCxDmTranslation( sourceWikiPage, targetWikiPage, sourceDom, targetDom ) {
	// Mixin constructor
	OO.EventEmitter.call( this );

	this.sourceWikiPage = sourceWikiPage;
	this.targetWikiPage = targetWikiPage;
	this.id = null;
	this.sectionTranslationId = null;
	this.adaptedCategories = null;
	this.sourceCategories = null;
	this.targetCategories = null;
	this.targetTitle = this.targetWikiPage.getTitle();
	this.targetURL = null;
	this.sourceRevisionId = this.sourceWikiPage.getRevision();
	this.targetRevisionId = this.targetWikiPage.getRevision();
	this.status = 'draft';
	this.sectionsChanged = false;
	this.changedSignificantly = false;
	this.targetSectionTitle = this.targetWikiPage.getSectionTitle();
	this.progress = {
		any: 0,
		human: 0,
		mt: 0
	};
	this.savedTranslationUnits = null;
	// @var {mw.cx.dm.TranslationIssue[]}
	this.translationIssues = [];

	this.sourceDoc = ve.dm.converter.getModelFromDom(
		sourceDom, { lang: this.getSourceLanguage(), dir: this.sourceWikiPage.getDirection() }
	);

	this.targetDoc = ve.dm.converter.getModelFromDom(
		targetDom, { lang: this.getTargetLanguage(), dir: this.targetWikiPage.getDirection() }
	);

	this.once( 'sectionChange', this.onSectionChange.bind( this ) );
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.Translation, OO.EventEmitter );

/* Events */

/**
 * @event translationIssues
 *
 * The translation has some issues (errors and/or warnings).
 * @param {string} id Special value of 'global' used as an ID for unattached issues.
 * @param {boolean} [hasErrors] True if any of the unattached issues is an error.
 */

/**
 * @event issuesResolved
 *
 * Some of translation issues have been resolved.
 * @param {string} id Special value of 'global' used as an ID for unattached issues.
 */

/* Static methods */

/**
 * @param {HTMLDocument} htmlDocument
 * @param {string} sectionTitle
 * @return {number|null}
 */
mw.cx.dm.Translation.static.getMwSectionNumberBySectionTitle = function ( htmlDocument, sectionTitle ) {
	let sxSectionNumber = null;
	const firstLevelSectionTitles = [].slice.call( htmlDocument.getElementsByTagName( 'h2' ) );
	const targetSectionNode = firstLevelSectionTitles.find( ( el ) => el.innerText === sectionTitle );
	if ( targetSectionNode ) {
		sxSectionNumber = targetSectionNode.parentNode.dataset.mwSectionNumber;
	}

	return sxSectionNumber && parseInt( sxSectionNumber );
};

/**
 * Parse and restructure the source HTML for source and target languages.
 *
 * @param {string} sourceHtml The source HTML
 * @param {string|null} sourceSectionTitle Source section title
 * @param {boolean} forTarget Whether the DOM to be prepared for target language.
 * @param {Object} [savedTranslationUnits] Saved translation units if any
 * @param {string} sourceLanguage Source language code
 * @return {HTMLDocument} Restructured source DOM
 */
mw.cx.dm.Translation.static.getSourceDom = function (
	sourceHtml,
	sourceSectionTitle,
	forTarget,
	savedTranslationUnits,
	sourceLanguage
) {
	const domDoc = ve.init.target.parseDocument( sourceHtml, 'visual' );
	if ( forTarget ) {
		// Remove any and all <base> tags pointing to the source wiki
		const baseNodes = domDoc.getElementsByTagName( 'base' );
		while ( baseNodes.length ) {
			baseNodes[ 0 ].parentNode.removeChild( baseNodes[ 0 ] );
		}
		// Rerun fixBase, which will add a <base> tag pointing to the current wiki
		ve.init.mw.CXTarget.static.fixBase( domDoc );
	}

	let sxSectionNumber;
	if ( sourceSectionTitle ) {
		sxSectionNumber = mw.cx.dm.Translation.static.getMwSectionNumberBySectionTitle( domDoc, sourceSectionTitle );
	}

	const articleNode = domDoc.createElement( 'article' );
	// Convert Nodelist to proper array
	const childNodes = [].slice.call( domDoc.body.childNodes );
	childNodes.forEach( ( node ) => {
		if ( node.nodeType !== Node.ELEMENT_NODE ) {
			return;
		}

		let sectionId = node.getAttribute( 'id' );
		const mwSectionNumber = parseInt( node.dataset.mwSectionNumber );

		const validSection = node.tagName === 'SECTION' && sectionId &&
			node.getAttribute( 'rel' ) === 'cx:Section';
		if ( !validSection ) {
			mw.log.error( '[CX] Node is not under a section: ' + node.tagName +
				' after section ' + sectionId + '. Ignoring.' );
			return;
		}

		const sourceSectionNode = node.cloneNode( true );
		let sectionNode;
		if ( forTarget ) {
			const savedSection = this.getSavedSection( savedTranslationUnits, node, sourceLanguage );

			sectionId = sectionId.replace( 'cxSourceSection', 'cxTargetSection' );
			if ( savedSection ) {
				// Saved translated section. Extract content and create a DOM element
				const savedSectionNode = domDoc.createElement( 'div' );
				const restoredContent = this.getLatestTranslation( savedSection );
				if ( !restoredContent ) {
					mw.log.error( '[CX] Blank saved section for ' + sectionId + ' while restoring' );
					return;
				}
				savedSectionNode.innerHTML = restoredContent;
				sectionNode = savedSectionNode.firstChild;
				// Make sure the restored section has matching section id for the source section.
				sectionNode.setAttribute( 'id', sectionId );
			} else {
				// Prepare a placeholder section
				sectionNode = domDoc.createElement( 'section' );
				sectionNode.setAttribute( 'id', sectionId );
				sectionNode.setAttribute( 'rel', 'cx:Placeholder' );
			}
		} else {
			sectionNode = sourceSectionNode;
		}

		if ( sxSectionNumber && sxSectionNumber !== mwSectionNumber ) {
			sectionNode.classList.add( 'mw-section-hide' );
		}

		// if current translation is a section translation, we should hide the H2 header
		// inside source article column, and its corresponding placeholder inside the
		// target article column, since the section title is already displayed inside target title widget.
		// Here we use the source section node to identify and hide both the H2 header and its corresponding
		// placeholder inside the target column, as the placeholder doesn't have any special attribute
		// for such identification, itself.
		if ( sxSectionNumber && sourceSectionNode.querySelector( 'h2' ) ) {
			sectionNode.classList.add( 'mw-section-hide' );
		}

		// Remove the original node now.
		node.parentNode.removeChild( node );
		articleNode.appendChild( sectionNode );
	} );

	domDoc.body.appendChild( articleNode );

	return domDoc;
};

/**
 * Find the latest translation type using the timestamps and return the content
 *
 * @param {Object} translationUnit
 * @return {string|null}
 */
mw.cx.dm.Translation.static.getLatestTranslation = function ( translationUnit ) {
	const user = translationUnit.user;
	const mt = translationUnit.mt;

	if ( user && mt ) {
		// Both user translation and unmodified MT present. Find which one is latest.
		if ( user.timestamp >= mt.timestamp ) {
			return user.content;
		} else {
			return mt.content;
		}
	} else if ( user ) {
		return user.content;
	} else if ( mt ) {
		return mt.content;
	}

	return null;
};

/**
 * From saved translation units, find a match for the source section, if any.
 * Sometimes, both will have same section numbers, but in case source article
 * changed, we will need to some approximate matching to find a corresponding
 * source section. At the end, we should not have any saved translations that
 * we were not able to restore.
 *
 * @param {Object|undefined} savedTranslationUnits Saved translation units if any
 * @param {Node} sourceSectionNode
 * @param {string} sourceLanguage Source language code
 * @return {Object|undefined} saved translationUnit
 */
mw.cx.dm.Translation.static.getSavedSection = function (
	savedTranslationUnits, sourceSectionNode, sourceLanguage
) {
	if ( !savedTranslationUnits ) {
		return;
	}

	// CX1 translations use parsoid generated Id attribute values in
	// section content instead of numerical section numbers
	const parsoidId = sourceSectionNode.firstChild && sourceSectionNode.firstChild.id;
	const savedSection = savedTranslationUnits[ parsoidId ];
	if ( sourceSectionNode.tagName !== 'SECTION' && savedSection && !savedSection.restored ) {
		savedTranslationUnits[ parsoidId ].restored = true;
		return savedSection;
	}

	// Even if source section number changed, try locating matching id in content
	// For CX2, translationUnitId is section number
	for ( const translationUnitId in savedTranslationUnits ) {
		const savedTranslationUnit = savedTranslationUnits[ translationUnitId ];
		if ( savedTranslationUnit.restored ) {
			// Already restored section.
			continue;
		}
		if ( !savedTranslationUnit.source ) {
			mw.log.error( '[CX] Section saved without source? ' + translationUnitId );
			continue;
		}
		const $savedTranslationUnitSource = $( savedTranslationUnit.source.content );
		if ( !$savedTranslationUnitSource.is( 'section' ) ) {
			// CX1 saved translation
			const savedSectionParsoidId = $savedTranslationUnitSource.attr( 'id' );

			if ( parsoidId === savedSectionParsoidId ) {
				savedTranslationUnit.restored = true;
				return savedTranslationUnit;
			}
		}

		// The parsoid ids did not match. We can try the section numbers now.
		// But section numbers are sequential numbers given by CX.
		// Unconditionally using that will cause wrongly restored sections.
		// For example, a translation A1:a1,B2:b2:C3:c3, if the source changed
		// to A1,C2,B3 will get restored as A1:a1,C2:b2:B3:c3.
		// (A,a,B..are section ids, 1,2,3.. are section numbers in above notation.)
		// So, we should be extra cautious before using section numbers for restoring.
		if ( this.isMatchingForRestore(
			savedTranslationUnit.source.content, sourceSectionNode, sourceLanguage )
		) {
			savedTranslationUnit.restored = true;
			return savedTranslationUnit;
		}
	}
};

/**
 * Given an Element node, this method returns a boolean indicating whether
 * this node contains any transclusion nodes or not.
 *
 * The logic for this method was copied from templateHelper/isTransclusionNode
 * method, which lives inside SX codebase (/app/src/utils/templateHelper.js)
 *
 * @param {Element} rootNode
 * @return {boolean}
 */
mw.cx.dm.Translation.static.hasTransclusionNode = function ( rootNode ) {
	return [].slice.call( rootNode.children ).some( function ( node ) {
		const hasTransclusionTypeOf =
			node.attributes.typeof && node.getAttribute( 'typeof' ).match( /(^|\s)(mw:Transclusion|mw:Placeholder)\b/ );

		return !!( node.attributes.about || hasTransclusionTypeOf );
	} );
};

/**
 * A saved translation unit is a candidate for restoring against a source section, if
 * the saved source and current source share a common tokens ratio greater than a threshold.
 * Check if that is the case.
 *
 * @param {string} savedSourceContent
 * @param {Element|string} currSourceNode
 * @param {string} language Source language code, required for tokenization
 * @return {boolean}
 */
mw.cx.dm.Translation.static.isMatchingForRestore = function (
	savedSourceContent, currSourceNode, language
) {
	const $savedTranslationUnitSource = $( savedSourceContent );
	const $sourceSectionNode = $( currSourceNode );
	if ( $savedTranslationUnitSource.is( 'section' ) ) {
		// Template definitions can exist on different kind of elements like <style>, <span> etc.
		// For example, in SX, cxserver may return a template definition inside <style> tag, then
		// we use a dummy VE surface (in order to resolve references) and `ve.dm.converter.getDomFromNode`
		// to get the DOM for a template. At this point, the template can be returned inside a <span> element.
		// That would lead to broken restoration if we only check for the tag names. But it’s still the same
		// template, so we should only care about the template definition, not the element that includes it.
		if ( this.hasTransclusionNode( currSourceNode ) ) {
			// if both source and target sections are holding a template definition, the section is matching for restore
			// TODO: Should we also check if the template names match?
			return this.hasTransclusionNode( $savedTranslationUnitSource[ 0 ] );
		} else if ( $savedTranslationUnitSource.children().eq( 0 ).prop( 'tagName' ) !==
			$sourceSectionNode.children().eq( 0 ).prop( 'tagName' )
		) {
			return false;
		}
	} else if ( $savedTranslationUnitSource.prop( 'tagName' ) !==
		$sourceSectionNode.prop( 'tagName' )
	) {
		return false;
	}

	// If old and new source content has some edits, causing some words change,
	// find out the common token ratio. The definition of token depends on the language
	// but mostly it means words.
	const commonTokenRatio = mw.cx.TranslationTracker.static.calculateUnmodifiedContent(
		$savedTranslationUnitSource.text(),
		$sourceSectionNode.text(),
		language
	);

	if ( commonTokenRatio > 0.5 ) {
		return true;
	}

	// It is possible that the new or old source section has lot of new content added compared to other.
	// For example, a section had 1 sentence and now it has 4 sentences. In such case,
	// find if the new section has with old source section content.
	return this.hasIncludedContent( $savedTranslationUnitSource.text(), $sourceSectionNode.text() );
};

/**
 * Check if one of the strings has the other string included in it.
 * Do this only if one string is more than double the size of other. If it is less size
 * than that, the commonRatio approach above should have detected the match.
 * The comparison is case insensitive and ignores punctuations.
 *
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */
mw.cx.dm.Translation.static.hasIncludedContent = function ( string1, string2 ) {
	let bigString = string1.trim(),
		smallString = string2.trim();

	if ( bigString.length < smallString.length ) {
		// Swap the sets
		bigString = string2.trim();
		smallString = string1.trim();
	}

	// If smaller string is empty, we should not count as content is included. See T222905
	if ( !smallString ) {
		return false;
	}

	if ( bigString.length >= smallString.length * 2 ) {
		return bigString.toLowerCase().replace( /[^\w\s]/g, '' )
			.indexOf( smallString.toLowerCase().replace( /[^\w\s]/g, '' ) ) >= 0;
	}

	return false;
};

/**
 * Get HTML content of a translation unit to restore.
 *
 * @param {Object} translationUnit
 * @return {Element} Document element corresponding to the saved HTML of the section.
 */
mw.cx.dm.Translation.static.getSavedTranslation = function ( translationUnit ) {
	let translation;

	// If the translator has manual translation from scratch or on top of MT use that.
	if ( translationUnit.user && translationUnit.user.content ) {
		translation = translationUnit.user.content;
	} else if ( translationUnit.mt ) { // Machine translation, unmodified.
		translation = translationUnit.mt.content;
	} else if ( translationUnit.source ) { // Unmodified source copy.
		translation = translationUnit.source.content;
	}

	return $.parseHTML( translation )[ 0 ];
};

/* Methods */

/**
 * @return {number}
 */
mw.cx.dm.Translation.prototype.getMwSectionNumber = function () {
	const sectionTitle = this.sourceWikiPage.getSectionTitle();

	return mw.cx.dm.Translation.static.getMwSectionNumberBySectionTitle( this.sourceDoc.htmlDocument, sectionTitle );
};

mw.cx.dm.Translation.prototype.getTargetPage = function () {
	return this.targetPage;
};

/**
 * @return {Array} Source categories
 */
mw.cx.dm.Translation.prototype.getSourceCategories = function () {
	return this.sourceCategories;
};

/**
 * @param {Array} categories Target categories
 */
mw.cx.dm.Translation.prototype.setTargetCategories = function ( categories ) {
	this.targetCategories = categories;
	this.emit( 'targetCategoriesChange' );
};

/**
 * @return {Array} Target categories
 */
mw.cx.dm.Translation.prototype.getTargetCategories = function () {
	return this.targetCategories;
};

mw.cx.dm.Translation.prototype.isChangedSignificantly = function () {
	return this.changedSignificantly;
};

mw.cx.dm.Translation.prototype.setChangedSignificantly = function ( isChangedSignificantly ) {
	this.changedSignificantly = isChangedSignificantly;
};

mw.cx.dm.Translation.prototype.setSectionTranslationId = function ( sectionTranslationId ) {
	this.sectionTranslationId = sectionTranslationId;
};

mw.cx.dm.Translation.prototype.getSectionTranslationId = function () {
	return this.sectionTranslationId;
};

/**
 * @param {Object} adaptedCategories
 */
mw.cx.dm.Translation.prototype.initCategories = function ( adaptedCategories ) {
	this.adaptedCategories = adaptedCategories;

	this.sourceCategories = Object.keys( adaptedCategories );
	this.targetCategories = this.targetCategories || this.extractTargetCategories();
};

/**
 * @return {Array} Target categories
 */
mw.cx.dm.Translation.prototype.extractTargetCategories = function () {
	let target;
	const categories = [];
	for ( const source in this.adaptedCategories ) {
		target = this.adaptedCategories[ source ];
		if ( target ) {
			categories.push( target );
		}
	}

	return categories;
};

/**
 * For a given source category, find corresponding target category.
 *
 * @param {string} sourceCategory Source category name
 * @return {string|null} Corresponding target category name, or null
 */
mw.cx.dm.Translation.prototype.getCorrespondingTargetCategory = function ( sourceCategory ) {
	return this.adaptedCategories[ sourceCategory ] || null;
};

/**
 * For a given target (adapted) category, find corresponding source category.
 *
 * @param {string} targetCategory Target category name
 * @return {string|null} Corresponding source category name, or null
 */
mw.cx.dm.Translation.prototype.getCorrespondingSourceCategory = function ( targetCategory ) {
	const length = this.sourceCategories.length;
	for ( let i = 0; i < length; i++ ) {
		const category = this.sourceCategories[ i ];

		if ( this.adaptedCategories[ category ] === targetCategory ) {
			return category;
		}
	}

	return null;
};

/**
 * Get adapted categories, which aren't removed from target categories array.
 *
 * @return {Array} Removed categories
 */
mw.cx.dm.Translation.prototype.getRemovedCategories = function () {
	const allTargetCategories = this.extractTargetCategories();

	return OO.simpleArrayDifference( allTargetCategories, this.getTargetCategories() );
};

/**
 * Get Translation id
 *
 * @return {string} Translation Id
 */
mw.cx.dm.Translation.prototype.getId = function () {
	return this.id;
};

/**
 * Set Translation id
 *
 * @param {string} id Translation Id
 */
mw.cx.dm.Translation.prototype.setId = function ( id ) {
	this.id = id;
};

mw.cx.dm.Translation.prototype.setTargetURL = function ( targetURL ) {
	this.targetURL = targetURL;
};

/**
 * @return {string} target url
 */
mw.cx.dm.Translation.prototype.getTargetURL = function () {
	return this.targetURL;
};

/**
 * Set revision id
 *
 * @param {string} revisionId revision Id
 */
mw.cx.dm.Translation.prototype.setSourceRevisionId = function ( revisionId ) {
	this.sourceRevisionId = revisionId;
};

/**
 * Get revision id
 *
 * @return {string} revision Id
 */
mw.cx.dm.Translation.prototype.getSourceRevisionId = function () {
	return this.sourceRevisionId;
};

/**
 * Set target revision id
 *
 * @param {string} revisionId revision Id
 */
mw.cx.dm.Translation.prototype.setTargetRevisionId = function ( revisionId ) {
	this.targetRevisionId = revisionId;
};

/**
 * Get source title for translation
 *
 * @return {string} Source title
 */
mw.cx.dm.Translation.prototype.getSourceTitle = function () {
	return this.sourceWikiPage.getTitle();
};

/**
 * Set Translation title
 *
 * @param {string} title Translation target title
 */
mw.cx.dm.Translation.prototype.setTargetTitle = function ( title ) {
	this.targetTitle = title;
};

/**
 * Get target title for translation
 *
 * @return {string} Target title
 */
mw.cx.dm.Translation.prototype.getTargetTitle = function () {
	return this.targetTitle;
};

/**
 * Set translation section title
 *
 * @param {string|null} sectionTitle
 */
mw.cx.dm.Translation.prototype.setTargetSectionTitle = function ( sectionTitle ) {
	this.targetSectionTitle = sectionTitle;
};

/**
 * Get target section title for translation
 *
 * @return {string|null} Target title
 */
mw.cx.dm.Translation.prototype.getTargetSectionTitle = function () {
	return this.targetSectionTitle;
};

/**
 * Get source language for translation
 *
 * @return {string} Source language
 */
mw.cx.dm.Translation.prototype.getSourceLanguage = function () {
	return this.sourceWikiPage.getLanguage();
};

/**
 * Get target language for translation
 *
 * @return {string} Target language
 */
mw.cx.dm.Translation.prototype.getTargetLanguage = function () {
	return this.targetWikiPage.getLanguage();
};

mw.cx.dm.Translation.prototype.hasBeenPublished = function () {
	return this.status === 'published' || this.targetURL !== null;
};

/**
 * Check if this translation is Section Translation
 *
 * @return {boolean}
 */
mw.cx.dm.Translation.prototype.isSectionTranslation = function () {
	return !!this.sourceWikiPage.getSectionTitle();
};

mw.cx.dm.Translation.prototype.setStatus = function ( status ) {
	this.status = status;
};

mw.cx.dm.Translation.prototype.getProgress = function () {
	return this.progress;
};

mw.cx.dm.Translation.prototype.setProgress = function ( progress ) {
	this.progress = progress;
};

/**
 * Extract translation metadata from the draft translation fetched
 * and set to this model.
 *
 * @param {mw.cx.dm.DraftTranslationDTO} draft Saved translation.
 */
mw.cx.dm.Translation.prototype.setSavedTranslation = function ( draft ) {
	this.setTargetURL( draft.targetURL );
	this.setStatus( draft.status );
	this.setTargetRevisionId( draft.targetRevisionId );
	this.setProgress( JSON.parse( draft.progress ) );
	this.setId( draft.id );
	this.setSectionTranslationId( draft.sectionTranslationId );
	this.setTargetTitle( draft.targetTitle );
	this.setTargetSectionTitle( draft.targetSectionTitle );
	this.savedTranslationUnits = draft.translationUnits;
	// Only target categories are retrieved when translation draft is restored
	// Source categories aren't retrieved, only saved in cx_corpora for pairing
	// with target categories.
	this.targetCategories = JSON.parse( draft.targetCategories );
};

/**
 * Check if there are translated sections, which can be published.
 *
 * @return {boolean}
 */
mw.cx.dm.Translation.prototype.hasTranslatedSections = function () {
	return this.sectionsChanged ||
		(
			// this.savedTranslationUnits is not null and not an empty array
			this.savedTranslationUnits !== null &&
			!( Array.isArray( this.savedTranslationUnits ) && this.savedTranslationUnits.length === 0 )
		);
};

mw.cx.dm.Translation.prototype.onSectionChange = function () {
	this.sectionsChanged = true;
};

/**
 * Add issues global for the whole translation, not attached to any DOM node.
 *
 * @param {mw.cx.dm.TranslationIssue[]} issues
 * @fires translationIssues
 */
mw.cx.dm.Translation.prototype.addUnattachedIssues = function ( issues ) {
	this.translationIssues = this.translationIssues.concat( issues );

	// Allow to suppress all resolvable issues
	issues.forEach( function ( issue ) {
		// When issue is suppressed, emit event about the resolved state
		issue.setSuppressCallback( this.resolveNotify.bind( this ) );
	}, this );

	this.emit( 'translationIssues', 'global', this.hasErrors() );
};

/**
 * Called when one unattached issue is resolved. Events about the issue state are emitted.
 *
 * @fires translationIssues
 * @fires issuesResolved
 */
mw.cx.dm.Translation.prototype.resolveNotify = function () {
	if ( this.getTranslationIssues().length === 0 ) {
		this.emit( 'issuesResolved', 'global' );
	} else {
		this.emit( 'translationIssues', 'global', this.hasErrors() );
	}
};

/**
 * @param {string} name
 */
mw.cx.dm.Translation.prototype.resolveIssueByName = function ( name ) {
	const index = this.findIssueIndex( name );

	if ( index > -1 ) {
		this.translationIssues.splice( index, 1 );
		this.resolveNotify();
	}
};

/**
 * Find the index of issue with some name, inside issue array.
 * Names act as unique ID and there should not be duplicates.
 *
 * @param {string} name Name of the issue
 * @return {number} Index of issue or -1 if not found.
 */
mw.cx.dm.Translation.prototype.findIssueIndex = function ( name ) {
	const length = this.translationIssues.length;
	for ( let i = 0; i < length; i++ ) {
		if ( this.translationIssues[ i ].getName() === name ) {
			return i;
		}
	}

	return -1;
};

/**
 * True if there is at least one unattached issue that is an error. Number of warnings is irrelevant.
 *
 * @return {boolean}
 */
mw.cx.dm.Translation.prototype.hasErrors = function () {
	return this.getTranslationIssues().some( function ( issue ) {
		return issue.type === 'error';
	} );
};

/**
 * @return {mw.cx.dm.TranslationIssue[]}
 */
mw.cx.dm.Translation.prototype.getTranslationIssues = function () {
	return this.translationIssues.filter( function ( issue ) {
		return !issue.isSuppressed();
	} );
};
