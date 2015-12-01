/*!
 * Content Translation: Loader for the new article campaign for VisualEditor.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	$( function () {
		mw.hook( 've.activationComplete' ).add( function () {
			mw.loader.load( 'ext.cx.campaigns.newarticle' );
		} );
	} );
}( jQuery, mediaWiki ) );
