/*!
 * @author Joel Sahleen
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.tools.categories', QUnit.newMwEnvironment( {
		setup: function () {
			this.server = this.sandbox.useFakeServer();
			this.server.respondImmediately = true;
			this.sitemapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
			mw.cx.sourceLanguage = 'es';
			mw.cx.targetLanguage = 'ca';
		}
	} ) );

	// These two functions are copied from suites/resources/mediawiki.api/mediawiki.api.test.js
	function sequence( responses ) {
		var i = 0;
		return function ( request ) {
			var response = responses[ i ];
			if ( response ) {
				i++;
				request.respond.apply( request, response );
			}
		};
	}

	function sequenceBodies( status, headers, bodies ) {
		$.each( bodies, function ( i, body ) {
			bodies[ i ] = [ status, headers, body ];
		} );
		return sequence( bodies );
	}

	QUnit.test( 'Get categories', function ( assert ) {
		var done, categoryTool = new mw.cx.CategoryTool( this.sitemapper );
		done = assert.async();

		mw.cx.sourceTitle = 'Han Feizi';

		this.server.respond( sequenceBodies( 200, { 'Content-Type': 'application/json' },
			[
				'{"batchcomplete":true,"query":{"pages":[{"pageid":1297210,"ns":0,"title":"Han Feizi","categories":[{"ns":14,"title":"Categoría:Chinos del siglo III a. C."},{"ns":14,"title":"Categoría:Filósofos de China Antigua"},{"ns":14,"title":"Categoría:Filósofos del siglo III a. C."},{"ns":14,"title":"Categoría:Filósofos sociales"},{"ns":14,"title":"Categoría:Suicidas de China"}]}]}}',
				'{"batchcomplete":"","query":{"pages":{"4794870":{"pageid":4794870,"ns":14,"title":"Categor\u00eda:Chinos del siglo III a. C."},"389825":{"pageid":389825,"ns":14,"title":"Categor\u00eda:Fil\u00f3sofos de China Antigua"},"1894749":{"pageid":1894749,"ns":14,"title":"Categor\u00eda:Fil\u00f3sofos del siglo III a. C."},"7025351":{"pageid":7025351,"ns":14,"title":"Categor\u00eda:Fil\u00f3sofos sociales"},"2631886":{"pageid":2631886,"ns":14,"title":"Categor\u00eda:Suicidas de China","langlinks":[{"lang":"ca","*":"Categoria:Su\u00efcides xinesos"}]}}}}'
			]
		) );
		categoryTool.getCategories()
			.then( function () {
				assert.equal( Object.keys( categoryTool.categories.source ).length, 5 );
				assert.equal( Object.keys( categoryTool.categories.adapted ).length, 1 );
				assert.equal( Object.keys( categoryTool.categories.target ).length, 1 );
			} ).always( done );
	} );

}( jQuery, mediaWiki ) );
