/**
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @param {OO.ui.ButtonWidget} triggerButton
 * @param {Object} options
 * @cfg {mw.cx.SiteMapper} siteMapper
 * @cfg {jQuery} $container Container for source page selector
 * @cfg {string} sourceLanguage Source language
 * @cfg {string} targetLanguage Target language
 * @cfg {string} sourceTitle Source title
 * @cfg {string} targetTitle Target title
 */
mw.cx.SourcePageSelector = function ( triggerButton, options ) {
	this.options = options || {};
	this.siteMapper = options.siteMapper;
	this.triggerButton = triggerButton;
	this.$container = options.$container;
	this.pageSelector = null;
	this.selectedSourcePage = null;
	this.languageFilter = null;
	this.discardButton = null;
	this.$noResultsMessage = null;
	this.onDocumentMouseUpHandler = this.onDocumentMouseUp.bind( this );
	this.init();
};

/**
 * Initialize the plugin.
 */
mw.cx.SourcePageSelector.prototype.init = function () {
	this.render();
	this.prefill();
	this.pageSelector.populateSuggestions();
	this.listen();
};

/**
 * Prefill the selector if values are passed as options.
 */
mw.cx.SourcePageSelector.prototype.prefill = function () {
	if ( this.options.sourceLanguage ) {
		this.languageFilter.setSourceLanguage( this.options.sourceLanguage );
	}

	if ( this.options.targetLanguage ) {
		this.languageFilter.setTargetLanguage( this.options.targetLanguage );
	}

	if ( this.options.sourceTitle ) {
		this.selectedSourcePage.setSourceTitle( this.options.sourceTitle );
		this.pageSelector.setValue( this.options.sourceTitle );
	}

	if ( this.options.targetTitle ) {
		this.selectedSourcePage.setTargetTitle( this.options.targetTitle );
	}

	if ( this.options.targetLanguage ) {
		// If all of the values are already present, show the dialog and initiate a validation.
		if ( this.options.sourceLanguage && this.options.sourceTitle ) {
			this.pageSelector.lookupChooseFirstItem = true;
			this.show();
		} else if ( this.options.targetTitle ) {
			this.show();
		}
	}
};

/**
 * Listen for events.
 */
mw.cx.SourcePageSelector.prototype.listen = function () {
	var proxied;
	// Open or close the dialog when clicking the trigger link.
	// The dialog will be uninitialized until the first click.
	this.triggerButton.connect( this, {
		click: this.show
	} );

	this.pageSelector.connect( this, { noResults: 'updateNoResultsMessage' } );

	this.languageFilter.on( 'resize', this.pageSelector.positionLabel.bind( this.pageSelector ) );

	this.discardButton.connect( this, { click: 'discardDialog' } );
	this.pageSelector.onLookupMenuChoose = function ( source ) {
		this.selectedSourcePage.setData(
			source.getData(),
			source.$label.prop( 'href' ),
			{
				numOfLanguages: source.getNumberOfLanguages(),
				imageUrl: source.imageUrl,
				imageIcon: source.icon,
				sourceLanguage: this.languageFilter.getSourceLanguage(),
				targetLanguage: this.languageFilter.getTargetLanguage()
			}
		);
		this.$container.addClass( 'cx-source-page-selector--selected' );
		this.selectedSourcePage.focusStartTranslationButton();
	}.bind( this );

	this.$container.on( 'keydown', function ( e ) {
		if ( e.keyCode !== OO.ui.Keys.ESCAPE ) {
			return;
		}

		this.discardDialog();
	}.bind( this ) );

	proxied = this.pageSelector.lookupMenu.onDocumentKeyDownHandler;
	this.pageSelector.lookupMenu.onDocumentKeyDownHandler = function ( e ) {
		if ( e.keyCode === OO.ui.Keys.TAB || e.keyCode === OO.ui.Keys.ESCAPE ) {
			return;
		}

		return proxied.apply( this, arguments );
	};
};

/**
 * Handle the document mouse up handler
 *
 * @param {boolean} bind Bind the mouse up handler, otherwise unbind
 */
mw.cx.SourcePageSelector.prototype.toggleMouseUpHandler = function ( bind ) {
	if ( bind ) {
		document.addEventListener( 'mouseup', this.onDocumentMouseUpHandler, true );
	} else {
		document.removeEventListener( 'mouseup', this.onDocumentMouseUpHandler, true );
	}
};

/**
 * Handles document mouse up events.
 *
 * Mimics OO.ui.MenuSelectWidget
 * Usually this would be a mouse *down* handler, but as it causes a change
 * in the page height we use mouseup to avoid buttons moving in the middle
 * of a mouse click.
 *
 * @param {MouseEvent} e Mouse up event
 */
mw.cx.SourcePageSelector.prototype.onDocumentMouseUp = function ( e ) {
	if (
	// Ignore clicks inside the selector and its lookupMenu & ULS popups
		!OO.ui.contains(
			this.pageSelector.lookupMenu.$element.add( this.$container ).get(),
			e.target,
			true
		) &&
			!$( e.target ).closest( '.uls-menu' ).length
	) {
		this.discardDialog();
	}
};

/**
 * Updates the message displayed when there are no search results
 */
mw.cx.SourcePageSelector.prototype.updateNoResultsMessage = function () {
	var message = mw.msg( 'cx-source-page-selector-no-search-results',
		this.pageSelector.getQueryValue(),
		$.uls.data.getAutonym( this.languageFilter.getSourceLanguage() )
	);

	this.$noResultsMessage.text( message );
};

/**
 * Handles source language change.
 *
 * @param {string} language Language code.
 */
mw.cx.SourcePageSelector.prototype.sourceLanguageChangeHandler = function ( language ) {
	this.pageSelector.setLanguage( language );

	this.pageSelector.toggle( true );
	this.getExcludedSourceNamespaces( language )
		.then( this.pageSelector.setExcludedNamespaces.bind( this.pageSelector ) );
};

/**
 * Handles target language change.
 *
 * @param {string} language Language code.
 */
mw.cx.SourcePageSelector.prototype.targetLanguageChangeHandler = function ( language ) {
	this.pageSelector.setTargetLanguage( language );
};

/**
 * Show the SourcePageSelector.
 */
mw.cx.SourcePageSelector.prototype.show = function () {
	this.pageSelector.populateLookupMenu();
	this.pageSelector.lookupMenu.toggle( true );
	// FIXME: Use CSS transition
	// eslint-disable-next-line no-jquery/no-slide
	this.$container.slideDown( 'fast' );
	this.pageSelector.focus();
	this.pageSelector.positionLabel();
	this.toggleMouseUpHandler( true );
};

mw.cx.SourcePageSelector.prototype.resetDialog = function () {
	// FIXME: Use CSS transition
	// eslint-disable-next-line no-jquery/no-slide
	$( '.translation-filter' ).slideDown( 'fast' );
	this.$container.removeClass( 'cx-source-page-selector--selected' ).toggle();
	this.toggleMouseUpHandler( false );

	this.pageSelector.setValue( '' );
};

mw.cx.SourcePageSelector.prototype.discardDialog = function () {
	this.selectedSourcePage.discardDialog();
};

mw.cx.SourcePageSelector.prototype.render = function () {
	var $searchResults, $noSuggestionsMessage;

	this.$container.hide(); // Starts as hidden, shown on this.triggerButton click

	$noSuggestionsMessage = $( '<div>' )
		.addClass( 'cx-source-page-selector__no-suggestions-message' )
		.text( mw.msg( 'cx-source-page-selector-no-suggestions' ) );

	this.$noResultsMessage = $( '<div>' )
		.addClass( 'cx-source-page-selector__search-message' );

	$searchResults = $( '<div>' )
		.addClass( 'cx-source-page-selector__search-results' )
		.append( $noSuggestionsMessage, this.$noResultsMessage );

	this.languageFilter = new mw.cx.ui.LanguageFilter( {
		onSourceLanguageChange: this.sourceLanguageChangeHandler.bind( this ),
		onTargetLanguageChange: this.targetLanguageChangeHandler.bind( this ),
		updateLocalStorage: true
	} );

	this.discardButton = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'close',
		classes: [ 'cx-source-page-selector__discard' ]
	} );

	this.pageSelector = new mw.cx.ui.PageSelectorWidget( {
		classes: [ 'cx-source-page-selector__page-title' ],
		language: this.languageFilter.getSourceLanguage(),
		targetLanguage: this.languageFilter.getTargetLanguage(),
		siteMapper: this.siteMapper,
		value: this.options.sourceTitle,
		validateTitle: false,
		placeholder: mw.msg( 'cx-source-page-selector-input-placeholder' ),
		allowSuggestionsWhenEmpty: true,
		showRedirectTargets: true,
		$overlay: $searchResults,
		$container: $searchResults,
		label: this.languageFilter.$element.add( this.discardButton.$element )
	} );

	this.selectedSourcePage = new mw.cx.SelectedSourcePage( this.siteMapper, {
		onDiscard: this.resetDialog.bind( this )
	} );

	this.$container.append(
		this.pageSelector.$element,
		$searchResults,
		this.selectedSourcePage.$element
	);

	this.getExcludedSourceNamespaces( this.languageFilter.getSourceLanguage() )
		.then( this.pageSelector.setExcludedNamespaces.bind( this.pageSelector ) );
};

/**
 * @param {string} sourceLanguage
 * @return {jQuery.Promise}
 */
mw.cx.SourcePageSelector.prototype.getExcludedSourceNamespaces = function ( sourceLanguage ) {
	var excludedNamespacesConfig = Object.keys(
		mw.config.get( 'wgContentTranslationExcludedNamespaces' ) || {}
	);

	return this.siteMapper.getApi( sourceLanguage ).get( {
		action: 'query',
		meta: 'siteinfo',
		siprop: 'namespaces'
	} ).then( function ( response ) {
		var isTalkPage, namespaceId, namespaceObj, excludedNamespaces = [];

		for ( namespaceId in response.query.namespaces ) {
			namespaceObj = response.query.namespaces[ namespaceId ];
			// Odd namespace ids are talk pages
			isTalkPage = ( namespaceId > 0 && namespaceId % 2 === 1 );
			if ( isTalkPage ||
				excludedNamespacesConfig.indexOf( namespaceObj.canonical ) >= 0
			) {
				// Exclude both the canonical name and localized name.
				excludedNamespaces.push( namespaceObj.canonical );
				excludedNamespaces.push( namespaceObj[ '*' ] );
			}
		}

		return excludedNamespaces;
	} );
};
