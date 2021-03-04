/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 'mw.cx.TargetArticle', QUnit.newMwEnvironment() );

	QUnit.test( 'cleanupContent', function ( assert ) {
		var i, inputDoc, tests = [ {
			inputHtml: '<section re="cx:Section"><p id="mwaA"><span class="cx-segment" data-segmentid="10" id="34">sentence content</span></p><section>',
			output: '<p id="mwaA">sentence content</p>',
			desc: 'Sentence segment markup removed'
		},
		{
			inputHtml: '<section re="cx:Section"><table id="mwaA"><th id="9"><td id="10">T1<td></th><tr id="10"><td id="10">T1<td></tr></table><section>',
			output: '<table><tbody><tr><th></th><td>T1</td><td></td></tr><tr><td>T1</td><td></td></tr></tbody></table>',
			desc: 'Ids from table markup removed'
		},
		{
			inputHtml: '<section rel="cx:Section" id="cxTargetSection112" data-mw-cx-source="Google"><span typeof="mw:Transclusion" data-mw="{}" data-cx="[{&quot;adapted&quot;:false}]" id="mwCH0"></span></section>',
			output: '',
			desc: 'Pathological template removed'
		} ];
		for ( i = 0; i < tests.length; i++ ) {
			inputDoc = ve.createDocumentFromHtml( tests[ i ].inputHtml );
			assert.strictEqual(
				mw.cx.TargetArticle.static.getCleanedupContent( inputDoc ).getElementsByTagName( 'body' )[ 0 ].innerHTML,
				tests[ i ].output,
				tests[ i ].desc
			);
		}
	} );

}() );
