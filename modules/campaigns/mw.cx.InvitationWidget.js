'use strict';

/**
 * Creates a mw.cx.InvitationWidget object.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @param {Object} config Configuration object
 * @cfg {string} storageKey Key used for storing user's answer in local storage.
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

	this.storageKey = config.storageKey;

	// String value, null if no value exists, or false if localStorage is not available.
	if ( mw.storage.get( this.storageKey ) !== null ) {
		// If user rejected the invitation
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
	this.acceptButton.$button.prop( 'target', '_blank' );

	this.rejectButton = new OO.ui.ButtonWidget( {
		label: config.rejectLabel || mw.msg( 'cx-campaign-no-thanks' ),
		classes: [ 'mw-cx-InvitationWidget-reject-button' ]
	} );
	this.registerRejectAction( this, 'reject' );

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
};

/* Inheritance */

OO.inheritClass( mw.cx.InvitationWidget, OO.ui.StackLayout );

/* Methods */

mw.cx.InvitationWidget.prototype.registerRejectAction = function ( context, action ) {
	this.rejectButton.connect( context, { click: action } );
};

mw.cx.InvitationWidget.prototype.setUrl = function ( url ) {
	if ( this.acceptButton ) {
		this.acceptButton.setHref( url );
	}
};

mw.cx.InvitationWidget.prototype.reject = function () {
	this.clearItems().toggle( false );
	mw.storage.set( this.storageKey, 'false' );
};
