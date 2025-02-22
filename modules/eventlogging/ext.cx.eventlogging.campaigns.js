/*!
 * ContentTranslation event logging for campaigns.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	$( () => {
		mw.hook( 'mw.cx.cta.accept' ).add( ( campaign ) => {
			mw.track( 'counter.MediaWiki.cx.campaign.' + campaign + '.accept', 1 );
			mw.track( 'stats.mediawiki_cx_cta_responses_total', 1, { response: 'accept', campaign } );
		} );
	} );
}() );
