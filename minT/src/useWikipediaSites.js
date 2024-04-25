'use strict';

const WikiSite = require( './wikiSite.js' );
const useApi = require( './useApi.js' );
const { ref } = require( 'vue' );
const { fetchSiteMatrix } = useApi();

const sites = ref( [] );
/**
 * @param {WikiSite[]} wikiSites
 */
const setSites = ( wikiSites ) => {
	sites.value = wikiSites;
};

const useWikipediaSites = () => {
	const fetchWikipediaSites = async () => {
		const wikiSites = await fetchSiteMatrix();
		const fetchedSites = wikiSites.map( ( fetchedSite ) => {
			const site = Object.values( fetchedSite.site ).find( ( s ) => s.code === 'wiki' );
			return new WikiSite( {
				languageCode: fetchedSite.code,
				dbname: site && site.dbname,
				url: site && site.url
			} );
		} );

		setSites( fetchedSites );
	};

	return { fetchWikipediaSites, sites };
};

module.exports = useWikipediaSites;
