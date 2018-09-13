'use strict';

/**
 * CX Translation model
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {mw.cx.dm.WikiPage} sourceWikiPage Details of source wiki page
 * @param {mw.cx.dm.WikiPage} targetWikiPage Details of target wiki page
 * @param {string} sourceHtml Segmented source HTML
 * @param {Object} [draft] Saved translation
 */
mw.cx.dm.Translation = function MwCxDmTranslation( sourceWikiPage, targetWikiPage, sourceHtml, draft ) {
	// Mixin constructor
	OO.EventEmitter.call( this );

	this.sourceWikiPage = sourceWikiPage;
	this.targetWikiPage = targetWikiPage;
	this.id = null;
	this.adaptedCategories = null;
	this.sourceCategories = null;
	this.targetCategories = null;
	this.targetTitle = this.targetWikiPage.getTitle();
	this.targetURL = null;
	this.sourceRevisionId = this.sourceWikiPage.getRevision();
	this.targetRevisionId = this.targetWikiPage.getRevision();
	this.status = 'draft';
	this.sectionsChanged = false;
	this.progress = {
		any: 0,
		human: 0,
		mt: 0,
		mtSectionsCount: 0
	};
	this.savedTranslationUnits = null;
	// @var {mw.cx.dm.TranslationIssue[]}
	this.translationIssues = [];

	if ( draft ) {
		this.setSavedTranslation( draft );
	}

	this.sourceDoc = ve.dm.converter.getModelFromDom(
		this.constructor.static.getSourceDom( sourceHtml, false ),
		{ lang: this.getSourceLanguage(), dir: this.sourceWikiPage.getDirection() }
	);

	this.targetDoc = ve.dm.converter.getModelFromDom(
		this.constructor.static.getSourceDom( sourceHtml, true, this.savedTranslationUnits ),
		{ lang: this.getTargetLanguage(), dir: this.targetWikiPage.getDirection() }
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
 * @param {string} id ID of a section with issues, or special values of 'title' and 'global'
 * @param {boolean} [hasErrors] True if any of the section's issues is an error.
 */

/* Static methods */

/**
 * Parse and restructure the source HTML for source and target languages.
 *
 * @param {string} sourceHtml The source HTML
 * @param {boolean} forTarget Whether the DOM to be prepared for target language.
 * @param {Object} [savedTranslationUnits] Saved translation units if any
 * @return {HTMLDocument} Restructured source DOM
 */
mw.cx.dm.Translation.static.getSourceDom = function ( sourceHtml, forTarget, savedTranslationUnits ) {
	var sectionId, childNodes, restoredContent,
		translationUnitId,
		sectionNumber = 0,
		domDoc = ve.init.target.parseDocument( sourceHtml, 'visual' ),
		articleNode = domDoc.createElement( 'article' ),
		baseNodes;

	if ( forTarget ) {
		// Remove any and all <base> tags pointing to the source wiki
		baseNodes = domDoc.getElementsByTagName( 'base' );
		while ( baseNodes.length ) {
			baseNodes[ 0 ].parentNode.removeChild( baseNodes[ 0 ] );
		}
		// Rerun fixBase, which will add a <base> tag pointing to the current wiki
		ve.init.mw.CXTarget.static.fixBase( domDoc );
	}

	// Convert Nodelist to proper array
	childNodes = [].slice.call( domDoc.body.childNodes );
	childNodes.forEach( function ( node ) {
		var sectionNode, savedSectionNode, savedSection, validSection = false;

		if ( node.nodeType !== Node.ELEMENT_NODE ) {
			return;
		}

		sectionId = node.getAttribute( 'id' );

		validSection = node.tagName === 'SECTION' && sectionId &&
			node.getAttribute( 'rel' ) === 'cx:Section';
		if ( !validSection ) {
			mw.log.error( '[CX] Node is not under a section: ' + node.tagName +
				' after section ' + sectionId + '. Ignoring.' );
			return;
		}

		if ( forTarget ) {
			savedSection = this.getSavedSection( savedTranslationUnits, node, sectionNumber );

			sectionId = sectionId.replace( 'cxSourceSection', 'cxTargetSection' );
			if ( savedSection ) {
				// Saved translated section. Extract content and create a DOM element
				savedSectionNode = domDoc.createElement( 'div' );
				restoredContent = mw.cx.dm.Translation.static.getLatestTranslation( savedSection );
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
			sectionNode = node.cloneNode( true );
		}

		// Remove the original node now.
		node.parentNode.removeChild( node );
		articleNode.appendChild( sectionNode );

		sectionNumber++;

	}.bind( this ) );

	// Check if all savedTranslationUnit items were restored or not.
	for ( translationUnitId in savedTranslationUnits ) {
		if ( !savedTranslationUnits[ translationUnitId ].restored ) {
			mw.log.error( '[CX] Section ' + translationUnitId + ' not restored' );
		}
		// TODO: Append these sections to target article or Inform user or
		// Load the original revision of source article for this translation.
	}

	domDoc.body.appendChild( articleNode );

	return domDoc;
};

/**
 * Find the latest translation type using the timestamps and return the content
 * @param {Object} translationUnit
 * @return {string|null}
 */
mw.cx.dm.Translation.static.getLatestTranslation = function ( translationUnit ) {
	var user = translationUnit.user,
		mt = translationUnit.mt;

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
 * @param {number} sectionNumber Section number
 * @return {Object|undefined} saved translationUnit
 */
mw.cx.dm.Translation.static.getSavedSection = function (
	savedTranslationUnits, sourceSectionNode, sectionNumber
) {
	var savedSection, translationUnitId, savedTranslationUnit,
		parsoidId, $savedTranslationUnitSource, savedSectionParsoidId;

	if ( !savedTranslationUnits ) {
		return;
	}

	savedSection = savedTranslationUnits[ sectionNumber ];

	if ( savedSection ) {
		if ( savedSection.restored ) {
			mw.log.error( '[CX] Trying to restore a section already restored? ' + sectionNumber );
		}
		savedTranslationUnits[ sectionNumber ].restored = true;
		return savedSection;
	}

	// CX1 translations use parsoid generated Id attribute values in
	// section content instead of numerical section numbers
	parsoidId = sourceSectionNode.firstChild && sourceSectionNode.firstChild.id;
	savedSection = savedTranslationUnits[ parsoidId ];

	if ( savedSection && !savedSection.restored ) {
		savedTranslationUnits[ parsoidId ].restored = true;
		return savedSection;
	}

	// Even if source section number changed, try locating matching id in content
	for ( translationUnitId in savedTranslationUnits ) {
		savedTranslationUnit = savedTranslationUnits[ translationUnitId ];
		if ( savedTranslationUnit.restored ) {
			continue;
		}
		if ( !savedTranslationUnit.source ) {
			mw.log.error( '[CX] Section saved without source? ' + translationUnitId );
			continue;
		}
		$savedTranslationUnitSource = $( savedTranslationUnit.source.content );
		if ( $savedTranslationUnitSource.is( 'section' ) ) {
			// CX2 saved translation
			savedSectionParsoidId = $savedTranslationUnitSource.children().attr( 'id' );
		} else {
			// CX1 saved translation
			savedSectionParsoidId = $savedTranslationUnitSource.attr( 'id' );
		}

		if ( parsoidId === savedSectionParsoidId || sectionNumber === savedSectionParsoidId ) {
			savedTranslationUnit.restored = true;
			return savedTranslationUnit;
		}
	}

};

/**
 * Get HTML content of a translation unit to restore.
 *
 * @param {Object} translationUnit
 * @return {Element} Document element corresponding to the saved HTML of the section.
 */
mw.cx.dm.Translation.static.getSavedTranslation = function ( translationUnit ) {
	var translation;

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
	var source, target, categories = [];

	for ( source in this.adaptedCategories ) {
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
	var i, length, category;

	for ( i = 0, length = this.sourceCategories.length; i < length; i++ ) {
		category = this.sourceCategories[ i ];

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
	var allTargetCategories = this.extractTargetCategories();

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
 * Get revision id
 *
 * @return {string} revision Id
 */
mw.cx.dm.Translation.prototype.getSourceRevisionId = function () {
	return this.sourceRevisionId;
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
 * @param {string} title Translation Id
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
 * @param {Object} draft Saved translation.
 */
mw.cx.dm.Translation.prototype.setSavedTranslation = function ( draft ) {
	this.setTargetURL( draft.targetURL );
	this.setStatus( draft.status );
	this.setTargetRevisionId( draft.targetRevisionId );
	this.setProgress( JSON.parse( draft.progress ) );
	this.setId( draft.id );
	this.setTargetTitle( draft.targetTitle );
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
 * Build a translation unit from the source ve.dm.Node or ve.dm.Annotation, if one matches
 *
 * @param {ve.dm.Node|ve.dm.Annotation} sourceModel Source node or annotation
 * @param {mw.cx.dm.TranslationUnit|null} parentUnit Parent translation unit
 * @return {mw.cx.dm.TranslationUnit|null} The translation unit, or null
 */
mw.cx.dm.Translation.prototype.matchTranslationUnit = function ( sourceModel, parentUnit ) {
	var id, type;
	if (
		!sourceModel.getTranslationUnitId ||
		!( id = sourceModel.getTranslationUnitId() ) ||
		!( type = mw.cx.dm.translationUnitFactory.match( sourceModel ) )
	) {
		return null;
	}
	return mw.cx.dm.translationUnitFactory.create( type, this, id, sourceModel, parentUnit );
};

/**
 * Add issues global for the whole translation, not attached to any DOM node.
 *
 * @param {mw.cx.dm.TranslationIssue[]} issues
 * @fires translationIssues
 */
mw.cx.dm.Translation.prototype.addUnattachedIssues = function ( issues ) {
	this.translationIssues = this.translationIssues.concat( issues );

	this.emit( 'translationIssues', 'global' );
};

mw.cx.dm.Translation.prototype.getTranslationIssues = function () {
	return this.translationIssues;
};
