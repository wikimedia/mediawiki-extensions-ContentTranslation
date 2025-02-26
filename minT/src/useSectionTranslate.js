const { ref } = require( 'vue' );
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
 * @return {{sectionTranslations: Ref<string[]>, translateSection: Function}}
 */
const useSectionTranslate = () => {
	const { cxServerToken } = useCXServerToken();
	const { sourceLanguage, targetLanguage } = useState();
	const { translate } = useApi();

	const hideUnadaptedLinks = ( translation ) => {
		const doc = new DOMParser().parseFromString( translation, 'text/html' );
		Array.prototype.forEach.call( doc.querySelectorAll( 'a' ), ( link ) => {
			const dataCX = JSON.parse( link.getAttribute( 'data-cx' ) || '{}' );

			if ( dataCX && dataCX.adapted === false ) {
				link.replaceWith( ...link.childNodes );
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
				sectionTranslations.value[ index ] = hideUnadaptedLinks( translation );
			} )
			.catch( ( error ) => mw.log.error( `Error while translating section '${ section.title }'`, error ) );
	};

	return { translateSection, hideUnadaptedLinks, sectionTranslations };
};

module.exports = useSectionTranslate;
