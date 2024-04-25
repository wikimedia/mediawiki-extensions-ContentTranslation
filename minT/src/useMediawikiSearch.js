'use strict';

const PageSearchResult = require( './pageSearchResult.js' );
const useApi = require( './useApi.js' );
const useSiteLinksHelper = require( './useSiteLinksHelper.js' );
const useSearchResultLanguages = require( './useSearchResultLanguages.js' );

/**
 * This composable returns the "getActionApiSearchResult" method that given a Wiki URL
 * and a query string, it returns a PageSearchResult object that contains the metadata
 * and the site links for the first matched page from the "query" action of the related
 * Mediawiki Action API.
 */
const useMediawikiSearch = () => {
	const { fetchPageMetadata } = useApi();
	const { prepareSiteLinks } = useSiteLinksHelper();
	const { getSourceAndDisplayLanguages } = useSearchResultLanguages();

	const getActionApiSearchResult = async ( url, query ) => {
		const response = await fetchPageMetadata( url, query, true );
		const queryResponse = response && response.query;
		const pages = queryResponse && queryResponse.pages;

		const page = pages.find( ( p ) => !p.missing );

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
			langlinks: siteLinks
		} );
	};

	return { getActionApiSearchResult };
};

module.exports = useMediawikiSearch;
