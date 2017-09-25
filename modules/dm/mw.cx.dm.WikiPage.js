'use strict';

/**
 * This uniquely identifies a wiki page with (title, language, [revision])
 *
 * @constructor
 * @param {string} title Page name
 * @param {string} language Language code
 * @param {number} revision
 */
mw.cx.dm.WikiPage = function MwCxDmWikiPage( title, language, revision ) {
	this.title = title;
	this.language = language;
	this.revision = revision;
};

mw.cx.dm.WikiPage.prototype.getTitle = function () {
	return this.title;
};

mw.cx.dm.WikiPage.prototype.getLanguage = function () {
	return this.language;
};

mw.cx.dm.WikiPage.prototype.getDirection = function () {
	// TODO: Make this an actual data property
	return this.language.toLowerCase().match( /^(ar|fa|he)\b/ ) ? 'rtl' : 'ltr';
};

mw.cx.dm.WikiPage.prototype.getRevision = function () {
	return this.revision;
};

mw.cx.dm.WikiPage.prototype.setRevision = function ( revision ) {
	this.revision = revision;
};
