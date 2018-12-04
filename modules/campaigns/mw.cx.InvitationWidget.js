'use strict';

/**
 * Creates a mw.cx.InvitationWidget object.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @param {Object} config Configuration object
 * @cfg {string} dismissOptionName Property name, used to store info that user has
 * accepted/rejected the invitation already.
 * @cfg {string} label Explanatory text which invites user into a campaign.
 * @cfg {string} acceptLabel Label for button used to accept invitation.
 * @cfg {string} [rejectLabel] Label for button used to politely reject invitation.
 * @cfg {string} [icon] Icon displayed next to the explanatory text.
 * @cfg {Function} [acceptAction] Method performed when user clicks on accept button.
 * @cfg {string} [classes] Array of classes to apply on this widget.
 * @cfg {Object} [parentConfig] Configuration object passed to OOUI parent.
 */
mw.cx.InvitationWidget = function InvitationWidget( config ) {
	var classes = config.parentConfig && config.parentConfig.classes || [],
		parentConfig = $.extend( config.parentConfig, {
			continuous: true,
			classes: [ 'mw-cx-InvitationWidget' ].concat( classes ),
			expanded: false,
			scrollable: false
		} );

	// Parent constructor
	mw.cx.InvitationWidget.super.call( this, parentConfig );

	this.dismissOptionName = config.dismissOptionName;

	if ( mw.user.options.get( this.dismissOptionName ) ) {
		// If user accepted/rejected the invitation already
		return;
	}

	this.icon = new OO.ui.IconWidget( {
		icon: config.icon,
		flags: [ 'progressive' ],
		classes: [ 'mw-cx-InvitationWidget-icon' ]
	} );

	this.label = new OO.ui.LabelWidget( {
		label: config.label,
		classes: [ 'mw-cx-InvitationWidget-label' ]
	} );

	this.acceptButton = new OO.ui.ButtonWidget( {
		flags: [ 'progressive' ],
		label: config.acceptLabel,
		classes: [ 'mw-cx-InvitationWidget-accept-button' ]
	} );
	this.acceptButton.connect( this, { click: 'dismissInvitation' } );
	if ( typeof config.acceptAction === 'function' ) {
		this.acceptButton.on( 'click', config.acceptAction );
	}

	this.rejectButton = new OO.ui.ButtonWidget( {
		label: config.rejectLabel || mw.msg( 'cx-campaign-no-thanks' ),
		classes: [ 'mw-cx-InvitationWidget-reject-button' ]
	} );
	this.rejectButton.connect( this, { click: 'dismissInvitation' } );

	this.header = new OO.ui.PanelLayout( {
		classes: [ 'mw-cx-InvitationWidget-header' ],
		expanded: false,
		framed: false,
		padded: false
	} );
	this.header.$element.append( this.icon.$element, this.label.$element );

	this.actions = new OO.ui.PanelLayout( {
		classes: [ 'mw-cx-InvitationWidget-actions' ],
		expanded: false,
		framed: false,
		padded: false
	} );
	this.actions.$element.append( this.acceptButton.$element, this.rejectButton.$element );

	this.addItems( [ this.header, this.actions ] );

	this.listen();
};

/* Inheritance */

OO.inheritClass( mw.cx.InvitationWidget, OO.ui.StackLayout );

/* Methods */

mw.cx.InvitationWidget.prototype.dismissInvitation = function () {
	this.disableActionButtons( true );

	this.persistUserPreference( 'globalpreferences' ).fail( function ( error ) {
		if ( error !== 'unknown_action' ) {
			this.disableActionButtons( false );
			return;
		}

		this.persistUserPreference( 'options' ).fail( this.disableActionButtons.bind( this, false ) );
	}.bind( this ) );
};

mw.cx.InvitationWidget.prototype.persistUserPreference = function ( action ) {
	return new mw.Api().postWithToken( 'csrf', {
		assert: 'user',
		formatversion: 2,
		action: action,
		optionname: this.dismissOptionName,
		optionvalue: 1
	} ).done( this.hide.bind( this ) );
};

mw.cx.InvitationWidget.prototype.disableActionButtons = function ( disable ) {
	this.acceptButton.setDisabled( disable );
	this.rejectButton.setDisabled( disable );
};

mw.cx.InvitationWidget.prototype.listen = function () {
	mw.hook( 'mw.cx.new.version.toggled' ).add( this.hide.bind( this ) );
};

mw.cx.InvitationWidget.prototype.hide = function () {
	this.clearItems().toggle( false );
};
