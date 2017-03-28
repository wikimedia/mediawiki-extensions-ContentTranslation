mw.cx.init = {};

/**
 * Translation Initialization
 * @param {object} config Translation configuration
 */
mw.cx.init.Translation = function MWCXInitTranslation( config ) {
	this.config = config;
	this.siteMapper = config.siteMapper;
	this.sourceTitle = config.sourceTitle;
	this.targetTitle = config.targetTitle;
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;
	this.sourceRevision = config.sourceRevision;
	this.translationView = null;
	this.translationModel = null;
	this.translation = null;
};

/**
 * Initialize translation feature
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.init = function () {
	this.translationView = new mw.cx.ui.TranslationView( this.config );
	// Paint the initial UI.
	this.attachToDOM( this.translationView );

	return this.fetchCXConfiguration( this.sourceLanguage, this.targetLanguage ).then( function( response ) {
		$.extend( this.config, response.configuration );
		return this.initTranslation();
	}.bind( this ) );
};

/**
 * Initialize the data models, fetch source page and present it to user.
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.initTranslation = function () {
	this.sourcePage = new mw.cx.dm.SourcePage( this.config );
	this.targetPage = new mw.cx.dm.TargetPage( this.config );
	this.translationModel = new mw.cx.dm.Translation( this.config );
	this.translationModel.setSourcePage( this.sourcePage );
	this.translationModel.setTargetPage( this.targetPage );

	this.translation = new mw.cx.Translation( this.translationModel, this.translationView, this.config );
	// Fetch the source page from cxserver. The content is segmented.
	return this.fetchSourcePageContent(
		this.sourceTitle, this.sourceLanguage, this.sourceRevision
	).then( function( segmentedSourcePage ) {
		this.loadTranslation( segmentedSourcePage );
		return this.fetchAndAdaptCategories();
	}.bind( this ) );
};

/**
 * Load the translation from the fetched source page and present to translator
 * @param {object} segmentedSourcePage
 */
mw.cx.init.Translation.prototype.loadTranslation = function ( segmentedSourcePage ) {
	this.sourcePage.setSections( $.parseHTML( segmentedSourcePage.segmentedContent ) );
	this.sourcePage.setSourceRevision( segmentedSourcePage.revision );
	this.config.sourceRevision = segmentedSourcePage.revision;
	this.translationModel.setSourceRevisionId( this.sourcePage.getSourceRevision() );
	this.translationModel.prepareTranslationUnits();

	// Get the saved translation and set the properties in translation model
	this.translation.getSavedTranslation().then( function( savedTranslation ) {
		this.translationModel.setTargetURL( savedTranslation.targetURL );
		this.translationModel.setStatus( savedTranslation.status );
		this.translationModel.setTargetRevisionId( savedTranslation.targetRevisionId );
		this.translationModel.setProgress( JSON.parse( savedTranslation.progress ) );
		this.translationModel.setId( savedTranslation.id );
		this.translationModel.setTargetTitle( savedTranslation.targetTitle );
		// Restore each translation storage units against the source sections.
		this.translation.restore( savedTranslation );
	}.bind( this ) ).always( function() {
		this.translationView.setTranslation( this.translationModel );
		this.translationView.loadTranslation();
	}.bind( this ) );
};

/**
 * Fetch and adapt the categories for target language
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchAndAdaptCategories = function () {
	return this.sourcePage.getCategories().then( function( sourceCategories ) {
		return this.targetPage.adaptCategoriesFrom( this.sourceLanguage, sourceCategories )
			.then( function() {
				this.translationView.showCategories();
			}.bind( this ) );
	}.bind( this ) );
};

/**
 * Attach the translation view to DOM
 * @param {mw.cx.ui.TranslationView} cxview
 */
mw.cx.init.Translation.prototype.attachToDOM = function ( cxview ) {
	$( 'body' ).append( cxview.$element );
};

/**
 * Fetch the page with given title and language.
 * Response contains
 *
 * @param {string} title Title of the page to be fetched
 * @param {string} language Language of the page requested. This will be used to
 *     identify the host wiki.
 * @param {string} revision Source page revision id.
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchSourcePageContent = function ( title, language, revision ) {
	var fetchParams, apiURL, fetchPageUrl;

	fetchParams = {
		$language: this.siteMapper.getWikiDomainCode( language ),
		// Manual normalisation to avoid redirects on spaces but not to break namespaces
		$title: title.replace( / /g, '_' )
	};
	apiURL = '/page/$language/$title';

	// If revision is requested, load that revision of page.
	if ( revision ) {
		fetchParams.$revision = revision;
		apiURL += '/$revision';
	}

	fetchPageUrl = this.config.siteMapper.getCXServerUrl( apiURL, fetchParams );

	return $.get( fetchPageUrl ).fail( function ( xhr ) {
		if ( xhr.status === 404 ) {
			mw.hook( 'mw.cx.error' ).fire(
				mw.msg( 'cx-error-page-not-found', title, $.uls.data.getAutonym( language ) )
			);
		} else {
			mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
		}
	} );
};

/**
 * Fetch CX Language pair configuration
 * @param {string} sourceLanguage Source language
 * @param {string} targetLanguage Target language
 * @return {jQuery.Promise}
 */
mw.cx.init.Translation.prototype.fetchCXConfiguration = function ( sourceLanguage, targetLanguage ) {
	return new mw.Api().get( {
		action: 'cxconfiguration',
		from: sourceLanguage,
		to: targetLanguage
	} );
};
