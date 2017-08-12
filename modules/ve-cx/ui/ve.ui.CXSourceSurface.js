/**
 * UI surface for the source side of a translation
 *
 * @class
 * @extends ve.ui.CXSurface
 *
 * @constructor
 * @param {mw.cx.ui.TranslationView} translationView Translation view
 * @param {Object} [config] Configuration options
 */
ve.ui.CXSourceSurface = function VeUiCXSourceSurface() {
	ve.ui.CXSourceSurface.super.apply( this, arguments );
	this.setDisabled( true );
	this.$element.addClass( 've-ui-cxSourceSurface' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXSourceSurface, ve.ui.CXSurface );
