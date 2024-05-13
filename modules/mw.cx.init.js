/**
 * ContentTranslation initialization module.
 */

( function () {
	'use strict';

	/**
	 * This method receives the "targettitle" URL param, the sourceTitle and the mtService as arguments,
	 * and returns the appropriate target title for this translation, according to the following logic:
	 * 1. If the "targettitle" URL param is set, the method returns it
	 * 2. If not, then a request is sent to the /suggest/title cxserver endpoint and the target title
	 *    that is given in the HTTP response, is returned
	 * 3. If that request fails, the source title is returned as fallback
	 *
	 * @param {string|null} targetTitleUrlParam
	 * @param {string} sourceTitle
	 * @param {mw.cx.MachineTranslationService} mtService
	 * @return {jQuery.Promise}
	 */
	function getTargetTitle( targetTitleUrlParam, sourceTitle, mtService ) {
		if ( targetTitleUrlParam ) {
			return $.Deferred().resolve( targetTitleUrlParam );
		}

		return mtService.getSuggestedTitle( sourceTitle ).then(
			function ( suggestedTitle ) {
				return mw.cx.getTitleForNamespace( suggestedTitle, mw.cx.getDefaultTargetNamespace() );
			},
			function () {
				return sourceTitle;
			}
		);
	}

	function initCX() {
		let services = {};

		const query = new mw.Uri().query;
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
		const sourceTitle = query.page;
		const sourceRevision = query.revision;
		const sourceSectionTitle = query.sourcesection;
		const targetSectionTitle = query.targetsection || query.sourcesection;
		mw.cx.targetLanguage = query.to;
		mw.cx.sourceLanguage = query.from;
		// Global services that every class can expect to have
		services = {
			siteMapper: mw.cx.siteMapper
		};

		services.requestManager = new mw.cx.MwApiRequestManager( mw.cx.sourceLanguage, mw.cx.targetLanguage, services.siteMapper );
		services.MTService = new mw.cx.MachineTranslationService( mw.cx.sourceLanguage, mw.cx.targetLanguage, services.siteMapper );
		services.MTManager = new mw.cx.MachineTranslationManager( mw.cx.sourceLanguage, mw.cx.targetLanguage, services.MTService );

		getTargetTitle( query.targettitle, sourceTitle, services.MTService ).then( function ( targetTitle ) {
			const sourceWikiPage = new mw.cx.dm.WikiPage( sourceTitle, mw.cx.sourceLanguage, sourceRevision, sourceSectionTitle );
			const targetWikiPage = new mw.cx.dm.WikiPage( targetTitle, mw.cx.targetLanguage, null, targetSectionTitle );
			const translation = new mw.cx.init.Translation( sourceWikiPage, targetWikiPage, services );
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
			const VEConfig = mw.config.get( 'wgVisualEditorConfig' );
			VEConfig.usePageImages = true;
			VEConfig.usePageDescriptions = true;
			mw.config.set( 'wgVisualEditorConfig', VEConfig );
		} );

	}

	// On document ready, initialize, but not during QUnit tests, when this code is loaded
	// only because another file in this module has tests
	if ( !window.QUnit ) {
		$( initCX );
	}
}() );
