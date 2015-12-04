/**
 * @file
 * @author Santhosh Thottingal
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	var tests = [ {
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
			draft: '<p id="cx1" data-source="1">PARAGRAPH 1</p>',
			translation: '<p id="cxmw1" data-source="mw1" data-cx-draft="true">PARAGRAPH 1</p>'
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
		},
		{
			description: 'Source article changed completely. Place the draft in linear order from the beginning of placeholders',
			source: '<div><p id="mw1">Paragraph 1</p><div><p id="mw2">Paragraph 2</p><p id="mw3">Paragraph 3</p></div>',
			placeholders: '<div><div id="cxmw1" data-source="mw1" class="placeholder"></div><div id="cxmw2" data-source="mw2" class="placeholder"></div><div id="cxmw3" data-source="mw3" class="placeholder"></div></div>',
			draft: '<p id="cxmw4" data-source="mw4">PARAGRAPH 4</p><p id="cxmw5" data-source="mw5">PARAGRAPH 5</p>',
			translation: '<p id="cxmw1" data-source="mw1" data-cx-draft="true">PARAGRAPH 4</p><p id="cxmw2" data-source="mw2" data-cx-draft="true">PARAGRAPH 5</p><div id="cxmw3" data-source="mw3" class="placeholder"></div>'
		},
		{
			description: 'Source article changed completely. More draft sections than source sections. Place the draft in linear order from the beginning of placeholders. Rest of them below the source article.',
			source: '<div><p id="mw1">Paragraph 1</p><div><p id="mw2">Paragraph 2</p><p id="mw3">Paragraph 3</p></div>',
			placeholders: '<div><div id="cxmw1" data-source="mw1" class="placeholder"></div><div id="cxmw2" data-source="mw2" class="placeholder"></div><div id="cxmw3" data-source="mw3" class="placeholder"></div></div>',
			draft: '<p id="cxmw4">PARAGRAPH 4</p><p id="cxmw5">PARAGRAPH 5</p><p id="cxmw6">PARAGRAPH 6</p><p id="cxmw7" data-source="mw7">PARAGRAPH 7</p>',
			translation: '<p id="cxmw1" data-cx-draft="true" data-source="mw1">PARAGRAPH 4</p><p id="cxmw2" data-cx-draft="true" data-source="mw2">PARAGRAPH 5</p><p id="cxmw3" data-cx-draft="true" data-source="mw3">PARAGRAPH 6</p><p id="cxmw7" data-source="mw7" data-cx-draft="true">PARAGRAPH 7</p>'
		}
	];

	QUnit.module( 'ext.cx.translation.draft', QUnit.newMwEnvironment( {
		setup: function () {
			mw.cx.ContentTranslationDraft.prototype.hasConflictingTranslation = function () {
				return $.Deferred().resolve( false );
			};
			this.cxDraft = new mw.cx.ContentTranslationDraft();
		}
	} ) );

	QUnit.test( 'Draft restore test', function ( assert ) {
		var i;
		QUnit.expect( tests.length );

		for ( i = 0; i < tests.length; i++ ) {
			this.cxDraft.$draft = $( tests[ i ].draft );
			this.cxDraft.$source = $( tests[ i ].source );
			this.cxDraft.$translation = $( tests[ i ].placeholders );
			this.cxDraft.restore();
			assert.equal( this.cxDraft.$translation.html(), tests[ i ].translation, tests[ i ].description );
		}
	} );
}( jQuery, mediaWiki ) );
