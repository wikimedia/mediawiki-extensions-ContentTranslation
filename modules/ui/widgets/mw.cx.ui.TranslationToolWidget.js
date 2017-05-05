'use strict';
/**
 * Creates a mw.cx.widgets.TranslationToolWidget object.
 *
 * @class
 * @extends OO.ui.PanelLayout
 *
 * @constructor
 * @param {mw.cx.tool.TranslationTool} translationTool
 * @param {Object} config Configuration options
 * @cfg {string} title The tool title
 */
mw.cx.widgets.TranslationToolWidget = function CXTranslationToolWidget( translationTool, config ) {
	config = $.extend( {}, config, {
		classes: [ 'cx-card', 'cx-card-' + config.name ],
		expanded: false,
		framed: true,
		padded: false
	} );
	this.translationTool = translationTool;
	// Parent constructor
	mw.cx.widgets.TranslationToolWidget.parent.call( this, config );

	// Initialization
	this.$element.addClass( 'cx-widget-translationtool' );

	this.$title = $( '<div>' )
		.addClass( 'card__title' )
		.text( config.title || '' );
	this.$language = $( '<div>' )
		.addClass( 'card__title--language' )
		.text( $.uls.data.getAutonym( config.language ) || '' );
	this.$header = $( '<div>' )
			.addClass( 'cx-widget-translationtool-header' )
			.append( this.$title, this.$language );

	// It is not always possible to provide the toolContent at this point. The tools can update this widget
	this.$information = $( '<div>' )
		.addClass( 'cx-widget-translationtool-container' );

	this.$actions = $( '<div>' )
		.addClass( 'cx-widget-translationtool-actions' );

	this.$element.append( this.$header,	this.$information, this.$actions );
	// Set the display order in tools column
	this.$element.css( 'order', translationTool.order );
	this.render();
	this.listen();
};

/* Inheritance */
OO.inheritClass( mw.cx.widgets.TranslationToolWidget, OO.ui.Widget );

/**
 * Render the card content and actions if any
 */
mw.cx.widgets.TranslationToolWidget.prototype.render = function () {
	this.renderContent();
	this.renderActions();
	this.renderBackground();
};

mw.cx.widgets.TranslationToolWidget.prototype.listen = function () {
	this.translationTool.connect( this, {
		actionsChange: 'renderActions',
		contentChange: 'renderContent',
		backgroundChange: 'renderBackground'
	} );
};

mw.cx.widgets.TranslationToolWidget.prototype.renderContent = function () {
	this.setContent( this.translationTool.getContent() );
};

mw.cx.widgets.TranslationToolWidget.prototype.renderActions = function () {
	this.setActions( this.translationTool.getActions() );
};

mw.cx.widgets.TranslationToolWidget.prototype.renderBackground = function () {
	var bgImage = this.translationTool.getBackgroundImage();
	if ( bgImage ) {
		this.setBackgroundImage( bgImage );
	}
};

/**
 * Set the content of card
 * @param {jQuery|string|OO.ui.HtmlSnippet|Function|null} content Content nodes; text;
 *   a function that returns nodes or  text; or null for no content
 */
mw.cx.widgets.TranslationToolWidget.prototype.setContent = function ( content ) {
	this.$information.empty();

	content = typeof content === 'function' ? OO.ui.resolveMsg( content ) : content;
	content = content && content.$element ? content.$element : content;
	if (
		( typeof content === 'string' || content instanceof jQuery ) && content.length ||
		( content instanceof OO.ui.HtmlSnippet && content.toString().length )
	) {
		this.$information.append( content );
	}
};

/**
 * Set the action widgets for the card.
 * @param {OO.ui.Element[]} actions Array of action widgets
 */
mw.cx.widgets.TranslationToolWidget.prototype.setActions = function ( actions ) {
	var i;

	this.$actions.empty();
	if ( !actions || actions.length === 0 ) {
		this.$actions.hide();
	} else {
		for ( i = 0; i < actions.length; i++ ) {
			this.$actions.append( actions[ i ].$element );
		}
	}
};

/**
 * Set the background image for the card.
 * @param {string} imageUrl
 */
mw.cx.widgets.TranslationToolWidget.prototype.setBackgroundImage = function ( imageUrl ) {
	this.$element.css( 'background-image', 'url(' + imageUrl + ')' );
};
