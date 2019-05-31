/*!
 * ContentTranslation event logging for campaigns.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	/**
	 * ContentTranslation event logger
	 */
	function ContentTranslationEventLogging() {
		// Register handlers for event logging triggers
		mw.hook( 'mw.cx.cta.shown' ).add( this.ctaShown );
		mw.hook( 'mw.cx.cta.accept' ).add( this.ctaAccept );
		mw.hook( 'mw.cx.cta.reject' ).add( this.ctaReject );
	}

	ContentTranslationEventLogging.prototype = {
		/**
		 * CTA is shown.
		 *
		 * @param {string} campaign
		 */
		ctaShown: function ( campaign ) {
			mw.track( 'event.ContentTranslationCTA', {
				version: 1,
				cta: campaign,
				token: mw.user.id(),
				action: 'shown',
				session: mw.user.sessionId(),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				interfaceLanguage: mw.config.get( 'wgUserLanguage' )
			} );
		},

		ctaAccept: function ( campaign, sourceLanguage, sourceTitle, targetLanguage ) {
			mw.track( 'event.ContentTranslationCTA', {
				version: 1,
				cta: campaign,
				action: 'accept',
				token: mw.user.id(),
				session: mw.user.sessionId(),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				interfaceLanguage: mw.config.get( 'wgUserLanguage' ),
				sourceLanguage: sourceLanguage,
				sourceTitle: sourceTitle,
				targetLanguage: targetLanguage
			} );
			mw.track( 'counter.MediaWiki.cx.campaign.' + campaign + '.accept', 1 );
		},

		ctaReject: function ( campaign ) {
			mw.track( 'event.ContentTranslationCTA', {
				version: 1,
				cta: campaign,
				token: mw.user.id(),
				action: 'reject',
				session: mw.user.sessionId(),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				interfaceLanguage: mw.config.get( 'wgUserLanguage' )
			} );
		}
	};

	$( function () {
		// eslint-disable-next-line no-new
		new ContentTranslationEventLogging();
	} );
}() );
