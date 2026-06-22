/*!
 * Content Translation invitation for editors while searching in mobile frontend language selector.
 * This is initialization module.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	if ( mw.config.get( 'wgULSLanguageSelectorV2Enabled' ) ) {
		mw.loader.load( 'ext.cx.entrypoints.languagesearcher' );
		return;
	}
	mw.hook( 'mobileFrontend.languageSearcher.noresults' ).add(
		() => {
			if ( mw.config.get( 'mintEntrypointLanguages' ) ) {
				mw.loader.load( 'ext.cx.entrypoints.languagesearcher' );
			} else {
				mw.loader.load( 'ext.cx.entrypoints.languagesearcher.legacy' );
			}
		}
	);
}() );
