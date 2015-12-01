/*!
 * QUnit tests for Content Translation.
 *
 * @ingroup Extensions
 * @licence GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.header', QUnit.newMwEnvironment() );

	QUnit.test( 'Show message with a string', function ( assert ) {
		var $header, $fixture = $( '#qunit-fixture' );

		QUnit.expect( 4 );

		$fixture.cxHeader();
		$header = $fixture.data( 'cxHeader' );

		$header.showMessage( 'test-class', 'Test <b>message</b>' );
		assert.equal( $header.$infoBar.text(), 'Test <b>message</b>', 'Strings as escaped' );
		assert.ok( $header.$infoBar.hasClass( 'test-class' ) );

		$header.showMessage( 'changed-class', 'New message' );
		assert.equal( $header.$infoBar.text(), 'New message', 'Message is updated' );
		assert.ok( $header.$infoBar.hasClass( 'changed-class' ) );
	} );

	QUnit.test( 'Show message with a Message object', function ( assert ) {
		var $header, $fixture = $( '#qunit-fixture' );

		QUnit.expect( 1 );

		$fixture.cxHeader();
		$header = $fixture.data( 'cxHeader' );

		mw.messages.set( 'cx-header-test', '[http://example.com $1] is <b>here</b>' );

		$header.showMessage( 'test-class', mw.message( 'cx-header-test', 'Kissa' ) );
		// Taking a shortcut by testing the text content where html is dropped
		assert.equal( $header.$infoBar.text(), 'Kissa is here', 'Html is accepted' );
	} );

}( jQuery, mediaWiki ) );
