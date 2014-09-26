/**
 * ContentTranslation Translation view header
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
	 * Handlers the top part of the three column interface.
	 *
	 * That includes notifications, user tools and the submit button.
	 *
	 * @class
	 */
	function ContentTranslationHeader( element, siteMapper ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;

		this.$publishButton = null;
		this.$infoBar = null;

		this.init();
	}

	ContentTranslationHeader.prototype.init = function () {
		this.render();
		this.listen();
	};

	/**
	 * Enable/Disable the publish button based on progress of translation.
	 * @param {object} weights
	 */
	ContentTranslationHeader.prototype.setPublishButtonState = function ( weights ) {
		this.$publishButton.show().prop( 'disabled', weights.any === 0 );
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

		this.showError( mw.message( 'cx-special-login-error', loginUriHref ) );

		// Do not show the columns
		// TODO: use events
		$( '.cx-widget__columns' ).remove();
	};

	/**
	 * Show a success message in the info bar.
	 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
	 */
	ContentTranslationHeader.prototype.showSuccess = function ( message ) {
		this.showMessage( 'cx-success', message );
	};

	/**
	 * Show an error message in the info bar.
	 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
	 */
	ContentTranslationHeader.prototype.showError = function ( message ) {
		this.showMessage( 'cx-error', message );
	};

	/**
	 * Shows a message in the info bar.
	 *
	 * For internal use. use showSuccess and showError instead.
	 *
	 * @param {string} type Message class.
	 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
	 */
	ContentTranslationHeader.prototype.showMessage = function ( type, message ) {
		if ( message instanceof mw.Message ) {
			this.$infoBar.find( '.text' ).html( message.parse() );
		} else {
			this.$infoBar.find( '.text' ).text( message );
		}

		this.$infoBar
			.removeClass( 'cx-success cx-error' )
			.addClass( type )
			.show();
	};

	/**
	 * Check whether a page with the same title already exists
	 * and show a warning if needed.
	 */
	ContentTranslationHeader.prototype.checkTargetTitle = function () {
		var api, viewTargetUrl;

		api = this.siteMapper.getApi( mw.cx.targetLanguage );
		viewTargetUrl = this.siteMapper.getPageUrl( mw.cx.targetLanguage, mw.cx.targetTitle );

		api.get( {
			titles: mw.cx.targetTitle
		}, {
			dataType: 'jsonp'
		} ).done( function ( response ) {
			// If page doesn't exist, it's OK
			if ( response.query.pages[ -1 ] ) {
				return;
			}

			mw.hook( 'mw.cx.error' ).fire( mw.message(
				'cx-translation-target-page-exists',
				viewTargetUrl,
				mw.cx.targetTitle
			) );
		} );
	};

	ContentTranslationHeader.prototype.listen = function () {
		this.$publishButton.on( 'click', function () {
			mw.hook( 'mw.cx.publish' ).fire();
		} );

		// Click handler for remove icon in info bar.
		this.$infoBar.on( 'click', '.remove', function () {
			$( this ).parent().hide();
		} );

		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.setPublishButtonState, this ) );
		mw.hook( 'mw.cx.error' ).add( $.proxy( this.showError, this ) );
		mw.hook( 'mw.cx.success' ).add( $.proxy( this.showSuccess, this ) );
		mw.hook( 'mw.cx.error.anonuser' ).add( $.proxy( this.showLoginMessage, this ) );
		mw.hook( 'mw.cx.translation.ready' ).add( $.proxy( this.checkTargetTitle, this ) );
	};

	/**
	 * Render the header
	 */
	ContentTranslationHeader.prototype.render = function () {
		var $logo, $headerBar,
			$translationCenterLink, $translationCenter;

		$logo = $( '<div>' ).addClass( 'cx-header__logo' );

		this.$publishButton = $( '<button>' )
			.addClass( 'cx-header__publish publish mw-ui-button mw-ui-constructive' )
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-publish-button' ) )
			.hide();

		$translationCenterLink = $( '<a>' )
			.text( mw.msg( 'cx-header-translation-center' ) )
			.attr( 'href', '#' );

		$translationCenter = $( '<div>' )
			.addClass( 'cx-header__translation-center' )
			.append( $translationCenterLink );

		$headerBar = $( '<div>' )
			.addClass( 'cx-header__bar' )
			.append( /*$translationCenter,*/ this.$publishButton );

		this.$infoBar = $( '<div>' )
			.addClass( 'cx-header__infobar' )
			.append( $( '<span>' ).addClass( 'text' ) )
			.append( $( '<span>' ).addClass( 'remove' ) )
			.hide();

		this.$container
			.addClass( 'cx-header' )
			.append( $logo, $headerBar, this.$infoBar );
	};

	/**
	 * CX Header plugin. Prepares the Special:CX header and interactions.
	 * @param {mw.cx.SiteMapper} siteMapper
	 * @return {jQuery}
	 */
	$.fn.cxHeader = function ( siteMapper ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxHeader' );

			if ( !data ) {
				$this.data(
					'cxHeader', ( data = new ContentTranslationHeader( this, siteMapper ) )
				);
			}
		} );
	};

}( jQuery, mediaWiki ) );
