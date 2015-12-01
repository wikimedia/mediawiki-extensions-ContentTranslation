/*!
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( mw ) {
	'use strict';

	QUnit.module( 'ext.cx.translation', QUnit.newMwEnvironment() );

	QUnit.test( 'isHeading', function ( assert ) {
		var cxTranslation = new mw.cx.ContentTranslationEditor();
		QUnit.expect( 3 );

		assert.strictEqual( cxTranslation.isHeading( 'H1' ), true );
		assert.strictEqual( cxTranslation.isHeading( 'h6' ), true );
		assert.strictEqual( cxTranslation.isHeading( 'AH6' ), false );
	} );

	QUnit.test( 'isParentHeading', function ( assert ) {
		var cxTranslation = new mw.cx.ContentTranslationEditor();
		QUnit.expect( 6 );

		assert.strictEqual( cxTranslation.isParentHeading( 'H1', 'DIV' ), true );
		assert.strictEqual( cxTranslation.isParentHeading( 'H2', 'H3' ), true );
		assert.strictEqual( cxTranslation.isParentHeading( 'H2', 'H2' ), false );
		assert.strictEqual( cxTranslation.isParentHeading( 'H3', 'H2' ), false );
		assert.strictEqual( cxTranslation.isParentHeading( 'DIV', 'H2' ), false );
		assert.strictEqual( cxTranslation.isParentHeading( 'DIV', 'P' ), false );
	} );
}( mediaWiki ) );
