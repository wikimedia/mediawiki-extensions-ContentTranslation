/**
 * Target Article for CX - Validation, Publishing, Success and Error handling.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @param {mw.cx.dm.Translation} translation
 * @param {ve.init.mw.CXTarget} veTarget
 * @param {Object} config Translation configuration
 */
mw.cx.TargetArticle = function MWCXTargetArticle( translation, veTarget, config ) {
	this.translation = translation;
	this.veTarget = veTarget;
	this.config = config;
	this.siteMapper = config.siteMapper;
	this.sourceTitle = config.sourceTitle;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;

	// Mixin constructors
	OO.EventEmitter.call( this );

	// Properties
	this.captcha = null;
	this.captchaDialog = null;
};

/* Inheritance */

OO.mixinClass( mw.cx.TargetArticle, OO.EventEmitter );

/**
 * Publish the translated content to target wiki.
 */
mw.cx.TargetArticle.prototype.publish = function () {
	var apiParams = {
		assert: 'user',
		action: 'cxpublish',
		from: this.sourceLanguage,
		to: this.targetLanguage,
		sourcetitle: this.sourceTitle,
		title: this.getTargetTitle(),
		html: this.getContent( true ),
		categories: this.translation.getTargetCategories(),
		wpCaptchaId: this.captcha && this.captcha.id,
		wpCaptchaWord: this.captcha && this.captcha.input.getValue(),
		cxversion: 2
	};

	// Check for title conflicts
	this.checkTargetTitle( this.getTargetTitle() ).then( function () {
		return new mw.Api().postWithToken( 'csrf', apiParams, {
			// A bigger timeout since publishing after converting html to wikitext
			// parsoid is not a fast operation.
			timeout: 100 * 1000 // in milliseconds
		} ).then( this.publishSuccess.bind( this ), this.publishFail.bind( this ) );
	}.bind( this ), function () {
		this.emit( 'publishCancel' );
	}.bind( this ) );
};

/**
 * Publish success handler
 *
 * @param {Object} response Response object from the publishing api
 * @param {Object} jqXHR
 * @return {null|jQuery.Promise}
 */
mw.cx.TargetArticle.prototype.publishSuccess = function ( response, jqXHR ) {
	var publishResult = response.cxpublish;
	if ( publishResult.result === 'success' ) {
		return this.publishComplete();
	}

	if ( publishResult.edit.captcha ) {
		// If there is a captcha challenge, get the solution and retry.
		return this.loadCaptchaDialog().then(
			this.showErrorCaptcha.bind( this, publishResult.edit.captcha )
		);
	}

	// Any other failure
	return this.publishFail( '', publishResult, publishResult, jqXHR );
};

/**
 * @fires publishSuccess
 */
mw.cx.TargetArticle.prototype.publishComplete = function () {
	this.captcha = null;
	this.emit( 'publishSuccess' );
};

/**
 * Publish failure handler
 *
 * The 'messageOrFailObjOrData' parameter could be a string explaining the error,
 * or an object with textStatus, exception and jqXHR keys (but jqXHR can be missing),
 * or equal to data. If data is present, jqXHR is also present. See T176704.
 *
 * @param {string} errorCode
 * @param {string|Object} messageOrFailObjOrData Error message (string), or object with textStatus,
 *   exception and (optionally) jqXHR, or equal to data
 * @param {Object} [data] Data returned by api.php
 * @param {Object} [jqXHR] jQuery XHR object
 */
mw.cx.TargetArticle.prototype.publishFail = function ( errorCode, messageOrFailObjOrData, data, jqXHR ) {
	var editError, editResult;

	if ( !data ) {
		if ( errorCode === 'ok-but-empty' ) {
			this.showPublishError( mw.msg( 'cx-publish-error-empty' ) );
			return;
		}

		this.showErrorException( messageOrFailObjOrData );
		return;
	}

	editResult = data.edit;
	if ( editResult ) {
		// Handle spam blacklist error (either from core or from Extension:SpamBlacklist)
		// {"result":"error","edit":{"spamblacklist":"facebook.com","result":"Failure"}}
		if ( editResult.spamblacklist ) {
			this.showPublishError(
				mw.msg( 'cx-publish-error-spam-blacklist', editResult.spamblacklist ),
				JSON.stringify( editResult )
			);
			return;
		}
		// Handle abusefilter errors.
		if ( editResult.code && editResult.code.indexOf( 'abusefilter' ) === 0 ) {
			this.showPublishError(
				mw.msg( 'cx-publish-error-abuse-filter', editResult.info ),
				editResult.info
			);
			return;
		}
	}

	editError = data.error;
	if ( editError && editError.code === 'invalidtitle' ) {
		this.showPublishError(
			mw.message( 'title-invalid-characters', this.getTargetTitle() ).text(),
			JSON.stringify( editError )
		);
		return;
	} else if ( editError && editError.code === 'badtoken' || editError.code === 'assertuserfailed' ) {
		this.showUnrecoverablePublishError(
			mw.msg( 'cx-lost-session-publish' ),
			JSON.stringify( editError )
		);
		return;
	} else if ( editError && editError.code === 'titleblacklist-forbidden' ) {
		this.showPublishError( mw.msg( 'cx-publish-error-title-blacklist' ), JSON.stringify( editError ) );
		return;
	} else if ( editError && editError.code === 'readonly' ) {
		this.showUnrecoverablePublishError( mw.msg( 'cx-publish-error-readonly' ), editError.readonlyreason );
		return;
	}

	// Handle captcha
	// Captcha "errors" usually aren't errors. We simply don't know about them ahead of time,
	// so we save once, then (if required) we get an error with a captcha back and try again after
	// the user solved the captcha.
	if ( editResult && editResult.captcha && (
		editResult.captcha.type === 'image' ||
		editResult.captcha.type === 'simple' ||
		editResult.captcha.type === 'math' ||
		editResult.captcha.type === 'question'
	) ) {
		this.loadCaptchaDialog().then( this.showErrorCaptcha.bind( this, editResult ) );
		return;
	}

	// Handle (other) unknown and/or unrecoverable errors
	this.showErrorUnknown( editResult, data, jqXHR );
};

/**
 * Load captcha dialog dependency dynamically, since captcha dialog is rarely shown.
 *
 * @return {jQuery}
 */
mw.cx.TargetArticle.prototype.loadCaptchaDialog = function () {
	return mw.loader.using( 'mw.cx.ui.CaptchaDialog' ).then( this.setupCaptchaDialog.bind( this ) );
};

mw.cx.TargetArticle.prototype.setupCaptchaDialog = function () {
	if ( this.captchaDialog ) {
		// Dialog is already set up
		return;
	}

	this.captchaDialog = new mw.cx.ui.CaptchaDialog();
	this.captchaDialog.connect( this, {
		publish: 'publish',
		cancel: 'onCaptchaCancel'
	} );
	OO.ui.getWindowManager().addWindows( [ this.captchaDialog ] );
};

/**
 * Handle captcha challenge error
 *
 * @param {Object} apiResult publishing API result
 * @fires publishErrorCaptcha
 */
mw.cx.TargetArticle.prototype.showErrorCaptcha = function ( apiResult ) {
	if ( this.captcha ) {
		this.captchaDialog.showErrors( mw.msg( 'cx-captcha-dialog-error' ) );
	}

	this.captcha = {
		input: this.captchaDialog.input,
		id: apiResult.id
	};

	if ( apiResult.type === 'image' ) {
		// FancyCaptcha
		// Based on FancyCaptcha::getFormInformation() (https://git.io/v6mml) and
		// ext.confirmEdit.fancyCaptcha.js in the ConfirmEdit extension.
		mw.loader.load( 'ext.confirmEdit.fancyCaptcha' );
		this.captchaDialog.setFancyCaptcha( apiResult.url );
	} else if ( apiResult.type === 'simple' || apiResult.type === 'math' ) {
		// SimpleCaptcha and MathCaptcha
		this.captchaDialog.setCaptcha( 'captcha-create', apiResult.question, apiResult.mime );
	} else if ( apiResult.type === 'question' ) {
		// QuestyCaptcha
		this.captchaDialog.setCaptcha( 'questycaptcha-create', apiResult.question, apiResult.mime );
	} else {
		mw.log.error( '[CX] Unsupported captcha type: ' + apiResult.type );
		return;
	}

	OO.ui.getWindowManager().openWindow( 'cxCaptcha' );
};

/**
 * @fires 'captchaCancel'
 */
mw.cx.TargetArticle.prototype.onCaptchaCancel = function () {
	this.captcha = null;
	this.emit( 'captchaCancel' );
};

/**
 * Show an error based on an exception+textStatus object
 *
 * @param {Object} failObj Object from the rejection params of mw.Api, with exception and textStatus
 */
mw.cx.TargetArticle.prototype.showErrorException = function ( failObj ) {
	var errorMsg = failObj.exception || failObj.textStatus;

	if ( errorMsg instanceof Error ) {
		errorMsg = errorMsg.toString();
	}

	if ( errorMsg ) {
		this.showUnrecoverablePublishError( errorMsg, errorMsg );
	} else {
		this.showErrorUnknown( null, null, failObj.jqXHR );
	}
};

/**
 * Handle unknown publish error
 *
 * @method
 * @param {Object} editResult
 * @param {Object|null} data API response data
 * @param {Object} jqXHR
 */
mw.cx.TargetArticle.prototype.showErrorUnknown = function ( editResult, data, jqXHR ) {
	var errorDetails,
		errorMsg = ( editResult && editResult.info ) || ( data && data.error && data.error.info ),
		errorCode = ( editResult && editResult.code ) || ( data && data.error && data.error.code ),
		unknown = 'Unknown error';

	if ( jqXHR && jqXHR.status !== 200 ) {
		unknown += ', HTTP status ' + data.xhr.status;
	}

	errorDetails = errorMsg || errorCode || unknown;
	this.showUnrecoverablePublishError(
		mw.msg( 'cx-publish-error-unknown', errorDetails ),
		errorDetails
	);
};

/**
 * Show publish process error message
 *
 * @method
 * @param {string|jQuery|Node[]} msg Message content (string of HTML, jQuery object or array of
 *  Node objects)
 * @param {string} [errorLog]
 * @param {boolean} [allowReapply=true] Whether or not to allow the user to reapply.
 *  Reset when swapping panels. Assumed to be true unless explicitly set to false.
 *
 * @fires 'publishError'
 */
mw.cx.TargetArticle.prototype.showPublishError = function ( msg, errorLog, allowReapply ) {
	this.emit( 'publishError', new OO.ui.Error( msg, { recoverable: allowReapply } ) );

	if ( !errorLog ) {
		return;
	}

	mw.log.error( '[CX] Publishing failed ' + errorLog );

	// Event logging
	mw.hook( 'mw.cx.translation.publish.error' ).fire(
		this.sourceLanguage,
		this.targetLanguage,
		this.sourceTitle,
		this.getTargetTitle(),
		errorLog
	);
};

/**
 * Show publish error which doesn't allow reapply.
 *
 * @param {string|jQuery|Node[]} msg Message content (string of HTML, jQuery object or array of
 *  Node objects)
 * @param {string} [errorLog]
 */
mw.cx.TargetArticle.prototype.showUnrecoverablePublishError = function ( msg, errorLog ) {
	this.showPublishError( msg, errorLog, false );
};

/**
 * Get content for publishing
 *
 * @param {boolean} deflate Whether the content should be deflated
 * @return {string} Content for publishing, may be deflated
 */
mw.cx.TargetArticle.prototype.getContent = function ( deflate ) {
	var html,
		doc = this.veTarget.getSurface().getDom();

	Array.prototype.forEach.call( doc.body.querySelectorAll( 'article, section, [data-segmentid]' ), function ( segment ) {
		var parent = segment.parentNode;
		// move all children out of the element
		while ( segment.firstChild ) {
			parent.insertBefore( segment.firstChild, segment );
		}
		segment.remove();
	} );

	html = this.veTarget.getHtml( doc );

	return deflate ? EasyDeflate.deflate( html ) : html;
};

/**
 * Checks to see if there is already a published article with the title.
 * If exists ask the translator a resolution for the conflict.
 *
 * @param {string} title The title to check
 * @return {jQuery.Promise}
 */
mw.cx.TargetArticle.prototype.checkTargetTitle = function ( title ) {
	// CAPTCHA check may occur as a response to the request to publish the translation.
	// If that happens, we can and should skip these checks to avoid showing
	// "Publish anyway" dialog again if the target page already exists.
	if ( this.captcha ) {
		return $.Deferred().resolve().promise();
	}

	return ve.init.platform.linkCache.get( title ).then( function ( result ) {
		if ( result.missing ) {
			return;
		}

		return this.showDialog();
	}.bind( this ) );
};

/**
 * Display the dialog which asks the user to publish by overwriting an existing page.
 *
 * @return {jQuery.Promise}
 */
mw.cx.TargetArticle.prototype.showDialog = function () {
	return OO.ui.getWindowManager().openWindow( 'message', {
		title: mw.msg( 'cx-publishing-dialog-title' ),
		message: mw.msg( 'cx-publishing-dialog-sub-title' ),
		actions: [
			{ action: 'publish', label: mw.msg( 'cx-publishing-dialog-publish-anyway-button' ), flags: 'primary' },
			{ action: 'cancel', label: mw.msg( 'cx-draft-cancel-button-label' ), flags: 'safe' }
		]
	} ).closed.then( function ( data ) {
		if ( data && data.action === 'cancel' ) {
			return $.Deferred().reject();
		}
	} );
};

/**
 * Get current target title from translation data model.
 * Not the translation title can be changed by translator at any point of translation.
 * @return {string} target title
 */
mw.cx.TargetArticle.prototype.getTargetTitle = function () {
	return this.translation.getTargetTitle();
};

mw.cx.TargetArticle.prototype.getTargetURL = function () {
	return this.siteMapper.getPageUrl( this.targetLanguage, this.getTargetTitle() );
};
