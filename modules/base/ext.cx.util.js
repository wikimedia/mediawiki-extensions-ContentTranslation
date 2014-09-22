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
	 * Generate a jQuery selector for all possible sections.
	 * @return {string} the section selector string
	 */
	mw.cx.getSectionSelector = function () {
		var sectionTypes;

		sectionTypes = [
			'div', 'p',
			// tables
			'table', 'tbody', 'thead', 'tfoot', 'caption', 'th', 'tr', 'td',
			// lists
			'ul', 'ol', 'li', 'dl', 'dt', 'dd',
			// HTML5 heading content
			'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup',
			// HTML5 sectioning content
			'article', 'aside', 'body', 'nav', 'section', 'footer', 'header', 'figure',
			'figcaption', 'fieldset', 'details', 'blockquote',
			// other
			'hr', 'button', 'canvas', 'center', 'col', 'colgroup', 'embed',
			'map', 'object', 'pre', 'progress', 'video'
		];

		return sectionTypes.join( ',' );
	};
}( mediaWiki ) );
