'use strict';

const useApi = require( './useApi.js' );
const PageSearchResult = require( './pageSearchResult.js' );
const useWikipediaSites = require( './useWikipediaSites.js' );
const useSearchResultLanguages = require( './useSearchResultLanguages.js' );
const useState = require( './useState.js' );
const useSiteLinksHelper = require( './useSiteLinksHelper.js' );

/**
 * This composable returns two methods ("getWikidataSearchResults", "getSingleWikidataSearchResult") to support
 * searching in Wikidata API. "getWikidataSearchResults" expects a query string, and returns multiple results
 * that match this string, while "getSingleWikidataSearchResult" expects a Wikidata Qid and returns only a
 * single result that corresponds to that Qid (if such result exists).
 */
const useWikidataSearch = () => {
	const { sites } = useWikipediaSites();
	const { targetLanguage } = useState();
	const { getSourceAndDisplayLanguages } = useSearchResultLanguages();
	const { fetchPageMetadata, searchEntities, getWikidataSitelinks } = useApi();
	const { prepareSiteLinks } = useSiteLinksHelper();

	/**
	 * @param {string} language
	 * @return {WikiSite}
	 */
	const getWikiSiteByLanguage = ( language ) => sites.value.find(
		( site ) => site.languageCode === language
	);

	/**
	 * @param {{ displayLanguage: string, displayTitle: string }[]} rawResults
	 * @return {{}}
	 */
	const groupBySiteUrl = ( rawResults ) => {

		const groups = {};

		for ( const result of rawResults ) {
			const site = getWikiSiteByLanguage( result.displayLanguage );
			const url = site && site.url;
			if ( !groups[ url ] ) {
				groups[ url ] = [];
			}
			groups[ url ] = [ ...groups[ url ], result.displayTitle ];
		}

		return groups;
	};

	/**
	 * For some mysterious reason, setting the function name to "getPageSearchResults"
	 * leads to a SyntaxError: "Uncaught SyntaxError: Malformed arrow function parameter list".
	 * TODO: Rename this method.
	 * @param {{ displayLanguage: string, displayTitle: string, order: number, sourceLanguage: string, siteLinks }[]} rawResults
	 * @return {Promise<PageSearchResult[]>}
	 */
	const getPageSearchResults2 = async ( rawResults ) => {
		const wikiGroups = groupBySiteUrl( rawResults );

		const pageSearchResults = [];
		for ( const wikiURL in wikiGroups ) {
			const groupTitles = wikiGroups[ wikiURL ];
			const response = await fetchPageMetadata( wikiURL, groupTitles.join( '|' ) );
			const queryResponse = response && response.query;

			/** @type {PageSearchResult[]} */
			const pageSubResults = [];
			const redirects = queryResponse && queryResponse.redirects;
			const pages = queryResponse && queryResponse.pages || [];

			for ( const page of pages ) {
				const searchResult = rawResults.find( ( result ) => {
					const redirect = ( redirects || [] ).find( ( r ) => r.to === page.title );

					const redirectFrom = redirect && redirect.from;
					return result.displayTitle === ( redirectFrom || page.title );
				} );

				const pageResult = new PageSearchResult( {
					thumbnail: page.thumbnail,
					pagelanguage: page.pagelanguage,
					title: page.title,
					description: page.description,
					langlinkscount: page.langlinkscount,
					order: searchResult.order,
					sourceLanguage: searchResult.sourceLanguage,
					langlinks: searchResult.siteLinks
				} );
				pageSubResults.push( pageResult );
			}
			pageSearchResults.push( ...pageSubResults );
			pageSearchResults.sort( ( a, b ) => a.order - b.order );
		}

		return pageSearchResults;
	};

	/**
	 * @param {string} qid
	 * @param {string} displayLanguage
	 * @return {Promise<PageSearchResult|null>}
	 */
	const getSingleWikidataSearchResult = async ( qid, displayLanguage ) => {
		/**
		 * @type {{id: string, sitelinks: {site: string, title: string}[]}[]}
		 */
		const entities = await getWikidataSitelinks( qid );

		const entity = entities && entities[ 0 ];

		if ( !entity ) {
			return null;
		}
		const siteLinks = prepareSiteLinks( entity.sitelinks );
		const { sourceLanguage } = getSourceAndDisplayLanguages( displayLanguage, siteLinks );

		const displaySiteLink = siteLinks.find( ( link ) => link.language === displayLanguage );
		const displayTitle = displaySiteLink && displaySiteLink.title;

		/**
		 * @type {{ displayLanguage: string, displayTitle: string, order: number, sourceLanguage: string, siteLinks }}
		 */
		const rawResult = {
			displayLanguage,
			displayTitle,
			order: 1,
			sourceLanguage,
			siteLinks
		};

		const pageSearchResults = await getPageSearchResults2( [ rawResult ] );

		return pageSearchResults && pageSearchResults[ 0 ];
	};

	/**
	 * @param {string} query
	 * @return {Promise<PageSearchResult[]>}
	 */
	const getWikidataSearchResults = async ( query ) => {
		/**
		 * @type {{id: string, order: number, matchLanguage: string}[]}
		 */
		const searchResults = await searchEntities( query, targetLanguage.value );

		const idsString = searchResults.map( ( result ) => result.id ).join( '|' );
		/**
		 * @type {{id: string, sitelinks: {site: string, title: string}[]}[]}
		 */
		const entities = await getWikidataSitelinks( idsString );

		/**
		 * @type {{id: string, order: number, matchLanguage: string, siteLinks: { site: string, title: string, language: string }[]}[]}
		 */
		const resultsWithLinks = searchResults.map( ( result ) => {
			const entitySiteLinks = entities.find( ( e ) => e.id === result.id ).sitelinks;
			const siteLinks = prepareSiteLinks( entitySiteLinks );

			return {
				id: result.id,
				order: result.order,
				matchLanguage: result.matchLanguage,
				siteLinks
			};
		} );

		/**
		 * @type {{ displayLanguage: string, displayTitle: string, order: number, sourceLanguage: string, siteLinks }[]}
		 */
		const rawResults = [];
		for ( const result of resultsWithLinks ) {
			const { displayLanguage, sourceLanguage } =
					getSourceAndDisplayLanguages( result.matchLanguage, result.siteLinks );
			const sourceSiteLink = result.siteLinks.find(
				( link ) => link.language === sourceLanguage
			);
			const sourceTitle = sourceSiteLink && sourceSiteLink.title;
			const displaySiteLink = result.siteLinks.find(
				( link ) => link.language === displayLanguage
			);
			const displayTitle = displaySiteLink && displaySiteLink.title;

			if ( sourceTitle ) {
				rawResults.push( {
					displayLanguage,
					displayTitle,
					order: result.order,
					sourceLanguage,
					siteLinks: result.siteLinks
				} );
			}
		}

		return getPageSearchResults2( rawResults );
	};

	return { getWikidataSearchResults, getSingleWikidataSearchResult };
};

module.exports = useWikidataSearch;
