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
		// TODO: publish the article
		mw.notify( 'Article published!' );
	};

	$( function () {
		mw.hook( 'mw.cx.publish' ).add( $.proxy( mw.cx.publish, this ) );
	} );
}( jQuery, mediaWiki ) );
