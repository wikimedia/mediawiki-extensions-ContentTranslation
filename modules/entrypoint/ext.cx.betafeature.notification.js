/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	$( function () {
		var $betaTrigger;

		$betaTrigger = $( '#pt-betafeatures' );
		if ( !$betaTrigger.length ) {
			return;
		}
		$betaTrigger.tipsy( {
			title: function () {
				return mw.msg( 'cx-beta-feature-enabled-notification' );
			}
		} ).tipsy( 'show' );
	} );
}( jQuery, mediaWiki ) );
