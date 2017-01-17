/**
 * ContentTranslation Image request cache
 *
 * This is a copy of ImageInfoCache class from VE. When CX is fully
 * integrated with VE, we can reuse VE class directly and override
 * the getRequestPromise method to use siteMapper
 */
'use strict';

/**
 * Get information about images.
 *
 * @class
 * @extends mw.cx.ApiResponseCache
 * @constructor
 * @param {Object} config Configuration
 */
mw.cx.ImageInfoCache = function CXMwImageInfoCache( config ) {
	mw.cx.ImageInfoCache.super.call( this, config );
};

/* Inheritance */

OO.inheritClass( mw.cx.ImageInfoCache, mw.cx.ApiResponseCache );

/* Static methods */

/**
 * @inheritdoc
 */
mw.cx.ImageInfoCache.static.processPage = function ( page ) {
	if ( page.imageinfo ) {
		return page.imageinfo[ 0 ];
	}
};

/* Methods */

/**
 * @inheritdoc
 */
mw.cx.ImageInfoCache.prototype.getRequestPromise = function ( subqueue ) {
	// We use POST request here because the titles, if many of them, will result
	// in a URL that is too long for a GET request.
	return this.siteMapper.getApi( this.language ).post(
		{
			action: 'query',
			prop: 'imageinfo',
			indexpageids: '1',
			iiprop: 'size|mediatype',
			titles: subqueue.join( '|' )
		}
	);
};
