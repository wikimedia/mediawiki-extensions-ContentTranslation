/**
 * Search tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.SearchTool = function CXSearchTool( model, config ) {
	config.order = 10;
	config.padded = false;
	this.searchTool = null;
	this.config = config;
	// Parent constructor
	mw.cx.tools.SearchTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.SearchTool, mw.cx.tools.TranslationTool );

mw.cx.tools.SearchTool.static.name = 'search';

/**
 * @inheritDoc
 */
mw.cx.tools.SearchTool.prototype.getActions = function () {
	return [];
};

/**
 * @inheritDoc
 */
mw.cx.tools.SearchTool.prototype.getContent = function () {
	this.searchTool = new OO.ui.SearchInputWidget( $.extend( this.config, {
		classes: [ 'cx-card--search__input' ],
		placeholder: mw.msg( 'cx-tools-searchbox-text' ),
		dir: $.uls.data.getDir( this.config.sourceLanguage ),
		tabIndex: 1,
		padded: false,
		type: 'search'
	} ) );
	return this.searchTool.$element;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.SearchTool );
