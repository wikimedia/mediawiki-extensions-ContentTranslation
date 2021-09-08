'use strict';

/**
 * Tools column
 *
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.ToolsColumn = function ( config ) {
	this.config = config;

	this.editingToolbarContainer = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-editing-toolbar-container', 'cx-card' ],
		expanded: false,
		framed: false,
		padded: false
	} );

	this.mtToolbarContainer = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-mt-toolbar-container', 'cx-card' ],
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
		items: [ this.editingToolbarContainer, this.mtToolbarContainer ]
	} );

	this.issueCard = mw.cx.tools.translationToolFactory.create( 'issues' );

	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column', 'cx-column-tools' ],
		expanded: false,
		scrollable: false,
		padded: false,
		items: [ this.toolContainer ]
	} );
	this.translation = null;
	// Parent constructor
	mw.cx.ui.ToolsColumn.super.call( this, this.config );
	this.init();
};

/* Setup */

OO.inheritClass( mw.cx.ui.ToolsColumn, OO.ui.StackLayout );

mw.cx.ui.ToolsColumn.prototype.init = function () {
	mw.loader.using( [
		'mw.cx.tools.InstructionsTool'
	], function () {
		mw.log( '[CX] Initializing translation tool system' );
		this.showInstructions();
	}.bind( this ) );

};

/**
 * Set the translation data model
 *
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
 * Show translation issues.
 *
 * @param {Mixed[]} nodesWithIssues IDs of nodes with issues
 */
mw.cx.ui.ToolsColumn.prototype.showIssues = function ( nodesWithIssues ) {
	this.issueCard.showIssues( nodesWithIssues );
	this.showTool( this.issueCard );
};

mw.cx.ui.ToolsColumn.prototype.hideIssues = function () {
	if ( this.issueCard ) {
		this.hideTool( this.issueCard );
	}
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
 *
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
