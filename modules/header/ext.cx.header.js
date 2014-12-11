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

	var timer;
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
		this.$saveStatus = null;
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
		mw.hook( 'mw.cx.translation.title.change' ).add( $.proxy( this.checkTargetTitle, this ) );
		mw.hook( 'mw.cx.save' ).add( $.proxy( this.updateSaveStatus, this, 'progress' ) );
		mw.hook( 'mw.cx.translation.saved' ).add( $.proxy( this.updateSaveStatus, this, 'success' ) );
	};

	ContentTranslationHeader.prototype.updateSaveStatus = function ( status ) {
		var $status = this.$saveStatus,
			minutes = 0;

		$status.attr( 'title', mw.msg( 'cx-save-draft-tooltip' ) );
		clearTimeout( timer );
		if ( status === 'progress' ) {
			$status.text( mw.msg( 'cx-save-draft-saving' ) );
		} else {
			$status.text( mw.msg( 'cx-save-draft-save-success', 0 ) );
			timer = setInterval( function () {
				minutes++;
				$status.text(
					mw.msg( 'cx-save-draft-save-success', mw.language.convertNumber( minutes ) )
				);
			}, 60 * 1000 );
		}
	};
	/**
	 * Render the header
	 */
	ContentTranslationHeader.prototype.render = function () {
		var $logo, $titleText, $headerTitle,
			$translationCenterLink, $translationCenter, $publishArea,
			$headerBar;

		$logo = $( '<a>' )
			.prop( 'href', mw.config.get( 'wgScript' ) )
			.addClass( 'cx-header__logo' );
		$titleText = $( '<span>' )
			.addClass( 'cx-header__title-text' )
			.text( mw.msg( 'cx' ) );
		$headerTitle = $( '<div>' )
			.addClass( 'cx-header__title' )
			.append( $logo, $titleText );

		$translationCenterLink = $( '<a>' )
			.attr( 'href', mw.util.getUrl( 'Special:ContentTranslation' ) );

		if ( mw.config.get( 'wgContentTranslationDatabase' ) !== null ) {
			$translationCenterLink.text( mw.msg( 'cx-header-all-translations' ) );
		} else {
			$translationCenterLink.text( mw.msg( 'cx-header-new-translation' ) );
		}

		$translationCenter = $( '<div>' )
			.addClass( 'cx-header__translation-center' )
			.append( $translationCenterLink );

		this.$saveStatus = $( '<div>' )
			.addClass( 'cx-header__save-status' );

		this.$publishButton = $( '<button>' )
			.addClass( 'cx-header__publish-button mw-ui-button mw-ui-constructive' )
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-publish-button' ) );

		$publishArea = $( '<div>' )
			.addClass( 'cx-header__publish' )
			.append( this.$draftButton, this.$publishButton );

		$headerBar = $( '<div>' )
			.addClass( 'cx-header__bar' )
			.append( $translationCenter, this.$saveStatus, $publishArea );

		this.$infoBar = $( '<div>' )
			.addClass( 'cx-header__infobar' )
			.append( $( '<span>' ).addClass( 'text' ) )
			.append( $( '<span>' ).addClass( 'remove' ) )
			.hide();

		this.$container
			.addClass( 'cx-header' )
			.append( $headerTitle, $headerBar, this.$infoBar );
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
