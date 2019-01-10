'use strict';

/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends OO.ui.MessageDialog
 *
 * @param {Object} [config] Configuration options
 */
mw.cx.NewVersionMessage = function NewVersionMessage() {
	// Parent constructor
	mw.cx.NewVersionMessage.parent.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( mw.cx.NewVersionMessage, OO.ui.MessageDialog );

/* Static Properties */

/**
 * @static
 * @inheritdoc
 */
mw.cx.NewVersionMessage.static.name = 'newversionmessage';

/**
 * @static
 * @inheritdoc
 */
mw.cx.NewVersionMessage.static.size = 'medium';

/**
 * @static
 * @inheritdoc
 */
mw.cx.NewVersionMessage.static.title = OO.ui.deferMsg( 'cx-campaign-new-version-message-title' );

/**
 * @static
 * @inheritdoc
 */
mw.cx.NewVersionMessage.static.message = OO.ui.deferMsg( 'cx-campaign-new-version-message' );

/**
 * @static
 * @inheritdoc
 */
mw.cx.NewVersionMessage.static.actions = [
	{ action: 'ok', label: mw.msg( 'cx-campaign-ok-got-it' ), flags: [ 'primary' ] }
];

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.NewVersionMessage.prototype.initialize = function () {
	// Parent method
	mw.cx.NewVersionMessage.parent.prototype.initialize.call( this );

	this.title.$element.addClass( 'mw-cx-newVersionMessage-title' );
	this.text.$element.addClass( 'mw-cx-newVersionMessage-text' );

	this.icon = new OO.ui.IconWidget( {
		classes: [ 'mw-cx-newVersionMessage-icon' ],
		icon: 'logoWikimediaDiscovery'
	} );

	this.secondaryMessage = new OO.ui.LabelWidget( {
		classes: [ 'mw-cx-newVersionMessage-secondary' ],
		label: mw.msg( 'cx-campaign-new-version-sub-message' )
	} );

	this.text.$element.append( this.secondaryMessage.$element );
	this.text.$element.prepend( this.icon.$element );
};

/**
 * @inheritdoc
 */
mw.cx.NewVersionMessage.prototype.getActionProcess = function ( action ) {
	if ( action === 'ok' ) {
		return new OO.ui.Process( this.closePermanently.bind( this, action ), this );
	}

	return mw.cx.NewVersionMessage.parent.prototype.getActionProcess.call( this, action );
};

/**
 * Close the dialog and set the preference, so that dialog doesn't show again.
 *
 * @param {string} action Symbolic name of action
 */
mw.cx.NewVersionMessage.prototype.closePermanently = function ( action ) {
	this.persistUserPreference( 'globalpreferences' ).fail( function ( error ) {
		if ( error !== 'unknown_action' ) {
			return;
		}

		this.persistUserPreference( 'options' );
	}.bind( this ) );

	this.close( { action: action } );
};

/**
 * Save the information that user dismissed the dialog, in order to show it only once.
 *
 * @param {string} action
 * @return {jQuery.promise}
 */
mw.cx.NewVersionMessage.prototype.persistUserPreference = function ( action ) {
	return new mw.Api().postWithToken( 'csrf', {
		assert: 'user',
		formatversion: 2,
		action: action,
		optionname: 'cx-seen-new-version-message',
		optionvalue: 1
	} );
};
