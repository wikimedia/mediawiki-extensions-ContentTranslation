'use strict';

/**
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.Infobar = function ( config ) {
	this.$infobar = null;
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		expanded: true,
		$content: this.getContent(),
		classes: [ 'cx-header__infobar' ]
	} );
	// Parent constructor
	mw.cx.ui.Infobar.parent.call( this, this.config );
	this.listen();
};

/* Setup */

OO.inheritClass( mw.cx.ui.Infobar, OO.ui.PanelLayout );

mw.cx.ui.Infobar.prototype.getContent = function () {
	this.$infobar = $( '<div>' )
		.addClass( 'cx-header__infobar' )
		.append( $( '<span>' ).addClass( 'text' ) )
		.append( $( '<span>' ).addClass( 'remove' ) )
		.append( $( '<div>' ).addClass( 'details' ) )
		.hide();
	return this.$infobar;
};

mw.cx.ui.Infobar.prototype.listen = function () {
	mw.hook( 'mw.cx.error' ).add( $.proxy( this.showError, this ) );
	mw.hook( 'mw.cx.warning' ).add( $.proxy( this.showWarning, this ) );
	mw.hook( 'mw.cx.success' ).add( $.proxy( this.showSuccess, this ) );
	mw.hook( 'mw.cx.error.anonuser' ).add( $.proxy( this.showLoginMessage, this ) );
	mw.hook( 'mw.cx.translation.title.change' ).add( $.proxy( this.clearMessages, this ) );

	// Click handler for remove icon in info bar.
	this.$infobar.on( 'click', '.remove', function () {
		$( this ).parent().hide();
	} );
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
 * For internal use. use showSuccess and showError instead.
 *
 * @param {string} type Message class.
 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
 * @param {string} details The details of error in HTML.
 */
mw.cx.ui.Infobar.prototype.showMessage = function ( type, message, details ) {
	if ( message instanceof mw.Message ) {
		this.$infobar.find( '.text' ).html( message.parse() );
	} else {
		this.$infobar.find( '.text' ).text( message );
	}
	if ( details ) {
		this.$infobar.find( '.details' ).html( details ).show();
	} else {
		this.$infobar.find( '.details' ).empty().hide();
	}
	this.clearMessages();
	this.$infobar.addClass( 'cx-' + type ).show();
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
	this.$infobar
		.removeClass( 'cx-success cx-error cx-warning' )
		.hide();
};
