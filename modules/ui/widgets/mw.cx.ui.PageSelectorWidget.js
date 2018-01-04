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
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionsFromData = function ( data ) {
	// Parent method
	var optionsData = mw.cx.ui.PageSelectorWidget.super.prototype.getOptionsFromData.call( this, data ),
		hasResults = optionsData.length > 0;

	if ( !hasResults ) {
		this.emit( 'noResults' );
	}
	this.$overlay.toggleClass( 'mw-cx-ui-PageSelectorWidget--no-results', !hasResults );
	// This could select the same elements as using :not() CSS selector with both
	// "mw-cx-ui-PageSelectorWidget--no-results" and "mw-cx-ui-PageSelectorWidget--input",
	// but the timing when those classes are added is making "Recently edited by you" label
	// visible until results are fetched from the server, which can take long time on slow networks
	this.$overlay.toggleClass( 'mw-cx-ui-PageSelectorWidget--has-suggestions', !this.getQueryValue() && hasResults );

	return optionsData;
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
	this.getPageDetails().done( function ( data ) {
		var pages = OO.getProp( data, 'query', 'pages' );

		self.requestCache[ '' ] = {
			pages: pages || {}
		};
		self.populateLookupMenu();
	} ).fail( function ( error ) {
		mw.log( 'Error getting page data. ' + error );
	} ).always( function () {
		self.popPending();
	} );
};

/**
 * Get the thumbnail image, description and langlinks count for articles with the given titles.
 *
 * @return {jQuery.Promise}
 */
mw.cx.ui.PageSelectorWidget.prototype.getPageDetails = function () {
	var self = this;

	return this.getRecentlyEditedArticleTitles().then( function ( titles ) {
		return self.siteMapper.getApi( self.language ).get( {
			action: 'query',
			titles: titles,
			prop: [ 'pageimages', 'pageterms', 'langlinks', 'langlinkscount' ],
			piprop: 'thumbnail',
			pilimit: 10,
			pithumbsize: 80,
			lllang: self.targetLanguage,
			wbptterms: [ 'description' ]
		} );
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
		uclimit: 5,
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
