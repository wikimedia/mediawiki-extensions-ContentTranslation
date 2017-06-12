/**
 * Target Article for CX - Validation, Publishing, Success and Error handling.
 * @param {mw.cx.dm.Translation} translation
 * @param {mw.cx.ui.TranslationView} translationView
 * @param {object} config Translation configuration
 */
mw.cx.TargetArticle = function MWCXTargetArticle( translation, translationView, config ) {
	this.translation = translation;
	this.view = translationView;
	this.config = config;
	this.siteMapper = config.siteMapper;
	this.sourceTitle = config.sourceTitle;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;
	this.sourceRevision = config.sourceRevision;
	// Mixin constructors
	OO.EventEmitter.call( this );
	// Properties
	this.publishDeferred = null;
	this.captcha = null;
};

/* Inheritance */

OO.mixinClass( mw.cx.TargetArticle, OO.EventEmitter );

/**
 * Publish the translated content to target wiki.
 * @return {jQuery.Promise}
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
		categories: this.getCategories()
	} );

	this.publishDeferred = $.Deferred();
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

	return this.publishDeferred.promise();
};

/**
 * Publish success handler
 * @param  {Object} response Response object from the publishing api
 * @return {null|jQuery.Promise}
 */
mw.cx.TargetArticle.prototype.publishSuccess = function ( response ) {
	var publishResult = response.cxpublish;
	if ( publishResult.result === 'success' ) {
		return this.publishComplete();
	}

	if ( publishResult.edit.captcha ) {
		// If there is a captcha challenge, get the solution and retry.
		return this.showErrorCaptcha( publishResult.edit.captcha )
			.then( this.publish.bind( this ) );
	}

	// Any other failure
	return this.publishFail( publishResult );
};

/**
 * @fires publish
 */
mw.cx.TargetArticle.prototype.publishComplete = function () {
	this.publishDeferred.resolve( true );
	this.emit( 'publishSuccess' );
};

/**
 * Publish failure handler
 * @param {Object} jqXHR
 * @param {string} status Text status message
 * @param {Object|null} data API response data
 */
mw.cx.TargetArticle.prototype.publishFail = function ( jqXHR, status, data ) {
	var editError, editResult;

	// Handle empty response
	if ( !data ) {
		this.showErrorEmpty();
		return;
	}

	if ( data.exception instanceof Error ) {
		data.exception = data.exception.toString();
	}

	editResult = data.edit;
	if ( editResult ) {
		// Handle spam blacklist error (either from core or from Extension:SpamBlacklist)
		// {"result":"error","edit":{"spamblacklist":"facebook.com","result":"Failure"}}
		if ( editResult.spamblacklist ) {
			this.showErrorSpamBlacklist( data.edit );
			return;
		}
		// Handle abusefilter errors.
		if ( editResult.code && editResult.code.indexOf( 'abusefilter' ) === 0 ) {
			this.showErrorAbuseFilter( editResult.info, editResult.warning );
		}
	}

	// Handle token errors
	editError = data.error;
	if ( editError && editError.code === 'badtoken' || editError.code === 'assertuserfailed' ) {
		this.showErrorBadToken( null, true );
		return;
	} else if ( data.error && data.error.code === 'titleblacklist-forbidden' ) {
		this.showErrorTitleBlacklist();
		return;
	} else if ( data.error && data.error.code === 'readonly' ) {
		this.showErrorReadOnly( data.error.readonlyreason );
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
	this.showErrorUnknown( editResult, data );
	// TODO: Event logging the publishing error
};

/**
 * AbuseFilter error handler
 * @method
 * @fires publishErrorAbuseFilter
 */
mw.cx.TargetArticle.prototype.showErrorAbuseFilter = function () {
	this.showPublishError( mw.msg( 'cx-publishError-abusefilter' ), true );
	// Don't disable the publish button. If the action is not disallowed the user may save the
	// edit by pressing Publish again. The AbuseFilter API currently has no way to distinguish
	// between filter triggers that are and aren't disallowing the action.
	this.emit( 'publishErrorAbuseFilter' );
};

/**
 * Handle publish error with empty API response
 * @method
 * @fires publishErrorEmpty
 */
mw.cx.TargetArticle.prototype.showErrorEmpty = function () {
	this.showSaveError( mw.msg( 'cx-publisherror-empty', 'Empty server response' ), false /* prevents reapply */ );
	this.emit( 'publishErrorEmpty' );
};

/**
 * Handle title blacklist save error
 *
 * @method
 * @fires publishErrorTitleBlacklist
 */
mw.cx.TargetArticle.prototype.showErrorTitleBlacklist = function () {
	this.showPublishError( mw.msg( 'cx-publishError-titleblacklist' ) );
	this.emit( 'publishErrorTitleBlacklist' );
};

/**
 * Handle captcha challenge error
 *
 * @method
 * @param {Object} apiResult publishing api result
 * @fires publishErrorTitleBlacklist
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
 * Handle token fetch errors.
 *
 * @method
 * @param {boolean} [error=false] Whether there was an error trying to figure out who we're logged in as
 * @fires publishErrorBadToken
 */
mw.cx.TargetArticle.prototype.showErrorBadToken = function ( error ) {
	var $msg = $( document.createTextNode( mw.msg( 'cx-publisherror-badtoken' ) + ' ' ) );

	if ( error ) {
		this.emit( 'publishErrorBadToken', false );
		$msg = $msg.add( document.createTextNode( mw.msg( 'cx-publisherror-identify-trylogin' ) ) );
	}
	this.showSaveError( $msg );
	this.emit( 'publishErrorBadToken', error );
};

/**
 * Handle unknown publish error
 *
 * @method
 * @param {Object} editResult
 * @param {Object|null} data API response data
 * @fires saveErrorUnknown
 */
mw.cx.TargetArticle.prototype.saveErrorUnknown = function ( editResult, data ) {
	var errorMsg = ( editResult && editResult.info ) || ( data && data.error && data.error.info ),
		errorCode = ( editResult && editResult.code ) || ( data && data.error && data.error.code ),
		unknown = 'Unknown error';

	if ( data.xhr.status !== 200 ) {
		unknown += ', HTTP status ' + data.xhr.status;
	}

	this.showPublishError(
		$( document.createTextNode( errorMsg || errorCode || unknown ) ),
		false // prevents reapply
	);
	this.emit( 'publishErrorUnknown', errorCode || errorMsg || unknown );
};

/**
 * Show an publish process error message
 *
 * @method
 * @param {string|jQuery|Node[]} msg Message content (string of HTML, jQuery object or array of
 *  Node objects)
 * @param {boolean} [allowReapply=true] Whether or not to allow the user to reapply.
 *  Reset when swapping panels. Assumed to be true unless explicitly set to false.
 * @param {boolean} [warning=false] Whether or not this is a warning.
 */
mw.cx.TargetArticle.prototype.showPublishError = function ( msg, allowReapply, warning ) {
	this.publishDeferred.reject(
		[ new OO.ui.Error( msg, { recoverable: allowReapply, warning: warning } ) ]
	);
};

/**
 * Get content for publishing
 *
 * @param {boolean} deflate Whether the content need to deflated
 * @return {string} Content for publishing, may be deflated
 */
mw.cx.TargetArticle.prototype.getContent = function ( deflate ) {
	var content;
	content = this.translation.getTargetPage().getContent( this.translation );
	if ( deflate ) {
		content = EasyDeflate.deflate( content );
	}
	return content;
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
		version = parseInt( match[ 1 ], 10 ) + 1;

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
 * Get categories for the target article
 *
 * @return {string[]} Category titles
 */
mw.cx.TargetArticle.prototype.getCategories = function () {
	return this.translation.getTargetPage().getCategories();
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
		this.view.publishButton.$element.cxPublishingDialog();
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
	return this.siteMapper.getPageUrl( this.targetLanguage, this.targetTitle );
};
