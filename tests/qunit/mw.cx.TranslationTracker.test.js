/*!
 * @author Santhosh Thottingal
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 'mw.cx.TranslationTracker', QUnit.newMwEnvironment() );

	QUnit.test( 'calculateUnmodifiedContent', function ( assert ) {
		var i, tests = [
			{
				string1: 'a b c d',
				string2: 'a b c d',
				language: 'en',
				result: 1,
				desc: 'No modification'
			},
			{
				string1: 'a b c d',
				string2: 'a b c d e',
				language: 'en',
				result: 0.8,
				desc: 'A token was added'
			},
			{
				string1: 'a b c d',
				string2: 'a b c',
				language: 'en',
				result: 0.75,
				desc: 'A token was deleted'
			},
			{
				string1: 'a b c d e',
				string2: 'A B C D E',
				language: 'en',
				result: 0,
				desc: 'All tokens modified'
			},
			{
				string1: '典范条目',
				string2: '典闻动态',
				language: 'zh',
				result: 0.25,
				desc: 'A character modified for Chinese'
			},
			{
				string1: 'a b c d e.',
				string2: 'a B c d e. f g h',
				language: 'en',
				result: 0.5,
				desc: '3 token were added, one modified'
			},
			{
				string1: 'foo',
				string2: '   ',
				language: 'en',
				result: 0,
				desc: 'whitespace does not count as a token'
			},
			{
				string1: '',
				string2: '',
				language: 'en',
				result: 0,
				desc: 'If both are blank, return 0'
			}
		];
		for ( i = 0; i < tests.length; i++ ) {
			assert.strictEqual( mw.cx.TranslationTracker.static.calculateUnmodifiedContent(
				tests[ i ].string1, tests[ i ].string2, tests[ i ].language
			),
			tests[ i ].result,
			tests[ i ].desc
			);
		}
	} );

	QUnit.test( 'getSectionNodeValidationTokens', function ( assert ) {
		var i, model, node, tokens,
			testSet = [
				{
					html: '<section id="cxSourceSection27" rel="cx:Section" class="ve-ce-branchNode ve-ce-activeNode ve-ce-sectionNode ve-ce-cxLintableNode ve-ce-cxSectionNode ve-ce-activeNode-active noime" spellcheck="false" style="margin-top: 0px; height: 62px;" contenteditable="true"><p id="mwlg" class="ve-ce-branchNode ve-ce-contentBranchNode ve-ce-paragraphNode"><span class="cx-segment ve-ce-annotation ve-ce-cxSentenceSegmentAnnotation" data-segmentid="85"><span class="ve-ce-branchNode-slug ve-ce-branchNode-inlineSlug"><img role="none" alt="" class="ve-ce-chimera ve-ce-chimera-gecko" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></span><span about="#mwt180" class="mwe-math-element ve-ce-leafNode ve-ce-mwLatexNode ve-ce-focusableNode" data-mw="{&quot;name&quot;:&quot;math&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;extsrc&quot;:&quot;\\\\sum_i \\\\gamma_i c_{V,i} = \\\\alpha V K_T&quot;}}" id="mwlw" typeof="mw:Extension/math" contenteditable="false"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\\displaystyle \\sum _{i}\\gamma _{i}c_{V,i}=\\alpha VK_{T}}" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow class="MJX-TeXAtom-ORD"><mstyle displaystyle="true" scriptlevel="0"><munder><mo>∑</mo><mrow class="MJX-TeXAtom-ORD"><mi>i</mi></mrow></munder><msub><mi>γ</mi><mrow class="MJX-TeXAtom-ORD"><mi>i</mi></mrow></msub><msub><mi>c</mi><mrow class="MJX-TeXAtom-ORD"><mi>V</mi><mo>,</mo><mi>i</mi></mrow></msub><mo>=</mo><mi>α</mi><mi>V</mi><msub><mi>K</mi><mrow class="MJX-TeXAtom-ORD"><mi>T</mi></mrow></msub></mstyle></mrow><annotation encoding="application/x-tex">{\\displaystyle \\sum _{i}\\gamma _{i}c_{V,i}=\\alpha VK_{T}}</annotation></semantics></math></span><img alt="{\\displaystyle \\sum _{i}\\gamma _{i}c_{V,i}=\\alpha VK_{T}}" aria-hidden="true" class="mwe-math-fallback-image-inline" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e27f4bb563eb88ea6a36675ef119c347738fc3ea" style="vertical-align: -3.005ex; width:19.009ex; height:5.509ex;"></span>.</span></p></section>',
					resultTokens: 1,
					failureMessage: 'Tokens for section with math expression not calculated correctly'
				},
				{
					html: '<section id="cxSourceSection8" rel="cx:Section" class="ve-ce-branchNode ve-ce-activeNode ve-ce-sectionNode ve-ce-cxLintableNode ve-ce-cxSectionNode noime ve-ce-activeNode-active" spellcheck="false" style="margin-top: 0px; height: 93px;" contenteditable="true"><p id="mwIw" class="ve-ce-branchNode ve-ce-contentBranchNode ve-ce-paragraphNode"><span class="cx-segment ve-ce-annotation ve-ce-cxSentenceSegmentAnnotation" data-segmentid="22">The expression for the Grüneisen constant of a perfect crystal with pair interactions in<span about="#mwt36" class="mwe-math-element ve-ce-leafNode ve-ce-mwLatexNode ve-ce-focusableNode" data-mw="{&quot;name&quot;:&quot;math&quot;,&quot;attrs&quot;:{},&quot;body&quot;:{&quot;extsrc&quot;:&quot;d&quot;}}" id="mwJA" typeof="mw:Extension/math" contenteditable="false"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\\displaystyle d}" xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow class="MJX-TeXAtom-ORD"><mstyle displaystyle="true" scriptlevel="0"><mi>d</mi></mstyle></mrow><annotation encoding="application/x-tex">{\\displaystyle d}</annotation></semantics></math></span><img alt="d" aria-hidden="true" class="mwe-math-fallback-image-inline" src="https://wikimedia.org/api/rest_v1/media/math/render/svg/e85ff03cbe0c7341af6b982e47e9f90d235c66ab" style="vertical-align: -0.338ex; width:1.216ex; height:2.176ex;"></span>-dimensional space has the form:<span about="#mwt42" class="mw-ref ve-ce-leafNode ve-ce-focusableNode ve-ce-mwReferenceNode" id="cite_ref-Krivtsov_Kuzkin_2-0" rel="dc:references" typeof="mw:Extension/ref" contenteditable="false"><a href="#" style="counter-reset: mw-Ref 2;"><span class="mw-reflink-text">[2]</span></a></span></span><span class="ve-ce-branchNode-slug ve-ce-branchNode-inlineSlug"><img role="none" alt="" class="ve-ce-chimera ve-ce-chimera-gecko" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="></span></p></section>',
					resultTokens: 20,
					failureMessage: 'Tokens for section with reference not calculated correctly'
				}
			];

		for ( i = 0; i < testSet.length; i++ ) {
			model = ve.dm.converter.getModelFromDom( ve.createDocumentFromHtml( testSet[ i ].html ) );
			node = model.getDocumentNode().getChildren()[ 0 ];
			tokens = mw.cx.TranslationTracker.static.getSectionNodeValidationTokens( node, 'en' );
			assert.strictEqual( tokens.length, testSet[ i ].resultTokens, testSet[ i ].failureMessage );
		}

	} );
}() );
