/**
 * @file
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.publish', QUnit.newMwEnvironment( {
		setup: function () {
			this.server = this.sandbox.useFakeServer();
		}
	} ) );

	QUnit.test( 'Captcha handling', function ( assert ) {
		var publisher,
			oldCaptchaHandler = mw.cx.publish.prototype.captchaHandler,
			newCaptchaHandler,
			server = this.server,
			$trigger = $( '<div>' );

		QUnit.expect( 3 );

		newCaptchaHandler = function ( captcha ) {
			var deferred = $.Deferred();

			assert.ok( true, 'Captcha handler was called' );
			assert.equal( captcha.captchaKey, '1234565', '...with correct captcha response' );
			return deferred.resolve( {
				captchaKey: 1234565
			} ).promise();
		};
		publisher = new mw.cx.publish( $trigger );
		publisher.captchaHandler = newCaptchaHandler;
		publisher.publish( {
			from: 'fi',
			to: 'en',
			sourceTitle: 'Hennala',
			title: 'Hennala',
			html: '...'
		} ).done( function () {
			assert.ok( true, 'Publishing was completed' );
			mw.cx.publish.prototype.captchaHandler = oldCaptchaHandler;
		} );
		server.requests[ 0 ].respond( 200, { 'Content-Type': 'application/json' },
			'{ "cxpublish": { "result": "error", "edit": { "captcha": {"captchaKey":"1234565"} } } }'
		);
		server.requests[ 1 ].respond( 200, { 'Content-Type': 'application/json'	},
			'{ "cxpublish": { "result": "success" } }'
		);
	} );
}( jQuery, mediaWiki ) );
