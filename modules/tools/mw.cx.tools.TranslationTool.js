/**
 * Translation tool
 *
 * @class
 * @abstract
 * @constructor
 * @param {mw.cx.ui.TranslationUnit} translationUnit
 * @param {Object} config
 * @cfg {string} title The title to be displayed for the tool card. If missing, header wont be displayed
 * @cfg {string} language The language name to be displayed in header of tool card
 * @cfg {number} order The position of the card in tools column. Cards will be arranged in this order.
 */
mw.cx.tools.TranslationTool = function CXTranslationTool( translationUnit, config ) {
	this.card = null;
	this.title = config.title;
	this.language = config.language;
	this.order = config.order;
	this.translationUnitUIModel = translationUnit;
	this.translationUnitDataModel = translationUnit.translationUnitModel;
	this.translationView = translationUnit.view;
	this.actions = [];
};

/**
 * Build the tool card widget associated with the current translation unit
 * @return {mw.cx.widgets.TranslationToolWidget} The tool card
 */
mw.cx.tools.TranslationTool.prototype.getCard = function() {
	this.card = this.card || new mw.cx.widgets.TranslationToolWidget( {
		title: this.title,
		language: this.language,
		name: this.constructor.static.name,
		toolContent: this.getContent(),
		actions: this.getActions()
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

mw.cx.tools.TranslationTool.prototype.destroy = function () {
	if ( this.card ) {
		this.card.$element.remove();
		delete this.card;
	}
};
