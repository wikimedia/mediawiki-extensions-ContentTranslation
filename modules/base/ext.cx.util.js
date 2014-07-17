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
		var uri = new mw.Uri(),
			domainTemplate = mw.config.get( 'wgContentTranslationDomainTemplate' );

		if ( mw.config.get( 'wgContentTranslationTranslateInTarget' ) ) {
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
}( mediaWiki ) );
