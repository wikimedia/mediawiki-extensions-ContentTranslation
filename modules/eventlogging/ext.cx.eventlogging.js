/*!
 * ContentTranslation event logging.
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */

( function ( $, mw ) {
	'use strict';

	var saveCount = 0;
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
			mw.hook( 'mw.cx.translation.published' ).add( $.proxy( this.published, this ) );
			mw.hook( 'mw.cx.translation.publish.error' ).add( $.proxy( this.publishFailed, this ) );
			mw.hook( 'mw.cx.translation.saved' ).add( $.proxy( this.saved, this ) );
			mw.hook( 'mw.cx.translation.continued' ).add( $.proxy( this.continued, this ) );
			mw.hook( 'mw.cx.translation.deleted' ).add( $.proxy( this.deleted, this ) );
			mw.hook( 'mw.cx.cta.shown' ).add( $.proxy( this.ctaShown, this ) );
			mw.hook( 'mw.cx.cta.accept' ).add( $.proxy( this.ctaAccept, this ) );
			mw.hook( 'mw.cx.cta.reject' ).add( $.proxy( this.ctaReject, this ) );
			mw.hook( 'mw.cx.draft.restore-failed' ).add( $.proxy( this.restoreFailed, this ) );
			mw.hook( 'mw.cx.translation.save-failed' ).add( $.proxy( this.saveFailed, this ) );
		},

		/**
		 * Log creation of translated page.
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 */
		published: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle ) {
			mw.track( 'event.ContentTranslation', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				action: 'publish',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle
			} );
		},

		/**
		 * Log publish failures
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 * @param {string} trace Error trace
		 */
		publishFailed: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace ) {
			mw.track( 'event.ContentTranslation', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				action: 'publish-failure',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle
			} );
			mw.track( 'event.ContentTranslationError', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				context: 'publish-failure',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle,
				trace: trace.substring( 0, 500 )
			} );
		},

		/**
		 * Log save failures
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 * @param {string} trace Error trace
		 */
		saveFailed: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace ) {
			mw.track( 'event.ContentTranslationError', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				context: 'save-failure',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle,
				trace: trace.substring( 0, 500 )
			} );
		},

		/**
		 * Log translation restore failures
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 * @param {string} trace Error trace
		 */
		restoreFailed: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace ) {
			mw.track( 'event.ContentTranslationError', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				context: 'restore-failure',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle,
				trace: trace.substring( 0, 500 )
			} );
		},

		/**
		 * Log saving(draft) of translated page.
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 */
		saved: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle ) {
			if ( saveCount ) {
				return;
			}
			mw.track( 'event.ContentTranslation', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				action: 'save',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle
			} );
			saveCount++;
		},

		/**
		 * Log continuing translation.
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 */
		continued: function ( sourceLanguage, targetLanguage, sourceTitle ) {
			mw.track( 'event.ContentTranslation', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				action: 'continue',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle
			} );
		},

		/**
		 * Log deletion of translated page.
		 *
		 * @param {string} sourceLanguage Source language code
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 */
		deleted: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle ) {
			mw.track( 'event.ContentTranslation', {
				version: 1,
				token: mw.user.id(),
				session: mw.user.sessionId(),
				action: 'delete',
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle
			} );
		},

		/**
		 * CTA is shown.
		 *
		 * @param {string} campaign
		 */
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
		/* eslint no-new:off */
		new ContentTranslationEventLogging();
	} );
}( jQuery, mediaWiki ) );
