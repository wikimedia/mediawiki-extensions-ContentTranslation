/*!
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 'mw.cx.SiteMapper', QUnit.newMwEnvironment( {
		beforeEach: function () {
			this.siteMapper = new mw.cx.SiteMapper( {
				SiteTemplates: {
					action: '//$1.wikipedia.org/w/index.php?title=$2',
					view: 'https://$1.wikipedia.org/wiki/$2',
					api: 'https://$1.wikipedia.org/w/api.php',
					cx: 'http://localhost:8080/page/$1/$2'
				},
				DomainCodeMapping: {
					nb: 'no'
				}
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

		assert.strictEqual(
			this.siteMapper.getPageUrl( 'ml', 'Random title', { q1: 'test' } ),
			'http://ml.wikipedia.org/w/index.php?title=Random_title&q1=test',
			'Protocol relative base URL with params'
		);

		assert.strictEqual(
			this.siteMapper.getPageUrl( 'el', 'Random title', null, 'myhash' ),
			'https://el.wikipedia.org/wiki/Random_title#myhash',
			'URL with hash'
		);
	} );

	QUnit.test( 'getApi', function ( assert ) {
		const api = this.siteMapper.getApi( 'he' );
		assert.strictEqual( api.apiUrl, 'https://he.wikipedia.org/w/api.php' );
	} );
}() );
