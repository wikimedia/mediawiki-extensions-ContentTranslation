'use strict';

QUnit.module( 'mw.cx.MachineTranslationService', QUnit.newMwEnvironment( {
	beforeEach: function () {
		mw.config.set( 'wgContentTranslationEnableMT', true );
		this.server = this.sandbox.useFakeServer();
		this.server.respondImmediately = true;
		this.siteMapper = new mw.cx.SiteMapper();
	},

	stubFetch( url, [ status, headers, result ] ) {
		this.sandbox.stub( window, 'fetch' ).callsFake( ( input ) => {
			const responseHeaders = new Headers( headers );

			const body = typeof result === 'object' ? JSON.stringify( result ) : result;

			if ( input.includes( url ) ) {
				return Promise.resolve(
					new Response( body, {
						status,
						headers: responseHeaders
					} )
				);
			} else {
				return Promise.reject( new Error( `Unexpected fetch to ${ input }` ) );
			}
		} );
	}
} ) );

QUnit.test( 'fetchProviders [Success with results]', function ( assert ) {
	this.stubFetch( '/list/mt/es/ca', [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );

	return new mw.cx.MachineTranslationService( 'es', 'ca', this.siteMapper )
		.fetchProviders()
		.then( ( providers ) => {
			assert.deepEqual( providers, [ 'Provider1', 'Provider2' ], 'Correct providers are returned' );
		} );
} );

QUnit.test( 'fetchProviders [MT disabled]', function ( assert ) {
	mw.config.set( 'wgContentTranslationEnableMT', false );
	this.stubFetch( '/list/mt/es/ca', [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );

	return new mw.cx.MachineTranslationService( 'es', 'ca', this.siteMapper )
		.fetchProviders()
		.then( ( providers ) => {
			assert.deepEqual( providers, [], 'Empty providers when MT is disabled' );
		} );
} );

QUnit.test( 'fetchProviders [Success without results]', function ( assert ) {
	this.stubFetch( '/list/mt/se/ja', [
		200,
		{ 'Content-Type': 'application/json' },
		'{}'
	] );

	return new mw.cx.MachineTranslationService( 'se', 'ja', this.siteMapper )
		.fetchProviders()
		.then( ( providers ) => {
			assert.deepEqual( providers, [], 'Case of no providers is handled.' );
		} );
} );

QUnit.test( 'fetchProviders [Service is down]', function ( assert ) {
	this.stubFetch( '/list/mt/fi/sv', [
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

QUnit.test( 'getProviders [Success with results]', function ( assert ) {
	this.stubFetch( '/list/mt/source/target', [
		200,
		{ 'Content-Type': 'application/json' },
		'{ "mt": [ "Provider1", "Provider2" ] }'
	] );

	return new mw.cx.MachineTranslationService( 'source', 'target', this.siteMapper )
		.getProviders()
		.then( ( providers ) => {
			assert.deepEqual( providers, [ 'Provider1', 'Provider2' ], 'MT Providers are returned properly' );
		} );
} );
