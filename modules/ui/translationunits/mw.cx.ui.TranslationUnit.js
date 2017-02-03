'use strict';

/**
 * TranslationView Header
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.ui.TranslationView} view
 * @param {Object} config
 */
mw.cx.ui.TranslationUnit = function TranslationUnit( model, view, config ) {
	this.siteMapper = config.siteMapper;
	this.config = config;
	// Mixin constructor
	OO.EventEmitter.call( this );
	// Configuration initialization
	this.view = view;
	this.translated = false;
	this.translationUnits = [];
	this.model = model;
	// Parent translation unit
	this.parentTranslationUnit = null;
	this.tools = null;
	this.connect( this, {
		change: 'onChange'
	} );
};

/* Setup */
OO.mixinClass( mw.cx.ui.TranslationUnit, OO.EventEmitter );

mw.cx.ui.TranslationUnit.prototype.getPlaceholderSection = function () {
	return $( '<section>' )
		.addClass( 'cx-placeholder' )
		.text( mw.msg( 'cx-translation-add-translation' ) );
};

mw.cx.ui.TranslationUnit.prototype.listen = function () {
	// Events
	this.$sourceSection.on( 'mouseenter', this.onMouseOver.bind( this ) );
	this.$translationSection.on( 'mouseenter', this.onMouseOver.bind( this ) );

	this.$sourceSection.on( 'mouseleave', this.onMouseLeave.bind( this ) );
	this.$translationSection.on( 'mouseleave', this.onMouseLeave.bind( this ) );

	this.$sourceSection.on( 'click', this.onClick.bind( this ) );
	this.$translationSection.on( 'click', this.onClick.bind( this ) );
	this.$translationSection.on( 'keyup mouseup',
		OO.ui.debounce( this.onMouseUp.bind( this ), 250 )
	);
	this.$translationSection.on( 'input', function() {
		this.emit( 'change' );
	}.bind( this ) );
	this.buildTools();
};

mw.cx.ui.TranslationUnit.prototype.onMouseUp = function ( event ) {
	var selection;

	// Control or alt key press events can be ignored
	if ( event.metaKey || event.ctrlKey && !event.altKey ) {
		return;
	}

	selection = window.getSelection().toString();
	if ( selection.trim() ) {
		this.emit( 'select', selection );
	} else {
		this.emit( 'focus' );
	}
};

mw.cx.ui.TranslationUnit.prototype.onMouseOver = function () {
	this.highlight();
};

mw.cx.ui.TranslationUnit.prototype.onMouseLeave = function () {
	this.removeHighlight();
};

mw.cx.ui.TranslationUnit.prototype.onFocus = function () {
	this.emit( 'focus' );
};

mw.cx.ui.TranslationUnit.prototype.buildTools = function () {
	var i, toolNames;

	if ( this.tools ) {
		return this.tools;
	}

	this.tools = [];
	toolNames = this.constructor.static.tools || [];
	for ( i = 0; i < toolNames.length; i++ )	{
		if ( !mw.cx.tools.translationToolFactory.lookup( toolNames[ i ] ) )	{
			// Could not find a tool for the given name
			continue;
		}
		this.tools.push( mw.cx.tools.translationToolFactory.create(
			toolNames[ i ],
			this, // The UI model
			this.config
		) );
	}

	return this.tools;
};

mw.cx.ui.TranslationUnit.prototype.highlight = function () {
	this.$sourceSection.addClass( this.constructor.static.highlightClass );
	this.$translationSection.addClass( this.constructor.static.highlightClass );
};

mw.cx.ui.TranslationUnit.prototype.removeHighlight = function () {
	this.$sourceSection.removeClass( this.constructor.static.highlightClass );
	this.$translationSection.removeClass( this.constructor.static.highlightClass );
};

/**
 * Click handler. Event bubbles.
 *
 * @param {Event} event Click event
 * @return {boolean} True - Explicitly stating that the event bubbles.
 */
mw.cx.ui.TranslationUnit.prototype.onClick = function ( event ) {
	this.highlight();

	if ( !event.isDefaultPrevented() )	{
		// This is the original translation unit where click was recieved.
		this.view.columns.ToolsColumn.hideAllTools();
	}
	// For all handlers for bubbled event, mark the event as prevented.
	event.preventDefault();

	// Show tools for this translation unit
	this.emit( 'click' );

	return true;
};

mw.cx.ui.TranslationUnit.prototype.setContent = null;

mw.cx.ui.TranslationUnit.prototype.makeEditable = function ( editable ) {
	this.$translationSection.attr( 'contenteditable', !!editable );
};

mw.cx.ui.TranslationUnit.prototype.removePlaceholder = function () {
	this.$translationSection.removeClass( 'cx-placeholder' );
};

mw.cx.ui.TranslationUnit.prototype.isEditable = function () {
	return true;
};

mw.cx.ui.TranslationUnit.prototype.onChange = function () {
	this.view.emit( 'change' );
};

mw.cx.ui.TranslationUnit.prototype.remove = function () {
	this.model.remove();
	// TODO: This is not a contenteditable friendly remove operation and because of
	// that undo/redo wont work. Use a contenteditable element removal by selecting
	// the range for this element and remove
	this.$translationSection.remove();
	this.view.emit( 'change' );
};

mw.cx.ui.TranslationUnit.prototype.onParentTranslationStarted = function () {};

mw.cx.ui.TranslationUnit.prototype.setParentTranslationUnit = function ( translationUnit ) {
	this.parentTranslationUnit = translationUnit;
	this.parentTranslationUnit.connect( this, {
		translationStarted: 'onParentTranslationStarted'
	} );
};

mw.cx.ui.TranslationUnit.prototype.toString = function() {
	return this.constructor.name + '::' + this.constructor.static.name + '::' + this.sourceDocument.id;
};
