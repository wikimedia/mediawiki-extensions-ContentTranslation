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
		var deferred, $captchaHeader, $captchaForm, $captchaAnswer, $publishButton;

		$captchaHeader = $( '<h2>' )
			.text( mw.msg( 'cx-publish-captcha-title' ) );
		$captchaForm = $( '<div>' )
			.addClass( 'cx-publish-catcha-form' )
			.append( $captchaHeader );

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
	 * Checks to see if there is already a published article with the title
	 * @param {string} title The title to check
	 */
	function checkTargetTitle( title ) {
		var api,
			$deferred = $.Deferred();

		api = new mw.Api();

		api.get( {
			titles: title
		}, {
			dataType: 'jsonp'
		} ).done( function ( response ) {
			if ( response.query.pages[ -1 ] ) {
				$deferred.resolve( false );
			} else {
				$deferred.resolve( true );
			}
		} );

		return $deferred.promise();
	}

	/**
	 * Publish the translation
	 */
	function publish( publishAnyway ) {
		var $publishArea, $publishButton, publisher, translatedTitle,
			translatedContent, targetCategories, $draftButton, targetTitle,
			sortedKeys, i, categoryTitles, categories, publishedTitle;

		$publishArea = $( '.cx-header__publish' );
		$publishButton = $publishArea.find( '.cx-header__publish-button' );
		$draftButton = $publishArea.find( '.cx-header__draft-button' );
		targetTitle = $( '.cx-column--translation > h2' ).text();
		translatedContent = prepareTranslationForPublish(
			$( '.cx-column--translation .cx-column__content' ).clone()
		);

		publishedTitle = 'User:' + mw.user.getName() + '/' + targetTitle;

		checkTargetTitle( publishedTitle )
			.done( function ( titleExists ) {
				if ( titleExists === false || publishAnyway === true ) {
					$publishButton
						.prop( 'disabled', true )
						.text( mw.msg( 'cx-publish-button-publishing' ) );

					targetCategories = mw.cx.categoryTool.categories.target;
					sortedKeys = Object.keys( targetCategories ).sort();
					categoryTitles = [];
					for ( i = 0; i < sortedKeys.length; i++ ) {
						categoryTitles.push( targetCategories[ sortedKeys[ i ] ] );
					}
					categories = categoryTitles.join( '|' );

					publisher = new CXPublish( $publishArea );
					publisher.publish( {
						from: mw.cx.sourceLanguage,
						to: mw.cx.targetLanguage,
						sourcetitle: mw.cx.sourceTitle,
						title: targetTitle,
						html: translatedContent,
						status: 'published',
						sourcerevision: mw.cx.sourceRevision,
						categories: categories,
						progress: JSON.stringify( mw.cx.getProgress() )
					} ).done( function () {
						mw.hook( 'mw.cx.success' ).fire( mw.message( 'cx-publish-page-success',
							$( '<a>' ).attr( {
								href: mw.util.getUrl( publishedTitle ),
								target: '_blank'
							} ).text( publishedTitle )[ 0 ].outerHTML
						) );
						mw.hook( 'mw.cx.translation.published' ).fire(
							mw.cx.sourceLanguage,
							mw.cx.targetLanguage
						);
					} ).fail( function ( code, details ) {
						var trace = {
							sourceLanguage: mw.cx.sourceLanguage,
							targetLanguage: mw.cx.targetLanguage,
							sourceTitle: mw.cx.sourceTitle,
							sourceRevision: mw.cx.sourceRevision,
							targetTitle: targetTitle,
							error: details
						};
						mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-publish-page-error' ) );
						mw.log( '[CX] Error while publishing:', code, trace );
					} ).always( function () {
						$publishButton
							.prop( 'disabled', true )
							.text( mw.msg( 'cx-publish-button' ) );
					} );
				} else {
					$publishButton.cxPublishingDialog();
				}
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
		// Remove empty sections.
		$content.find( mw.cx.getSectionSelector() ).each( function () {
			var $section = $( this );

			if ( !$.trim( $section.text() ) ) {
				$section.remove();
			}
		} );

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
	} );
}( jQuery, mediaWiki ) );
