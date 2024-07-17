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
	if ( language === targetLanguage.value ) {
		targetLanguage.value = sourceLanguage.value;
	}
	sourceLanguage.value = language;
};

const setTargetLanguage = ( language ) => {
	if ( language === sourceLanguage.value ) {
		sourceLanguage.value = targetLanguage.value;
	}
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
