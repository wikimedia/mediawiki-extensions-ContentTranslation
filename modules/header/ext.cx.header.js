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
	 * Enable/Disable the publish button based on progress of translation
	 * @param {float} progress
	 */
	ContentTranslationHeader.prototype.setPublishButtonState = function ( progress ) {
		this.$publishButton.prop( 'disabled', parseInt( progress, 10 ) === 0 );
	};

	/**
	 * Show login message
	 * @param {string} message
	 */
	ContentTranslationHeader.prototype.showLoginMessage = function () {
		var loginUri, title, queryString;

		loginUri = new mw.Uri();
		title = loginUri.query.title;
		delete loginUri.query.title;
		queryString = loginUri.getQueryString();
		loginUri.query = {
			title: 'Special:UserLogin',
			returnto: title,
			returntoquery: encodeURI( queryString )
		};
		this.$infoBar
			.show()
			.removeClass( 'cx-success' )
			.addClass( 'cx-error' )
			.find( '.text' )
			.html( mw.message( 'cx-special-login-error', loginUri.toString() ).parse() );
		this.$userName.text( mw.msg( 'login' ) ).prop( 'href', loginUri.toString() );
		// Do not show the columns
		$( '.cx-widget__columns' ).remove();
	};

	/**
	 * Show error message
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
	 * Show error message
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
		// Click hander for remove icon in info bar.
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
