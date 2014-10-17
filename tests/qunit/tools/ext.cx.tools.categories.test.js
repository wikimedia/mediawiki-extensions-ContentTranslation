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
			mw.cx.sourceLanguage = 'en';
			mw.cx.targetLanguage = 'es';
		}
	} ) );

	QUnit.test( 'Get source categories', function ( assert ) {
		QUnit.expect( 3 );

		function testGetSourceCategories( title ) {
			var deferred = $.Deferred();

			mw.cx.categoryTool = new mw.cx.CategoryTool( mw.cx.siteMapper );
			mw.cx.sourceTitle = title;
			mw.cx.categoryTool.getCategories( 'source' )
				.done( function ( categories ) {
					deferred.resolve( categories );
				} );

			return deferred.promise();
		}

		QUnit.stop();
		testGetSourceCategories( 'Han Fei' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 13,
					'Correct number of source categories retrieved (13 results)'
				);
				QUnit.start();
			} );

		QUnit.stop();
		testGetSourceCategories( 'Han' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 1,
					'Correct number of source categories retrieved (1 result)'
				);
				QUnit.start();
			} );

		QUnit.stop();
		testGetSourceCategories( 'Shen Dao' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 6,
					'Correct number of source categories retrieved (6 results)'
				);
				QUnit.start();
			} );

	} );

	QUnit.test( 'Get adapted categories', function ( assert ) {
		QUnit.expect( 3 );

		function testGetAdaptedCategories( title ) {
			var deferred = $.Deferred();

			mw.cx.categoryTool = new mw.cx.CategoryTool( mw.cx.siteMapper );
			mw.cx.sourceTitle = title;
			mw.cx.categoryTool.getCategories( 'adapted' )
				.done( function ( adaptedCategories ) {
					deferred.resolve( adaptedCategories );
				} );

			return deferred.promise();
		}

		QUnit.stop();
		testGetAdaptedCategories( 'Han Fei' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 4,
					'Correct number of adapted categories retrieved (4 results)'
				);
				QUnit.start();
			} );

		QUnit.stop();
		testGetAdaptedCategories( 'Han' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 1,
					'Correct number of adapted categories retrieved (1 result)'
				);
				QUnit.start();
			} );

		QUnit.stop();
		testGetAdaptedCategories( 'Shen Dao' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 0,
					'Correct number of adapted categories retrieved (No results)'
				);
				QUnit.start();
			} );

	} );

	QUnit.test( 'Get target categories', function ( assert ) {
		QUnit.expect( 3 );

		function testGetTargetCategories( title ) {
			var deferred = $.Deferred();

			mw.cx.categoryTool = new mw.cx.CategoryTool( mw.cx.siteMapper );
			mw.cx.sourceTitle = title;
			mw.cx.categoryTool.getCategories( 'target' )
				.done( function ( adaptedCategories ) {
					deferred.resolve( adaptedCategories );
				} );

			return deferred.promise();
		}

		QUnit.stop();
		testGetTargetCategories( 'Han Fei' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 4,
					'Correct number of target categories retrieved (4 results)'
				);
				QUnit.start();
			} );

		QUnit.stop();
		testGetTargetCategories( 'Han' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 1,
					'Correct number of target categories retrieved (1 result)'
				);
				QUnit.start();
			} );

		QUnit.stop();
		testGetTargetCategories( 'Shen Dao' )
			.done( function ( results ) {
				assert.equal( Object.keys( results ).length, 0,
					'Correct number of target categories retrieved (No results)'
				);
				QUnit.start();
			} );

	} );

}( jQuery, mediaWiki ) );
