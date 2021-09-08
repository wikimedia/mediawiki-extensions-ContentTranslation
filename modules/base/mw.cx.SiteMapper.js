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
mw.cx.SiteMapper = function ( overrides ) {
	var config = require( '../config.json' );

	overrides = overrides || {};

	this.siteTemplates = overrides.SiteTemplates || config.SiteTemplates;
	this.codeMap = overrides.DomainCodeMapping || config.DomainCodeMapping;
	this.translateInTarget = overrides.TranslateInTarget || config.TranslateInTarget;
	this.targetNamespace = overrides.TargetNamespace || config.TargetNamespace;

	this.languagePairsPromise = null;
};

/**
 * Some wikis have domain names that do not match the content language.
 * See: wgLanguageCode in operations/mediawiki-config/wmf-config/InitialiseSettings.php
 *
 * @param {string} language Language code
 * @return {string}
 */
mw.cx.SiteMapper.prototype.getWikiDomainCode = function ( language ) {
	return this.codeMap[ language ] || language;
};

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
mw.cx.SiteMapper.prototype.getCurrentWikiLanguageCode = function () {
	var from = mw.config.get( 'wgServerName' ).split( '.', 1 )[ 0 ],
		fallback = mw.config.get( 'wgContentLanguage' );

	return this.getLanguageCodeForWikiDomain( from, fallback );
};

/**
 * @param {string} domain
 * @param {string} [fallback]
 * @return {string}
 */
mw.cx.SiteMapper.prototype.getLanguageCodeForWikiDomain = function ( domain, fallback ) {
	var code;

	for ( code in this.codeMap ) {
		if ( this.codeMap[ code ] === domain ) {
			return code;
		}
	}

	return fallback || domain;
};

/**
 * Get the API for a remote wiki.
 *
 * @param {string} language Language code
 * @param {Object} [options] Api options
 * @return {mw.ForeignApi} api
 */
mw.cx.SiteMapper.prototype.getApi = function ( language, options ) {
	var url, domain;

	domain = this.getWikiDomainCode( language );
	url = this.siteTemplates.api.replace( '$1', domain );
	options = $.extend( { anonymous: true }, options );
	return new mw.ForeignApi( url, options );
};

/**
 * Get a URL to an article in a wiki for a given language.
 *
 * @param {string} language Language code
 * @param {string} title Page title
 * @param {Object} [params] Query parameters
 * @return {string}
 */
mw.cx.SiteMapper.prototype.getPageUrl = function ( language, title, params ) {
	var domain,
		base = this.siteTemplates.view,
		extra = '';

	domain = this.getWikiDomainCode( language );
	if ( params && !$.isEmptyObject( params ) ) {
		base = this.siteTemplates.action || this.siteTemplates.view;
		extra = ( base.indexOf( '?' ) !== -1 ? '&' : '?' ) + $.param( params );
	}

	return base
		.replace( '$1', domain.replace( /\$/g, '$$$$' ) )
		.replace( '$2', mw.util.wikiUrlencode( title ).replace( /\$/g, '$$$$' ) ) + extra;
};

/**
 * Get the cxserver URL for the current site.
 *
 * @param {string} module CXServer module path
 * @param {Object} [params]
 * @return {string}
 */
mw.cx.SiteMapper.prototype.getCXServerUrl = function ( module, params ) {
	var paramKey, cxserverURL = this.siteTemplates.cx;

	if ( params ) {
		for ( paramKey in params ) {
			module = module.replace( paramKey, encodeURIComponent( params[ paramKey ] ) );
		}
	}

	if ( mw.cx.getCXVersion() === 2 ) {
		cxserverURL = cxserverURL.replace( 'v1', 'v2' );
	}

	return cxserverURL + module;
};

mw.cx.SiteMapper.prototype.getRestbaseUrl = function ( language, module, params ) {
	var paramKey,
		domain = this.getWikiDomainCode( language ),
		url = this.siteTemplates.restbase.replace( '$1', domain );

	if ( params ) {
		for ( paramKey in params ) {
			module = module.replace( paramKey, encodeURIComponent( params[ paramKey ] ) );
		}
	}

	return url + module;
};

/**
 * Get the target title to publish based on the wiki configuration.
 *
 * @param {string} title
 * @return {string} target title
 */
mw.cx.SiteMapper.prototype.getTargetTitle = function ( title ) {
	var targetTitle;

	// If the title is already in the user namespace, just return it
	if ( new mw.Title( title ).getNamespaceId() === 2 ) {
		return title;
	}

	switch ( this.targetNamespace ) {
		// Main namespace
		case 0:
			targetTitle = title;
			break;
		// User
		case 2:
			targetTitle = 'User:' + mw.user.getName() + '/' + title;
			break;
		default:
			targetTitle = mw.Title.makeTitle( this.targetNamespace, title ).getPrefixedText();
			break;
	}

	return targetTitle;
};

/**
 * Get all the source and target languages.
 *
 * @return {jQuery.Promise}
 */
mw.cx.SiteMapper.prototype.getLanguagePairs = function () {
	var languagePairsAPIUrl,
		self = this;

	if ( !this.languagePairsPromise ) {
		languagePairsAPIUrl = this.getCXServerUrl( '/list/languagepairs' );
		this.languagePairsPromise = $.get( languagePairsAPIUrl )
			.then( function ( response ) {
				return {
					targetLanguages: response.target,
					sourceLanguages: response.source
				};
			}, function ( response ) {
				mw.log(
					'Error getting language pairs from ' + languagePairsAPIUrl + ' . ' +
					response.statusText + ' (' + response.status + '). ' +
					response.responseText
				);
				self.languagePairsPromise = null;
				return $.Deferred().reject().promise();
			} );
	}
	return this.languagePairsPromise;
};

/**
 * Get the URL for Special:CX on the needed wiki
 * according to given source and target title and the target language.
 *
 * @param {string} sourceTitle
 * @param {string} targetTitle
 * @param {string} sourceLanguage
 * @param {string} targetLanguage
 * @param {Object} [extra] Additional query parameters
 * @return {string} URL
 */
mw.cx.SiteMapper.prototype.getCXUrl = function (
	sourceTitle,
	targetTitle,
	sourceLanguage,
	targetLanguage,
	extra
) {
	var cxPage, queryParams, uri;

	cxPage = 'Special:ContentTranslation';
	queryParams = $.extend( {
		page: sourceTitle,
		from: sourceLanguage,
		to: targetLanguage,
		targettitle: targetTitle
	}, extra );

	if ( this.translateInTarget ) {
		uri = new mw.Uri( this.getPageUrl( targetLanguage, cxPage ) );
		// Use mw.Uri().query for current URL also to retain any non-CX params
		// in URL. A good example is debug=true param.
		$.extend( uri.query, mw.Uri().query, queryParams );

		return uri.toString();
	}

	return mw.util.getUrl( cxPage, queryParams );
};

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
mw.cx.SiteMapper.prototype.setCXToken = function ( sourceLanguage, targetLanguage, sourceTitle ) {
	var name, options;

	// base64 encode the name to get cookie name.
	name = 'cx_' + btoa( encodeURIComponent( [ sourceTitle, sourceLanguage, targetLanguage ].join( '_' ) ) );
	// Remove all characters that are not allowed in cookie name: ( ) < > @ , ; : \ " / [ ] ? = { }.
	name = name.replace( /[()<>@,;\\[\]?={}]/g, '' );
	// sameSite set to None and secure set to true to make the cookie visible on cross-domain requests.
	options = {
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
	mw.cookie.set( name, true, options );
};
