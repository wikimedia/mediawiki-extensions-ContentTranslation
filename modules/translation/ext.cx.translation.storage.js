/*!
 * Client side interface for storing translations
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var timer, failCounter = 0;

	/**
	 * @class
	 */
	function ContentTranslationStorage() {
		this.sections = null;
	}

	ContentTranslationStorage.prototype.init = function () {
		this.sections = {};
		this.listen();
	};

	/**
	 * Get the content to save. Clean up the content by removing
	 * all unwanted classes and placeholders.
	 *
	 * @return {string} HTML to save
	 */
	ContentTranslationStorage.prototype.getContent = function ( $section ) {
		var $content;

		$content = $section.clone();
		// Remove all highlighting before saving
		$content
			.find( '.cx-highlight, .cx-highlight--blue, .cx-highlight--lightblue' )
			.removeClass( 'cx-highlight cx-highlight--blue cx-highlight--lightblue' );

		return $content[ 0 ].outerHTML;
	};

	ContentTranslationStorage.prototype.save = function () {
		var sections;

		sections = this.getSectionsToSave();
		if ( sections && sections.length ) {
			this.saveSections( sections );
		}

	};

	ContentTranslationStorage.prototype.getSectionsToSave = function () {
		var sectionId, sections = [];

		if ( this.disabled ) {
			return;
		}

		for ( sectionId in this.sections ) {
			if ( !this.sections[ sectionId ].saved ) {
				sections.push( this.sections[ sectionId ] );
			}
		}

		return sections;
	};

	ContentTranslationStorage.prototype.listen = function () {
		var self = this;

		mw.hook( 'mw.cx.translation.change' ).add( function ( $targetSection ) {
			// Mark the section for saving. Not that this not debounced. Since we
			// don't want to miss any section from save.
			self.markForSave( $targetSection );
		} );

		mw.hook( 'mw.cx.translation.change' ).add( $.debounce( 1000, function () {
			// Reset fail counter so that autosave if stopped can be restarted.
			failCounter = 0;
			// mw.cx.translation.change get fired for every changes in translation.
			// We debounce the handler to reduce the excessive save API calls.
			self.save();
		} ) );

		mw.hook( 'mw.cx.translation.save' ).add( $.proxy( this.save, this ) );

		// Save when CTRL+S is pressed.
		$( document ).on( 'keydown', function ( e ) {
			// See https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s-fa398313d4df
			if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 83 ) {
				self.save();
				return false;
			}
		} );
		$( window ).on( 'beforeunload', $.proxy( this.onPageUnload, this ) );
	};

	ContentTranslationStorage.prototype.onPageUnload = function () {
		var sections;

		sections = this.getSectionsToSave();
		if ( sections && sections.length ) {
			// Trigger save anyway.
			this.save();
			// Inform about sections not saved.
			return mw.msg( 'cx-warning-unsaved-translation' );
		} else {
			return;
		}
	};

	ContentTranslationStorage.prototype.saveSections = function ( sections ) {
		var self = this,
			api = new mw.Api();

		clearInterval( timer );
		return api.postWithToken( 'csrf', {
			action: 'cxsave',
			assert: 'user',
			content: EasyDeflate.deflate( JSON.stringify( sections ) ),
			from: mw.cx.sourceLanguage,
			to: mw.cx.targetLanguage,
			sourcetitle: mw.cx.sourceTitle,
			title: mw.cx.targetTitle,
			sourcerevision: mw.cx.sourceRevision,
			progress: JSON.stringify( mw.cx.getProgress() )
		} ).done( function ( response ) {
			self.onSaveComplete( sections, response.cxsave );
		} ).fail( function ( errorCode, details ) {
			self.onSaveFailure( errorCode, details );
		} ).always( function () {
			if ( failCounter > 10 ) {
				// If there are more than 10 save errors, stop autosave at timer triggers.
				// It will get restarted on further translation edits.
				// Show a bigger error message at this point.
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-save-draft-error' ) );
				return;
			}
			// Irrespective of success or fail, schedule next autosave
			timer = setInterval( function () {
				self.save();
			}, 5 * 60 * 1000 );
		} );
	};

	ContentTranslationStorage.prototype.onSaveComplete = function ( sections, saveResult ) {
		var i, sectionId, $targetSection,
			validations = saveResult.validations;

		mw.cx.translationId = saveResult.translationid;

		for ( i = 0; i < sections.length; i++ ) {
			// Mark the sections saved
			sections[ i ].saved = true;
			sectionId = sections[ i ].sectionId;
			$targetSection = mw.cx.getTranslationSection( sectionId );

			// Annotate the section with errors.
			if ( validations[ sectionId ] && Object.keys( validations[ sectionId ] ).length ) {
				$targetSection.data( 'errors', validations[ sectionId ] );
			} else {
				$targetSection.removeData( 'errors' );
			}
		}

		mw.hook( 'mw.cx.translation.saved' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle,
			mw.cx.targetTitle
		);

		// Reset fail counter.
		failCounter = 0;
	};

	ContentTranslationStorage.prototype.onSaveFailure = function ( errorCode, details ) {
		if ( errorCode === 'assertuserfailed' ) {
			mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-lost-session-draft' ) );
		}

		if ( details.exception instanceof Error ) {
			details.exception = details.exception.toString();
		}
		details.errorCode = errorCode;

		mw.hook( 'mw.cx.translation.save-failed' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle,
			mw.cx.targetTitle,
			JSON.stringify( details )
		);
		failCounter++;
	};

	ContentTranslationStorage.prototype.markForSave = function ( $targetSection ) {
		var $sourceSection, sourceSectionId, targetSectionId, sequenceId, state, origin;

		targetSectionId = $targetSection.attr( 'id' );
		state = $targetSection.data( 'cx-state' );
		sourceSectionId = $targetSection.data( 'source' );
		$sourceSection = mw.cx.getSourceSection( sourceSectionId );

		if ( state === 'mt' ) {
			origin = $targetSection.data( 'cx-mt-provider' ) || 'user';
		} else {
			origin = 'user';
		}
		sequenceId = $sourceSection.data( 'seqid' );
		this.sections[ targetSectionId ] = {
			content: this.getContent( $targetSection ),
			sectionId: sourceSectionId, // source section id is the canonical section id.
			saved: false,
			sequenceId: sequenceId,
			origin: origin
		};

		// Source sections are saved only once.
		this.sections[ sourceSectionId ] = this.sections[ sourceSectionId ] || {
			content: this.getContent( $sourceSection ),
			sectionId: sourceSectionId,
			saved: false,
			sequenceId: sequenceId,
			origin: 'source'
		};
	};

	mw.cx.ContentTranslationStorage = ContentTranslationStorage;
}( jQuery, mediaWiki ) );
