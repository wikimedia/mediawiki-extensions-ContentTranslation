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

	/**
	 * @class
	 * @param {number} draftId Draft id
	 */
	function ContentTranslationDraft( draftId ) {
		this.draftId = draftId;
		this.$draftButton = $( '.cx-header__draft-button' );
		this.listen();
	}

	/**
	 * Event bindings
	 */
	ContentTranslationDraft.prototype.listen = function () {
		var self = this;
		mw.hook( 'mw.cx.save' ).add( function () {
			self.save();
		} );
		mw.hook( 'mw.cx.translation.published' ).add( function () {
			self.$draftButton.prop( 'disabled', true ).show();
		} );
		// Publish when CTRL+S is pressed.
		$( document ).on( 'keydown', function ( e ) {
			if ( e.ctrlKey && e.which === 83 ) {
				e.preventDefault();
				mw.hook( 'mw.cx.save' ).fire();
				return false;
			}
		} );
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
			var translations, translation, draftContent;
			translations = response.query.contenttranslation.translations;
			translation = translations[ 0 ].translation;
			draftContent = translation.draftContent;
			self.$draft = $( draftContent );
			self.restore();
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
			mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
		}
	};

	/**
	 * Save the translation
	 */
	ContentTranslationDraft.prototype.save = function () {
		var self = this,
			translatedTitle,
			draftContent, targetTitle, params, apiParams,
			api = new mw.Api();

		translatedTitle = $( '.cx-column--translation > h2' ).text();
		draftContent = $( '.cx-column--translation .cx-column__content' ).clone();
		targetTitle = 'User:' + mw.user.getName() + '/' + translatedTitle;

		this.$draftButton
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-save-draft-saving' ) );
		params = {
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: mw.cx.sourceTitle,
			title: targetTitle,
			html: prepareTranslationForSave( draftContent ),
			status: 'draft',
			sourcerevision: mw.cx.sourceRevision,
			progress: JSON.stringify( mw.cx.getProgress() )
		};

		apiParams = $.extend( {}, params, {
			action: 'cxpublish'
		} );
		api.postWithToken( 'edit', apiParams, {
			timeout: 100 * 1000 // in milliseconds
		} ).done( function () {
			mw.hook( 'mw.cx.translation.saved' ).fire();
		} ).fail( function () {
			mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-publish-page-error' ) );
		} ).always( function () {
			self.$draftButton
				.prop( 'disabled', false )
				.text( mw.msg( 'cx-save-draft-button' ) )
				.hide();
		} );
	};

	/**
	 * Prepare the translated content for publishing by removing
	 * unwanted parts.
	 * @return {string} processed html
	 */
	function prepareTranslationForSave( $content ) {
		// Remove empty sections.
		$content
			.filter( function () {
				return !$.trim( $( this ).text() ) && $( this ).children().length;
			} )
			.remove();
		// Remove placeholder sections
		$content.find( '.placeholder' ).remove();
		return $content.html();
	}


	$( function () {
		var drafId, draft;

		drafId = new mw.Uri().query.draft;
		draft = new ContentTranslationDraft( drafId );
		if ( drafId ) {
			mw.hook( 'mw.cx.translation.placeholders.ready' ).add( function () {
				draft.fetch();
			} );
		}
	} );
}( jQuery, mediaWiki ) );
