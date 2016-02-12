/*!
 * @author Niklas Laxström
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.publish', QUnit.newMwEnvironment( {
		setup: function () {
			this.server = this.sandbox.useFakeServer();
			this.sitemapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
			mw.cx.categoryTool = new mw.cx.CategoryTool( this.sitemapper );
		}
	} ) );

	QUnit.test( 'Publishing with Captcha handling', function ( assert ) {
		var publisher,
			oldCaptchaHandler = mw.cx.publish.prototype.captchaHandler,
			oldSuccessHandler = mw.cx.publish.prototype.onSuccess,
			oldTitleExists = mw.cx.publish.prototype.checkTargetTitle,
			newCaptchaHandler,
			server = this.server,
			$trigger = $( '<div>' );

		QUnit.expect( 4 );

		newCaptchaHandler = function ( captcha ) {
			var deferred = $.Deferred();

			assert.ok( true, 'Captcha handler was called' );
			assert.equal( captcha.captchaKey, '1234565', '...with correct captcha response' );
			return deferred.resolve( {
				captchaKey: 1234565
			} ).promise();
		};
		publisher = new mw.cx.publish( $trigger, this.sitemapper );
		publisher.captchaHandler = newCaptchaHandler;
		publisher.getContent = function () {
			return 'Content to publish';
		};
		publisher.checkTargetTitle = function () {
			return $.Deferred().resolve( false );
		};
		publisher.onSuccess = function () {
			assert.ok( true, 'Success handler was called' );
		};
		QUnit.stop();
		publisher.publish( {
			from: 'fi',
			to: 'en',
			sourceTitle: 'Hennala',
			title: 'Hennala',
			html: '...'
		} ).done( function () {
			assert.ok( true, 'Publishing was completed' );
			mw.cx.publish.prototype.captchaHandler = oldCaptchaHandler;
			mw.cx.publish.prototype.onSuccess = oldSuccessHandler;
			mw.cx.publish.prototype.titleExists = oldTitleExists;
			QUnit.start();
		} );
		server.requests[ 0 ].respond( 200, {
				'Content-Type': 'application/json'
			},
			'{ "cxpublish": { "result": "error", "edit": { "captcha": {"captchaKey":"1234565"} } } }'
		);
		server.requests[ 1 ].respond( 200, {
				'Content-Type': 'application/json'
			},
			'{ "cxpublish": { "result": "success" } }'
		);
	} );
}( jQuery, mediaWiki ) );
