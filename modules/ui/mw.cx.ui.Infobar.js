'use strict';

/**
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.Infobar = function ( config ) {
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		expanded: false,
		$content: this.getContent(),
		classes: [ 'cx-header-infobar' ]
	} );
	// Parent constructor
	mw.cx.ui.Infobar.parent.call( this, this.config );
	this.listen();
};

/* Setup */

OO.inheritClass( mw.cx.ui.Infobar, OO.ui.PanelLayout );

mw.cx.ui.Infobar.prototype.getContent = function () {
	this.messageLayout = new OO.ui.FieldsetLayout();
	return this.messageLayout.$element;
};

mw.cx.ui.Infobar.prototype.listen = function () {
	mw.hook( 'mw.cx.error' ).add( $.proxy( this.showError, this ) );
	mw.hook( 'mw.cx.warning' ).add( $.proxy( this.showWarning, this ) );
	mw.hook( 'mw.cx.success' ).add( $.proxy( this.showSuccess, this ) );
	mw.hook( 'mw.cx.error.anonuser' ).add( $.proxy( this.showLoginMessage, this ) );
	mw.hook( 'mw.cx.translation.title.change' ).add( $.proxy( this.clearMessages, this ) );
};

mw.cx.ui.Infobar.prototype.showSuccess = function ( message, details ) {
	this.showMessage( 'success', message, details );
};

mw.cx.ui.Infobar.prototype.showError = function ( message, details ) {
	this.showMessage( 'error', message, details );
};

mw.cx.ui.Infobar.prototype.showWarning = function ( message, details ) {
	this.showMessage( 'warning', message, details );
};

/**
 * Shows a message in the info bar.
 *
 * @param {string} type Message class.
 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
 * @param {string} details The details of error in HTML.
 */
mw.cx.ui.Infobar.prototype.showMessage = function ( type, message, details ) {
	var messageWidget;

	messageWidget = new mw.cx.widgets.MessageWidget( {
		message: message,
		details: details,
		type: type
	} );
	this.clearMessages();
	this.messageLayout.addItems( [ messageWidget ] );
};

/**
 * Show login message.
 */
mw.cx.ui.Infobar.prototype.showLoginMessage = function () {
	var currentUri, returnToQueryString, loginUriHref;

	currentUri = new mw.Uri();
	delete currentUri.query.title;
	returnToQueryString = currentUri.getQueryString();

	loginUriHref = mw.util.getUrl( 'Special:UserLogin', {
		returnto: 'Special:ContentTranslation',
		returntoquery: returnToQueryString
	} );

	this.showError( mw.message( 'cx-special-login-error', loginUriHref ) );

	// Do not show the columns
	// TODO: use events
	$( '.cx-widget__columns' ).remove();
};

mw.cx.ui.Infobar.prototype.clearMessages = function () {
	this.messageLayout.clearItems();
};
