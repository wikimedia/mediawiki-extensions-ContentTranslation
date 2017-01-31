/**
 * A set of utilit methods for Content Translation
 */

'use strict';

/**
 * Align two sections horizontally
 * @param {jQuery} $sourceSection Source section
 * @param {jQuery} $targetSection Target section
 */
mw.cx.alignSections = function ( $sourceSection, $targetSection ) {
	var sourceHeight, targetHeight,
		steps = 0;

	// Remove min-heights
	$sourceSection.css( 'min-height', '' );
	$targetSection.css( 'min-height', '' );

	sourceHeight = $sourceSection[ 0 ].scrollHeight;
	targetHeight = $targetSection[ 0 ].scrollHeight;

	sourceHeight = parseInt( sourceHeight, 10 );
	targetHeight = parseInt( targetHeight, 10 );

	while ( sourceHeight !== targetHeight ) {
		if ( targetHeight > sourceHeight ) {
			$sourceSection.css( 'min-height', targetHeight );
		} else {
			$targetSection.css( 'min-height', sourceHeight );
		}
		sourceHeight = parseInt( $sourceSection[ 0 ].scrollHeight, 10 );
		targetHeight = parseInt( $targetSection[ 0 ].scrollHeight, 10 );
		if ( steps++ === 5 ) {
			mw.track( 'Alignment attempt is not succeeding. Aborting.' );
			break;
		}
	}
};
