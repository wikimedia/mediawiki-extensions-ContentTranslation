'use strict';

/**
 * CX External Link TranslationUnit Data model class
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.ExternalLinkTranslationUnit = function ExternalLinkTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.ExternalLinkTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.ExternalLinkTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.ExternalLinkTranslationUnit.static.name = 'extlink';
mw.cx.dm.ExternalLinkTranslationUnit.static.matchTagNames = [ 'a' ];
mw.cx.dm.ExternalLinkTranslationUnit.static.matchRdfaTypes = [ 'mw:ExtLink' ];

mw.cx.dm.ExternalLinkTranslationUnit.prototype.getTargetURL = function () {
	if ( this.sourceDocument ) {
		return this.sourceDocument.href;
	}
	if ( this.targetDocument ) {
		return this.targetDocument.href;
	}
};

/**
 * Get the id of the section
 * @return {string}
 */
mw.cx.dm.ExternalLinkTranslationUnit.prototype.getSectionId = function () {
	// Make sure that there is an id for the unit even if id attribute is not present.
	var id;
	// Make sure that there is an id for the unit even if id attribute is not present.
	if ( this.sourceDocument ) {
		id = this.sourceDocument.id || this.sourceDocument.dataset.linkid;
	}
	// Source document does not exist. See if there is target document
	if ( !id && this.targetDocument ) {
		id = this.targetDocument.id || this.targetDocument.dataset.linkid;
	}

	return id || OO.ui.generateElementId();
};

/**
 * @param {string} url
 * @return {boolean}
 */
mw.cx.dm.ExternalLinkTranslationUnit.static.isSafeUrl = function ( url ) {
	return OO.ui.isSafeUrl( url );
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.ExternalLinkTranslationUnit );
