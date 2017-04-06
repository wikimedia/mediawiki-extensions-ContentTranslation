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
	return this.sourceDocument.href;
};

/**
 * Get the id of the section
 * @return {string}
 */
mw.cx.dm.TranslationUnit.prototype.getSectionId = function () {
	// Make sure that there is an id for the unit even if id attribute is not present.
	return this.sourceDocument.id || this.sourceDocument.dataset.linkid || OO.ui.generateElementId();
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.ExternalLinkTranslationUnit );
