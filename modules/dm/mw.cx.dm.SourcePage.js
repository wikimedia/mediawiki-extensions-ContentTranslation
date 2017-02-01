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
	this.direction = $.uls.data.getDir( this.language );
};

/* Inheritance */

OO.mixinClass( mw.cx.dm.SourcePage, OO.EventEmitter );

/**
 * Get all block level sections in this page
 *
 * @return {HTMLNode[]} Array of HTML Nodes
 */
mw.cx.dm.SourcePage.prototype.getSections = function () {
	return this.getTranslatableSections();
};

/**
 * Set all block level sections in this page
 *
 * @param {HTMLNode[]} sections Array of HTML Nodes
 */
mw.cx.dm.SourcePage.prototype.setSections = function ( sections ) {
	this.sections = sections;
};

/**
 * Get source revision
 * @return {string} sourceRevision
 */
mw.cx.dm.SourcePage.prototype.getSourceRevision = function () {
	return this.sourceRevision;
};

/**
 * Set source revision
 * @param {string} sourceRevision Source revision id
 */
mw.cx.dm.SourcePage.prototype.setSourceRevision = function ( sourceRevision ) {
	this.sourceRevision = sourceRevision;
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
