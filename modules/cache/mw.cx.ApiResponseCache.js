/*!
 * ContentTranslation ApiResponseCache class.
 * This is a copy of ApiResponseCache class from VE.
 * When CX is fully integrated with VE, we can reuse VE class directly
 */

'use strict';

/**
 * MediaWiki API batch queue.
 *
 * Used to queue up lists of items centrally to get information about in batches of requests.
 *
 * @class
 * @extends OO.EventEmitter
 * @constructor
 * @param {Object} config Configuration
 */
mw.cx.ApiResponseCache = function CXMwApiResponseCache( config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );

	this.siteMapper = config.siteMapper;
	// Keys are titles, values are deferreds
	this.deferreds = {};

	this.language = config.language;
	// Keys are page names, values are link data objects
	// This is kept for synchronous retrieval of cached values via #getCached
	this.cacheValues = {};

	// Array of page titles queued to be looked up
	this.queue = [];

	this.schedule = OO.ui.debounce( this.processQueue.bind( this ), 0 );
};

/* Inheritance */

OO.mixinClass( mw.cx.ApiResponseCache, OO.EventEmitter );

/* Static methods */

/**
 * Process each page in the response of an API request
 *
 * @abstract
 * @static
 * @method
 * @param {Object} page The page object
 * @return {Object|undefined} Any relevant info that we want to cache and return.
 */
mw.cx.ApiResponseCache.static.processPage = null;

/**
 * Normalize the title of the response
 *
 * @param {string} title Title
 * @return {string} Normalized title
 */
mw.cx.ApiResponseCache.static.normalizeTitle = function ( title ) {
	const titleObj = mw.Title.newFromText( title );
	if ( !titleObj ) {
		return title;
	}
	return titleObj.getPrefixedText();
};

/* Methods */

/**
 * Look up data about a title. If the data about this title is already in the cache, this
 * returns an already-resolved promise. Otherwise, it returns a pending promise and schedules
 * an request to retrieve the data.
 *
 * @param {string} title Title
 * @return {jQuery.Promise} Promise that will be resolved with the data once it's available
 */
mw.cx.ApiResponseCache.prototype.get = function ( title ) {
	if ( typeof title !== 'string' ) {
		// Don't bother letting things like undefined or null make it all the way through,
		// just reject them here. Otherwise they'll cause problems or exceptions at random
		// other points in this file.
		return $.Deferred().reject().promise();
	}
	title = this.constructor.static.normalizeTitle( title );
	if ( !Object.prototype.hasOwnProperty.call( this.deferreds, title ) ) {
		this.deferreds[ title ] = $.Deferred();
		this.queue.push( title );
		this.schedule();
	}
	return this.deferreds[ title ].promise();
};

/**
 * Look up data about a page in the cache. If the data about this page is already in the cache,
 * this returns that data. Otherwise, it returns undefined.
 *
 * @param {string} name Normalized page title
 * @return {Object|undefined} Cache data for this name.
 */
mw.cx.ApiResponseCache.prototype.getCached = function ( name ) {
	if ( Object.prototype.hasOwnProperty.call( this.cacheValues, name ) ) {
		return this.cacheValues[ name ];
	}
};

/**
 * Fired when a new entry is added to the cache.
 *
 * @event add
 * @param {Object} entries Cache entries that were added. Object mapping names to data objects.
 */

/**
 * Add entries to the cache. Does not overwrite already-set entries.
 *
 * @param {Object} entries Object keyed by page title, with the values being data objects
 * @fires add
 */
mw.cx.ApiResponseCache.prototype.set = function ( entries ) {
	for ( const name in entries ) {
		if ( !Object.prototype.hasOwnProperty.call( this.deferreds, name ) ) {
			this.deferreds[ name ] = $.Deferred();
		}
		if ( this.deferreds[ name ].state() === 'pending' ) {
			this.deferreds[ name ].resolve( entries[ name ] );
			this.cacheValues[ name ] = entries[ name ];
		}
	}
	this.emit( 'add', Object.keys( entries ) );
};

/**
 * Get an API request promise to deal with a list of titles
 *
 * @abstract
 * @method
 * @param subqueue
 * @return {jQuery.Promise}
 */
mw.cx.ApiResponseCache.prototype.getRequestPromise = null;

/**
 * Perform any scheduled API requests.
 *
 * @private
 * @fires add
 */
mw.cx.ApiResponseCache.prototype.processQueue = function () {
	const cache = this;

	function rejectSubqueue( rejectQueue ) {
		for ( let i = 0, len = rejectQueue.length; i < len; i++ ) {
			cache.deferreds[ rejectQueue[ i ] ].reject();
		}
	}

	function processResult( data ) {
		const pages = ( data.query && data.query.pages ) || data.pages,
			processed = {};

		const redirects = data.query.redirects || {};
		if ( pages ) {
			for ( const pageid in pages ) {
				const page = pages[ pageid ];
				const processedPage = cache.constructor.static.processPage( page, redirects );
				if ( processedPage !== undefined ) {
					processed[ page.title ] = processedPage;
				}
				for ( const i in redirects ) {
					// Locate the title in redirects, if any.
					if ( redirects[ i ].to === page.title ) {
						processed[ redirects[ i ].from ] = processedPage;
						break;
					}
				}
			}
			cache.set( processed );
		}
	}

	const queue = this.queue;
	this.queue = [];
	while ( queue.length ) {
		const subqueue = queue.splice( 0, 50 ).map( this.constructor.static.normalizeTitle );
		this.getRequestPromise( subqueue )
			.then( processResult )

			// Reject everything in subqueue; this will only reject the ones
			// that weren't already resolved above, because .reject() on an
			// already resolved Deferred is a no-op.
			.then( rejectSubqueue.bind( null, subqueue ) );
	}
};
