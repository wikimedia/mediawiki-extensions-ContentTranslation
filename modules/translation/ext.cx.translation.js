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
		var title,
			uri = new mw.Uri();

		mw.cx.targetTitle = uri.query.targettitle || uri.query.page;

		if ( !mw.cx.targetTitle ) {
			// Title not passed to the page? We show a selector in this case.
			// No need to proceed.
			return;
		}
		title = mw.Title.newFromText( mw.cx.targetTitle );

		if ( title ) {
			mw.cx.targetTitle = title.getPrefixedText();
		}

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
			.text( mw.cx.targetTitle )
			.cxEditor();

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

		$content = $( '<div>' ).addClass( 'cx-column__content' );

		this.$container.append( $content );
		mw.hook( 'mw.cx.translation.change' ).fire();
		this.$title = this.$container.find( '.cx-column__title' );

		mw.hook( 'mw.cx.translation.ready' ).fire();
	};

	ContentTranslationEditor.prototype.listen = function () {
		var cxTranslation = this;

		mw.hook( 'mw.cx.translation.add' ).add( $.proxy( this.applyTranslationTemplate, this ) );
		mw.hook( 'mw.cx.translation.postMT' ).add( $.proxy( this.postProcessMT, this ) );
		mw.hook( 'mw.cx.source.loaded' ).add( function () {
			// Delay adding placeholders. If we calculate the section
			// dimensions before all css and screenpainting is done,
			// there is a chance for section misalignment
			window.setTimeout( function () {
				cxTranslation.addPlaceholders();
			}, 2000 );
		} );

		// The translation for a section was cleared.
		// The translator either deleted the content
		// or used the clear translation tool.
		// Present the placeholder for the section to user.
		mw.hook( 'mw.cx.translation.clear' ).add( function ( sourceId ) {
			var targetSectionId = '#cx' + sourceId,
				$placeholder = getPlaceholder( sourceId );

			mw.hook( 'mw.cx.translation.change' ).fire( $( targetSectionId ) );
			$( targetSectionId ).replaceWith( $placeholder );
		} );

		mw.hook( 'mw.cx.translation.change' ).add( function ( $section ) {
			if ( $section ) {
				$section.keepAlignment();
			}
		} );

		// Highlight corresponding links in source and translation columns
		this.$container.on( 'mouseenter mouseleave', 'a', function () {
			$( '[data-linkid="' + $( this ).data( 'linkid' ) + '"]' )
				.toggleClass( 'cx-highlight' );
		} );

		// Highlight segment pairs
		this.$container.on( 'mouseenter mouseleave', '.cx-segment', function () {
			var $segment = $( this ),
				segmentId = $segment.data( 'segmentid' );
			$( '[data-segmentid="' + segmentId + '"]' ).toggleClass( 'cx-highlight' );
		} );
	};

	/**
	 * Post-process the section after MT is applied.
	 * @param {jQuery} $section
	 */
	ContentTranslationEditor.prototype.postProcessMT = function ( $section ) {
		var $sourceSection;

		// Adapt links
		$section.adaptLinks( mw.cx.targetLanguage );
		// Adapt images
		$section.find( 'img' ).adaptImage( mw.cx.targetLanguage );
		// Adapt references
		$sourceSection = $( '#' + $section.data( 'source' ) );
		if ( $.fn.adaptReferences ) { // This is an experimental feature
			$section.find( '[typeof="mw:Extension/ref"]' ).adaptReferences();
		}

		// If the section is editable, initiate an editor.
		// Otherwise make it non-editable. Example: templates
		if ( $sourceSection.data( 'editable' ) === false ) {
			$section.removeAttr( 'contenteditable' );
		} else {
			$section.cxEditor();
		}

		// Trigger input event so that the alignment will be correct
		$section.on( 'input', $.debounce( 200, false, function () {
			$( this ).data( 'cx-mt', false );
			mw.hook( 'mw.cx.translation.change' ).fire( $( this ) );
		} ) );

		// Search for text that was selected using the mouse.
		// Delay it to run every 250 ms so it won't fire all the time while typing.
		$section.on( 'click keyup', $.debounce( 250, function () {
			var selection = window.getSelection().toString();

			if ( selection ) {
				mw.hook( 'mw.cx.select.word' ).fire( selection );
			}
		} ) );

		$section.on( 'click focus', function () {
			mw.hook( 'mw.cx.translation.focus' ).fire( $( this ) );
		} );

		mw.hook( 'mw.cx.translation.updated' ).fire();
	};

	/**
	 * Update the translation section with the machine translation template.
	 * @param {string} sourceId source section identifier
	 * @param {boolean} machineTranslate Whether machine translation to be used or not
	 */
	ContentTranslationEditor.prototype.applyTranslationTemplate = function (
		sourceId,
		machineTranslate
	) {
		var $sourceSection, $section;

		$sourceSection = $( '#' + sourceId );
		$section = $( '#cx' + sourceId );

		// Replace the placeholder with the source section
		$section.replaceWith( $sourceSection
			.clone()
			.attr( {
				id: 'cx' + sourceId,
				'data-source': sourceId
			} )
		);

		// $section was replaced. Get the updated instance.
		$section = $( '#cx' + sourceId );
		if ( machineTranslate ) {
			$section.machineTranslate();
		} else {
			this.postProcessMT( $section );
		}
	};

	/**
	 * Generate a jQuery selector for all possible sections.
	 * @return {string} the section selector string
	 */
	mw.cx.getSectionSelector = function () {
		var sectionTypes;

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

		return sectionTypes.join( ',' );
	};

	function sectionClick() {
		/*jshint validthis:true */
		$( '#' + $( this ).data( 'source' ) ).removeClass( 'cx-highlight' );
		mw.hook( 'mw.cx.translation.add' ).fire( $( this ).data( 'source' ), true );
	}

	function sectionMouseEnterHandler() {
		/*jshint validthis:true */
		$( '#' + $( this ).data( 'source' ) ).addClass( 'cx-highlight' );
	}

	function sectionMouseLeaveHandler() {
		/*jshint validthis:true */
		$( '#' + $( this ).data( 'source' ) ).removeClass( 'cx-highlight' );
	}

	function sourceSectionClickHandler() {
		/*jshint validthis:true */
		$( '#cx' + $( this ).attr( 'id' ) ).click();
	}

	function sourceSectionMouseEnterHandler() {
		/*jshint validthis:true */
		$( '#cx' + $( this ).attr( 'id' ) ).mouseenter();
	}

	function sourceSectionMouseLeaveHandler() {
		/*jshint validthis:true */
		$( '#cx' + $( this ).attr( 'id' ) ).mouseleave();
	}

	/**
	 * Add placeholders for translation sections.
	 * The placeholders are aligned to the source sections.
	 * Also provides mouse hover effects.
	 */
	ContentTranslationEditor.prototype.addPlaceholders = function () {
		var i, $sourceSection, $placeholder, sourceSectionId,
			cxSectionSelector = mw.cx.getSectionSelector(),
			$sourceContent = $( '.cx-column--source .cx-column__content' ),
			$sourceSections = $sourceContent.children( cxSectionSelector ),
			placeholders = [];

		for ( i = 0; i < $sourceSections.length; i++ ) {
			$sourceSection = $( $sourceSections[ i ] );
			sourceSectionId = $sourceSection.attr( 'id' );
			$placeholder = getPlaceholder( sourceSectionId );
			placeholders.push( $placeholder );

			// Bind events to the placeholder sections
			$sourceSection
				.click( sourceSectionClickHandler )
				.hover( sourceSectionMouseEnterHandler, sourceSectionMouseLeaveHandler );
		}

		// Append the placeholders to the translation column.
		this.$container.find( '.cx-column__content' ).append( placeholders );
	};

	/**
	 * Get a placeholder div for the given source section.
	 * @param {string} sourceSectionId
	 * @return {jQuery} The placeholder jQuery object
	 */
	function getPlaceholder( sourceSectionId ) {
		var $sourceSection = $( '#' + sourceSectionId );

		return $( '<div>' )
			.addClass( 'placeholder' )
			.hover( sectionMouseEnterHandler, sectionMouseLeaveHandler )
			.on( 'click', sectionClick )
			.attr( {
				id: 'cx' + sourceSectionId,
				'data-source': sourceSectionId
			} )
			.css( {
				// Copy a bunch of position-related attribute values
				'min-height': $sourceSection.outerHeight(),
				width: $sourceSection.width(),
				'margin-top': $sourceSection.css( 'margin-top' ),
				'margin-bottom': $sourceSection.css( 'margin-bottom' ),
				display: $sourceSection.css( 'display' ),
				float: $sourceSection.css( 'float' ),
				clear: $sourceSection.css( 'clear' ),
				position: $sourceSection.css( 'position' )
			} )
			.html( mw.msg( 'cx-translation-add-translation' ) );
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
