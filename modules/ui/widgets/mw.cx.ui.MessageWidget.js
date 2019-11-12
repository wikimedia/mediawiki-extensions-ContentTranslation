/**
 * CX Message widget (dismissible banners)
 *
 * @class
 * @extends OO.ui.MessageWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {mediawiki.Message|string} [message] Main message.
 * @cfg {mediawiki.Message|string} [details] Additional details.
 * @cfg {OO.ui.ButtonWidget[]} [buttons] Array of additional buttons.
 */
mw.cx.ui.MessageWidget = function CXMessageWidget( config ) {
	// Configuration initialization
	config = config || {};

	config.label = config.label || this.composeMessage( config.message, config.details );

	// Parent constructor
	mw.cx.ui.MessageWidget.super.call( this, config );

	// Events
	this.closeButton = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'close',
		classes: [ 'cx-message-widget-close' ],
		tabIndex: -1
	} ).connect( this, { click: 'onCloseClick' } );

	// Initialization
	this.$element
		.addClass( 'cx-message-widget' )
		.append( this.closeButton.$element );

	this.addButtons( config.buttons );
};

/* Setup */

OO.inheritClass( mw.cx.ui.MessageWidget, OO.ui.MessageWidget );

/* Methods */

/**
 * Handle close icon clicks
 */
mw.cx.ui.MessageWidget.prototype.onCloseClick = function () {
	this.$element.remove();
};

mw.cx.ui.MessageWidget.prototype.composeMessage = function ( message, details ) {
	var $message, $details;
	$message = $( '<span>' ).addClass( 'cx-message-widget-message' );
	$details = $( '<span>' ).addClass( 'cx-message-widget-details' );
	if ( message instanceof mw.Message ) {
		$message.html( message.parse() );
	} else {
		$message.text( message );
	}
	if ( details ) {
		if ( details instanceof mw.Message ) {
			$details.html( details.parse() );
		} else {
			$details.text( details );
		}
	}

	return $message.add( $details );
};

/**
 * @param {OO.ui.ButtonWidget[]} buttons Array of additional buttons.
 */
mw.cx.ui.MessageWidget.prototype.addButtons = function ( buttons ) {
	var $buttons = $( '<div>' ).addClass( 'cx-message-widget-buttons' );

	if ( !buttons ) {
		return;
	}

	buttons.forEach( function ( button ) {
		$buttons.append( button.$element );
	} );

	this.$element.append( $buttons );
};
