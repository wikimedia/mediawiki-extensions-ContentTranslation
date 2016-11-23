/*!
 * ContentTranslation - Section alignment plugin
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	function getTableHeight( $table ) {
		// Add table caption height also to the placeholder height because Firefox ignores it
		// while calculating height of figure. Set it as height instead of min-height since
		// Firefox does not allow setting min-height for elements with display: table.
		// Figures in wiki pages have display style property as table.
		// See https://bugzilla.mozilla.org/show_bug.cgi?id=1043294
		if ( typeof InstallTrigger !== 'undefined' ) {
			return $table.outerHeight() + $table.find( 'caption' ).outerHeight();
		} else {
			return $table.outerHeight();
		}
	}

	function getFigureHeight( $table ) {
		// Add figcaption height also to the placeholder height because Firefox ignores it
		// while calculating height of figure. Set it as height instead of min-height since
		// Firefox does not allow setting min-height for elements with display: table.
		// Figures in wiki pages have display style property as table.
		// See https://bugzilla.mozilla.org/show_bug.cgi?id=1043294
		// Firefox fix for figure heights. Uses InstallTrigger for browser detection.
		// See https://bugzilla.wikimedia.org/68498
		if ( typeof InstallTrigger !== 'undefined' ) {
			return $table.outerHeight() + $table.find( 'figcaption' ).outerHeight();
		} else {
			return $table.outerHeight();
		}
	}

	function getTemplateHeight( $template ) {
		var height = 0,
			aboutAttr = $template.attr( 'about' );

		$template.parents( '.cx-column__content' ).find( '[about="' + aboutAttr + '"]' )
			.each( function ( index, fragment ) {
				var $fragment = $( fragment );
				if ( $fragment.prop( 'tagName' ) === 'FIGURE' ) {
					height += getFigureHeight( $fragment );
				} else if ( $fragment.prop( 'tagName' ) === 'TABLE' ) {
					height += getTableHeight( $fragment );
				} else {
					height += $fragment.outerHeight();
				}
			} );

		return height;
	}

	/**
	 * Tables does not have a min-height css property defined. We use
	 * margin-bottom to keep the heights in sync
	 *
	 * @param {jQuery} $sourceTable
	 * @param {jQuery} $targetTable
	 */
	function keepTableAlignment( $sourceTable, $targetTable ) {
		var sourceHeight, heightDiff, targetHeight;

		// Source table can be a set of template fragments.
		if ( $sourceTable.prop( 'tagName' ) !== 'TABLE' &&
			$sourceTable.is( '[typeof*="mw:Transclusion"]' ) &&
			$sourceTable.attr( 'data-mw' ) ) {
			sourceHeight = getTemplateHeight( $sourceTable );
		} else {
			sourceHeight = getTableHeight( $sourceTable );
		}

		targetHeight = getTableHeight( $targetTable );

		if ( targetHeight > sourceHeight ) {
			// 10 is just a margin we add to avoid 0 margin-bottom for table.
			heightDiff = targetHeight - sourceHeight;
			$sourceTable.css( 'margin-bottom', heightDiff + 10 );
			$targetTable.css( 'margin-bottom', 10 );
		} else {
			heightDiff = sourceHeight - targetHeight;
			$targetTable.css( 'margin-bottom', heightDiff + 10 );
			$sourceTable.css( 'margin-bottom', 10 );
		}
	}

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
		// Get the source section. We don't use $section.data('source') because that
		// won't reflect updated data-source values(probably from section restore attempt)
		$sourceSection = mw.cx.getSourceSection( $section.attr( 'data-source' ) );

		if ( $section.is( '.placeholder' ) ) {
			$section.css( {
				// Copy a bunch of position-related attribute values
				'min-height': $sourceSection.outerHeight(),
				width: $sourceSection.width(),
				'margin-top': $sourceSection.css( 'margin-top' ),
				'margin-bottom': $sourceSection.css( 'margin-bottom' ),
				float: $sourceSection.css( 'float' ),
				clear: $sourceSection.css( 'clear' ),
				position: $sourceSection.css( 'position' )
			} );

			if ( $sourceSection.prop( 'tagName' ) === 'FIGURE' ) {
				$section.css( {
					height: getFigureHeight( $sourceSection )
				} );
			}
			if ( $sourceSection.prop( 'tagName' ) === 'TABLE' ) {
				$section.css( {
					height: getTableHeight( $sourceSection )
				} );
			}

			// If the source section is template, it can have fragments.
			if ( $sourceSection.is( '[typeof*="mw:Transclusion"]' ) &&
				$sourceSection.attr( 'data-mw' ) ) {
				$section.css( {
					width: '100%',
					'min-height': getTemplateHeight( $sourceSection )
				} );
			}

			return this;
		}

		sectionTagName = $section.prop( 'tagName' );

		// Reset the min-height
		$sourceSection.css( 'min-height', '' );

		if ( sectionTagName === 'TABLE' ) {
			keepTableAlignment( $sourceSection, $section );
			return this;
		}

		if ( sectionTagName === 'FIGURE' ) {
			$sourceSection = $sourceSection.find( 'figcaption' );
			$section = $section.find( 'figcaption' );
		}

		sourceSectionHeight = $sourceSection.height();
		sectionHeight = $section.height();

		// If the source section is template, it can have fragments.
		if ( $sourceSection.is( '[typeof*="mw:Transclusion"]' ) &&
			$sourceSection.attr( 'data-mw' ) ) {
			sourceSectionHeight = getTemplateHeight( $sourceSection );
		}

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
			while ( parseInt( sectionHeight, 10 ) !== parseInt( sourceSectionHeight, 10 ) ) {
				sectionHeight = sectionHeight + 10;
				$sourceSection.css( 'min-height', sectionHeight );
				$section.css( 'min-height', sectionHeight );
				sectionHeight = $section.height();
				sourceSectionHeight = $sourceSection.height();

				if ( steps++ === 5 ) {
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
