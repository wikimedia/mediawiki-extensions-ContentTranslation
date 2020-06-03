'use strict';

/**
 * CX Translation - save, fetch controller
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @param {mw.cx.dm.Translation} translation
 * @param {ve.init.mw.CXTarget} veTarget
 * @param {mw.cx.SiteMapper} siteMapper
 * @param {Object} [config] Configuration for mw.cx.TargetArticle
 */
mw.cx.TranslationController = function MwCxTranslationController(
	translation, veTarget, siteMapper, config
) {
	this.translation = translation;
	this.veTarget = veTarget;
	this.siteMapper = siteMapper;
	this.translationView = this.veTarget.translationView;

	// Mixin constructors
	OO.EventEmitter.call( this );

	this.hasDeletedTranslations = null;

	// Properties
	this.saveRequest = null;
	this.failCounter = 0;
	this.isFailedUnrecoverably = false; // TODO: This is still unused
	this.mtAbusePublishingStopped = false;
	this.saveStatusTimer = null;
	this.retryTimer = null;
	this.loginDialog = null;
	this.sourceCategoriesSaved = false;
	this.targetCategoriesChanged = 0;
	this.savedTargetTitle = this.translation.getTargetTitle();
	this.targetArticle = new mw.cx.TargetArticle( this.translation, this.veTarget, config );
	this.translationTracker = new mw.cx.TranslationTracker( this.veTarget, config );
	this.saveScheduler = OO.ui.debounce( this.processSaveQueue.bind( this ), 5 * 1000 );
	// See also ve.ui.CXResetSectionTool that depends on the timeout value
	this.changeTrackerScheduler = OO.ui.debounce( this.processChangeQueue.bind( this ), 100 );

	// Events
	this.listen();
};

/* Inheritance */

OO.mixinClass( mw.cx.TranslationController, OO.EventEmitter );

/* Methods */

mw.cx.TranslationController.prototype.listen = function () {
	this.translation.connect( this, {
		targetCategoriesChange: 'onTargetCategoriesChange',
		issuesResolved: 'onIssuesResolved',
		translationIssues: 'onTranslationIssues',
		sectionChange: 'onSectionChange'
	} );

	this.veTarget.connect( this, {
		surfaceReady: 'onSurfaceReady',
		publish: 'publish',
		targetTitleChange: 'onTargetTitleChange'
	} );

	this.targetArticle.connect( this, {
		captchaCancel: 'onPublishCancel',
		publishCancel: 'onPublishCancel',
		publishSuccess: 'onPublishSuccess',
		publishError: 'onPublishFailure'
	} );

	// Save when CTRL+S is pressed.
	// TODO: This should use VE's Trigger/Command system, and be registered with the help dialog
	document.onkeydown = function ( e ) {
		// See https://medium.engineering/the-curious-case-of-disappearing-polish-s-fa398313d4df
		if ( ( e.metaKey || e.ctrlKey && !e.altKey ) && e.which === 83 ) {
			this.processSaveQueue();
			return false;
		}
	}.bind( this );

	window.onbeforeunload = this.onPageUnload.bind( this );
};

/**
 * Add the section changes to save queue and change queue.
 * These two queues are processed in different interevals and different
 * triggers. Hence two queues.
 *
 * @param {string} sectionId
 */
mw.cx.TranslationController.prototype.onSectionChange = function ( sectionId ) {
	var sectionNumber = mw.cx.getSectionNumberFromSectionId( sectionId );
	this.translationTracker.pushToChangeQueue( sectionNumber );
	this.translationTracker.pushToSaveQueue( sectionNumber );
	// Schedule processing the change and save queues
	this.changeTrackerScheduler();
	this.saveScheduler();

	if ( this.mtAbusePublishingStopped ) {
		this.mtAbusePublishingStopped = false;
		// Resolve MT abuse error, if it is registered
		this.translation.resolveIssueByName( 'mt-abuse-publish' );
	}
};

/**
 * Return true if there are any new changes to be saved.
 *
 * @return {boolean}
 */
mw.cx.TranslationController.prototype.hasUnsavedChanges = function () {
	return this.translationTracker.getSaveQueue().length ||
		this.targetTitleChanged() ||
		this.targetCategoriesChanged !== 0;
};

/**
 * Return true if target title is changed and needs to be saved.
 *
 * @return {boolean}
 */
mw.cx.TranslationController.prototype.targetTitleChanged = function () {
	return this.savedTargetTitle !== this.translation.getTargetTitle();
};

mw.cx.TranslationController.prototype.processChangeQueue = function () {
	this.translationTracker.processChangeQueue();
};

/**
 * Process the save queue. Save the changed translation units.
 *
 * @param {boolean} [isRetry] Whether this is a retry or not.
 */
mw.cx.TranslationController.prototype.processSaveQueue = function ( isRetry ) {
	var numOfChangedCategories, savedSections, params,
		apiOptions = {},
		api = new mw.Api();

	// Before save starts, make sure all changes are processed and section states are
	// up to date with latest content.
	this.processChangeQueue();

	if ( !this.hasUnsavedChanges() ) {
		return;
	}

	if ( this.failCounter > 0 && isRetry !== true ) {
		// Last save failed, and a retry has been scheduled. Don't allow starting new
		// save requests to avoid overloading the servers, unless this is the retry.
		mw.log( '[CX] Save request skipped because a retry has been scheduled' );
		return;
	}

	// Starting the real save API call.
	this.translationView.setStatusMessage( mw.msg( 'cx-save-draft-saving' ) );

	if ( this.saveRequest ) {
		mw.log( '[CX] Aborted active save request' );
		// This causes failCounter to increase because the in-flight request fails.
		// The new request we do below will reset the fail counter on success.
		// If it does not succeed, the retry timer that was set by the failed request
		// prevents further saves before the retry has completed successfully or given up.
		this.saveRequest.abort();
	}

	// Copy the current save queue by value.
	savedSections = this.translationTracker.getSaveQueue().slice();

	params = {
		action: 'cxsave',
		assert: 'user',
		content: this.getContentToSave( savedSections ),
		from: this.translation.getSourceLanguage(),
		to: this.translation.getTargetLanguage(),
		sourcetitle: this.translation.getSourceTitle(),
		title: this.translation.getTargetTitle(),
		sourcerevision: this.translation.getSourceRevisionId(),
		progress: JSON.stringify( this.translationTracker.getTranslationProgress() ),
		cxversion: 2
	};

	if ( this.targetCategoriesChanged > 0 ) {
		// Use counter for number of changes in target categories which are attempted to be saved.
		// Once saving is successful, that number is subtracted from current number of changes in
		// target categories, which maybe got bigger while first change was being saved.
		numOfChangedCategories = this.targetCategoriesChanged;
		params.targetcategories = JSON.stringify( this.translation.getTargetCategories() );

		// Only save source categories once per session, the first time user changes target
		// categories. Both source and target categories are saved in cx_corpora table, but
		// only target categories are retrieved when saved draft is being restored. Source
		// categories are saved for completeness of cx_corpora, which pairs source and target.
		// Source categories are saved once per session, because there may have been changes
		// to source categories in the mean time.
		if ( !this.sourceCategoriesSaved ) {
			params.sourcecategories = JSON.stringify( this.translation.getSourceCategories() );
		}
	}

	if ( this.failCounter > 0 ) {
		mw.log( '[CX] Retrying to save the translation. Failed ' + this.failCounter + ' times so far.' );
	}

	if ( isRetry ) {
		// Default timeout is 30s. Double it while retrying to increase the chance for success.
		apiOptions = { timeout: 60 * 1000 };
	}

	this.saveRequest = api.postWithToken( 'csrf', params, apiOptions )
		.done( function ( saveResult ) {
			this.onSaveComplete( savedSections, saveResult );

			if ( this.targetTitleChanged() ) {
				mw.log( '[CX] Target title saved.' );
			}
			this.savedTargetTitle = params.title;

			if ( params.sourcecategories ) {
				this.sourceCategoriesSaved = true;
			}

			if ( numOfChangedCategories ) {
				this.targetCategoriesChanged -= numOfChangedCategories;
			}

			// Remove saved sections from the queue
			savedSections.forEach( function ( sectionNumber ) {
				this.translationTracker.removeSectionFromSaveQueue( sectionNumber );
			}, this );

			// Reset fail counter.
			if ( this.failCounter > 0 ) {
				this.failCounter = 0;
				mw.log( '[CX] Retry successful. Save succeeded.' );
			}

			this.emit( 'saveSuccess' );
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
				this.translationView.showMessage( 'error', mw.msg( 'cx-save-draft-error' ) );
				// This will allow any change to trigger save again
				this.failCounter = 0;
				mw.log.error( '[CX] Saving failed repeatedly. Stopping retries.' );
			} else {
				// Delay in seconds, failCounter is [1,5]
				delay = 60 * this.failCounter;
				// Schedule retry.
				this.retryTimer = setTimeout( this.processSaveQueue.bind( this, true ), delay * 1000 );
				mw.log( '[CX] Retry scheduled in ' + delay / 60 + ' minutes.' );
			}

			this.emit( 'saveFailure' );
		}.bind( this ) ).always( function () {
			this.saveRequest = null;
		}.bind( this ) );
};

/**
 * Find out if there is any "dirty" section translation units.
 * Inform about sections not saved to the user.
 *
 * @return {string|undefined} The message to be shown to the user
 */
mw.cx.TranslationController.prototype.onPageUnload = function () {
	if ( this.hasUnsavedChanges() ) {
		// Immediately start processing the save queue.
		this.processSaveQueue();
		return mw.msg( 'cx-warning-unsaved-translation' );
	}
};

mw.cx.TranslationController.prototype.onSaveComplete = function ( savedSections, saveResult ) {
	var validation, validations, minutes = 0;

	if ( this.targetCategoriesChanged > 0 ) {
		mw.log( '[CX] Target categories saved.' );
	}

	validations = saveResult.cxsave.validations;

	savedSections.forEach( function ( sectionNumber ) {
		var section, sectionState = this.translationTracker.getSectionState( sectionNumber );

		if ( this.shouldUnmodifiedMTBeSavedForSection( sectionState ) ) {
			sectionState.markUnmodifiedMTSaved();
		}
		if ( !this.isSourceSavedForSection( sectionState ) ) {
			sectionState.markSourceSaved();
		}

		validation = validations[ sectionNumber ];

		if ( !validation ) {
			return;
		}
		section = this.veTarget.getTargetSectionNodeFromSectionNumber( sectionNumber );

		if ( section instanceof ve.dm.CXSectionNode ) {
			// Annotate the section with errors, if any.
			this.onSaveValidation( section, validation );
		}

		mw.log( '[CX] Section ' + sectionNumber + ' saved.' );
	}, this );

	// Show saved status with a time after last save.
	clearInterval( this.saveStatusTimer );
	this.translationView.setStatusMessage( mw.msg( 'cx-save-draft-save-success', 0 ) );

	this.saveStatusTimer = setInterval( function () {
		if ( this.failCounter > 0 ) {
			// Don't overwrite error message of failure with this timer controlled message.
			return;
		}

		minutes++;
		this.translationView.setStatusMessage(
			mw.msg( 'cx-save-draft-save-success', mw.language.convertNumber( minutes ) )
		);
	}.bind( this ), 60 * 1000 );
};

mw.cx.TranslationController.prototype.onSaveFailure = function ( errorCode, details ) {
	if ( errorCode === 'assertuserfailed' ) {
		this.showLoginDialog();
	}

	if ( details && details.exception instanceof Error ) {
		details.exception = details.exception.toString();
		details.errorCode = errorCode;
	}

	this.translationView.setStatusMessage( mw.msg( 'cx-save-draft-error' ) );
};

mw.cx.TranslationController.prototype.showLoginDialog = function () {
	mw.loader.using( 'mw.cx.ui.LoginDialog' ).then( function () {
		var windowManager = OO.ui.getWindowManager();

		if ( !this.loginDialog ) {
			this.loginDialog = new mw.cx.ui.LoginDialog();
			windowManager.addWindows( [ this.loginDialog ] );
		}

		this.failCounter = 0;
		clearTimeout( this.retryTimer );

		windowManager
			.openWindow( this.loginDialog.constructor.static.name )
			.closed.then( this.processSaveQueue.bind( this ) );
	}.bind( this ) );
};

/**
 * Validation result handler
 *
 * @param {ve.dm.CXSectionNode} section
 * @param {Object[]} validations
 */
mw.cx.TranslationController.prototype.onSaveValidation = function ( section, validations ) {
	var id, sectionState, validation, message, error, counter = 1, results = [],
		helpLink = 'https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Abuse_filter';

	// Resolve old issues, so that we don't get duplicates when adding issues to this section
	section.resolveTranslationIssues( 'validation' );

	sectionState = this.translationTracker.getSectionState( section.getSectionNumber() );

	// If there are no validations, don't proceed
	if ( !validations || validations.length === 0 ) {
		sectionState.hasSaveError = false;
		return;
	}

	sectionState.hasSaveError = true;

	for ( id in validations ) {
		validation = validations[ id ];

		// To EventLogging
		mw.hook( 'mw.cx.translation.abusefilter' ).fire(
			this.translation.getSourceLanguage(),
			this.translation.getTargetLanguage(),
			this.translation.getSourceTitle(),
			this.translation.getTargetTitle(),
			'saving',
			Object.keys( validation ).sort().join( ',' ), // A filter may have several actions
			id
		);

		message = validation.warn && validation.warn.messageHtml;
		error = validation.disallow;

		if ( message ) {
			results.push( {
				name: 'validation' + counter++,
				message: message,
				messageInfo: {
					title: mw.msg( 'cx-tools-linter-abuse-filter' ),
					type: error ? 'error' : 'warning',
					help: helpLink
				}
			} );
		} else if ( error ) {
			// If "Trigger these actions after giving the user a warning" is not checked
			// for particular abuse filter rule, we will not have `validation.warn.messageHtml`.
			// But if "Prevent the user from performing the action in question" is checked,
			// error should be displayed, even if there is no message.
			results.push( {
				name: 'validation' + counter++,
				message: mw.msg( 'cx-tools-linter-abuse-filter' ),
				messageInfo: {
					type: 'error',
					help: helpLink
				}
			} );
		}
	}

	if ( results.length > 0 ) {
		section.addTranslationIssues( results );
	}
};

/**
 * Get the deflated content to save from save queue.
 *
 * @param {number[]} saveQueue
 * @return {string}
 */
mw.cx.TranslationController.prototype.getContentToSave = function ( saveQueue ) {
	var records = [];

	saveQueue.forEach( function ( sectionNumber ) {
		this.getSectionRecords( sectionNumber ).forEach( function ( data ) {
			records.push( data );
		} );
	}, this );

	return mw.deflate( JSON.stringify( records ) );
};

/**
 * Get the records for saving the translation unit.
 *
 * @param {number} sectionNumber
 * @return {Object[]} Objects to save
 */
mw.cx.TranslationController.prototype.getSectionRecords = function ( sectionNumber ) {
	var validate, content, translationSource, sectionState, records = [];

	sectionState = this.translationTracker.getSectionState( sectionNumber );

	if ( !sectionState ) {
		throw new Error( 'Attempting to save section ' + sectionNumber + ' having no section state.' );
	}

	// Because validation is computationally heavy and slow operation (server side),
	// do not perform validation on every request, unless there is a known validation
	// issue that should go away immediately when fixed by the user. Validation means
	// checking whether the content matches AbuseFilter rules defined in the target wiki.
	validate = sectionState.hasSaveError || sectionState.saveCount % 5 === 0 || !sectionState.isModified();

	translationSource = sectionState.getCurrentMTProvider();
	if ( sectionState.isModified() || translationSource === 'source' || translationSource === 'scratch' ) {
		content = sectionState.getUserTranslation().html;
		if ( content ) {
			records.push( {
				content: content,
				sectionId: sectionNumber,
				validate: validate,
				origin: 'user'
			} );
			mw.log( '[CX] Saving user translation for section ' + sectionNumber +
			' [validate:' + validate + ']' );
		} else {
			throw new Error( 'Attempting to save section ' + sectionNumber + ' with blank content.' );
		}
	}

	if ( this.shouldUnmodifiedMTBeSavedForSection( sectionState ) ) {
		content = sectionState.getUnmodifiedMT().html;
		if ( content ) {
			records.push( {
				content: content,
				sectionId: sectionNumber,
				validate: false,
				origin: translationSource
			} );
			mw.log( '[CX] Saving unmodified MT for section ' + sectionNumber +
			' [validate:' + validate + ']' );
		} else {
			throw new Error( 'Attempting to save section ' + sectionNumber + ' with blank content.' );
		}
	}

	// Save source sections only once because they do not change.
	if ( !this.isSourceSavedForSection( sectionState ) ) {
		records.push( {
			content: sectionState.getSource().html,
			sectionId: sectionNumber,
			// It makes no sense to validate source sections.
			validate: false,
			origin: 'source'
		} );
		mw.log( '[CX] Saving source content of section ' + sectionNumber );
	}

	sectionState.saveCount++;

	return records;
};

/**
 * @param {mw.cx.dm.SectionState} sectionState
 * @return {boolean} True if unmodified MT should be saved for section.
 */
mw.cx.TranslationController.prototype.shouldUnmodifiedMTBeSavedForSection = function ( sectionState ) {
	return !sectionState.getUnmodifiedMT().saved && sectionState.getCurrentMTProvider() !== 'source';
};

/**
 * @param {mw.cx.dm.SectionState} sectionState
 * @return {boolean} True if source is saved for section.
 */
mw.cx.TranslationController.prototype.isSourceSavedForSection = function ( sectionState ) {
	return sectionState.isSourceSaved();
};

/**
 * Publish the translation
 */
mw.cx.TranslationController.prototype.publish = function () {
	var numOfHighMTSections = this.translationTracker.sectionsWithMTAbuse().length,
		mtAbuseMsg = this.getMTAbuseMsg( numOfHighMTSections );

	mw.log( '[CX] Publishing translation...' );

	// Scroll to the top of the page, so success/fail messages become visible
	$( 'html, body' ).animate( { scrollTop: 0 }, 'fast' );

	if ( mtAbuseMsg instanceof mw.Message ) {
		this.translationView.showViewIssuesMessage(
			mw.msg( 'cx-mt-abuse-publish-error' ), 'mt-abuse-publish', 'error'
		);
		this.showMTAbusePublishError( mtAbuseMsg.toString() );
		this.onPublishCancel();
		this.mtAbusePublishingStopped = true;
		return;
	}

	// Disable categories to prevent editing
	this.translationView.categoryUI.disableCategoryUI( true );

	if ( !this.hasUnsavedChanges() ) {
		this.publishArticle( numOfHighMTSections );
		return;
	}

	// At this point, there is certainly a scheduled saving about to happen.
	// We wait for successful saving, before proceeding with publishing.
	this.once( 'saveSuccess', this.saveBeforePublishingSucceeded.bind( this, numOfHighMTSections ) );
	this.once( 'saveFailure', this.saveBeforePublishingFailed.bind( this ) );
};

mw.cx.TranslationController.prototype.showMTAbusePublishError = function ( title ) {
	this.translation.resolveIssueByName( 'mt-abuse-publish' );
	this.translation.addUnattachedIssues( [
		new mw.cx.dm.TranslationIssue(
			'mt-abuse-publish', // Issue name
			mw.msg( 'cx-mt-abuse-error-text' ), // message body
			{
				title: title,
				type: 'error',
				help: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Help:Content_translation/Translating/Translation_quality'
			}
		)
	] );
};

/**
 * @param {number} numOfHighMTSections
 */
mw.cx.TranslationController.prototype.publishArticle = function ( numOfHighMTSections ) {
	var shouldAddHighMTCategory = numOfHighMTSections >= ( this.hasDeletedTranslations ? 1 : 10 );

	// Clear the status message
	this.translationView.setStatusMessage( '' );
	this.targetArticle.publish( this.translationHasIssues( [ 'title' ] ), shouldAddHighMTCategory );
};

/**
 * @param {Array} ignore Array of IDs of nodes which should be excluded from issue checking.
 * @return {boolean} True if translation has any non-suppressed issue.
 */
mw.cx.TranslationController.prototype.translationHasIssues = function ( ignore ) {
	return this.translation.getTranslationIssues().length > 0 ||
		this.translationTracker.getNodesWithIssues().some( function ( node ) {
			return ignore.indexOf( node ) === -1;
		} );
};

mw.cx.TranslationController.prototype.saveBeforePublishingSucceeded = function ( numOfHighMTSections ) {
	this.publishArticle( numOfHighMTSections );
	this.off( 'saveFailure', this.saveBeforePublishingFailed.bind( this ) );
};

mw.cx.TranslationController.prototype.saveBeforePublishingFailed = function () {
	this.onPublishCancel();
	this.off( 'saveSuccess', this.saveBeforePublishingSucceeded.bind( this ) );
};

mw.cx.TranslationController.prototype.enableEditing = function () {
	this.translationView.categoryUI.disableCategoryUI( false );
	clearInterval( this.saveStatusTimer );
};

/**
 * Publish cancel handler
 */
mw.cx.TranslationController.prototype.onPublishCancel = function () {
	mw.log( '[CX] Publishing canceled' );

	this.veTarget.onPublishCancel();
	this.enableEditing();
};

/**
 * Publish success handler
 */
mw.cx.TranslationController.prototype.onPublishSuccess = function () {
	mw.log( '[CX] Publishing finished successfully' );

	this.veTarget.onPublishSuccess( this.targetArticle.getTargetURL() );
	this.enableEditing();

	// Event logging and Wikibase linking
	mw.hook( 'mw.cx.translation.published' ).fire(
		this.translation.getSourceLanguage(),
		this.translation.getTargetLanguage(),
		this.translation.getSourceTitle(),
		this.translation.getTargetTitle()
	);
};

/**
 * Publish error handler
 *
 * @param {OO.ui.Error} error
 */
mw.cx.TranslationController.prototype.onPublishFailure = function ( error ) {
	this.isFailedUnrecoverably = !error.isRecoverable();
	this.veTarget.onPublishFailure( error.getMessageText() );
	this.enableEditing();
};

/**
 * Target categories change handler.
 */
mw.cx.TranslationController.prototype.onTargetCategoriesChange = function () {
	this.targetCategoriesChanged++;
	this.saveScheduler();
};

/**
 * Target title change handler
 */
mw.cx.TranslationController.prototype.onTargetTitleChange = function () {
	var currentTitleObj, newTitleObj,
		currentTitle = this.translation.getTargetTitle(),
		newTitle = this.translationView.targetColumn.getTitle();

	if ( currentTitle === newTitle ) {
		// Nothing really changed.
		return;
	}

	this.translation.setTargetTitle( newTitle );
	this.saveScheduler();

	currentTitleObj = mw.Title.newFromUserInput( currentTitle );
	newTitleObj = mw.Title.newFromUserInput( newTitle );

	if (
		currentTitleObj && newTitleObj &&
		currentTitleObj.getNamespaceId() !== newTitleObj.getNamespaceId()
	) {
		this.veTarget.emitNamespaceChange( newTitleObj.getNamespaceId() );
	}
};

mw.cx.TranslationController.prototype.onSurfaceReady = function () {
	var api = new mw.Api();

	this.translationTracker.init( this.translation );

	api.get( {
		action: 'query',
		meta: 'cxdeletedtranslations',
		dtafter: this.getTimestamp()
	} ).then( function ( result ) {
		this.hasDeletedTranslations = OO.getProp( result, 'query', 'cxdeletedtranslations', 'deleted' ) > 0;
	}.bind( this ) );
};

/**
 * Get ISO formatted Date string for current date minus 30 days, signifying last month period.
 *
 * @return {string}
 */
mw.cx.TranslationController.prototype.getTimestamp = function () {
	var date = new Date();
	date.setDate( date.getDate() - 30 );

	return date.toISOString();
};

/**
 * Check if the translation has too much MT usage and get appropriate message.
 *
 * @param {number} numOfHighMTSections
 * @return {mw.Message|null}
 */
mw.cx.TranslationController.prototype.getMTAbuseMsg = function ( numOfHighMTSections ) {
	var mtPercentage, threshold,
		highMTSectionsThreshold = this.hasDeletedTranslations ? 10 : 50;

	if ( numOfHighMTSections >= highMTSectionsThreshold ) {
		return mw.message( 'cx-mt-abuse-error-sections' );
	}

	mtPercentage = this.translationTracker.getUnmodifiedMTPercentageInTranslation();
	mw.log( 'Unmodified MT percentage: ' + mtPercentage );
	threshold = mw.config.get( 'wgContentTranslationUnmodifiedMTThresholdForPublish' );

	if ( mtPercentage > parseFloat( threshold ) ) {
		return mw.message(
			'cx-mt-abuse-error-title',
			mw.language.convertNumber( Math.round( mtPercentage ) )
		);
	}

	return null;
};

/**
 * Triggered when all issues are resolved on node with a given ID.
 *
 * @param {number|string} id ID of a node which issues are resolved
 */
mw.cx.TranslationController.prototype.onIssuesResolved = function ( id ) {
	this.translationTracker.setTranslationIssues( id, false );
	this.translationView.onIssuesResolved( this.translationTracker.getNodesWithIssues() );
};

/**
 * Triggered when node with given ID has issues.
 *
 * @param {number|string} id ID of a node with issues
 * @param {boolean} hasErrors True if any of the issues is error. False if all issues are warnings
 */
mw.cx.TranslationController.prototype.onTranslationIssues = function ( id, hasErrors ) {
	this.translationTracker.setTranslationIssues( id, true );
	this.translationView.onTranslationIssues( this.translationTracker.getNodesWithIssues(), hasErrors );
};

/* Registration */

ve.ui.commandHelpRegistry.register( 'other', 'autoSave', {
	shortcuts: [ {
		mac: 'cmd+s',
		pc: 'ctrl+s'
	} ],
	label: OO.ui.deferMsg( 'cx-save-draft-shortcut-label' )
} );
