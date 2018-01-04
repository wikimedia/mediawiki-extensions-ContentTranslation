/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function ( $, mw ) {
	'use strict';

	function adaptPoem( $section ) {
		var $sourceSection, poemData, $poem;

		$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );
		if ( $section.is( '[typeof*="mw:Extension/poem"]' ) ) {
			$poem = $sourceSection;
		} else {
			$poem = $sourceSection.find( '[typeof*="mw:Extension/poem"]' );
		}
		if ( !$poem.length ) {
			return;
		}
		poemData = $poem.data( 'mw' );
		// TODO: Note that we are not retaining markup here.
		poemData.body.extsrc = $poem.text().replace( /<br\s*\/?>/mg, '\n' );
		// Copy the data-mw to target section.
		$section.find( '[typeof*="mw:Extension/poem"]' ).attr( 'data-mw', JSON.stringify( poemData ) );
		// Make the poem readonly. We can only adapt them. Not allowing edits.
		$section.find( 'p' ).attr( 'contenteditable', false );
	}

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( adaptPoem );
	} );
}( jQuery, mediaWiki ) );
