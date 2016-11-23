/*!
 * QUnit tests for Content Translation.
 *
 * @ingroup Extensions
 * @licence GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.tools.template', QUnit.newMwEnvironment( {
		setup: function () {
			mw.cx.siteMapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
		}
	} ) );

	QUnit.test( 'Equivalent template exists', function ( assert ) {
		var templateTool, template, targetTemplate, sourceTemplate,
			$targetTemplate, $sourceTemplate,
			$fixture = $( '#qunit-fixture' );
		QUnit.expect( 1 );
		QUnit.stop();
		// Tesing lang-ml template. It exists in en and ml. So will be passed through
		// But it will be readonly.
		template = {
			parts: [ {
				template: {
					target: {
						wt: 'lang-ml',
						href: './Template:Lang-ml'
					},
					params: {
						1: {
							wt: 'ശ്രീകുമാരി രാമചന്ദ്രൻ'
						}
					},
					i: 0
				}
			} ]
		};

		mw.cx.sourceLanguage = 'ml';
		mw.cx.targetLanguage = 'en';
		$sourceTemplate = $( '<div>' ).attr( {
			'data-mw': JSON.stringify( template ),
			'typeof': 'mw:Transclusion',
			about: '#mwt1'
		} );
		$targetTemplate = $sourceTemplate;
		$fixture.append( $sourceTemplate, $targetTemplate );
		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			onEdit: $.proxy( this.onEdit, this )
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );
		templateTool.adapt().then( function ( adaptedTemplate ) {
			assert.assertTrue( Object.keys( adaptedTemplate.params ).length > 0,
				'Template is passed through since an equivalent template exists in target language'
			);
		} ).always( function () {
			QUnit.start();
		} );
	} );

	QUnit.test( 'Adapting a template not existing in target language', function ( assert ) {
		var templateTool, template, targetTemplate, sourceTemplate,
			$targetTemplate, $sourceTemplate,
			$fixture = $( '#qunit-fixture' );

		QUnit.expect( 1 );
		QUnit.stop();

		// Tesing lang-ml template. It exists in en but not in ca.
		template = {
			parts: [ {
				template: {
					target: {
						wt: 'lang-ml',
						href: './Template:Lang-ml'
					},
					params: {
						1: {
							wt: 'ശ്രീകുമാരി രാമചന്ദ്രൻ'
						}
					},
					i: 0
				}
			} ]
		};
		mw.cx.sourceLanguage = 'en';
		mw.cx.targetLanguage = 'ca';
		$sourceTemplate = $( '<div>' ).attr( {
			'data-mw': JSON.stringify( template ),
			'typeof': 'mw:Transclusion',
			about: '#mwt1'
		} );
		$targetTemplate = $sourceTemplate;
		$fixture.append( $sourceTemplate, $targetTemplate );
		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			onEdit: $.proxy( this.onEdit, this )
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );
		templateTool.adapt().then( function () {}, function () {
			// Failure handle called.
			assert.assertTrue( true, 'Template is not adapted' );
		} ).always( function () {
			QUnit.start();
		} );
	} );

	QUnit.test( 'Adapting template having invalid title', function ( assert ) {
		var templateTool, template, targetTemplate, sourceTemplate,
			$targetTemplate, $sourceTemplate,
			$fixture = $( '#qunit-fixture' );

		QUnit.expect( 1 );
		QUnit.stop();

		// Tesing lang-ml template. It exists in en but not in ca.
		template = {
			parts: [ {
				template: {
					target: {
						wt: 'Airport-dest-list\n<!-- -->',
						href: './Template:Airport-dest-list\n<!-- -->'
					},
					params: {
						1: {
							wt: 'foo'
						}
					},
					i: 0
				}
			} ]
		};
		mw.cx.sourceLanguage = 'en';
		mw.cx.targetLanguage = 'es';
		$sourceTemplate = $( '<div>' ).attr( {
			'data-mw': JSON.stringify( template ),
			'typeof': 'mw:Transclusion',
			about: '#mwt1'
		} );
		$targetTemplate = $sourceTemplate;
		$fixture.append( $sourceTemplate, $targetTemplate );
		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			onEdit: $.proxy( this.onEdit, this )
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );
		templateTool.adapt().then( function () {}, function () {
			// Failure handler called.
			assert.assertTrue( true, 'Template is not adapted. Invalid title' );
		} ).always( function () {
			QUnit.start();
		} );
	} );

	QUnit.test( 'Template name and params adaptation using templatedata', function ( assert ) {
		var templateTool, template, targetTemplate, sourceTemplate,
			$targetTemplate, $sourceTemplate,
			$fixture = $( '#qunit-fixture' );

		QUnit.expect( 3 );
		QUnit.stop();

		// Tesing Ficha_de_taxón. As per template mapping for es-ca, it should be renamed to Taxocaixa
		template = {
			parts: [ {
				template: {
					target: {
						wt: 'Ficha de taxón\n',
						href: './Plantilla:Ficha_de_taxón'
					},
					params: {
						name: {
							wt: 'Tyrannosaurus rex'
						},
						fossilrange: {
							wt: '{{rango fósil|67|66}} [[Maastrichtiano]] ([[Cretácico Superior]])'
						},
						image: {
							wt: 'Tyrannosaurus Rex Holotype.jpg'
						},
						imagewidth: {
							wt: '280px'
						},
						imagecaption: {
							wt: 'Espécimen de Tyrannosaurus rex del Museo de Historia Natural Carnegie, [[Pittsburgh]].'
						},
						regnum: {
							wt: '[[Animalia]]'
						},
						phylum: {
							wt: '[[Chordata]]'
						},
						classis: {
							wt: '[[Sauropsida]]'
						},
						subclassis: {
							wt: '[[Diapsida]]'
						},
						superordo: {
							wt: '[[Dinosauria]]'
						},
						ordo: {
							wt: '[[Saurischia]]'
						},
						subordo: {
							wt: '[[Theropoda]]'
						},
						familia: {
							wt: '[[Tyrannosauroidea]]'
						},
						subfamilia: {
							wt: '[[Tyrannosauridae]]'
						},
						genus: {
							wt: 'Tyrannosaurus '
						},
						genusauthority: {
							wt: '[[Henry Fairfield Osborn|Osborn]], [[1905]]'
						},
						species: {
							wt: 'T. rex'
						},
						binomial: {
							wt: 'Tyrannosaurus rex '
						},
						binomialauthority: {
							wt: '<small>Osborn, 1905</small>'
						},
						synonyms: {
							wt: '[[Manospondylus]]' +
								' <small>[[Edward Drinker Cope|Cope]], 1892</small><br />\n' +
								'[[Dynamosaurus]]' +
								' <small>[[Henry Fairfield Osborn|Osborn]], 1905</small><br />\n' +
								'[[Stygivenator]]' +
								' <small>[[George Olshevsky|Olshevsky]], 1995</small><br />\n' +
								'[[Dinotyrannus]]' +
								' <small>[[George Olshevsky|Olshevsky]], 1995</small>'
						},
						rangemap: {
							wt: 'Tyrannosaurus distribution map.png'
						},
						rangemapalt: {
							wt: ''
						},
						rangemapcaption: {
							wt: 'Localidades en que se han recolectado [[fósil]]es de ' +
								'Tyrannosaurus rex.'
						}
					},
					i: 0
				}
			} ]
		};

		mw.cx.sourceLanguage = 'es';
		mw.cx.targetLanguage = 'ca';
		$sourceTemplate = $( '<div>' ).attr( {
			'data-mw': JSON.stringify( template ),
			'typeof': 'mw:Transclusion',
			about: '#mwt1'
		} );
		$targetTemplate = $sourceTemplate;
		$fixture.append( $sourceTemplate, $targetTemplate );
		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			onEdit: $.proxy( this.onEdit, this )
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );
		templateTool.adapt().then( function ( adaptedTemplate ) {
			assert.assertTrue( !!adaptedTemplate, 'Template adapted.' );
			assert.strictEqual(
				adaptedTemplate.title,
				'Taxocaixa',
				'Template name changed to Taxocaixa.'
			);
			assert.strictEqual( adaptedTemplate.params.name.wt,
				'Tyrannosaurus rex',
				'Name parameter mapped and adapted to target language'
			);
		} ).always( function () {
			QUnit.start();
		} );
	} );

	QUnit.test( 'Template params adaptation using templateData - English to French', function ( assert ) {
		var templateTool, template, targetTemplate, sourceTemplate,
			$targetTemplate, $sourceTemplate,
			$fixture = $( '#qunit-fixture' );

		QUnit.expect( 4 );
		QUnit.stop();

		template = {
			parts: [ {
				template: {
					target: {
						wt: 'cite web',
						href: './Template:Cite_web'
					},
					params: {
						url: {
							wt: 'http://www.example.org/'
						},
						title: {
							wt: 'My Favorite Things, Part II'
						},
						last: {
							wt: 'Doe'
						},
						first: {
							wt: 'John'
						},
						publisher: {
							wt: ' Open Publishing'
						},
						date: {
							wt: '30 April 2005'
						},
						website: {
							wt: 'Encyclopedia of Things'
						},
						'access-date': {
							wt: '26 June 2016'
						}
					},
					i: 0
				}
			} ]
		};
		mw.cx.sourceLanguage = 'en';
		mw.cx.targetLanguage = 'fr';
		$sourceTemplate = $( '<div>' ).attr( {
			'data-mw': JSON.stringify( template ),
			'typeof': 'mw:Transclusion',
			about: '#mwt1'
		} );
		$targetTemplate = $sourceTemplate;
		$fixture.append( $sourceTemplate, $targetTemplate );
		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			onEdit: $.proxy( this.onEdit, this )
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );
		templateTool.adapt().then( function ( adaptedTemplate ) {
			assert.strictEqual( adaptedTemplate.title, 'Lien web', 'Template name changed to Lien web' );
			assert.strictEqual( adaptedTemplate.params.url.wt,
				template.parts[ 0 ].template.params.url.wt,
				'url param exist'
			);
			assert.strictEqual( adaptedTemplate.params.titre.wt,
				template.parts[ 0 ].template.params.title.wt,
				'titre param exist mapped from title'
			);
			assert.strictEqual( adaptedTemplate.params.éditeur.wt,
				template.parts[ 0 ].template.params.publisher.wt,
				'éditeur param exist, mapped from publisher'
			);
		} ).always( function () {
			QUnit.start();
		} );
	} );

	QUnit.test( 'Template params adaptation using templateData - English to Spanish', function ( assert ) {
		var templateTool, template, targetTemplate, sourceTemplate,
			$targetTemplate, $sourceTemplate,
			$fixture = $( '#qunit-fixture' );

		QUnit.expect( 6 );
		QUnit.stop();
		template = {
			parts: [ {
				template: {
					target: {
						wt: 'cite book',
						href: './Template:Cite_book'
					},
					params: {
						last1: {
							wt: 'Bloggs'
						},
						first1: {
							wt: 'Joe'
						},
						last2: {
							wt: 'Egg'
						},
						first2: {
							wt: 'Fred'
						},
						'editor-last': {
							wt: 'Doe'
						},
						'editor-first': {
							wt: 'John'
						},
						title: {
							wt: 'Big Book with Many Chapters and Two Co-authors'
						},
						publisher: {
							wt: ' Book Publishers'
						},
						date: {
							wt: 'January 1, 2001'
						},
						'orig-year': {
							wt: '1st pub. 1986'
						},
						pages: {
							wt: '100–110'
						},
						chapter: {
							wt: 'Chapter 6: Getting There'
						},
						chapterurl: {
							wt: 'http://en.wikipedia.org/'
						},
						isbn: {
							wt: '978-1-234-56789-7'
						},
						lastauthoramp: {
							wt: 'y'
						}
					},
					i: 0
				}
			} ]
		};
		mw.cx.sourceLanguage = 'en';
		mw.cx.targetLanguage = 'es';
		$sourceTemplate = $( '<div>' ).attr( {
			'data-mw': JSON.stringify( template ),
			'typeof': 'mw:Transclusion',
			about: '#mwt1'
		} );
		$targetTemplate = $sourceTemplate;
		$fixture.append( $sourceTemplate, $targetTemplate );
		sourceTemplate = new mw.cx.Template( $sourceTemplate, {
			language: mw.cx.sourceLanguage,
			siteMapper: mw.cx.siteMapper
		} );
		targetTemplate = new mw.cx.Template( $targetTemplate, {
			language: mw.cx.targetLanguage,
			siteMapper: mw.cx.siteMapper,
			onEdit: $.proxy( this.onEdit, this )
		} );
		templateTool = new mw.cx.TemplateTool( sourceTemplate, targetTemplate );
		templateTool.adapt().then( function ( adaptedTemplate ) {
			assert.strictEqual( adaptedTemplate.title, 'Cita libro', 'Template name changed to Lien web' );
			assert.strictEqual( adaptedTemplate.params.editor.wt,
				template.parts[ 0 ].template.params[ 'editor-last' ].wt,
				'editor param exist'
			);
			assert.strictEqual( adaptedTemplate.params.título.wt,
				template.parts[ 0 ].template.params.title.wt,
				'título param exist'
			);
			assert.strictEqual( adaptedTemplate.params.nombre2.wt,
				template.parts[ 0 ].template.params.first2.wt,
				'nombre param exist'
			);
			assert.strictEqual( adaptedTemplate.params.páginas.wt,
				template.parts[ 0 ].template.params.pages.wt,
				'páginas param exist'
			);
			assert.strictEqual( adaptedTemplate.params.isbn.wt,
				template.parts[ 0 ].template.params.isbn.wt,
				'apellidos param exist'
			);
		} ).always( function () {
			QUnit.start();
		} );
	} );
}( jQuery, mediaWiki ) );
