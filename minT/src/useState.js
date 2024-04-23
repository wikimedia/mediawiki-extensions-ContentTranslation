'use strict';

const { ref } = require( 'vue' );
const {
	mintInitialSourceLanguageCode: initialSourceLanguage,
	mintInitialTargetLanguageCode: initialTargetLanguage
} = require( './initialLanguages.json' );

const sourceLanguage = ref( initialSourceLanguage );
const targetLanguage = ref( initialTargetLanguage );

/**
 * @param {string} language
 */
const setSourceLanguage = ( language ) => {
	sourceLanguage.value = language;
};

const setTargetLanguage = ( language ) => {
	targetLanguage.value = language;
};

const useState = () => {
	return {
		sourceLanguage,
		targetLanguage,
		setSourceLanguage,
		setTargetLanguage
	};
};

module.exports = useState;
