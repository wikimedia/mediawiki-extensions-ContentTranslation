/**
 * ContentTranslation initialization module.
 */

( function ( mw, $ ) {
	'use strict';

	function initCX() {
		var translation, query, requestManager, config;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		query = new mw.Uri().query;
		mw.cx.sourceTitle = query.page;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;
		mw.cx.sourceRevision = query.revision;
		mw.cx.targetTitle = query.targettitle || query.page;
		// All these configuration in mw.cx is just for supporting legacy code.
		// New code should get them from config injected to classes.

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
		requestManager = new mw.cx.MwApiRequestManager( config );
		requestManager.init();
		config.requestManager = requestManager;

		if ( !config.sourceTitle || !config.sourceLanguage || !config.targetLanguage ||
			( mw.Title.newFromText( config.sourceTitle ) === null )
		) {
			location.href = mw.util.getUrl( 'Special:ContentTranslation' );
		} else {
			translation = new mw.cx.init.Translation( config );
			translation.init();
		}
	}

	// On document ready, initialize.
	$( initCX );
}( mediaWiki, jQuery ) );
