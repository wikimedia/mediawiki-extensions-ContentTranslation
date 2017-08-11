/**
 * ContentTranslation Category request cache
 *
 */

'use strict';
/**
 * Caches information about title pairs.
 *
 * @class
 * @extends mw.cx.ApiResponseCache
 * @constructor
 * @param {Object} config Configuration
 */
mw.cx.CategoryCache = function CXCategoryCache( config ) {
	// Call parent constructor
	mw.cx.CategoryCache.super.call( this, config );
	this.language = config.language;
	this.cacheValues = {};
};

/* Inheritance */

OO.inheritClass( mw.cx.CategoryCache, mw.cx.ApiResponseCache );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.CategoryCache.static.processPage = function ( page ) {
	return {
		categories: ( page.categories || [] ).map( function ( item ) {
			return item.title;
		} )
	};
};

/**
 * @inheritdoc
 */
mw.cx.CategoryCache.prototype.getRequestPromise = function ( subqueue ) {
	return this.siteMapper.getApi( this.language ).get( {
		formatversion: 2,
		action: 'query',
		prop: 'categories',
		clshow: '!hidden',
		cllimit: 100,
		titles: subqueue.join( '|' )
	} );
};
