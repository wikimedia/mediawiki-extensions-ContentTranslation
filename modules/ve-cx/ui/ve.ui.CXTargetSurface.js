/**
 * UI surface for the target side of a translation
 *
 * @class
 * @extends ve.ui.CXSurface
 *
 * @constructor
 * @param {mw.cx.ui.TranslationView} translationView Translation view
 * @param {Object} [config] Configuration options
 */
ve.ui.CXTargetSurface = function VeUiCXTargetSurface() {
	ve.ui.CXTargetSurface.super.apply( this, arguments );
	this.$element.addClass( 've-ui-cxTargetSurface' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXTargetSurface, ve.ui.CXSurface );
