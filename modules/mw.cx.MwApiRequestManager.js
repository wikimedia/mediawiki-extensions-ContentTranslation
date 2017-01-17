/**
 * ContentTranslation MediaWiki API request manager class.
 *
 * This class abstracts API requests to MediaWiki instance for title, image,
 * template and such information. The caching of such requests is taken care.
 * Pagination, request queues are also implemented. The requests will be created
 * using SiteMapper so that source wiki, target wiki API end points are correctly
 * handled.
 *
 * This abstraction also helps to write unit tests. We can mock the network requests
 * by adding entries to the cache before running tests so that the real network
 * requests won't be initiated.
 */

'use strict';

/**
 * @class
 * @param {Object} config Configuration
 */
mw.cx.MwApiRequestManager = function MwApiRequestManager( config ) {
	this.sourceLanguage = config.sourceLanguage;
	this.targetLanguage = config.targetLanguage;
	this.siteMapper = config.siteMapper;
	this.linkCache = {};
	this.imageCache = {};
	this.titlePairCache = {};
};

/**
 * Initialize all caches.
 * @method
 */
mw.cx.MwApiRequestManager.prototype.init = function () {
	this.linkCache[ this.sourceLanguage ] = new mw.cx.LinkCache( {
		language: this.sourceLanguage,
		siteMapper: this.siteMapper
	} );
	this.linkCache[ this.targetLanguage ] = new mw.cx.LinkCache( {
		language: this.targetLanguage,
		siteMapper: this.siteMapper
	} );
	this.imageCache[ this.sourceLanguage ] = new mw.cx.ImageInfoCache( {
		language: this.sourceLanguage,
		siteMapper: this.siteMapper
	} );
	this.imageCache[ this.targetLanguage ] = new mw.cx.ImageInfoCache( {
		language: this.targetLanguage,
		siteMapper: this.siteMapper
	} );
	this.titlePairCache[ this.sourceLanguage ] = new mw.cx.TitlePairCache( {
		sourceLanguage: this.sourceLanguage,
		targetLanguage: this.targetLanguage,
		siteMapper: this.siteMapper
	} );
	this.titlePairCache[ this.targetLanguage ] = new mw.cx.TitlePairCache( {
		sourceLanguage: this.targetLanguage,
		targetLanguage: this.sourceLanguage,
		siteMapper: this.siteMapper
	} );
};

/**
 * Look up link data about a title. If the data about this title is already in the cache, this
 * returns an already-resolved promise. Otherwise, it returns a pending promise and schedules
 * an request to retrieve the data.
 *
 * @param {string} language Language code
 * @param {string} title Title
 * @return {jQuery.Promise} Promise that will be resolved with the data once it's available
 */
mw.cx.MwApiRequestManager.prototype.getLinkInfo = function ( language, title ) {
	if ( !this.linkCache[ language ] ) {
		throw Error( '[CX] LinkCache not initialized for ' + language );
	}
	return this.linkCache[ language ].get( title );
};

/**
 * Look up image data about a title. If the data about this title is already in the cache, this
 * returns an already-resolved promise. Otherwise, it returns a pending promise and schedules
 * an request to retrieve the data.
 *
 * @param {string} language Language code
 * @param {string} title Title
 * @return {jQuery.Promise} Promise that will be resolved with the data once it's available
 */
mw.cx.MwApiRequestManager.prototype.getImageInfo = function ( language, title ) {
	if ( !this.imageCache[ language ] ) {
		throw Error( '[CX] ImageCache not initialized for ' + language );
	}
	return this.imageCache[ language ].get( title );
};

/**
 * Look up image data about a title. If the data about this title is already in the cache, this
 * returns an already-resolved promise. Otherwise, it returns a pending promise and schedules
 * an request to retrieve the data.
 *
 * @param {string} language Language code
 * @param {string} title Title
 * @return {jQuery.Promise} Promise that will be resolved with the data once it's available
 */
mw.cx.MwApiRequestManager.prototype.getTitlePair = function ( language, title ) {
	if ( !this.titlePairCache[ language ] ) {
		throw Error( '[CX] TitlePairCache not initialized for ' + language );
	}
	return this.titlePairCache[ language ].get( title );
};
