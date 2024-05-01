'use strict';

const useWikidataSearch = require( './useWikidataSearch.js' );
const useMediawikiSearch = require( './useMediawikiSearch.js' );
const useState = require( './useState.js' );
const Vue = require( 'vue' );

const pageResults = Vue.ref( [] );

/**
 * This composable returns all the needed methods and ref variables to support the "Search for a topic"
 * functionality inside MinT search page.
 *
 * More specifically, it returns 4 methods to handle all different search cases - search by Wikidata ID,
 * search in Wikidata by text and search in MediaWiki Action API either by giving a query string
 * or a Wikipedia article URL.
 *
 * Additionally, it returns the "loadingSearch" and the "pageResults" ref variables, that contain the
 * search loading status and results respectively, to be used inside the search page Vue SFC.
 */
const useSearch = () => {
	const loadingSearch = Vue.ref( false );
	const { targetLanguage } = useState();
	const { getWikidataSearchResults, getSingleWikidataSearchResult } = useWikidataSearch();
	const { getActionApiSearchResult } = useMediawikiSearch();

	const searchByQid = async ( qid, displayLanguage ) => {
		pageResults.value = [];
		loadingSearch.value = true;

		return getSingleWikidataSearchResult( qid, displayLanguage )
			.then( ( fetchedResult ) => ( pageResults.value = [ fetchedResult ] ) )
			.catch( ( error ) => {
				mw.log.error( 'error while searching by Wikidata ID', error );
			} )
			.finally( () => ( loadingSearch.value = false ) );
	};

	/**
	 * @param {string} query
	 * @return {Promise<void>}
	 */
	const searchAll = async ( query ) => {
		pageResults.value = [];
		loadingSearch.value = true;

		return getWikidataSearchResults( query )
			.then( ( fetchedResults ) => ( pageResults.value = fetchedResults ) )
			.catch( ( error ) => {
				mw.log.error( 'error while searching in Wikidata', error );
			} )
			.finally( () => ( loadingSearch.value = false ) );
	};

	/**
	 * @param {string} query
	 * @param {string} language
	 * @return {Promise<void>}
	 */
	const searchByLanguage = async ( query, language ) => {
		pageResults.value = [];
		loadingSearch.value = true;

		if ( language !== targetLanguage.value ) {
			// TODO: translate query and use it
			// const translatedQuery = null;
			// query = [ query, translatedQuery ].join( '|' );
		}

		return getActionApiSearchResult( language, query )
			.then( ( result ) => ( pageResults.value = [ result ] ) )
			.catch( ( error ) => {
				mw.log.error( 'error while fetching search result by language', error );
			} )
			.finally( () => ( loadingSearch.value = false ) );
	};

	const searchByURL = async ( query, displayLanguage ) => {
		pageResults.value = [];
		loadingSearch.value = true;

		const url = new URL( query );
		const wikipediaURLRegex = /^(\w+)\.wikipedia\.org$/;

		const hostMatch = url.hostname.match( wikipediaURLRegex );
		const wikiDomainCode = hostMatch && hostMatch[ 1 ];
		if ( !wikiDomainCode ) {
			loadingSearch.value = false;
			return;
		}

		const path = url.pathname;

		let urlTitle;
		if ( path === '/w/index.php' ) {
			const searchParams = url.searchParams;

			urlTitle = searchParams && searchParams.get( 'title' );
		} else {
			const viewPageUrlPathRegex = /^\/wiki\/(.*)$/;
			const pathUrlPathMatch = path.match( viewPageUrlPathRegex );
			urlTitle = pathUrlPathMatch && pathUrlPathMatch[ 1 ];
		}

		if ( !urlTitle ) {
			loadingSearch.value = false;
			mw.log.warn( 'Invalid search url', query );
			// TODO: Should we display a message to the user?
			return;
		}

		try {
			let result = await getActionApiSearchResult( wikiDomainCode, urlTitle );
			const titleInDisplayLanguage = result.getTitleByLanguage( displayLanguage );
			if ( result.language !== displayLanguage && !!titleInDisplayLanguage ) {
				result = await getActionApiSearchResult( displayLanguage, titleInDisplayLanguage );
			}
			pageResults.value = [ result ];
		} catch ( error ) {
			mw.log.error( 'error while fetching search result by language', error );
		} finally {
			loadingSearch.value = false;
		}
	};

	return {
		loadingSearch,
		searchAll,
		pageResults,
		searchByLanguage,
		searchByQid,
		searchByURL
	};
};

module.exports = useSearch;
