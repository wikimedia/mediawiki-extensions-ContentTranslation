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
	this.sourceCategories = null;
	this.targetCategories = null;
	this.targetTitle = this.targetWikiPage.getTitle();
	this.targetURL = null;
	this.sourceRevisionId = this.sourceWikiPage.getRevision();
	this.targetRevisionId = this.targetWikiPage.getRevision();
	this.status = 'draft';
	this.progress = {
		any: 0,
		human: 0,
		mt: 0,
		mtSectionsCount: 0
	};
	this.savedTranslationUnits = null;
	this.topTranslationUnits = [];
	this.translationUnitById = {};

	if ( draft ) {
		this.setSavedTranslation( draft );
	}

	this.sourceDoc = ve.dm.converter.getModelFromDom(
		this.constructor.static.getSourceDom( sourceHtml, false ),
		{ lang: this.sourceWikiPage.getLanguage(), dir: this.sourceWikiPage.getDirection() }
	);

	this.targetDoc = ve.dm.converter.getModelFromDom(
		this.constructor.static.getSourceDom( sourceHtml, true, this.savedTranslationUnits ),
		{ lang: this.targetWikiPage.getLanguage(), dir: this.targetWikiPage.getDirection() }
	);

	this.buildTranslationUnits( this.sourceDoc.getDocumentNode(), null );
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.Translation, OO.EventEmitter );

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
	var sectionId, childNodes,
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

			if ( savedSection ) {
				// Saved translated section. Extract content and create a DOM element
				savedSectionNode = domDoc.createElement( 'div' );
				savedSectionNode.innerHTML = savedSection.user.content;
				sectionNode = savedSectionNode.firstChild;
			} else {
				// Prepare a placeholder section
				sectionNode = domDoc.createElement( 'section' );
				sectionId = sectionId.replace( 'cxSourceSection', 'cxTargetSection' );
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
		// FIXME: Update the section number of restored section
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
			// FIXME: Update the section number of restored section
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
 * @param {Array} categories Source categories
 */
mw.cx.dm.Translation.prototype.setSourceCategories = function ( categories ) {
	this.sourceCategories = categories;
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
};

/**
 * @return {Array} Target categories
 */
mw.cx.dm.Translation.prototype.getTargetCategories = function () {
	return this.targetCategories;
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
 * Set Translation title
 *
 * @param {string} title Translation Id
 */
mw.cx.dm.Translation.prototype.setTargetTitle = function ( title ) {
	this.targetTitle = title;
};

/**
 * Get Translation title
 * @return {string} Target title
 */
mw.cx.dm.Translation.prototype.getTargetTitle = function () {
	return this.targetTitle;
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
 * Build and initialize sub-translation units recursively.
 *
 * @param {ve.dm.Node} parentNode Document node to search
 * @param {mw.cx.dm.TranslationUnit|null} parentUnit Parent translation unit
 */
mw.cx.dm.Translation.prototype.buildTranslationUnits = function ( parentNode, parentUnit ) {
	var unitList, i, len, node, unit;

	if ( parentNode instanceof ve.dm.ContentBranchNode ) {
		this.buildAnnotationTranslationUnits( parentNode.getRange(), parentUnit );
		return;
	}

	if ( !parentNode.children || !parentNode.children.length ) {
		return;
	}

	unitList = parentUnit ? parentUnit.translationUnits : this.topTranslationUnits;
	for ( i = 0, len = parentNode.children.length; i < len; i++ ) {
		node = parentNode.children[ i ];
		unit = this.matchTranslationUnit( node, parentUnit );
		if ( unit ) {
			unitList.push( unit );
			this.translationUnitById[ unit.getId() ] = unit;
		}
		// Recurse, whether or not we just built a translation unit
		this.buildTranslationUnits( node, unit || parentUnit );
	}
};

/**
 * Build and initialize translation units for annotations.
 *
 * @param {ve.Range} range Document range to search
 * @param {mw.cx.dm.TranslationUnit} parentUnit Parent translation unit
 */
mw.cx.dm.Translation.prototype.buildAnnotationTranslationUnits = function ( range, parentUnit ) {
	var i, current, opened, closed, j, jLen, ann, unit,
		data = this.sourceDoc.data,
		previous = new ve.dm.AnnotationSet( data.store ),
		translationUnitIdBySetHash = {};

	for ( i = range.start; i < range.end; i++ ) {
		current = data.getAnnotationsFromOffset( i );
		opened = current.clone();
		opened.removeSet( previous );
		closed = previous.clone();
		closed.removeSet( current );
		for ( j = 0, jLen = opened.getLength(); j < jLen; j++ ) {
			ann = opened.get( j );
			unit = this.matchTranslationUnit( ann, parentUnit );
			if ( unit ) {
				parentUnit.translationUnits.push( unit );
				this.translationUnitById[ unit.getId() ] = unit;
				translationUnitIdBySetHash[ opened.getHash( j ) ] = unit.getId();
				unit.setStart( i );
			}
		}
		for ( j = 0, jLen = closed.getLength(); j < jLen; j++ ) {
			unit = this.translationUnitById[
				translationUnitIdBySetHash[ closed.getHash( j ) ]
			];
			if ( unit ) {
				unit.setEnd( i );
			}
		}
		previous = current;
	}
};

/**
 * Get a translation unit by ID
 *
 * @param {string} id Translation unit ID
 * @return {mw.cx.dm.TranslationUnit|undefined} The translation unit
 */
mw.cx.dm.Translation.prototype.getTranslationUnit = function ( id ) {
	return this.translationUnitById[ id ];
};

/**
 * Get a translation units
 *
 * @return {mw.cx.dm.TranslationUnit[]} The translation units
 */
mw.cx.dm.Translation.prototype.getTranslationUnits = function () {
	return this.topTranslationUnits;
};
