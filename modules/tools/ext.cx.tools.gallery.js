/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	function adaptGallery( $section ) {
		var i, $sourceSection, galleryData, galleryWikiMarkup = '',
			imageItems, caption, imageTitle, imageIndex = 0;

		if ( !$section.is( '[typeof*="mw:Extension/gallery"]' ) ) {
			return;
		}
		$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );
		galleryData = $sourceSection.data( 'mw' );
		// Copy the translated gallery image captions to the data-mw
		// so that parsoid can create the <gallery> tag with image items.
		galleryWikiMarkup = galleryData.body.extsrc;
		imageItems = galleryWikiMarkup.split( '\n' );
		for ( i = 0; i < imageItems.length; i++ ) {
			if ( imageItems[ i ].trim() ) {
				// FIXME: Copying plain text of gallery text will definitely lose the html
				// mark up in translation. What we need is Wikitext of the translated HTML.
				// That require a restbase api call.
				imageTitle = imageItems[ i ].split( '|' )[ 0 ];
				// Change the image namespace to canonical File: namespace.
				// TODO: We can use the localized namespace in target language with the
				// help of an API query.
				imageTitle = imageTitle.replace( /(.+:)/, 'File:' );
				caption = $section.find( '.gallerytext' ).eq( imageIndex ).text().trim();
				imageItems[ i ] = [ imageTitle, caption ].join( '|' );
				imageIndex++;
			}
		}

		galleryData.body.extsrc = imageItems.join( '\n' );
		// Copy the data-mw to target section.
		$section.attr( 'data-mw', JSON.stringify( galleryData ) );
		// Ultimately, this should make parsoid generate the following Wikitext in published page
		// <gallery>
		// File:Radmilja 1.jpg|Radimlja
		// File:Radmilja 2.jpg|Señal en la entrada a Radimlja
		// File:Radmilja 3.jpg|Radimlja, stecak necrópolis
		// </gallery>
		// Make the images readonly. We can only adapt them. Not allowing edits.
		$section.find( 'li' ).attr( 'contenteditable', false );
		// And make the links open in new tab
		$section.find( 'a' ).attr( 'target', '_blank' );
	}

	$( function () {
		mw.hook( 'mw.cx.translation.postMT' ).add( adaptGallery );
	} );
}() );
