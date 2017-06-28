/*!
 * Client side interface for storing translations
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var saveRequest,
		timer = null,
		failCounter = 0;

	/**
	 * @class
	 */
	function ContentTranslationStorage() {
		this.sections = null;
	}

	ContentTranslationStorage.prototype.init = function () {
		this.sections = {};
		this.validationTracker = {};
		this.listen();
	};

	/**
	 * Get the content to save. Clean up the content by removing
	 * all unwanted classes and placeholders.
	 *
	 * @param {string} $section Section
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

	ContentTranslationStorage.prototype.save = function ( origin ) {
		var sections;

		sections = this.getSectionsToSave();
		if ( sections && sections.length ) {
			this.saveSections( sections, origin );
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

		mw.hook( 'mw.cx.translation.change' ).add( $.throttle( 15000, function () {
			// mw.cx.translation.change get fired for every changes in translation.
			// We debounce the handler to reduce the excessive save API calls.
			self.save( 'change' );
		} ) );

		mw.hook( 'mw.cx.draft.restoring' ).add( function () {
			// Do not save while restoring is being attempted
			self.disabled = true;
		} );
		mw.hook( 'mw.cx.draft.restored' ).add( function () {
			self.disabled = false;
		} );

		// Save when CTRL+S is pressed.
		$( document ).on( 'keydown', function ( e ) {
			// See https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s-fa398313d4df
			if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 83 ) {
				self.save( 'shortcut' );
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
			this.save( 'navigation' );
			// Inform about sections not saved.
			return mw.msg( 'cx-warning-unsaved-translation' );
		} else {
			return;
		}
	};

	ContentTranslationStorage.prototype.saveSections = function ( sections, origin ) {
		var self = this,
			api = new mw.Api();

		mw.log( '[CX] Save request initiated by: ' + origin );

		// Last save failed, and a retry has been scheduled. Don't allow starting new
		// save requests to avoid overloading the servers, unless this is the retry.
		if ( timer !== null && origin !== 'retry' ) {
			mw.log( '[CX] Save request skipped because a retry has been scheduled' );
			return;
		}

		if ( saveRequest ) {
			mw.log( '[CX] Aborted active save request' );
			// This causes failCounter to increase because the in-flight request fails.
			// The new request we do below will either reset the fail counter on success.
			// If it does not succeed, the retry timer that was set by the failed request
			// prevents further saves before the retry has completed succesfully or given up.
			saveRequest.abort();
		}

		// Starting the real save API call. Fire event so that we can show a progress
		// indicator in UI.
		mw.hook( 'mw.cx.translation.save-started' ).fire();
		saveRequest = api.postWithToken( 'csrf', {
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

			// Reset fail counter.
			failCounter = 0;
			clearTimeout( timer );
			timer = null;
		} ).fail( function ( errorCode, details ) {
			var delay;

			if ( details.exception !== 'abort' ) {
				self.onSaveFailure( errorCode, details );
			}

			failCounter++;
			clearTimeout( timer );
			timer = null;

			if ( failCounter > 5 ) {
				// If there are more than few errors, stop autosave at timer triggers.
				// Show a bigger error message at this point.
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-save-draft-error' ) );
				// This will allow any change to trigger save again
				failCounter = 0;
			} else {
				// Delay in seconds, failCounter is [1,5]
				delay = 60 * failCounter;
				timer = setTimeout( self.save.bind( self, 'retry' ), delay * 1000 );
			}
		} ).always( function () {
			saveRequest = null;
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
			mw.log( '[CX] Section ' + sectionId + ' saved.' );
			// Annotate the section with errors.
			if ( validations[ sectionId ] && Object.keys( validations[ sectionId ] ).length ) {
				$targetSection.data( 'errors', validations[ sectionId ] );
				mw.hook( 'mw.cx.translation.validation.error' ).fire( $targetSection );
				this.validationTracker[ sectionId ].error = true;
				mw.log( '[CX] Section ' + sectionId + ' has validation errors.' + validations[ sectionId ] );
			} else if ( this.validationTracker[ sectionId ].error ) {
				// Fire this only when a previous error was there.
				$targetSection.removeData( 'errors' );
				this.validationTracker[ sectionId ].error = false;
				mw.hook( 'mw.cx.translation.validation.success' ).fire( $targetSection );
			}
		}

		mw.hook( 'mw.cx.translation.saved' ).fire(
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage,
			mw.cx.sourceTitle,
			mw.cx.targetTitle
		);
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
	};

	ContentTranslationStorage.prototype.markForSave = function ( $targetSection ) {
		var $sourceSection, sourceSectionId, targetSectionId, state, origin,
			validate;

		targetSectionId = $targetSection.attr( 'id' );
		state = $targetSection.data( 'cx-state' );
		sourceSectionId = $targetSection.data( 'source' );
		$sourceSection = mw.cx.getSourceSection( sourceSectionId );

		if ( state === 'mt' ) {
			origin = $targetSection.data( 'cx-mt-provider' ) || 'user';
		} else {
			origin = 'user';
		}

		// To avoid large number of validations, we set validation flag in every 10th change of
		// section or if the section has error. Or if the section has validation error.
		this.validationTracker[ sourceSectionId ] = this.validationTracker[ sourceSectionId ] || {
			count: 1,
			error: false
		};
		validate = this.validationTracker[ sourceSectionId ].count % 10 === 0 ||
			this.validationTracker[ sourceSectionId ].error ||
			state === 'mt';

		if ( !$targetSection.is( 'p, #cxmwcx-source-title' ) ) {
			// Avoid validating sections that are not paragraphs or target title.
			validate = false;
		}
		this.validationTracker[ sourceSectionId ].count++;

		this.sections[ targetSectionId ] = {
			content: this.getContent( $targetSection ),
			sectionId: sourceSectionId, // source section id is the canonical section id.
			saved: false,
			validate: validate,
			origin: origin
		};
		// Source sections are saved only once.
		this.sections[ sourceSectionId ] = this.sections[ sourceSectionId ] || {
			content: this.getContent( $sourceSection ),
			sectionId: sourceSectionId,
			saved: false,
			validate: false,
			origin: 'source'
		};
	};

	mw.cx.ContentTranslationStorage = ContentTranslationStorage;
}( jQuery, mediaWiki ) );
