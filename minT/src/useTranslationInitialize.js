const { ref } = require( 'vue' );
const useApi = require( './useApi.js' );
const useState = require( './useState.js' );
const useCXServerToken = require( './useCXServerToken.js' );

const isInfobox = ( node ) => node.classList.contains( 'infobox' );

const hiddenTags = [ 'style', 'meta', 'link' ];

const isTransclusionNode = ( node ) =>
	!!( node.attributes.typeof &&
			node
				.getAttribute( 'typeof' )
				.match( /(^|\s)(mw:Transclusion|mw:Placeholder)\b/ ) );

const isHiddenNode = ( node ) =>
	hiddenTags.includes( node.tagName.toLowerCase() ) ||
		node.style.display === 'none' ||
		isTransclusionNode( node );

/**
 * This method expects an array of HTML elements and filters out all elements that
 * are not visible inside an article. Such nodes are template definitions, style tags,
 * meta tags and links tags. The tag list is not exhaustive and can be expanded in the future.
 *
 * @param {HTMLElement[]} nodes
 * @return {HTMLElement[]}
 */
const filterHiddenAndTransclusionNodes = ( nodes ) => {
	return nodes.filter(
		( node ) =>
			!isHiddenNode( node ) &&
			!( Array.from( node.children ).every( ( child ) => isHiddenNode( child ) ) )
	);
};

/**
 * This composable returns the "initializeTranslation" method that is used inside the MinT view
 * translation page, to fetch the page contents, translate the lead section and store the
 * translation inside the "leadSectionTranslation" ref variable, which is also returned. This
 * composable also returns the "loadingLeadSectionTranslation" boolean ref variable that indicates
 * whether the translation request is pending, and the "doc" ref variable that holds
 * the HTML document representing the source page.
 *
 * @return {{loadingLeadSectionTranslation: Ref<boolean>, initializeTranslation: Function, doc: Ref<Document | null>, leadSectionTranslation: Ref<string[]>}}
 */
const useTranslationInitialize = () => {
	const { fetchPageContent, translate } = useApi();
	const { sourceLanguage, targetLanguage } = useState();
	const { cxServerToken } = useCXServerToken();
	const doc = ref( null );
	const leadSectionTranslation = ref( '' );
	const loadingLeadSectionTranslation = ref( true );

	const initializeTranslation = ( title ) => {
		leadSectionTranslation.value = [];
		loadingLeadSectionTranslation.value = true;

		return fetchPageContent( sourceLanguage.value, title )
			.then( ( text ) => {
				const parser = new DOMParser();

				// Parse the element string
				doc.value = parser.parseFromString( text, 'text/html' );

				const leadSection = doc.value.querySelector( '[data-mw-section-id="0"]' );
				const leadSectionChildren = Array.from( leadSection.children );
				const nodes = filterHiddenAndTransclusionNodes( leadSectionChildren );

				for ( let i = 0; i < nodes.length; i++ ) {
					leadSectionTranslation.value[ i ] = null;

					// set the initial (empty) translation for infoboxes to -1, so that we
					// differentiate them from text paragraphs, as we want to display a skeleton
					// loader in their position while they are loading.
					if ( isInfobox( nodes[ i ] ) ) {
						leadSectionTranslation.value[ i ] = -1;
					}
				}

				const translationPromises = nodes.map( ( node, index ) => {
					return translate(
						node.outerHTML,
						sourceLanguage.value,
						targetLanguage.value,
						cxServerToken.value
					)
						.then( ( translation ) => {
							leadSectionTranslation.value[ index ] = translation;
						} )
						.catch( ( error ) => mw.log.error( 'Error while translating lead section contents', error ) );
				} );

				// We already display a skeleton loader for the infoboxes, so no need to wait
				// for them to load, in order to hide the loading indicator.
				const nonInfoboxPromises =
						translationPromises.filter( ( promise, i ) => !isInfobox( nodes[ i ] ) );

				Promise.all( nonInfoboxPromises ).finally(
					() => ( loadingLeadSectionTranslation.value = false )
				);
			} )
			.catch( ( error ) => mw.log.error( 'Error while fetching page contents', error ) );
	};

	return {
		doc,
		leadSectionTranslation,
		loadingLeadSectionTranslation,
		initializeTranslation
	};
};

module.exports = useTranslationInitialize;
