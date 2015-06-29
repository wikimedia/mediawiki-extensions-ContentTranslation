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

	mw.cx.dirty = false;
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
	 * Calculate and show the translation progress.
	 */
	function showProgress() {
		mw.hook( 'mw.cx.progress' ).fire( mw.cx.getProgress() );
	}

	/**
	 * Calculate the percentage of machine translation out of the whole article.
	 * @return {Object} Map of weights
	 * @return {number} return.any Weight of sections with content
	 * @return {number} return.human Weight of sections with human modified content
	 * @return {number} return.mt Weight of sections with unmodified mt content
	 * @return {number} return.mtSectionsCount Count of sections with unmodified mt content
	 */
	mw.cx.getProgress = function () {
		var sourceWeight, weights;

		sourceWeight = getTotalSourceWeight();
		weights = getTranslationWeights( getSectionsWithContent() );
		if ( sourceWeight > 0 ) {
			weights.any /= sourceWeight;
			weights.human /= sourceWeight;
			weights.mt /= sourceWeight;
		}

		return weights;
	};

	/**
	 * Calculate the percentage of machine translation for the given sections.
	 *
	 * @param {jQuery} $sections List of sections.
	 * @return {Object} Map of weights
	 * @return {number} return.any Weight of sections with content
	 * @return {number} return.human Weight of sections with human modified content
	 * @return {number} return.mt Weight of sections with unmodified mt content
	 * @return {number} return.mtSectionsCount Count of sections with unmodified mt content
	 */
	function getTranslationWeights( $sections ) {
		var weights = {
			any: 0,
			human: 0,
			mt: 0,
			mtSectionsCount: 0
		};

		$sections.each( function () {
			var weight, state, $section = $( this );

			weight = parseInt( $section.attr( 'data-cx-weight' ), 10 );
			weights.any += weight;

			state = $section.data( 'cx-state' );
			if ( state === 'mt' || state === 'source' ) {
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

		mw.cx.dirty = true;
		$sourceSection = mw.cx.getTranslationSection( $section.data( 'source' ) );

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
		// Show the progress bar with 0 progress.
		mw.hook( 'mw.cx.progress' ).fire( {
			any: 0
		} );
		mw.hook( 'mw.cx.translation.saved' ).add( function () {
			mw.cx.dirty = false;
		} );
		window.onbeforeunload = function () {
			var weights;

			if ( mw.config.get( 'wgContentTranslationDatabase' ) !== null ) {
				if ( mw.cx.dirty ) {
					mw.hook( 'mw.cx.translation.save' ).fire();
					// If we leave the page immediately the above save may not happen.
					// So, stay or leave?
					return mw.msg( 'cx-warning-unsaved-translation' );
				} else {
					return;
				}
			}

			weights = getTranslationWeights( getSectionsWithContent() );

			// Check if there are unsaved human content
			if ( weights.human > 0 ) {
				return mw.msg( 'cx-warning-unsaved-translation' );
			}
		};
	} );
}( jQuery, mediaWiki ) );
