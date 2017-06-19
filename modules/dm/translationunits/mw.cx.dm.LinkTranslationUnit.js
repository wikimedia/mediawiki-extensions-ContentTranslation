'use strict';

/**
 * CX Link TranslationUnit Data model class
 *
 * @constructor
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {string} id The translation unit ID
 * @param {ve.dm.Annotation} sourceModel The source model
 * @param {mw.cx.dm.TranslationUnit} parentTranslationUnit The parent translation unit
 */
mw.cx.dm.LinkTranslationUnit = function LinkTranslationUnit( translation, id, sourceModel, parentTranslationUnit ) {
	mw.cx.dm.LinkTranslationUnit.super.call( this, translation, id, sourceModel, parentTranslationUnit );
	this.sourceTitle = null;
	this.targetTitle = null;
	this.sourceLinkInfo = null;
	this.targetTitleMissing = true;
	this.init();
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.LinkTranslationUnit, mw.cx.dm.TranslationUnit );

/* Static properties */

mw.cx.dm.LinkTranslationUnit.static.name = 'link';

mw.cx.dm.LinkTranslationUnit.static.matchClasses = [ ve.dm.CXLinkAnnotation ];

/* Methods */

mw.cx.dm.LinkTranslationUnit.prototype.init = function () {
	this.sourceTitle = this.sourceModel.title;
	// We are not fetching any data before the parent translation unit's translation started.
};

/* Registration */

mw.cx.dm.translationUnitFactory.register( mw.cx.dm.LinkTranslationUnit );
