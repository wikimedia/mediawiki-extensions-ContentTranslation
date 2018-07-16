( function ( mw ) {
	$( function () {
		'use strict';

		var cxview, query, config, storageModules;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		query = new mw.Uri().query;
		mw.cx.sourceTitle = query.page;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;
		mw.cx.sourceRevision = query.revision;
		mw.cx.targetTitle = query.targettitle || query.page;

		// Make them available in config.
		config = {
			siteMapper: mw.cx.siteMapper,
			sourceTitle: mw.cx.sourceTitle,
			targetTitle: mw.cx.targetTitle,
			targetLanguage: mw.cx.targetLanguage,
			sourceLanguage: mw.cx.sourceLanguage,
			sourceRevision: mw.cx.sourceRevision,
			campaign: query.campaign
		};

		storageModules = [
			'ext.cx.translation.loader',
			'ext.cx.translation.storage'
		];

		mw.cx.getCXConfiguration( mw.cx.sourceLanguage, mw.cx.targetLanguage ).then( function ( response ) {
			$.extend( config, response.configuration );
			cxview = new mw.cx.ui.TranslationView( config );
			$( 'body' ).append( cxview.$element );

			mw.loader.using( storageModules ).done( function () {
				var storage, translationLoader;

				translationLoader = new mw.cx.ContentTranslationLoader( cxview );
				translationLoader.init();
				storage = new mw.cx.ContentTranslationStorage( cxview );
				storage.init();
			} );
		} );

		if ( mw.config.get( 'wgContentTranslationBetaFeatureEnabled' ) ) {
			mw.notify( mw.msg( 'cx-beta-feature-enabled-notification' ) );
		}
	} );
}( mediaWiki ) );
