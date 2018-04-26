'use strict';

/**
 * Page title widget. This is the header for source and translation columns.
 * It is editable (contenteditable) for translation and readonly for source page.
 * Supports validation of values.
 * @class
 * @extends OO.ui.MultilineTextInputWidget
 * @param {Object} [config] Configuration object
 */
mw.cx.widgets.PageTitleWidget = function ( config ) {
	// Configuration initialization
	config = $.extend( config, {
		classes: [ 'cx-pagetitle' ],
		type: 'text',
		autosize: true
	} );

	// Parent constructor
	mw.cx.widgets.PageTitleWidget.super.call( this, config );

	this.setValidation( this.validate );

	// Events
	$( this.getElementWindow() ).on(
		'resize',
		OO.ui.throttle( this.onWindowResize.bind( this ), 300 )
	);
};

/* Setup */

OO.inheritClass( mw.cx.widgets.PageTitleWidget, OO.ui.MultilineTextInputWidget );

mw.cx.widgets.PageTitleWidget.prototype.validate = function ( value ) {
	if ( value === undefined || value === null || value === '' ) {
		return false;
	}
	// TODO: Add more title validation here
	return true;
};

/**
 * Handle key press events. Disable enter key presses.
 *
 * @private
 * @param {jQuery.Event} e Key press event
 * @fires enter If enter key is pressed and input is not multiline
 * @return {boolean}
 */
mw.cx.widgets.PageTitleWidget.prototype.onKeyPress = function ( e ) {
	if ( e.which === OO.ui.Keys.ENTER ) {
		this.emit( 'enter', e );
		return false;
	}
};

/**
 * Window resize handler
 */
mw.cx.widgets.PageTitleWidget.prototype.onWindowResize = function () {
	// We need to trick the parent adjustSize() method not to exit early
	// because it checks if input string has changed by comparing with
	// cache value. If there was no limitation here, we would just
	// register adjustSize() method as window resize handler.
	this.valCache = null;
	this.adjustSize();
};
