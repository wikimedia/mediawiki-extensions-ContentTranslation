/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0-or-later
 */

( function ( $, mw ) {
	'use strict';

	var tests = [
		{
			description: 'All ids of source and draft match perfectly',
			source: '<div><p id="test1-1">Paragraph 1</p></div>',
			placeholders: '<div><div id="cxtest1-1" data-source="test1-1" class="placeholder"></div></div>',
			draft: '<p id="cxtest1-1">PARAGRAPH 1</p>',
			translation: '<p id="cxtest1-1" data-cx-draft="true" data-source="test1-1">PARAGRAPH 1</p>'
		},
		{
			description: 'Source section replaced by new section. Insert the draft above the placeholder for next match',
			source: '<div><p id="test3-2">Paragraph 2</p><p id="test3-3">Paragraph 3</p></div>',
			placeholders: '<div><div id="cxtest3-2" data-source="test3-2" class="placeholder"></div><div id="cxtest3-3" data-source="test3-3" class="placeholder"></div></div>',
			draft: '<p id="cxtest3-1" data-source="test3-1">PARAGRAPH 1</p><p id="cxtest3-3">PARAGRAPH 3</p>',
			translation: '<div id="cxtest3-2" data-source="test3-2" class="placeholder"></div><p id="cxtest3-1" data-source="test3-1" data-cx-draft="true">PARAGRAPH 1</p><p id="cxtest3-3" data-cx-draft="true" data-source="test3-3">PARAGRAPH 3</p>'
		},
		{
			description: 'Source section has new sections above and below. Place the draft in correct position',
			source: '<div><p id="test4-1">Paragraph 1</p><div><p id="test4-2">Paragraph 2</p><p id="test4-3">Paragraph 3</p></div>',
			placeholders: '<div><div id="cxtest4-1" data-source="test4-1" class="placeholder"></div><div id="cxtest4-2" data-source="test4-2" class="placeholder"></div><div id="cxtest4-3" data-source="test4-3" class="placeholder"></div></div>',
			draft: '<p id="cxtest4-2">PARAGRAPH 2</p>',
			translation: '<div id="cxtest4-1" data-source="test4-1" class="placeholder"></div><p id="cxtest4-2" data-cx-draft="true" data-source="test4-2">PARAGRAPH 2</p><div id="cxtest4-3" data-source="test4-3" class="placeholder"></div>'
		},
		{
			description: 'Source section has new order of sections. Place the draft in correct position',
			source: '<div><p id="test5-3">Paragraph 3</p><div><p id="test5-2">Paragraph 2</p><p id="test5-1">Paragraph 1</p></div>',
			placeholders: '<div><div id="cxtest5-3" data-source="test5-3" class="placeholder"></div><div id="cxtest5-2" data-source="test5-2" class="placeholder"></div><div id="cxtest5-1" data-source="test5-1" class="placeholder"></div></div>',
			draft: '<p id="cxtest5-1">PARAGRAPH 1</p>',
			translation: '<div id="cxtest5-3" data-source="test5-3" class="placeholder"></div><div id="cxtest5-2" data-source="test5-2" class="placeholder"></div><p id="cxtest5-1" data-cx-draft="true" data-source="test5-1">PARAGRAPH 1</p>'
		}
	];

	QUnit.module( 'ext.cx.translation.loader', QUnit.newMwEnvironment( {
		beforeEach: function () {
			this.translationLoader = new mw.cx.ContentTranslationLoader();
			this.translationLoader.translation = { sourceRevisionId: -12345 };
		}
	} ) );

	QUnit.test( 'Translation daft restore test', function ( assert ) {
		var i;
		// Without old revision flag set true, orphan sections wont get added.
		this.translationLoader.originalRevision = true;
		for ( i = 0; i < tests.length; i++ ) {
			this.translationLoader.translationUnits = this.translationLoader.getTranslationUnits( tests[ i ].draft );
			this.translationLoader.$sourceColumn = $( tests[ i ].source );
			this.translationLoader.$translationColumn = $( tests[ i ].placeholders );
			this.translationLoader.restore();
			assert.strictEqual(
				this.translationLoader.$translationColumn.html(),
				tests[ i ].translation,
				tests[ i ].description
			);
		}
	} );
}( jQuery, mediaWiki ) );
