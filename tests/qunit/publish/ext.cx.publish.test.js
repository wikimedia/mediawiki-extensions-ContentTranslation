/*!
 * @author Niklas Laxström
 * @license GPL-2.0-or-later
 */

( function ( $, mw ) {
	'use strict';

	QUnit.module( 'ext.cx.publish', QUnit.newMwEnvironment( {
		beforeEach: function () {
			this.server = this.sandbox.useFakeServer();
			this.server.respondImmediately = true;
			this.sitemapper = new mw.cx.SiteMapper(
				mw.config.get( 'wgContentTranslationSiteTemplates' )
			);
			mw.cx.categoryTool = new mw.cx.CategoryTool( this.sitemapper );
		}
	} ) );

	// These two functions are copied from suites/resources/mediawiki.api/mediawiki.api.test.js
	function sequence( responses ) {
		var i = 0;
		return function ( request ) {
			var response = responses[ i ];
			if ( response ) {
				i++;
				request.respond.apply( request, response );
			}
		};
	}

	function sequenceBodies( status, headers, bodies ) {
		$.each( bodies, function ( i, body ) {
			bodies[ i ] = [ status, headers, body ];
		} );
		return sequence( bodies );
	}

	QUnit.test( 'Publishing with Captcha handling', function ( assert ) {
		var done, publisher,
			oldCaptchaHandler = mw.cx.Publish.prototype.captchaHandler,
			oldSuccessHandler = mw.cx.Publish.prototype.onSuccess,
			oldTitleExists = mw.cx.Publish.prototype.checkTargetTitle,
			newCaptchaHandler,
			server = this.server,
			$trigger = $( '<div>' );

		done = assert.async();

		newCaptchaHandler = function ( captcha ) {
			assert.ok( true, 'Captcha handler was called' );
			assert.strictEqual( captcha.captchaKey, '1234565', '...with correct captcha response' );
			return $.Deferred().resolve( {
				captchaKey: 1234565
			} ).promise();
		};

		publisher = new mw.cx.Publish( $trigger, this.sitemapper );
		publisher.captchaHandler = newCaptchaHandler;
		publisher.getContent = function () {
			return 'Content to publish';
		};
		publisher.checkTargetTitle = function () {
			return $.Deferred().resolve( false );
		};
		publisher.onSuccess = function () {
			assert.ok( true, 'Success handler was called' );
			done();
		};

		publisher.publish( {
			from: 'fi',
			to: 'en',
			sourceTitle: 'Hennala',
			title: 'Hennala',
			html: '...'
		} ).done( function () {
			assert.ok( true, 'Publishing was completed' );
			mw.cx.Publish.prototype.captchaHandler = oldCaptchaHandler;
			mw.cx.Publish.prototype.onSuccess = oldSuccessHandler;
			mw.cx.Publish.prototype.titleExists = oldTitleExists;
		} );

		server.respond( sequenceBodies( 200, { 'Content-Type': 'application/json' },
			[
				'{ "cxpublish": { "result": "error", "edit": { "captcha": { "captchaKey": "1234565" } } } }',
				'{ "cxpublish": { "result": "success" } }'
			]
		) );
	} );
}( jQuery, mediaWiki ) );
