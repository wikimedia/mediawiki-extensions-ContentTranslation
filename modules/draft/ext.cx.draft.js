/**
 * ContentTranslation - Save translation as draft
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var timer;

	/**
	 * @class
	 * @param {number} draftId Draft id
	 */
	function ContentTranslationDraft( draftId ) {
		this.draftId = draftId;
		this.disabled = false;
		this.init();
		this.listen();
	}

	ContentTranslationDraft.prototype.init = function () {
		var self = this;

		this.hasConflictingTranslation().done( function ( translation ) {
			if ( translation !== null ) {
				self.showConflictWarning( translation );
				self.disabled = true;
			}
		} );
	};

	/**
	 * Get the content to save. Clean up the content by removing
	 * all unwanted classes and placeholders.
	 * @return {string} HTML to save
	 */
	ContentTranslationDraft.prototype.getContent = function () {
		var $content;

		$content = $( '.cx-column--translation .cx-column__content' ).clone();
		// Remove placeholder sections
		$content.find( '.placeholder' ).remove();
		// Remove empty sections.
		$content.find( mw.cx.getSectionSelector() ).each( function () {
			var $section = $( this );

			if ( !$.trim( $section.text() ) ) {
				$section.remove();
			}
		} );
		// Remove all highlighting before saving
		$content
			.find( '.cx-highlight, .cx-highlight--blue, .cx-highlight--lightblue' )
			.removeClass( 'cx-highlight cx-highlight--blue cx-highlight--lightblue' );

		return $content.html();
	};

	function checkAndsave() {
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
		mw.hook( 'mw.cx.progress' ).add( $.debounce( 5000, checkAndsave ) );

		// Save when CTRL+S is pressed.
		$( document ).on( 'keydown', function ( e ) {
			// See https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s-fa398313d4df
			if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 83 ) {
				checkAndsave();
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
	 * @return {jQuery.Promise}
	 */
	ContentTranslationDraft.prototype.hasConflictingTranslation = function () {
		var deferred = $.Deferred(),
			api = new mw.Api();

		api.get( {
			action: 'query',
			list: 'contenttranslation',
			sourcetitle: mw.cx.sourceTitle,
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			format: 'json'
		} ).done( function ( response ) {
			var translation;

			translation = response.query && response.query.contenttranslation.translation;
			// If this translation is draft and not by current user, there is an
			// existing translation.
			if ( translation &&
				translation.translatorName !== mw.user.getName() &&
				translation.status === 'draft'
			) {
				deferred.resolve( translation );
			} else {
				deferred.resolve( null );
			}
		} );
		return deferred.promise();
	};

	/**
	 * Fetch a draft content and restore it.
	 */
	ContentTranslationDraft.prototype.fetch = function () {
		var self = this,
			api = new mw.Api();

		// TODO: The fetch can start immediately when the module loaded
		// Only the restoring part need to delay till placeholders are rendered.
		// Now there is a visible delay between placeholder rendering and restoring draft.
		api.get( {
			action: 'query',
			list: 'contenttranslation',
			translationid: this.draftId,
			format: 'json'
		} ).done( function ( response ) {
			var translation, draftContent;

			translation = response.query.contenttranslation.translation;
			draftContent = translation.draftContent;

			self.$draft = $( draftContent );
			mw.hook( 'mw.cx.translation.placeholders.ready' ).add( function () {
				self.restore();
			} );
		} ).fail( function () {
			var uri = new mw.Uri();

			// Wrong draft id passed.
			delete uri.query.draft;
			location.href = uri.toString();
		} );
	};

	/**
	 * Restore this draft to the appropriate placeholders
	 */
	ContentTranslationDraft.prototype.restore = function () {
		var i, $draftSection, sectionId, $section;

		for ( i = 0; i < this.$draft.length; i++ ) {
			$draftSection = $( this.$draft[ i ] );
			sectionId = $draftSection.prop( 'id' );
			$section = $( '#' + sectionId );
			$section.replaceWith( $draftSection );
			// Get new section
			$section = $( '#' + sectionId );
			// Annotate the section to indicate it was restored from draft
			// so that certain adaptations can be skipped.
			$section.attr( 'data-cx-draft', true );
			mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
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
		var targetTitle, params, apiParams,
			api = new mw.Api();

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
			html: this.getContent(),
			status: 'draft',
			sourcerevision: mw.cx.sourceRevision,
			progress: JSON.stringify( mw.cx.getProgress() )
		};

		if ( !params.html ) {
			// There's no content to save,
			// but don't let the save initiator wait infinitely
			mw.hook( 'mw.cx.translation.saved' ).fire(
				mw.cx.sourceLanguage,
				mw.cx.targetLanguage,
				mw.cx.sourceTitle,
				targetTitle
			);

			return;
		}
		apiParams = $.extend( {}, params, {
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
				checkAndsave();
			}, 5 * 60 * 1000 );
		} ).fail( function () {
			mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-save-draft-error' ) );
		} );
	};

	$( function () {
		var drafId, draft;

		if ( mw.config.get( 'wgContentTranslationDatabase' ) === null ) {
			mw.log( 'The ext.cx.drafts module can only work if CX Database configured.' );
			return;
		}

		drafId = new mw.Uri().query.draft;
		draft = new ContentTranslationDraft( drafId );
		if ( drafId ) {
			draft.fetch();
		}
	} );
}( jQuery, mediaWiki ) );
