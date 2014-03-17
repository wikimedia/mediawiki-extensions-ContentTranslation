/**
 * Loads html for pages to translate
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

'use strict';

var config;

try {
	// TODO: Have an example configuration file.
	config = require( __dirname + '/../config.js' );
} catch ( e ) {
	// TODO: define this configuration in betterway
	config = {
		pageloaderservice: 'parsoid',
		pageloaderservices: {
			parsoid: {
				api: 'http://parsoid.wmflabs.org'
			},
			mediawiki: {
				api: 'http://en.wikipedia.org/w/api.php'
			}
		}
	};
}

/**
 * @class ParsoidPageLoader
 */
function PageLoader( page ) {
	this.page = page;
}

PageLoader.prototype.load = function () {
	var loader, promise, ParsoidPageLoader, MediaWikiApiPageLoader, title;

	// FIXME This way of getting tile is not reliable
	title = this.page.split( '/' ).pop();
	if ( config.pageloaderservice === 'parsoid' ) {
		console.log( '[CX] Fetching the page ' + title + ' from ' + config.pageloaderservices.parsoid.api );
		ParsoidPageLoader = require( __dirname + '/ParsoidPageLoader.js' ).ParsoidPageLoader;
		// FIXME It should be possible to fetch articles from any wiki.
		loader = new ParsoidPageLoader( config.pageloaderservices.parsoid.api, 'enwiki' );
		promise = loader.load( title );
	}
	if ( config.pageloaderservice === 'mediawiki' ) {
		console.log( '[CX] Fetching the page ' + title + ' from ' + config.pageloaderservices.mediawiki.api );
		MediaWikiApiPageLoader = require( __dirname + '/MediaWikiApiPageLoader.js' )
			.MediaWikiApiPageLoader;
		loader = new MediaWikiApiPageLoader( config.pageloaderservices.mediawiki.api );
		promise = loader.load( title );
	}
	return promise;
};

module.exports.PageLoader = PageLoader;
