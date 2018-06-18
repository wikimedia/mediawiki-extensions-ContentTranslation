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
};

OO.initClass( ve.ui.CXTranslationUnitContextItem );
