/*!
* Content Translation UserInterface PageSelectorWidget class.
*
* @ingroup Extensions
* @copyright See AUTHORS.txt
* @license GPL-2.0+
*/

'use strict';

/**
 * Creates an mw.cx.ui.PageSelectorWidget object.
 *
 * @class
 * @extends mw.cx.ui.PageSelectorWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {number} [namespace] Namespace to prepend to queries. Defaults to main namespace.
 */
mw.cx.ui.PageSelectorWidget = function PageSelectorWidget( config ) {
	config = $.extend( {}, {
		namespace: mw.config.get( 'wgNamespaceIds' ).main,
		showDescriptions: true,
		showImages: true,
		icon: 'search'
	}, config );

	this.siteMapper = config.siteMapper;
	this.language = config.language || 'en';
	// Parent constructor
	mw.cx.ui.PageSelectorWidget.super.call( this, config );
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
};

mw.cx.ui.PageSelectorWidget.prototype.setTargetLanguage = function ( language ) {
	this.targetLanguage = language;
};

/**
 * @inheritdoc
 */
mw.cx.ui.PageSelectorWidget.prototype.getOptionWidgetData = function ( title, data ) {
	var optionWidgetData;

	// Mixin method
	optionWidgetData = mw.widgets.TitleWidget.prototype.getOptionWidgetData.call( this, title, data );
	// Correct the URL so that it can point to the source language wiki.
	optionWidgetData.url = this.siteMapper.getPageUrl( this.language, title );
	// If item is not missing, one language is added to get actual total number of languages
	optionWidgetData.numOfLanguages = !data.missing && ( data.langlinkscount || 0 ) + 1;
	optionWidgetData.missingInTargetLanguage = !data.langlinks;
	optionWidgetData.targetLanguage = this.targetLanguage;

	return optionWidgetData;
};

mw.cx.ui.PageSelectorWidget.prototype.getSuggestionsPromise = function () {
	var req,
		api = this.getApi(),
		query = this.getQueryValue(),
		widget = this,
		promiseAbortObject = { abort: function () {
			// Do nothing. This is just so OOUI doesn't break due to abort being undefined.
		} };

	// Set API URL to localhost for local testing of langlinks API
	// api.apiUrl = this.api.defaults.ajax.url;
	// api.defaults.ajax.url = this.api.defaults.ajax.url;

	if ( !mw.Title.newFromText( query ) ) {
		// Don't send invalid titles to the API.
		// Just pretend it returned nothing so we can show the 'invalid title' section
		return $.Deferred().resolve( {} ).promise( promiseAbortObject );
	}

	return this.getInterwikiPrefixesPromise().then( function ( interwikiPrefixes ) {
		var params,
			interwiki = query.substring( 0, query.indexOf( ':' ) );
		if (
			interwiki && interwiki !== '' &&
			interwikiPrefixes.indexOf( interwiki ) !== -1
		) {
			return $.Deferred().resolve( { query: {
				pages: [ {
					title: query
				} ]
			} } ).promise( promiseAbortObject );
		}
		params = {
			action: 'query',
			prop: [ 'info', 'pageprops', 'langlinks', 'langlinkscount' ],
			generator: 'prefixsearch',
			gpssearch: query,
			gpsnamespace: widget.namespace !== null ? widget.namespace : undefined,
			gpslimit: widget.limit,
			ppprop: 'disambiguation',
			lllang: widget.targetLanguage
		};
		if ( widget.showRedirectTargets ) {
			params.redirects = 1;
		}
		if ( widget.showImages ) {
			params.prop.push( 'pageimages' );
			params.pithumbsize = 80;
			params.pilimit = widget.limit;
		}
		if ( widget.showDescriptions ) {
			params.prop.push( 'pageterms' );
			params.wbptterms = 'description';
		}
		req = api.get( params );
		promiseAbortObject.abort = req.abort.bind( req );
		return req.then( function ( ret ) {
			if ( ret.query === undefined ) {
				ret = api.get( { action: 'query', titles: query } );
				promiseAbortObject.abort = ret.abort.bind( ret );
			}
			return ret;
		} );
	} ).promise( promiseAbortObject );
};

mw.cx.ui.PageSelectorWidget.prototype.getOptionsFromData = function ( data ) {
	var i, len, index, pageExists, pageExistsExact, suggestionPage, page, redirect, redirects,
		currentPageName = new mw.Title( mw.config.get( 'wgRelevantPageName' ) ).getPrefixedText(),
		items = [],
		titles = [],
		titleObj = mw.Title.newFromText( this.getQueryValue() ),
		redirectsTo = {},
		pageData = {};

	if ( data.redirects ) {
		for ( i = 0, len = data.redirects.length; i < len; i++ ) {
			redirect = data.redirects[ i ];
			redirectsTo[ redirect.to ] = redirectsTo[ redirect.to ] || [];
			redirectsTo[ redirect.to ].push( redirect.from );
		}
	}

	for ( index in data.pages ) {
		suggestionPage = data.pages[ index ];
		// When excludeCurrentPage is set, don't list the current page unless the user has type the full title
		if ( this.excludeCurrentPage && suggestionPage.title === currentPageName && suggestionPage.title !== titleObj.getPrefixedText() ) {
			continue;
		}
		pageData[ suggestionPage.title ] = {
			known: suggestionPage.known !== undefined,
			missing: suggestionPage.missing !== undefined,
			redirect: suggestionPage.redirect !== undefined,
			disambiguation: OO.getProp( suggestionPage, 'pageprops', 'disambiguation' ) !== undefined,
			imageUrl: OO.getProp( suggestionPage, 'thumbnail', 'source' ),
			description: OO.getProp( suggestionPage, 'terms', 'description' ),
			langlinkscount: suggestionPage.langlinkscount,
			langlinks: suggestionPage.langlinks,
			// Sort index
			index: suggestionPage.index
		};

		// Throw away pages from wrong namespaces. This can happen when 'showRedirectTargets' is true
		// and we encounter a cross-namespace redirect.
		if ( this.namespace === null || this.namespace === suggestionPage.ns ) {
			titles.push( suggestionPage.title );
		}

		redirects = redirectsTo[ suggestionPage.title ] || [];
		for ( i = 0, len = redirects.length; i < len; i++ ) {
			pageData[ redirects[ i ] ] = {
				missing: false,
				known: true,
				redirect: true,
				disambiguation: false,
				description: mw.msg( 'mw-widgets-titleinput-description-redirect', suggestionPage.title ),
				langlinks: suggestionPage.langlinks,
				// Sort index, just below its target
				index: suggestionPage.index + 0.5
			};
			titles.push( redirects[ i ] );
		}
	}

	titles.sort( function ( a, b ) {
		return pageData[ a ].index - pageData[ b ].index;
	} );

	// If not found, run value through mw.Title to avoid treating a match as a
	// mismatch where normalisation would make them matching (T50476)

	pageExistsExact = (
		Object.prototype.hasOwnProperty.call( pageData, this.getQueryValue() ) &&
		(
			!pageData[ this.getQueryValue() ].missing ||
			pageData[ this.getQueryValue() ].known
		)
	);
	pageExists = pageExistsExact || (
		titleObj &&
		Object.prototype.hasOwnProperty.call( pageData, titleObj.getPrefixedText() ) &&
		(
			!pageData[ titleObj.getPrefixedText() ].missing ||
			pageData[ titleObj.getPrefixedText() ].known
		)
	);

	if ( this.cache ) {
		this.cache.set( pageData );
	}

	// Offer the exact text as a suggestion if the page exists
	if ( pageExists && !pageExistsExact ) {
		titles.unshift( this.getQueryValue() );
		pageData[ this.getQueryValue() ] = pageData[ titleObj.getPrefixedText() ];
	}

	for ( i = 0, len = titles.length; i < len; i++ ) {
		page = pageData[ titles[ i ] ] || {};
		items.push( new mw.cx.ui.TitleOptionWidget( this.getOptionWidgetData( titles[ i ], page ) ) );
	}

	return items;
};
