/**
 * @file
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.util', QUnit.newMwEnvironment( {
		config: {
			wgContentTranslationDomainTemplate: '$1.example.com',
			wgArticlePath: '/bunny/says/$1',
			wgScriptPath: '/w'
		}
	} ) );

	QUnit.test( 'getPageUrl', function ( assert ) {
		var proto = new mw.Uri().protocol + '://';

		QUnit.expect( 2 );

		assert.strictEqual(
			mw.cx.getPageUrl( 'es', 'Title' ),
			proto +  'es.example.com/bunny/says/Title',
			'Simple title'
		);

		assert.strictEqual(
			mw.cx.getPageUrl( 'fi', 'Longer title' ),
			proto + 'fi.example.com/bunny/says/Longer title',
			'Title with space'
		);
	} );

	QUnit.test( 'getApiUrl', function ( assert ) {
		var proto = new mw.Uri().protocol + '://';

		QUnit.expect( 1 );

		assert.strictEqual(
			mw.cx.getApiUrl( 'he' ),
			proto + 'he.example.com/w/api.php',
			'Basic test'
		);
	} );
}( jQuery, mediaWiki ) );
