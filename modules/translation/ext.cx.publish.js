/**
 * ContentTranslation - Publish article
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Handles the actual submission to the MediaWiki via the API, including captchas.
	 *
	 * @class
	 */
	function CXPublish( $trigger ) {
		this.$trigger = $trigger;
	}

	/**
	 * @param {Object} params Parameters for the API module.
	 * @return {jQuery.Promise}
	 */
	CXPublish.prototype.publish = function ( params ) {
		var apiParams,
			self = this;

		apiParams = $.extend( {}, params, {
			action: 'cxpublish'
		} );

		return new mw.Api().postWithToken( 'edit', apiParams, {
			// A bigger timeout since publishing after converting html to wikitext
			// parsoid is not a fast operation.
			timeout: 100 * 1000 // in milliseconds
		} ).then( function ( response ) {

			if ( response.cxpublish.result === 'success' ) {
				return;
			}

			if ( response.cxpublish.edit.captcha ) {
				return self.captchaHandler( response.cxpublish.edit.captcha )
					.then( function ( captchaResult ) {
						return self.publish( $.extend( params, captchaResult ) );
					} );
			}
		} );
	};

	/**
	 * Captcha Handler - Show captcha form.
	 * This method can be overridden if required. The captcha handler
	 * should return a jQuery Promise and resolve with captcha result
	 * parameters as key value pairs.
	 * @param {object} captcha Result returned by MediaWiki api.
	 * @param {object} params Original publish request params
	 * @return {jQuery.promise}
	 */
	CXPublish.prototype.captchaHandler = function ( captcha ) {
		var deferred, $captcaHeader, $captchaForm, $captchaAnswer, $publishButton;

		$captcaHeader = $( '<h2>' )
			.text( mw.msg( 'cx-publish-captcha-title' ) );
		$captchaForm = $( '<div>' )
			.addClass( 'cx-publish-catcha-form' )
			.append( $captcaHeader );

		if ( captcha.url ) { // FancyCaptcha
			$captchaForm.append( $( '<img>' ).attr( 'src', captcha.url ) );
		} else if ( captcha.type === 'simple' || captcha.type === 'math' ) {
			$captchaForm.append( document.createTextNode( captcha.question ) );
		} else if ( captcha.type === 'question' ) {
			$captchaForm.append( captcha.question );
		}

		$captchaAnswer = $( '<input>' )
			.prop( 'type', 'text' );

		$publishButton = $( '<button>' )
			.addClass( 'cx-header__publish-captcha mw-ui-button mw-ui-constructive' )
			.text( mw.msg( 'cx-publish-button' ) );

		$captchaForm.append( $captchaAnswer, $publishButton );

		// Show the captcha form
		this.$trigger.after( $captchaForm );

		deferred = new $.Deferred();

		$publishButton.on( 'click', function () {
			var captchaParams = {
				wpCaptchaId: captcha.id,
				wpCaptchaWord: $captchaAnswer.val()
			};

			$( this ).prop( 'disabled', true );
			$captchaForm.remove();
			deferred.resolve( captchaParams );
		} );

		return deferred.promise();
	};

	/**
	 * Publish the translation
	 */
	function publish() {
		var $publishButton, publisher, translatedTitle, translatedContent, targetTitle;

		$publishButton = $( '.cx-header__publish' );

		translatedTitle = $( '.cx-column--translation > h2' ).text();
		translatedContent = prepareTranslationForPublish(
			$( '.cx-column--translation .cx-column__content' ).clone()
		);

		targetTitle = 'User:' + mw.user.getName() + '/' + translatedTitle;

		$publishButton
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-publish-button-publishing' ) );

		publisher = new CXPublish( $publishButton );
		publisher.publish( {
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: mw.cx.sourceTitle,
			title: targetTitle,
			html: translatedContent,
			sourcerevision: mw.cx.sourceRevision
		} ).done( function () {
			mw.hook( 'mw.cx.success' ).fire( mw.message(
				'cx-publish-page',
				mw.util.getUrl( targetTitle ),
				targetTitle
			) );
			mw.hook( 'mw.cx.translation.published' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage
			);
		} ).fail( function ( code, details ) {
			mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-publish-page-error' ) );
			mw.log( '[CX] Error while publishing:', code, details );
		} ).always( function () {
			$publishButton
				.prop( 'disabled', false )
				.text( mw.msg( 'cx-publish-button' ) );
		} );

		initGuidedTour( translatedTitle );
	}

	/**
	 * Prepare the translated content for publishing by removing
	 * unwanted parts.
	 * @return {string} processed html
	 */
	function prepareTranslationForPublish( $content ) {
		$content.find( '.cx-segment' ).replaceWith( function () {
			return $( this ).html();
		} );
		// TODO: This clean up should be done even before segmentation at server.
		$content.find( 'link, title' ).remove();

		// Remove placeholder sections
		$content.find( '.placeholder' ).remove();

		return $content.html();
	}

	/**
	 * If GuidedTour is available, set cookies to start a tour.
	 * @param {string} translatedTitle
	 */
	function initGuidedTour( translatedTitle ) {
		if ( !mw.guidedTour ) {
			return;
		}

		mw.cookie.set(
			'-cx-published',
			JSON.stringify( {
				translatedTitle: translatedTitle,
				username: mw.user.getName()
			} )
		);

		mw.guidedTour.setTourCookie( 'cxpublish', 'suggestmovestart' );
	}

	// Expose the CXPublish
	mw.cx.publish = CXPublish;

	$( function () {
		mw.hook( 'mw.cx.publish' ).add( $.proxy( publish, this ) );
		// Publish when CTRL+S is pressed.
		$( document ).on( 'keydown', function ( e ) {
			if ( e.ctrlKey && e.which === 83 ) {
				e.preventDefault();
				mw.hook( 'mw.cx.publish' ).fire();
				return false;
			}
		} );
	} );
}( jQuery, mediaWiki ) );
