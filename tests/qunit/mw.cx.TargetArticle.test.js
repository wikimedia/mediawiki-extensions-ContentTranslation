/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 'mw.cx.TargetArticle', QUnit.newMwEnvironment() );

	QUnit.test( 'cleanupContent', ( assert ) => {
		const tests = [ {
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
		for ( let i = 0; i < tests.length; i++ ) {
			const inputDoc = ve.createDocumentFromHtml( tests[ i ].inputHtml );
			assert.strictEqual(
				mw.cx.TargetArticle.static.getCleanedupContent( inputDoc ).getElementsByTagName( 'body' )[ 0 ].innerHTML,
				tests[ i ].output,
				tests[ i ].desc
			);
		}
	} );

	QUnit.test( 'cleanupContent: duplicated reference bodies', ( assert ) => {
		function makeRef( dataMw ) {
			return '<sup typeof="mw:Extension/ref" data-mw=\'' + JSON.stringify( dataMw ) + '\'></sup>';
		}
		function getDataMw( element ) {
			return JSON.parse( element.getAttribute( 'data-mw' ) );
		}
		const body = { html: '<span typeof="mw:Transclusion">cite</span>' };
		const staleBody = {
			html: '<span typeof="mw:Transclusion">cite</span><cite data-ve-ignore="">rendered</cite>'
		};

		let inputDoc = ve.createDocumentFromHtml(
			'<p>' +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10' }, body: body } ) +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10' }, body: staleBody } ) +
			makeRef( { name: 'ref', attrs: { name: 'Other' }, body: body } ) +
			'</p>'
		);
		let refs = mw.cx.TargetArticle.static.getCleanedupContent( inputDoc )
			.querySelectorAll( '[typeof~="mw:Extension/ref"]' );
		assert.deepEqual( getDataMw( refs[ 0 ] ).body, body,
			'First reference with a name keeps its body' );
		assert.strictEqual( getDataMw( refs[ 1 ] ).body, undefined,
			'Later reference with the same name loses its stale body' );
		assert.strictEqual( getDataMw( refs[ 1 ] ).attrs.name, 'Bodie10',
			'Later reference with the same name keeps its name' );
		assert.deepEqual( getDataMw( refs[ 2 ] ).body, body,
			'Reference with a different name keeps its body' );

		inputDoc = ve.createDocumentFromHtml(
			'<p>' +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10' } } ) +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10' }, body: body } ) +
			'</p>'
		);
		refs = mw.cx.TargetArticle.static.getCleanedupContent( inputDoc )
			.querySelectorAll( '[typeof~="mw:Extension/ref"]' );
		assert.deepEqual( getDataMw( refs[ 1 ] ).body, body,
			'The only body is kept when a name-only reuse comes first' );

		inputDoc = ve.createDocumentFromHtml(
			'<p>' +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10' }, body: body } ) +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10' }, mainRef: 'Bodie10', body: { html: 'details' } } ) +
			makeRef( { name: 'ref', attrs: { name: 'Bodie10', group: 'note' }, body: body } ) +
			'</p>'
		);
		refs = mw.cx.TargetArticle.static.getCleanedupContent( inputDoc )
			.querySelectorAll( '[typeof~="mw:Extension/ref"]' );
		assert.deepEqual( getDataMw( refs[ 1 ] ).body, { html: 'details' },
			'Sub-reference keeps its details body' );
		assert.deepEqual( getDataMw( refs[ 2 ] ).body, body,
			'Same name in a different group keeps its body' );
	} );

}() );
