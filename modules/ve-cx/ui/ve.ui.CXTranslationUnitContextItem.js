/**
 * VisualEditor ContentTranslation translation unit ContextItem mixin.
 *
 * It is assumed that `this` is already a ve.ui.ContextItem whose model belongs to a translation
 * unit.
 *
 * @class
 * @abstract
 * @constructor
 */
ve.ui.CXTranslationUnitContextItem = function VeUiCXTranslationUnitContextItem() {
};

OO.initClass( ve.ui.CXTranslationUnitContextItem );

/* Methods */

/**
 * Get the translation unit for this context item
 *
 * @return {ve.ui.TranslationUnit} The translation unit
 */
ve.ui.CXTranslationUnitContextItem.prototype.getTranslationUnit = function () {
	// TODO: create the necessary infrastructure to implement this
	return null;
};
