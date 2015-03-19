/**
 * ContentTranslation event logging.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	/**
	 * ContentTranslation event logger
	 */
	function ContentTranslationEventLogging() {
		this.listen();
	}

	ContentTranslationEventLogging.prototype = {
		/**
		 * Listen for event logging.
		 */
		listen: function () {
			// Register handlers for event logging triggers
			mw.hook( 'mw.cx.translation.published' ).add( $.proxy( this.translatedPageCreated, this ) );
			mw.hook( 'mw.cx.cta.shown' ).add( $.proxy( this.ctaShown, this ) );
			mw.hook( 'mw.cx.cta.accept' ).add( $.proxy( this.ctaAccept, this ) );
			mw.hook( 'mw.cx.cta.reject' ).add( $.proxy( this.ctaReject, this ) );
		},

		/**
		 * Log creation of translated page.
		 * @param {string} contentLanguage source language
		 * @param {string} targetLanguage Target language code
		 */
		translatedPageCreated: function ( contentLanguage, targetLanguage ) {
			mw.track( 'event.ContentTranslation', {
				version: 1,
				token: mw.user.id(),
				action: 'create-translated-page',
				contentLanguage: contentLanguage,
				targetLanguage: targetLanguage
			} );
		},

		ctaShown: function ( campaign ) {
			mw.track( 'event.ContentTranslationCTA', {
				version: 1,
				cta: campaign,
				action: 'shown',
				session: mw.user.sessionId(),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				interfaceLanguage: mw.config.get( 'wgUserLanguage' )
			} );
		},

		ctaAccept: function ( campaign, sourceLanguage, targetLanguage ) {
			mw.track( 'event.ContentTranslationCTA', {
				version: 1,
				cta: campaign,
				action: 'accept',
				session: mw.user.sessionId(),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				interfaceLanguage: mw.config.get( 'wgUserLanguage' ),
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage
			} );
		},

		ctaReject: function ( campaign ) {
			mw.track( 'event.ContentTranslationCTA', {
				version: 1,
				cta: campaign,
				action: 'reject',
				session: mw.user.sessionId(),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				interfaceLanguage: mw.config.get( 'wgUserLanguage' )
			} );
		}
	};

	$( function () {
		/*jshint -W031*/
		new ContentTranslationEventLogging();
	} );
}( jQuery, mediaWiki ) );
