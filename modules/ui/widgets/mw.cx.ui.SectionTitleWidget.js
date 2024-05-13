'use strict';

/**
 * Section title widget. This is the header for source and translation columns.
 * It is editable (contenteditable) for translation and readonly for source section title.
 *
 * @class
 * @extends OO.ui.MultilineTextInputWidget
 * @mixes ve.ce.CXLintableNode
 * @param {mw.cx.dm.SectionTitleModel} model
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.SectionTitleWidget = function ( model, config ) {
	// Configuration initialization
	config = $.extend( config, {
		classes: [ 'cx-pagetitle cx-sectiontitle' ],
		type: 'text',
		autosize: true
	} );

	this.model = model;

	// Parent constructor
	mw.cx.ui.SectionTitleWidget.super.call( this, config );

	// Mixin constructor
	ve.ce.CXLintableNode.call( this );

	this.validTitle = null;

	// Events
	$( this.getElementWindow() ).on(
		'resize',
		OO.ui.throttle( this.onWindowResize.bind( this ), 300 )
	);

	this.getFocusableElement().off( 'focus' ).on( 'focus', this.emit.bind( this, 'focus' ) );
	$( document )
		.off( 'blur', '.cx-sectiontitle' )
		.on( 'blur', '.cx-sectiontitle', this.emit.bind( this, 'blur' ) );
	this.connect( this, {
		change: OO.ui.debounce( this.validateTitle.bind( this ), 300 )
	} );
};

/* Setup */

OO.inheritClass( mw.cx.ui.SectionTitleWidget, OO.ui.MultilineTextInputWidget );
OO.mixinClass( mw.cx.ui.SectionTitleWidget, ve.ce.CXLintableNode );

/* Methods */

/**
 * @return {mw.cx.dm.SectionTitleModel}
 */
mw.cx.ui.SectionTitleWidget.prototype.getModel = function () {
	return this.model;
};

/**
 * @inheritdoc
 */
mw.cx.ui.SectionTitleWidget.prototype.getFocusableElement = function () {
	return this.$tabIndexed;
};

/**
 * @inheritdoc
 */
mw.cx.ui.SectionTitleWidget.prototype.blursEditingSurface = function () {
	return true;
};

mw.cx.ui.SectionTitleWidget.prototype.validateTitle = function ( value ) {
	// Empty array in param resolves all issues with the title
	this.model.resolveTranslationIssues( [] );

	if ( value === '' ) {
		this.model.addTranslationIssues( [ this.getEmptyTitleError() ] );
	}
};

mw.cx.ui.SectionTitleWidget.prototype.getEmptyTitleError = function () {
	return {
		name: 'empty-title',
		message: mw.message( 'cx-tools-linter-empty-title-message' ), // TODO: Fix this message
		messageInfo: {
			title: mw.msg( 'cx-tools-linter-empty-title' ), // TODO: Fix this message
			type: 'error'
		}
	};
};

/**
 * Handle key press events. Disable enter key presses.
 *
 * @private
 * @param {jQuery.Event} e Key press event
 * @fires enter If enter key is pressed and input is not multiline
 * @return {boolean|undefined}
 */
mw.cx.ui.SectionTitleWidget.prototype.onKeyPress = function ( e ) {
	if ( e.which === OO.ui.Keys.ENTER ) {
		this.emit( 'enter', e );
		return false;
	}
};

/**
 * Window resize handler
 */
mw.cx.ui.SectionTitleWidget.prototype.onWindowResize = function () {
	// We need to trick the parent adjustSize() method not to exit early
	// because it checks if input string has changed by comparing with
	// cache value. If there was no limitation here, we would just
	// register adjustSize() method as window resize handler.
	this.valCache = null;
	this.adjustSize();
};
