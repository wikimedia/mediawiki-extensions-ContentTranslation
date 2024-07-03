'use strict';

const { ref } = require( 'vue' );
const useApi = require( './useApi.js' );
const MediawikiPage = require( './mediawikiPage.js' );

/**
 * @type {ComputedRef<MediawikiPage>}
 */
const pages = ref( [] );

const usePageMetadata = () => {
	const { fetchPageMetadata } = useApi();

	/**
	 * @param {string} language
	 * @param {string} titles
	 * @param {boolean} includeLangLinks
	 * @return {Promise<MediawikiPage[]>}
	 */
	const fetchPages = async ( language, titles, includeLangLinks = false ) => {
		const response = await fetchPageMetadata( language, titles, includeLangLinks );

		const redirects = response.query.redirects || [];
		const redirectMap = redirects.reduce(
			// eslint-disable-next-line es-x/no-rest-spread-properties
			( rMap, redirect ) => ( { ...rMap, [ redirect.to ]: redirect.from } ),
			{}
		);

		// consider title normalizations to also support non normalized titles for
		// multi-word page titles, e.g. "Greenhouse_gas" instead of "Greenhouse gas"
		const titleNormalizations = response.query.normalized || [];
		const normalizationMap = titleNormalizations.reduce(
			( nMap, normalization ) => ( {
				// eslint-disable-next-line es-x/no-rest-spread-properties
				...nMap,
				[ normalization.to ]: normalization.from
			} ),
			{}
		);

		const responsePages = response.query.pages.filter( ( page ) => !page.missing );

		const fetchedPages = responsePages.map( ( page ) => {
			// non-normalized page titles take priority over "redirect from" titles,
			// because they only exist in the response, when they have included in the
			// "titles" property of the request payload
			const alias = normalizationMap[ page.title ] || redirectMap[ page.title ] || null;

			return new MediawikiPage( {
				pagelanguage: page.pagelanguage,
				title: page.title,
				description: page.description,
				thumbnail: page.thumbnail,
				langlinkscount: page.langlinkscount,
				qid: page.pageprops && page.pageprops.wikibase_item,
				langlinks: page.langlinks || [],
				alias
			} );
		} );

		pages.value = [ ...pages.value, ...fetchedPages ];

		return fetchedPages;
	};

	/**
	 * @param {string} language
	 * @param {string} title
	 * @return {Promise<MediawikiPage|undefined>}
	 */
	const findOneOrFetchPage = async ( language, title ) => {
		const existingPage = pages.value.find(
			( page ) => page.isTitleEqual( title ) && page.pagelanguage === language
		);

		if ( existingPage ) {
			return existingPage;
		}

		const fetchedPages = await fetchPages( language, title, true );

		return fetchedPages[ 0 ];
	};

	return { fetchPages, findOneOrFetchPage, pages };
};

module.exports = usePageMetadata;
