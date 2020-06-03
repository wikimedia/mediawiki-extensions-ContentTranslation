'use strict';

mw.cx.init = {};

/**
 * This class loads translation documents (source and target) and sets up the main views and models.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @param {mw.cx.dm.WikiPage} sourceWikiPage
 * @param {mw.cx.dm.WikiPage} targetWikiPage
 * @param {Object} config Standard services TODO not optional so should not be called config
 * @cfg {mw.cx.SiteMapper} siteMapper
 * @cfg {string} [campaign] String indicating which CTA was used to start this translation
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

	this.mainNamespaceId = mw.config.get( 'wgNamespaceIds' )[ '' ];
	this.userNamespaceId = mw.config.get( 'wgNamespaceIds' ).user;

	// @var {ve.init.mw.CXTarget}
	this.veTarget = null;
	// @var {mw.cx.dm.Translation}
	this.translationModel = null;
	// @var {mw.cx.TranslationController}
	this.translationController = null;
	// @var {mw.cx.ui.TranslationView}
	this.translationView = null;
};

/**
 * Initialize translation.
 */
mw.cx.init.Translation.prototype.init = function () {
	var platformPromise, translationPromise, modulePromise, pluginModules;

	if ( mw.user.isAnon() ) {
		mw.hook( 'mw.cx.error.anonuser' ).fire();
		return;
	}
	if ( this.config.campaign ) {
		mw.hook( 'mw.cx.cta.accept' ).fire(
			this.config.campaign,
			this.sourceWikiPage.getLanguage(),
			this.targetWikiPage.getLanguage()
		);
	}
	this.translationView = new mw.cx.ui.TranslationView( this.config );
	this.veTarget = new ve.init.mw.CXTarget( this.translationView, this.config );
	// Paint the initial UI.
	this.attachToDOM( this.veTarget );

	this.veTarget.connect( this, { namespaceChange: 'onNamespaceChange' } );

	// TODO: Use mw.libs.ve.targetLoader.loadModules instead of manually getting the plugin
	// modules and manually initializing the platform
	platformPromise = new ve.init.mw.Platform().initialize();
	translationPromise = this.fetchTranslationData();
	pluginModules = mw.config.get( 'wgVisualEditorConfig' ).pluginModules;
	modulePromise = mw.loader.using( [ 'mw.cx.visualEditor' ].concat( pluginModules ) );
	$.when( translationPromise, modulePromise, platformPromise ).then( function ( translationData ) {
		var categoryUI,
			sourcePageContent = translationData[ 0 ],
			draft = translationData[ 1 ];

		// Set the link cache for source language
		ve.init.platform.sourceLinkCache = new ve.init.mw.LinkCache(
			this.config.siteMapper.getApi( this.sourceWikiPage.getLanguage() )
		);

		// Set the link cache for target language
		ve.init.platform.linkCache = new ve.init.mw.LinkCache(
			this.config.siteMapper.getApi( this.targetWikiPage.getLanguage() )
		);

		this.sourceWikiPage.setRevision( sourcePageContent.revision );

		this.initTranslationModel( sourcePageContent.segmentedContent, draft ).then( function ( translationModel ) {
			var mwSectionNumber = mw.cx.sectionForTranslation();

			this.translationModel = translationModel;

			if ( draft ) {
				translationModel.setSavedTranslation( draft );
			}

			// Initialize translation controller
			this.translationController = new mw.cx.TranslationController(
				translationModel, this.veTarget, this.config.siteMapper, this.config
			);

			this.veTarget.setTranslation( translationModel );

			this.checkIfUserCanPublish();
			if ( translationModel.isChangedSignificantly() ) {
				this.addChangedSignificantlyIssue( translationModel );
			}

			// If section translation is enabled for CX (by using "section" param in URL),
			// hide all other sections.
			if ( mwSectionNumber ) {
				mw.loader.addStyleTag(
					'.ve-ce-cxSectionNode:not( .mw-source-section-' + mwSectionNumber + ' ),' +
					'.ve-ce-cxPlaceholderNode:not( .mw-target-section-' + mwSectionNumber + ' )' +
					'{ display: none; }'
				);
			}

			translationModel.initCategories(
				this.processCategories( sourcePageContent.categories )
			);
			categoryUI = new mw.cx.ui.Categories( translationModel, this.config );
			this.translationView.showCategories( categoryUI );

			if ( draft ) {
				mw.hook( 'mw.cx.draft.restored' ).fire();
			}
			mw.log( '[CX] Translation initialized successfully' );
		}.bind( this ) );
	}.bind( this ), this.initializationError.bind( this ) );

	this.addFeedbackLink();
};

/**
 * Fetch all data necessary to start a translation.
 *
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
 * Create translation model object. If latest revision causes any user translations to be lost,
 * load the original revision used when translation was started.
 *
 * @param {string} sourceHtml
 * @param {Object} draft
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.initTranslationModel = function ( sourceHtml, draft ) {
	var sourceDom, targetDom, translationModel, translationUnitId,
		translationUnits = draft && draft.translationUnits,
		numberOfUnrestoredSections = 0;

	targetDom = mw.cx.dm.Translation.static.getSourceDom(
		sourceHtml, true, translationUnits, this.sourceWikiPage.getLanguage()
	);

	for ( translationUnitId in translationUnits ) {
		if ( !translationUnits[ translationUnitId ].restored ) {
			numberOfUnrestoredSections++;
		}
	}

	// If no translated section was lost, create source DOM and return early
	// This should cover initial start of translation, when there's no draft at all.
	if ( numberOfUnrestoredSections < 1 ) {
		sourceDom = mw.cx.dm.Translation.static.getSourceDom( sourceHtml );

		translationModel = new mw.cx.dm.Translation( this.sourceWikiPage, this.targetWikiPage, sourceDom, targetDom );
		return $.Deferred().resolve( translationModel ).promise();
	}

	// Update revision of source page
	this.sourceWikiPage.setRevision( draft.sourceRevisionId );
	return this.fetchSourcePageContent(
		this.sourceWikiPage, this.targetWikiPage.getLanguage(), this.config.siteMapper
	).then( function ( sourcePageContent ) {
		var sourceDom, targetDom,
			uri = new mw.Uri(),
			sourceHtml = sourcePageContent.segmentedContent;

		// Reset restoration status for all translation units
		for ( translationUnitId in translationUnits ) {
			translationUnits[ translationUnitId ].restored = false;
		}

		sourceDom = mw.cx.dm.Translation.static.getSourceDom( sourceHtml );
		targetDom = mw.cx.dm.Translation.static.getSourceDom(
			sourceHtml, true, translationUnits, this.sourceWikiPage.getLanguage()
		);

		translationModel = new mw.cx.dm.Translation( this.sourceWikiPage, this.targetWikiPage, sourceDom, targetDom );
		translationModel.setChangedSignificantly( true );

		// Append revision number to URL
		uri = uri.extend( { revision: draft.sourceRevisionId } );
		window.history.pushState( null, document.title, uri.toString() );

		return translationModel;
	}.bind( this ), this.fetchSourcePageContentError.bind( this ) );
};

/**
 * Initialization error handler
 */
mw.cx.init.Translation.prototype.initializationError = function () {
	// Any error in the above deferreds is critical
	this.translationView.showMessage( 'error', mw.msg( 'cx-init-critical-error' ) );
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
 * @param {mw.cx.SiteMapper} siteMapper
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

mw.cx.init.Translation.prototype.addChangedSignificantlyIssue = function ( translationModel ) {
	var diff, translationIssuesParams;

	this.translationView.showViewIssuesMessage(
		mw.msg( 'cx-infobar-old-version' ), 'old-version', 'warning'
	);

	diff = this.config.siteMapper.getPageUrl(
		translationModel.getSourceLanguage(),
		translationModel.getSourceTitle(),
		{
			type: 'revision',
			diff: 'cur',
			oldid: translationModel.getSourceRevisionId()
		}
	);

	translationIssuesParams = {
		title: mw.msg( 'cx-tools-linter-old-revision' ),
		resolvable: true
	};

	if ( !translationModel.hasBeenPublished() ) {
		translationIssuesParams.additionalButtons = [
			{
				icon: 'reload',
				label: mw.msg( 'cx-tools-linter-old-revision-label' ),
				action: this.restartTranslation.bind( this )
			}
		];
	}

	translationModel.addUnattachedIssues( [
		new mw.cx.dm.TranslationIssue(
			'old-version', // Issue name
			mw.message( 'cx-tools-linter-old-revision-message', diff ), // Message body
			translationIssuesParams
		)
	] );
};

mw.cx.init.Translation.prototype.restartTranslation = function () {
	OO.ui.getWindowManager().openWindow( 'message', {
		title: mw.msg( 'cx-tools-linter-restart-translation-title' ),
		message: mw.msg( 'cx-tools-linter-restart-translation-message' ),
		actions: [
			{ action: 'restart', label: mw.msg( 'cx-tools-linter-old-revision-label' ), flags: [ 'primary', 'destructive' ] },
			{ action: 'cancel', label: mw.msg( 'cx-tools-linter-restart-translation-cancel' ), flags: 'safe' }
		]
	} ).closed.then( function ( data ) {
		var sourceLanguage, targetLanguage, sourceTitle, apiParams;

		if ( !data || data.action !== 'restart' ) {
			return;
		}

		sourceLanguage = this.translationModel.getSourceLanguage();
		targetLanguage = this.translationModel.getTargetLanguage();
		sourceTitle = this.translationModel.getSourceTitle();
		apiParams = {
			assert: 'user',
			action: 'cxdelete',
			from: sourceLanguage,
			to: targetLanguage,
			sourcetitle: sourceTitle
		};

		return new mw.Api().postWithToken( 'csrf', apiParams ).done( function () {
			var uri = new mw.Uri();
			delete uri.query.revision;

			this.config.siteMapper.setCXToken( sourceLanguage, targetLanguage, sourceTitle );

			location.href = uri.getRelativePath();
		}.bind( this ) );
	}.bind( this ) );
};

mw.cx.init.Translation.prototype.isUserAllowedToPublishToMainNamespace = function () {
	var userGroups = mw.config.get( 'wgUserGroups' ) || [],
		publishConfig = ( mw.config.get( 'wgContentTranslationPublishRequirements' ) || [] ).userGroups;

	if ( typeof publishConfig === 'string' ) {
		publishConfig = [ publishConfig ];
	}

	if ( !Array.isArray( publishConfig ) ) {
		mw.log.error( 'Publish requirement config should be of type array or string' );
		return true;
	}

	return publishConfig.some( function ( userGroup ) {
		return userGroups.indexOf( userGroup ) > -1;
	} );
};

mw.cx.init.Translation.prototype.checkIfUserCanPublish = function () {
	if ( this.veTarget.getPublishNamespace() !== this.mainNamespaceId ) {
		return;
	}

	if ( !this.isUserAllowedToPublishToMainNamespace() ) {
		this.displayCannotPublishError();
	}
};

/**
 * Display the error when user cannot publish into main namespace.
 */
mw.cx.init.Translation.prototype.displayCannotPublishError = function () {
	this.translationView.showViewIssuesMessage(
		mw.msg( 'cx-infobar-cannot-publish' ), 'cannot-publish', 'error'
	);

	// User isn't allowed to publish, display the information in the issue card.
	this.translationModel.resolveIssueByName( 'cannot-publish' );
	this.translationModel.addUnattachedIssues( [
		new mw.cx.dm.TranslationIssue(
			'cannot-publish', // Issue name
			mw.message( 'cx-tools-linter-cannot-publish-message' ).parseDom(), // message body
			{
				title: mw.msg( 'cx-tools-linter-cannot-publish-title' ),
				type: 'error',
				help: 'https://en.wikipedia.org/wiki/Wikipedia:Content_translation_tool',
				resolvable: true,
				actionIcon: 'article',
				actionLabel: mw.msg( 'cx-tools-linter-cannot-publish-action-label' ),
				action: this.switchToUserNamespace.bind( this )
			}
		)
	] );
};

mw.cx.init.Translation.prototype.switchToUserNamespace = function () {
	var popup = new OO.ui.PopupWidget( {
		$content: $( '<p>' ).text( mw.msg( 'cx-publish-destination-namespace-changed' ) ),
		padded: true,
		autoClose: true
	} );

	this.veTarget.getActions()
		.getToolGroupByName( 'publish' )
		.findItemFromData( 'publishSettings' )
		.$element.append( popup.$element );
	popup.toggle( true );

	this.translationModel.resolveIssueByName( 'cannot-publish' );
	this.translationView.clearMessages();
	this.veTarget.onPublishNamespaceChange( this.userNamespaceId );
};

mw.cx.init.Translation.prototype.onNamespaceChange = function ( namespaceId ) {
	this.checkIfUserCanPublish();

	if ( this.mainNamespaceId !== namespaceId ) {
		this.translationModel.resolveIssueByName( 'cannot-publish' );
		this.translationView.removeMessage( 'cannot-publish' );
	}
};
