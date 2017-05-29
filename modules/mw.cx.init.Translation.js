mw.cx.init = {};

/**
 * This class loads translation documents (source and target) and sets up the main views and models.
 *
 * @class
 *
 * @constructor
 * @param {mw.cx.dm.WikiPage} sourceWikiPage
 * @param {mw.cx.dm.WikiPage} targetWikiPage
 * @param {Object} services Standard services
 */
mw.cx.init.Translation = function MwCXInitTranslation( sourceWikiPage, targetWikiPage, services ) {
	this.sourceWikiPage = sourceWikiPage;
	this.targetWikiPage = targetWikiPage;
	this.services = services;

	// BC with other code
	this.config = services;
	this.config.sourceTitle = sourceWikiPage.getTitle();
	this.config.sourceLanguage = sourceWikiPage.getLanguage();
	this.config.sourceRevision = sourceWikiPage.getRevision();
	this.config.targetTitle = targetWikiPage.getTitle();
	this.config.targetLanguage = targetWikiPage.getLanguage();

	// @var {mw.cx.ui.TranslationView}
	this.translationView = null;
	// @var {mw.cx.dm.Translation}
	this.translationModel = null;
	// @var {mw.cx.Translation}
	this.translation = null;
	// @var {mw.cx.dm.SourcePage}
	this.sourcePage = null;
	// @var {mw.cx.dm.TargetPage}
	this.targetPage = null;
};

/**
 * Load all data necessary to start a translation.
 */
mw.cx.init.Translation.prototype.init = function () {
	this.translationView = new mw.cx.ui.TranslationView( this.config );
	// Paint the initial UI.
	this.attachToDOM( this.translationView );

	// Deferred.done is used to stop errors from bubbling to other error handlers.
	// Can be rewritten when we have proper promises.
	this.fetchConfiguration(
		this.sourceWikiPage.getLanguage(),
		this.targetWikiPage.getLanguage()
	).then(
		this.fetchConfigurationSuccess.bind( this ),
		this.fetchConfigurationError.bind( this )
	).done( function () {
		this.fetchSourcePageContent( this.sourceWikiPage, this.services.siteMapper ).then(
			this.fetchSourcePageContentSuccess.bind( this ),
			this.fetchSourcePageContentError.bind( this )
		).done( function () {
			this.fetchDraftInformation(
				this.sourceWikiPage,
				this.targetWikiPage
			).then(
				this.fetchDraftInformationSuccess.bind( this ),
				this.fetchDraftInformationError.bind( this )
			).done( function ( draftId ) {
				this.fetchDraft( draftId ).then(
					this.fetchDraftSuccess.bind( this ),
					this.fetchDraftError.bind( this )
				).done( this.enableTranslation.bind( this ) );
			}.bind( this ) );
		}.bind( this ) );
	}.bind( this ) );
};

/**
 * Attach the translation view to DOM.
 *
 * @private
 * @param {mw.cx.ui.TranslationView} view
 */
mw.cx.init.Translation.prototype.attachToDOM = function ( view ) {
	$( 'body' ).append( view.$element );
};

/**
 * Fetch language pair configuration from ContentTranslation extension API.
 *
 * @private
 * @param {string} sourceLanguage Source language
 * @param {string} targetLanguage Target language
 * @return {jQuery.Promise} Configuration settings as returned by the API.
 */
mw.cx.init.Translation.prototype.fetchConfiguration = function ( sourceLanguage, targetLanguage ) {
	return new mw.Api().get( {
		action: 'cxconfiguration',
		from: sourceLanguage,
		to: targetLanguage
	} );
};

mw.cx.init.Translation.prototype.fetchConfigurationSuccess = function ( response ) {
	$.extend( this.config, response.configuration );
};

mw.cx.init.Translation.prototype.fetchConfigurationError = function () {
	// XXX
	mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch configuration for this language pair.' );
};

/**
 * Fetch the source page content from cxserver.
 *
 * @private
 * @param {mw.cx.dm.WikiPage} wikiPage
 * @param {ext.cx.SiteMapper} siteMapper
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchSourcePageContent = function ( wikiPage, siteMapper ) {
	var fetchParams, apiURL, fetchPageUrl;

	fetchParams = {
		$language: siteMapper.getWikiDomainCode( wikiPage.getLanguage() ),
		// Manual normalisation to avoid redirects on spaces but not to break namespaces
		$title: wikiPage.getTitle().replace( / /g, '_' )
	};

	apiURL = '/page/$language/$title';

	// If revision is requested, load that revision of page.
	if ( wikiPage.getRevision() ) {
		fetchParams.$revision = wikiPage.getRevision();
		apiURL += '/$revision';
	}

	fetchPageUrl = siteMapper.getCXServerUrl( apiURL, fetchParams );

	return $.get( fetchPageUrl );
};

mw.cx.init.Translation.prototype.fetchSourcePageContentSuccess = function ( content ) {
	// Update with revision information
	this.sourceWikiPage = new mw.cx.dm.WikiPage(
		this.sourceWikiPage.getTitle(),
		this.sourceWikiPage.getLanguage(),
		content.revision
	);
	// BC
	this.config.sourceRevision = content.revision;

	this.sourcePage = new mw.cx.dm.SourcePage( this.config );
	this.sourcePage.setSections( $.parseHTML( content.segmentedContent ) );

	this.targetPage = new mw.cx.dm.TargetPage( this.config );

	this.translationModel = new mw.cx.dm.Translation( this.config );
	this.translationModel.setSourcePage( this.sourcePage );
	this.translationModel.setTargetPage( this.targetPage );
	this.translationModel.setSourceRevisionId( this.sourcePage.getSourceRevision() );
	this.translationModel.prepareTranslationUnits();

	this.translation = new mw.cx.Translation( this.translationModel, this.translationView, this.config );
};

mw.cx.init.Translation.prototype.fetchSourcePageContentError = function ( xhr ) {
	if ( xhr.status === 404 ) {
		mw.hook( 'mw.cx.error' ).fire(
			mw.msg(
				'cx-error-page-not-found',
				this.sourceWikiPage.getTitle(),
				$.uls.data.getAutonym( this.sourceWikiPage.getLanguage() )
			)
		);
	} else {
		mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
	}
};

/**
 * Find if there is a draft existing for the current title and language pair.
 *
 * @private
 * @param {mw.cx.dm.WikiPage} sourceWikiPage
 * @param {mw.cx.dm.WikiPage} targetWikiPage
 * @return {jQuery.Promise} Information about an existing draft (if any) as returned by the API.
 */
mw.cx.init.Translation.prototype.fetchDraftInformation = function ( sourceWikiPage, targetWikiPage ) {
	return new mw.Api().get( {
		action: 'query',
		list: 'contenttranslation',
		sourcetitle: sourceWikiPage.getTitle(),
		from: sourceWikiPage.getLanguage(),
		to: targetWikiPage.getLanguage()
	} ).then( function ( response ) {
		return response.query && response.query.contenttranslation.translation;
	} );
};

/**
 * Check whether an existing draft can be used.
 *
 * @private
 * @param {Object} draft
 * @return {jQuery.Promise} Draft id or null.
 */
mw.cx.init.Translation.prototype.fetchDraftInformationSuccess = function ( draft ) {
	if ( !draft ) {
		// No draft exists
		return $.Deferred().resolve( null ).promise();
	}

	// Do not allow two users to start a draft at the same time. The API only
	// returns a translation with different translatorName if this is the case.
	if ( draft.translatorName !== mw.user.getName() ) {
		this.translationView.showConflictWarning( draft );
		// Stop further processing!
		return $.Deferred().reject().promise();
	}

	// Don't restore deleted drafts
	if ( draft.status !== 'deleted' ) {
		return $.Deferred().resolve( draft.id ).promise();
	}

	return $.Deferred().resolve( null ).promise();
};

mw.cx.init.Translation.prototype.fetchDraftInformationError = function () {
	// XXX
	mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch draft information.' );
	mw.log( '[CX]', arguments );
};

/**
 * Fetch the translation from database (if any exists)
 *
 * @private
 * @param {string|null} draftId Id for saved draft
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchDraft = function ( draftId ) {
	// In case there is no draft, skip loading it
	if ( draftId === null ) {
		return $.Deferred().resolve().promise();
	}

	this.translationView.setStatusMessage( mw.msg( 'cx-draft-restoring' ) );

	return new mw.Api().get( {
		action: 'query',
		list: 'contenttranslation',
		translationid: draftId
	} ).then( function ( response ) {
		return response.query.contenttranslation.translation;
	} );
};

mw.cx.init.Translation.prototype.fetchDraftSuccess = function ( draft ) {
	// In case there is no draft (see fetchDraft), there is nothing for us to do
	if ( !draft ) {
		return;
	}

	this.translationModel.setTargetURL( draft.targetURL );
	this.translationModel.setStatus( draft.status );
	this.translationModel.setTargetRevisionId( draft.targetRevisionId );
	this.translationModel.setProgress( JSON.parse( draft.progress ) );
	this.translationModel.setId( draft.id );
	this.translationModel.setTargetTitle( draft.targetTitle );

	// Restore each translation storage units against the source sections.
	this.translation.restore( draft );
	// TODO: Restore failures not handled.
	this.translationView.emit( 'translationRestored' );
};

mw.cx.init.Translation.prototype.fetchDraftError = function ( errorCode, details ) {
	if ( details.exception instanceof Error ) {
		details.exception = details.exception.toString();
	}
	details.errorCode = errorCode;
	this.translationView.setStatusMessage( mw.msg( 'cx-draft-restore-failed' ) );
};

/**
 * Enables translation and starts post-load processes.
 *
 * @private
 */
mw.cx.init.Translation.prototype.enableTranslation = function () {
	this.translationView.setTranslation( this.translationModel );
	this.translationView.loadTranslation();
	this.fetchAndAdaptCategories();
};

/**
 * Fetch and adapt the categories.
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchAndAdaptCategories = function () {
	return this.sourcePage.getCategories().then( function ( sourceCategories ) {
		return this.targetPage.adaptCategoriesFrom(
			this.sourceWikiPage.getLanguage(),
			sourceCategories
		).then( function () {
			this.translationView.showCategories();
		}.bind( this ) );
	}.bind( this ) );
};
