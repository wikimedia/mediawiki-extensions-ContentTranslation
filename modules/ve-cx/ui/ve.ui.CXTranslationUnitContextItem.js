/**
 * VisualEditor ContentTranslation translation unit ContextItem mixin.
 *
 * It is assumed that `this` is already a ve.ui.ContextItem whose model belongs to a translation
 * unit.
 *
 * @class
 * @abstract
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 */
ve.ui.CXTranslationUnitContextItem = function VeUiCXTranslationUnitContextItem( context, model ) {
	this.model = model;
	this.context = context;
	this.translation = ve.init.target.getTranslation();
	this.translationUnit = this.translation.getTranslationUnit( this.model.getTranslationUnitId() );
};

OO.initClass( ve.ui.CXTranslationUnitContextItem );

/* Methods */

/**
 * Get the translation unit for this context item
 *
 * @return {ve.ui.TranslationUnit} The translation unit
 */
ve.ui.CXTranslationUnitContextItem.prototype.getTranslationUnit = function () {
	return this.translationUnit;
};
