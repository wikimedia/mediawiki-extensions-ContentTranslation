'use strict';

/**
 * This uniquely identifies a wiki page with (title, language, [revision])
 *
 * @constructor
 * @param {string} title Page name
 * @param {string} language Language code
 * @param {number|null} revision
 * @param {string} sectionTitle Section title
 */
mw.cx.dm.WikiPage = function MwCxDmWikiPage( title, language, revision, sectionTitle ) {
	this.title = title;
	this.language = language;
	this.revision = revision;
	this.sectionTitle = sectionTitle;
};

mw.cx.dm.WikiPage.prototype.getTitle = function () {
	return this.title;
};

mw.cx.dm.WikiPage.prototype.getLanguage = function () {
	return this.language;
};

mw.cx.dm.WikiPage.prototype.getDirection = function () {
	return $.uls.data.getDir( this.language.toLowerCase() );
};

mw.cx.dm.WikiPage.prototype.getRevision = function () {
	return this.revision;
};

mw.cx.dm.WikiPage.prototype.setRevision = function ( revision ) {
	this.revision = revision;
};

mw.cx.dm.WikiPage.prototype.getSectionTitle = function () {
	return this.sectionTitle;
};
