'use strict';
/**
 * Creates a mw.cx.widgets.TranslationToolWidget object.
 *
 * @class
 * @extends OO.ui.PanelLayout
 *
 * @constructor
 * @param {Object} config Configuration options
 * @cfg {string} title The tool title
 */
mw.cx.widgets.TranslationToolWidget = function CXTranslationToolWidget( config ) {
	var i;

	config = $.extend( {}, config, {
		classes: [ 'cx-card', 'cx-card-' + config.name ],
		expanded: false,
		framed: true,
		padded: false
	} );

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

	if ( config.toolContent ) {
		this.$information.append( config.toolContent );
	}

	this.$actions = $( '<div>' )
		.addClass( 'cx-widget-translationtool-actions' );

	if ( !config.actions || config.actions.length === 0 ) {
		this.$actions.hide();
	} else {
		for ( i = 0; i < config.actions.length; i++ ) {
			this.$actions.append( config.actions[ i ].$element );
		}
	}

	this.$element.append( this.$header,	this.$information, this.$actions );
};

/* Inheritance */
OO.inheritClass( mw.cx.widgets.TranslationToolWidget, OO.ui.Widget );

mw.cx.widgets.TranslationToolWidget.prototype.setContent = function( content ) {
	this.$information.empty().append( content );
};
