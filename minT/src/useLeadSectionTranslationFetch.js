'use strict';

const useCXServerToken = require( './useCXServerToken.js' );
const useApi = require( './useApi.js' );

/**
 * This composable returns the "translateLeadSection" to support the translation of the first
 * paragraph of the lead section inside the Confirmation Step (ConfirmTopicPage).
 *
 * The method only translates the first text paragraph, to be displayed inside the preview card,
 * since templates and other non-text content are not suitable for this preview.
 *
 * @return {{translateLeadSection: (Function)}}
 */
const useLeadSectionTranslationFetch = () => {
	const { cxServerToken, fetchToken } = useCXServerToken();
	const { fetchLeadSectionContent, translate } = useApi();

	const translateLeadSection = async ( pageTitle, sourceLanguage, targetLanguage ) => {

		const promises = [ fetchLeadSectionContent( sourceLanguage, pageTitle ), fetchToken() ];

		const [ text ] = await Promise.all( promises );

		const section = document.createElement( 'section' );
		section.innerHTML = text;
		const contentContainer = section.firstElementChild;
		const sectionParagraphsNodeList = contentContainer.querySelectorAll( ':scope > p' );
		const sectionParagraphs = [ ...sectionParagraphsNodeList ];
		const firstParagraph = sectionParagraphs.find( ( p ) => p.textContent.trim() !== '' );

		return translate(
			firstParagraph.outerHTML,
			sourceLanguage,
			targetLanguage,
			cxServerToken.value
		);
	};

	return { translateLeadSection };
};

module.exports = useLeadSectionTranslationFetch;
