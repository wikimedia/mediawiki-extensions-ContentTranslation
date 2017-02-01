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
	this.translation = new mw.cx.dm.Translation( this.config );
	this.translation.setSourcePage( this.sourcePage );
	this.translation.setTargetPage( this.targetPage );
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
	this.translation.setSourceRevision( this.sourcePage.getSourceRevision() );
	this.translation.prepareTranslationUnits();
	this.translationView.setTranslation( this.translation );
	this.translationView.loadTranslation();
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
