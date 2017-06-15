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
	config.order = 20;
	config.title = 'Formatter';
	mw.cx.tools.FormatterTool.super.call( this, model, config );
	this.toolbar = null;
	this.selection = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.FormatterTool, mw.cx.tools.TranslationTool );

mw.cx.tools.FormatterTool.static.name = 'formatter';

// TODO: All of this formatting tools can be moved to separate files.
// Create a class inheriting from OO.ui.Tool
mw.cx.tools.UndoTool = function () {
	mw.cx.tools.UndoTool.super.apply( this, arguments );
};

OO.inheritClass( mw.cx.tools.UndoTool, OO.ui.Tool );
mw.cx.tools.UndoTool.static.name = 'undo';
mw.cx.tools.UndoTool.static.icon = 'undo';
mw.cx.tools.UndoTool.static.commandName = 'undo';
mw.cx.tools.UndoTool.prototype.onSelect = function () {
	this.toolbar.emit( 'undo' );
	this.toolbar.emit( 'updateState' );
};

mw.cx.tools.UndoTool.prototype.onUpdateState = function () {
	this.setActive( false );
};

mw.cx.tools.RedoTool = function () {
	mw.cx.tools.RedoTool.super.apply( this, arguments );
};
OO.inheritClass( mw.cx.tools.RedoTool, OO.ui.Tool );
mw.cx.tools.RedoTool.static.name = 'redo';
mw.cx.tools.RedoTool.static.icon = 'redo';

/**
 * Command to execute when tool is selected.
 *
 * @static
 * @property {string|null}
 * @inheritable
 */
mw.cx.tools.RedoTool.static.commandName = 'redo';

mw.cx.tools.RedoTool.prototype.onSelect = function () {
	this.toolbar.emit( 'redo' );
	this.toolbar.emit( 'updateState' );
};

mw.cx.tools.RedoTool.prototype.onUpdateState = function () {
	this.setActive( false );
};

mw.cx.tools.BoldTool = function () {
	mw.cx.tools.BoldTool.super.apply( this, arguments );
};
OO.inheritClass( mw.cx.tools.BoldTool, OO.ui.Tool );
mw.cx.tools.BoldTool.static.name = 'bold';
mw.cx.tools.BoldTool.static.icon = 'bold';
mw.cx.tools.BoldTool.static.commandName = 'bold';

mw.cx.tools.BoldTool.prototype.onSelect = function () {
	this.toolbar.emit( 'bold' );
	this.toolbar.emit( 'updateState' );
};

mw.cx.tools.BoldTool.prototype.onUpdateState = function () {
	this.setActive(
		mw.cx.tools.FormatterTool.static.getCommandState( mw.cx.tools.BoldTool.static.commandName )
	);
};

mw.cx.tools.ItalicTool = function () {
	mw.cx.tools.ItalicTool.super.apply( this, arguments );
};
OO.inheritClass( mw.cx.tools.ItalicTool, OO.ui.Tool );
mw.cx.tools.ItalicTool.static.name = 'italic';
mw.cx.tools.ItalicTool.static.icon = 'italic';
mw.cx.tools.ItalicTool.static.commandName = 'italic';

mw.cx.tools.ItalicTool.prototype.onSelect = function () {
	this.toolbar.emit( 'italic' );
	this.toolbar.emit( 'updateState' );
};

mw.cx.tools.ItalicTool.prototype.onUpdateState = function () {
	this.setActive(
		mw.cx.tools.FormatterTool.static.getCommandState( mw.cx.tools.ItalicTool.static.commandName )
	);
};

mw.cx.tools.BulletListTool = function () {
	mw.cx.tools.BulletListTool.super.apply( this, arguments );
};
OO.inheritClass( mw.cx.tools.BulletListTool, OO.ui.Tool );
mw.cx.tools.BulletListTool.static.name = 'listBullet';
mw.cx.tools.BulletListTool.static.icon = 'listBullet';
mw.cx.tools.BulletListTool.static.commandName = 'insertUnorderedList';

mw.cx.tools.BulletListTool.prototype.onSelect = function () {
	this.toolbar.emit( 'unOrderedList' );
	this.toolbar.emit( 'updateState' );
};

mw.cx.tools.BulletListTool.prototype.onUpdateState = function () {
	this.setActive(
		mw.cx.tools.FormatterTool.static.getCommandState( mw.cx.tools.BulletListTool.static.commandName )
	);
};

mw.cx.tools.NumberedListTool = function () {
	mw.cx.tools.NumberedListTool.super.apply( this, arguments );
};

OO.inheritClass( mw.cx.tools.NumberedListTool, OO.ui.Tool );

mw.cx.tools.NumberedListTool.static.name = 'listNumbered';
mw.cx.tools.NumberedListTool.static.icon = 'listNumbered';
mw.cx.tools.NumberedListTool.static.commandName = 'insertOrderedList';

mw.cx.tools.NumberedListTool.prototype.onSelect = function () {
	this.toolbar.emit( 'orderedList' );
	this.toolbar.emit( 'updateState' );
};
mw.cx.tools.NumberedListTool.prototype.onUpdateState = function () {
	this.setActive(
		mw.cx.tools.FormatterTool.static.getCommandState( mw.cx.tools.NumberedListTool.static.commandName )
	);
};

mw.cx.tools.LinkTool = function () {
	mw.cx.tools.LinkTool.super.apply( this, arguments );
};
OO.inheritClass( mw.cx.tools.LinkTool, OO.ui.Tool );
mw.cx.tools.LinkTool.static.name = 'link';
mw.cx.tools.LinkTool.static.icon = 'link';
mw.cx.tools.LinkTool.static.commandName = 'createLink';

mw.cx.tools.LinkTool.prototype.onSelect = function () {
	this.toolbar.emit( 'link' );
};
mw.cx.tools.LinkTool.prototype.onUpdateState = function () {
	this.setActive( false );
};

mw.cx.tools.FormatToolBar = function () {
	mw.cx.tools.FormatToolBar.super.apply( this, arguments );
};

mw.cx.tools.FormatToolBar.prototype.getToolAccelerator = function ( toolName ) {
	// XXX: This does not work.
	var acceleratorMap = {
		undo: 'CTRL+z',
		redo: 'CTRL+shift+z',
		bold: 'CTRL+b',
		italic: 'CTRL+i',
		link: 'CTRL+k'
	};
	return acceleratorMap[ toolName ];
};

OO.inheritClass( mw.cx.tools.FormatToolBar, OO.ui.Toolbar );

/**
 * Handle context changes on the surface.
 *
 * @fires updateState
 */
mw.cx.tools.FormatToolBar.prototype.onContextChange = function () {
	this.emit( 'updateState' );
};

/**
 * @inheritDoc
 */
mw.cx.tools.FormatterTool.prototype.getActions = function () {
	var toolFactory, toolGroupFactory;

	// Create the toolbar
	toolFactory = new OO.ui.ToolFactory();
	toolGroupFactory = new OO.ui.ToolGroupFactory();
	// Define the tools that we're going to place in our toolbar

	toolFactory.register( mw.cx.tools.UndoTool );
	toolFactory.register( mw.cx.tools.RedoTool );
	toolFactory.register( mw.cx.tools.BoldTool );
	toolFactory.register( mw.cx.tools.ItalicTool );
	toolFactory.register( mw.cx.tools.BulletListTool );
	toolFactory.register( mw.cx.tools.NumberedListTool );
	toolFactory.register( mw.cx.tools.LinkTool );

	this.toolbar = new mw.cx.tools.FormatToolBar( toolFactory, toolGroupFactory );
	// Finally define which tools and in what order appear in the toolbar. Each tool may only be
	// used once (but not all defined tools must be used).
	this.toolbar.setup( [
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
		},
		{
			type: 'bar',
			include: [ 'link' ]
		}
	] );
	this.toolbar.connect( this, {
		undo: 'undo',
		redo: 'redo',
		bold: 'bold',
		italic: 'italic',
		orderedList: 'orderedList',
		unOrderedList: 'unOrderedList',
		link: 'newLink'
	} );
	this.toolbar.initialize();
	this.toolbar.emit( 'updateState' );
	return [ this.toolbar ];
};

/**
 * Text selection handler
 * @param {Selection} selectionObj Selection object
 */
mw.cx.tools.FormatterTool.prototype.onSelect = function ( selectionObj ) {
	var selection;

	selection = selectionObj.toString();
	if ( selection && selection.length < 1000 ) {
		this.selectionObj = selectionObj;
		this.selection = selection;
	}
	mw.cx.selection.save( 'translation', this.selectionObj );
	this.refresh();
	this.toolbar.emit( 'updateState' );
};

/**
 * Get command state for the given command
 *
 * @param {string} command Example: bold, italic.
 * @return {boolean} whether the selection has the command applied or not.
 */
mw.cx.tools.FormatterTool.static.getCommandState = function ( command ) {
	// queryCommandEnabled returns a Boolean value that indicates whether a specified
	// command can be successfully executed using execCommand, or queried
	// given the current state of the document.
	// https://docs.webplatform.org/wiki/dom/TextRange/queryCommandEnabled
	// Also see list of contenteditable browser inconsistencies
	// https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md
	return document.queryCommandEnabled( command ) && document.queryCommandState( command );
};

mw.cx.tools.FormatterTool.prototype.undo = function () {
	this.emit( 'undo' );
};

mw.cx.tools.FormatterTool.prototype.redo = function () {
	this.emit( 'redo' );
};

mw.cx.tools.FormatterTool.prototype.newLink = function () {
	mw.cx.selection.save( 'translation' );
	this.emit( 'newlink' );
};

/**
 * Make the selection bold
 */
mw.cx.tools.FormatterTool.prototype.bold = function () {
	mw.cx.selection.restore( 'translation' );
	document.execCommand( 'bold' );
};

/**
 * Make the selection italic
 */
mw.cx.tools.FormatterTool.prototype.italic = function () {
	mw.cx.selection.restore( 'translation' );
	document.execCommand( 'italic' );
};

/**
 * Make the selection orderedList
 */
mw.cx.tools.FormatterTool.prototype.orderedList = function () {
	try {
		mw.cx.selection.restore( 'translation' );
		document.execCommand( 'insertOrderedList' );
	} catch ( e ) {
		mw.log.error( 'Native insertOrderedList command failed.' + e );
	}
};

/**
 * Make the selection unOrderedList
 */
mw.cx.tools.FormatterTool.prototype.unOrderedList = function () {
	try {
		mw.cx.selection.restore( 'translation' );
		document.execCommand( 'insertUnorderedList' );
	} catch ( e ) {
		mw.log.error( 'Native insertUnorderedList command failed.' + e );
	}
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.FormatterTool );
