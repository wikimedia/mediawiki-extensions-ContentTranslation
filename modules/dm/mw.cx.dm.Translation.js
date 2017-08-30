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
 * @param {Object} config
 */
mw.cx.dm.Translation = function MwCxDmTranslation( sourceWikiPage, targetWikiPage, sourceHtml, config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );

	this.sourceWikiPage = sourceWikiPage;
	this.targetWikiPage = targetWikiPage;
	this.config = config;
	this.id = null;
	this.sourceCategories = null;
	this.targetCategories = null;
	// TODO get/set the following three sourceWikiPage/targetWikiPage properties
	this.targetTitle = this.targetWikiPage.getTitle();
	this.sourceRevisionId = this.sourceWikiPage.getRevision();
	this.targetRevisionId = this.targetWikiPage.getRevision();
	this.translator = null;
	this.startDate = null;
	this.status = 'draft';
	this.progress = {
		any: 0,
		human: 0,
		mt: 0,
		mtSectionsCount: 0
	};
	this.topTranslationUnits = [];
	this.translationUnitById = {};

	this.sourceDoc = ve.dm.converter.getModelFromDom(
		this.constructor.static.getSourceDom( sourceHtml, false ),
		{ lang: this.sourceWikiPage.getLanguage(), dir: this.sourceWikiPage.getDirection() }
	);

	this.targetDoc = ve.dm.converter.getModelFromDom(
		this.constructor.static.getSourceDom( sourceHtml, true ),
		{ lang: this.targetWikiPage.getLanguage(), dir: this.targetWikiPage.getDirection() }
	);

	this.buildTranslationUnits( this.sourceDoc.getDocumentNode(), null );
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.Translation, OO.EventEmitter );

/* Static methods */

/**
 * Parse and restructure the source HTML, wrapping top-level translatable nodes into sections
 *
 * @param {string} sourceHtml The source HTML
 * @param {boolean} forTarget Replace each top-level wrapper section with an empty placeholder?
 * @return {HTMLDocument} Restructured source DOM
 */
mw.cx.dm.Translation.static.getSourceDom = function ( sourceHtml, forTarget ) {
	var nextSectionId = 1,
		sectionIdPrefix = forTarget ? 'cxTargetSection' : 'cxSourceSection',
		domDoc = ve.createDocumentFromHtml( sourceHtml );
	// Wrap each top-level element with a <section rel='cx:Placeholder' id='xxx'>
	// TODO: it would be better to do section wrapping on the CX server
	Array.prototype.forEach.call( domDoc.body.childNodes, function ( node ) {
		var sectionNode;
		if ( node.nodeType !== Node.ELEMENT_NODE ) {
			return;
		}
		if ( ( node.getAttribute( 'typeof' ) || '' ).match( /\bmw:Transclusion\b/ ) ) {
			// TODO: handle more systematically
			if ( forTarget ) {
				node.parentNode.removeChild( node );
			}
			return;
		}
		sectionNode = domDoc.createElement( 'section' );
		sectionNode.id = sectionIdPrefix + nextSectionId++;
		domDoc.body.replaceChild( sectionNode, node );
		if ( forTarget ) {
			sectionNode.setAttribute( 'rel', 'cx:Placeholder' );
		} else {
			sectionNode.setAttribute( 'rel', 'cx:Section' );
			sectionNode.appendChild( node );
		}
	} );
	return domDoc;
};

mw.cx.dm.Translation.prototype.getTargetPage = function () {
	return this.targetPage;
};

/* Methods */

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
	if ( title === this.targetTitle ) {
		// No title change
		return;
	}
	this.targetTitle = title;
	// Translation title change is a change trigger for translation.
	this.emit( 'change' );
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

mw.cx.dm.Translation.prototype.setProgress = function ( progress ) {
	this.progress = progress;
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
		translationUnitIdBySetIndex = {};

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
				translationUnitIdBySetIndex[ opened.getIndex( j ) ] = unit.getId();
				unit.setStart( i );
			}
		}
		for ( j = 0, jLen = closed.getLength(); j < jLen; j++ ) {
			unit = this.translationUnitById[
				translationUnitIdBySetIndex[ closed.getIndex( j ) ]
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

mw.cx.dm.Translation.prototype.getProgress = function () {
	return this.progress;
};
