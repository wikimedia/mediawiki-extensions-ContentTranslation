/**
 * ContentTranslation initialization module.
 */

( function () {
	'use strict';

	function initCX() {
		var query, services = {}, sourceWikiPage, targetWikiPage, translation, VEConfig;

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
		mw.cx.siteMapper = new mw.cx.SiteMapper();
		var sourceTitle = query.page;
		var targetTitle = query.targettitle || query.page;
		var sourceRevision = query.revision;
		var sourceSectionTitle = query.sourcesection;
		var targetSectionTitle = query.targetsection || query.sourcesection;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;
		// Global services that every class can expect to have
		services = {
			siteMapper: mw.cx.siteMapper
		};

		services.requestManager = new mw.cx.MwApiRequestManager( mw.cx.sourceLanguage, mw.cx.targetLanguage, services.siteMapper );
		services.MTService = new mw.cx.MachineTranslationService( mw.cx.sourceLanguage, mw.cx.targetLanguage, services.siteMapper );
		services.MTManager = new mw.cx.MachineTranslationManager( mw.cx.sourceLanguage, mw.cx.targetLanguage, services.MTService );

		sourceWikiPage = new mw.cx.dm.WikiPage( sourceTitle, mw.cx.sourceLanguage, sourceRevision, sourceSectionTitle );
		targetWikiPage = new mw.cx.dm.WikiPage( targetTitle, mw.cx.targetLanguage, null, targetSectionTitle );
		translation = new mw.cx.init.Translation( sourceWikiPage, targetWikiPage, services );
		translation.init();

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, mw.cx.sourceLanguage, sourceTitle, mw.cx.targetLanguage );
		}

		if ( mw.config.get( 'wgContentTranslationBetaFeatureEnabled' ) ) {
			mw.notify( mw.msg( 'cx-beta-feature-enabled-notification' ) );
		}

		// The default values for these options depend on PageImages and Wikibase Client
		// being installed on this wiki. Because we are querying remote wikis, this makes
		// no sense, and hence overwrite the values.
		VEConfig = mw.config.get( 'wgVisualEditorConfig' );
		VEConfig.usePageImages = true;
		VEConfig.usePageDescriptions = true;
		mw.config.set( 'wgVisualEditorConfig', VEConfig );
	}

	// On document ready, initialize, but not during QUnit tests, when this code is loaded
	// only because another file in this module has tests
	if ( !window.QUnit ) {
		$( initCX );
	}
}() );
