/**
 * Formatter Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.ui.TranslationUnit} ui
 * @param {Object} config
 */
mw.cx.tools.FormatterTool = function CXFormatterTool( ui, config ) {
	config.order = 1;
	config.title = 'Formatter';
	// Parent constructor
	mw.cx.tools.FormatterTool.super.call( this, ui, config );
	this.ui.connect( this, {
		select: 'onSelect'
	} );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.FormatterTool, mw.cx.tools.TranslationTool );

mw.cx.tools.FormatterTool.static.name = 'formatter';

/**
 * @inheritDoc
 */
mw.cx.tools.FormatterTool.prototype.getActions = function () {
	var formatterButtonGroup, undoButton, redoButton, boldButton, italicButton, orderedlistButton, unOrderedlistButton;
	undoButton = new OO.ui.ButtonWidget( {
		icon: 'undo'
	} );
	redoButton = new OO.ui.ButtonWidget( {
		icon: 'redo'
	} );
	boldButton = new OO.ui.ButtonWidget( {
		icon: 'bold'
	} );
	italicButton = new OO.ui.ButtonWidget( {
		icon: 'italic'
	} );
	orderedlistButton = new OO.ui.ButtonWidget( {
		icon: 'listBullet'
	} );
	unOrderedlistButton = new OO.ui.ButtonWidget( {
		icon: 'listNumbered'
	} );
	formatterButtonGroup = new OO.ui.ButtonGroupWidget( {
		items: [ undoButton, redoButton, boldButton, italicButton, orderedlistButton, unOrderedlistButton ]
	} );
	return [ formatterButtonGroup ];
};

/**
 * Text selection handler
 * @param {string} selection Selected text
 */
mw.cx.tools.FormatterTool.prototype.onSelect = function ( selection ) {
	// TODO: We need the selection object rather than selection string here
	if ( selection ) {
		this.showTool();
	}
};

mw.cx.tools.FormatterTool.prototype.getContent = function () {
	return '';
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.FormatterTool );
