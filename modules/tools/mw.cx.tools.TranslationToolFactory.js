/**
 * TranslationTool Factory.
 *
 * @class
 * @abstract
 * @extends OO.Factory
 * @constructor
 */
mw.cx.tools.TranslationToolFactory = function CXTranslationToolFactory() {
	mw.cx.tools.TranslationToolFactory.super.call( this );
};

/* Inheritance */

OO.inheritClass( mw.cx.tools.TranslationToolFactory, OO.Factory );

/* Initialization */

mw.cx.tools.translationToolFactory = new mw.cx.tools.TranslationToolFactory();
