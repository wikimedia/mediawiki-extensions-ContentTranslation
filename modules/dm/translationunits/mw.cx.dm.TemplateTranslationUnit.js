'use strict';
/**
 * CX Template TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.TemplateTranslationUnit = function CXTemplateTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.TemplateTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
};

/* Inheritance */
OO.inheritClass( mw.cx.dm.TemplateTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.TemplateTranslationUnit.static.name = 'Template';

mw.cx.dm.TemplateTranslationUnit.static.matchRdfaTypes = [ 'mw:Transclusion' ];

/* Methods */

/* Register */
mw.cx.dm.modelRegistry.register( mw.cx.dm.TemplateTranslationUnit );
