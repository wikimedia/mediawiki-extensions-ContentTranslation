/**
 * CX Message widget (dismissible banners)
 *
 * @class
 * @extends OO.ui.MessageWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @param {mw.Message|string} [config.message] Main message.
 * @param {mw.Message|string} [config.details] Additional details.
 * @param {OO.ui.ButtonWidget[]} [config.buttons] Array of additional buttons.
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
	const $message = $( '<span>' ).addClass( 'cx-message-widget-message' );
	const $details = $( '<span>' ).addClass( 'cx-message-widget-details' );
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
	const $buttons = $( '<div>' ).addClass( 'cx-message-widget-buttons' );

	if ( !buttons ) {
		return;
	}

	buttons.forEach( function ( button ) {
		$buttons.append( button.$element );
	} );

	this.$element.append( $buttons );
};
