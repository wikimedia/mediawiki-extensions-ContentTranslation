/**
 * ContentTranslation Tools
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

	/**
	 * ContentTranslationEditor
	 *
	 * @class
	 */
	function ContentTranslationEditor( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxTranslation.defaults, options );
		this.$title = null;
		this.$content = null;
		this.init();
	}

	ContentTranslationEditor.prototype.init = function () {
		this.render();
		this.listen();
	};

	ContentTranslationEditor.prototype.render = function () {
		var $content;

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );
		}

		this.$container.append(
			$( '<h2>' )
			.attr( 'contenteditable', true )
			.addClass( 'cx-column__title' )
			.text( $( '.cx-column--source .cx-column__title' ).text() )
		);

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );

			this.$container.append(
				$( '<div>' )
					.addClass( 'cx-column__sub-heading' )
					.append(
						$( '<span>' )
							.addClass( 'cx-column__language-label' )
							.text( $.uls.data.getAutonym( mw.cx.targetLanguage ) )
					)
			);
		}

		$content = $( '<div>' )
			.addClass( 'cx-column__content' )
			.html( '\n' ); // Make sure that it's visible to the tests

		this.$container.append( $content );
		mw.hook( 'mw.cx.translation.change' ).fire();
		this.$title = this.$container.find( '.cx-column__title' );
		this.$content = this.$container.find( '.cx-column__content' );
	};

	ContentTranslationEditor.prototype.listen = function () {
		mw.hook( 'mw.cx.translation.add' ).add( $.proxy( this.update, this ) );
		mw.hook( 'mw.cx.source.loaded' ).add( $.proxy( this.addPlaceholders, this ) );
		this.$content.on( 'input', function () {
			mw.hook( 'mw.cx.translation.change' ).fire();
		} );

	};

	ContentTranslationEditor.prototype.update = function ( sourceId ) {
		$( '#t' + sourceId ).empty();

		$( '#' + sourceId ).find( '.cx-segment' ).each( function () {
			$( '#t' + sourceId ).append( mw.cx.data.mt[ $( this ).data( 'segmentid' ) ] );
		} );
		$( '#t' + sourceId ).trigger( 'input' );

		this.calculateCompletion();
		mw.hook( 'mw.cx.translation.change' ).fire();
	};

	// TODO This is a dummy completeness calculation.
	ContentTranslationEditor.prototype.calculateCompletion = function () {
		var completeness;

		completeness = $( '.cx-column--translation' ).html().length / $( '.cx-column--source' ).html().length * 100;
		completeness = completeness > 100? 100 : completeness;
		mw.hook( 'mw.cx.progress' ).fire( completeness );
	};

	ContentTranslationEditor.prototype.addPlaceholders = function () {
		var cxSections = 'p, h1, h2, h3, div, table, figure, ul';

		this.$content.html( mw.cx.data.segmentedContent );
		this.$content.find( cxSections ).each( function () {
			var $section = $( this ),
				sourceSectionId = $section.attr( 'id' ),
				$sourceSection = $( '#' + sourceSectionId );
			$section.css( 'min-height', $section.height() );
			$section.attr( {
				'id': 't' + sourceSectionId,
				'data-source': sourceSectionId,
				'contenteditable': true
			} );
			$section.empty();
			keepAlignment( $section );

			// Bind events to the placeholder sections
			$sourceSection.click( function () {
				$( '#t' + $( this ).attr( 'id' ) ).click();
			} );
			$section.on( 'mouseenter', function () {
				$( this ).addClass( 'placeholder' ).html( '+ Add Translation' );
			} );
			$section.on( 'mouseleave', function () {
				$( this ).removeClass( 'placeholder' ).empty();
			} );
			$section.on( 'click', function () {
				$( this ).removeClass( 'placeholder' )
					.unbind( 'mouseenter mouseleave click' );
				mw.hook( 'mw.cx.translation.add' ).fire( $( this ).data( 'source' ) );
			} );

		} );
	};

	function keepAlignment( $section ) {
		$section.on( 'input', function () {
			var $sourceSection, sectionHeight, sourceSectionHeight;

			$section.css( 'min-height', '' );
			$sourceSection = $( '#' + $section.data( 'source' ) );
			sectionHeight = $section.height();
			sourceSectionHeight = $sourceSection.height();
			if ( sourceSectionHeight > sectionHeight ) {
				$section.css( 'min-height', sourceSectionHeight );
			} else {
				$sourceSection.css( 'min-height', sectionHeight );
			}
			// TODO: We will have to auto-shrink the sections while removing content.
		} );
	}

	$.fn.cxTranslation = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTranslation' );

			if ( !data ) {
				$this.data( 'cxTranslation', ( data = new ContentTranslationEditor( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxTranslation.defaults = {};
}( jQuery, mediaWiki ) );
