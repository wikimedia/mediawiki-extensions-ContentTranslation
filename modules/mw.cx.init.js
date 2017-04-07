/**
 * ContentTranslation initialization module.
 */

( function ( mw, $ ) {
	'use strict';

	function initCX() {
		var query, services = {}, sourceWikiPage, targetWikiPage, translation;

		query = new mw.Uri().query;
		if (
			!query.page || !query.from || !query.to ||
			( mw.Title.newFromText( query.page ) === null )
		) {
			location.href = mw.util.getUrl( 'Special:ContentTranslation' );
			return;
		}

		// Set the global siteMapper for code which we cannot inject it
		// All these configuration in mw.cx is just for supporting legacy code.
		// New code should get them from config injected to classes.
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		mw.cx.sourceTitle = query.page;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;
		mw.cx.sourceRevision = query.revision;
		mw.cx.targetTitle = query.targettitle || query.page;

		// Global services that every class can expect to have
		services = {
			siteMapper: mw.cx.siteMapper
		};

		services.requestManager = new mw.cx.MwApiRequestManager( query.from, query.to, services.siteMapper );

		sourceWikiPage = new mw.cx.dm.WikiPage( query.page, query.from, query.revision );
		targetWikiPage = new mw.cx.dm.WikiPage( query.targettitle || query.page, query.to );
		translation = new mw.cx.init.Translation( sourceWikiPage, targetWikiPage, services );
		translation.init();

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.page, query.to );
		}
	}

	// On document ready, initialize.
	$( initCX );
}( mediaWiki, jQuery ) );
