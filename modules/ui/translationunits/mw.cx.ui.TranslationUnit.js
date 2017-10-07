'use strict';

/**
 * TranslationView Header
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.TranslationUnit = function MwCxUiTranslationUnit( model, toolFactory, config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );

	this.siteMapper = config.siteMapper;
	this.config = config;
	// Configuration initialization
	this.translated = false;
	this.translationUnits = [];
	this.model = model;
	this.toolFactory = toolFactory;
	// Parent translation unit
	this.parentTranslationUnit = null;
	this.subTranslationUnitMap = {};
	this.tools = this.buildTools();
	this.connect( this, {
		change: 'onChange'
	} );
};

/* Setup */
OO.mixinClass( mw.cx.ui.TranslationUnit, OO.EventEmitter );

// Subclasses can define tools they want to show on different events
mw.cx.ui.TranslationUnit.static.tools = {};

/**
 * Initialize the translation unit UI. When a translation unit is created,
 * this method will be called. All initialization code can go here.
 */
mw.cx.ui.TranslationUnit.prototype.init = function () {
	if ( !this.model.getSectionId() ) {
		throw Error( '[CX] Invalid source document' );
	}
	this.$sourceSection = this.getSourceSection();
	this.$translationSection = this.getTranslationSection();
	this.adapt();
	this.listen();
};

/**
 * Adapt this translation unit to target language
 */
mw.cx.ui.TranslationUnit.prototype.adapt = function () {};

mw.cx.ui.TranslationUnit.prototype.getPlaceholderSection = function () {
	return $( '<section>' )
		.addClass( 'cx-placeholder' )
		.text( mw.msg( 'cx-translation-add-translation' ) );
};

mw.cx.ui.TranslationUnit.prototype.listen = function () {
	if ( !this.$translationSection.length ) {
		mw.log.warn( '[CX] Missing translation section for ' + this.toString() );
	}
	if ( !this.$sourceSection.length ) {
		mw.log.warn( '[CX] Missing source section for ' + this.toString() );
	}
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
	this.$translationSection.on( 'input', function () {
		this.emit( 'change' );
	}.bind( this ) );
};

mw.cx.ui.TranslationUnit.prototype.onMouseUp = function ( event ) {
	var selectionObj;

	// Control or alt key press events can be ignored
	if ( event.metaKey || event.ctrlKey && !event.altKey ) {
		return;
	}

	selectionObj = window.getSelection();
	if ( selectionObj && selectionObj.toString().trim() ) {
		this.emit( 'select', selectionObj );
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

mw.cx.ui.TranslationUnit.prototype.focus = function () {
	this.getTranslationSection().focus();
	this.emit( 'focus' );
};

/**
 * @private
 * @return {mw.cx.TranslationTools[]}
 */
mw.cx.ui.TranslationUnit.prototype.buildTools = function () {
	var tools, specs;

	tools = [];
	specs = this.constructor.static.tools || [];

	$.each( specs, function ( toolName, spec ) {
		var tool, events;

		events = spec.triggers || spec;
		tool = this.toolFactory.create( toolName, this.model, this.config );
		tools.push( tool );

		if ( spec.events ) {
			tool.connect( this, spec.events );
		}

		// Let the translation view know when we want to show a tool
		$.each( events, function ( index, eventName ) {
			this.on( eventName, 'emit', [ 'showTool', tool ], this );
		}.bind( this ) );
	}.bind( this ) );

	return tools;
};

mw.cx.ui.TranslationUnit.prototype.getTools = function () {
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

	if ( !event.isDefaultPrevented() ) {
		// This is the original translation unit where click was received.
		this.emit( 'activate', this );
	}

	// For all handlers for bubbled event, mark the event as prevented.
	event.preventDefault();

	// Other internal stuff
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
	this.model.emit( 'change' );
};

mw.cx.ui.TranslationUnit.prototype.remove = function () {
	this.model.remove();
	// TODO: This is not a contenteditable friendly remove operation and because of
	// that undo/redo wont work. Use a contenteditable element removal by selecting
	// the range for this element and remove
	this.$translationSection.remove();
	this.emit( 'change' );
};

mw.cx.ui.TranslationUnit.prototype.setParentTranslationUnit = function ( translationUnit ) {
	this.parentTranslationUnit = translationUnit;
	this.init();
};

/**
 * Get the source section
 * @return {jQuery} The source section
 */
mw.cx.ui.TranslationUnit.prototype.getSourceSection = function () {
	return $( this.model.sourceDocument );
};

/**
 * Get the translation section
 * @return {jQuery} The translation section
 */
mw.cx.ui.TranslationUnit.prototype.getTranslationSection = function () {
	var $section;

	if ( this.model.targetDocument ) {
		$section = this.parentTranslationUnit.$translationSection.find( '[id="' + this.model.getTranslationSectionId() + '"]' );
	}
	if ( !$section || !$section.length ) {
		// Fallback to copy of source section
		$section = this.parentTranslationUnit.$translationSection.find( '[id="' + this.model.getSectionId() + '"]' );
	}
	return $section;
};

/**
 * Build sub translation units.
 * We might require to add and remove translation units as they get added or removed.
 * For example, links can get added to section and the corresponding translation unit
 * should reflect here.
 *
 * @param {mw.cx.dm.TranslationUnit} model
 */
mw.cx.ui.TranslationUnit.prototype.buildSubTranslationUnits = function ( model ) {
	var submodels, name, translationUnit, i;

	submodels = model.getTranslationUnits();

	if ( !submodels ) {
		return;
	}

	for ( i = 0; i < submodels.length; i++ ) {
		name = submodels[ i ].constructor.static.name;

		translationUnit = this.subTranslationUnitMap[ submodels[ i ].getId() ] ||
			mw.cx.ui.translationUnitFactory.create(
				name,
				submodels[ i ],
				this.toolFactory,
				this.config
			);
		// Keep a map of DOM ids and translation units
		this.subTranslationUnitMap[ submodels[ i ].getId() ] = translationUnit;
		translationUnit.setParentTranslationUnit( this );
		this.emit( 'subunit', translationUnit );
	}
};

mw.cx.ui.TranslationUnit.prototype.toString = function () {
	return this.constructor.name + '::' + this.model.getId();
};
