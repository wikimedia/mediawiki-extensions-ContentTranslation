/*!
 * QUnit tests for Content Translation.
 *
 * @licence GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 'mw.cx.ui.Infobar', QUnit.newMwEnvironment() );

	QUnit.test( 'Show message with a string', function ( assert ) {
		const $fixture = $( '#qunit-fixture' );

		const infobar = new mw.cx.ui.Infobar();
		$fixture.append( infobar.$element );

		infobar.showMessage( 'test-class', 'Test <b>message</b>' );
		// infobar.$element also contains hidden label for close button
		assert.true( infobar.$element.text().indexOf( 'Test <b>message</b>' ) !== -1, 'Strings as escaped' );

		infobar.showMessage( 'changed-class', 'New message' );
		assert.true( infobar.$element.text().indexOf( 'New message' ) !== -1, 'Message is updated' );
	} );

	QUnit.test( 'Show message with a Message object', function ( assert ) {
		const $fixture = $( '#qunit-fixture' );

		const infobar = new mw.cx.ui.Infobar();
		$fixture.append( infobar.$element );

		mw.messages.set( 'cx-header-test', '[http://example.com $1] is <b>here</b>' );

		infobar.showMessage( 'test-class', mw.message( 'cx-header-test', 'Kissa' ) );
		// Taking a shortcut by testing the text content where html is dropped
		assert.true( infobar.$element.text().indexOf( 'Kissa is here' ) !== -1, 'Html is accepted' );
	} );

}() );
