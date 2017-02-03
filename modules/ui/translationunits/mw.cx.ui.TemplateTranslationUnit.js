'use strict';

/**
 * Template translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.ui.TranslationView} view
 * @param {Object} config
 */
mw.cx.ui.TemplateTranslationUnit = function CXTemplateTranslationUnit( model, view, config ) {
	// Parent constructor
	mw.cx.ui.TemplateTranslationUnit.parent.call( this, model, view, config );
	// Mixin constructor
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );
};

/* Setup */
OO.inheritClass( mw.cx.ui.TemplateTranslationUnit, mw.cx.ui.SectionTranslationUnit );
OO.mixinClass( mw.cx.ui.TemplateTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.TemplateTranslationUnit.static.name = 'Template';

mw.cx.ui.TemplateTranslationUnit.static.matchRdfaTypes = [ 'mw:Transclusion' ];

mw.cx.ui.TemplateTranslationUnit.static.highlightClass = 'cx-template-highlight';

mw.cx.ui.translationUnitFactory.register( mw.cx.ui.TemplateTranslationUnit );
