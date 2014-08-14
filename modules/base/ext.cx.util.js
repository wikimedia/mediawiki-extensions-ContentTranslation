/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( mw ) {
	'use strict';

	mw.cx = mw.cx || {};

	/**
	 * Do the content translation by going to Special:CX
	 * with the given source-target title and target language
	 * @param {string} sourceTitle
	 * @param {string} targetTitle
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 */
	mw.cx.doCX = function ( sourceTitle, targetTitle, sourceLanguage, targetLanguage ) {
		var domainTemplate,
			uri = new mw.Uri();

		if ( mw.config.get( 'wgContentTranslationTranslateInTarget' ) ) {
			domainTemplate = mw.config.get( 'wgContentTranslationDomainTemplate' );
			uri.host = domainTemplate.replace( '$1', targetLanguage );
		}

		uri.path = mw.config.get( 'wgScript' );
		uri.query = {
			title: 'Special:ContentTranslation',
			page: sourceTitle,
			from: sourceLanguage,
			to: targetLanguage,
			targettitle: targetTitle
		};

		window.location.href = uri.toString();
	};

	/**
	 * Get the API URL, ending with /api.php, for a given language.
	 * The domain is based on $wgContentTranslationDomainTemplate.
	 * @param {string} language Language code
	 * @return {string}
	 */
	mw.cx.getApiUrl = function ( language ) {
		var uri = new mw.Uri(),
			domainTemplate = mw.config.get( 'wgContentTranslationDomainTemplate' );

		uri.host = domainTemplate.replace( '$1', language );
		uri.path = mw.config.get( 'wgScriptPath' ) + '/api.php';
		uri.query = {};

		return uri.toString();
	};

	/**
	 * Get a URL to an article in a wiki for a given language.
	 * The domain is based on $wgContentTranslationDomainTemplate.
	 * @param {string} language Language code
	 * @param {string} title Page title
	 * @return {string}
	 */
	mw.cx.getPageUrl = function ( language, title ) {
		var uri = new mw.Uri(),
			domainTemplate = mw.config.get( 'wgContentTranslationDomainTemplate' );

		uri.host = domainTemplate.replace( '$1', language );
		uri.path = mw.config.get( 'wgArticlePath' ).replace( '$1', title );
		uri.query = {};

		return uri.toString();
	};
}( mediaWiki ) );
