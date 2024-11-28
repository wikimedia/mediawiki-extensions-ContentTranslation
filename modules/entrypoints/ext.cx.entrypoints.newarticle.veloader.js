/*!
 * Content Translation: Loader for the new article campaign for VisualEditor.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	$( () => {
		mw.hook( 've.activationComplete' ).add( () => {
			mw.loader.load( 'ext.cx.entrypoints.newarticle' );
		} );
	} );
}() );
