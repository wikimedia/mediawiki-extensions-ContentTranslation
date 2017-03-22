/**
 * Formatter Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.FormatterTool = function CXFormatterTool( model, config ) {
	config.order = 1;
	config.title = 'Formatter';
	mw.cx.tools.FormatterTool.super.call( this, model, config );

	this.selection = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.FormatterTool, mw.cx.tools.TranslationTool );

mw.cx.tools.FormatterTool.static.name = 'formatter';

/**
 * @inheritDoc
 */
mw.cx.tools.FormatterTool.prototype.getActions = function () {
	var toolFactory, toolGroupFactory, toolbar;

  // Create the toolbar
	toolFactory = new OO.ui.ToolFactory();
	toolGroupFactory = new OO.ui.ToolGroupFactory();
	// Define the tools that we're going to place in our toolbar

	// Create a class inheriting from OO.ui.Tool
	function UndoTool() {
		UndoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( UndoTool, OO.ui.Tool );
	UndoTool.static.name = 'undo';
	UndoTool.static.icon = 'undo';
	UndoTool.prototype.onUpdateState = function () {};
	toolFactory.register( UndoTool );

	function RedoTool() {
		RedoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( RedoTool, OO.ui.Tool );
	RedoTool.static.name = 'redo';
	RedoTool.static.icon = 'redo';
	RedoTool.prototype.onUpdateState = function () {};
	toolFactory.register( RedoTool );

	function BoldTool() {
		RedoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( BoldTool, OO.ui.Tool );
	BoldTool.static.name = 'bold';
	BoldTool.static.icon = 'bold';
	BoldTool.prototype.onUpdateState = function () {};
	toolFactory.register( BoldTool );

	function ItalicTool() {
		RedoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( ItalicTool, OO.ui.Tool );
	ItalicTool.static.name = 'italic';
	ItalicTool.static.icon = 'italic';
	ItalicTool.prototype.onUpdateState = function () {};
	toolFactory.register( ItalicTool );

	function ListBulletTool() {
		RedoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( ListBulletTool, OO.ui.Tool );
	ListBulletTool.static.name = 'listBullet';
	ListBulletTool.static.icon = 'listBullet';
	ListBulletTool.prototype.onUpdateState = function () {};
	toolFactory.register( ListBulletTool );

	function ListNumberedTool() {
		RedoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( ListNumberedTool, OO.ui.Tool );
	ListNumberedTool.static.name = 'listNumbered';
	ListNumberedTool.static.icon = 'listNumbered';
	ListNumberedTool.prototype.onUpdateState = function () {};
	toolFactory.register( ListNumberedTool );

	toolbar = new OO.ui.Toolbar( toolFactory, toolGroupFactory );
	// Finally define which tools and in what order appear in the toolbar. Each tool may only be
	// used once (but not all defined tools must be used).
	toolbar.setup( [
		{
			type: 'bar',
			include: [ 'undo', 'redo' ]
		},
		{
			type: 'bar',
			include: [ 'bold', 'italic' ]
		},
		{
			type: 'bar',
			include: [ 'listBullet', 'listNumbered' ]
		}
	] );
	return [ toolbar ];
};

/**
 * Text selection handler
 * @param {Selection} selectionObj Selection object
 */
mw.cx.tools.FormatterTool.prototype.onSelect = function ( selectionObj ) {
	this.selection = selectionObj;
};

mw.cx.tools.FormatterTool.prototype.getContent = function () {
	return '';
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.FormatterTool );
