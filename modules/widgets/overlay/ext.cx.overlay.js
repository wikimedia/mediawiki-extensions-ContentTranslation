/*!
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';
	mw.cx.widgets = mw.cx.widgets || {};

	/**
	 * An overlay UI for the page.
	 * @param {Element} element
	 * @param {Object} options
	 */
	function CXOverlay( element, options ) {
		this.$container = $( element || 'body' );
		this.options = $.extend( {}, $.fn.cxoverlay.defaults, options );
		this.$overlay = null;
		this.init();
	}

	CXOverlay.prototype.init = function () {
		if ( !this.$container ) {
			this.$container = $( 'body' );
		}
		this.$overlay = $( '<div>' ).addClass( 'cx-overlay' );

		if ( this.$container.find( '.cx-overlay' ).length ) {
			return true;
		}

		if ( this.options.showLoading ) {
			this.$overlay.append( mw.cx.widgets.spinner() );
		}

		if ( this.options.fullscreen ) {
			this.$overlay
				.addClass( 'cx-overlay-fullscreen' );
		}

		if ( this.options.closeOnClick ) {
			this.$overlay
				.addClass( 'cx-overlay--clickable' )
				.click( this.options.closeOnClick );
		}

		if ( this.options.classes ) {
			this.$overlay.addClass( this.options.classes.join( ' ' ) );
		}

		this.$container
			.css( 'position', 'relative' )
			.append( this.$overlay );
	};

	CXOverlay.prototype.show = function () {
		this.init();
		// If the page scrolls, prevent scroll temporary.
		this.$container.addClass( 'cx-noscroll' );
	};

	CXOverlay.prototype.hide = function () {
		// Remove completely from DOM to avoid appearing in published pages.
		this.$container.find( '.cx-overlay' ).remove();
		this.$container.removeClass( 'cx-noscroll' );
	};

	mw.cx.widgets.Overlay = CXOverlay;

	$.fn.cxoverlay = function ( option ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxoverlay' ),
				options = typeof option === 'object' && option;

			if ( !data ) {
				$this.data( 'cxoverlay', ( data = new mw.cx.widgets.Overlay( this, options ) ) );
			}

			if ( typeof option === 'string' ) {
				data[ option ]();
			}
		} );
	};

	$.fn.cxoverlay.defaults = {
		fullscreen: true,
		closeOnClick: false,
		showLoading: false
	};
}( jQuery, mediaWiki ) );
