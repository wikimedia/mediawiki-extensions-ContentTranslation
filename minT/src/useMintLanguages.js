'use strict';

const useApi = require( './useApi.js' );
const { ref, computed } = require( 'vue' );
const { fetchMintLanguages } = useApi();

/**
 * target language to source languages map: { "en": ["de", "el"] }
 */
const mintTargetToSourceLanguages = ref( {} );
const mintSourceToTargetLanguages = computed( () => {
	// Invert the mapping
	const sourceToTargetLanguages = {};

	for ( const targetLanguage in mintTargetToSourceLanguages.value ) {
		const sourceLanguages = mintTargetToSourceLanguages.value[ targetLanguage ];

		for ( const source of sourceLanguages ) {
			if ( !sourceToTargetLanguages[ source ] ) {
				sourceToTargetLanguages[ source ] = [];
			}

			if ( !sourceToTargetLanguages[ source ].includes( targetLanguage ) ) {
				sourceToTargetLanguages[ source ].push( targetLanguage );
			}
		}
	}

	return sourceToTargetLanguages;
} );

const setMintLanguages = ( targetToSourceLanguages ) => {
	mintTargetToSourceLanguages.value = targetToSourceLanguages;
};

const mintTargetLanguages = computed( () => Object.keys( mintTargetToSourceLanguages.value ) );

const useMintLanguages = () => {
	const fetchMintTargetLanguages = () => fetchMintLanguages()
		.then( ( targetToSourceLanguages ) => {
			setMintLanguages( targetToSourceLanguages );
		} );

	return {
		fetchMintTargetLanguages,
		mintTargetToSourceLanguages,
		mintSourceToTargetLanguages,
		mintTargetLanguages
	};
};

module.exports = useMintLanguages;
