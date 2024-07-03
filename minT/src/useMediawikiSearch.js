'use strict';

const PageSearchResult = require( './pageSearchResult.js' );
const usePageMetadata = require( './usePageMetadata.js' );
const useSiteLinksHelper = require( './useSiteLinksHelper.js' );
const useSearchResultLanguages = require( './useSearchResultLanguages.js' );

/**
 * This composable returns the "getActionApiSearchResult" method that given a Wiki URL
 * and a query string, it returns a PageSearchResult object that contains the metadata
 * and the site links for the first matched page from the "query" action of the related
 * Mediawiki Action API.
 */
const useMediawikiSearch = () => {
	const { findOneOrFetchPage } = usePageMetadata();
	const { prepareSiteLinks } = useSiteLinksHelper();
	const { getSourceAndDisplayLanguages } = useSearchResultLanguages();

	const getActionApiSearchResult = async ( language, query ) => {
		const page = await findOneOrFetchPage( language, query );

		const siteLinks = prepareSiteLinks( page.langlinks );
		const { sourceLanguage } = getSourceAndDisplayLanguages( page.pagelanguage, siteLinks );

		return new PageSearchResult( {
			thumbnail: page.thumbnail,
			pagelanguage: page.pagelanguage,
			title: page.title,
			description: page.description,
			langlinkscount: page.langlinkscount,
			order: 1,
			sourceLanguage: sourceLanguage,
			qid: page.qid,
			langlinks: siteLinks
		} );
	};

	return { getActionApiSearchResult };
};

module.exports = useMediawikiSearch;
