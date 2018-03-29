mw.cx.init = {};

/**
 * This class loads translation documents (source and target) and sets up the main views and models.
 *
 * @class
 *
 * @constructor
 * @param {mw.cx.dm.WikiPage} sourceWikiPage
 * @param {mw.cx.dm.WikiPage} targetWikiPage
 * @param {Object} config Standard services TODO not optional so should not be called config
 * @cfg {mw.cx.SiteMapper} siteMapper
 * @cfg {mw.cx.MwApiRequestManager} requestManager
 * @cfg {mw.cx.MachineTranslationService} MTService
 * @cfg {mw.cx.MachineTranslationManager} MTManager
 */
mw.cx.init.Translation = function MwCXInitTranslation( sourceWikiPage, targetWikiPage, config ) {
	this.sourceWikiPage = sourceWikiPage;
	this.targetWikiPage = targetWikiPage;

	// BC with other code
	this.config = config;
	this.config.sourceTitle = sourceWikiPage.getTitle();
	this.config.sourceLanguage = sourceWikiPage.getLanguage();
	this.config.sourceRevision = sourceWikiPage.getRevision();
	this.config.targetTitle = targetWikiPage.getTitle();
	this.config.targetLanguage = targetWikiPage.getLanguage();

	// @var {ve.init.mw.CXTarget}
	this.veTarget = null;
	// @var {mw.cx.dm.Translation}
	this.translationModel = null;
	// @var {mw.cx.TranslationController}
	this.translationController = null;
	// @var {OO.ui.StackLayout}
	this.translationView = null;
};

/**
 * Initialize translation.
 */
mw.cx.init.Translation.prototype.init = function () {
	var platformPromise, translationPromise, modulePromise;

	if ( mw.user.isAnon() ) {
		mw.hook( 'mw.cx.error.anonuser' ).fire();
		return;
	}
	if ( this.config.campaign ) {
		mw.hook( 'mw.cx.cta.accept' ).fire( this.config.campaign, this.config.sourceLanguage, this.config.targetLanguage );
	}
	this.translationView = new mw.cx.ui.TranslationView( this.config );
	this.veTarget = new ve.init.mw.CXTarget( this.translationView, this.config );
	// Paint the initial UI.
	this.attachToDOM( this.veTarget );

	// TODO: Use mw.libs.ve.targetLoader.loadModules instead of manually getting the plugin
	// modules and manually initializing the platform
	platformPromise = new ve.init.mw.Platform().initialize();
	translationPromise = this.fetchTranslationData();
	modulePromise = mw.loader.using( mw.config.get( 'wgVisualEditorConfig' ).pluginModules );

	$.when( translationPromise, modulePromise, platformPromise ).then( function ( translationData ) {
		var categoryUI,
			sourcePageContent = translationData[ 0 ],
			draft = translationData[ 1 ];

		this.sourceWikiPage.setRevision( sourcePageContent.revision );
		this.translationModel = new mw.cx.dm.Translation(
			this.sourceWikiPage,
			this.targetWikiPage,
			sourcePageContent.segmentedContent,
			draft
		);
		// Initialize translation controller
		this.translationController = new mw.cx.TranslationController(
			this.translationModel, this.veTarget, this.config
		);

		this.veTarget.setTranslation( this.translationModel );

		this.translationModel.initCategories(
			this.processCategories( sourcePageContent.categories )
		);
		categoryUI = new mw.cx.ui.Categories( this.translationModel, this.config );
		this.translationView.showCategories( categoryUI );

		if ( draft ) {
			mw.hook( 'mw.cx.draft.restored' ).fire();
		}
		mw.log( '[CX] Translation initialized successfully' );
	}.bind( this ), this.initializationError.bind( this ) );

	this.addFeedbackLink();
};

/**
 * Fetch all data necessary to start a translation.
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchTranslationData = function () {
	var sourcePageFetchDeferred, draftFetchDeferred;

	mw.log( '[CX] Fetching Source page...' );
	sourcePageFetchDeferred = this.fetchSourcePageContent(
		this.sourceWikiPage, this.targetWikiPage.getLanguage(), this.config.siteMapper
	).fail( this.fetchSourcePageContentError.bind( this ) );

	mw.log( '[CX] Checking existing translation...' );
	draftFetchDeferred = this.fetchDraftInformation(
		this.sourceWikiPage, this.targetWikiPage
	).then(
		this.fetchDraftInformationSuccess.bind( this ),
		this.fetchDraftInformationError.bind( this )
	).then( function ( draftId ) {
		mw.log( '[CX] Fetching existing translation for id: ' + draftId );
		return this.fetchDraft( draftId ).fail( this.fetchDraftError.bind( this ) );
	}.bind( this ) );

	return $.when( sourcePageFetchDeferred, draftFetchDeferred );
};

/**
 * Initialization error handler
 */
mw.cx.init.Translation.prototype.initializationError = function () {
	// Any error in the above deferreds is critical
	this.translationView.showMessage(
		'error',
		'Critical error: Content translation failed to load due to internal error.'
	);
	// Nothing happens beyond this. Some internal error happened.
	mw.log.error( '[CX] Translation initialization failed.' );
};

/**
 * Attach the translation view to DOM.
 *
 * @private
 * @param {ve.init.mw.CXTarget} veTarget
 */
mw.cx.init.Translation.prototype.attachToDOM = function ( veTarget ) {
	$( 'body' ).append( veTarget.$element );
};

/**
 * Fetch the source page content from cxserver.
 *
 * @private
 * @param {mw.cx.dm.WikiPage} wikiPage
 * @param {string} targetLanguage
 * @param {ext.cx.SiteMapper} siteMapper
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchSourcePageContent = function ( wikiPage, targetLanguage, siteMapper ) {
	var fetchParams, apiURL, fetchPageUrl;

	fetchParams = {
		$sourcelanguage: siteMapper.getWikiDomainCode( wikiPage.getLanguage() ),
		$targetlanguage: targetLanguage,
		// Manual normalisation to avoid redirects on spaces but not to break namespaces
		$title: wikiPage.getTitle().replace( / /g, '_' )
	};

	apiURL = '/page/$sourcelanguage/$targetlanguage/$title';

	// If revision is requested, load that revision of page.
	if ( wikiPage.getRevision() ) {
		fetchParams.$revision = wikiPage.getRevision();
		apiURL += '/$revision';
	}

	fetchPageUrl = siteMapper.getCXServerUrl( apiURL, fetchParams );

	return $.get( fetchPageUrl ).then( function ( data ) {
		// The $.when that use the output of this will treat respose as array(data, textStatus, jqXHR)
		// We need only the first argument.
		return data;
	} );
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
		mw.log( '[CX] No existing translation found' );
		return $.Deferred().resolve( null ).promise();
	}

	// Do not allow two users to start a draft at the same time. The API only
	// returns a translation with different translatorName if this is the case.
	if ( draft.translatorName !== mw.user.getName() ) {
		mw.log( '[CX] Existing translation found. But owned by another translator' );
		this.translationView.showConflictWarning( draft );
		// Stop further processing!
		return $.Deferred().reject().promise();
	}

	// Don't restore deleted drafts
	if ( draft.status === 'deleted' ) {
		mw.log( '[CX] Existing translation found. But it is a deleted one.' );
		return $.Deferred().resolve( null ).promise();
	}

	return $.Deferred().resolve( draft.id ).promise();
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

mw.cx.init.Translation.prototype.fetchDraftError = function ( errorCode, details ) {
	if ( details.exception instanceof Error ) {
		details.exception = details.exception.toString();
	}
	details.errorCode = errorCode;
	this.translationView.setStatusMessage( mw.msg( 'cx-draft-restore-failed' ) );
};

/**
 * Process fetched categories to create mapping of source category and target category or null, if
 * there is no adapted target category.
 *
 * @param {Array} fetchedCategories
 * @return {Object} Array of categories transformed into object of
 * sourceTitle:targetTitle property-value pairs
 */
mw.cx.init.Translation.prototype.processCategories = function ( fetchedCategories ) {
	var category,
		categories = {},
		length = fetchedCategories.length;

	while ( length-- ) {
		category = fetchedCategories[ length ];
		categories[ category.sourceTitle ] = category.targetTitle || null;
	}

	return categories;
};

mw.cx.init.Translation.prototype.addFeedbackLink = function () {
	var feedback = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-feedback-link' ),
		icon: 'speechBubbles',
		href: '//www.mediawiki.org/wiki/Talk:Content_translation',
		target: '_blank',
		framed: false,
		classes: [ 'cx-feedback-link' ],
		flags: [ 'progressive' ]
	} );
	this.translationView.addItems( [ feedback ] );
};
