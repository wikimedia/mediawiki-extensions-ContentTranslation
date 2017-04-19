/**
 * Dictionary Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.DictionaryTool = function CXDictionaryTool( model, config ) {
	config.order = 80;
	config.title = 'Dictionary';
	mw.cx.tools.DictionaryTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.DictionaryTool, mw.cx.tools.TranslationTool );

mw.cx.tools.DictionaryTool.static.name = 'dictionary';

/**
 * Text selection handler
 * @param {Selection} selectionObj Selection object
 */
mw.cx.tools.DictionaryTool.prototype.onSelect = function ( selectionObj ) {
	var selection, selectionChanged = false;

	// TODO: Sanitize content
	selection = selectionObj.toString();
	if ( selection && selection.length < 1000 ) {
		if ( this.content && this.content !== selection ) {
			selectionChanged = true;
		}
		this.content = selection;
	}
	if ( selectionChanged ) {
		this.refresh();
	}
};

mw.cx.tools.DictionaryTool.prototype.getContent = function () {
	return 'Word meaning for ' + this.content;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.DictionaryTool );
