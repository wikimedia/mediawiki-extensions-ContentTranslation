/**
 * @file
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	/**
	 * Testing persistent hooks is tricky. This should take care of the messy details.
	 *
	 * @param {string} hook Name of the hook.
	 * @param {function} trigger Function to call to trigger an event.
	 * @param {function} callback Function to bind to the hook.
	 */
	function triggerSafely( hook, callback, trigger ) {
		// Fire wake even so we know we are not getting cached data,
		// use timeout as there is no way to know when trigger has
		// been processed - especially since the other end uses
		// $.debounce. There seems to be no way to clear the hooks
		// either.
		mw.hook( hook ).fire();

		trigger.call();

		setTimeout( function () {
			mw.hook( hook ).add( callback );
		}, 300 );
	}

	QUnit.module( 'ext.cx.editor', QUnit.newMwEnvironment( {
		setup: function () {
			this.hook = null;
			this.asserter = null;
			this.$section = $( '<div>' ).appendTo( $( '#qunit-fixture' ) );
			this.$section.cxEditor();
		},
		teardown: function () {
			mw.hook( this.hook ).remove( this.asserter );
		}
	} ) );

	QUnit.test( 'Initialization', function ( assert ) {
		QUnit.expect( 1 );
		assert.strictEqual(
			this.$section.attr( 'contenteditable' ),
			'true',
			'Section is content editable'
		);
	} );

	QUnit.test( 'Event (change)', function ( assert ) {
		var $section = this.$section;

		this.hook = 'mw.cx.translation.change';
		this.asserter = function ( value ) {
			QUnit.start();
			assert.ok( value instanceof jQuery, 'Event was fired' );
		};

		QUnit.expect( 1 );
		QUnit.stop();
		triggerSafely( this.hook, this.asserter, function () {
			$section.text( 'bar' ).trigger( 'input' );
		} );
	} );
}( jQuery, mediaWiki ) );
