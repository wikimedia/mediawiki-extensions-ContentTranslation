/*!
 * ContentTranslation - Save translation as draft
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var timer;

	/**
	 * @class
	 */
	function ContentTranslationDraft() {
		this.$draft = null;
		this.$sourceColumn = null;
		this.$translationColumn = null;
		this.disabled = false;
		this.listen();
	}

	/**
	 * Initalize the draft storage.
	 *
	 * @return {jQuery.Promise}
	 */
	ContentTranslationDraft.prototype.init = function () {
		var self = this;
		// There is no known consumer for this return value. Just returning it
		// to help testing in future.
		return this.find().then( function ( translation ) {
			if ( !translation ) {
				return false;
			}
			// If this translation is draft and not by current user, there is an
			// existing translation.
			if ( translation.translatorName !== mw.user.getName() &&
				translation.status === 'draft'
			) {
				self.showConflictWarning( translation );
				self.disabled = true;
				return false;
			}
			// Set the translationId
			mw.cx.translationId = translation.id;
			if ( translation.status !== 'deleted' ) {
				// Fetch the translation content
				return self.fetch();
			}
		} );
	};

	/**
	 * Get the content to save. Clean up the content by removing
	 * all unwanted classes and placeholders.
	 *
	 * @return {string} HTML to save
	 */
	ContentTranslationDraft.prototype.getContent = function () {
		var $content, $translationColumn;

		$translationColumn = this.$translationColumn ||
			$( '.cx-column--translation .cx-column__content' );
		$content = $translationColumn.clone();
		// Remove placeholder sections
		$content.find( '.placeholder' ).remove();
		// Remove empty sections.
		$content.find( mw.cx.getSectionSelector() ).each( function () {
			var $section = $( this );

			if ( !$.trim( $section.text() ) && !$section.children().length ) {
				$section.remove();
			}
		} );
		// Remove all highlighting before saving
		$content
			.find( '.cx-highlight, .cx-highlight--blue, .cx-highlight--lightblue' )
			.removeClass( 'cx-highlight cx-highlight--blue cx-highlight--lightblue' );

		return $content.html();
	};

	function checkAndSave() {
		if ( mw.cx.dirty ) {
			mw.hook( 'mw.cx.translation.save' ).fire();
		}
	}

	/**
	 * Event bindings
	 */
	ContentTranslationDraft.prototype.listen = function () {
		mw.hook( 'mw.cx.translation.save' ).add( $.proxy( this.save, this ) );
		// Save the draft on progress events, but not in all progress
		// events. Use a few seconds delay.
		mw.hook( 'mw.cx.progress' ).add( $.debounce( 5000, checkAndSave ) );

		// Save when CTRL+S is pressed.
		$( document ).on( 'keydown', function ( e ) {
			// See https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s-fa398313d4df
			if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 83 ) {
				checkAndSave();
				return false;
			}
		} );
	};

	ContentTranslationDraft.prototype.showConflictWarning = function ( translation ) {
		mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
			mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
		} );
	};

	/**
	 * Find if there is a draft existing for the current title and language pair.
	 *
	 * @return {jQuery.Promise}
	 */
	ContentTranslationDraft.prototype.find = function () {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			list: 'contenttranslation',
			sourcetitle: mw.cx.sourceTitle,
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			format: 'json'
		} ).then( function ( response ) {
			return response.query && response.query.contenttranslation.translation;
		} );
	};

	/**
	 * Fetch a draft content and restore it.
	 *
	 * @return {jQuery.Promise}
	 */
	ContentTranslationDraft.prototype.fetch = function () {
		var self = this,
			api = new mw.Api();

		mw.hook( 'mw.cx.draft.restoring' ).fire();

		return api.get( {
			action: 'query',
			list: 'contenttranslation',
			translationid: mw.cx.translationId,
			format: 'json'
		} ).then( function ( response ) {
			var translation, draftContent;

			translation = response.query.contenttranslation.translation;
			draftContent = translation.draftContent;

			self.$draft = $( draftContent );
			mw.hook( 'mw.cx.translation.placeholders.ready' ).add( function () {
				self.restore();
				mw.hook( 'mw.cx.draft.restored' ).fire();
			} );
		}, function ( errorCode, details ) {
			var uri = new mw.Uri();

			// Wrong draft id passed.
			delete uri.query.draft;
			location.href = uri.toString();

			if ( details.exception instanceof Error ) {
				details.exception = details.exception.toString();
			}
			details.errorCode = errorCode;
			mw.hook( 'mw.cx.draft.restore-failed' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage,
				mw.cx.sourceTitle,
				this.targetTitle,
				JSON.stringify( details )
			);
		} );
	};

	/**
	 * Add an orphan translation. Orphan translation is a translation without
	 * source section. We add a dummy source section for such cases. Dummy source section
	 * is a placeholder - a white block in source column.
	 *
	 * @param {jQuery} $translation The translation to add.
	 * @param {jQuery} $section Add it before/after this section.
	 * @param {string} afterOrBefore Whether the orphan to be added after or before $section.
	 */
	ContentTranslationDraft.prototype.addOrphanTranslation = function ( $translation, $section, afterOrBefore ) {
		// Add a dummy source section
		var $dummySourceSection = $( '<' + $translation.prop( 'tagName' ) + '>' )
			.css( 'height', 1 ) // Non-zero height to avoid it being ignored by keepAlignment plugin.
			.prop( 'id', $translation.data( 'source' ) );

		if ( afterOrBefore === 'after' ) {
			$( '#' + $section.data( 'source' ) ).after( $dummySourceSection );
			$section.after( $translation );
		} else {
			$( '#' + $section.data( 'source' ) ).before( $dummySourceSection );
			$section.before( $translation );
		}

		// Annotate the section to indicate it was restored from draft
		// so that certain adaptations can be skipped.
		$translation.attr( {
			id: 'cx' + $dummySourceSection.prop( 'id' ),
			'data-cx-draft': true,
			'data-source': $dummySourceSection.prop( 'id' )
		} ).keepAlignment();

		mw.hook( 'mw.cx.translation.postMT' ).fire( $translation );
	};

	/**
	 * Restore this draft to the appropriate placeholders
	 */
	ContentTranslationDraft.prototype.restore = function () {
		var i, j, $sourceColumn, $translationColumn,
			sectionId, sourceId, randomId,
			$draftSection = [],
			$section = [],
			$sourceSection = [],
			$placeholderSection = [],
			orphans = [];

		$sourceColumn = this.$sourceColumn ||
			$( '.cx-column--source .cx-column__content' );
		$translationColumn = this.$translationColumn ||
			$( '.cx-column--translation .cx-column__content' );

		for ( i = 0; i < this.$draft.length; i++ ) {
			$draftSection = $( this.$draft[ i ] );
			sectionId = $draftSection.prop( 'id' );
			sourceId = $draftSection.data( 'source' );

			// Skip "empty" sections. If there is no text, nothing to translate, nothing to lose.
			if ( $draftSection.text() === '' ) {
				continue;
			}

			if ( !sectionId ) {
				// If people add new paragraphs, those do not have ids. We set the
				// source attribute here; addOrphanTranslation will take care of the id.
				randomId = mw.user.generateRandomSessionId();
				$draftSection.data( 'source', randomId );

				mw.log( 'Found novel section. Named it as cx' + randomId );

				// Insert right after last matched section if possible
				if ( $section.length ) {
					this.addOrphanTranslation( $draftSection, $section, 'after' );
				} else {
					orphans.push( $draftSection );
				}

				continue;
			}

			// TODO: Must check that source section exists and act accordingly.
			$placeholderSection = $translationColumn.find( '#' + sectionId );
			$sourceSection = $sourceColumn.find( '#' + $placeholderSection.data( 'source' ) );
			if ( !$placeholderSection.length ) {
				// Support old sections with sequential idendifiers
				$sourceSection = $sourceColumn.find( '[data-seqid="' + sourceId + '"]' );
				$placeholderSection = $translationColumn.find( '#cx' +
					$sourceSection.prop( 'id' )
				);
				sectionId = $placeholderSection.prop( 'id' );
				if ( sectionId ) {
					// Update the id of this old draft
					$draftSection.prop( 'id', sectionId );
				}
			}

			// If we still don't see the source section for this draft section,
			// it means that the source article has changed.
			if ( !$placeholderSection.length ) {
				mw.log( 'Source section not found for ' + $draftSection.prop( 'id' ) );

				// Insert right after last matched section if possible
				if ( $section.length ) {
					this.addOrphanTranslation( $draftSection, $section, 'after' );
				} else {
					orphans.push( $draftSection );
				}

				continue;
			}

			$placeholderSection.replaceWith( $draftSection );

			// Get new section so that we can annotate the section to indicate it
			// was restored from draft, so that certain adaptations can be skipped.
			$section = $translationColumn.find( '#' + sectionId );
			$section.attr( {
				'data-cx-draft': true,
				'data-source': $sourceSection.prop( 'id' )
			} ).keepAlignment();

			mw.hook( 'mw.cx.translation.postMT' ).fire( $section );

			// As a last resort, if we did not add orphans immediately, add them
			// now before this section.
			for ( j = 0; j < orphans.length; j++ ) {
				this.addOrphanTranslation( orphans[ j ], $section );
			}
			orphans = [];
		}

		// We should not have anything more to do here, except if were not able
		// to match nothing at all. This could be due to a bug or if source article
		// changed completely. Let's just add what we have to the translation column.

		if ( orphans.length ) {
			mw.log( 'Draft restoration failed. Dumping draft unaligned' );
		}

		// TODO: tell the user or log this event somehow?
		for ( j = 0; j < orphans.length; j++ ) {
			$placeholderSection = $translationColumn.find( '.placeholder:first' );
			if ( $placeholderSection.length ) {
				sectionId = orphans[ j ].prop( 'id' );
				$sourceSection = $sourceColumn.find( '#' + $placeholderSection.data( 'source' ) );
				$placeholderSection.replaceWith( orphans[ j ] );

				$section = $translationColumn.find( '#' + sectionId );
				$section.attr( {
					id: 'cx' + $sourceSection.prop( 'id' ),
					'data-cx-draft': true,
					'data-source': $sourceSection.prop( 'id' )
				} ).keepAlignment();

				mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
			} else {
				// We ran out of placeholders. Add orphan sections to end.
				// TODO: $section might be empty if source article is empty.
				this.addOrphanTranslation( orphans[ j ], $section, 'after' );
			}
		}

		mw.hook( 'mw.cx.translation.continued' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle
		);
	};

	/**
	 * Save the translation
	 */
	ContentTranslationDraft.prototype.save = function () {
		var targetTitle, params, apiParams, now,
			content,
			api = new mw.Api();

		content = this.getContent();
		if ( this.disabled ) {
			return;
		}
		targetTitle = $( '.cx-column--translation > h2' ).text();
		clearInterval( timer );
		params = {
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: mw.cx.sourceTitle,
			title: targetTitle,
			status: 'draft',
			sourcerevision: mw.cx.sourceRevision,
			progress: JSON.stringify( mw.cx.getProgress() )
		};

		if ( !content ) {
			// There's no content to save,
			// but don't let the save initiator wait infinitely
			mw.hook( 'mw.cx.translation.saved' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage,
				mw.cx.sourceTitle,
				targetTitle
			);

			return;
		} else {
			params.html = EasyDeflate.deflate( content );
		}

		now = Date.now();
		apiParams = $.extend( {}, params, {
			assert: 'user',
			action: 'cxpublish'
		} );
		api.postWithToken( 'edit', apiParams, {
			timeout: 100 * 1000 // in milliseconds
		} ).done( function () {
			mw.hook( 'mw.cx.translation.saved' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage,
				mw.cx.sourceTitle,
				targetTitle
			);
			timer = setInterval( function () {
				checkAndSave();
			}, 5 * 60 * 1000 );
		} ).fail( function ( errorCode, details ) {
			var extra;

			if ( errorCode === 'assertuserfailed' ) {
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-lost-session-draft' ) );
			}

			extra = {
				d: Date.now() - now,
				s: params.html.length
			};
			// Hope these will be in the beginning of the string
			details = $.extend( extra, details );

			if ( details.exception instanceof Error ) {
				details.exception = details.exception.toString();
			}
			details.errorCode = errorCode;

			mw.hook( 'mw.cx.translation.save-failed' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage,
				mw.cx.sourceTitle,
				this.targetTitle,
				JSON.stringify( details )
			);
		} );
	};
	mw.cx.ContentTranslationDraft = ContentTranslationDraft;
}( jQuery, mediaWiki ) );
