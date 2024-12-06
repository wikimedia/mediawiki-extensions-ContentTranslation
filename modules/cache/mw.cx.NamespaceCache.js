/**
 * ContentTranslation Namespace request cache
 *
 */

'use strict';
/**
 * Caches namespace aliases in a language
 *
 * @class
 * @extends mw.cx.ApiResponseCache
 * @constructor
 * @param {Object} config Configuration
 */
mw.cx.NamespaceCache = function CXNamespaceCache( config ) {
	this.requestPromise = null;
	this.language = config.language;
	this.cacheValues = {};
	this.siteMapper = config.siteMapper;
};

/* Methods */

/**
 * Get the value from request or cached request
 *
 * @param {string} canonicalNamespace
 * @return {jQuery.Promise}
 */
mw.cx.NamespaceCache.prototype.get = function ( canonicalNamespace ) {
	return this.getRequestPromise().then( () => this.cacheValues[ canonicalNamespace ] );
};

mw.cx.NamespaceCache.prototype.processResponse = function ( response ) {
	for ( const namespaceId in response.query.namespaces ) {
		const namespaceObj = response.query.namespaces[ namespaceId ];
		this.cacheValues[ namespaceObj.canonical ] = namespaceObj[ '*' ];
	}
};

mw.cx.NamespaceCache.prototype.getRequestPromise = function () {
	this.requestPromise = this.requestPromise ||
		this.siteMapper.getApi( this.language ).get( {
			action: 'query',
			meta: 'siteinfo',
			siprop: 'namespaces'
		} ).then( ( response ) => {
			this.processResponse( response );
		} );
	return this.requestPromise;
};
