/*!
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';
	mw.cx.widgets = mw.cx.widgets || {};

	/**
	 * An overlay UI for the page.
	 */
	function CXOverlay() {
		this.$overlay = null;
		this.init();
	}

	CXOverlay.prototype.init = function () {
		this.$overlay = $( '<div>' ).addClass( 'cx-overlay' );

		if ( !$( '.cx-overlay' ).length ) {
			$( 'body' ).append( this.$overlay );
		}
	};

	CXOverlay.prototype.show = function () {
		this.$overlay.show();

		// If the page scrolls, prevent scroll temporary.
		if ( document.body.scrollHeight > document.body.clientHeight ) {
			$( 'body' ).addClass( 'cx-noscroll' );
		}
	};

	CXOverlay.prototype.hide = function () {
		this.$overlay.hide();
		$( 'body' ).removeClass( 'cx-noscroll' );
	};

	mw.cx.widgets.overlay = CXOverlay;
}( jQuery, mediaWiki ) );
