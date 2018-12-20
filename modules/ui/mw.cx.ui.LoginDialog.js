'use strict';

/**
 * Login dialog, which does not close on button click, but when user starts new session.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends OO.ui.MessageDialog
 *
 * @param {Object} [config] Parent class configuration options
 */
mw.cx.ui.LoginDialog = function () {
	this.intervalTimer = null;
	this.bindedListener = null;

	// Parent constructor
	mw.cx.ui.LoginDialog.parent.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.LoginDialog, OO.ui.MessageDialog );

/* Static Properties */

/**
 * @static
 * @inheritdoc
 */
mw.cx.ui.LoginDialog.static.name = 'login';

/**
 * @static
 * @inheritdoc
 */
mw.cx.ui.LoginDialog.static.title = OO.ui.deferMsg( 'cx-lost-session' );

/**
 * @static
 * @inheritdoc
 */
mw.cx.ui.LoginDialog.static.message = OO.ui.deferMsg( 'cx-lost-session-draft' );

/**
 * @static
 * @inheritdoc
 */
mw.cx.ui.LoginDialog.static.actions = [
	{ action: 'login', label: OO.ui.deferMsg( 'login' ), flags: [ 'primary' ] }
];

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ui.LoginDialog.prototype.getActionProcess = function ( action ) {
	this.removeExistingListeners();
	// We need to store method which uses Function.prototype.bind() inside variable,
	// so that we can detach it later by using removeEventListener()
	this.bindedListener = this.onDocumentVisibilityChange.bind( this, action );

	return new OO.ui.Process( function () {
		// Open user login special page inside a new tab
		window.open( mw.util.getUrl( 'Special:UserLogin' ), '_blank' );
		// Check login status immediately when user returns to this tab
		document.addEventListener( 'visibilitychange', this.bindedListener );
		// Check periodically if user logged back in
		this.intervalTimer = setInterval( this.closeIfLoggedIn.bind( this, action ), 5000 );
	}, this );
};

/**
 * @param {string} action Symbolic name of action
 */
mw.cx.ui.LoginDialog.prototype.onDocumentVisibilityChange = function ( action ) {
	if ( document.visibilityState === 'visible' ) {
		this.closeIfLoggedIn( action );
	}
};

/**
 * @param {string} action Symbolic name of action
 * @return {jQuery.Promise}
 */
mw.cx.ui.LoginDialog.prototype.closeIfLoggedIn = function ( action ) {
	return new mw.Api()
		.get( { assert: 'user' } )
		.then( function () {
			this.close( { action: action } );
			this.removeExistingListeners();
		}.bind( this ) );
};

/**
 * Remove 'visibilitychange' listener and stop checking periodically if user logged back in.
 */
mw.cx.ui.LoginDialog.prototype.removeExistingListeners = function () {
	clearInterval( this.intervalTimer );
	document.removeEventListener( 'visibilitychange', this.bindedListener );
};
