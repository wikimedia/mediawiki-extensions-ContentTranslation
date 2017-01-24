'use strict';

/**
 * CX Source page
 *
 * @abstract
 * @mixins OO.EventEmitter
 *
 * @constructor
 * @param {Object} config configuration
 * @cfg {Object} siteMapper The SiteMapper instance
 * @cfg {string} sourceTitle Source title
 * @cfg {string} [targetTitle] Target title
 * @cfg {string} sourceLanguage Source language code
 * @cfg {string} targetLanguage Target language code
 * @cfg {string} [sourceRevision] Source revision id
 * @cfg {string} [campaign] Campaign identifier
 * @cfg {Object} requestManager The MediaWiki api request manager instance
 * @cfg {string[]} removableSections Sections that can be removed from source page
 */
mw.cx.dm.SourcePage = function SourcePage( config ) {
	// Mixin constructor
	OO.EventEmitter.call( this );
	this.config = config;
	this.language = config.sourceLanguage;
	this.direction = null;
	this.title = config.sourceTitle;
	this.sourceRevision = config.sourceRevision;
	this.requestManager = config.requestManager;
	this.sections = [];
	this.categories = [];
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.SourcePage, OO.EventEmitter );

mw.cx.dm.SourcePage.prototype.init = function () {
	this.direction = $.uls.data.getDir( this.language );

	return this.fetchPage( this.title, this.language, this.sourceRevision );
};

/**
 * Fetch the page with given title and language.
 * Response contains
 *
 * @param {string} title Title of the page to be fetched
 * @param {string} language Language of the page requested. This will be used to
 *     identify the host wiki.
 * @param {string} revision Source page revision id.
 * @return {jQuery.Promise}
 */
mw.cx.dm.SourcePage.prototype.fetchPage = function ( title, language, revision ) {
	var self = this,
		fetchParams, apiURL, fetchPageUrl;

	fetchParams = {
		$language: this.config.siteMapper.getWikiDomainCode( language ),
		// Manual normalisation to avoid redirects on spaces but not to break namespaces
		$title: title.replace( / /g, '_' )
	};
	apiURL = '/page/$language/$title';

	// If revision is requested, load that revision of page.
	if ( revision ) {
		fetchParams.$revision = revision;
		apiURL += '/$revision';
	}

	fetchPageUrl = this.config.siteMapper.getCXServerUrl( apiURL, fetchParams );

	return $.get( fetchPageUrl )
		.done( function ( response ) {
			self.sections = $.parseHTML( response.segmentedContent );
			self.sourceRevision = response.revision;
		} ).fail( function ( xhr ) {
			if ( xhr.status === 404 ) {
				mw.hook( 'mw.cx.error' ).fire(
					mw.msg( 'cx-error-page-not-found', title, $.uls.data.getAutonym( language ) )
				);
			} else {
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
			}
		} );
};

/**
 * Get all block level sections in this page
 *
 * @return {HTMLNode[]} Array of HTML Nodes
 */
mw.cx.dm.SourcePage.prototype.getSections = function () {
	return this.getTranslatableSections();
};

/**
 * Get all translatable sections from this pages
 *
 * @return {HTMLNode[]} Array of HTML Nodes
 */
mw.cx.dm.SourcePage.prototype.getTranslatableSections = function () {
	return this.sections.filter( $.proxy( this.filterSection, this ) );
};

mw.cx.dm.SourcePage.static.sectionTypes = [
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

/**
 * Filter out sections based on configuration.
 *
 * @param {HTMLElement} section
 * @return {boolean} whether the section can be included or not.
 */
mw.cx.dm.SourcePage.prototype.filterSection = function ( section ) {
	var self = this;

	if ( section.tagName &&
		mw.cx.dm.SourcePage.static.sectionTypes.indexOf( section.tagName.toLowerCase() ) >= 0
	) {
		return true;
	}

	if ( $( section ).is( self.config.removableSections.join( ', ' ) ) ||
		$( section ).children().is( self.config.removableSections.join( ', ' ) )
	) {
		return true;
	}

	return false;
};

/**
 * Retrieves categories for the source article.
 *
 * @return {jQuery.Promise}
 */
mw.cx.dm.SourcePage.prototype.getCategories = function () {
	return this.requestManager.getCategories( this.language, this.title )
		.then( function ( categoriesResult ) {
			this.categories = categoriesResult.categories;
			return this.categories;
		}.bind( this ) );
};
