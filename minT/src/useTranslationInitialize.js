const { ref } = require( 'vue' );
const useApi = require( './useApi.js' );
const useState = require( './useState.js' );
const useCXServerToken = require( './useCXServerToken.js' );

/**
 * This composable returns the "initializeTranslation" method that is used inside the MinT view translation page,
 * to fetch the page contents, translate the lead section and store the translation inside the "leadSectionContents"
 * ref variable, which is also returned. This composable also returns the "loadingLeadSectionTranslation" boolean
 * ref variable that indicates whether the translation request is pending, and the "doc" ref variable that holds
 * the HTML document representing the source page.
 *
 * @return {{loadingLeadSectionTranslation: Ref<boolean>, initializeTranslation: Function, doc: Ref<Document | null>, leadSectionContents: Ref<string>}}
 */
const useTranslationInitialize = () => {
	const { fetchPageContent, translate } = useApi();
	const { sourceLanguage, targetLanguage } = useState();
	const { cxServerToken } = useCXServerToken();
	const doc = ref( null );
	const leadSectionContents = ref( '' );
	const loadingLeadSectionTranslation = ref( true );

	const initializeTranslation = ( title ) => {
		leadSectionContents.value = '';
		loadingLeadSectionTranslation.value = true;

		return fetchPageContent( sourceLanguage.value, title )
			.then( ( text ) => {
				const parser = new DOMParser();

				// Parse the element string
				doc.value = parser.parseFromString( text, 'text/html' );

				const leadSection = doc.value.querySelector( '[data-mw-section-id="0"]' );
				leadSectionContents.value = leadSection.outerHTML;

				translate(
					leadSectionContents.value,
					sourceLanguage.value,
					targetLanguage.value,
					cxServerToken.value
				)
					.then( ( translation ) => {
						leadSectionContents.value = translation;
					} )
					.catch( ( error ) => mw.log.error( 'Error while translating lead section contents', error ) )
					.finally( () => ( loadingLeadSectionTranslation.value = false ) );
			} )
			.catch( ( error ) => mw.log.error( 'Error while fetching page contents', error ) );
	};

	return {
		doc,
		leadSectionContents,
		loadingLeadSectionTranslation,
		initializeTranslation
	};
};

module.exports = useTranslationInitialize;
