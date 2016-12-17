/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	var tests = [
		{
			description: 'All ids of source and draft match perfectly',
			source: '<div><p id="mw1">Paragraph 1</p></div>',
			placeholders: '<div><div id="cxmw1" data-source="mw1" class="placeholder"></div></div>',
			draft: '<p id="cxmw1">PARAGRAPH 1</p>',
			translation: '<p id="cxmw1" data-cx-draft="true" data-source="mw1">PARAGRAPH 1</p>'
		},
		{
			description: 'All ids of source and draft match perfectly, Restoring old draft using sequence ids',
			source: '<div><p id="mw1" data-seqid="1">Paragraph 1</p></div>',
			placeholders: '<div><div id="cxmw1" data-source="mw1" class="placeholder"></div></div>',
			draft: '<p id="cx1" data-seqid="1" data-source="1">PARAGRAPH 1</p>',
			translation: '<p id="cxmw1" data-seqid="1" data-source="mw1" data-cx-draft="true">PARAGRAPH 1</p>'
		},
		{
			description: 'Source section replaced by new section. Insert the draft above the placeholder for next match',
			source: '<div><p id="mw2">Paragraph 2</p><p id="mw3">Paragraph 3</p></div>',
			placeholders: '<div><div id="cxmw2" data-source="mw2" class="placeholder"></div><div id="cxmw3" data-source="mw3" class="placeholder"></div></div>',
			draft: '<p id="cxmw1" data-source="mw1">PARAGRAPH 1</p><p id="cxmw3">PARAGRAPH 3</p>',
			translation: '<div id="cxmw2" data-source="mw2" class="placeholder"></div><p id="cxmw1" data-source="mw1" data-cx-draft="true">PARAGRAPH 1</p><p id="cxmw3" data-cx-draft="true" data-source="mw3">PARAGRAPH 3</p>'
		},
		{
			description: 'Source section has new sections above and below. Place the draft in correct position',
			source: '<div><p id="mw1">Paragraph 1</p><div><p id="mw2">Paragraph 2</p><p id="mw3">Paragraph 3</p></div>',
			placeholders: '<div><div id="cxmw1" data-source="mw1" class="placeholder"></div><div id="cxmw2" data-source="mw2" class="placeholder"></div><div id="cxmw3" data-source="mw3" class="placeholder"></div></div>',
			draft: '<p id="cxmw2">PARAGRAPH 2</p>',
			translation: '<div id="cxmw1" data-source="mw1" class="placeholder"></div><p id="cxmw2" data-cx-draft="true" data-source="mw2">PARAGRAPH 2</p><div id="cxmw3" data-source="mw3" class="placeholder"></div>'
		},
		{
			description: 'Source section has new order of sections. Place the draft in correct position',
			source: '<div><p id="mw3">Paragraph 3</p><div><p id="mw2">Paragraph 2</p><p id="mw1">Paragraph 1</p></div>',
			placeholders: '<div><div id="cxmw3" data-source="mw3" class="placeholder"></div><div id="cxmw2" data-source="mw2" class="placeholder"></div><div id="cxmw1" data-source="mw1" class="placeholder"></div></div>',
			draft: '<p id="cxmw1">PARAGRAPH 1</p>',
			translation: '<div id="cxmw3" data-source="mw3" class="placeholder"></div><div id="cxmw2" data-source="mw2" class="placeholder"></div><p id="cxmw1" data-cx-draft="true" data-source="mw1">PARAGRAPH 1</p>'
		}
	];

	QUnit.module( 'ext.cx.translation.loader', QUnit.newMwEnvironment( {
		setup: function () {
			this.translatonLoader = new mw.cx.ContentTranslationLoader();
		}
	} ) );

	QUnit.test( 'Translation daft restore test', function ( assert ) {
		var i;
		QUnit.expect( tests.length );
		// Without old revision flag set true, orphan sections wont get added.
		this.translatonLoader.originalRevision = true;
		for ( i = 0; i < tests.length; i++ ) {
			this.translatonLoader.translationUnits = this.translatonLoader.getTranslationUnits( tests[ i ].draft );
			this.translatonLoader.$sourceColumn = $( tests[ i ].source );
			this.translatonLoader.$translationColumn = $( tests[ i ].placeholders );
			this.translatonLoader.restore();
			assert.equal(
				this.translatonLoader.$translationColumn.html(),
				tests[ i ].translation,
				tests[ i ].description
			);
		}
	} );
}( jQuery, mediaWiki ) );
