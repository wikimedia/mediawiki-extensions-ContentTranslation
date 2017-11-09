/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( mw, $ ) {
	'use strict';

	var cxConfigurationRequestCache = {};
	/**
	 * Generate a jQuery selector for all possible sections.
	 *
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

	/**
	 * Get the source section by a given Id. These Ids are generated
	 * by parsoid. Usually it is prefixed with 'mw'. But it is not
	 * guaranteed. Sometimes templates assign their own ids to sections.
	 * See T112253
	 *
	 * @param  {string} id Source section id.
	 * @return {jQuery}
	 */
	mw.cx.getSourceSection = function ( id ) {
		return $( document.getElementById( id ) );
	};

	/**
	 * Get the target section by a given source section Id.
	 *
	 * @param  {string} id Source section id.
	 * @return {jQuery}
	 */
	mw.cx.getTranslationSection = function ( id ) {
		return $( document.getElementById( 'cx' + id ) );
	};

	/**
	 * Return array with duplicate items removed
	 *
	 * @param {Array} list List of strings, numbers or boolean
	 * @return {Array}
	 */
	mw.cx.unique = function ( list ) {
		return $.grep( list, function ( v, k ) {
			return $.inArray( v, list ) === k;
		} );
	};

	/**
	 * Fetch the source content filter configuration
	 * for the given language pairs.
	 *
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 * @return {jQuery.Promise}
	 */
	mw.cx.getCXConfiguration = function ( sourceLanguage, targetLanguage ) {
		if ( cxConfigurationRequestCache[ sourceLanguage + targetLanguage ] ) {
			return cxConfigurationRequestCache[ sourceLanguage + targetLanguage ];
		}
		cxConfigurationRequestCache[ sourceLanguage + targetLanguage ] = new mw.Api().get( {
			action: 'cxconfiguration',
			from: sourceLanguage,
			to: targetLanguage,
			format: 'json'
		} );
		return cxConfigurationRequestCache[ sourceLanguage + targetLanguage ];
	};

	/**
	 * Fix the ids of given element and its children so that it does not conflict
	 * with existing ids. This is done to html fragments received from parsoid.
	 *
	 * @param {jQuery} $element The element whose ids to be fixed
	 * @param {string} prefix Prefix to use while fixing id
	 */
	mw.cx.fixIds = function ( $element, prefix ) {
		$element.find( '[id]' ).add( $element ).each( function () {
			this.id = prefix + '-' + this.id;
		} );
	};

	/**
	 * Convert given wikitext fragment to HTML
	 *
	 * @param {mw.cx.SiteMapper} siteMapper
	 * @param {string} language
	 * @param {string} wikitext
	 * @param {string} [title]
	 * @return {jQuery.Promise}
	 */
	mw.cx.wikitextToHTML = function ( siteMapper, language, wikitext, title ) {
		var url;

		if ( !wikitext || !wikitext.trim() || !/\{\{|[[<>&'=#*]/.test( wikitext ) ) {
			// Plan text. Does not contain wiki markup. Save api call.
			return $.Deferred().resolve( wikitext ).promise();
		}

		if ( title ) {
			url = siteMapper.getRestbaseUrl(
				language,
				'/transform/wikitext/to/html/$title',
				{ $title: title.replace( ' ', '_' ) }
			);
		} else {
			url = siteMapper.getRestbaseUrl( language, '/transform/wikitext/to/html' );
		}

		return $.post( url, {
			// eslint-disable-next-line camelcase
			body_only: true,
			wikitext: wikitext
		} );
	};

	/**
	 * Convert given HTML fragment to wikitext
	 *
	 * @param {mw.cx.SiteMapper} siteMapper
	 * @param {string} language
	 * @param {string} html
	 * @return {jQuery.Promise}
	 */
	mw.cx.htmlToWikitext = function ( siteMapper, language, html ) {
		var url;

		if ( !html || !html.trim() || !/<[a-zA-Z][\s\S]*>/i.test( html ) ) {
			// Does not contain HTML elements. Save api call.
			return $.Deferred().resolve( html ).promise();
		}

		url = siteMapper.getRestbaseUrl( language, '/transform/html/to/wikitext' );

		return $.post( url, {
			html: html
		} );
	};
}( mediaWiki, jQuery ) );
