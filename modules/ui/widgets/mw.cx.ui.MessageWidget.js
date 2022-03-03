/**
 * CX Message widget (dismissible banners)
 *
 * @class
 * @extends OO.ui.MessageWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {mw.Message|string} [message] Main message.
 * @cfg {mw.Message|string} [details] Additional details.
 * @cfg {OO.ui.ButtonWidget[]} [buttons] Array of additional buttons.
 */
mw.cx.ui.MessageWidget = function CXMessageWidget( config ) {
	// Configuration initialization
	config = $.extend( {
		showClose: true
	}, config );

	config.label = config.label || this.composeMessage( config.message, config.details );

	// Parent constructor
	mw.cx.ui.MessageWidget.super.call( this, config );

	// Initialization
	this.$element.addClass( 'cx-message-widget' );

	this.addButtons( config.buttons );
};

/* Setup */

OO.inheritClass( mw.cx.ui.MessageWidget, OO.ui.MessageWidget );

/* Methods */

mw.cx.ui.MessageWidget.prototype.composeMessage = function ( message, details ) {
	var $message, $details;
	$message = $( '<span>' ).addClass( 'cx-message-widget-message' );
	$details = $( '<span>' ).addClass( 'cx-message-widget-details' );
	if ( message instanceof mw.Message ) {
		$message.append( message.parseDom() );
	} else {
		$message.text( message );
	}
	if ( details ) {
		if ( details instanceof mw.Message ) {
			$details.append( details.parseDom() );
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
