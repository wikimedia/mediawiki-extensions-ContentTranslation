/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * ContentTranslationHeader
	 *
	 * @class
	 */
	function ContentTranslationHeader( element, options ) {
		this.$container = $( element );
		this.$publishButton = null;
		this.options = $.extend( true, {}, $.fn.cxHeader.defaults, options );
		this.init();
	}

	ContentTranslationHeader.prototype.init = function () {
		this.render();
		this.listen();
	};

	/**
	 * Enable/Disable the publish button based on progress of translation.
	 * @param {number} progress
	 * @param {number} mtPercentage
	 */
	ContentTranslationHeader.prototype.setPublishButtonState = function ( progress, mtPercentage ) {
		this.$publishButton.prop( 'disabled',
			parseInt( progress, 10 ) === 0 && parseInt( mtPercentage, 10 ) === 0 );
	};

	/**
	 * Show login message.
	 */
	ContentTranslationHeader.prototype.showLoginMessage = function () {
		var currentUri, returnToQueryString, loginUriHref;

		currentUri = new mw.Uri();
		delete currentUri.query.title;
		returnToQueryString = currentUri.getQueryString();

		loginUriHref = mw.util.getUrl( 'Special:UserLogin', {
			returnto: 'Special:ContentTranslation',
			returntoquery: returnToQueryString
		} );

		this.$infoBar
			.show()
			.removeClass( 'cx-success' )
			.addClass( 'cx-error' )
			.find( '.text' )
			.html( mw.message( 'cx-special-login-error', loginUriHref ).parse() );

		this.$userName.text( mw.msg( 'login' ) ).prop( 'href', loginUriHref );
		// Do not show the columns
		$( '.cx-widget__columns' ).remove();
	};

	/**
	 * Show a success message in the info bar.
	 * @param {string} message
	 */
	ContentTranslationHeader.prototype.showSuccess = function ( message ) {
		this.$infoBar
			.show()
			.removeClass( 'cx-error' )
			.addClass( 'cx-success' )
			.find( '.text' )
			.html( message );
	};

	/**
	 * Show an error message in the info bar.
	 * @param {string} message
	 */
	ContentTranslationHeader.prototype.showError = function ( message ) {
		this.$infoBar
			.show()
			.removeClass( 'cx-success' )
			.addClass( 'cx-error' )
			.find( '.text' )
			.text( message );
	};

	ContentTranslationHeader.prototype.listen = function () {
		this.$container.find( '.publish' ).on( 'click', function () {
			mw.hook( 'mw.cx.publish' ).fire();
		} );

		// Click handler for remove icon in info bar.
		this.$infoBar.find( '.remove' ).click( function () {
			$( this ).parent().hide();
		} );

		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.setPublishButtonState, this ) );
		mw.hook( 'mw.cx.error' ).add( $.proxy( this.showError, this ) );
		mw.hook( 'mw.cx.success' ).add( $.proxy( this.showSuccess, this ) );
		mw.hook( 'mw.cx.error.anonuser' ).add( $.proxy( this.showLoginMessage, this ) );
	};

	$.fn.cxHeader = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxHeader' );

			if ( !data ) {
				$this.data(
					'cxHeader', ( data = new ContentTranslationHeader( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	mw.cx.ContentTranslationHeader = ContentTranslationHeader;
	$.fn.cxHeader.defaults = {};
}( jQuery, mediaWiki ) );
