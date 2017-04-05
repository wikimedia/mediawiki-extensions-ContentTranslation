'use strict';

/**
 * Image translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.ImageTranslationUnit = function MwCxUiImageTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.ImageTranslationUnit.super.call( this, model, toolFactory, config );
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );
};

/* Setup */
OO.inheritClass( mw.cx.ui.ImageTranslationUnit, mw.cx.ui.SectionTranslationUnit );
OO.mixinClass( mw.cx.ui.ImageTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.ImageTranslationUnit.static.name = 'Image';
mw.cx.ui.ImageTranslationUnit.static.tags = [ 'figure' ];
mw.cx.ui.ImageTranslationUnit.static.matchRdfaTypes = [ 'mw:Image/Thumb' ];
mw.cx.ui.ImageTranslationUnit.static.highlightClass = 'cx-image-highlight';
mw.cx.ui.ImageTranslationUnit.static.tools = {};

mw.cx.ui.ImageTranslationUnit.prototype.adapt = function () {
	// Adapt in general will be asynchronous operation
	this.model.adapt();
	this.setContent( this.model.targetDocument );
};

/**
 * @inheritDoc
 */
mw.cx.ui.ImageTranslationUnit.prototype.onParentTranslationStarted = function () {
	this.init();
};

mw.cx.ui.translationUnitFactory.register( mw.cx.ui.ImageTranslationUnit );
