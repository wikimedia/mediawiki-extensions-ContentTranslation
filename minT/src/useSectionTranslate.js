const useCXServerToken = require( './useCXServerToken.js' );
const useState = require( './useState.js' );
const useApi = require( './useApi.js' );
const PageSection = require( './pageSection.js' );

/**
 * This composable returns the "translateSection" and "translateSubSectionGroup" method.
 * The first method is used inside MinT view translation page, to translate and set the
 * translation for the given section, while the latter is used to retry the failed
 * translation for a given subsection.
 *
 * @return {{ translateSection: Function, translateSubSectionGroup: Function }}
 */
const useSectionTranslate = () => {
	const { cxServerToken } = useCXServerToken();
	const { sourceLanguage, targetLanguage } = useState();
	const { translate } = useApi();
	const siteMapper = new mw.cx.SiteMapper();

	const adaptLinksAndReferences = ( translation ) => {
		const doc = new DOMParser().parseFromString( translation, 'text/html' );
		const wikiLanguageCode = siteMapper.getCurrentWikiLanguageCode();
		Array.prototype.forEach.call( doc.querySelectorAll( 'a[data-cx]' ), ( link ) => {
			link.setAttribute( 'target', '_blank' );
			const dataCX = JSON.parse( link.getAttribute( 'data-cx' ) || '{}' );
			if ( Object.keys( dataCX ).length === 0 ) {
				return;
			}

			if ( !dataCX.sourceTitle ) {
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

		Array.prototype.forEach.call( doc.querySelectorAll( 'sup[data-mw]' ), ( ref ) => {
			const dataMw = JSON.parse( ref.getAttribute( 'data-mw' ) || '{}' );
			if ( Object.keys( dataMw ).length === 0 ) {
				return;
			}

			const referenceAnchor = ref.querySelector( 'a' );
			const referenceLink = new URL( referenceAnchor.href );
			referenceAnchor.href = referenceLink.hash;
		} );

		return doc.body.innerHTML;
	};

	/**
	 * @param {PageSection} section
	 * @param {number} index
	 * @return {Promise}
	 */
	const translateSubSectionGroup = ( section, index ) => {
		section.clearSubSectionGroupTranslationByIndex( index );

		// For references, skip translation
		if ( section.isReference ) {
			section.setSubSectionGroupTranslationByIndex(
				index,
				adaptLinksAndReferences(
					section.getSubSectionGroupHTML( index )
				)
			);
			return Promise.resolve();
		}

		return translate(
			section.getSubSectionGroupHTML( index ),
			sourceLanguage.value,
			targetLanguage.value,
			cxServerToken.value
		).then( ( translation ) => {
			section.setSubSectionGroupTranslationByIndex(
				index,
				adaptLinksAndReferences( translation )
			);
		} ).catch( ( error ) => {
			section.setSubSectionGroupTranslationByIndex( index, null );

			mw.log.error( `Error while translating section '${ section.title }' and subsection with index ${ index }`, error );
		} );
	};

	/**
	 * @param {PageSection} section
	 * @return {Promise}
	 */
	const translateSection = ( section ) => {
		const infoboxGroups = [];
		const textGroups = [];

		for ( const index in section.subSectionGroups ) {
			const subSectionGroup = section.subSectionGroups[ index ];
			if ( section.hasSubSectionGroupInfobox( index ) ) {
				infoboxGroups[ index ] = subSectionGroup;
			} else {
				textGroups[ index ] = subSectionGroup;
			}
		}

		let infoboxPromise = Promise.resolve(); // Start with a resolved promise
		infoboxGroups.forEach( ( subSectionGroup, i ) => {
			infoboxPromise = infoboxPromise.then( () => translateSubSectionGroup( section, i ) );
		} );

		let textPromise = Promise.resolve(); // Start with a resolved promise
		textGroups.forEach( ( subSectionGroup, i ) => {
			textPromise = textPromise.then( () => translateSubSectionGroup( section, i ) );
		} );

		return Promise.all( [ infoboxPromise, textPromise ] );
	};

	return { translateSection, translateSubSectionGroup };
};

module.exports = useSectionTranslate;
