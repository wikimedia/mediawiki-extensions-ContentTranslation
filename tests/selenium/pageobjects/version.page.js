'use strict';

const Page = require( 'wdio-mediawiki/Page' );

// this is just a sample on how to create a page
class VersionPage extends Page {
	// this is just a sample on how to find an element
	get extension() { return $( '#mw-version-ext-other-examples' ); }

	// this is just a sample on how to open a page
	async open() {
		await super.openTitle( 'Special:Version' );
	}
}

module.exports = new VersionPage();
