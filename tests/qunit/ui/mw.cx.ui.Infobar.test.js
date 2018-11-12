/*!
 * QUnit tests for Content Translation.
 *
 * @licence GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 'mw.cx.ui.Infobar', QUnit.newMwEnvironment() );

	QUnit.test( 'Show message with a string', function ( assert ) {
		var infobar, $fixture = $( '#qunit-fixture' );

		infobar = new mw.cx.ui.Infobar();
		$fixture.append( infobar.$element );

		infobar.showMessage( 'test-class', 'Test <b>message</b>' );
		assert.strictEqual( infobar.$element.text(), 'Test <b>message</b>', 'Strings as escaped' );

		infobar.showMessage( 'changed-class', 'New message' );
		assert.strictEqual( infobar.$element.text(), 'New message', 'Message is updated' );
	} );

	QUnit.test( 'Show message with a Message object', function ( assert ) {
		var infobar, $fixture = $( '#qunit-fixture' );

		infobar = new mw.cx.ui.Infobar();
		$fixture.append( infobar.$element );

		mw.messages.set( 'cx-header-test', '[http://example.com $1] is <b>here</b>' );

		infobar.showMessage( 'test-class', mw.message( 'cx-header-test', 'Kissa' ) );
		// Taking a shortcut by testing the text content where html is dropped
		assert.strictEqual( infobar.$element.text(), 'Kissa is here', 'Html is accepted' );
	} );

}() );
