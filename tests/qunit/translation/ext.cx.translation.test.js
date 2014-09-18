/**
 * @file
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( mw ) {
	'use strict';

	QUnit.module( 'ext.cx.translation', QUnit.newMwEnvironment() );

	QUnit.test( 'isHeading', function ( assert ) {
		QUnit.expect( 3 );

		assert.strictEqual( mw.cx.ContentTranslationEditor.isHeading( 'H1' ), true );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isHeading( 'h6' ), true );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isHeading( 'AH6' ), false );
	} );

	QUnit.test( 'isParentHeading', function ( assert ) {
		QUnit.expect( 6 );

		assert.strictEqual( mw.cx.ContentTranslationEditor.isParentHeading( 'H1', 'DIV' ), true );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isParentHeading( 'H2', 'H3' ), true );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isParentHeading( 'H2', 'H2' ), false );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isParentHeading( 'H3', 'H2' ), false );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isParentHeading( 'DIV', 'H2' ), false );
		assert.strictEqual( mw.cx.ContentTranslationEditor.isParentHeading( 'DIV', 'P' ), false );
	} );
}( mediaWiki ) );
