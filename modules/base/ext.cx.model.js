/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	// mw.cx base model
	mw.cx = {};
	// Source language
	mw.cx.sourceLanguage = null;
	// Target language
	mw.cx.targetLanguage = null;
	// Source title
	mw.cx.sourceTitle = null;
	// Translated title
	mw.cx.targetTitle = null;
	// Current progress of translation.
	mw.cx.progress = 0;
	mw.cx.tools = {};
}( jQuery, mediaWiki ) );
