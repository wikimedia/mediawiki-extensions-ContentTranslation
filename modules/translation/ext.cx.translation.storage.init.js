/*!
 * Intialize CX storage modules
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	$( function () {
		var storageModules = [
			'ext.cx.translation.loader',
			'ext.cx.translation.storage'
		];

		if ( mw.config.get( 'wgContentTranslationDatabase' ) === null ) {
			mw.log( 'CX Database not configured' );
			return;
		}
		// CX Database configured.
		mw.loader.using( storageModules ).then( function () {
			var storage, translationLoader;

			translationLoader = new mw.cx.ContentTranslationLoader();
			translationLoader.init();
			storage = new mw.cx.ContentTranslationStorage();
			storage.init();
		} );
	} );

}( jQuery, mediaWiki ) );
