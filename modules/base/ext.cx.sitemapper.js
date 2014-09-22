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
( function ( $, mw ) {
	'use strict';

	/**
	 * Handles providing urls to different wikis.
	 * @class
	 */
	function SiteMapper( siteconfig ) {
		this.config = siteconfig;
	}

	/**
	 * Get the API for a remote wiki.
	 *
	 * @param {string} language Language code
	 * @return {mediawiki.Api}
	 */
	SiteMapper.prototype.getApi = function ( language ) {
		var url = this.config.api.replace( '$1', language );
		return new mw.Api( {
			ajax: {
				url: url
			}
		} );
	};

	/**
	 * Get a URL to an article in a wiki for a given language.
	 *
	 * @param {string} language Language code
	 * @param {string} title Page title
	 * @return {string}
	 */
	SiteMapper.prototype.getPageUrl = function ( language, title ) {
		return this.config.view.replace( '$1', language ).replace( '$2', title );
	};

	/**
	 * Get a URL to an article in a wiki for a given language.
	 *
	 * @param {string} language Language code
	 * @param {string} title Page title
	 * @return {string}
	 */
	SiteMapper.prototype.getCXServerUrl = function ( language, title ) {
		return this.config.cx.replace( '$1', language ).replace( '$2', title );
	};

	/**
	 * Do the content translation by going to Special:CX  with the given
	 * source-target title and target language.
	 *
	 * @param {string} sourceTitle
	 * @param {string} targetTitle
	 * @param {string} sourceLanguage
	 * @param {string} targetLanguage
	 */
	SiteMapper.prototype.getCXUrl = function ( sourceTitle, targetTitle, sourceLanguage, targetLanguage ) {
		var uri;

		if ( mw.config.get( 'wgContentTranslationTranslateInTarget' ) ) {
			uri = new mw.Uri( this.getPageUrl( targetLanguage, 'Special:ContentTranslation' ) );
		} else {
			uri = new mw.Uri( mw.util.getUrl( 'Special:ContentTranslation' ) );
		}

		uri.query = $.extend( uri.query, {
			page: sourceTitle,
			from: sourceLanguage,
			to: targetLanguage,
			targettitle: targetTitle
		} );

		return uri.toString();
	};

	mw.cx.SiteMapper = SiteMapper;
}( jQuery, mediaWiki ) );
