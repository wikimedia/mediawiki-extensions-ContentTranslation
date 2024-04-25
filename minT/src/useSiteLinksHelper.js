'use strict';

const useWikipediaSites = require( './useWikipediaSites.js' );

/**
 * This composable exposes the "prepareSiteLinks" method that given an "incomplete" array of
 * site link objects, as returned by Wikidata or MediaWiki Action API, it completes each site
 * link object by using the Wikipedia site matrix, and returns the array. Site links for which
 * no Wikipedia site can be found are filtered out from the returned array.
 *
 * The reason for this method to exist, is that site links returned by different APIs can include
 * different properties. Specifically, the "site" (e.g. 'elwiki') or the language property may be
 * missing, depending on which API is used (Wikidata or Wikipedia Action API).
 *
 * To provide a universal way of handling site links, this method adds the missing properties,
 * based on the Wikipedia site matrix.
 */
const useSiteLinksHelper = () => {
	const { sites } = useWikipediaSites();

	/**
	 * @param {{ site: string, title: string }[]|{ lang: string, title: string }[]} siteLinks
	 * @return {{ site: string, title: string, language: string }[]}
	 */
	const prepareSiteLinks = ( siteLinks ) => {
		const completeSiteLinks = siteLinks.map( ( siteLink ) => {
			const currentSite = sites.value.find(
				( site ) =>
					( siteLink.site && site.dbname === siteLink.site ) ||
						( siteLink.lang && site.languageCode === siteLink.lang )
			);

			if ( !currentSite ) {
				return null;
			}
			return {
				site: currentSite.dbname,
				title: siteLink.title,
				language: currentSite.languageCode
			};
		} );

		return completeSiteLinks.filter( ( siteLink ) => !!siteLink );
	};

	return { prepareSiteLinks };
};

module.exports = useSiteLinksHelper;
