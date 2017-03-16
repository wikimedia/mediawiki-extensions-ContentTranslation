/**
 * CX Translation - save, fetch and restore controller
 *
 * @param {mw.cx.dm.Translation} translation
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {object} config Translation configuration
 */
mw.cx.Translation = function MwCxTranslation( translation, translationView, config ) {
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
	this.schedule = OO.ui.debounce( this.processSaveQueue.bind( this ), 3 * 1000 );
	this.listen();
};

/* Inheritance */

OO.mixinClass( mw.cx.Translation, OO.EventEmitter );

mw.cx.Translation.prototype.listen = function () {
	this.translation.connect( this, {
		change: 'save'
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
mw.cx.Translation.prototype.save = function ( translationUnit ) {
	if ( !translationUnit ) {
		return;
	}
	// Keep records keyed by section id and origin to avoid duplicates.
	// When more than one changes to a single translation unit comes, only
	// the last one need to consider for saving.
	this.getTranslationUnitData( translationUnit ).forEach( function( data ) {
		this.saveQueue[ data.sectionId + '-' + data.origin ] = data;
	}.bind( this ) );
	this.schedule();
};

/**
 * Process the save queue. Save the changed translation units.
 * @fires savestart
 * @fires saveerror
 */
mw.cx.Translation.prototype.processSaveQueue = function () {
	var params,
		api = new mw.Api();

	if ( !this.saveQueue || !Object.keys( this.saveQueue ).length ) {
		return;
	}

	// Starting the real save API call. Fire event so that we can show a progress
	// indicator in UI.
	this.emit( 'savestart' );
	this.view.setStatusMessage( mw.msg( 'cx-save-draft-saving' ) );
	if ( this.saveRequest ) {
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

	this.saveRequest = api.postWithToken( 'csrf', params )
		.done( this.onSaveComplete.bind( this ) )
		.fail( this.onSaveFailure.bind( this ) )
		.always( function () {
			this.saveRequest = null;
			if ( this.failCounter > 5 ) {
				// If there are more than 5 save errors, stop autosave at timer triggers.
				// It will get restarted on further translation edits.
				// Show a bigger error message at this point.
				this.emit( 'saveerror' );
				this.onSaveFailure();
				return;
			}
			// Irrespective of success or fail, schedule next autosave
			this.schedule();
		}.bind( this ) );
};

/**
 * Find out if there is any "dirty" section translation units
 * Inform about sections not saved to the user.
 * @return {string|undefined} The message to be shown to user
 */
mw.cx.Translation.prototype.onPageUnload = function () {
	if ( this.saveQueue.length ) {
		this.schedule();
		return mw.msg( 'cx-warning-unsaved-translation' );
	}
};

mw.cx.Translation.prototype.onSaveComplete = function ( saveResult ) {
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
		minutes++;
		this.view.setStatusMessage(
			mw.msg( 'cx-save-draft-save-success', mw.language.convertNumber( minutes ) )
		);
	}.bind( this ), 60 * 1000 );

	// Reset fail counter.
	this.failCounter = 0;
	// Reset the queue
	this.saveQueue = [];
};

mw.cx.Translation.prototype.onSaveFailure = function ( errorCode, details ) {
	if ( errorCode === 'assertuserfailed' ) {
		this.view.showMessage( 'error', mw.msg( 'cx-lost-session-draft' ) );
	}

	if ( details && details.exception instanceof Error ) {
		details.exception = details.exception.toString();
		details.errorCode = errorCode;
	}
	this.emit( 'saveerror' );
	this.view.setStatusMessage( mw.msg( 'cx-save-draft-error' ) );
	this.failCounter++;
};

/**
 * Get the deflated content to save from save queue
 * @param {Object[]} saveQueue
 * @return {string}
 */
mw.cx.Translation.prototype.getContentToSave = function ( saveQueue ) {
	var records = [];

	Object.keys( saveQueue ).forEach( function( key ) {
		records.push( saveQueue[ key ] );
	} );
	// The cxsave api accept non-deflated content too.
	// Sometimes it is helpful for testing:
	// return JSON.stringify( records );
	return EasyDeflate.deflate( JSON.stringify( records ) );
};

/**
 * Get the records for saving the translation unit.
 * @param {mw.cx.dm.translationUnit} translationUnit
 * @return {Object[]} Objects to save
 */
mw.cx.Translation.prototype.getTranslationUnitData = function ( translationUnit ) {
	var sequenceId, origin, translationSource, records = [],
		validate;

	// XXX Section validation for abusefilter
	validate = false;

	sequenceId = translationUnit.sourceDocument.getAttribute( 'data-seqid' );
	translationSource = translationUnit.getTranslationSource();
	if ( translationSource === 'mt' ) {
		origin = translationUnit.getMachineTranslationProvider();
	} else {
		origin = 'user';
	}
	records.push( {
		content: translationUnit.getTargetDocument().outerHTML,
		sectionId: translationUnit.sourceDocument.id, // source section id is the canonical section id.
		validate: validate,
		sequenceId: sequenceId,
		origin: origin
	} );
	// XXX: Source sections are saved only once.
	records.push( {
		content: translationUnit.getSourceDocument().outerHTML,
		sectionId: translationUnit.sourceDocument.id,
		validate: false,
		sequenceId: sequenceId,
		origin: 'source'
	} );
	return records;
};

mw.cx.Translation.prototype.getSavedTranslation = function () {
	return this.find().then( function( translation ) {
		if ( !translation ) {
			return $.Deferred().reject( false ).resolve();
		}

		// Do not allow two users to start a draft at the same time. The API only
		// returns a translation with different translatorName if this is the case.
		if ( translation.translatorName !== mw.user.getName() ) {
			this.view.showConflictWarning( translation );
			return $.Deferred().reject( false ).resolve();
		}

		if ( translation.status === 'deleted' ) {
			// Deleted translation
			return $.Deferred().reject( false ).resolve();
		}
			// Fetch the translation content
		return this.fetch( translation.id ).then( function( fetchedTranslation ) {
			return fetchedTranslation;
		} );
	}.bind( this ) );
};

/**
 * Restore the translation from database to translation view to continue.
 * @param {Object} savedTranslation
 */
mw.cx.Translation.prototype.restore = function ( savedTranslation ) {
	var i, translationUnits, sectionId, savedTranslationUnits, savedTranslationUnit, translationContent;

	this.emit( 'restorestart' );
	translationUnits = this.translation.getTranslationUnits();
	savedTranslationUnits = savedTranslation.translationUnits;
	for ( i = 0; i < translationUnits.length; i++ ) {
		sectionId = translationUnits[ i ].getSectionId();
		savedTranslationUnit = savedTranslationUnits[ sectionId ];

		if ( !savedTranslationUnit ) {
			continue;
		}

		translationContent = savedTranslationUnit.user || savedTranslationUnit.mt || savedTranslationUnit.source;
		// TODO: translationContent is an object, it has MT service, timestamp and content.
		// Do we need to retain all these info to the model?
		translationUnits[ i ].setTargetDocument( translationContent.content );
	}
	// TODO: Find out orphan translation units and handle them.
	this.view.setStatusMessage( mw.msg( 'cx-draft-restored' ) );
};

/**
 * Fetch the translation from database to translation view to continue.
 * @param {string} translationId Translation id
 * @return {jQuery.Promise}
 */
mw.cx.Translation.prototype.fetch = function ( translationId ) {
	var api = new mw.Api();

	this.emit( 'fetchstart' );
	this.view.setStatusMessage( mw.msg( 'cx-draft-restoring' ) );
	return api.get( {
		action: 'query',
		list: 'contenttranslation',
		translationid: translationId
	} ).then(
		// Success handler
		this.onFetchSuccess.bind( this ),
		// Failure handler
		this.onFetchFail.bind( this )
	);
};

mw.cx.Translation.prototype.onFetchSuccess = function ( response ) {
	var fetchedTranslation;
	fetchedTranslation = response.query.contenttranslation.translation;
	this.emit( 'fetchsuccess' );
	return fetchedTranslation;
};

mw.cx.Translation.prototype.onFetchFail = function ( errorCode, details ) {
	if ( details.exception instanceof Error ) {
		details.exception = details.exception.toString();
	}
	details.errorCode = errorCode;
	this.emit( 'fetcherror', this.translation, details );
	this.view.setStatusMessage( mw.msg( 'cx-draft-restore-failed' ) );
};

/**
 * Find if there is a draft existing for the current title and language pair.
 *
 * @return {jQuery.Promise}
 */
mw.cx.Translation.prototype.find = function () {
	var api = new mw.Api();

	return api.get( {
		action: 'query',
		list: 'contenttranslation',
		sourcetitle: this.sourceTitle,
		from: this.sourceLanguage,
		to: this.targetLanguage
	} ).then( function ( response ) {
		return response.query && response.query.contenttranslation.translation;
	} );
};

mw.cx.Translation.prototype.showOldRevisionWarning = function () {
	var diffUrl;

	diffUrl = this.siteMapper.getPageUrl( this.sourceLanguage, this.sourceTitle, {
		type: 'revision',
		diff: 'cur',
		oldid: this.translation.sourceRevisionId
	} );
	this.view.showMessage( 'warning', mw.message( 'cx-page-old-revision-loaded', diffUrl ) );
};
