/**
 * Loads html for pages to translate form Parsoid service
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

'use strict';

var request = require( 'request' ),
	Q = require( 'q' );

/**
 * @class ParsoidPageLoader
 */
function ParsoidPageLoader( host, wikiId ) {
	this.host = host;
	this.wikiId = wikiId;
}

ParsoidPageLoader.prototype.load = function ( documentId ) {
	var deferred = Q.defer();

	request(
		this.host + '/' + this.wikiId + '/' + documentId,
		function ( error, response, body ) {
			if ( error ) {
				deferred.reject( error );
			}

			if ( response.statusCode !== 200 ) {
				deferred.reject( response.statusCode );
			}

			deferred.resolve( body );
		}
	);

	return deferred.promise;
};

module.exports.ParsoidPageLoader = ParsoidPageLoader;
