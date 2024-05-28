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
 * @param {mw.cx.SiteMapper} config.siteMapper
 * @param {string} [config.campaign] String indicating which CTA was used to start this translation
 */
mw.cx.init.Translation = function MwCXInitTranslation( sourceWikiPage, targetWikiPage, config ) {
	this.sourceWikiPage = sourceWikiPage;
	this.targetWikiPage = targetWikiPage;

	// BC with other code
	this.config = config;
	this.config.sourceTitle = sourceWikiPage.getTitle();
	this.config.sourceLanguage = sourceWikiPage.getLanguage();
	this.config.sourceRevision = sourceWikiPage.getRevision();
	this.config.sourceSectionTitle = sourceWikiPage.getSectionTitle();

	this.config.targetTitle = targetWikiPage.getTitle();
	this.config.targetLanguage = targetWikiPage.getLanguage();
	this.config.targetSectionTitle = targetWikiPage.getSectionTitle();

	this.mainNamespaceId = mw.config.get( 'wgNamespaceIds' )[ '' ];

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
	this.veTarget = ve.init.mw.targetFactory.create( 'cx', this.translationView, this.config );
	// Paint the initial UI.
	this.attachToDOM( this.veTarget );

	this.veTarget.connect( this, { namespaceChange: 'onNamespaceChange' } );

	// TODO: Use mw.libs.ve.targetLoader.loadModules instead of manually getting the plugin
	// modules and manually initializing the platform
	const platformPromise = new ve.init.mw.Platform().initialize();
	const translationPromise = this.fetchTranslationData();
	const pluginModules = mw.config.get( 'wgVisualEditorConfig' ).pluginModules;
	const modulePromise = mw.loader.using( [ 'mw.cx.visualEditor' ].concat( pluginModules ) );

	Promise.all( [ translationPromise, modulePromise, platformPromise ] )
		.then( ( [ [ sourcePageContent, draft ] ] ) => {
			// Set the link cache for source language
			ve.init.platform.sourceLinkCache = new ve.init.mw.LinkCache(
				this.config.siteMapper.getApi( this.sourceWikiPage.getLanguage() )
			);

			// Set the link cache for target language
			ve.init.platform.linkCache = new ve.init.mw.LinkCache(
				this.config.siteMapper.getApi( this.targetWikiPage.getLanguage() )
			);

			this.sourceWikiPage.setRevision( sourcePageContent.revision );

			return this.initTranslationModel( sourcePageContent.segmentedContent, draft ).then( ( translationModel ) => {
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

				if ( translationModel.isSectionTranslation() ) {
					this.translationView.markSectionTranslation();
				} else {
					translationModel.initCategories(
						this.processCategories( sourcePageContent.categories )
					);
					const categoryUI = new mw.cx.ui.Categories( translationModel, this.config );
					this.translationView.showCategories( categoryUI );
				}
				if ( draft ) {
					mw.hook( 'mw.cx.draft.restored' ).fire();
				}
				mw.log( '[CX] Translation initialized successfully' );
			} );
		} )
		.catch( () => this.initializationError() );

	this.addFeedbackLink();
};

/**
 * @typedef {Array} TranslationData
 * @property {Object} 0 Data from fetchSourcePageContent
 * @property {mw.cx.dm.DraftTranslationDTO|null} 1 Data from fetchDraftTranslation
 */

/**
 * Fetch all data necessary to start a translation.
 *
 * @return {Promise<TranslationData>} Translation data tuple
 */
mw.cx.init.Translation.prototype.fetchTranslationData = function () {
	mw.log( '[CX] Fetching Source page...' );
	const sourcePageFetchPromise = this.fetchSourcePageContent(
		this.sourceWikiPage,
		this.targetWikiPage.getLanguage(),
		this.config.siteMapper
	).catch( ( error ) => this.fetchSourcePageContentError( error.status ) );

	mw.log( '[CX] Checking existing translation...' );
	const draftFetchPromise = this.fetchDraftTranslation(
		this.sourceWikiPage.getTitle(),
		this.sourceWikiPage.getLanguage(),
		this.targetWikiPage.getLanguage(),
		this.sourceWikiPage.getSectionTitle()
	)
		.then( ( { translation, conflict } ) => this.fetchDraftTranslationSuccess( translation, conflict ) )
		.catch( () => this.fetchDraftTranslationError() );

	return Promise.all( [ sourcePageFetchPromise, draftFetchPromise ] );
};

/**
 * Create translation model object. If latest revision causes any user translations to be lost,
 * load the original revision used when translation was started.
 *
 * @param {string} sourceHtml
 * @param {mw.cx.dm.DraftTranslationDTO|null} [draft] Saved translation if any.
 * @return {Promise}
 */
mw.cx.init.Translation.prototype.initTranslationModel = function ( sourceHtml, draft ) {
	const translationUnits = draft && draft.translationUnits;

	const targetDom = mw.cx.dm.Translation.static.getSourceDom(
		sourceHtml,
		this.sourceWikiPage.getSectionTitle(),
		true,
		translationUnits,
		this.sourceWikiPage.getLanguage()
	);

	let numberOfUnrestoredSections = 0;
	for ( const translationUnitId in translationUnits ) {
		if ( !translationUnits[ translationUnitId ].restored ) {
			numberOfUnrestoredSections++;
		}
	}

	// If no translated section was lost, create source DOM and return early
	// This should cover initial start of translation, when there's no draft at all.
	if ( numberOfUnrestoredSections < 1 ) {
		const sourceDom = mw.cx.dm.Translation.static.getSourceDom( sourceHtml, this.sourceWikiPage.getSectionTitle() );

		const translationModel = new mw.cx.dm.Translation( this.sourceWikiPage, this.targetWikiPage, sourceDom, targetDom );
		return Promise.resolve( translationModel );
	}

	// Update revision of source page
	this.sourceWikiPage.setRevision( draft.sourceRevisionId );

	return this.fetchSourcePageContent(
		this.sourceWikiPage,
		this.targetWikiPage.getLanguage(),
		this.config.siteMapper
	)
		.then( ( sourcePageContent ) => {
			// Reset restoration status for all translation units
			for ( const id in translationUnits ) {
				translationUnits[ id ].restored = false;
			}

			const updatedSourceHtml = sourcePageContent.segmentedContent;
			const updatedSourceDom = mw.cx.dm.Translation.static.getSourceDom( updatedSourceHtml, this.sourceWikiPage.getSectionTitle() );
			const updatedTargetDom = mw.cx.dm.Translation.static.getSourceDom(
				updatedSourceHtml,
				this.sourceWikiPage.getSectionTitle(),
				true,
				translationUnits,
				this.sourceWikiPage.getLanguage()
			);

			const updatedTranslationModel = new mw.cx.dm.Translation( this.sourceWikiPage, this.targetWikiPage, updatedSourceDom, updatedTargetDom );
			updatedTranslationModel.setChangedSignificantly( true );

			let uri = new mw.Uri();
			// Append revision number to URL
			uri = uri.extend( { revision: draft.sourceRevisionId } );
			window.history.pushState( null, document.title, uri.toString() );

			return updatedTranslationModel;

		} )
		.catch( ( error ) => this.fetchSourcePageContentError( error.status ) );
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
 * @return {Promise}
 */
mw.cx.init.Translation.prototype.fetchSourcePageContent = function ( wikiPage, targetLanguage, siteMapper ) {
	const fetchParams = {
		$sourcelanguage: siteMapper.getWikiDomainCode( wikiPage.getLanguage() ),
		$targetlanguage: targetLanguage,
		// Manual normalisation to avoid redirects on spaces but not to break namespaces
		$title: wikiPage.getTitle().replace( / /g, '_' )
	};

	let apiURL = '/page/$sourcelanguage/$targetlanguage/$title';

	// If revision is requested, load that revision of page.
	if ( wikiPage.getRevision() ) {
		fetchParams.$revision = wikiPage.getRevision();
		apiURL += '/$revision';
	}

	const fetchPageUrl = siteMapper.getCXServerUrl( apiURL, fetchParams );

	return fetch( fetchPageUrl ).then( ( response ) => {
		if ( !response.ok ) {
			return Promise.reject( response );
		}

		return response.json();
	} );
};

mw.cx.init.Translation.prototype.fetchSourcePageContentError = function ( status ) {
	if ( status === 404 ) {
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
 * Given a source title, a source language and a target language, this method
 * fetches the draft translation information. It always returns a promise that
 * resolves to an object containing two properties: "translation" and "conflict".
 *
 * If a corresponding draft exists for the current user, the "translation" property
 * above is an object containing the draft translation fields, and the "conflict"
 * property is null.
 * If no draft translation is found, the API checks for conflicting translations,
 * i.e. translations for the same title and language pair, started by other users
 * within the last 24 hours. If such conflicting translation is found, the "conflict"
 * property will be an object containing the name and the gender of the last translator
 * of a conflicting translation, and the "translation" property is null.
 * If no draft and no conflict found, this translation will be started as a new translation.
 *
 * @private
 * @param {string} sourceTitle
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {string|null} sourceSectionTitle
 * @return {Promise<{translation: mw.cx.dm.DraftTranslationDTO|null, conflict: { name: string, gender: string }|null}>}
 */
mw.cx.init.Translation.prototype.fetchDraftTranslation = function (
	sourceTitle,
	sourceLanguage,
	targetLanguage,
	sourceSectionTitle
) {
	return new Promise( ( resolve, reject ) => {
		const params = {
			action: 'query',
			list: 'contenttranslation',
			usecase: 'desktop-editor-draft',
			sourcetitle: sourceTitle,
			from: sourceLanguage,
			to: targetLanguage,
			formatversion: 2
		};

		if ( sourceSectionTitle ) {
			params.sourcesectiontitle = sourceSectionTitle;
		}
		const jQueryPromise = new mw.Api().get( params ).then( ( response ) => {
			const payload = response.query && response.query.contenttranslation;

			let conflict = null;
			if ( payload && payload.hasConflicts ) {
				conflict = {
					name: payload.translatorName,
					gender: payload.translatorGender
				};
			}
			return {
				translation: payload && new mw.cx.dm.DraftTranslationDTO( payload.translation ),
				conflict
			};
		} );

		jQueryPromise
			.then( ( translation ) => resolve( translation ) )
			.fail( ( errorCode, details ) => reject( { errorCode, details } ) );
	} );
};

/**
 * Check whether an existing draft can be used.
 *
 * @private
 * @param {mw.cx.dm.DraftTranslationDTO|null} draft
 * @param {{ name: string, gender: string}|null} conflict
 * @return {Promise<mw.cx.dm.DraftTranslationDTO|null>} Draft or null.
 */
mw.cx.init.Translation.prototype.fetchDraftTranslationSuccess = function ( draft, conflict ) {
	// Do not allow two users to start a draft at the same time. The API only returns
	// a conflict (providing the conflicting translator's name and gender, if this is the case.
	if ( conflict ) {
		mw.log( '[CX] Existing translation in last 24 hours by another translator found.' );
		this.translationView.showConflictWarning( conflict.name, conflict.gender );
		// Stop further processing
		return Promise.resolve( null );
	}

	if ( !draft ) {
		// No draft exists
		mw.log( '[CX] No existing translation found' );
		return Promise.resolve( null );
	}

	// Don't restore deleted drafts
	if ( draft.status === 'deleted' ) {
		mw.log( '[CX] Existing translation found. But it is a deleted one.' );
		return Promise.resolve( null );
	}

	return Promise.resolve( draft );
};

mw.cx.init.Translation.prototype.fetchDraftTranslationError = function () {
	// XXX
	mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch draft information.' );
	mw.log( '[CX]', arguments );
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
	const categories = {};
	let length = fetchedCategories.length;

	while ( length-- ) {
		const category = fetchedCategories[ length ];
		categories[ category.sourceTitle ] = category.targetTitle || null;
	}

	return categories;
};

mw.cx.init.Translation.prototype.addFeedbackLink = function () {
	const feedback = new OO.ui.ButtonWidget( {
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
	this.translationView.showViewIssuesMessage(
		mw.msg( 'cx-infobar-old-version' ), 'old-version', 'warning'
	);

	const diff = this.config.siteMapper.getPageUrl(
		translationModel.getSourceLanguage(),
		translationModel.getSourceTitle(),
		{
			type: 'revision',
			diff: 'cur',
			oldid: translationModel.getSourceRevisionId()
		}
	);

	const translationIssuesParams = {
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
		if ( !data || data.action !== 'restart' ) {
			return;
		}

		const sourceLanguage = this.translationModel.getSourceLanguage();
		const targetLanguage = this.translationModel.getTargetLanguage();
		const sourceTitle = this.translationModel.getSourceTitle();
		const apiParams = {
			assert: 'user',
			action: 'cxdelete',
			from: sourceLanguage,
			to: targetLanguage,
			sourcetitle: sourceTitle
		};

		return new mw.Api().postWithToken( 'csrf', apiParams ).done( function () {
			const uri = new mw.Uri();
			delete uri.query.revision;

			this.config.siteMapper.setCXToken( sourceLanguage, targetLanguage, sourceTitle );

			location.href = uri.getRelativePath();
		}.bind( this ) );
	}.bind( this ) );
};

mw.cx.init.Translation.prototype.checkIfUserCanPublish = function () {
	const userPermissionChecker = new mw.cx.UserPermissionChecker(
		this.veTarget,
		this.translationView,
		this.translationModel
	);
	userPermissionChecker.checkIfUserCanPublish();
};

mw.cx.init.Translation.prototype.onNamespaceChange = function ( namespaceId ) {
	this.checkIfUserCanPublish();

	if ( this.mainNamespaceId !== namespaceId ) {
		this.translationModel.resolveIssueByName( 'cannot-publish' );
		this.translationView.removeMessage( 'cannot-publish' );
	}
};
