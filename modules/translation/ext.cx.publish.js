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

	mw.cx.publish = function () {
		var translatedTitle, translatedContent, $publishButton;

		$publishButton = $( '.cx-header__publish' );
		$publishButton
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-publish-button-publishing' ) );

		translatedTitle = $( '.cx-column--translation > h2' ).text();
		translatedContent = prepareTranslationForPublish();

		// To be saved under User:UserName
		translatedTitle = 'User:' + mw.user.getName() + '/' + translatedTitle;
		publishTranslation( translatedTitle, translatedContent, mw.cx.sourceTitle )
			.done( function () {
				mw.notify( $( '<p>' ).html( mw.message( 'cx-publish-page',
					mw.util.getUrl( translatedTitle ), translatedTitle ).parse() ) );

				mw.hook( 'mw.cx.translate.create' ).fire(
					mw.cx.sourceLanguage,
					mw.cx.targetLanguage
				);
			} ).fail( function () {
				mw.notify( mw.msg( 'cx-publish-page-error' ) );
			} ).always( function () {
				$publishButton.prop( 'disabled', false )
					.text( mw.msg( 'cx-publish-button' ) );
			} );
	};

	/**
	 * @param {string} title
	 * @param {string} content
	 * @param {string} sourceTitle
	 */
	function publishTranslation( title, content, sourceTitle ) {
		var api = new mw.Api();

		return api.postWithToken( 'edit', {
			action: 'cxpublish',
			title: title,
			html: content,
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: sourceTitle
		}, {
			// A bigger timeout since publishing after converting html to wikitext
			// parsoid is not a fast operation.
			timeout: 100 * 1000 // in milliseconds
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.publish' ).add( $.proxy( mw.cx.publish, this ) );
	} );
}( jQuery, mediaWiki ) );
