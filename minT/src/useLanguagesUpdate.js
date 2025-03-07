const useState = require( './useState.js' );
const useEventLogging = require( './useEventLogging.js' );
const { logEvent } = useEventLogging();

const {
	setSourceLanguage,
	setTargetLanguage,
	sourceLanguage,
	targetLanguage
} = useState();

const onSourceLanguageUpdate = ( actionContext, language ) => {
	const translationContext = {
		// eslint-disable-next-line camelcase
		source_language: sourceLanguage.value,
		// eslint-disable-next-line camelcase
		target_language: language
	};
	logEvent( 'click', 'change_source_lang', null, actionContext, translationContext );

	setSourceLanguage( language );
};

const onTargetLanguageUpdate = ( actionContext, language ) => {
	const translationContext = {
		// eslint-disable-next-line camelcase
		source_language: targetLanguage.value,
		// eslint-disable-next-line camelcase
		target_language: language
	};
	logEvent( 'click', 'change_target_lang', null, actionContext, translationContext );

	setTargetLanguage( language );
};

const useLanguagesUpdate = () => ( { onSourceLanguageUpdate, onTargetLanguageUpdate } );

module.exports = useLanguagesUpdate;
