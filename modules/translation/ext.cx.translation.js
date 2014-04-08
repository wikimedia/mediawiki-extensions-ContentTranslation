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
		var $content, $heading, $languageLabel, $subHeading;

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );
		}
		$heading = $( '<h2>' )
			.attr( 'contenteditable', true )
			.addClass( 'cx-column__title' )
			.text( $( '.cx-column--source .cx-column__title' ).text() );
		this.$container.append( $heading );

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: $.uls.data.getDir( mw.cx.targetLanguage )
			} );
			$languageLabel = $( '<span>' )
				.addClass( 'cx-column__language-label' )
				.text( $.uls.data.getAutonym( mw.cx.targetLanguage ) );
			$subHeading = $( '<div>' )
				.addClass( 'cx-column__sub-heading' )
				.append( $languageLabel );
			this.$container.append( $subHeading );
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

	/**
	 * Update the translation section with the machine translation
	 * @param {string} sourceId source section identifier
	 */
	ContentTranslationEditor.prototype.update = function ( sourceId ) {
		var $section = $( jquerySelectorForId( sourceId, 't' ) );

		// Copy the whole section html to translation section.
		$section.html( $( '#' + sourceId ).html() );
		// For every segment, use MT as replacement
		$section.find( '.cx-segment' ).each( function () {
			$( this ).html( mw.cx.data.mt[ $( this ).data( 'segmentid' ) ] );
		} );
		// Trigger input event so that the alignemnt is right.
		$section.trigger( 'input' );

		this.calculateCompletion();
		mw.hook( 'mw.cx.translation.change' ).fire();
	};

	// TODO This is a dummy completeness calculation.
	ContentTranslationEditor.prototype.calculateCompletion = function () {
		var completeness;

		completeness = $( '.cx-column--translation' ).html().length /
			$( '.cx-column--source' ).html().length * 100;
		completeness = completeness > 100 ? 100 : completeness;
		mw.hook( 'mw.cx.progress' ).fire( completeness );
	};

	/**
	 * Generate a jquery selector for all sections
	 * @return {string} the section selector string
	 */
	ContentTranslationEditor.prototype.getSectionSelector = function () {
		var i, sectionSelector = '',
			sectionTypes = [
			'div', 'p',
			// tables
			'table', 'tbody', 'thead', 'tfoot', 'caption', 'th', 'tr', 'td',
			// lists
			'ul', 'ol', 'li', 'dl', 'dt', 'dd',
			// HTML5 heading content
			'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup',
			// HTML5 sectioning content
			'article', 'aside', 'body', 'nav', 'section', 'footer', 'header', 'figure',
			'figcaption', 'fieldset', 'details', 'blockquote',
			// other
			'hr', 'button', 'canvas', 'center', 'col', 'colgroup', 'embed',
			'map', 'object', 'pre', 'progress', 'video'
		 ];
		for ( i = 0; i < sectionTypes.length; i++ ) {
			sectionSelector += sectionTypes[ i ] + ',';
		}
		// Remove the trailing comma.
		sectionSelector = sectionSelector.replace( /,+$/, '' );
		return sectionSelector;
	};

	function sectionClick() {
		/*jshint validthis:true */
		$( this ).removeClass( 'placeholder' )
			.unbind( 'hover click' );
		$( jquerySelectorForId( $( this ).data( 'source' ) ) ).removeClass( 'highlight' );
		mw.hook( 'mw.cx.translation.add' ).fire( $( this ).data( 'source' ) );
	}

	function sectionMouseEnter() {
		/*jshint validthis:true */
		$( this ).addClass( 'placeholder' ).html( '+ Add Translation' );
		$( jquerySelectorForId( $( this ).data( 'source' ) ) ).addClass( 'highlight' );
	}

	function sectionMouseLeave() {
		/*jshint validthis:true */
		$( this ).removeClass( 'placeholder' ).empty();
		$( jquerySelectorForId( $( this ).data( 'source' ) ) ).removeClass( 'highlight' );
	}

	/**
	 * Return a valid jquery selector for the given id after escaping
	 * @param {string} id
	 * @param {string} [prefix] id prefix
	 */
	function jquerySelectorForId( id, prefix ) {
		prefix = prefix || '';
		if ( !id ) {
			return '#' + prefix + ( Math.floor( Math.random() * 1000000 ) + 1 );
		}
		// make it a string
		id = id + '';
		return '#' + prefix + id.replace( /(:|\/|\.|\[|\])/g, '\\$1' );
	}
	/**
	 * Add placeholders for translation sections. The placeholders
	 * are aligned to the source sections. Also provides mouse hover effects.
	 */
	ContentTranslationEditor.prototype.addPlaceholders = function () {
		var cxSectionSelector = this.getSectionSelector();

		this.$content.html( mw.cx.data.segmentedContent );
		this.$content.find( cxSectionSelector ).each( function () {
			var $section, sourceSectionId, $sourceSection;

			$section = $( this );
			if ( $section.height() === 0 ) {
				// Source section has height as 0. This indicates an empty
				// section - mainly resulting from spurious wikitext
				return;
			}
			sourceSectionId = $section.attr( 'id' );
			$sourceSection = $( jquerySelectorForId( sourceSectionId ) );
			$section.css( 'min-height', $section.height() )
				.attr( {
					'id': 't' + sourceSectionId,
					'data-source': sourceSectionId,
					'contenteditable': true
				} );
			$section.empty();
			$section.on( 'input', keepAlignment );
			// Bind events to the placeholder sections
			$sourceSection.click( function () {
				$( jquerySelectorForId( $( this ).attr( 'id' ), 't' ) ).click();
			} );
			$sourceSection.hover( function () {
				$( jquerySelectorForId( $( this ).attr( 'id' ), 't' ) ).mouseenter();
			}, function () {
				$( jquerySelectorForId( $( this ).attr( 'id' ), 't' ) ).mouseleave();
			} );
			$section.hover( sectionMouseEnter, sectionMouseLeave );
			$section.on( 'click', sectionClick );
		} );
	};

	/**
	 * Keep the height of the source and translation sections equal
	 * so that they will appear top aligned.
	 */
	function keepAlignment() {
		var $sourceSection, sectionHeight, sourceSectionHeight, $section;
		/*jshint validthis:true */
		$section = $( this );
		$sourceSection = $( '#' + $section.data( 'source' ) );
		sectionHeight = $section.height();
		$sourceSection.css( 'min-height', '' );
		sourceSectionHeight = $sourceSection.height();
		if ( sourceSectionHeight < sectionHeight ) {
			$sourceSection.css( 'min-height', sectionHeight );
		}
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
