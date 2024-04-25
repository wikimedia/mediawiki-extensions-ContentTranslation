'use strict';

const useWikipediaSites = require( './useWikipediaSites.js' );
const { defaultSourceLanguage } = require( './constants.js' );
const { computed } = require( 'vue' );
const useState = require( './useState.js' );

/**
 * This composable exposes the "getSourceAndDisplayLanguages" method that given a language and an array of
 * site link objects of a search result, returns the source and the display language for the corresponding
 * search result.
 *
 * The source language and the display language of a result are being calculated based on some non-trivial
 * logic, and are used by all different search cases, and this composable is created to support these cases.
 */
const useSearchResultLanguages = () => {
	const { sites } = useWikipediaSites();
	const wikipediaLanguages = computed( () => sites.value.map( ( site ) => site.languageCode ) );
	const { sourceLanguage, targetLanguage } = useState();

	/**
	 * @param {string} matchLanguage
	 * @param {{ site: string, title: string, language: string }[]} siteLinks
	 * @return {{ sourceLanguage: string|undefined, displayLanguage: string|undefined }}
	 */
	const getSourceAndDisplayLanguages = ( matchLanguage, siteLinks ) => {
		const siteLinkLanguages = siteLinks.map( ( siteLink ) => siteLink.language );

		const firstExistingSiteLink = siteLinks.find(
			( siteLink ) => wikipediaLanguages.value.includes( siteLink.language )
		);
		const firstExistingLanguage = firstExistingSiteLink && firstExistingSiteLink.language;

		const candidateSourceLanguages = [
			sourceLanguage.value,
			matchLanguage,
			defaultSourceLanguage,
			firstExistingLanguage
		].filter( ( language ) => {
			// only items for which there is a Wikipedia article in at least one language
			return !!language && language !== targetLanguage.value && language !== 'all' && siteLinkLanguages.includes( language );
		} );
		const resultSourceLanguage = candidateSourceLanguages[ 0 ];

		const candidateDisplayLanguages = [
			targetLanguage.value,
			matchLanguage,
			defaultSourceLanguage,
			firstExistingLanguage
		].filter( ( language ) => !!language && siteLinkLanguages.includes( language ) );

		const resultDisplayLanguage = candidateDisplayLanguages[ 0 ];

		return {
			sourceLanguage: resultSourceLanguage,
			displayLanguage: resultDisplayLanguage
		};
	};

	return { getSourceAndDisplayLanguages };
};

module.exports = useSearchResultLanguages;
