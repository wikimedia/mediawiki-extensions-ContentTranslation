/**
 * Translation tool
 *
 * @class
 * @abstract
 * @constructor
 * @param {mw.cx.ui.TranslationUnit} ui
 * @param {Object} config
 * @cfg {string} title The title to be displayed for the tool card. If missing, header wont be displayed
 * @cfg {string} language The language name to be displayed in header of tool card
 * @cfg {number} order The position of the card in tools column. Cards will be arranged in this order.
 */
mw.cx.tools.TranslationTool = function CXTranslationTool( ui, config ) {
	this.card = null;
	this.title = config.title;
	this.language = config.language;
	this.order = config.order;
	this.ui = ui;
	this.model = ui.model;
	this.translationView = ui.view;
	this.actions = [];
};

/**
 * Build the tool card widget associated with the current translation unit
 * @return {mw.cx.widgets.TranslationToolWidget} The tool card
 */
mw.cx.tools.TranslationTool.prototype.getCard = function() {
	this.card = this.card || new mw.cx.widgets.TranslationToolWidget( this, {
		title: this.title,
		language: this.language,
		name: this.constructor.static.name
	} );
	return this.card;
};

/**
 * Get all possible actions with this tool widget
 * @method
 * @return {OO.ui.Element[]} Array of OOJS UI Elements
 */
mw.cx.tools.TranslationTool.prototype.getActions = null;

/**
 * Get the tools information content.
 * @method
 * @return {string|jQuery} Content as HTML or jQuery
 */
mw.cx.tools.TranslationTool.prototype.getContent = null;

mw.cx.tools.TranslationTool.prototype.getData = function () {
	return this.constructor.static.name + '::' + this.model.getId();
};

mw.cx.tools.TranslationTool.prototype.showTool = function () {
	this.ui.view.columns.ToolsColumn.showTool( this );
};

/**
 * Refresh the card rendering.
 */
mw.cx.tools.TranslationTool.prototype.refresh = function () {
	var card = this.getCard();
	if ( card ) {
		card.render();
	}
};

mw.cx.tools.TranslationTool.prototype.destroy = function () {
	if ( this.card ) {
		this.card.$element.remove();
		delete this.card;
	}
};
