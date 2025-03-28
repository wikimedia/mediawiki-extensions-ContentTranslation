const { ref } = require( 'vue' );
const PageSection = require( './pageSection.js' );
const useState = require( './useState.js' );
const { isHiddenNode } = require( './htmlHelper.js' );
const useSectionTranslate = require( './useSectionTranslate.js' );

/**
 * This method expects an array of HTML elements and filters out all elements that
 * are not visible inside an article. Such nodes are template definitions, style tags,
 * meta tags and links tags. The tag list is not exhaustive and can be expanded in the future.
 *
 * @param {HTMLElement} sectionElement
 */
const cleanUpSectionNodes = ( sectionElement ) => {
	Array.from( sectionElement.children ).forEach( ( child ) => {
		if ( isHiddenNode( child ) ) {
			child.remove();
		}
	} );
};
/**
 * E.g. https://cxserver.wikimedia.org/v2/page/en/el/Moon
 *
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string} title
 * @return {Promise<string>}
 */
const fetchPageContent = ( sourceLanguage, targetLanguage, title ) => {
	const relativeUrl = `https://cxserver.wikimedia.org/v2/page/${ sourceLanguage }/${ targetLanguage }/${ title }`;

	return fetch( relativeUrl )
		.then( ( response ) => response.json() )
		.then( ( data ) => data.segmentedContent )
		.catch( ( error ) => Promise.reject( error ) );
};

/**
 * @param {HTMLElement[]} sectionElements
 * @return {PageSection[]}
 */
const getNonLeadSubSections = ( sectionElements ) => {
	const pageSections = [];
	for ( const sectionElement of sectionElements ) {
		const sectionNumber = sectionElement.dataset.mwSectionNumber;
		let pageSection = pageSections.find( ( section ) => section.id === sectionNumber );

		if ( !pageSection ) {
			pageSection = new PageSection( { id: sectionNumber } );
			pageSections.push( pageSection );
		}

		if ( sectionElement.firstElementChild && sectionElement.firstElementChild.tagName === 'H2' ) {
			pageSection.title = sectionElement.firstElementChild.textContent.trim();
		} else {
			cleanUpSectionNodes( sectionElement );
			pageSection.addSubSection( sectionElement );
			if ( sectionElement.querySelector( '.reflist' ) ) {
				pageSection.isReference = true;
			}
		}
	}

	pageSections.forEach( ( pageSection ) => pageSection.groupSubSections() );

	return pageSections;
};

/**
 * @param {Document} doc
 */
const applyPageStyles = ( doc ) => {
	// Combine and append all style elements from the document
	const styleElements = Array.from( doc.querySelectorAll( 'style' ) );
	const combinedStyle = styleElements.map(
		( element ) => element.textContent
	).join( '' );
	const styleTag = document.createElement( 'style' );
	styleTag.textContent = combinedStyle;
	document.head.appendChild( styleTag );
};

/**
 * This composable returns the "initializeTranslation" method that is used inside the MinT view
 * translation page, to fetch the page contents and translate the lead section. This
 * composable also returns a ref variable holding the lead PageSection model and a ref variable
 * holding an array containing the non-lead PageSection models for this page.
 *
 * @return {{
 *   initializeTranslation: Function,
 *   nonLeadSections: Ref<PageSection[]>,
 *   leadSection: Ref<PageSection|null>
 * }}
 */
const useTranslationInitialize = () => {
	const { translateSection } = useSectionTranslate();
	const { sourceLanguage, targetLanguage } = useState();
	const nonLeadSections = ref( [] );
	const leadSection = ref( null );

	const initializeTranslation = ( title ) => fetchPageContent(
		sourceLanguage.value,
		targetLanguage.value,
		title
	).then( ( text ) => {
		const parser = new DOMParser();

		// Parse the element string
		const doc = parser.parseFromString( text, 'text/html' );
		applyPageStyles( doc );

		const allSubSections = Array.from( doc.querySelectorAll( '[data-mw-section-number]' ) );

		leadSection.value = new PageSection( { id: 0 } );
		const leadSectionElements = allSubSections.filter( ( node ) => node.dataset.mwSectionNumber === '0' );
		leadSectionElements.forEach( ( subSectionElement ) => {
			cleanUpSectionNodes( subSectionElement );
			leadSection.value.addSubSection( subSectionElement );
		} );

		leadSection.value.title = 'LEAD_SECTION';
		leadSection.value.groupSubSections();

		translateSection( leadSection.value );

		const nonLeadSectionElements = allSubSections.filter( ( node ) => node.dataset.mwSectionNumber !== '0' );
		nonLeadSections.value = getNonLeadSubSections( nonLeadSectionElements );
	} ).catch( ( error ) => mw.log.error( 'Error while fetching page contents', error ) );

	return {
		nonLeadSections,
		leadSection,
		initializeTranslation
	};
};

module.exports = useTranslationInitialize;
