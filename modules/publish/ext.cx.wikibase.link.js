/*!
 * ContentTranslation - Link articles using Wikibase
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
/* global wikibase */
( function () {
	'use strict';

	/**
	 * @return {mw.Api}
	 */
	function getMwApiForRepo() {
		var repoConfig = mw.config.get( 'wbRepo' ),
			repoApiEndpoint = repoConfig.url + repoConfig.scriptPath + '/api.php';

		return wikibase.api.getLocationAgnosticMwApi( repoApiEndpoint );
	}

	/**
	 * Link the source and target articles in the Wikibase repo
	 *
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 * @param {string} sourceTitle
	 * @param {string} targetTitle
	 */
	function addWikibaseLink( sourceLanguage, targetLanguage, sourceTitle, targetTitle ) {
		var title, sourceApi;

		// Link only pages in the main space
		title = new mw.Title( targetTitle );
		if ( title.getNamespaceId() !== 0 ) {
			return;
		}

		sourceApi = mw.cx.siteMapper.getApi( sourceLanguage );

		// TODO: Use action=query&meta=wikibase API
		// that expose siteid as per
		// https://gerrit.wikimedia.org/r/#/c/214517/
		sourceApi.get( {
			action: 'query',
			meta: 'siteinfo',
			siprop: 'general'
		} ).done( function ( result ) {
			var repoApi, targetWikiId, sourceWikiId, pageConnector;

			repoApi = new wikibase.api.RepoApi( getMwApiForRepo() );
			targetWikiId = mw.config.get( 'wgWikiID' );
			sourceWikiId = result.query.general.wikiid;

			pageConnector = new wikibase.PageConnector(
				repoApi,
				targetWikiId,
				targetTitle,
				sourceWikiId,
				sourceTitle
			);

			pageConnector.linkPages().done( function () {
				var api = new mw.Api();

				// Purge the newly-created page after adding the link,
				// so that they will appear as soon as possible without manual purging
				api.post( {
					action: 'purge',
					titles: targetTitle
				} );
			} );
		} );
	}

	$( function () {
		mw.loader.using( [
			'jquery.wikibase.linkitem',
			'mw.config.values.wbRepo'
		] ).then( function () {
			mw.hook( 'mw.cx.translation.published' ).add( addWikibaseLink );
		} );
	} );
}() );
