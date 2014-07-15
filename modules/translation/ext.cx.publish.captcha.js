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
	 * Show captcha form
	 */
	function showCaptchaForm( captcha ) {
		var $publishButton, $captchaForm, $captchaAnswer, $newPublishButton;

		$publishButton = $( '.cx-header__publish' );
		$publishButton.prop( 'disabled', true );
		$captchaForm = $( '<div>' )
			.addClass( 'cx-publish-catcha-form' );
		$captchaForm.append( $( '<h2>' )
			.text( mw.msg( 'cx-publish-captcha-title' ) ) );

		if ( captcha.url ) { // FancyCaptcha
			$captchaForm.append( $( '<img>' ).attr( 'src', captcha.url ) );
		} else if ( captcha.type === 'simple' || captcha.type === 'math' ) {
			$captchaForm.append( document.createTextNode( captcha.question ) );
		} else if ( captcha.type === 'question' ) {
			$captchaForm.append( captcha.question );
		}

		$captchaAnswer = $( '<input>' ).prop( 'type', 'text' );
		$newPublishButton = $( '<button>' )
			.addClass( 'cx-header__publish-captcha mw-ui-button mw-ui-constructive' )
			.text( mw.msg( 'cx-publish-button' ) );
		$captchaForm.append( $captchaAnswer, $newPublishButton );

		// Show the captcha form
		$publishButton.after( $captchaForm );

		$newPublishButton.click( function () {
			mw.hook( 'mw.cx.publish' ).fire( {
				wpCaptchaId: captcha.id,
				wpCaptchaWord: $captchaAnswer.val()
			} );
			$captchaForm.remove();
		} );

	}

	$( function () {
		mw.hook( 'mw.cx.publish.captcha' ).add( showCaptchaForm );
	} );
}( jQuery, mediaWiki ) );
