'use strict';

/**
 * TranslationView Header
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} translationUnitModel
 * @param {mw.cx.ui.TranslationView} view
 * @param {Object} config
 */
mw.cx.ui.TranslationUnit = function TranslationUnit( translationUnitModel, view, config ) {
	this.siteMapper = config.siteMapper;
	this.config = config;
	// Mixin constructor
	OO.EventEmitter.call( this );
	// Configuration initialization
	this.view = view;
	this.translated = false;
	this.translationUnits = [];
	this.translationUnitModel = translationUnitModel;
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
	var self = this;
	// Events
	this.$sourceSection.on( 'mouseenter', $.proxy( this.onMouseOver, this ) );
	this.$translationSection.on( 'mouseenter', $.proxy( this.onMouseOver, this ) );

	this.$sourceSection.on( 'mouseleave', $.proxy( this.onMouseLeave, this ) );
	this.$translationSection.on( 'mouseleave', $.proxy( this.onMouseLeave, this ) );

	this.$sourceSection.on( 'click', $.proxy( this.onClick, this ) );
	this.$translationSection.on( 'click', $.proxy( this.onClick, this ) );

	this.$translationSection.on( 'input', function() {
		self.emit( 'change' );
	} );
};

mw.cx.ui.TranslationUnit.prototype.onMouseOver = function () {
	this.highlight();
};

mw.cx.ui.TranslationUnit.prototype.onMouseLeave = function () {
	this.removeHighlight();
};

mw.cx.ui.TranslationUnit.prototype.focus = function () {
	this.onFocus();
};

mw.cx.ui.TranslationUnit.prototype.showTools = function () {
	this.view.columns.ToolsColumn.showTools( this );
};

mw.cx.ui.TranslationUnit.prototype.getTools = function () {
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
			this.translationUnitModel,
			this.view,
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
	this.showTools();

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
