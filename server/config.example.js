'use strict';

module.exports = {
	port: 8000,
	pageloaderservice: 'parsoid',
	pageloaderservices: {
		parsoid: {
			api: 'http://parsoid-lb.eqiad.wikimedia.org'
		},
		mediawiki: {
			api: 'http://en.wikipedia.org/w/api.php'
		}
	}
};
