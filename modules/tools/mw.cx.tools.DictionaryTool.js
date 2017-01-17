/**
 * Dictionary Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} translationUnit
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {Object} config
 */

mw.cx.tools.DictionaryTool = function CXDictionaryTool( translationUnit, translationView, config ) {
	config.order = 3;
	config.title = 'Dictionary';
	this.translationUnit = translationUnit;
	this.translationView = translationView;
	// Parent constructor
	mw.cx.tools.DictionaryTool.super.call( this, translationUnit, translationView, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.DictionaryTool, mw.cx.tools.TranslationTool );

mw.cx.tools.DictionaryTool.static.name = 'dictionary';

/**
 * @inheritDoc
 */
mw.cx.tools.DictionaryTool.prototype.getActions = function () {
	return [];
};

mw.cx.tools.DictionaryTool.prototype.getContent = function () {
	return 'Word meaning';
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.DictionaryTool );
