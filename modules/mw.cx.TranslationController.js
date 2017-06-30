/**
 * CX Translation - save, fetch and restore controller
 *
 * @param {mw.cx.dm.Translation} translation
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {object} config Translation configuration
 */
mw.cx.TranslationController = function MwCxTranslationController( translation, translationView, config ) {
	this.translation = translation;
	this.view = translationView;
	this.config = config;
	this.siteMapper = config.siteMapper;
	this.sourceTitle = config.sourceTitle;
	this.targetTitle = config.targetTitle;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;

	// Mixin constructors
	OO.EventEmitter.call( this );
	// Properties
	this.translationId = null;
	this.saveRequest = null;
	this.failCounter = 0;
	// Associative array of translation units queued to be saved
	this.saveQueue = {};
	this.saveTimer = null;
	this.schedule = OO.ui.throttle( this.processSaveQueue.bind( this ), 15 * 1000 );
	this.targetArticle = new mw.cx.TargetArticle( this.translation, this.view, this.config );
	this.listen();
};

/* Inheritance */

OO.mixinClass( mw.cx.TranslationController, OO.EventEmitter );

mw.cx.TranslationController.prototype.listen = function () {
	this.translation.connect( this, {
		change: 'save'
	} );

	this.view.connect( this, {
		publish: 'publish',
		targetTitleChange: 'onTranslationTitleChange'
	} );

	this.targetArticle.connect( this, {
		publishSuccess: 'onPublishSuccess',
		publishError: 'onPublishFailure'
	} );

	// Save when CTRL+S is pressed.
	document.onkeydown = function ( e ) {
		// See https://medium.com/medium-eng/the-curious-case-of-disappearing-polish-s-fa398313d4df
		if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 83 ) {
			this.processSaveQueue();
			return false;
		}
	}.bind( this );
	window.onbeforeunload = this.onPageUnload.bind( this );
};

/**
 * Save the translation to database
 * @param {mw.cx.dm.translationUnit} translationUnit
 */
mw.cx.TranslationController.prototype.save = function ( translationUnit ) {
	if ( !translationUnit ) {
		return;
	}

	// Keep records keyed by section id to avoid duplicates.
	// When more than one changes to a single translation unit comes, only
	// the last one need to consider for saving.
	this.saveQueue[ translationUnit.getSectionId() ] = translationUnit;

	this.schedule();
};

/**
 * Process the save queue. Save the changed translation units.
 * @param {boolean} [isRetry] Whether this is a retry or not
 * @fires savestart
 * @fires saveerror
 */
mw.cx.TranslationController.prototype.processSaveQueue = function ( isRetry ) {
	var params,
		api = new mw.Api();

	if ( !this.saveQueue || !Object.keys( this.saveQueue ).length ) {
		return;
	}

	if ( this.failCounter > 0 && isRetry !== true ) {
		// Last save failed, and a retry has been scheduled. Don't allow starting new
		// save requests to avoid overloading the servers, unless this is the retry.
		mw.log( '[CX] Save request skipped because a retry has been scheduled' );
		return;
	}

	// Starting the real save API call. Fire event so that we can show a progress
	// indicator in UI.
	this.emit( 'savestart' );
	this.view.setStatusMessage( mw.msg( 'cx-save-draft-saving' ) );
	if ( this.saveRequest ) {
		mw.log( '[CX] Aborted active save request' );
		// This causes failCounter to increase because the in-flight request fails.
		// The new request we do below will either reset the fail counter on success.
		// If it does not succeed, the retry timer that was set by the failed request
		// prevents further saves before the retry has completed succesfully or given up.
		this.saveRequest.abort();
	}

	params = {
		action: 'cxsave',
		assert: 'user',
		content: this.getContentToSave( this.saveQueue ),
		from: this.sourceLanguage,
		to: this.targetLanguage,
		sourcetitle: this.sourceTitle,
		title: this.translation.getTargetTitle(),
		sourcerevision: this.config.sourceRevision,
		progress: JSON.stringify( this.translation.getProgress() )
	};

	if ( this.failCounter > 0 ) {
		mw.log( '[CX] Retrying to save the translation. Failed ' + this.failCounter + ' times so far.' );
	}
	this.saveRequest = api.postWithToken( 'csrf', params )
		.done( function ( saveResult ) {
			this.onSaveComplete( saveResult );

			// Reset fail counter.
			if ( this.failCounter > 0 ) {
				this.failCounter = 0;
				this.schedule = OO.ui.throttle( this.processSaveQueue.bind( this ), 15 * 1000 );
				mw.log( '[CX] Retry successful. Save succeeded.' );
			}
		}.bind( this ) ).fail( function ( errorCode, details ) {
			var delay;
			this.failCounter++;

			mw.log.warn( '[CX] Saving Failed. Error code: ' + errorCode );
			if ( details.exception !== 'abort' ) {
				this.onSaveFailure( errorCode, details );
			}

			if ( this.failCounter > 5 ) {
				// If there are more than a few errors, stop autosave at timer triggers.
				// Show a bigger error message at this point.
				this.view.showMessage( 'error', mw.msg( 'cx-save-draft-error' ) );
				// This will allow any change to trigger save again
				this.failCounter = 0;
				mw.log.error( '[CX] Saving failed repeatedly. Stopping retries.' );
			} else {
				// Delay in seconds, failCounter is [1,5]
				delay = 60 * this.failCounter;
				// Schedule retry.
				setTimeout( this.processSaveQueue.bind( this, true ), delay * 1000 );
				mw.log( '[CX] Retry scheduled in ' + delay / 60 + ' minutes.' );
			}
		}.bind( this ) ).always( function () {
			this.saveRequest = null;
		}.bind( this ) );
};

/**
 * Find out if there is any "dirty" section translation units
 * Inform about sections not saved to the user.
 * @return {string|undefined} The message to be shown to user
 */
mw.cx.TranslationController.prototype.onPageUnload = function () {
	if ( this.saveQueue.length ) {
		this.schedule();
		return mw.msg( 'cx-warning-unsaved-translation' );
	}
};

mw.cx.TranslationController.prototype.onSaveComplete = function ( saveResult ) {
	var i, sectionId, minutes = 0;

	this.translationId = saveResult.cxsave.translationid;

	for ( i = 0; i < this.saveQueue.length; i++ ) {
		sectionId = this.saveQueue[ i ].sectionId;
		mw.log( '[CX] Section ' + sectionId + ' saved.' );
		// Annotate the section with errors.
		// if ( validations[ sectionId ] && Object.keys( validations[ sectionId ] ).length ) {
		// cxsave API will return errors from abusefilter validations, if any.
		// We need to set this in translation unit model. A tool attached to UI model
		// can query the model to see if there is any error and show in tools(on focus
		// of translation unit)
	}

	this.emit( 'savesuccess' );
	// Show saved status with a time after last save.
	clearTimeout( this.saveTimer );
	this.view.setStatusMessage( mw.msg( 'cx-save-draft-save-success', 0 ) );
	this.saveTimer = setInterval( function () {
		if ( this.failCounter > 0 ) {
			// Don't overwrite error message of failure with this timer controlled message.
			return;
		}
		minutes++;
		this.view.setStatusMessage(
			mw.msg( 'cx-save-draft-save-success', mw.language.convertNumber( minutes ) )
		);
	}.bind( this ), 60 * 1000 );

	// Reset the queue
	this.saveQueue = [];
};

mw.cx.TranslationController.prototype.onSaveFailure = function ( errorCode, details ) {
	if ( errorCode === 'assertuserfailed' ) {
		this.view.showMessage( 'error', mw.msg( 'cx-lost-session-draft' ) );
	}

	if ( details && details.exception instanceof Error ) {
		details.exception = details.exception.toString();
		details.errorCode = errorCode;
	}
	this.emit( 'saveerror' );
	this.view.setStatusMessage( mw.msg( 'cx-save-draft-error' ) );
};

/**
 * Get the deflated content to save from save queue
 * @param {Object[]} saveQueue
 * @return {string}
 */
mw.cx.TranslationController.prototype.getContentToSave = function ( saveQueue ) {
	var records = [];

	Object.keys( saveQueue ).forEach( function ( key ) {
		var translationUnit = saveQueue[ key ];
		this.getTranslationUnitData( translationUnit ).forEach( function ( data ) {
			records.push( data );
		} );
	}.bind( this ) );
	// The cxsave api accept non-deflated content too.
	// Sometimes it is helpful for testing:
	// return JSON.stringify( records );
	return EasyDeflate.deflate( JSON.stringify( records ) );
};

/**
 * Get the records for saving the translation unit.
 * @param {mw.cx.dm.SectionTranslationUnit} translationUnit
 * @return {Object[]} Objects to save
 */
mw.cx.TranslationController.prototype.getTranslationUnitData = function ( translationUnit ) {
	var origin, translationSource, records = [],
		validate;

	if ( !( translationUnit instanceof mw.cx.dm.SectionTranslationUnit ) ) {
		mw.log.error( '[CX] Trying to save a non-section: ' + translationUnit.getId() );
	}

	// XXX Section validation for abusefilter
	validate = false;

	// XXX should use the promise, but at this point the member variable should always be present
	translationSource = translationUnit.MTProvider;
	if ( translationSource === 'source' || translationSource === 'scratch' ) {
		origin = 'user';
	} else {
		origin = translationSource;
	}

	records.push( {
		content: translationUnit.getTargetDocument().outerHTML,
		sectionId: translationUnit.sourceDocument.id, // source section id is the canonical section id.
		validate: validate,
		origin: origin
	} );
	// XXX: Source sections are saved only once.
	records.push( {
		content: translationUnit.getSourceDocument().outerHTML,
		sectionId: translationUnit.sourceDocument.id,
		validate: false,
		origin: 'source'
	} );
	return records;
};

/**
 * Restore translations from a saved draft.
 * @param {Object} savedTranslation
 */
mw.cx.TranslationController.prototype.restore = function ( savedTranslation ) {
	var savedUnits = savedTranslation.translationUnits;

	this.translation.getTranslationUnits().forEach( function ( unit ) {
		var savedSection, provider, document,
			sectionId = unit.getSectionId();

		if ( !savedUnits[ sectionId ] ) {
			return;
		}

		// It's possible that we only saved prefilled MT with no user modifications
		savedSection = savedUnits[ sectionId ].user || savedUnits[ sectionId ].mt;

		if ( !savedSection ) {
			mw.log.error( '[CX] Missing content to restore for section ' + sectionId );
			return;
		}

		// Convert HTML string to Element.
		document = $( savedSection.content )[ 0 ];
		// XXX: We don't really know whether it was "source" or "scratch" if user changed the default
		provider = ( savedUnits[ sectionId ].mt && savedUnits[ sectionId ].mt.engine ) || 'source';

		// XXX: This is broken when we get for example CXDMTemplateTranslationUnit as the top level unit
		if ( unit instanceof mw.cx.dm.SectionTranslationUnit ) {
			unit.adaptWithRestoredContent( document, provider );
		}
	} );
	// TODO: Find out orphan translation units and handle them.
};

/**
 * Publish the translation
 */
mw.cx.TranslationController.prototype.publish = function () {
	mw.log( '[CX] Publishing translation...' );
	this.targetArticle.publish();
};

/**
 * Publish success handler
 */
mw.cx.TranslationController.prototype.onPublishSuccess = function () {
	mw.log( '[CX] Publishing finished successfully' );
	this.view.onPublishSuccess( this.targetArticle.getTargetURL() );
	// Event logging
	mw.hook( 'mw.cx.translation.published' ).fire(
		this.translation.sourceLanguage,
		this.translation.targetLanguage,
		this.translation.sourceTitle,
		this.translation.targetTitle
	);
};

/**
 * Publish error handler
 * @param {string} errorCode
 * @param {Object} details
 */
mw.cx.TranslationController.prototype.onPublishFailure = function ( errorCode, details ) {
	mw.log.error( '[CX] Publishing failed ' + errorCode );
	if ( details.exception instanceof Error ) {
		details.exception = details.exception.toString();
	}
	this.view.onPublishFailure( errorCode );

	// Event logging
	mw.hook( 'mw.cx.translation.publish.error' ).fire(
		mw.cx.sourceLanguage,
		mw.cx.targetLanguage,
		mw.cx.sourceTitle,
		this.targetTitle,
		JSON.stringify( details )
	);
};

/**
 * Translation title change handler
 * @param {string} newTitle The new title
 */
mw.cx.TranslationController.prototype.onTranslationTitleChange = function ( newTitle ) {
	var currentTitleObj, newTitleObj;

	if ( this.translation.getTargetTitle() === newTitle ) {
		// Nothing really changed.
		return;
	}

	newTitleObj = mw.Title.newFromText( newTitle );
	if ( !newTitleObj ) {
		mw.log.error( '[CX] Invalid target title' );
		return;
	}
	currentTitleObj = mw.Title.newFromText( this.translation.getTargetTitle() );
	this.translation.setTargetTitle( newTitle );

	if ( currentTitleObj !== newTitleObj.getNamespaceId() ) {
		this.view.changeNamespace( newTitleObj.getNamespaceId() );
	}
};
