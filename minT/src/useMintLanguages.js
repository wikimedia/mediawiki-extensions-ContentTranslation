'use strict';

const useApi = require( './useApi.js' );
const { ref } = require( 'vue' );
const { fetchMintLanguages } = useApi();

/**
 * target language to source languages map: { "en": ["de", "el"] }
 */
const mintLanguages = ref( {} );
const setMintLanguages = ( targetToSourceLanguages ) => {
	mintLanguages.value = targetToSourceLanguages;
};

const useMintLanguages = () => {
	const fetchMintTargetLanguages = () => {
		return fetchMintLanguages().then( ( targetToSourceLanguages ) => {
			setMintLanguages( targetToSourceLanguages );
		} );
	};

	return { fetchMintTargetLanguages, mintLanguages };
};

module.exports = useMintLanguages;
