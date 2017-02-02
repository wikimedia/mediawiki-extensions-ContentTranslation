/**
 * Dictionary Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.ui.TranslationUnit} translationUnit
 * @param {Object} config
 */
mw.cx.tools.DictionaryTool = function CXDictionaryTool( translationUnit, config ) {
	config.order = 3;
	config.title = 'Dictionary';
	this.translationUnit = translationUnit;
	// Parent constructor
	mw.cx.tools.DictionaryTool.super.call( this, translationUnit, config );
	this.translationUnitUIModel.connect( this, {
		select: 'onSelect'
	} );
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

mw.cx.tools.DictionaryTool.prototype.onSelect = function ( selection ) {
	this.content = selection;
	// TODO: Sanitize content
	if ( this.content && this.content.length < 1000 ) {
		this.showTool();
	}
};

mw.cx.tools.DictionaryTool.prototype.getContent = function () {
	return 'Word meaning for ' + this.content;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.DictionaryTool );
