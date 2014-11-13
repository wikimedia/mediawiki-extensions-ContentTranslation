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
			.attr( {
				'data-source': 'cx-source-title',
				contenteditable: true
			} )
			.addClass( 'cx-column__title' )
			.text( mw.cx.targetTitle )
			.cxEditor();

		this.$container.append( $heading );

		// The heading of the translation can be significantly shorter or longer
		// than the heading of the source. Because it uses cxEditor, it is
		// automatically aligned when it's edited, but not if it's loaded
		// with explicit targettitle.
		$heading.keepAlignment();

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
		this.$title = this.$container.find( '.cx-column__title' );

		mw.hook( 'mw.cx.translation.ready' ).fire();
	};

	function saveCursorPosition() {
		var $container, selection, anchorNode, focusNode;

		/*jshint validthis:true */
		$container = $( this );
		selection = mw.cx.selection.get();
		if ( selection ) {
			anchorNode = selection.anchorNode;
			focusNode = selection.focusNode;

			// Make sure the entire selection is inside the container
			// Only save the selection if it is
			if ( $.contains( $container[ 0 ], anchorNode ) &&
				$.contains( $container[ 0 ], focusNode ) ) {
				mw.cx.selection.save( 'translation', selection );
			}
		}
	}

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
				mw.hook( 'mw.cx.translation.placeholders.ready' ).fire();
			}, 2000 );
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

		// Capture translation selection on keyup and mouseup
		this.$container.on( 'keyup mouseup', saveCursorPosition );
	};

	/**
	 * Post-process the section after MT is applied.
	 * @param {jQuery} $section
	 */
	ContentTranslationEditor.prototype.postProcessMT = function ( $section ) {
		var selection, $sourceSection = $( '#' + $section.data( 'source' ) );

		mw.hook( 'mw.cx.translation.change' ).fire( $section );
		mw.hook( 'mw.cx.translation.focus' ).fire( $section );
		// Translation filled up. Unbind click handler for the source section.
		$sourceSection.unbind( 'click', sourceSectionClickHandler );
		// And now onwards clicking on source section has same effect of clicking
		// on target section.
		$sourceSection.on( 'click', function () {
			mw.hook( 'mw.cx.translation.focus' ).fire( $section );
		} );
		// If the section is editable, initiate an editor.
		// Otherwise make it non-editable. Example: templates
		if ( $sourceSection.data( 'editable' ) === false ) {
			$section.removeAttr( 'contenteditable' );
		} else {
			$section.cxEditor();
		}

		// Set the focus on the new section
		// Rely on browser behavior for setting cursor position
		// Will generally go to beginning of section
		$section[ 0 ].focus();
		// Capture and save the new selection/cursor position
		selection = mw.cx.selection.get();
		mw.cx.selection.save( 'translation', selection );

		// Search for text that was selected using the mouse.
		// Delay it to run every 250 ms so it won't fire all the time while typing.
		$section.on( 'click keyup', $.debounce( 250, function () {
			var selection = window.getSelection().toString();

			if ( selection.trim() ) {
				// In this case, user is interested in targetLanguage->targetLanguage
				// dictionary lookup. Or synonyms.
				mw.hook( 'mw.cx.select.word' ).fire( selection, mw.cx.targetLanguage, mw.cx.targetLanguage );
			}
		} ) );

		$section.on( 'click focus', function () {
			mw.hook( 'mw.cx.translation.focus' ).fire( $( this ) );
		} );

		mw.hook( 'mw.cx.translation.updated' ).fire();
	};

	/**
	 * Update the translation section with the machine translation template.
	 *
	 * @param {string} sourceId source section identifier
	 * @param {string} origin Event source or reason
	 */
	ContentTranslationEditor.prototype.applyTranslationTemplate = function (
		sourceId,
		origin
	) {
		var $sourceSection, $section, $clone;

		$sourceSection = $( '#' + sourceId );
		$section = $( '#cx' + sourceId );

		if ( origin === 'click' || origin === 'restore' ) {
			// On failure this fires a hook which this method listens to.
			// For that there is the else branch. On success this also sets the
			// data-cx-state to 'mt'.
			$sourceSection.machineTranslate();
		} else {
			$clone = $sourceSection
				.clone()
				.attr( {
					id: 'cx' + sourceId,
					'data-source': sourceId,
					'data-cx-state': 'source',
				} );

			if ( origin === 'mt-user-disabled' || origin === 'clear' ) {
				$clone.attr( 'data-cx-state', 'empty' );
				$clone.empty();
			} // else: service-failure, non-editable, mt-not-available

			// Replace the placeholder with a translatable element
			$section.replaceWith( $clone );

			// $section was replaced. Get the updated instance.
			$section = $( '#cx' + sourceId );
			mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
		}
	};

	/**
	 * Checks whether a tag is a heading.
	 *
	 * @static
	 * @param {string} tagName
	 * @return {boolean}
	 */
	ContentTranslationEditor.isHeading = function ( tagName ) {
		return /^H[1-6]$/i.test( tagName );
	};

	/**
	 * Checks whether one tag is a parent heading of another tag.
	 *
	 * @static
	 * @param {string} preceding tagName
	 * @param {string} current tagName
	 * @return {boolean}
	 */
	ContentTranslationEditor.isParentHeading = function ( preceding, current ) {
		// Any header goes if this is a non-heading
		if ( !ContentTranslationEditor.isHeading( current ) ) {
			return ContentTranslationEditor.isHeading( preceding );
		}

		// Both are headings, check that the previous one is bigger
		if ( ContentTranslationEditor.isHeading( preceding ) ) {
			return preceding < current;
		}

		// Parent is not a heading at all
		return false;
	};

	function sectionClick() {
		/*jshint validthis:true */
		var sourceSectionId, $currentSection, $previousSection;

		$currentSection = $( this );
		$previousSection = $currentSection.prev();
		sourceSectionId = $currentSection.data( 'source' );

		// The equivalent section in source column
		$( '#' + sourceSectionId ).removeClass( 'cx-highlight' );

		// Fill in the preceding parent heading, if not yet filled
		if (
			$previousSection.is( '.placeholder' ) &&
			ContentTranslationEditor.isParentHeading(
				$previousSection.data( 'cx-section-type' ),
				$currentSection.data( 'cx-section-type' )
			)
		) {
			mw.hook( 'mw.cx.translation.add' ).fire( $previousSection.data( 'source' ), 'click' );
		}

		mw.hook( 'mw.cx.translation.add' ).fire( sourceSectionId, 'click' );
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
			$placeholder = getPlaceholder( sourceSectionId )
				.attr( 'data-cx-section-type', $sourceSection.prop( 'tagName' ) );
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
	 *
	 * @param {string} sourceSectionId
	 * @return {jQuery} The placeholder jQuery object
	 */
	function getPlaceholder( sourceSectionId ) {
		return $( '<div>' )
			.addClass( 'placeholder' )
			.hover( sectionMouseEnterHandler, sectionMouseLeaveHandler )
			.on( 'click', sectionClick )
			.attr( {
				id: 'cx' + sourceSectionId,
				'data-source': sourceSectionId
			} )
			.keepAlignment()
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

	if ( typeof QUnit !== undefined ) {
		// Expose this module for unit testing
		mw.cx.ContentTranslationEditor = ContentTranslationEditor;
	}

	$.fn.cxTranslation.defaults = {};
}( jQuery, mediaWiki ) );
