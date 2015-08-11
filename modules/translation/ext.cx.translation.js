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
		var targetLanguageDir, $heading, $languageLabel, userLanguage, $subHeading, $content;

		targetLanguageDir = $.uls.data.getDir( mw.cx.targetLanguage );
		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: targetLanguageDir
			} );
		}

		$heading = $( '<h2>' )
			.attr( {
				'data-source': 'mwcx-source-title',
				contenteditable: true
			} )
			.addClass( 'cx-column__title' )
			.text( mw.cx.targetTitle )
			.cxEditor();

		this.$container.append( $heading );

		if ( mw.cx.targetLanguage ) {
			this.$container.prop( {
				lang: mw.cx.targetLanguage,
				dir: targetLanguageDir
			} );

			$languageLabel = $( '<span>' )
				.prop( {
					lang: mw.cx.targetLanguage,
					dir: targetLanguageDir
				} )
				.addClass( 'cx-column__language-label' )
				.text( $.uls.data.getAutonym( mw.cx.targetLanguage ) );

			// This is UI, and the UI language is not necessarily
			// the same as the target language
			userLanguage = mw.config.get( 'wgUserLanguage' );
			$subHeading = $( '<div>' )
				.prop( {
					lang: userLanguage,
					dir: $.uls.data.getDir( userLanguage )
				} )
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

			// Make sure the entire selection is inside the container.
			// Only save the selection if it is.
			if ( $.contains( $container[ 0 ], anchorNode ) &&
				$.contains( $container[ 0 ], focusNode ) ) {
				mw.cx.selection.save( 'translation', selection );
			}
		}
	}

	ContentTranslationEditor.prototype.listen = function () {
		var cxTranslation = this;

		mw.hook( 'mw.cx.translation.add' ).add( $.proxy( this.applyTranslationTemplate, this ) );
		mw.hook( 'mw.cx.translation.add' ).add( $.proxy( this.addSectionHeader, this ) );
		mw.hook( 'mw.cx.translation.postMT' ).add( $.proxy( this.postProcessMT, this ) );

		mw.hook( 'mw.cx.source.loaded' ).add( function () {
			// Delay adding placeholders. If we calculate the section
			// dimensions before all css and screenpainting is done,
			// there is a chance for section misalignment
			window.setTimeout( function () {
				// The heading of the translation can be significantly shorter or longer
				// than the heading of the source. Because it uses cxEditor, it is
				// automatically aligned when it's edited, but not if it's loaded
				// with explicit targettitle, so it must be aligned after the source is loaded.
				cxTranslation.$container.find( '.cx-column__title' ).keepAlignment();
				cxTranslation.addPlaceholders();
				mw.hook( 'mw.cx.translation.placeholders.ready' ).fire();
			}, 2000 );
		} );

		mw.hook( 'mw.cx.translation.change' ).add( function ( $section ) {
			if ( $section ) {
				$section.keepAlignment();
			}
		} );

		// Highlight segment pairs
		this.$container.on( 'mouseenter mouseleave', '.cx-segment', function () {
			var $segment = $( this ),
				segmentId = $segment.data( 'segmentid' );

			$( '[data-segmentid="' + segmentId + '"]' ).toggleClass( 'cx-highlight' );
		} );

		// Capture translation selection on keyup and mouseup
		this.$container.on( 'keyup mouseup', saveCursorPosition );

		this.$title.on( 'blur', function () {
			var title = cxTranslation.$title.text();

			if ( title !== mw.cx.targetTitle ) {
				mw.cx.targetTitle = cxTranslation.$title.text();
				mw.hook( 'mw.cx.translation.title.change' ).fire();
			}
		} );
	};

	/**
	 * Post-process the section after MT is applied.
	 * @param {jQuery} $section
	 */
	ContentTranslationEditor.prototype.postProcessMT = function ( $section ) {
		var $sourceSection;

		if ( !$section || !$section.length ) {
			// Empty references in some articles cause this.
			// Example: See Notes section in
			// https://fr.wikipedia.org/w/index.php?title=Dong_Qichang&oldid=100845438
			return;
		}

		$sourceSection = mw.cx.getSourceSection( $section.data( 'source' ) );
		mw.hook( 'mw.cx.translation.change' ).fire( $section );
		mw.hook( 'mw.cx.translation.focus' ).fire( $section );

		// Translation filled up. Unbind click handler for the source section.
		$sourceSection.unbind( 'click', sourceSectionClickHandler );

		// From now on, clicking on the source section
		// has the same effect as clicking the target section
		$sourceSection.on( 'click', function () {
			mw.hook( 'mw.cx.translation.focus' ).fire( $section );
		} );

		// If the section is editable, initiate an editor.
		// Otherwise make it non-editable. Example: templates.
		if ( $sourceSection.data( 'editable' ) === false ) {
			$section.removeAttr( 'contenteditable' );
		} else {
			$section.cxEditor();
		}

		// Search for text that was selected using the mouse.
		// Delay it to run every 250 ms so it won't fire all the time while typing.
		$section.on( 'click keyup', $.debounce( 250, function ( e ) {
			var selection = window.getSelection().toString();

			// Control or alt key press events can be ignored
			if ( e.metaKey || e.ctrlKey && !e.altKey ) {
				return;
			}

			if ( selection.trim() ) {
				// In this case, user is interested in targetLanguage->targetLanguage
				// dictionary lookup. Or synonyms.
				mw.hook( 'mw.cx.select.word' ).fire(
					selection,
					mw.cx.targetLanguage,
					mw.cx.targetLanguage
				);
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
		var $sourceSection, $section, $clone, selection;

		$sourceSection = mw.cx.getSourceSection( sourceId );
		$section = mw.cx.getTranslationSection( sourceId );

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
					'data-cx-state': 'source'
				} );

			if ( origin === 'mt-user-disabled' || origin === 'clear' ) {
				$clone.attr( 'data-cx-state', 'empty' );
				if ( $sourceSection.is( 'figure' ) ) {
					if ( origin === 'clear' ) {
						// When clearing figures, replace it with placeholder.
						$clone = getPlaceholder( sourceId ).attr( 'data-cx-section-type', 'figure' );
					} else {
						// Clear figure caption alone.
						$clone.find( 'figcaption' ).empty();
					}
				} else if ( $sourceSection.is( 'ul, ol' ) ) {
					// Explicit contenteditable attribute helps to place the cursor
					// in empty <ul> or <ol>.
					$clone.prop( 'contenteditable', true ).find( 'li' ).empty();
				} else {
					$clone.empty();
				}
			}
			// else: service-failure, non-editable, mt-not-available
			// Replace the placeholder with a translatable element
			$section.replaceWith( $clone );
			// $section was replaced. Get the updated instance.
			$section = mw.cx.getTranslationSection( sourceId );
			mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
		}
		// Set the focus on the new section.
		// Rely on browser behavior for setting the cursor position.
		// Will generally go to the beginning of the section.
		if ( origin !== 'reference' ) {
			// Do not focus reference. Page will scroll.
			$section.focus();
			// Capture and save the new selection and cursor position
			selection = mw.cx.selection.get();
			mw.cx.selection.save( 'translation', selection );
		}
	};

	/**
	 * Checks whether a tag is a heading.
	 *
	 * @static
	 * @param {string} tagName
	 * @return {boolean}
	 */
	ContentTranslationEditor.prototype.isHeading = function ( tagName ) {
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
	ContentTranslationEditor.prototype.isParentHeading = function ( preceding, current ) {
		// Any header goes if this is a non-heading
		if ( !this.isHeading( current ) ) {
			return this.isHeading( preceding );
		}

		// Both are headings, check that the previous one is bigger
		if ( this.isHeading( preceding ) ) {
			return preceding < current;
		}

		// Parent is not a heading at all
		return false;
	};

	/**
	 * Fill in the preceding parent heading, if not yet filled
	 * @param {string} sectionId Source section Id
	 */
	ContentTranslationEditor.prototype.addSectionHeader = function ( sectionId, origin ) {
		var $currentSection, $previousSection;

		$currentSection = mw.cx.getTranslationSection( sectionId );
		$previousSection = $currentSection.prev();

		if (
			$previousSection.is( '.placeholder' ) &&
			this.isParentHeading(
				$previousSection.data( 'cx-section-type' ),
				$currentSection.data( 'cx-section-type' )
			)
		) {
			mw.hook( 'mw.cx.translation.add' ).fire( $previousSection.data( 'source' ), origin );
		}
	};

	function sectionClick() {
		var sourceSectionId,
			/*jshint validthis:true */
			$currentSection = $( this );

		sourceSectionId = $currentSection.data( 'source' );
		// The equivalent section in source column
		mw.cx.getSourceSection( sourceSectionId ).removeClass( 'cx-highlight' );
		mw.hook( 'mw.cx.translation.add' ).fire( sourceSectionId, 'click' );
	}

	function sectionMouseEnterHandler() {
		/*jshint validthis:true */
		mw.cx.getSourceSection( $( this ).data( 'source' ) ).addClass( 'cx-highlight' );
	}

	function sectionMouseLeaveHandler() {
		/*jshint validthis:true */
		mw.cx.getSourceSection( $( this ).data( 'source' ) ).removeClass( 'cx-highlight' );
	}

	function sourceSectionClickHandler() {
		/*jshint validthis:true */
		mw.cx.getTranslationSection( $( this ).attr( 'id' ) ).click();
	}

	function sourceSectionMouseEnterHandler() {
		/*jshint validthis:true */
		mw.cx.getTranslationSection( $( this ).attr( 'id' ) ).mouseenter();
	}

	function sourceSectionMouseLeaveHandler() {
		/*jshint validthis:true */
		mw.cx.getTranslationSection( $( this ).attr( 'id' ) ).mouseleave();
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
			// If source section has zero height, do not add a placeholder
			// Zero height means either the section is empty or invisible.
			if ( $sourceSection.height() === 0 ) {
				continue;
			}
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
			.text( mw.msg( 'cx-translation-add-translation' ) );
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
