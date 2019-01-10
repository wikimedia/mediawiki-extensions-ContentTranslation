/**
 * ContentTranslation Title pair request cache
 *
 */

'use strict';

/**
 * Caches information about title pairs.
 *
 * @class
 * @extends ve.init.mw.ApiResponseCache
 * @constructor
 * @param {Object} config Configuration
 */
mw.cx.TitlePairCache = function CXTitlePairCache( config ) {
	// Call parent constructor
	mw.cx.TitlePairCache.super.call( this, config.siteMapper.getApi( config.sourceLanguage ) );
	this.siteMapper = config.siteMapper;
	this.targetLanguage = config.targetLanguage;
	// Keys are page names, values are link data objects
	// This is kept for synchronous retrieval of cached values via #getCached
	this.cacheValues = {};
};

/* Inheritance */

OO.inheritClass( mw.cx.TitlePairCache, ve.init.mw.ApiResponseCache );

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.TitlePairCache.static.processPage = function ( page ) {
	return {
		sourceTitle: OO.getProp( page, 'title' ),
		targetTitle: OO.getProp( page, 'langlinks', 0, '*' ),
		missing: OO.getProp( page, 'langlinks', 0, '*' ) === undefined
	};
};

/**
 * @inheritdoc
 */
mw.cx.TitlePairCache.prototype.getRequestPromise = function ( subqueue ) {
	// We use post here because the titles when joined will result a longer string
	// that GET requests cannot process sometimes.
	return this.api.post( {
		action: 'query',
		prop: 'langlinks',
		lllimit: subqueue.length,
		lllang: this.siteMapper.getWikiDomainCode( this.targetLanguage ),
		titles: subqueue.join( '|' ),
		redirects: true,
		continue: ''
	} );
};
