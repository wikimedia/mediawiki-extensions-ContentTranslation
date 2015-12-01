/*!
 * QUnit tests for Content Translation.
 *
 * @ingroup Extensions
 * @licence GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	var testDataPath = mw.config.get( 'wgExtensionAssetsPath' ) +
		'/ContentTranslation/tests/qunit/data/';

	QUnit.module( 'ext.cx.tools.template', QUnit.newMwEnvironment( {
		setup: function () {
			mw.cx.siteMapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
		}
	} ) );

	QUnit.test( 'Equivalent template exists', function ( assert ) {
		var $fixture = $( '#qunit-fixture' );

		QUnit.expect( 1 );
		QUnit.stop();

		$fixture.load( testDataPath + 'template-lang-ml.html', function () {
			var templateTool, $templates = $fixture.find( '[typeof="mw:Transclusion"]' );

			mw.cx.targetLanguage = 'ml';
			mw.cx.sourceLanguage = 'en';
			// Tesing lang-ml template. It exist in en and ml. So will be passed through
			// But it will be readonly.
			$.each( $templates, function ( index, template ) {
				var $template = $( template );

				templateTool = new mw.cx.TemplateTool( $template );
				templateTool.process().then( function () {
					assert.assertTrue( $template.is( '[contenteditable=false]' ), 'Template is readonly' );
					QUnit.start();
				} );
			} );
		} );
	} );

	QUnit.test( 'No equivalent template', function ( assert ) {
		var $fixture = $( '#qunit-fixture' );

		QUnit.expect( 1 );
		QUnit.stop();
		$fixture.load( testDataPath + 'template-lang-ml.html', function () {
			var templateTool, $templates = $fixture.find( '[typeof="mw:Transclusion"]' );

			mw.cx.targetLanguage = 'ca';
			mw.cx.sourceLanguage = 'en';
			$.each( $templates, function ( index, template ) {
				// Tesing lang-ml template. It exist in en but not in ca. So will be deconstructed
				var $template = $( template );

				templateTool = new mw.cx.TemplateTool( $template );
				templateTool.process().then( function () {
					assert.assertFalse( $template.is( '[typeof="mw:Transclusion"]' ), 'Template is deconstructed' );
					QUnit.start();
				} );
			} );
		} );
	} );

	QUnit.test( 'Template name adaptation', function ( assert ) {
		var $fixture = $( '#qunit-fixture' );

		QUnit.expect( 2 );
		QUnit.stop();
		$fixture.load( testDataPath + 'template-es-taxocaixa.html', function () {
			var templateTool, $templates = $fixture.find( '[typeof="mw:Transclusion"]' );

			mw.cx.sourceLanguage = 'es';
			mw.cx.targetLanguage = 'ca';
			$.each( $templates, function ( index, template ) {
				// Tesing Ficha_de_taxón. As per template mapping for es-ca, it should be renamed to Taxocaixa
				var $template = $( template );

				templateTool = new mw.cx.TemplateTool( $template );
				templateTool.process().then( function () {
					var templateData = $template.data( 'mw' );
					assert.assertTrue( $template.is( '[contenteditable=false]' ), 'Template is readonly' );
					assert.strictEqual( templateData.parts[ 0 ].template.target.wt, 'Taxocaixa', 'Template name changed to Taxocaixa' );
					QUnit.start();
				} );
			} );
		} );
	} );

	QUnit.test( 'Template params adaptation', function ( assert ) {
		var $fixture = $( '#qunit-fixture' );

		QUnit.expect( 18 );
		QUnit.stop();
		$fixture.load( testDataPath + 'template-cita-noticia-es.html', function () {
			var templateTool, $templates = $fixture.find( '[typeof="mw:Transclusion"]' );

			mw.cx.sourceLanguage = 'es';
			mw.cx.targetLanguage = 'ca';
			$.each( $templates, function ( index, template ) {
				// Tesing Cita Noticia. As per template mapping for es-ca, it should be renamed to Ref-notícia
				var $template = $( template ),
					originalTemplateParams = Object.keys( $template.data( 'mw' ).parts[ 0 ].template.params );

				templateTool = new mw.cx.TemplateTool( $template );
				templateTool.process().then( function () {
					var i, key, mappedKey,
						templateData = $template.data( 'mw' ),
						templateKeys = Object.keys( templateData.parts[ 0 ].template.params ),
						templateMapping = $template.data( 'template-mapping' ),
						templateMappingKeys = Object.keys( templateMapping.parameters );

					assert.assertTrue( $template.is( '[contenteditable=false]' ), 'Template is readonly' );
					assert.strictEqual( templateData.parts[ 0 ].template.target.wt, 'Ref-notícia', 'Template name changed to Ref-notícia' );
					assert.assertTrue( !!templateMapping, 'Template has template mapping' );
					for ( i = 0; i < originalTemplateParams.length; i++ ) {
						key = originalTemplateParams[ i ];
						mappedKey = templateMapping.parameters[ key ];
						if ( templateMappingKeys.indexOf( key ) >= 0 ) {
							assert.assertTrue( templateKeys.indexOf( mappedKey ) >= 0,
								'Template param:' + key + ' mapped to ' + mappedKey );
						}
					}
					QUnit.start();
				} );
			} );
		} );
	} );
}( jQuery, mediaWiki ) );
