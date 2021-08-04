/*!
 * Content Translation invitation for editors while searching in mobile frontend language selector.
 * This is initialization module.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	mw.hook( 'mobileFrontend.languageSearcher.noresults' ).add(
		function () { mw.loader.load( 'ext.cx.entrypoints.languagesearcher' ); }
	);
}() );
