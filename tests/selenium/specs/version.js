'use strict';

const assert = require( 'assert' ),
	// this is just a sample on how to use a page
	VersionPage = require( '../pageobjects/version.page' );

describe( 'ContentTranslation', function () {

	// this is just a sample test
	it( 'is configured correctly', function () {
		VersionPage.open();

		// this is just a sample assertion, checking if an element exists
		assert( VersionPage.extension.isExisting() );

	} );

} );
