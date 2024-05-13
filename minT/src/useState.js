'use strict';

const { ref } = require( 'vue' );
const {
	mintInitialSourceLanguageCode,
	mintInitialTargetLanguageCode
} = require( './initialLanguages.json' );

const mintUrlSourceLanguageCode = mw.config.get( 'mintUrlSourceLanguageCode' );
const mintUrlTargetLanguageCode = mw.config.get( 'mintUrlTargetLanguageCode' );

const initialSourceLanguage = mintUrlSourceLanguageCode || mintInitialSourceLanguageCode;
const initialTargetLanguage = mintUrlTargetLanguageCode || mintInitialTargetLanguageCode;

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
