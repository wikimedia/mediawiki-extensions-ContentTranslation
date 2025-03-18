const { ref, watch } = require( 'vue' );
const useCXServerToken = require( './useCXServerToken.js' );
const useState = require( './useState.js' );
const useApi = require( './useApi.js' );

const sectionTranslations = ref( [] );

/**
 * This composable returns the "translateSection" method and the "sectionTranslations" ref
 * variable. This method is used inside MinT view translation page, to translate the given
 * non-lead section and fill the "sectionTranslations" array with the section translation
 * for the given index.
 *
 * @return {{sectionTranslations: Ref<string[]>, translateSection: Function, adaptLinks: Function}}
 */
const useSectionTranslate = () => {
	const { cxServerToken } = useCXServerToken();
	const { sourceLanguage, targetLanguage } = useState();
	const { translate } = useApi();
	const siteMapper = new mw.cx.SiteMapper();

	const adaptLinks = ( translation ) => {
		const doc = new DOMParser().parseFromString( translation, 'text/html' );
		const wikiLanguageCode = siteMapper.getCurrentWikiLanguageCode();
		Array.prototype.forEach.call( doc.querySelectorAll( 'a[data-cx]' ), ( link ) => {
			link.setAttribute( 'target', '_blank' );
			const dataCX = JSON.parse( link.getAttribute( 'data-cx' ) || '{}' );
			if ( Object.keys( dataCX ).length === 0 ) {
				return;
			}

			if ( dataCX.adapted ) {
				// Expand the URL completely since the user may not be accessing the content
				// in the same wiki as the target language
				const hrefPageTitle = dataCX.targetTitle.title;
				const linkLanguageCode = dataCX.targetTitle.pagelanguage;
				if ( wikiLanguageCode === linkLanguageCode ) {
					link.setAttribute( 'href', './' + hrefPageTitle );
				} else {
					link.setAttribute( 'href', siteMapper.getPageUrl( linkLanguageCode, hrefPageTitle ) );
				}
			} else {
				// Link is not adapted. Add link to Special:AutomaticTranslation
				const linkURL = siteMapper.getMintUrl(
					dataCX.sourceTitle.title,
					dataCX.sourceTitle.pagelanguage,
					targetLanguage.value,
					'translation'
				);
				link.setAttribute( 'href', linkURL );
			}
		} );

		return doc.body.innerHTML;
	};

	const translateSection = ( sections, index ) => {
		if ( sectionTranslations.value[ index ] ) {
			return;
		}
		const section = sections.value[ index ];
		const headerElement = section.node.querySelector( 'h2' );
		if ( headerElement ) {
			headerElement.remove();
		}
		translate(
			section.node.outerHTML,
			sourceLanguage.value,
			targetLanguage.value,
			cxServerToken.value
		)
			.then( ( translation ) => {
				sectionTranslations.value[ index ] = adaptLinks( translation );
			} )
			.catch( ( error ) => mw.log.error( `Error while translating section '${ section.title }'`, error ) );
	};

	watch( [ sourceLanguage, targetLanguage ], () => {
		sectionTranslations.value = [];
	} );

	return { translateSection, sectionTranslations, adaptLinks };
};

module.exports = useSectionTranslate;
