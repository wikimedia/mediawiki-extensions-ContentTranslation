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
	UndoTool.prototype.onSelect = this.undo.bind( this );
	UndoTool.prototype.onUpdateState = function () {};
	toolFactory.register( UndoTool );

	function RedoTool() {
		RedoTool.parent.apply( this, arguments );
	}
	OO.inheritClass( RedoTool, OO.ui.Tool );
	RedoTool.static.name = 'redo';
	RedoTool.static.icon = 'redo';
	RedoTool.prototype.onSelect = this.redo.bind( this );
	RedoTool.prototype.onUpdateState = function () {};
	toolFactory.register( RedoTool );

	function BoldTool() {
		BoldTool.parent.apply( this, arguments );
	}
	OO.inheritClass( BoldTool, OO.ui.Tool );
	BoldTool.static.name = 'bold';
	BoldTool.static.icon = 'bold';
	BoldTool.prototype.onSelect = this.bold.bind( this );
	BoldTool.prototype.onUpdateState = function () {};
	toolFactory.register( BoldTool );

	function ItalicTool() {
		ItalicTool.parent.apply( this, arguments );
	}
	OO.inheritClass( ItalicTool, OO.ui.Tool );
	ItalicTool.static.name = 'italic';
	ItalicTool.static.icon = 'italic';
	ItalicTool.prototype.onSelect = this.italic.bind( this );
	ItalicTool.prototype.onUpdateState = function () {};
	toolFactory.register( ItalicTool );

	function ListBulletTool() {
		ListBulletTool.parent.apply( this, arguments );
	}
	OO.inheritClass( ListBulletTool, OO.ui.Tool );
	ListBulletTool.static.name = 'listBullet';
	ListBulletTool.static.icon = 'listBullet';
	ListBulletTool.prototype.onSelect = this.unOrderedList.bind( this );
	ListBulletTool.prototype.onUpdateState = function () {};
	toolFactory.register( ListBulletTool );

	function ListNumberedTool() {
		ListNumberedTool.parent.apply( this, arguments );
	}
	OO.inheritClass( ListNumberedTool, OO.ui.Tool );
	ListNumberedTool.static.name = 'listNumbered';
	ListNumberedTool.static.icon = 'listNumbered';
	ListNumberedTool.prototype.onSelect = this.orderedList.bind( this );
	ListNumberedTool.prototype.onUpdateState = function () {};
	toolFactory.register( ListNumberedTool );
	function CXFormatToolBar() {
		CXFormatToolBar.parent.apply( this, arguments );
	}
	CXFormatToolBar.prototype.getToolAccelerator = function ( toolName ) {
		var acceleratorMap = {
			undo: 'Ctrl + Z',
			redo: 'Ctrl + Shift + Z',
			bold: 'Ctrl + B',
			italic: 'Ctrl + I'
		};
		return acceleratorMap[ toolName ];
	};
	OO.inheritClass( CXFormatToolBar, OO.ui.Toolbar );
	toolbar = new CXFormatToolBar( toolFactory, toolGroupFactory );
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
	var selection;

	selection = selectionObj.toString();
	if ( selection && selection.length < 1000 ) {
		this.selectionObj = selectionObj;
		this.selection = selection;
	}
	mw.cx.selection.save( 'format', this.selectionObj );
	this.refresh();
};

mw.cx.tools.FormatterTool.prototype.getContent = function () {
	return '';
};

mw.cx.tools.FormatterTool.prototype.undo = function () {
	this.emit( 'undo' );
};

mw.cx.tools.FormatterTool.prototype.redo = function () {
	this.emit( 'redo' );
};

/**
 * Make the selection bold
 */
mw.cx.tools.FormatterTool.prototype.bold = function () {
	mw.cx.selection.restore( 'format' );
	document.execCommand( 'bold' );
};

/**
 * Make the selection italic
 */
mw.cx.tools.FormatterTool.prototype.italic = function () {
	mw.cx.selection.restore( 'format' );
	document.execCommand( 'italic' );
};

/**
 * Make the selection orderedList
 */
mw.cx.tools.FormatterTool.prototype.orderedList = function () {
	try {
		mw.cx.selection.restore( 'format' );
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
		mw.cx.selection.restore( 'format' );
		document.execCommand( 'insertUnorderedList' );
	} catch ( e ) {
		mw.log.error( 'Native insertUnorderedList command failed.' + e );
	}
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.FormatterTool );
