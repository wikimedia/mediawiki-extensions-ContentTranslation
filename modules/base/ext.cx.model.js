/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	// mw.cx base model
	mw.cx = {};
	// Source language
	mw.cx.sourceLanguage = null;
	// Target language
	mw.cx.targetLanguage = null;
	// Source title
	mw.cx.sourceTitle = null;
	// Source revision
	mw.cx.sourceRevision = null;
	// Translated title
	mw.cx.targetTitle = null;
	// Different tools that are available
	mw.cx.tools = {};
	// Default sitemapper. Only use this if you cannot get access to a sitemapper
	// in other way. Do not confuse mw.cx.SiteMapper which is the module.
	mw.cx.siteMapper = null;
}() );
