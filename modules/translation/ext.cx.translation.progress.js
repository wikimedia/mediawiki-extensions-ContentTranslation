/**
 * ContentTranslation - Calculate the progress
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var totalSourceWeight = 0,
		translationThreshold = 0.05;

	/**
	 * Get the total source weight
	 * @return {int} total source weight
	 */
	function getTotalSourceWeight() {
		var $sourceContainer,
			$sections;

		if ( totalSourceWeight ) {
			return totalSourceWeight;
		}
		$sourceContainer = $( '.cx-column--source .cx-column__content' );
		$sections = $sourceContainer.children( mw.cx.getSectionSelector() );

		$sections.each( function () {
			totalSourceWeight += $( this ).text().length;
		} );

		return totalSourceWeight;
	}

	/**
	 * Calculate the translation progress
	 */
	function calculateProgress() {
		var completedTranslation = 0,
			percentage;

		$( '.cx-column--translation [data-cx-weight]' ).each( function () {
			completedTranslation += $( this ).data( 'cx-weight' );
		} );
		percentage = ( ( 1 + completedTranslation ) /
			( 1 + getTotalSourceWeight() ) ) * 100;
		mw.hook( 'mw.cx.progress' ).fire( percentage );
	}

	/**
	 * Update/Change handler for section
	 * @param {jQuery} $section The source section
	 */
	function onSectionUpdate( $section ) {
		var $sourceSection, sourceLength, translationLength;

		if ( !$section ) {
			return;
		}
		$sourceSection = $( '#' + $section.data( 'source' ) );
		translationLength = $section.text().length;
		sourceLength = $sourceSection.text().length;

		// Check if the translation is above the defined threshold to count.
		if ( translationLength / sourceLength < translationThreshold ) {
			// Do not count the section as translated
			$section.removeAttr( 'data-cx-weight' );
		} else {
			$section.attr( 'data-cx-weight', sourceLength );
		}
		// Calculate the total translation progress
		calculateProgress();
	}

	$( function () {
		mw.hook( 'mw.cx.translation.change' ).add( onSectionUpdate );
	} );
}( jQuery, mediaWiki ) );
