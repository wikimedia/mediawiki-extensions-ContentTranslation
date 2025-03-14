const PageSection = require( './pageSection.js' );
const useApi = require( './useApi.js' );
const useState = require( './useState.js' );
const useCXServerToken = require( './useCXServerToken.js' );

/**
 * This composable returns the "translateSectionTitle" function that is used inside the
 * AutomaticTranslation "view translation" page, to translate the titles of the given section.
 * It also returns the "resetTranslatedSectionTitles" method to clear the section title
 * translations, when needed.
 *
 * @return {{
 *   doTranslateSectionTitle: Function,
 *   translateSectionTitle: Function,
 *   resetTranslatedSectionTitles: Function
 * }}
 */
const useSectionTitleTranslate = () => {
	const { translate } = useApi();
	const { sourceLanguage, targetLanguage } = useState();
	const { cxServerToken } = useCXServerToken();

	/**
	 * @param {string} sectionTitle
	 * @param {string} sourceLang
	 * @return {Promise<string>}
	 */
	const doTranslateSectionTitle = ( sectionTitle, sourceLang ) => translate(
		`<div>${ sectionTitle }</div>`,
		sourceLang,
		targetLanguage.value,
		cxServerToken.value
	).then( ( translation ) => {
		// eslint-disable-next-line es-x/no-regexp-named-capture-groups
		const regExp = /<div>(?<translatedTitle>(.|\s)*)<\/div>/;
		const matches = regExp.exec( translation );

		return matches ? matches.groups.translatedTitle : '';
	} ).catch( ( error ) => mw.log.error( `Error while translating section title "${ sectionTitle }"`, error ) );

	/**
	 * @param {PageSection} section
	 * @return {Promise}
	 */
	const translateSectionTitle = ( section ) => doTranslateSectionTitle(
		section.title,
		sourceLanguage.value
	).then( ( translation ) => {
		section.titleTranslation = translation;
	} );

	/**
	 * @param {Ref<PageSection[]>} sections
	 */
	const resetTranslatedSectionTitles = ( sections ) => {
		for ( const section of sections.value ) {
			section.titleTranslation = null;
		}
	};

	return {
		doTranslateSectionTitle,
		translateSectionTitle,
		resetTranslatedSectionTitles
	};
};

module.exports = useSectionTitleTranslate;
