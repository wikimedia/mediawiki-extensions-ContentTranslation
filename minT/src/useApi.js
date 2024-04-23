'use strict';

const fetchSiteMatrix = async () => {
	const myApi = new mw.ForeignApi( 'https://en.wikipedia.org/w/api.php', { anonymous: true } );
	const myParams = {
		action: 'sitematrix',
		format: 'json',
		formatversion: 2,
		origin: '*'
	};
	const response = await myApi.get( myParams );
	const responseSites = [];

	for ( const key in response.sitematrix ) {
		// Check if the key is numeric. Numeric keys contain wiki sites, but the response
		// also contains other keys like "count" and "specials", that we don't need
		if ( !isNaN( key ) ) {
			responseSites.push( response.sitematrix[ key ] );
		}
	}

	return responseSites;
};

/**
 * @return {Promise<{}>} target language to source languages map: { "en": ["de", "el"] }
 */
const fetchMintLanguages = async () => {
	const targetToSourceLanguages = {};

	try {
		const response = await fetch( 'https://cxserver.wikimedia.org/v2/list/mt' );
		const languageData = await response.json();
		/**
		 * { "de": ["en"], "en": ["de", "el"], ... }
		 */
		const sourceToTargetLanguages = languageData.MinT;

		for ( const sourceLanguage in sourceToTargetLanguages ) {
			const targetLanguages = sourceToTargetLanguages[ sourceLanguage ];

			// Iterate through each target language in the array
			for ( let i = 0; i < targetLanguages.length; i++ ) {
				const targetLanguage = targetLanguages[ i ];

				// If the target language key doesn't exist in the inverted object, create it
				if ( !targetToSourceLanguages[ targetLanguage ] ) {
					targetToSourceLanguages[ targetLanguage ] = [];
				}

				// Add the source language to the array of source languages for this target language
				targetToSourceLanguages[ targetLanguage ].push( sourceLanguage );
			}
		}
	} catch ( error ) {
		mw.log.error( 'Error while fetching MinT supported languages', error );
	}

	return targetToSourceLanguages;
};

const useApi = () => ( {
	fetchSiteMatrix,
	fetchMintLanguages
} );

module.exports = useApi;
