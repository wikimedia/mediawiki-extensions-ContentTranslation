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
	 * Get the total source weight.
	 * This is only calculated once per session and cached, because the source doesn't change.
	 * @return {int} Total source weight
	 */
	function getTotalSourceWeight() {
		var $sourceContainer, $sections;

		// Return the cached value
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
	 * Calculate the translation progress.
	 */
	function showProgress() {
		var sourceWeight, weights;

		sourceWeight = getTotalSourceWeight();
		weights = getTranslationWeights( getSectionsWithContent() );
		if ( sourceWeight > 0 ) {
			weights.any /= sourceWeight;
			weights.human /= sourceWeight;
			weights.mt /= sourceWeight;
		}

		mw.hook( 'mw.cx.progress' ).fire( weights );
	}

	/**
	 * Calculate the percentage of machine translation out of the whole article.
	 *
	 * @param {jQuery} $sections List of sections.
	 * @return {object} Map of weights
	 * @return {integer} return.any Weight of sections with content
	 * @return {integer} return.human Weight of sections with human modified content
	 * @return {integer} return.mt Weight of sections with unmodified mt content
	 * @return {integer} return.mtSectionsCount Count of sections with unmodified mt content
	 */
	function getTranslationWeights( $sections ) {
		var weights = {
			any: 0,
			human: 0,
			mt: 0,
			mtSectionsCount: 0
		};

		$sections.each( function () {
			var weight, $section = $( this );

			weight = $section.data( 'cx-weight' );
			weights.any += weight;

			if ( $section.data( 'cx-mt' ) === true ||
				$section.data( 'cx-source' ) === true
			) {
				// If the section has unmodified MT or source content copied,
				// count it as MT.
				weights.mt += weight;
				weights.mtSectionsCount += 1;
			} else {
				weights.human += weight;
			}
		} );

		return weights;
	}

	/**
	 * Return all translation sections that have any text.
	 * @return {jQuery}
	 */
	function getSectionsWithContent() {
		return $( '.cx-column--translation [data-cx-weight]' );
	}

	/**
	 * Update/Change handler for section.
	 * @param {jQuery} $section The source section
	 */
	function onSectionUpdate( $section ) {
		var $sourceSection, translationLength, sourceLength;

		if ( !$section ) {
			return;
		}

		$sourceSection = $( '#' + $section.data( 'source' ) );
		translationLength = $section.text().length;
		sourceLength = $sourceSection.text().length;

		// Check if the translation is above the defined threshold to count
		if ( translationLength / sourceLength < translationThreshold ) {
			// Do not count the section as translated
			$section.removeAttr( 'data-cx-weight' );
		} else {
			$section.attr( 'data-cx-weight', sourceLength );
		}

		// Calculate the total translation progress
		showProgress();
	}

	$( function () {
		mw.hook( 'mw.cx.translation.change' ).add( onSectionUpdate );
		window.onbeforeunload = function () {
			var weights = getTranslationWeights( getSectionsWithContent() );

			// Check if there are unsaved human content
			if ( weights.human > 0 ) {
				return mw.msg( 'cx-warning-unsaved-translation' );
			}
		};
	} );
}( jQuery, mediaWiki ) );
