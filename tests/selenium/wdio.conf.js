'use strict';

const { config } = require( 'wdio-mediawiki/wdio-defaults.conf.js' );

exports.config = {
	...config,
	services: [ 'intercept', ...( config.services || [] ) ]
	// Override, or add to, the setting from wdio-mediawiki.
	// Learn more at https://webdriver.io/docs/configurationfile/
	//
	// Example:
	// logLevel: 'info',
};
