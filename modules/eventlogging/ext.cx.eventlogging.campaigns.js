/*!
 * ContentTranslation event logging for campaigns.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	$( function () {
		mw.hook( 'mw.cx.cta.accept' ).add( function ( campaign ) {
			mw.track( 'counter.MediaWiki.cx.campaign.' + campaign + '.accept', 1 );
		} );
	} );
}() );
