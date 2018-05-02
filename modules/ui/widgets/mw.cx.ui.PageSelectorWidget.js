/*!
 * Content Translation UserInterface PageSelectorWidget class.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

'use strict';

/**
 * Creates an mw.cx.ui.PageSelectorWidget object.
 *
 * @class
 * @extends mw.cx.ui.PageSelectorWidget
 *
 * @constructor
 * @param {Object} config Configuration options
 * @cfg {mw.cx.SiteMapper} siteMapper Site mapper
 * @cfg {string} [language] Source language
 */
mw.cx.ui.PageSelectorWidget = function PageSelectorWidget( config ) {
	config = $.extend( {}, {
		namespace: mw.config.get( 'wgNamespaceIds' )[ '' ], // Main namespace
		limit: 5,
		showDescriptions: true,
		showImages: true,
		showMissing: false,
		addQueryInput: false,
		icon: 'search'
	}, config );

	// Parent constructor
	mw.cx.ui.PageSelectorWidget.super.call( this, config );

	this.siteMapper = config.siteMapper;
	this.language = config.language || 'en';
	if ( config.targetLanguage ) {
		this.setTargetLanguage( config.targetLanguage );
	}
	this.listen();

	// Initialization
	this.$element.addClass( 'mw-cx-ui-PageSelectorWidget' );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.PageSelectorWidget, mw.widgets.TitleInputWidget );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getApi = function () {
	return this.siteMapper.getApi( this.language );
};

mw.cx.ui.PageSelectorWidget.prototype.setLanguage = function ( language ) {
	this.language = language;
	this.setDir( $.uls.data.getDir( language ) );

	// Reset the requestCache of OO.ui.mixin.LookupElement
	this.requestCache = {};
	this.closeLookupMenu();

	// Reset the "no-results" and "has-suggestions" classes
	this.$overlay.removeClass( 'mw-cx-ui-PageSelectorWidget--no-results' );
	this.$overlay.removeClass( 'mw-cx-ui-PageSelectorWidget--has-suggestions' );

	this.populateSuggestions();
};

mw.cx.ui.PageSelectorWidget.prototype.setTargetLanguage = function ( language ) {
	this.targetLanguage = language;
};

mw.cx.ui.PageSelectorWidget.prototype.onChangeHandler = function () {
	this.$overlay.removeClass( 'mw-cx-ui-PageSelectorWidget--no-results' );
	this.$overlay.removeClass( 'mw-cx-ui-PageSelectorWidget--has-suggestions' );

	this.$overlay.toggleClass(
		'mw-cx-ui-PageSelectorWidget--input', !!this.getQueryValue()
	);
};

/**
 * Sets value for PageSelectorWidget and input element value,
 * without emitting 'change' event, therefore not triggering network call
 *
 * @param {string} value String input for PageSelectorWidget
 */
mw.cx.ui.PageSelectorWidget.prototype.setValueNoEmit = function ( value ) {
	value = this.cleanUpValue( value );

	if ( this.$input.val() !== value ) {
		this.$input.val( value );
	}

	if ( this.value !== value ) {
		this.value = value;
	}
};

mw.cx.ui.PageSelectorWidget.prototype.listen = function () {
	// Unbind event handlers so search results don't disappear when focus is lost
	this.$input.off( 'blur' );
	this.lookupMenu.onDocumentMouseDownHandler = function () {};
	// Disable width and height calculation for search results container
	this.lookupMenu.setIdealSize = function () {};

	this.connect( this, { change: 'onChangeHandler' } );
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionWidgetData = function ( title, data ) {
	// Parent method
	var optionWidgetData = mw.cx.ui.PageSelectorWidget.super.prototype.getOptionWidgetData.apply( this, arguments );

	// Correct the URL so that it can point to the source language wiki.
	optionWidgetData.url = this.siteMapper.getPageUrl( this.language, title );
	// If item is not missing, one language is added to get actual total number of languages
	optionWidgetData.numOfLanguages = !data.missing && ( OO.getProp( data.originalData, 'langlinkscount' ) || 0 ) + 1;
	optionWidgetData.missingInTargetLanguage = !OO.getProp( data.originalData, 'langlinks' );
	optionWidgetData.targetLanguage = this.targetLanguage;
	optionWidgetData.sourceLanguage = this.language;

	return optionWidgetData;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getApiParams = function () {
	// Parent method
	var params = mw.cx.ui.PageSelectorWidget.super.prototype.getApiParams.apply( this, arguments );

	params.prop.push( 'langlinks', 'langlinkscount' );
	params.lllang = this.targetLanguage;
	return params;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.createOptionWidget = function ( data ) {
	return new mw.cx.ui.TitleOptionWidget( data );
};

/**
 * Get option widgets and labels from the server response.
 * This method creates option widgets from suggested pages (when there is no user input) or
 * from search results (when there is user input).
 *
 * @param {Object} pages Query result
 * @return {Array} Array of OO.ui.OptionWidget menu items and mw.cx.ui.MenuLabelWidget labels
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionsFromData = function ( pages ) {
	var index, suggestionPage, page, optionsData, hasResults,
		nearbyPages = pages.nearby,
		recentEditPages = pages.recentEdits,
		pageData = {},
		items = [],
		self = this;

	// If there is user input, we execute parent method, process possible no results case and return early
	if ( this.getQueryValue() ) {
		optionsData = mw.cx.ui.PageSelectorWidget.super.prototype.getOptionsFromData.apply( this, arguments );
		hasResults = optionsData.length > 0;

		if ( !hasResults ) {
			this.emit( 'noResults' );
		}
		this.$overlay.toggleClass( 'mw-cx-ui-PageSelectorWidget--no-results', !hasResults );

		return optionsData;
	}

	// When there is no user input, we display two lists with suggestions: recently edited pages and nearby pages.
	// We need this specific override to keep the two lists separate, and prevent sorting by page index,
	// which happens in parent method. Even without the sorting in parent method, since data is passed
	// in objects, not arrays, the two separate lists could be mixed up, since ordering in JS objects
	// is not guaranteed.
	function processQueryResult( pages, label ) {
		if ( !pages ) {
			return false;
		}

		items.push( new mw.cx.ui.MenuLabelWidget( {
			label: label
		} ) );

		for ( index in pages ) {
			suggestionPage = pages[ index ];

			pageData[ suggestionPage.title ] = {
				disambiguation: OO.getProp( suggestionPage, 'pageprops', 'disambiguation' ) !== undefined,
				imageUrl: OO.getProp( suggestionPage, 'thumbnail', 'source' ),
				description: suggestionPage.description,
				originalData: suggestionPage
			};

			// Throw away pages from wrong namespaces. This can happen when 'showRedirectTargets' is true
			// and we encounter a cross-namespace redirect.
			if ( self.namespace === null || self.namespace === suggestionPage.ns ) {
				page = pageData[ suggestionPage.title ];
				items.push( self.createOptionWidget( self.getOptionWidgetData( suggestionPage.title, page ) ) );
			}
		}

		return true;
	}

	hasResults = processQueryResult(
		recentEditPages,
		mw.msg( 'cx-page-selector-widget-recent-edits-label' )
	);
	hasResults = processQueryResult(
		nearbyPages,
		mw.msg( 'cx-page-selector-widget-nearby-label' )
	) || hasResults;

	if ( !hasResults ) {
		this.emit( 'noResults' );
	}
	this.$overlay.toggleClass( 'mw-cx-ui-PageSelectorWidget--no-results', !hasResults );

	if ( this.cache ) {
		this.cache.set( pageData );
	}

	return items;
};

/**
 * Populates suggestions to display when search input field is empty.
 */
mw.cx.ui.PageSelectorWidget.prototype.populateSuggestions = function () {
	var self = this;

	if ( !this.allowSuggestionsWhenEmpty ) {
		return;
	}

	this.pushPending();
	$.when(
		this.getPageDetails(),
		this.getNearbyPages()
	).done( function ( recentEdits, nearby ) {
		var recentEditPages = OO.getProp( recentEdits, 'query', 'pages' ),
			nearbyPages = OO.getProp( nearby, 'query', 'pages' );

		self.requestCache[ '' ] = {
			nearby: nearbyPages,
			recentEdits: recentEditPages
		};
	} ).fail( function ( error ) {
		mw.log( 'Error getting page data. ' + error );
	} ).always( function () {
		self.populateLookupMenu();
		self.popPending();
	} );
};

/**
 * Get user geolocation coordinates using GeoIP or ULSGeo cookies.
 *
 * @return {string|null}
 */
mw.cx.ui.PageSelectorWidget.prototype.getUserCoordinates = function () {
	var geoIP = mw.cookie.get( 'GeoIP', '' ), // GeoIP format: 'FI:Helsinki:60.1756:24.9342:v4'
		geoIPCoordsMatch = geoIP && geoIP.match( /\d+\.?\d*:\d+\.?\d*/g ),
		geoIPCoords = geoIPCoordsMatch && geoIPCoordsMatch[ 0 ].replace( ':', '|' ),
		ulsGeo = JSON.parse( mw.cookie.get( 'ULSGeo' ) ), // Outside Wikimedia, ULS stores geolocation info in 'ULSGeo' cookie
		ulsGeoCoords = ulsGeo && ( ulsGeo.latitude + '|' + ulsGeo.longitude );

	return geoIPCoords || ulsGeoCoords;
};

/**
 * Get the thumbnail image, description and langlinks count for pages geographically close to
 * user's physical location.
 *
 * @return {jQuery.Promise}
 */
mw.cx.ui.PageSelectorWidget.prototype.getNearbyPages = function () {
	var coords = this.getUserCoordinates();

	if ( !coords ) {
		// If we can't get user coordinates, use `$.when()` to create and return resolved promise.
		// We return resolved promise, because we don't want `$.when` in populateSuggestions() method
		// to fail if we don't have valid coordinates.
		return $.when();
	}

	return this.siteMapper.getApi( this.language ).get( {
		action: 'query',
		prop: [ 'pageimages', 'description', 'langlinks', 'langlinkscount' ],
		generator: 'geosearch',
		piprop: 'thumbnail',
		pithumbsize: 80,
		lllang: this.targetLanguage,
		ggscoord: coords,
		ggsradius: 1000, // Search radius in meters
		ggslimit: 3,
		ggsnamespace: mw.config.get( 'wgNamespaceIds' )[ '' ] // Main namespace
	} ).then( function ( data ) { return data; } );
};

/**
 * Get the thumbnail image, description and langlinks count for pages with the given titles.
 *
 * @return {jQuery.Promise}
 */
mw.cx.ui.PageSelectorWidget.prototype.getPageDetails = function () {
	var self = this;

	return this.getRecentlyEditedArticleTitles().then( function ( titles ) {
		return self.siteMapper.getApi( self.language ).get( {
			action: 'query',
			titles: titles,
			prop: [ 'pageimages', 'description', 'langlinks', 'langlinkscount' ],
			piprop: 'thumbnail',
			pilimit: 10,
			pithumbsize: 80,
			lllang: self.targetLanguage
		} ).then( function ( data ) { return data; } );
	}, function ( error ) {
		mw.log( 'Error getting recent edit titles. ' + error );
	} );
};

/**
 * Gets recently edited articles by user (using usercontribs API)
 *
 * @return {jQuery.Promise}
 */
mw.cx.ui.PageSelectorWidget.prototype.getRecentlyEditedArticleTitles = function () {
	var params, userName = mw.config.get( 'wgUserName' ),
		api = this.siteMapper.getApi( this.language );

	params = {
		action: 'query',
		list: [ 'usercontribs' ],
		ucuser: userName,
		uclimit: 3,
		ucnamespace: mw.config.get( 'wgNamespaceIds' )[ '' ], // Main namespace
		ucprop: 'title'
	};

	return api.get( params ).then( function ( data ) {
		var articles = OO.getProp( data, 'query', 'usercontribs' );

		if ( !articles ) {
			return $.Deferred().reject( 'No recent user contributions' ).promise();
		}

		return articles.map( function ( article ) {
			return article.title;
		} );
	}, function ( error ) {
		mw.log( 'Error getting recent edits for ' + userName + '. ' + error );
	} );
};
