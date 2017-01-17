/**
 * ContentTranslation Link request cache
 *
 * This is a copy of LinkCache class from VE. When CX is fully
 * integrated with VE, we can reuse VE class directly and override
 * the getRequestPromise method to use siteMapper
 */

'use strict';
/**
 * Caches information about titles.
 *
 * @class
 * @extends mw.cx.ApiResponseCache
 * @constructor
 * @param {Object} config Configuration
 */
mw.cx.LinkCache = function CXLinkCache( config ) {
	mw.cx.LinkCache.super.call( this, config );

	// Keys are page names, values are link data objects
	// This is kept for synchronous retrieval of cached values via #getCached
	this.cacheValues = {};
};

/* Inheritance */

OO.inheritClass( mw.cx.LinkCache, mw.cx.ApiResponseCache );

/* Static methods */

/**
 * Get the icon name to use for a particular link type
 *
 * @param {Object} linkData Link data
 * @return {string} Icon name
 */
mw.cx.LinkCache.static.getIconForLink = function ( linkData ) {
	if ( linkData.missing ) {
		return 'page-not-found';
	}
	if ( linkData.redirect ) {
		return 'page-redirect';
	}
	if ( linkData.disambiguation ) {
		return 'page-disambiguation';
	}
	return 'page-existing';
};

/**
 * @inheritdoc
 */
mw.cx.LinkCache.static.processPage = function ( page ) {
	return {
		missing: page.missing !== undefined,
		known: page.known !== undefined,
		redirect: page.redirect !== undefined,
		disambiguation: OO.getProp( page, 'pageprops', 'disambiguation' ) !== undefined,
		imageUrl: OO.getProp( page, 'thumbnail', 'source' ),
		description: OO.getProp( page, 'terms', 'description' )
	};
};

/* Methods */

/**
 * Requests information about the title, then adds classes to the provided element as appropriate.
 *
 * @param {string} title
 * @param {jQuery} $element Element to style
 */
mw.cx.LinkCache.prototype.styleElement = function ( title, $element ) {
	var promise,
		cachedMissingData = this.getCached( '_missing/' + title );

	// Use the synchronous missing link cache data if it exists
	if ( cachedMissingData ) {
		promise = $.Deferred().resolve( cachedMissingData ).promise();
	} else {
		promise = this.get( title );
	}

	promise.done( function ( data ) {
		if ( data.missing && !data.known ) {
			$element.addClass( 'new' );
		} else {
			// Provided by core MediaWiki, no styles by default.
			if ( data.redirect ) {
				$element.addClass( 'mw-redirect' );
			}
			// Provided by the Disambiguator extension, no styles by default.
			if ( data.disambiguation ) {
				$element.addClass( 'mw-disambig' );
			}
		}
	} );
};

/**
 * Enable or disable automatic assumption of existence.
 *
 * While enabled, any get() for a title that's not already in the cache will return
 * { missing: false } and write that to the cache.
 *
 * @param {boolean} assume Assume all uncached titles exist
 */
mw.cx.LinkCache.prototype.setAssumeExistence = function ( assume ) {
	this.assumeExistence = !!assume;
};

/**
 * Set link missing data
 *
 * Stored separately from the full link data cache
 *
 * @param {Object} entries Object keyed by page title, with the values being data objects
 */
mw.cx.LinkCache.prototype.setMissing = function ( entries ) {
	var name, missingEntries = {};
	for ( name in entries ) {
		missingEntries[ '_missing/' + name ] = entries[ name ];
	}
	this.set( missingEntries );
};

/**
 * @inheritdoc
 */
mw.cx.LinkCache.prototype.get = function ( title ) {
	var data = {};
	if ( this.assumeExistence ) {
		data[ this.constructor.static.normalizeTitle( title ) ] = { missing: false };
		this.setMissing( data );
	}

	// Parent method
	return mw.cx.LinkCache.super.prototype.get.call( this, title );
};

/**
 * @inheritdoc
 */
mw.cx.LinkCache.prototype.getRequestPromise = function ( subqueue ) {
	// We use post here because the titles when joined will result a longer string
	// that GET requests cannot process sometimes.
	return this.siteMapper.getApi( this.language ).post( {
		action: 'query',
		prop: 'info|pageprops|pageimages|pageterms',
		pithumbsize: 80,
		pilimit: subqueue.length,
		wbptterms: 'description',
		ppprop: 'disambiguation',
		titles: subqueue.join( '|' ),
		'continue': ''
	} );
};
