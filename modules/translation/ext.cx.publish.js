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
		var translatedTitle, translatedContent, summary, sourceTitle;

		// @todo: Refactor so that this module is not grabbing random dom nodes
		sourceTitle = $( '.cx-column--source > h2' ).text();
		translatedTitle = $( '.cx-column--translation > h2' ).text();
		translatedContent = $( '.cx-column--translation .article' ).text();
		summary = '[ContentTranslation] Translated from ' + sourceTitle;
		// To be saved under User:UserName
		translatedTitle = 'User:' + mw.user.getName() + '/' + translatedTitle;
		publishTranslation( translatedTitle, translatedContent, summary )
			.done( function () {
				mw.notify( $( '<p>' )
					.text( 'Article published - ' )
					.append( $( '<a>' )
						.text( translatedTitle )
						.attr( 'href', mw.util.getUrl( translatedTitle ) )
					)
				);
			} ).fail( function () {
				mw.notify( 'Error while saving article.' );
			} );
	};

	/**
	 * @param {string} title
	 * @param {string} content
	 * @param {string} summary
	 */
	function publishTranslation( title, content, summary ) {
		var api = new mw.Api();
		// FIXME: We need to write ApiPublishTranslation to add
		// contenttranslation tag to the revisions
		return api.postWithEditToken( {
			action: 'edit',
			title: title,
			summary: summary,
			text: content,
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.publish' ).add( $.proxy( mw.cx.publish, this ) );
	} );
}( jQuery, mediaWiki ) );
