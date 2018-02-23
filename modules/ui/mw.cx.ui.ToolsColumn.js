'use strict';

/**
 * Tools column
 *
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.ToolsColumn = function ( config ) {
	this.config = config;
	this.feedback = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-feedback-link' ),
		icon: 'speechBubbles',
		href: '//www.mediawiki.org/wiki/Talk:Content_translation',
		target: '_blank',
		framed: false,
		classes: [ 'cx-feedback-link' ],
		flags: [ 'progressive' ]
	} );

	this.editingToolbar = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-editing-toolbar-container' ],
		expanded: false,
		framed: false,
		padded: false
	} );

	this.toolContainer = new OO.ui.StackLayout( {
		continuous: true,
		classes: [ 'cx-column-tools-container' ],
		expanded: false,
		scrollable: false,
		padded: false,
		items: [ this.editingToolbar ]
	} );
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column', 'cx-column-tools' ],
		expanded: false,
		scrollable: false,
		padded: false,
		items: [ this.toolContainer, this.feedback ]
	} );
	this.translation = null;
	// Parent constructor
	mw.cx.ui.ToolsColumn.super.call( this, this.config );
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

/**
 * Set the translation data model
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.ToolsColumn.prototype.setTranslation = function ( translation ) {
	this.translation = translation;
};

/**
 * Show the instructions card when translation is loaded.
 */
mw.cx.ui.ToolsColumn.prototype.showInstructions = function () {
	var instructions = mw.cx.tools.translationToolFactory.create(
		'instructions', this, this.config
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
		this.toolContainer.addItems( [ tools[ i ].getCard() ] );
	}
};

/**
 * Show a single tool in tools container.
 * Avoid duplicates by checking if the tool is already in the container.
 *
 * @param {mw.cx.tools.TranslationTool} tool The translation tool instance
 */
mw.cx.ui.ToolsColumn.prototype.showTool = function ( tool ) {
	if ( !this.toolContainer.findItemsFromData( tool.getData() ).length ) {
		this.toolContainer.addItems( [ tool.getCard() ] );
	}
};

/**
 * Hide this given tool
 * @param {mw.cx.tools.TranslationTool} tool The translation tool instance
 */
mw.cx.ui.ToolsColumn.prototype.hideTool = function ( tool ) {
	var items = this.toolContainer.findItemsFromData( tool.getData() );
	this.toolContainer.removeItems( items );
};

/**
 * Hide all tools shown in the tools container
 */
mw.cx.ui.ToolsColumn.prototype.hideAllTools = function () {
	this.toolContainer.clearItems();
};

mw.cx.ui.ToolsColumn.prototype.listen = function () {
	$( window ).on( 'scroll resize', OO.ui.throttle( this.onWindowScroll.bind( this ), 100 ) );
};

mw.cx.ui.ToolsColumn.prototype.onWindowScroll = function () {
	var scrollTop = $( window ).scrollTop();
	if ( scrollTop > 50 ) {
		this.$element.addClass( 'sticky' );
	} else {
		this.$element.removeClass( 'sticky' );
	}
};
