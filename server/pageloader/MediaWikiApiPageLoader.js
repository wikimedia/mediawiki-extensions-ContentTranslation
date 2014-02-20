/**
 * Loads html for pages to translate via MediaWiki API
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

'use strict';

var request = require( 'request' ),
	Q = require( 'q' );

/**
 * @class MediaWikiApiPageLoader
 */
function MediaWikiApiPageLoader( api ) {
	this.api = api;
}

MediaWikiApiPageLoader.prototype.load = function ( documentId ) {
	var deferred = Q.defer();

	request(
		this.api + '?action=parse&format=json&page=' + encodeURIComponent( documentId ),
		function ( error, response, body ) {
			if ( error ) {
				deferred.reject( error );
			}

			if ( response.statusCode !== 200 ) {
				deferred.reject( response.statusCode );
			}

			deferred.resolve( JSON.parse( body ).parse.text['*'] );
		}
	);

	return deferred.promise;
};

module.exports.MediaWikiApiPageLoader = MediaWikiApiPageLoader;
