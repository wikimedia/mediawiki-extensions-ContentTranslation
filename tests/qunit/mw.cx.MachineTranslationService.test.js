'use strict';

QUnit.module( 'mw.cx.MachineTranslationService', QUnit.newMwEnvironment( {
	beforeEach: function () {
		this.server = this.sandbox.useFakeServer();
		this.server.respondImmediately = true;
		this.siteMapper = new mw.cx.SiteMapper();
	}
} ) );

QUnit.test( 'fetchProviders [Success with results]', function ( assert ) {
	this.server.respondWith( /list\/mt\/es\/ca/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );

	return new mw.cx.MachineTranslationService( 'es', 'ca', this.siteMapper )
		.fetchProviders()
		.then( function ( providers ) {
			assert.deepEqual( providers, [ 'Provider1', 'Provider2' ], 'Correct providers are returned' );
		} );
} );

QUnit.test( 'fetchProviders [Success without results]', function ( assert ) {
	this.server.respondWith( /list\/mt\/se\/ja/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{}'
	] );

	return new mw.cx.MachineTranslationService( 'se', 'ja', this.siteMapper )
		.fetchProviders()
		.then( function ( providers ) {
			assert.deepEqual( providers, [], 'Case of no providers is handled.' );
		} );
} );

QUnit.test( 'fetchProviders [Service is down]', function ( assert ) {
	this.server.respondWith( /list\/fi\/sv\/ca/, [
		500,
		{ 'Content-Type': 'text/html' },
		'Temporary failure'
	] );

	assert.rejects(
		new mw.cx.MachineTranslationService( 'fi', 'sv', this.siteMapper )
			.fetchProviders(),
		'Failure causes promise to be rejected'
	);
} );

QUnit.test( 'getSuggestedDefaultProvider [Success with results]', function ( assert ) {
	this.server.respondWith( /list\/mt\/source\/target/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );

	return new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getSuggestedDefaultProvider()
		.then( function ( provider ) {
			assert.strictEqual( provider, 'Provider1', 'The first provider is suggested.' );
		} );
} );

QUnit.test( 'getSuggestedDefaultProvider [Success without results]', function ( assert ) {
	this.server.respondWith( /list\/mt\/source\/target/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{}'
	] );

	return new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getSuggestedDefaultProvider()
		.then( function ( provider ) {
			assert.strictEqual( provider, null, 'If no providers, no suggested provider.' );
		} );
} );

QUnit.test( 'getSuggestedDefaultProvider [Success without source-mt in result]', function ( assert ) {
	this.server.respondWith( /list\/mt\/source\/target/, [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "source-mt", "Provider1", "Provider2" ] }'
	] );

	return new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getSuggestedDefaultProvider()
		.then( function ( provider ) {
			assert.strictEqual( provider, null, 'Source mt suggested by the server respected' );
		} );
} );
