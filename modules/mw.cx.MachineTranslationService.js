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
};

/* Public methods */

/**
 * Translate a piece of text. The main entry point for this class.
 *
 * @param {string} content HTML to translate.
 * @param {string} provider Which provider to use.
 * @return {jQuery.Promise} Returns the translated HTML as a string.
 */
mw.cx.MachineTranslationService.prototype.translate = function ( content, provider ) {
	if ( provider === 'source' ) {
		// Adapt without translation.
		return this.fetchTranslation( content );
	} else if ( provider === 'scratch' ) {
		return $.Deferred().resolve( this.prepareContentForScratch( content ) );
	}

	return this.getCXServerToken().then( this.fetchTranslation.bind( this, content, provider ) );
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

		return $.ajax( request ).then( function ( response ) {
			return response.targetTitle;
		} );
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
	if ( mw.config.get( 'wgContentTranslationEnableMT' ) === false ) {
		// MT services are not enabled for this wiki.
		return $.Deferred().resolve( [] );
	}

	const fetchProvidersUrl = this.siteMapper.getCXServerUrl( '/list/mt/$from/$to', {
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

mw.cx.MachineTranslationService.prototype.getCXServerToken = function () {
	this.tokenPromise = this.tokenPromise ||
		this.fetchCXServerToken().then(
			function ( token ) {
				const now = Math.floor( Date.now() / 1000 );
				// We use `age` instead of `exp` because it is more reliable, as user's
				// clocks might be set to wrong time.
				token.refreshAt = now + token.age - 30;
				return token;
			},
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
			}
		);

	return this.tokenPromise.then( function ( token ) {
		const now = Math.floor( Date.now() / 1000 );
		if ( 'refreshAt' in token && token.refreshAt <= now ) {
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
 * @param {string} content HTML to translate.
 * @param {string} [provider] Provider to use. If not given,
 *  content is adapted without machine translation.
 * @param {string} [token] Authorization token. Required only when the provider needs it.
 * @return {jQuery.Promise} Returns the translated HTML as a string.
 */
mw.cx.MachineTranslationService.prototype.fetchTranslation = function ( content, provider, token ) {
	const mtURL = this.siteMapper.getCXServerUrl( '/translate/$from/$to/$provider', {
		$from: this.sourceLanguage,
		$to: this.targetLanguage,
		$provider: provider || ''
	} );

	const request = {
		type: 'post',
		url: mtURL,
		data: {
			html: content
		},
		headers: {
			Authorization: token
		}
	};

	return $.ajax( request ).then( function ( response ) {
		return response.contents;
	} );
};
