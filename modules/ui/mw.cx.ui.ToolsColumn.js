'use strict';

/**
 * Tools column
 *
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.ToolsColumn = function ( config ) {
	this.config = config;
	this.progressBar = new mw.cx.widgets.ProgressBarWidget( config );
	this.toolContainer = new OO.ui.StackLayout( {
		continuous: true,
		classes: [ 'cx-column--tools-container' ],
		expanded: false,
		padded: true
	} );
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column', 'cx-column--tools' ],
		expanded: false,
		scrollable: false,
		padded: false,
		items: [ this.progressBar, this.toolContainer ]
	} );
	this.translation = null;
	// Parent constructor
	mw.cx.ui.ToolsColumn.parent.call( this, this.config );
	this.init();
};

/* Setup */

OO.inheritClass( mw.cx.ui.ToolsColumn, OO.ui.StackLayout );

mw.cx.ui.ToolsColumn.prototype.init = function () {
	mw.loader.using( 'mw.cx.tools', function () {
		mw.log( '[CX] Initializing translation tool system' );
		this.showInstructions();
	}.bind( this ) );
	this.listen();
};

mw.cx.ui.ToolsColumn.prototype.listen = function () {
	$( window ).on( 'scroll resize', this.onWindowScroll.bind( this ) );
};

/**
 * Set the translation data model
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.ToolsColumn.prototype.setTranslation = function( translation ) {
	this.translation = translation;
};

/**
 * Show the instructions card when translation is loaded.
 */
mw.cx.ui.ToolsColumn.prototype.showInstructions = function () {
	var instructions = mw.cx.tools.translationToolFactory.create(
		'instructions', null, this, this.config
	);

	this.showTool( instructions );
};

/**
 * Show the tools associated with the translationUnit.
 *
 * @param {mw.cx.ui.TranslationUnit} translationUnit
 */
mw.cx.ui.ToolsColumn.prototype.showTools = function ( translationUnit ) {
	var i, tools;

	tools = translationUnit.getTools();
	for ( i = 0; i < tools.length; i++ ) {
		this.toolContainer.addItems( [ tools[ i ].getCard() ], tools[ i ].order );
	}
};

/**
 * Show a single tool in tools container
 * @param {mw.cx.tools.TranslationTool} tool The translation tool instance
 * @param {integer} [index] Optional index - position in the items
 */
mw.cx.ui.ToolsColumn.prototype.showTool = function ( tool, index ) {
	this.toolContainer.addItems( [ tool.getCard() ], index || tool.order );
};

/**
 * Hide all tools shown in the tools container
 */
mw.cx.ui.ToolsColumn.prototype.hideAllTools = function () {
	this.toolContainer.clearItems();
};

mw.cx.ui.ToolsColumn.prototype.onWindowScroll = function () {
	var scrollTop = $( window ).scrollTop();

	if ( scrollTop > 0 ) {
		this.$element.addClass( 'sticky' );
	} else {
		this.$element.removeClass( 'sticky' );
	}
};
