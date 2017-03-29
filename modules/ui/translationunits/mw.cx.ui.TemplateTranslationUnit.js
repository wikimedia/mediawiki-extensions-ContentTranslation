'use strict';

/**
 * Template translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.TemplateTranslationUnit = function MwCxUiTemplateTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.TemplateTranslationUnit.super.call( this, model, toolFactory, config );
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );
};

/* Setup */
OO.inheritClass( mw.cx.ui.TemplateTranslationUnit, mw.cx.ui.SectionTranslationUnit );
OO.mixinClass( mw.cx.ui.TemplateTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.TemplateTranslationUnit.static.name = 'Template';
mw.cx.ui.TemplateTranslationUnit.static.matchRdfaTypes = [ 'mw:Transclusion' ];
mw.cx.ui.TemplateTranslationUnit.static.highlightClass = 'cx-template-highlight';
mw.cx.ui.TemplateTranslationUnit.static.tools = {
	template: [ 'click' ]
};

mw.cx.ui.TemplateTranslationUnit.prototype.adapt = function () {
	// Adapt in general will be asynchronous operation
	this.model.adapt();
	this.setContent( this.model.targetDocument );
};

mw.cx.ui.TemplateTranslationUnit.prototype.isEditable = function () {
	return false;
};

mw.cx.ui.translationUnitFactory.register( mw.cx.ui.TemplateTranslationUnit );
