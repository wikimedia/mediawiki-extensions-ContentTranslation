/*!
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.sitemapper', QUnit.newMwEnvironment( {
		setup: function () {
			mw.config.set( 'wgContentTranslationDomainCodeMapping', {
				nb: 'no'
			} );

			this.siteMapper = new mw.cx.SiteMapper( {
				view: 'https://$1.wikipedia.org/wiki/$2',
				api: 'https://$1.wikipedia.org/w/api.php',
				cx: 'http://localhost:8080/page/$1/$2'
			} );
		}
	} ) );

	QUnit.test( 'getLanguageCodeForWikiDomain', function ( assert ) {
		assert.strictEqual(
			this.siteMapper.getLanguageCodeForWikiDomain( 'no' ),
			'nb',
			'no is mapped to nb'
		);

		assert.strictEqual(
			this.siteMapper.getLanguageCodeForWikiDomain( 'fi' ),
			'fi',
			'fi stays fi'
		);
	} );

	QUnit.test( 'getPageUrl', function ( assert ) {
		assert.strictEqual(
			this.siteMapper.getPageUrl( 'es', 'Title' ),
			'https://es.wikipedia.org/wiki/Title',
			'Simple title'
		);

		assert.strictEqual(
			this.siteMapper.getPageUrl( 'fi', 'Longer title' ),
			'https://fi.wikipedia.org/wiki/Longer_title',
			'Title with space'
		);
	} );

	QUnit.test( 'getApi', function ( assert ) {
		var api = this.siteMapper.getApi( 'he' );
		assert.strictEqual( api.apiUrl, 'https://he.wikipedia.org/w/api.php' );
	} );
}( jQuery, mediaWiki ) );
