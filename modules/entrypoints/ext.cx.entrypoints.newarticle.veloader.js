/*!
 * Content Translation: Loader for the new article campaign for VisualEditor.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	$( function () {
		mw.hook( 've.activationComplete' ).add( function () {
			mw.loader.load( 'ext.cx.entrypoints.newarticle' );
		} );
	} );
}() );
