/**
 * TranslationUnit factory.
 *
 * @class
 * @abstract
 * @extends OO.Factory
 * @constructor
 */
mw.cx.dm.TranslationUnitFactory = function CXTranslationUnitFactory() {
	// Parent constructor
	mw.cx.dm.ModelFactory.super.call( this );
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.TranslationUnitFactory, mw.cx.dm.ModelFactory );

/* Initialization */

mw.cx.dm.translationUnitFactory = new mw.cx.dm.TranslationUnitFactory();
