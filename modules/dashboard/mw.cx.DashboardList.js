/*!
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
'use strict';

/**
 * @class
 * @constructor
 * @abstract
 *
 * @param {jQuery} $container The container for this suggestion list
 * @param {mw.cx.SiteMapper} siteMapper
 */
mw.cx.DashboardList = function ( $container, siteMapper ) {
	this.$container = $container;
	this.siteMapper = siteMapper;

	this.$headerContainer = null;
	this.$listContainer = null;
	this.$loadingIndicatorSpinner = null;
	this.languageFilter = null;
	this.pendingRequests = 0;
	this.active = false;

	this.init();
	this.listen();
};

/* Initialization */

OO.initClass( mw.cx.DashboardList );

/* Static properties */

mw.cx.DashboardList.static.lostSessionTitle = OO.ui.deferMsg( 'cx-lost-session' );
mw.cx.DashboardList.static.lostSessionMessage = OO.ui.deferMsg( 'cx-lost-session-dashboard' );

/* Static methods */

/**
 * Display the modal dialog that lets the user know session has expired.
 * Login button is provided and no other action can be taken before user logs in again.
 */
mw.cx.DashboardList.static.showLoginDialog = function () {
	OO.ui.getWindowManager().openWindow( 'message', {
		title: this.lostSessionTitle,
		message: this.lostSessionMessage,
		actions: [
			{ action: 'login', label: mw.msg( 'login' ), flags: [ 'primary', 'progressive' ] }
		]
	} ).closed.then( function () {
		location.href = mw.cx.getLoginHref();
	} );
};

/* Methods */

mw.cx.DashboardList.prototype.show = function () {
	this.active = true;
	this.$listContainer.show();
};

mw.cx.DashboardList.prototype.hide = function () {
	this.active = false;
	this.$listContainer.hide();
};

mw.cx.DashboardList.prototype.init = function ( languageFilterConfig ) {
	this.languageFilter = new mw.cx.ui.LanguageFilter( $.extend( {
		onSourceLanguageChange: this.applyFilters.bind( this ),
		onTargetLanguageChange: this.applyFilters.bind( this )
	}, languageFilterConfig ) );

	this.$loadingIndicatorSpinner = $( '<div>' )
		.addClass( 'cx-dashboardlist__loading-indicator' )
		.append( mw.cx.widgets.spinner() );

	this.$listContainer = $( '<div>' );
	this.$container.append( this.$listContainer );
};

mw.cx.DashboardList.prototype.listen = function () {
	$( window ).on( 'scroll', OO.ui.throttle( this.scrollHandler.bind( this ), 250 ) );
};

mw.cx.DashboardList.prototype.scrollHandler = function () {
	if ( !this.active ) {
		return;
	}

	this.onScroll();
};

/**
 * Get the details for pages with given titles.
 *
 * @param {string} language The language of the title.
 * @param {string[]} titles Title
 * @return {jQuery.Promise}
 */
mw.cx.DashboardList.prototype.getPageDetails = function ( language, titles ) {
	return this.siteMapper.getApi( language ).get( {
		action: 'query',
		titles: titles,
		prop: this.getPageProps(),
		piprop: 'thumbnail',
		pilimit: 50, // maximum
		pithumbsize: 100,
		redirects: true
	} );

	// TODO: Handle continue
};

/**
 * Show a title image and description based on source title.
 *
 * @param {Object} list
 */
mw.cx.DashboardList.prototype.showTitleDetails = function ( list ) {
	var apply, language, processPageDetails,
		queries = {},
		map = {};

	list.forEach( function ( item ) {
		var language = this.siteMapper.getWikiDomainCode( item.sourceLanguage ),
			title = item.sourceTitle || item.title;

		queries[ language ] = queries[ language ] || [];
		queries[ language ].push( title );

		// So that we can easily find the element in the callback
		// Same source title might be translated to multiple languages.
		map[ title ] = map[ title ] || [];
		map[ title ].push( item );
	}, this );

	apply = function ( page ) {
		if ( !map[ page.title ] ) {
			return;
		}

		map[ page.title ].forEach( function ( item ) {
			if ( page.thumbnail ) {
				item.$image.removeClass( 'oo-ui-icon-article' )
					.css( 'background-image', 'url(' + page.thumbnail.source + ')' );
			}

			if ( page.description ) {
				item.$desc.text( page.description ).show();
			}
		} );
	};

	processPageDetails = function ( response ) {
		var pageId, page,
			redirects = response.query.redirects || [],
			redirectsTo = {},
			pages = response.query.pages;

		redirects.forEach( function ( redirect ) {
			redirectsTo[ redirect.to ] = redirect.from;
		} );

		for ( pageId in pages ) {
			page = pages[ pageId ];
			page.title = redirectsTo[ page.title ] || page.title;
			apply( page );
		}
	};

	for ( language in queries ) {
		this.getPageDetails( language, queries[ language ] ).done( processPageDetails );
	}
};

/* Abstract methods */

/**
 * Page properties which need to be fetched in this.getPageDetails
 *
 * @method
 * @abstract
 * @return {string[]}
 */
mw.cx.DashboardList.prototype.getPageProps = null;

/**
 * @method
 * @abstract
 */
mw.cx.DashboardList.prototype.applyFilters = null;

/**
 * @method
 * @abstract
 */
mw.cx.DashboardList.prototype.onScroll = null;
