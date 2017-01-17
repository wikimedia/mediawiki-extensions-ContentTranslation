/**
 * TranslationUnit factory.
 *
 * @class
 * @abstract
 * @extends OO.Factory
 * @constructor
 */
mw.cx.ui.TranslationUnitFactory = function CXTranslationUnitFactory() {
	// Parent constructor
	mw.cx.ui.TranslationUnitFactory.super.call( this );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TranslationUnitFactory, OO.Factory );

/* Initialization */

mw.cx.ui.translationUnitFactory = new mw.cx.ui.TranslationUnitFactory();
