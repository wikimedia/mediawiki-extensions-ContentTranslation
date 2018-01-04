/*!
 * QUnit tests for Content Translation.
 *
 * @licence GPL-2.0-or-later
 */

( function ( $, mw ) {
	'use strict';

	var testDataPath = mw.config.get( 'wgExtensionAssetsPath' ) +
		'/ContentTranslation/tests/qunit/data/';

	QUnit.module( 'ext.cx.publish.prepare', QUnit.newMwEnvironment( {
		setup: function () {
			this.sitemapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
		}
	} ) );

	QUnit.test( 'Prepare draft for publish', function ( assert ) {
		var $fixture = $( '#qunit-fixture' ),
			done = assert.async();

		$fixture.load( testDataPath + 'draft-sample-1.html', function () {
			var cleanedHTML, publisher;

			publisher = new mw.cx.Publish();
			cleanedHTML = publisher.prepareTranslationForPublish( $fixture );
			assert.strictEqual( $( cleanedHTML ).find( '[contenteditable]' ).length, 0,
				'No contenteditable attributes left' );
			assert.strictEqual( $( cleanedHTML ).find( '[data-cx-draft]' ).length, 0,
				'No data-cx-draft attributes left' );
			assert.strictEqual( $( cleanedHTML ).find( '.cx-segment' ).length, 0,
				'No element has cx-segment class' );
			assert.strictEqual( $( cleanedHTML ).find( '.cx-link' ).length, 0,
				'No element has cx-link class' );
			assert.strictEqual( $( cleanedHTML ).css( 'min-height' ), '',
				'Section has no min-height' );
			done();
		} );
	} );
}( jQuery, mediaWiki ) );
