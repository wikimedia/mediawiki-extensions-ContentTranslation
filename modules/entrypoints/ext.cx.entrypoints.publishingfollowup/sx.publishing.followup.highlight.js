const nextUntil = ( element, selector ) => {
	const siblings = [];
	element = element.nextElementSibling;

	while ( element ) {
		if ( element.matches( selector ) ) {
			break;
		}
		siblings.push( element );
		element = element.nextElementSibling;
	}

	return siblings;
};

const highlightElement = ( element ) => {
	element.style.background = '#fef6e7';
	element.style.marginBottom = 0;
	element.style.marginLeft = '-16px';
	element.style.marginRight = '-16px';
	element.style.paddingLeft = '16px';
	element.style.paddingRight = '16px';
};

const createNewIndicator = () => {
	const span = document.createElement( 'span' );
	span.innerText = mw.message( 'cx-sx-followup-feedback-new-indicator' ).plain();
	span.style.background = '#fdedd1';
	span.style.color = '#ac6600';
	span.style.padding = '8px';
	span.style.borderRadius = '50%';
	span.style.fontSize = '16px';
	span.style.display = 'flex';
	span.style.width = 'max-content';

	return span;
};

/**
 * @param {HTMLElement} firstHighlightedParagraph
 */
const fixFirstParagraphSpacing = ( firstHighlightedParagraph ) => {
	firstHighlightedParagraph.style.paddingTop = '0.5em';
	firstHighlightedParagraph.style.marginTop = 0;
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
	 * Find element with id equal to the newly translated section title
	 *
	 * @type {HTMLElement}
	 */
	const highlightedTitleSpan = document.getElementById( highlightedTitleId );

	if ( !highlightedTitleSpan ) {
		return;
	}

	// Scroll to newly published section
	highlightedTitleSpan.scrollIntoView();
	/**
	 * Get parent h2 element, which corresponds to the section header
	 *
	 * @type {HTMLElement}
	 */
	const highlightedHeader = highlightedTitleSpan.parentElement;
	highlightElement( highlightedHeader );

	// Get all section nodes by getting all elements until next section header
	const siblings = nextUntil( highlightedHeader, 'h2' );
	const firstHighlightedParagraph = siblings[ 0 ].querySelector( 'p' );

	if ( firstHighlightedParagraph ) {
		// Use padding-top instead of margin-top for first section paragraph so that no
		// white-space appears between header and paragraph
		fixFirstParagraphSpacing( firstHighlightedParagraph );
	}

	/**
	 * Create element for new section indicator
	 *
	 * @type {HTMLSpanElement}
	 */
	const newIndicator = createNewIndicator();

	// Add new section indicator immediately after .mw-headline span
	highlightedHeader.insertBefore(
		newIndicator,
		highlightedHeader.querySelector( '.mw-headline' ).nextSibling
	);

	// Highlight all section nodes
	siblings.forEach( ( sectionElement ) => {
		highlightElement( sectionElement );
	} );
};

highlightPublishedSection();
