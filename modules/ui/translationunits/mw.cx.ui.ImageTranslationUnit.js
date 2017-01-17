'use strict';

/**
 * Image translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} translationUnitModel
 * @param {mw.cx.ui.TranslationView} view
 * @param {Object} config
 */
mw.cx.ui.ImageTranslationUnit = function CXImageTranslationUnit( translationUnitModel, view, config ) {
	// Parent constructor
	mw.cx.ui.ImageTranslationUnit.parent.call( this, translationUnitModel, view, config );
	// Mixin constructor
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );
};

/* Setup */
OO.inheritClass( mw.cx.ui.ImageTranslationUnit, mw.cx.ui.TranslationUnit );
OO.mixinClass( mw.cx.ui.ImageTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.ImageTranslationUnit.static.name = 'Image';

mw.cx.ui.ImageTranslationUnit.static.matchRdfaTypes = [ 'mw:Image/Thumb' ];

mw.cx.ui.ImageTranslationUnit.static.highlightClass = 'cx-image-highlight';

mw.cx.ui.translationUnitFactory.register( mw.cx.ui.ImageTranslationUnit );
