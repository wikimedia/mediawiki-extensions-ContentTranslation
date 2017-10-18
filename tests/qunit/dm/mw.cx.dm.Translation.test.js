/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	var testDataPath = mw.config.get( 'wgExtensionAssetsPath' ) +
		'/ContentTranslation/tests/qunit/data/dm-translation-source-article.html';

	QUnit.module( 'mw.cx.dm.Translation', QUnit.newMwEnvironment() );

	QUnit.test( 'Source and target dom build test', function ( assert ) {
		var $fixture = $( '#qunit-fixture' ),
			done = assert.async();

		$fixture.load( testDataPath, function () {
			var sourceHTML = $fixture.find( '#source-page-content' ).html(),
				sourceDom, targetDom;

			sourceDom = mw.cx.dm.Translation.static.getSourceDom( sourceHTML, false );
			assert.strictEqual( $( sourceDom ).find( 'article' ).length, 1,
				'Source DOM is wrapped in article tag' );
			assert.strictEqual( $( sourceDom ).find( 'section' ).length, 3,
				'There are 3 sections in source' );
			assert.strictEqual( $( sourceDom ).find( '[rel="cx:Section"]' ).length, 2,
				'Two sections are constructed in source dom' );
			targetDom = mw.cx.dm.Translation.static.getSourceDom( sourceHTML, true );
			assert.strictEqual( $( targetDom ).find( '[rel="cx:Placeholder"]' ).length, 2,
				'Two sections are constructed in target dom' );
			done();
		} );
	} );

}( jQuery, mediaWiki ) );
