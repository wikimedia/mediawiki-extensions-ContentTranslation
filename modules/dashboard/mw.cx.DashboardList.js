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
mw.cx.DashboardList.static.lostSessionMessage = OO.ui.deferMsg( 'cx-lost-session-dashboard-lists' );

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
};

mw.cx.DashboardList.prototype.hide = function () {
	this.active = false;
};

mw.cx.DashboardList.prototype.init = function ( languageFilterConfig ) {
	this.languageFilter = new mw.cx.ui.LanguageFilter( $.extend( {
		onSourceLanguageChange: this.applyFilters.bind( this ),
		onTargetLanguageChange: this.applyFilters.bind( this )
	}, languageFilterConfig ) );

	this.$loadingIndicatorSpinner = $( '<div>' )
		.addClass( 'cx-dashboardlist__loading-indicator' )
		.append( mw.cx.widgets.spinner() );
};

mw.cx.DashboardList.prototype.listen = function () {
	$( window ).scroll( $.throttle( 250, this.scrollHandler.bind( this ) ) );
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
	var apply, language, titles, pageId, page,
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
	}.bind( this ) );

	apply = function ( page ) {
		if ( !map[ page.title ] ) {
			return;
		}

		map[ page.title ].forEach( function ( item ) {
			if ( page.thumbnail ) {
				item.$image.removeClass( 'oo-ui-icon-page-existing' )
					.css( 'background-image', 'url(' + page.thumbnail.source + ')' );
			}

			if ( page.description ) {
				item.$desc.text( page.description ).show();
			}
		} );
	};

	for ( language in queries ) {
		titles = queries[ language ];

		// eslint-disable-next-line no-loop-func
		this.getPageDetails( language, titles ).done( function ( response ) {
			var redirects = response.query.redirects || [],
				pages = response.query.pages;

			for ( pageId in pages ) {
				page = pages[ pageId ];

				// eslint-disable-next-line no-loop-func
				redirects.forEach( function ( redirect ) {
					if ( redirect.to === page.title ) {
						page.title = redirect.from;
					}
				} );

				apply( page );
			}
		} );
	}
};

/* Abstract methods */

/**
 * Page properties which need to be fetched in this.getPageDetails
 *
 * @method
 * @abstract
 * @return {String[]}
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
