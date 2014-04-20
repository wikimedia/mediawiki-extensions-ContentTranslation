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
		var uri = new mw.Uri();

		mw.cx.targetTitle = uri.query.targettitle || uri.query.page;

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
			.text( mw.cx.targetTitle );

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
	};

	ContentTranslationEditor.prototype.listen = function () {
		mw.hook( 'mw.cx.translation.add' ).add( $.proxy( this.update, this ) );
		mw.hook( 'mw.cx.source.loaded' ).add( $.proxy( this.addPlaceholders, this ) );
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

	function sectionMouseEnterHandler() {
		/*jshint validthis:true */
		$( this ).addClass( 'placeholder' ).html( mw.msg( 'cx-translation-add-translation' ) );
		$( jquerySelectorForId( $( this ).data( 'source' ) ) ).addClass( 'highlight' );
	}

	function sectionMouseLeaveHandler() {
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
		var selector, randomId;

		randomId = '#' + prefix + ( Math.floor( Math.random() * 1000000 ) + 1 );
		prefix = prefix || '';

		if ( !id ) {
			selector = randomId;
		} else {
			// make it a string
			id = id + '';
			selector = '#' + prefix + id.replace( /(:|\/|\.|\[|\])/g, '\\$1' );
		}

		try {
			// Make sure jQuery considers it as a valid selector.
			$( selector );
		} catch ( error ) {
			selector = randomId;
		}

		return selector;
	}

	function sourceSectionClickHandler() {
		/*jshint validthis:true */
		$( jquerySelectorForId( $( this ).attr( 'id' ), 't' ) ).click();
	}

	function sourceSectionMouseEnterHandler() {
		/*jshint validthis:true */
		$( jquerySelectorForId( $( this ).attr( 'id' ), 't' ) ).mouseenter();
	}

	function sourceSectionMouseLeaveHandler() {
		/*jshint validthis:true */
		$( jquerySelectorForId( $( this ).attr( 'id' ), 't' ) ).mouseleave();
	}

	/**
	 * Add placeholders for translation sections. The placeholders
	 * are aligned to the source sections. Also provides mouse hover effects.
	 */
	ContentTranslationEditor.prototype.addPlaceholders = function () {
		var $content,
			$sections, i, $section, sourceSectionId, $sourceSection,
			cxSectionSelector = this.getSectionSelector();

		// Clone the source article and work on this detached object
		// to help performance
		$content = $( '.cx-column--source .cx-column__content' ).clone();
		$sections = $content.find( cxSectionSelector );

		for ( i = 0; i < $sections.length; i++ ) {
			$section = $( $sections[ i ] );
			sourceSectionId = $section.attr( 'id' );
			$sourceSection = $( jquerySelectorForId( sourceSectionId ) );

			if ( $sourceSection.height() === 0 || !$sourceSection.text().trim() ) {
				$sourceSection.remove();
				$section.remove();

				// Source section has 0 height. This indicates an empty
				// section - mainly resulting from spurious wikitext.
				continue;
			}

			$section.empty();
			$section.css( {
				'min-height': $sourceSection.height(),
				width: $sourceSection.width()
			} );

			$section.attr( {
				'id': 't' + sourceSectionId,
				'data-source': sourceSectionId,
				// Sections are editable
				'contenteditable': true
			} );

			// Attach event handlers for sections
			$section.on( 'input', keepAlignment )
				.hover( sectionMouseEnterHandler, sectionMouseLeaveHandler )
				.on( 'click', sectionClick );

			// Bind events to the placeholder sections
			$sourceSection.click( sourceSectionClickHandler )
				.hover( sourceSectionMouseEnterHandler, sourceSectionMouseLeaveHandler );
		}

		// Attach $content to container
		this.$container.append( $content );
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
		$sourceSection.css( 'min-height', '' );

		sourceSectionHeight = $sourceSection.height();
		sectionHeight = $section.height();

		if ( sourceSectionHeight < sectionHeight ) {
			$sourceSection.css( 'min-height', sectionHeight );
			sourceSectionHeight = $sourceSection.height();
			sectionHeight = $section.height();

			// Fun stuff - setting a calculated min-height will not guarantee
			// equal height for all kind of section pairs.
			// Experiments shows a few pixels difference
			// Here we do it by 10px steps till we reach equal height.
			while ( sectionHeight !== sourceSectionHeight ) {
				sectionHeight = sectionHeight = sectionHeight + 10;
				$sourceSection.css( 'min-height', sectionHeight );
				$section.css( 'min-height', sectionHeight );
				sectionHeight = $section.height();
				sourceSectionHeight = $sourceSection.height();
			}
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
