/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

'use strict';

/**
 * Handles providing URLs to different wikis.
 *
 * @class
 * @param {Object} [overrides] Configuration overrides (defaults from PHP configuration)
 */
mw.cx.SiteMapper = class {
	constructor( overrides ) {
		const config = require( '../config.json' );

		overrides = overrides || {};

		const siteMapperConfig = Object.assign( {}, config, overrides );
		this.siteTemplates = siteMapperConfig.SiteTemplates;
		this.codeMap = siteMapperConfig.DomainCodeMapping;
		this.translateInTarget = siteMapperConfig.TranslateInTarget;

		this.languagePairsPromise = null;
	}

	/**
	 * Some wikis have domain names that do not match the content language.
	 * See: wgLanguageCode in operations/mediawiki-config/wmf-config/InitialiseSettings.php
	 *
	 * @param {string} language Language code
	 * @return {string}
	 */
	getWikiDomainCode( language ) {
		return this.codeMap[ language ] || language;
	}

	/**
	 * Gets the source language code for current wiki.
	 *
	 * We can't rely on wgContentLanguage because this will fail for a
	 * wiki like simple.wikipedia.org, where the content language is the same as
	 * on en.wikipedia.org, as well as some other edge cases. But we use the known
	 * mappings to do backwards conversion for known problematic domains, and
	 * wgContentLanguage for rest of the cases.
	 *
	 * @return {string} Source language code
	 */
	getCurrentWikiLanguageCode() {
		const from = mw.config.get( 'wgServerName' ).split( '.', 1 )[ 0 ], fallback = mw.config.get( 'wgContentLanguage' );

		return this.getLanguageCodeForWikiDomain( from, fallback );
	}

	/**
	 * @param {string} domain
	 * @param {string} [fallback]
	 * @return {string}
	 */
	getLanguageCodeForWikiDomain( domain, fallback ) {
		for ( const code in this.codeMap ) {
			if ( this.codeMap[ code ] === domain ) {
				return code;
			}
		}

		return fallback || domain;
	}

	/**
	 * Get the API for a remote wiki.
	 *
	 * @param {string} language Language code
	 * @param {Object} [options] Api options
	 * @return {mw.ForeignApi} api
	 */
	getApi( language, options ) {
		const domain = this.getWikiDomainCode( language );
		const url = this.siteTemplates.api.replace( '$1', domain );
		options = Object.assign( { anonymous: true }, options );
		return new mw.ForeignApi( url, options );
	}

	/**
	 * Get a URL to an article in a wiki for a given language.
	 *
	 * @param {string} [language] Language code
	 * @param {string} title Page title
	 * @param {Object} [params] Query parameters
	 * @param {string|null} [hash] the hash property of the URL
	 * @return {string}
	 */
	getPageUrl( language, title, params, hash ) {
		// Use current wiki's content language, if no language given
		language = language || mw.config.get( 'wgContentLanguage' );

		const domain = this.getWikiDomainCode( language );
		const prefix = domain.replace( /\$/g, '$$$$' );

		let base = this.siteTemplates.view;
		if ( params && Object.keys( params ).length > 0 ) {
			base = this.siteTemplates.action || this.siteTemplates.view;
		}

		base = base.replace( '$1', prefix ).replace( '$2', mw.util.wikiUrlencode( title ).replace( /\$/g, '$$$$' ) );

		// use location object as base URL, in order to handle protocol relative paths
		// when base includes an absolute path, the location object won't be taken into account
		const url = new URL( base, location );

		const urlSearchParams = new URLSearchParams( url.search );
		for ( const key in params ) {
			urlSearchParams.append( key, params[ key ] );
		}

		if ( hash ) {
			url.hash = hash;
		}
		url.search = urlSearchParams.toString();
		return url.toString();
	}

	/**
	 * Get the cxserver URL for the current site.
	 *
	 * @param {string} module CXServer module path
	 * @param {Object} [params]
	 * @return {string}
	 */
	getCXServerUrl( module, params ) {
		if ( params ) {
			for ( const paramKey in params ) {
				module = module.replace( paramKey, encodeURIComponent( params[ paramKey ] ) );
			}
		}

		let cxserverURL = this.siteTemplates.cx;
		if ( mw.cx.getCXVersion() === 2 ) {
			cxserverURL = cxserverURL.replace( 'v1', 'v2' );
		}

		return cxserverURL + module;
	}

	/**
	 * Get all the source and target languages.
	 *
	 * @return {Promise}
	 */
	getLanguagePairs() {
		if ( !this.languagePairsPromise ) {
			const languagePairsAPIUrl = this.getCXServerUrl( '/list/languagepairs' );
			this.languagePairsPromise = fetch( languagePairsAPIUrl )
				.then( ( response ) => response.json() )
				.then( ( response ) => ( {
					targetLanguages: response.target,
					sourceLanguages: response.source
				} ) )
				.catch( ( response ) => {
					mw.log(
						'Error getting language pairs from ' + languagePairsAPIUrl + ' . ' +
						response.statusText + ' (' + response.status + '). ' +
						response.responseText
					);
					this.languagePairsPromise = null;
					return Promise.reject();
				} );
		}
		return this.languagePairsPromise;
	}

	/**
	 * Get the URL for Special:CX on the needed wiki
	 * according to given source and target title and the target language.
	 *
	 * @param {string} sourceTitle
	 * @param {string|null} targetTitle
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 * @param {Object} [extra] Additional query parameters
	 * @return {string} URL
	 */
	getCXUrl(
		sourceTitle,
		targetTitle,
		sourceLanguage,
		targetLanguage,
		extra
	) {
		const queryParams = Object.assign( {
			from: sourceLanguage,
			to: targetLanguage
		}, extra );

		if ( sourceTitle ) {
			queryParams.page = sourceTitle;
		}

		if ( targetTitle ) {
			queryParams.targettitle = targetTitle;
		}

		const cxPage = 'Special:ContentTranslation';
		if ( this.translateInTarget ) {
			const uri = new URL( this.getPageUrl( targetLanguage, cxPage ), location );
			const urlSearchParams = new URLSearchParams( uri.search );
			for ( const key in queryParams ) {
				urlSearchParams.set( key, queryParams[ key ] );
			}
			// Construct the new URL with the updated search params
			uri.search = urlSearchParams.toString();

			return uri.toString();
		}

		return mw.util.getUrl( cxPage, queryParams );
	}

	/**
	 * Get the URL for Special:AutomaticTranslation on the needed wiki
	 * according to given parameters.
	 *
	 * @param {string} sourceTitle
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 * @param {"confirm"|"translation"} step
	 * @param {Object} [extra]
	 * @return {string}
	 */
	getMintUrl(
		sourceTitle,
		sourceLanguage,
		targetLanguage,
		step,
		extra = {}
	) {
		const queryParams = Object.assign( {
			page: sourceTitle,
			from: sourceLanguage,
			to: targetLanguage,
			step
		}, extra );

		const mintPage = 'Special:AutomaticTranslation';
		if ( this.getCurrentWikiLanguageCode() !== targetLanguage ) {
			const uri = new URL( this.getPageUrl( targetLanguage, mintPage ), location );
			const urlSearchParams = new URLSearchParams( uri.search );

			for ( const key in queryParams ) {
				urlSearchParams.set( key, queryParams[ key ] );
			}
			// Construct the new URL with the updated search params
			uri.search = urlSearchParams.toString();

			return uri.toString();
		}

		return mw.util.getUrl( mintPage, queryParams );
	}

	setCXTokenValue( sourceLanguage, targetLanguage, sourceTitle, value ) {
		// base64 encode the name to get cookie name.
		let name = 'cx_' + btoa( encodeURIComponent( [ sourceTitle, sourceLanguage, targetLanguage ].join( '_' ) ) );
		// Remove all characters that are not allowed in cookie name: ( ) < > @ , ; : \ " / [ ] ? = { }.
		name = name.replace( /[()<>@,;\\[\]?={}]/g, '' );

		// sameSite set to None and secure set to true to make the cookie visible on cross-domain requests.
		const options = {
			prefix: '',
			expires: 3600,
			sameSite: 'None',
			secure: true
		};

		// BC with old default behavior
		if ( this.siteTemplates.cookieDomain === null ) {
			// Save that information in a domain cookie.
			options.domain = location.hostname.indexOf( '.' ) > 0 ?
				'.' + location.hostname.split( '.' ).splice( 1 ).join( '.' ) :
				null; // Mostly for domains like "localhost"
		} else if ( typeof this.siteTemplates.cookieDomain === 'string' ) {
			// Explicit domain cookie, preferred way
			options.domain = this.siteTemplates.cookieDomain;
		}
		// Else: use whatever is the default
		// At this point, the translator saw the license agreement.
		mw.cookie.set( name, value, options );
	}

	/**
	 * Set CX Token in a cookie.
	 * This token guarantees that the translator reads the license agreement
	 * and starts translating from CX dashboard enabled as beta feature.
	 * It is recommended to configure the cookie domain.
	 *
	 * @param {string} sourceLanguage Source language
	 * @param {string} targetLanguage Target language
	 * @param {string} sourceTitle Source title
	 */
	setCXToken( sourceLanguage, targetLanguage, sourceTitle ) {
		this.setCXTokenValue( sourceLanguage, targetLanguage, sourceTitle, true );
	}

	/**
	 * Unset the CX Token cookie.
	 * Currently unused.
	 *
	 * @param {string} sourceLanguage Source language
	 * @param {string} targetLanguage Target language
	 * @param {string} sourceTitle Source title
	 */
	unsetCXToken( sourceLanguage, targetLanguage, sourceTitle ) {
		this.setCXTokenValue( sourceLanguage, targetLanguage, sourceTitle, null );
	}
};
