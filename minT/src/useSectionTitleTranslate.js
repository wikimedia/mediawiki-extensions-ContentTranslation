const { ref } = require( 'vue' );
const useApi = require( './useApi.js' );
const useState = require( './useState.js' );
const useCXServerToken = require( './useCXServerToken.js' );

/**
 * This composable returns the "translateSectionTitle" function that is used inside the
 * AutomaticTranslation "view translation" page, to translate the titles of the given section and
 * store it inside the "translatedSectionTitles" ref variable. It also returns the
 * "translatedSectionTitles" to be used inside the same page, and the "resetTranslatedSectionTitles"
 * method to clear the saved section title translations, when needed.
 *
 * @return {{doTranslateSectionTitle: Function, translateSectionTitle: Function, translatedSectionTitles: Ref<string[]>, resetTranslatedSectionTitles: Function}}
 */
const useSectionTitleTranslate = () => {
	const { translate } = useApi();
	const { sourceLanguage, targetLanguage } = useState();
	const { cxServerToken } = useCXServerToken();

	const translatedSectionTitles = ref( [] );

	const doTranslateSectionTitle = ( sectionTitle, sourceLang ) =>
		translate(
			`<div>${ sectionTitle }</div>`,
			sourceLang,
			targetLanguage.value,
			cxServerToken.value
		)
			.then( ( translation ) => {
				// eslint-disable-next-line es-x/no-regexp-named-capture-groups
				const regExp = /<div>(?<translatedTitle>(.|\s)*)<\/div>/;
				const matches = regExp.exec( translation );

				return matches ? matches.groups.translatedTitle : '';
			} )
			.catch( ( error ) => mw.log.error( `Error while translating section title "${ sectionTitle }"`, error ) );

	const translateSectionTitle = ( section, index ) => doTranslateSectionTitle(
		section.title,
		sourceLanguage.value
	)
		.then( ( translation ) => {
			translatedSectionTitles.value[ index ] = translation;
		} );

	const resetTranslatedSectionTitles = () => ( translatedSectionTitles.value = [] );

	return {
		doTranslateSectionTitle,
		translateSectionTitle,
		translatedSectionTitles,
		resetTranslatedSectionTitles
	};
};

module.exports = useSectionTitleTranslate;
