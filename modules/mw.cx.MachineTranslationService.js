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

	this.providersPromise = null;
	this.providers = null;
};

/* Public methods */

/**
 * Translate a piece of text. The main entry point for this class.
 *
 * @param {string} text HTML to translate.
 * @param {string} provider Which provider to use.
 * @return {jQuery.Promise} Returns the translated HTML as a string.
 */
mw.cx.MachineTranslationService.prototype.translate = function ( text, provider ) {
	return this.validateProvider( provider )
		.then( this.getCXServerToken.bind( this ) )
		.then( this.fetchTranslation.bind( this, provider, text ) );
};

/**
 * Get a list of available machine translation providers.
 *
 * @return {jQuery.Promise}
 */
mw.cx.MachineTranslationService.prototype.getProviders = function () {
	return this.getProvidersCached().then( function ( providers ) {
		return providers.filter( function ( item ) {
			return item !== 'source-mt';
		} );
	} );
};

mw.cx.MachineTranslationService.prototype.getSuggestedDefaultProvider = function () {
	return this.getProvidersCached().then( function ( providers ) {
		if ( providers.length === 0 || providers[ 0 ] === 'source-mt' ) {
			return null;
		}

		return providers[ 0 ];
	} );
};

/* Private methods */

mw.cx.MachineTranslationService.prototype.getProvidersCached = function () {
	if ( this.providers !== null ) {
		return $.Deferred().resolve( this.providers );
	}

	return this.fetchProviders()
		.fail( this.fetchProvidersError.bind( this ) )
		.done( function ( providers ) {
			this.providers = providers;
		}.bind( this ) );
};

/**
 * Fetch available providers from cxserver.
 *
 * @private
 * @return {jQuery.Promise}
 */
mw.cx.MachineTranslationService.prototype.fetchProviders = function () {
	var fetchProvidersUrl = this.siteMapper.getCXServerUrl( '/list/mt/$from/$to', {
		$from: this.sourceLanguage,
		$to: this.targetLanguage
	} );

	return $.get( fetchProvidersUrl ).then( function ( response ) {
		return response.mt || [];
	} );
};

mw.cx.MachineTranslationService.prototype.fetchProvidersError = function () {
	mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch machine translation providers.' );
	mw.log.error( '[CX]', 'Unable to fetch machine translation providers.', arguments );
};

mw.cx.MachineTranslationService.prototype.fetchCXServerToken = function () {
	return new mw.Api().postWithToken( 'csrf', {
		action: 'cxtoken',
		assert: 'user'
	} );
};

mw.cx.MachineTranslationService.prototype.validateProvider = function ( provider ) {
	return this.getProviders().then( function ( providers ) {
		if ( providers.indexOf( provider ) === -1 ) {
			return $.Deferred.reject( 'Unknown provider' ).promise();
		}
	} );
};

mw.cx.MachineTranslationService.prototype.getCXServerToken = function () {
	this.tokenPromise = this.tokenPromise ||
		this.fetchCXServerToken().then(
			function ( token ) {
				var now = Math.floor( Date.now() / 1000 );
				// We use `age` instead of `exp` because it is more reliable, as user's
				// clocks might be set to wrong time.
				token.refreshAt = now + token.age - 30;
				return token;
			}.bind( this ),
			function ( errorCode, errorObj ) {
				if ( errorCode === 'token-impossible' ) {
					// Likely CX extension has not been configured properly.
					// To make development and testing easier, assume that
					// no token is needed.
					mw.log.warn( '[CX] Unable to get cxserver token (ignored).', errorObj );
					return $.Deferred().resolve( {} ).promise();
				}
				mw.hook( 'mw.cx.error' ).fire( 'Unable to fetch machine translation token.' );
				mw.log.error( '[CX] Unable to get cxserver token.', errorObj );
			}.bind( this )
		);

	return this.tokenPromise.then( function ( token ) {
		var now = Math.floor( Date.now() / 1000 );
		if ( 'refreshAt' in token && token.refreshAt >= now ) {
			this.tokenPromise = undefined;
			return this.getCXServerToken();
		}

		// Return the cached token
		return token.jwt || '';
	}.bind( this ) );
};

/**
 * Calls cxserver to do the translation.
 *
 * @private
 * @param {string} text HTML to translate.
 * @param {string} provider Provider to use.
 * @param {string} token Authorization token.
 * @return {jQuery.Promise} Returns the translated HTML as a string.
 */
mw.cx.MachineTranslationService.prototype.fetchTranslation = function ( text, provider, token ) {
	var request, mtURL;

	mtURL = this.siteMapper.getCXServerUrl( '/mt/$from/$to/$provider', {
		$from: this.sourceLanguage,
		$to: this.targetLanguage,
		$provider: provider
	} );

	request = {
		type: 'post',
		url: mtURL,
		data: {
			html: text
		},
		headers: {
			Authorization: token
		}
	};

	return $.ajax( request ).then( function ( response ) {
		return response.contents;
	} );
};
