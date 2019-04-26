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
 * @param {string} sourceLanguage Language code
 * @param {string} targetLanguage Language code
 * @param {mw.cx.SiteMapper} siteMapper
 */
mw.cx.MwApiRequestManager = function MwCxMwApiRequestManager( sourceLanguage, targetLanguage, siteMapper ) {
	this.sourceLanguage = sourceLanguage;
	this.targetLanguage = targetLanguage;
	this.siteMapper = siteMapper;
	this.titlePairCache = {};
	this.categoryCache = {};
	this.namespaceCache = {};
	this.init();
};

/**
 * Initialize or reset all caches.
 */
mw.cx.MwApiRequestManager.prototype.init = function () {
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
	this.categoryCache[ this.sourceLanguage ] = new mw.cx.CategoryCache( {
		language: this.sourceLanguage,
		siteMapper: this.siteMapper
	} );
	this.categoryCache[ this.targetLanguage ] = new mw.cx.CategoryCache( {
		language: this.targetLanguage,
		siteMapper: this.siteMapper
	} );
	this.namespaceCache[ this.sourceLanguage ] = new mw.cx.NamespaceCache( {
		language: this.targetLanguage,
		siteMapper: this.siteMapper
	} );
	this.namespaceCache[ this.targetLanguage ] = new mw.cx.NamespaceCache( {
		language: this.targetLanguage,
		siteMapper: this.siteMapper
	} );
};

/**
 * Look up pairing data about a title. If the data about this title is already in the cache, this
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

/**
 * @param {string} language Language code
 * @param {string} title Title
 * @return {jQuery.Promise} Promise that will be resolved with the data once it's available
 */
mw.cx.MwApiRequestManager.prototype.getCategories = function ( language, title ) {
	if ( !this.categoryCache[ language ] ) {
		throw Error( '[CX] CategoryCache not initialized for ' + language );
	}
	return this.categoryCache[ language ].get( title );
};

/**
 * @param {string} language Language code
 * @param {string} canonicalNamespace Canonical namespace
 * @return {jQuery.Promise} Promise that will be resolved with the data once it's available
 */
mw.cx.MwApiRequestManager.prototype.getNamespaceAlias = function ( language, canonicalNamespace ) {
	if ( !this.namespaceCache[ language ] ) {
		throw Error( '[CX] namespaceCache not initialized for ' + language );
	}
	return this.namespaceCache[ language ].get( canonicalNamespace );
};
