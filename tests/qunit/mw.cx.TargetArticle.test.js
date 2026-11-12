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

	function getTargetArticle( shouldResubmit, sentToken, rendered ) {
		const targetArticle = Object.create( mw.cx.TargetArticle.prototype );
		Object.assign( targetArticle, {
			translation: { isSectionTranslation: () => false },
			hCaptchaData: sentToken ? { captchaword: 'old' } : null,
			publishArguments: [ true, false ],
			hCaptchaWidget: {
				captchaRendered: !!rendered,
				renderCalls: 0,
				updateForFailure: () => Promise.resolve( shouldResubmit ),
				renderCaptcha: () => {
					targetArticle.hCaptchaWidget.renderCalls++;
					return Promise.resolve();
				},
				getCaptchaDataForSubmission: () => Promise.resolve( { captchaword: 'token' } )
			},
			publishCalls: [],
			errors: []
		} );
		targetArticle.publish = ( ...args ) => targetArticle.publishCalls.push( args );
		targetArticle.showPublishError = ( msg ) => targetArticle.errors.push( msg );
		return targetArticle;
	}

	QUnit.test( 'publishSuccess: hCaptcha failure', function ( assert ) {
		this.sandbox.stub( mw.loader, 'using' ).returns( Promise.resolve() );
		const response = { cxpublish: { result: 'error', edit: { captcha: { type: 'hcaptcha' } } } };
		const first = getTargetArticle( false, false );
		const refused = getTargetArticle( false, true );
		const stricter = getTargetArticle( true, true );

		return Promise.all( [ first, refused, stricter ].map( ( t ) => t.publishSuccess( response ) ) ).then( () => {
			assert.deepEqual( first.publishCalls, [ [ true, false ] ], 'Publishes again with the same arguments' );
			assert.strictEqual( first.hCaptchaData.captchaword, 'token', 'Sends the new token' );
			assert.deepEqual( refused.publishCalls, [], 'Does not publish again when the token was refused' );
			assert.strictEqual( refused.errors.length, 1, 'Shows an error when the token was refused' );
			assert.deepEqual( stricter.publishCalls, [ [ true, false ] ], 'Publishes again for a stricter challenge' );
		} );
	} );

	QUnit.test( 'publishComplete: removes the hCaptcha widget', ( assert ) => {
		const targetArticle = getTargetArticle( false, false, true );
		const $container = $( '<div>' ).addClass( 'cx-hcaptcha' ).appendTo( '#qunit-fixture' );
		targetArticle.$hCaptchaContainer = $container;
		targetArticle.emit = () => {};

		targetArticle.publishComplete( null );

		assert.strictEqual( targetArticle.hCaptchaWidget, null, 'Forgets the widget' );
		assert.strictEqual( $container.closest( document.documentElement ).length, 0, 'Removes the container' );
	} );

	QUnit.test( 'publishSuccess: hCaptcha widget renders once', function ( assert ) {
		this.sandbox.stub( mw.loader, 'using' ).returns( Promise.resolve() );
		const response = { cxpublish: { result: 'error', edit: { captcha: { type: 'hcaptcha' } } } };
		const notRendered = getTargetArticle( false, false, false );
		const rendered = getTargetArticle( true, true, true );

		return Promise.all( [ notRendered, rendered ].map( ( t ) => t.publishSuccess( response ) ) ).then( () => {
			assert.strictEqual( notRendered.hCaptchaWidget.renderCalls, 1, 'Renders a new widget' );
			assert.strictEqual( rendered.hCaptchaWidget.renderCalls, 0,
				'Does not render again, updateForFailure() already did' );
			assert.deepEqual( rendered.publishCalls, [ [ true, false ] ], 'Still publishes again' );
		} );
	} );

}() );
