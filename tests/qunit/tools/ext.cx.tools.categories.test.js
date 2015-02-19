/**
 * @file
 * @author Joel Sahleen
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.tools.categories', QUnit.newMwEnvironment( {
		setup: function () {
			mw.cx.siteMapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
			mw.cx.sourceLanguage = 'es';
			mw.cx.targetLanguage = 'ca';
		}
	} ) );

	QUnit.test( 'Get categories', function ( assert ) {
		var done, categoryTool = new mw.cx.CategoryTool( mw.cx.siteMapper );
		done = assert.async();
		QUnit.expect( 3 );

		mw.cx.sourceTitle = 'Han Feizi';
		categoryTool.getCategories()
			.then( function () {
				assert.equal( Object.keys( categoryTool.categories.source ).length, 4 );
				assert.equal( Object.keys( categoryTool.categories.adapted ).length, 1 );
				assert.equal( Object.keys( categoryTool.categories.target ).length, 1 );
				done();
			} );
	} );

}( jQuery, mediaWiki ) );
