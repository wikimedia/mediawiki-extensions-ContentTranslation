/**
 * ContentTranslation - Section alignment plugin
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Keep the height of the source and translation sections equal
	 * so that they will appear top-aligned.
	 */
	$.fn.keepAlignment = function () {
		var $section,
			$sourceSection,
			sectionHeight,
			sourceSectionHeight,
			steps = 0;

		$section = $( this );

		if ( $section.prop( 'tagName' ) === 'TABLE' ) {
			// 'min-height' is undefined for table elements
			return true;
		}

		$sourceSection = $( '#' + $section.data( 'source' ) );

		if ( $section.prop( 'tagName' ) === 'FIGURE' ) {
			$sourceSection = $sourceSection.find( 'figcaption' );
			$section = $section.find( 'figcaption' );
		}

		$sourceSection.css( 'min-height', '' );
		sourceSectionHeight = $sourceSection.height();
		sectionHeight = $section.height();

		if ( sourceSectionHeight < sectionHeight ) {
			$sourceSection.css( 'min-height', sectionHeight );
			sourceSectionHeight = $sourceSection.height();
			sectionHeight = $section.height();

			// Fun stuff - setting a calculated min-height will not guarantee
			// equal height for all kinds of section pairs.
			// Experiments shows a few pixels difference.
			// Here we do it by 10px steps till we reach equal height.
			while ( sectionHeight !== sourceSectionHeight ) {
				sectionHeight = sectionHeight + 10;
				$sourceSection.css( 'min-height', sectionHeight );
				$section.css( 'min-height', sectionHeight );
				sectionHeight = $section.height();
				sourceSectionHeight = $sourceSection.height();

				if ( steps++ === 10 ) {
					mw.track( 'Alignment attempt is not succeeding. Aborting.' );
					break;
				}
			}
		} else if ( sourceSectionHeight > sectionHeight ) {
			$section.css( 'min-height', sourceSectionHeight );
		}
	};
}( jQuery, mediaWiki ) );
