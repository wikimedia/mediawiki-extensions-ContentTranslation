'use strict';

/**
 * CX Section TranslationUnit
 *
 * @constructor
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {string} id The translation unit ID
 * @param {ve.dm.Node} sourceModel The source model
 * @param {null} parentTranslationUnit The parent translation unit (always null)
 */
mw.cx.dm.SectionTranslationUnit = function SectionTranslationUnit( translation, id, sourceModel, parentTranslationUnit ) {
	mw.cx.dm.SectionTranslationUnit.super.call( this, translation, id, sourceModel, parentTranslationUnit );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.SectionTranslationUnit, mw.cx.dm.TranslationUnit );

/* Static properties */

mw.cx.dm.SectionTranslationUnit.static.name = 'section';

mw.cx.dm.SectionTranslationUnit.static.matchClasses = [
	ve.dm.CXSectionNode,
	ve.dm.CXPlaceholderNode
];

/* Methods */

mw.cx.dm.TranslationUnit.prototype.onChange = function () {
	this.save();
};

mw.cx.dm.SectionTranslationUnit.prototype.save = function () {
	// TODO: use the storage manager instance to save the sections.
};

/* Register */
mw.cx.dm.translationUnitFactory.register( mw.cx.dm.SectionTranslationUnit );
