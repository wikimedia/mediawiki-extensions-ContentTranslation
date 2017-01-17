( function ( mw ) {
	$( function () {
		'use strict';

		var cxview, query, config;

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

		mw.cx.getCXConfiguration( mw.cx.sourceLanguage, mw.cx.targetLanguage ).then( function ( response ) {
			$.extend( config, response.configuration );
			cxview = new mw.cx.ui.TranslationView( config );
			$( 'body' ).append( cxview.$element );
		} );
	} );
}( mediaWiki ) );
