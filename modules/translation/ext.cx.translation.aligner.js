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
			sectionTagName,
			steps = 0;

		$section = $( this );
		$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );

		if ( $section.is( '.placeholder' ) ) {
			$section.css( {
				// Copy a bunch of position-related attribute values
				'min-height': $sourceSection.outerHeight(),
				width: $sourceSection.width(),
				'margin-top': $sourceSection.css( 'margin-top' ),
				'margin-bottom': $sourceSection.css( 'margin-bottom' ),
				display: 'block',
				float: $sourceSection.css( 'float' ),
				clear: $sourceSection.css( 'clear' ),
				position: $sourceSection.css( 'position' )
			} );

			// Firefox fix for figure heights. Uses InstallTrigger for browser detection.
			// See https://bugzilla.wikimedia.org/68498
			if ( $sourceSection.prop( 'tagName' ) === 'FIGURE' &&
				typeof InstallTrigger !== 'undefined'
			) {
				$section.css( {
					// Add figcaption height also to the placeholder height because Firefox ignores it
					// while calculating height of figure. Set it as height instead of min-height since
					// Firefox does not allow setting min-height for elements with display: table.
					// Figures in wiki pages have display style property as table.
					// See https://bugzilla.mozilla.org/show_bug.cgi?id=1043294
					height: $sourceSection.outerHeight() + $sourceSection.find( 'figcaption' ).outerHeight()
				} );
			}

			return this;
		}

		sectionTagName = $section.prop( 'tagName' );

		if ( sectionTagName === 'TABLE' ) {
			// 'min-height' is undefined for table elements
			return this;
		}

		if ( sectionTagName === 'FIGURE' ) {
			$sourceSection = $sourceSection.find( 'figcaption' );
			$section = $section.find( 'figcaption' );
		}

		$sourceSection.css( 'min-height', '' );
		sourceSectionHeight = $sourceSection.height();
		sectionHeight = $section.height();

		if ( !sourceSectionHeight ) {
			return this;
		}

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

		return this;
	};

	$( function () {
		// Window resize handler.
		$( window ).resize( $.debounce( 250, function () {
			$( '.cx-column--translation .cx-column__content' )
				.find( mw.cx.getSectionSelector() )
				.each( function () {
					$( this ).keepAlignment();
				} );
		} ) );
	} );
}( jQuery, mediaWiki ) );
