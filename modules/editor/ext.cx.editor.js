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
/* global MediumEditor: true */
( function ( $ ) {
	'use strict';

	var editorOptions = {
		cleanPastedHTML: true,
		buttons: [ 'bold', 'italic', 'header1', 'header2', 'unorderedlist', 'orderedlist', 'indent', 'outdent' ],
		firstHeader: 'h2',
		secondHeader: 'h3'
	};

	$.fn.cxEditor = function () {
		/*jshint -W031 */
		new MediumEditor( this, editorOptions );
		return this;
	};

}( jQuery ) );
