/**
 * @param {HTMLElement} headingWrapper A section heading wrapper (`<div class="mw-heading mw-headingN">`)
 * @return {number} The level of the heading (1 for `<h1>`, 2 for `<h2>` etc.)
 */
const getHeadingLevel = ( headingWrapper ) => {
	const match = headingWrapper.className.match( /\bmw-heading(\d)\b/ );

	return match ? Number( match[ 1 ] ) : 0;
};

/**
 * Get all the elements of the section that starts with the given heading wrapper, including its
 * subsections, i.e. all the siblings until the next heading of the same or a higher level.
 *
 * @param {HTMLElement} headingWrapper
 * @return {HTMLElement[]}
 */
const getSectionElements = ( headingWrapper ) => {
	const level = getHeadingLevel( headingWrapper );
	const elements = [];
	let element = headingWrapper.nextElementSibling;

	while ( element ) {
		if ( element.matches( '.mw-heading' ) && getHeadingLevel( element ) <= level ) {
			break;
		}
		elements.push( element );
		element = element.nextElementSibling;
	}

	return elements;
};

const createNewIndicator = () => {
	const span = document.createElement( 'span' );
	span.className = 'sx-published-section-new-indicator';
	span.textContent = mw.message( 'cx-sx-followup-feedback-new-indicator' ).plain();

	return span;
};

/**
 * Highlight the section contents with a single element, so that no gaps appear between the
 * highlighted elements (e.g. because of paragraph margins).
 *
 * @param {HTMLElement} headingWrapper
 * @param {HTMLElement[]} sectionElements
 */
const highlightSectionContents = ( headingWrapper, sectionElements ) => {
	if ( !sectionElements.length ) {
		return;
	}

	if ( sectionElements.length === 1 && sectionElements[ 0 ].tagName === 'SECTION' ) {
		// The contents are already wrapped, e.g. in the collapsible block of MobileFrontend
		sectionElements[ 0 ].classList.add( 'sx-published-section-content' );
		return;
	}

	const contentWrapper = document.createElement( 'div' );
	contentWrapper.className = 'sx-published-section-content';
	headingWrapper.after( contentWrapper );
	contentWrapper.append( ...sectionElements );
};

const newSectionParam = 'sx-published-section';

const highlightPublishedSection = () => {
	/**
	 * Start by getting URL query params
	 *
	 * @type {URLSearchParams}
	 */
	const urlParams = new URLSearchParams( location.search );
	const highlightedTitleId = urlParams.get( newSectionParam ).replace( / +/g, '_' );
	/**
	 * Find element with id equal to the newly translated section title (`<h2>` etc.)
	 *
	 * @type {HTMLElement}
	 */
	const highlightedHeading = document.getElementById( highlightedTitleId );

	if ( !highlightedHeading ) {
		return;
	}

	/**
	 * Get the section heading wrapper (`<div class="mw-heading">`)
	 *
	 * @type {HTMLElement}
	 */
	const highlightedHWrapper = highlightedHeading.closest( '.mw-heading' ) || highlightedHeading.parentElement;
	highlightedHWrapper.classList.add( 'sx-published-section-heading' );
	highlightSectionContents( highlightedHWrapper, getSectionElements( highlightedHWrapper ) );

	const isMobile = mw.config.get( 'skin' ) === 'minerva';
	const newIndicator = createNewIndicator();
	const editSection = highlightedHWrapper.querySelector( '.mw-editsection' );

	if ( isMobile && editSection ) {
		// On mobile, place the indicator at the end of the section title area, leaving room for
		// the existing actions (the edit button)
		highlightedHWrapper.insertBefore( newIndicator, editSection );
	} else {
		// On desktop, place the indicator at the end of the heading, after the edit links
		highlightedHWrapper.append( newIndicator );
	}

	if ( isMobile ) {
		// Sections may be collapsed on mobile. MobileFrontend expands the section that contains
		// the URL fragment, both when initializing section toggling (which may happen after this
		// code runs) and on "hashchange". Replace the location, so that no history entry is added.
		location.replace( '#' + encodeURIComponent( highlightedTitleId ) );
	}

	// Scroll to newly published section
	highlightedHeading.scrollIntoView();
};

highlightPublishedSection();
