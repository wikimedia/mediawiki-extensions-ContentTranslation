/**
 * ContentTranslation - Publish article
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation aids
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	mw.cx = mw.cx || {};

	mw.cx.publish = function () {
		var translatedTitle, translatedContent, sourceTitle;

		// @todo: Refactor so that this module is not grabbing random dom nodes
		sourceTitle = $( '.cx-column--source > h2' ).text();
		translatedTitle = $( '.cx-column--translation > h2' ).text();
		translatedContent = $( '.cx-column--translation .cx-column__content' ).text();

		// To be saved under User:UserName
		translatedTitle = 'User:' + mw.user.getName() + '/' + translatedTitle;
		publishTranslation( translatedTitle, translatedContent, sourceTitle )
			.done( function () {

				mw.notify( $( '<p>' ).html( mw.message( 'cx-publish-page',
					mw.util.getUrl( translatedTitle ), translatedTitle ).parse() ) );
				mw.hook( 'mw.cx.translate.create' ).fire(
					$( '.cx-column--source' ).prop( 'lang' ),
					$( '.cx-column--translation' ).prop( 'lang' )
				);
			} ).fail( function () {
				mw.notify( mw.msg( 'cx-publish-page-error' ) );
			} );
	};

	/**
	 * @param {string} title
	 * @param {string} content
	 * @param {string} sourceTitle
	 */
	function publishTranslation( title, content, sourceTitle ) {
		var api = new mw.Api();

		return api.postWithEditToken( {
			action: 'cxpublish',
			title: title,
			text: content,
			sourcetitle: sourceTitle
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.publish' ).add( $.proxy( mw.cx.publish, this ) );
	} );
}( jQuery, mediaWiki ) );
