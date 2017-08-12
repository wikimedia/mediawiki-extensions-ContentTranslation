/**
 * UI surface for one side of a translation (source or target)
 *
 * @class
 * @extends ve.ui.Surface
 *
 * @constructor
 * @param {mw.cx.ui.TranslationView} translationView Translation view
 * @param {ve.dm.Surface} surfaceModel Model surface
 * @param {Object} [config] Configuration options
 */
ve.ui.CXSurface = function VeUiCXSurface( translationView, surfaceModel, config ) {
	this.translationView = translationView;
	// Need to set surfaceModel before calling parent constructor, for createModel
	this.surfaceModel = surfaceModel;
	// Parent constructor
	ve.ui.CXSurface.super.call( this, surfaceModel.getDocument(), config );
	this.$element.addClass( 've-ui-cxSurface mw-body-content mw-parser-output' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXSurface, ve.ui.Surface );

/* Methods */

/**
 * Hack: Return existing ve.dm.Surface to caller (for ve.ui.Surface constructor)
 *
 * @return {ve.dm.Surface} Existing ve.dm.Surface
 */
ve.ui.CXSurface.prototype.createModel = function () {
	return this.surfaceModel;
};

/**
 * @return {mw.cx.ui.TranslationView} The translation view object
 */
ve.ui.CXSurface.prototype.getTranslationView = function () {
	return this.translationView;
};

/**
 * @return {mw.cx.dm.Translation} The translation model object
 */
ve.ui.CXSurface.prototype.getTranslationModel = function () {
	return this.translationModel;
};
