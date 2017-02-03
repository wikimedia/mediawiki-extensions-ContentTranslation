/**
 * Dictionary Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.ui.TranslationUnit} ui
 * @param {Object} config
 */
mw.cx.tools.DictionaryTool = function CXDictionaryTool( ui, config ) {
	config.order = 3;
	config.title = 'Dictionary';
	// Parent constructor
	mw.cx.tools.DictionaryTool.super.call( this, ui, config );
	this.ui.connect( this, {
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

/**
 * Text selection handler
 * @param  {string} selection Selected text
 */
mw.cx.tools.DictionaryTool.prototype.onSelect = function ( selection ) {
	var selectionChanged = false;
	// TODO: Sanitize content
	if ( selection && selection.length < 1000 ) {
		if ( this.content && this.content !== selection ) {
			selectionChanged = true;
		}
		this.content = selection;
		this.showTool();
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
