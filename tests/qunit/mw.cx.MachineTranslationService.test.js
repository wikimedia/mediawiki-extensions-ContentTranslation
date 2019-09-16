'use strict';

QUnit.module( 'mw.cx.MachineTranslationService', QUnit.newMwEnvironment( {
	setup: function () {
		this.server = this.sandbox.useFakeServer();
		this.server.respondImmediately = true;
		this.siteMapper = new mw.cx.SiteMapper();
	}
} ) );

QUnit.test( 'fetchProviders', function ( assert ) {
	var
		done1 = assert.async(),
		done2 = assert.async(),
		done3 = assert.async();

	// Success with results
	this.server.respondWith( /list\/mt\/es\/ca/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );
	new mw.cx.MachineTranslationService( 'es', 'ca', this.siteMapper )
		.fetchProviders()
		.done( function ( providers ) {
			assert.deepEqual( providers, [ 'Provider1', 'Provider2' ], 'Correct providers are returned' );
		} )
		.fail( function () {
			assert.ok( false, 'Unexpected error' );
		} )
		.always( function () {
			done1();
		} );

	// Success without results
	this.server.respondWith( /list\/mt\/se\/ja/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{}'
	] );
	new mw.cx.MachineTranslationService( 'se', 'ja', this.siteMapper )
		.fetchProviders()
		.done( function ( providers ) {
			assert.deepEqual( providers, [], 'Case of no providers is handled.' );
		} )
		.fail( function () {
			assert.ok( false, 'Unexpected error' );
		} )
		.always( function () {
			done2();
		} );

	// Service is down
	this.server.respondWith( /list\/fi\/sv\/ca/, [
		500,
		{ 'Content-Type': 'text/html' },
		'Temporary failure'
	] );

	new mw.cx.MachineTranslationService( 'fi', 'sv', this.siteMapper )
		.fetchProviders()
		.done( function () {
			assert.ok( false, 'Unexpected success' );
		} )
		.fail( function () {
			assert.ok( true, 'Failure causes promise to be rejected' );
		} )
		.always( function () {
			done3();
		} );
} );

QUnit.test( 'getSuggestedDefaultProvider', function ( assert ) {
	var
		done1 = assert.async(),
		done2 = assert.async(),
		done3 = assert.async();

	// Success with results
	this.server.respondWith( /list\/mt\/source\/target/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );
	new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getSuggestedDefaultProvider()
		.done( function ( provider ) {
			assert.strictEqual( provider, 'Provider1', 'The first provider is suggested.' );
		} )
		.fail( function () {
			assert.ok( false, 'Unexpected error' );
		} )
		.always( function () {
			done1();
		} );

	// Success without results
	this.server.respondWith( /list\/mt\/source\/target/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{}'
	] );
	new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getSuggestedDefaultProvider()
		.done( function ( provider ) {
			assert.strictEqual( provider, null, 'If no providers, no suggested provider.' );
		} )
		.fail( function () {
			assert.ok( false, 'Unexpected error' );
		} )
		.always( function () {
			done2();
		} );

	// Success without source-mt in result
	this.server.respondWith( /list\/mt\/source\/target/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "source-mt", "Provider1", "Provider2" ] }'
	] );
	new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getSuggestedDefaultProvider()
		.done( function ( provider ) {
			assert.strictEqual( provider, null, 'Source mt suggested by the server respected' );
		} )
		.fail( function () {
			assert.ok( false, 'Unexpected error' );
		} )
		.always( function () {
			done3();
		} );
} );
