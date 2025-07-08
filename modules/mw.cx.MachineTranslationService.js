/**
 * This class handles translating text and HTML using cxserver while taking
 * care of creating the requests, authorization etc.
 */

'use strict';

/**
 * @class
 * @param {string} sourceLanguage Language code
 * @param {string} targetLanguage Language code
 * @param {mw.cx.SiteMapper} siteMapper
 */
mw.cx.MachineTranslationService = function MwCxMachineTranslationService(
	sourceLanguage, targetLanguage, siteMapper
) {
	this.sourceLanguage = sourceLanguage;
	this.targetLanguage = targetLanguage;
	this.siteMapper = siteMapper;

	this.providers = null;
	this.fetchPromise = null;
};

/* Public methods */

/**
 * Translate a piece of text. The main entry point for this class.
 *
 * @param {string} content HTML to translate.
 * @param {string} provider Which provider to use.
 * @return {Promise<string>} Returns a Promise that resolves to the translated HTML as a string.
 */
mw.cx.MachineTranslationService.prototype.translate = function ( content, provider ) {
	if ( provider === 'source' ) {
		// Adapt without translation.
		return this.fetchTranslation( content );
	} else if ( provider === 'scratch' ) {
		return Promise.resolve( this.prepareContentForScratch( content ) );
	}

	return this.getCXServerToken().then(
		( token ) => this.fetchTranslation( content, provider, token )
	);
};

/**
 * Given a source page title, this method sends a request to the cxserver,
 * and more specifically to the /suggest/title endpoint, and it returns
 * the "targetTitle" property of the response as suggested target title
 *
 * @param {string} title Title to translate.
 * @return {jQuery.Promise} Returns the suggested title
 */
mw.cx.MachineTranslationService.prototype.getSuggestedTitle = function ( title ) {
	const mtURL = this.siteMapper.getCXServerUrl( '/suggest/title/$title/$from/$to', {
		$title: title,
		$from: this.sourceLanguage,
		$to: this.targetLanguage
	} );

	const fetchTitleSuggestion = function ( token ) {
		const request = {
			type: 'get',
			url: mtURL,
			headers: { Authorization: token }
		};

		return $.ajax( request ).then( ( response ) => response.targetTitle );
	};

	return this.getCXServerToken().then( fetchTitleSuggestion );
};

/**
 * Surgically empty a piece of content to enable translation from scratch.
 *
 * @param {string} content HTML
 * @return {string} HTML
 */
mw.cx.MachineTranslationService.prototype.prepareContentForScratch = function ( content ) {
	const $content = $( $.parseHTML( content ) );
	$content.children().each( function () {
		if ( $( this ).is( 'p, h1, h2, h3, h4, h5, h6' ) ) {
			$( this ).empty();
		} else {
			$( this ).remove();
		}
	} );

	if ( !$content.children().length ) {
		$content.append( $( '<p>' ) );
	}

	return $content.prop( 'outerHTML' );
};

/**
 * Get a list of available machine translation providers.
 *
 * @return {Promise<string[]>}
 */
mw.cx.MachineTranslationService.prototype.getProviders = function () {
	if ( this.providers !== null ) {
		return Promise.resolve( this.providers );
	}

	this.fetchPromise = this.fetchPromise || this.fetchProviders();

	return this.fetchPromise.then( ( providers ) => {
		this.providers = providers;

		return this.providers;
	} ).catch( ( error ) => {
		mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch machine translation providers.' );
		mw.log.error( '[CX]', 'Unable to fetch machine translation providers.', error );
	} );
};

/* Private methods */

/**
 * Fetch available providers from cxserver.
 *
 * @private
 * @return {Promise<string[]>}
 */
mw.cx.MachineTranslationService.prototype.fetchProviders = function () {
	if ( !mw.config.get( 'wgContentTranslationEnableMT' ) ) {
		// MT services are not enabled for this wiki.
		return Promise.resolve( [] );
	}

	const fetchProvidersUrl = this.siteMapper.getCXServerUrl( '/list/mt/$from/$to', {
		$from: this.sourceLanguage,
		$to: this.targetLanguage
	} );

	return fetch( fetchProvidersUrl )
		.then( ( response ) => {
			if ( !response.ok ) {
				throw new Error( `HTTP Error: ${ response.status }` );
			}
			return response.json();
		} )
		.then( ( data ) => data.mt || [] );
};

mw.cx.MachineTranslationService.prototype.fetchCXServerToken = function () {
	return new mw.Api().postWithToken( 'csrf', {
		action: 'cxtoken',
		assert: 'user'
	} );
};

mw.cx.MachineTranslationService.prototype.getCXServerTokenPromise = function () {
	return this.fetchCXServerToken().then( ( token ) => {
		const now = Math.floor( Date.now() / 1000 );
		// We use `age` instead of `exp` because it is more reliable, as user's
		// clocks might be set to wrong time.
		token.refreshAt = now + token.age - 30;
		return token;
	} ).catch( ( errorCode, errorObj ) => {
		if ( errorCode === 'token-impossible' ) {
			// Likely CX extension has not been configured properly.
			// To make development and testing easier, assume that
			// no token is needed.
			mw.log.warn( '[CX] Unable to get cxserver token (ignored).', errorObj );
			return {};
		}
		mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch machine translation token.' );
		mw.log.error( '[CX] Unable to get cxserver token.', errorObj );
	} );
};

mw.cx.MachineTranslationService.prototype.getCXServerToken = function () {
	this.tokenPromise = this.tokenPromise || this.getCXServerTokenPromise();

	return this.tokenPromise.then( ( token ) => {
		const now = Math.floor( Date.now() / 1000 );
		if ( 'refreshAt' in token && token.refreshAt <= now ) {
			this.tokenPromise = undefined;
			return this.getCXServerToken();
		}

		// Return the cached token
		return token.jwt || '';
	} );
};

/**
 * Calls cxserver to do the translation.
 *
 * @private
 * @param {string} content HTML to translate.
 * @param {string} [provider] Provider to use. If not given,
 *  content is adapted without machine translation.
 * @param {string} [token] Authorization token. Required only when the provider needs it.
 * @return {Promise<string>} Returns a Promise that resolves to the translated HTML as a string.
 */
mw.cx.MachineTranslationService.prototype.fetchTranslation = function ( content, provider, token ) {
	const mtURL = this.siteMapper.getCXServerUrl( '/translate/$from/$to/$provider', {
		$from: this.sourceLanguage,
		$to: this.targetLanguage,
		$provider: provider || ''
	} );

	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Authorization: token },
		body: JSON.stringify( { html: content } )
	};

	return fetch( mtURL, requestOptions )
		.then( ( response ) => {
			if ( !response.ok ) {
				throw new Error( `[CX] Translation request failed: ${ response.status }` );
			}
			return response.json();
		} )
		.then( ( data ) => data.contents );
};
