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
			'ext.cx.translation.draft'
		];

		if ( mw.config.get( 'wgContentTranslationDatabase' ) === null ) {
			mw.log( 'CX Database not configured' );
			return;
		}
		if ( mw.config.get( 'wgContentTranslationCorpora' ) ) {
			storageModules.push( 'ext.cx.translation.storage' );
		}
		// CX Database configured.
		mw.loader.using( storageModules ).then( function () {
			var storage, draft;

			draft = new mw.cx.ContentTranslationDraft();
			draft.init();
			if ( mw.cx.ContentTranslationStorage ) {
				storage = new mw.cx.ContentTranslationStorage();
				storage.init();
			}
		} );
	} );

}( jQuery, mediaWiki ) );
