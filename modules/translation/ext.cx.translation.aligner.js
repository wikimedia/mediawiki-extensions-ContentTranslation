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
			return Math.floor( $table.outerHeight() + $table.find( 'caption' ).outerHeight() );
		}
		return Math.floor( $table.outerHeight() );
	}

	function getFigureHeight( $figure ) {
		// Add figcaption height also to the placeholder height because Firefox ignores it
		// while calculating height of figure. Set it as height instead of min-height since
		// Firefox does not allow setting min-height for elements with display: table.
		// Figures in wiki pages have display style property as table.
		// See https://bugzilla.mozilla.org/show_bug.cgi?id=1043294
		// Firefox fix for figure heights. Uses InstallTrigger for browser detection.
		// See https://bugzilla.wikimedia.org/68498
		if ( typeof InstallTrigger !== 'undefined' ) {
			return Math.floor( $figure.outerHeight() + $figure.find( 'figcaption' ).outerHeight() );
		}
		return Math.floor( $figure.outerHeight() );
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

		return Math.floor( height );
	}

	/**
	 * Tables does not have a min-height css property defined. We use
	 * margin-bottom to keep the heights in sync
	 *
	 * @param {jQuery} $sourceTable
	 * @param {jQuery} $targetTable
	 */
	function keepTableAlignment( $sourceTable, $targetTable ) {
		var sourceHeight, targetHeight, heightDiff;

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

	function getHeight( $element ) {
		if ( $element.prop( 'tagName' ) === 'FIGURE' ) {
			return getFigureHeight( $element );
		}
		if ( $element.prop( 'tagName' ) === 'TABLE' ) {
			return getTableHeight( $element );
		}

		// If the source section is template, it can have fragments.
		if ( $element.is( '[typeof*="mw:Transclusion"]' ) &&
					$element.attr( 'data-mw' ) ) {
			return getTemplateHeight( $element );
		}
		return Math.floor( $element.height() );
	}

	function setHeight( $element, height ) {
		if ( $element.prop( 'tagName' ) === 'FIGURE' ) {
			$element.css( {
				height: height
			} );
			return;
		}

		if ( $element.prop( 'tagName' ) === 'TABLE' ) {
			$element.css( {
				height: height
			} );
			return;
		}

		$element.css( {
			'min-height': height
		} );
	}

	function getDisplayStyles( $element ) {
		var aboutAttr, $source;

		// If the source section is template, it can have fragments.
		if ( $element.is( '[typeof*="mw:Transclusion"]' ) &&
			$element.attr( 'data-mw' )
		) {
			aboutAttr = $element.attr( 'about' );
			$element.parents( '.cx-column__content' ).find( '[about="' + aboutAttr + '"]' )
				.each( function ( index, fragment ) {
					var $fragment = $( fragment );
					// Find a fragment with visible height
					if ( $fragment.height() > 0 ) {
						$source = $fragment;
						return true;
					}
				} );
		} else {
			$source = $element;
		}

		return {
			// Copy a bunch of position-related attribute values
			width: $source.width() || '100%',
			'margin-top': $source.css( 'margin-top' ),
			'margin-bottom': $source.css( 'margin-bottom' ),
			'padding-top': $source.css( 'padding-top' ),
			'padding-bottom': $source.css( 'padding-bottom' ),
			'float': $source.css( 'float' ),
			clear: $source.css( 'clear' ),
			position: $source.css( 'position' )
		};
	}

	/**
	 * @param {jQuery} $source
	 * @param {jQuery} $target
	 * @return {null}
	 */
	function keepAlignment( $source, $target ) {
		var sourceHeight, targetHeight,	sectionTagName,
			steps = 0;

		// Reset the min-height
		$source.css( 'min-height', '' );

		if ( $target.is( '.placeholder' ) ) {
			$target.css( getDisplayStyles( $source ) );
			setHeight( $target, getHeight( $source ) );
			return;
		}

		sectionTagName = $target.prop( 'tagName' );

		if ( sectionTagName === 'TABLE' ) {
			return keepTableAlignment( $source, $target );
		}

		if ( sectionTagName === 'FIGURE' ) {
			// eslint-disable-next-line no-use-before-define
			return keepFigureAlignment( $source, $target );
		}

		sourceHeight = getHeight( $source );
		targetHeight = getHeight( $target );

		if ( !sourceHeight ) {
			return;
		}

		while ( targetHeight !== sourceHeight ) {
			if ( sourceHeight < targetHeight ) {
				setHeight( $source, targetHeight );
			} else if ( sourceHeight > targetHeight ) {
				setHeight( $target, sourceHeight );
			}
			sourceHeight = getHeight( $source );
			targetHeight = getHeight( $target );
			if ( steps++ === 5 ) {
				mw.track( 'Alignment attempt is not succeeding. Aborting.' );
				break;
			}
		}
	}

	/**
	 * @param {jQuery} $sourceFigure
	 * @param {jQuery} $targetFigure
	 */
	function keepFigureAlignment( $sourceFigure, $targetFigure ) {
		var $source, $target;

		$source = $sourceFigure.find( 'figcaption' );
		$target = $targetFigure.find( 'figcaption' );
		keepAlignment( $source, $target );
	}

	/**
	 * Keep the height of the source and translation sections equal
	 * so that they will appear top-aligned.
	 *
	 * @param {jQuery} [$source]
	 * @param {jQuery} [$target]
	 * @return {jQuery}
	 */
	$.fn.keepAlignment = function ( $source, $target ) {
		var $targetSection;

		$targetSection = $target || $( this );
		// Get the source section. We don't use $section.data('source') because that
		// won't reflect updated data-source values(probably from section restore attempt)
		$source = $source || mw.cx.getSourceSection( $targetSection.attr( 'data-source' ) );
		keepAlignment( $source,	$targetSection );

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
