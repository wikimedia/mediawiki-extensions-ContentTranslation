const { ref } = require( 'vue' );
const useApi = require( './useApi.js' );
const useState = require( './useState.js' );
const useCXServerToken = require( './useCXServerToken.js' );

/**
 * This composable returns the "translateSectionTitle" function that is used inside the MinT view translation page,
 * to translate the titles of the given section and store it inside the "translatedSectionTitles" ref variable.
 * It also returns the "translatedSectionTitles" to be used inside the same page, and the
 * "resetTranslatedSectionTitles" method to clear the saved section title translations, when needed.
 *
 * @return {{translateSectionTitle: Function, translatedSectionTitles: Ref<string[]>, resetTranslatedSectionTitles: Function}}
 */
const useSectionTitleTranslate = () => {
	const { translate } = useApi();
	const { sourceLanguage, targetLanguage } = useState();
	const { cxServerToken } = useCXServerToken();

	const translatedSectionTitles = ref( [] );

	const translateSectionTitle = ( section, index ) => {
		const sourceSectionTitle = section.title;

		return translate(
			`<div>${ sourceSectionTitle }</div>`,
			sourceLanguage.value,
			targetLanguage.value,
			cxServerToken.value
		)
			.then( ( translation ) => {
				// eslint-disable-next-line es-x/no-regexp-named-capture-groups
				const regExp = /<div>(?<translatedTitle>(.|\s)*)<\/div>/;
				const matches = regExp.exec( translation );
				translatedSectionTitles.value[ index ] = matches ? matches.groups.translatedTitle : '';
			} )
			.catch( ( error ) => mw.log.error( `Error while translating section title "${ sourceSectionTitle }"`, error ) );
	};

	const resetTranslatedSectionTitles = () => ( translatedSectionTitles.value = [] );

	return { translateSectionTitle, translatedSectionTitles, resetTranslatedSectionTitles };
};

module.exports = useSectionTitleTranslate;
