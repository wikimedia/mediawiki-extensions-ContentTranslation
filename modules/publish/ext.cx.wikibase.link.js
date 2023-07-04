/*!
 * ContentTranslation - Link articles using Wikibase
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * Link the source and target articles in the Wikibase repo
	 *
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 * @param {string} sourceTitle
	 * @param {string} targetTitle
	 * @return {Promise}
	 */
	function addWikibaseLink(
		sourceLanguage,
		targetLanguage,
		sourceTitle,
		targetTitle
	) {
		var title, params, targetWikiId, api;
		var namespaceIds = mw.config.get( 'wgNamespaceIds' );
		// Do not link source pages in the user namespace
		var sourceMwTitle = new mw.Title( sourceTitle );

		// Link only pages in the main space
		title = new mw.Title( targetTitle );
		if (
			title.getNamespaceId() !== 0 ||
			sourceMwTitle.getNamespaceId() === namespaceIds.user
		) {
			return Promise.resolve();
		}

		// Current wiki is target wiki since publishing happens at target wiki
		targetWikiId = mw.config.get( 'wgWikiID' );
		params = {
			action: 'wblinktitles',
			fromsite: targetWikiId.replace( targetLanguage, sourceLanguage ),
			fromtitle: sourceTitle,
			tosite: targetWikiId,
			totitle: targetTitle
		};
		api = new mw.ForeignApi( 'https://www.wikidata.org/w/api.php' );
		return Promise.resolve( api.postWithToken( 'csrf', params )
			.then( function ( response ) {
				const revisionId = response.entity.sitelinks.lastrevid;
				params = {
					action: 'tag',
					revid: revisionId,
					tags: [ 'contenttranslation', 'contenttranslation-v2' ]
				};
				return Promise.resolve( api.postWithToken( 'csrf', params ) );
			} )
			.then( function () {
				const mwApi = new mw.Api();

				// Purge the newly-created page after adding the link,
				// so that they will appear as soon as possible without manual purging
				return mwApi.post( {
					action: 'purge',
					titles: targetTitle
				} );
			} )
		);
	}

	$( function () {
		mw.hook( 'mw.cx.translation.published' ).add( addWikibaseLink );
	} );
}() );
