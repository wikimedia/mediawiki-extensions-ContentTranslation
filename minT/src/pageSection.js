const { hasInfobox } = require( './htmlHelper.js' );

const maxGroupSize = 20480; // 20KB
/**
 * Groups subsection <section> HTML elements into buckets based on their size constraints.
 *
 * Each subsection is measured using its outer HTML size, and buckets are
 * formed such that the combined size does not exceed `maxGroupSize`.
 * - If a subsection exceeds `maxGroupSize` on its own or contains an infobox,
 *   it is placed in its own bucket.
 * - Otherwise, subsections are grouped until they reach the size limit.
 *
 * @param {HTMLElement[]} sectionElements Array of subsection <section> HTML elements to be grouped
 * @return {HTMLElement[][]} Nested array where each sub-array represents a group of subsections
 */
const groupSubSectionsIntoBuckets = ( sectionElements ) => {
	const buckets = [];
	let currentBucket = [];
	let currentSize = 0;

	for ( const subSection of sectionElements ) {
		const subSectionSize = new Blob( [ subSection.outerHTML ] ).size;

		// If the subSection itself is larger than maxGroupSize, put it in its own bucket
		if ( subSectionSize > maxGroupSize || hasInfobox( subSection ) ) {
			if ( currentBucket.length > 0 ) {
				buckets.push( currentBucket ); // Save the current bucket
			}
			buckets.push( [ subSection ] ); // Over-sized subSection gets its own bucket
			currentBucket = []; // Start fresh
			currentSize = 0;
			continue;
		}

		// If adding this subSection exceeds maxGroupSize, start a new bucket
		if ( currentSize + subSectionSize > maxGroupSize ) {
			buckets.push( currentBucket ); // Save the filled bucket
			currentBucket = []; // Start a new bucket
			currentSize = 0;
		}

		// Add subSection to the current bucket
		currentBucket.push( subSection );
		currentSize += subSectionSize;
	}

	// Push the last bucket if it has any sections
	if ( currentBucket.length ) {
		buckets.push( currentBucket );
	}

	return buckets;
};

class PageSection {
	constructor( { id } ) {
		this.id = id;
		this.title = null;
		this.titleTranslation = null;
		/** @type {HTMLElement[]} */
		this.subSections = []; // only used to get the subsection groups
		/** @type {HTMLElement[][]} */
		this.subSectionGroups = [];
		this.subSectionGroupTranslations = [];
		this.isReference = false;
	}

	get isTranslated() {
		return this.subSectionGroupTranslations.filter(
			( translation ) => !!translation
		).length > 0;
	}

	isSubSectionGroupTranslationFailed( index ) {
		return this.subSectionGroupTranslations[ index ] === null;
	}

	isSubSectionGroupTranslationDone( index ) {
		return !!this.subSectionGroupTranslations[ index ] ||
			this.isSubSectionGroupTranslationFailed( index );
	}

	/**
	 * @param {HTMLElement} subSection
	 */
	addSubSection( subSection ) {
		if ( !subSection.children.length ) {
			return;
		}
		this.subSections.push( subSection );
	}

	groupSubSections() {
		this.subSectionGroups = groupSubSectionsIntoBuckets( this.subSections );
	}

	getSubSectionGroupHTML( index ) {
		const div = document.createElement( 'div' );
		div.id = `section-${ this.id }-bucket-${ index }`;

		// Append all sections from the bucket into the div
		this.subSectionGroups[ index ].forEach( ( section ) => {
			div.appendChild( section.cloneNode( true ) ); // Clone to avoid moving original elements
		} );

		return div.outerHTML;
	}

	/**
	 * @param {number} index
	 * @return {boolean}
	 */
	hasSubSectionGroupInfobox( index ) {
		const subSectionGroup = this.subSectionGroups[ index ];

		return hasInfobox( subSectionGroup[ 0 ] );
	}

	/**
	 * @param {number} index
	 * @param {string|number|null} translation
	 */
	setSubSectionGroupTranslationByIndex( index, translation ) {
		this.subSectionGroupTranslations[ index ] = translation;
	}

	/**
	 * @param {number} index
	 */
	clearSubSectionGroupTranslationByIndex( index ) {
		delete this.subSectionGroupTranslations[ index ];
	}
}

module.exports = PageSection;
