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
			assert.strictEqual( mw.cx.TranslationTracker.calculateUnmodifiedContent(
				tests[ i ].string1, tests[ i ].string2, tests[ i ].language
			),
			tests[ i ].result,
			tests[ i ].desc );
		}
	} );

}() );
