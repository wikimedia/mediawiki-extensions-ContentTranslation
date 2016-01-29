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
			'ext.cx.translation.draft',
			'ext.cx.translation.storage'
		];

		if ( mw.config.get( 'wgContentTranslationDatabase' ) === null ) {
			mw.log( 'CX Database not configured' );
			return;
		}
		// CX Database configured.
		mw.loader.using( storageModules ).then( function () {
			var storage, draft;

			draft = new mw.cx.ContentTranslationDraft();
			draft.init();
			storage = new mw.cx.ContentTranslationStorage();
			storage.init();
		} );
	} );

}( jQuery, mediaWiki ) );
