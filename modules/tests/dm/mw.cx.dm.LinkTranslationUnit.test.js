QUnit.module( 'mw.cx.dm.LinkTranslationUnit', QUnit.newMwEnvironment( {
	setup: function () {
		this.siteMapper = new mw.cx.SiteMapper(
			mw.config.get( 'wgContentTranslationSiteTemplates' )
		);
	}
} ) );

/* Tests */
QUnit.test( 'Title adaptation test', function ( assert ) {
	var tests, config, i, linkTranslationUnit, linkText, sourceLinkDoc,
		targetTitle, requestManager, description,
		mockResponse, done;

	tests = [
		{
			title: 'Oxygen',
			sourceLanguage: 'en',
			targetLanguage: 'ml',
			targetTitle: 'ഓക്സിജൻ',
			description: 'Target page exists without redirect'
		},
		{
			title: 'Dance Theater of Harlem',
			sourceLanguage: 'en',
			targetLanguage: 'ml',
			targetTitle: null,
			description: 'Target page does not exist, source page redirects'
		},
		{
			title: 'OLPC',
			sourceLanguage: 'en',
			targetLanguage: 'ta',
			targetTitle: 'ஒரு குழந்தைக்கு ஒரு மடிக்கணினி',
			description: 'Target page exist, source page redirects'
		},
		{
			title: null,
			sourceLanguage: 'en',
			targetLanguage: 'ta',
			targetTitle: null,
			description: 'Invalid source title'
		}
	];

	/* eslint no-loop-func:off */
	for ( i = 0; i < tests.length; i++ ) {
		sourceLinkDoc = document.createElement( 'a' );
		linkText = document.createTextNode( tests[ i ].title );
		sourceLinkDoc.appendChild( linkText );
		sourceLinkDoc.title = tests[ i ].title;
		sourceLinkDoc.href = tests[ i ].title;

		// BC
		config = {
			sourceLanguage: tests[ i ].sourceLanguage,
			targetLanguage: tests[ i ].targetLanguage,
			siteMapper: this.siteMapper
		};

		// Set the response in cache so that network requests wont be initiated.
		mockResponse = {};
		mockResponse[ tests[ i ].title ] = {
			sourceTitle: tests[ i ].title,
			targetTitle: tests[ i ].targetTitle,
			missing: false
		};

		requestManager = new mw.cx.MwApiRequestManager(
			tests[ i ].sourceLanguage,
			tests[ i ].targetLanguage,
			this.siteMapper
		);
		requestManager.titlePairCache[ tests[ i ].sourceLanguage ].set( mockResponse );
		config.requestManager = requestManager;

		linkTranslationUnit = new mw.cx.dm.LinkTranslationUnit(
			config,
			this.translation,
			sourceLinkDoc,
			null
		);

		targetTitle = tests[ i ].targetTitle;
		description = tests[ i ].description;
		done = assert.async();
		linkTranslationUnit.findLinkTarget( tests[ i ].sourceLanguage, tests[ i ].title )
			.done( function ( adaptedTitle ) {
				assert.deepEqual( adaptedTitle, targetTitle, description );
			} ).fail( function() {
				assert.deepEqual( targetTitle, null, description );
			} ).always( function() {
				done();
			} );
	}
} );
