/**
 * Target Article for CX - Validation, Publishing, Success and Error handling.
 *
 * @param {mw.cx.dm.Translation} translation
 * @param {ve.init.mw.CXTarget} veTarget
 * @param {object} config Translation configuration
 */
mw.cx.TargetArticle = function MWCXTargetArticle( translation, veTarget, config ) {
	this.translation = translation;
	this.veTarget = veTarget;
	this.config = config;
	this.siteMapper = config.siteMapper;
	this.sourceTitle = config.sourceTitle;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;
	this.sourceRevision = config.sourceRevision;

	// Mixin constructors
	OO.EventEmitter.call( this );

	// Properties
	this.captcha = null;
};

/* Inheritance */

OO.mixinClass( mw.cx.TargetArticle, OO.EventEmitter );

/**
 * Publish the translated content to target wiki.
 */
mw.cx.TargetArticle.prototype.publish = function () {
	var apiParams;

	apiParams = $.extend( {}, this.captcha || {}, {
		assert: 'user',
		action: 'cxpublish',
		from: this.sourceLanguage,
		to: this.targetLanguage,
		sourcetitle: this.sourceTitle,
		html: this.getContent( true ),
		categories: this.translation.getTargetCategories()
	} );

	// Check for title conflicts
	this.checkTargetTitle( this.getTargetTitle() ).then( function ( title ) {
		apiParams.title = title;
		// Post the content to publish.
		return new mw.Api().postWithToken( 'csrf', apiParams, {
			// A bigger timeout since publishing after converting html to wikitext
			// parsoid is not a fast operation.
			timeout: 100 * 1000 // in milliseconds
		} ).then( this.publishSuccess.bind( this ), this.publishFail.bind( this ) );
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
		return this.showErrorCaptcha( publishResult.edit.captcha );
	}

	// Any other failure
	return this.publishFail( '', publishResult, publishResult, jqXHR );
};

/**
 * @fires publish
 */
mw.cx.TargetArticle.prototype.publishComplete = function () {
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

	// Handle token errors
	editError = data.error;
	if ( editError && editError.code === 'badtoken' || editError.code === 'assertuserfailed' ) {
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
	// TODO: ConfirmEdit API is horrible, there is no reliable way to know whether it is a "math",
	// "question" or "fancy" type of captcha. They all expose differently named properties in the
	// API for different things in the UI. At this point we only support the SimpleCaptcha and FancyCaptcha
	// which we very intuitively detect by the presence of a "url" property.
	if ( editResult && editResult.captcha && (
		editResult.captcha.url ||
		editResult.captcha.type === 'simple' ||
		editResult.captcha.type === 'math' ||
		editResult.captcha.type === 'question'
	) ) {
		this.showErrorCaptcha( editResult );
		return;
	}

	// Handle (other) unknown and/or unrecoverable errors
	this.showErrorUnknown( editResult, data, jqXHR );
};

/**
 * Handle captcha challenge error
 *
 * @param {Object} apiResult publishing api result
 * @fires publishErrorCaptcha
 */
mw.cx.TargetArticle.prototype.showErrorCaptcha = function ( apiResult ) {
	var $captchaDiv = $( '<div>' ),
		$captchaParagraph = $( '<p>' );

	// TODO Not tested
	this.captcha = {
		input: new OO.ui.TextInputWidget(),
		id: apiResult.captcha.id
	};
	$captchaDiv.append( $captchaParagraph );
	$captchaParagraph.append(
		$( '<strong>' ).text( mw.msg( 'captcha-label' ) ),
		document.createTextNode( mw.msg( 'colon-separator' ) )
	);
	if ( apiResult.captcha.url ) {
		// FancyCaptcha
		// Based on FancyCaptcha::getFormInformation() (https://git.io/v6mml) and
		// ext.confirmEdit.fancyCaptcha.js in the ConfirmEdit extension.
		mw.loader.load( 'ext.confirmEdit.fancyCaptcha' );
		$captchaDiv.addClass( 'fancycaptcha-captcha-container' );
		$captchaParagraph.append(
			$( $.parseHTML( mw.message( 'fancycaptcha-edit' ).parse() ) )
				.filter( 'a' ).attr( 'target', '_blank' ).end()
		);
		$captchaDiv.append(
			$( '<img>' ).attr( 'src', apiResult.captcha.url ).addClass( 'fancycaptcha-image' ),
			' ',
			$( '<a>' ).addClass( 'fancycaptcha-reload' ).text( mw.msg( 'fancycaptcha-reload-text' ) )
		);
	} else if ( apiResult.captcha.type === 'simple' || apiResult.captcha.type === 'math' ) {
		// SimpleCaptcha and MathCaptcha
		$captchaParagraph.append(
			mw.message( 'captcha-edit' ).parse(),
			'<br>',
			document.createTextNode( apiResult.captcha.question )
		);
	} else if ( apiResult.captcha.type === 'question' ) {
		// QuestyCaptcha
		$captchaParagraph.append(
			mw.message( 'questycaptcha-edit' ).parse(),
			'<br>',
			apiResult.captcha.question
		);
	}

	$captchaDiv.append( this.captcha.input.$element );

	// ProcessDialog's error system isn't great for this yet.
	this.publishDialog.clearMessage( 'api-save-error' );
	this.publishDialog.showMessage( 'api-save-error', $captchaDiv );
	this.publishDialog.popPending();

	this.publishDialog.updateSize();

	this.captcha.input.focus();

	this.emit( 'publishErrorCaptcha' );
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
		this.translation.getTargetTitle(),
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
 * Increase the version number of a title starting with 1.
 *
 * @param {string} title The title to increase the version on.
 * @return {string}
 */
mw.cx.TargetArticle.prototype.increaseVersion = function ( title ) {
	var match, version;

	match = title.match( /^.*\((\d+)\)$/ );
	if ( match ) {
		version = +match[ 1 ] + 1;

		return title.replace( /\(\d+\)$/, '(' + version + ')' );
	}

	return title + ' (1)';
};

/**
 * Generate an alternate title in case of title collision.
 *
 * @param {string} title The title
 * @return {string}
 */
mw.cx.TargetArticle.prototype.getAlternateTitle = function ( title ) {
	var username, mwTitle;

	username = mw.user.getName();
	mwTitle = mw.Title.newFromText( title );

	if ( mwTitle && mwTitle.getNamespaceId() === 2 ) {
		return this.increaseVersion( title );
	} else {
		return 'User:' + username + '/' + title;
	}
};

/**
 * Checks to see if there is already a published article with the title.
 * If exists ask the translator a resolution for the conflict.
 *
 * @param {string} title The title to check
 * @return {jQuery.Promise}
 */
mw.cx.TargetArticle.prototype.checkTargetTitle = function ( title ) {
	return this.isTitleExistInLanguage( this.targetLanguage, title ).then( function ( titleExists ) {
		var $dialog;

		if ( !titleExists ) {
			return title;
		}

		// Show a dialog to decide what to do now
		this.veTarget.publishButton.$element.cxPublishingDialog();
		$dialog = this.translationView.publishButton.$element.data( 'cxPublishingDialog' );

		return $dialog.listen().then( function ( overwrite ) {
			if ( overwrite ) {
				return title;
			}

			return this.getAlternateTitle( title );
		}.bind( this ) );
	}.bind( this ) );
};

/**
 * Get current target title from translation data model.
 * Not the translation title can be changed by translator at any point of translation.
 * @return {string} target title
 */
mw.cx.TargetArticle.prototype.getTargetTitle = function () {
	return this.translation.getTargetTitle();
};

/**
 * Link the source and target articles in the Wikibase repo
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string} sourceTitle
 * @param {string} targetTitle
 * @return {jQuery.Promise}
 */
mw.cx.TargetArticle.prototype.linkAtWikibase = function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle ) {
	var title, sourceApi;

	// Link only pages in the main space
	title = new mw.Title( targetTitle );
	if ( title.getNamespaceId() !== 0 ) {
		return;
	}

	sourceApi = this.siteMapper.getApi( this.sourceLanguage );

	// TODO: Use action=query&meta=wikibase API
	// that expose siteid as per
	// https://gerrit.wikimedia.org/r/#/c/214517/
	return sourceApi.get( {
		action: 'query',
		meta: 'siteinfo',
		siprop: 'general'
	} ).then( function ( result ) {
		/* global wikibase  */
		var repoApi, targetWikiId, sourceWikiId, pageConnector;

		repoApi = new wikibase.api.RepoApi( wikibase.client.getMwApiForRepo() );
		targetWikiId = mw.config.get( 'wbCurrentSite' ).globalSiteId;
		sourceWikiId = result.query.general.wikiid;

		pageConnector = new wikibase.PageConnector(
			repoApi,
			targetWikiId,
			targetTitle,
			sourceWikiId,
			sourceTitle
		);

		return pageConnector.linkPages().then( function () {
			var api = new mw.Api();

			// Purge the newly-created page after adding the link,
			// so that they will appear as soon as possible without manual purging
			api.post( {
				action: 'purge',
				titles: targetTitle
			} );
		} );
	} );
};

/**
 * Checks to see if a title exists in the specified language wiki. Returns
 * the normalised title and resolves redirects.
 *
 * @param {string} language The language of the wiki to check
 * @param {string} title The title to look for
 * @return {jQuery.promise}
 * @return {Function} return.done If title exists
 * @return {string|false} return.done.title
 */
mw.cx.TargetArticle.prototype.isTitleExistInLanguage = function ( language, title ) {
	var api = this.siteMapper.getApi( language );

	// Short circuit empty titles
	if ( title === '' ) {
		return $.Deferred().resolve( false ).promise();
	}

	// Reject titles with pipe in the name, as it has special meaning in the api
	if ( /\|/.test( title ) ) {
		return $.Deferred().resolve( false ).promise();
	}

	return api.get( {
		formatversion: 2,
		action: 'query',
		titles: title,
		redirects: 1
	} ).then( function ( response ) {
		var page = response.query.pages[ 0 ];

		if ( page.missing || page.invalid ) {
			return false;
		}

		return page.title;
	} );
};

/**
 * Checks for an equivalent page in the target wiki based on source title.
 *
 * @param {string} sourceLanguage the source language
 * @param {string} targetLanguage the target language
 * @param {string} sourceTitle the title to check
 * @return {jQuery.promise}
 */
mw.cx.TargetArticle.prototype.isTitleConnectedInLanguages = function (
	sourceLanguage,
	targetLanguage,
	sourceTitle
) {
	var api = this.siteMapper.getApi( sourceLanguage );

	return api.get( {
		action: 'query',
		prop: 'langlinks',
		titles: sourceTitle,
		lllang: this.siteMapper.getWikiDomainCode( targetLanguage ),
		lllimit: 1,
		redirects: true
	} ).then( function ( response ) {
		var equivalentTargetPage = false;

		if ( response.query && response.query.pages ) {
			$.each( response.query.pages, function ( pageId, page ) {
				if ( page.langlinks ) {
					equivalentTargetPage = page.langlinks[ 0 ][ '*' ];
				}
			} );
		}

		return equivalentTargetPage;
	} );
};

/**
 * Check whether a page with the same title already exists
 * and show a warning if needed.
 */
mw.cx.TargetArticle.prototype.validateTargetTitle = function () {
	this.isTitleExistInLanguage( this.targetLanguage, this.getTargetTitle() )
		.then( function ( pageExist ) {
			// If page doesn't exist, it's OK
			if ( !pageExist ) {
				return;
			}

			mw.hook( 'mw.cx.warning' ).fire( mw.message(
				'cx-translation-target-page-exists',
				this.getTargetURL(),
				this.targetTitle
			) );
		}.bind( this ) );
};

mw.cx.TargetArticle.prototype.getTargetURL = function () {
	return this.siteMapper.getPageUrl( this.targetLanguage, this.getTargetTitle() );
};
