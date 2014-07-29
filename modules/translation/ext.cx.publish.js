/**
 * ContentTranslation - Publish article
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
	 * Prepare the translated content for publishing by removing
	 * unwanted parts.
	 * @return {string} processed html
	 */
	function prepareTranslationForPublish() {
		var $translatedContent;

		// TODO: Refactor so that this module is not grabbing random dom nodes
		$translatedContent = $( '.cx-column--translation .cx-column__content' ).clone();
		$translatedContent.find( '.cx-segment' ).replaceWith( function () {
			return $( this ).html();
		} );
		// TODO: This clean up should be done even before segmentation at server.
		$translatedContent.find( 'link, title' ).remove();

		// Remove placeholder sections
		$translatedContent.find( '.placeholder' ).remove();

		return $translatedContent.html();
	}

	/**
	 * Publish the translation
	 * @param {Object} [params] Additional parameters for save API. Example: Captcha params
	 */
	mw.cx.publish = function ( params ) {
		var translatedTitle, translatedContent, $publishButton;

		$publishButton = $( '.cx-header__publish' );
		$publishButton
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-publish-button-publishing' ) );

		translatedTitle = $( '.cx-column--translation > h2' ).text();
		translatedContent = prepareTranslationForPublish();

		initGuidedTour( translatedTitle );

		// To be saved under User:UserName
		translatedTitle = 'User:' + mw.user.getName() + '/' + translatedTitle;
		publishTranslation( translatedTitle, translatedContent, mw.cx.sourceTitle, params )
			.done( function ( response ) {
				if ( response.cxpublish.result === 'error' ) {
					if ( response.cxpublish.edit.captcha ) {
						mw.hook( 'mw.cx.publish.captcha' ).fire( response.cxpublish.edit.captcha );
					} else {
						mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-publish-page-error' ) );
					}
					return;
				}
				mw.hook( 'mw.cx.success' ).fire( mw.message( 'cx-publish-page',
					mw.util.getUrl( translatedTitle ), translatedTitle ).parse() );
				mw.hook( 'mw.cx.translation.published' ).fire(
					mw.cx.sourceLanguage,
					mw.cx.targetLanguage
				);
			} ).fail( function () {
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-publish-page-error' ) );
			} ).always( function () {
				$publishButton.prop( 'disabled', false )
					.text( mw.msg( 'cx-publish-button' ) );
			} );
	};

	/**
	 * @param {string} title
	 * @param {string} content
	 * @param {string} sourceTitle
	 * @param {Object} [params] Additional parameters for save API. Example: Captcha params
	 */
	function publishTranslation( title, content, sourceTitle, params ) {
		var api = new mw.Api(),
			apiParams;

		apiParams = {
			action: 'cxpublish',
			title: title,
			html: content,
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: sourceTitle
		};

		if ( params ) {
			$.extend( apiParams, params );
		}

		return api.postWithToken( 'edit', apiParams, {
			// A bigger timeout since publishing after converting html to wikitext
			// parsoid is not a fast operation.
			timeout: 100 * 1000 // in milliseconds
		} );
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

	$( function () {
		mw.hook( 'mw.cx.publish' ).add( $.proxy( mw.cx.publish, this ) );
	} );
}( jQuery, mediaWiki ) );
