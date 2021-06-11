/*!
 * ContentTranslation event logging for translation view.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
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
			mw.hook( 'mw.cx.translation.published' ).add( this.published );
			mw.hook( 'mw.cx.translation.publish.error' ).add( this.publishFailed.bind( this ) );
			mw.hook( 'mw.cx.translation.saved' ).add( this.saved );
			mw.hook( 'mw.cx.translation.save-failed' ).add( this.saveFailed );
			mw.hook( 'mw.cx.translation.continued' ).add( this.continued );
			mw.hook( 'mw.cx.draft.restore-failed' ).add( this.restoreFailed );
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
			mw.track( 'counter.MediaWiki.cx.publish.success', 1 );
		},

		/**
		 * Log publish failures
		 *
		 * @param {string} sourceLanguage source language
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 * @param {Object} trace Error trace
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
				trace: JSON.stringify( trace ).substring( 0, 500 )
			} );
			mw.track( 'counter.MediaWiki.cx.publish.fail', 1 );
			this.handleAbuseFilter( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace, 'publishing' );
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
			mw.track( 'counter.MediaWiki.cx.save.fail', 1 );
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
			mw.track( 'counter.MediaWiki.cx.restore.fail', 1 );
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
			mw.track( 'counter.MediaWiki.cx.save.success', 1 );
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
			mw.track( 'counter.MediaWiki.cx.restore.success', 1 );
		},

		/**
		 * Log AbuseFilter event.
		 *
		 * @param {string} sourceLanguage Source language code
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 * @param {string} context "saving" or "publishing"
		 * @param {string} filterType Filter type: "warn", "disallow", etc.
		 * @param {string} filterId Filter number, as on Special:AbuseFilter
		 */
		logAbuseFilter: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle, context, filterType, filterId ) {
			mw.track( 'event.ContentTranslationAbuseFilter', {
				token: mw.user.id(),
				context: context,
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle,
				targetTitle: targetTitle,
				cxVersion: mw.cx.getCXVersion(),
				filterType: filterType,
				filterId: parseInt( filterId )
			} );
		},

		/**
		 * Check whether the event is an AbuseFilter event, and log it if needed.
		 *
		 * @param {string} sourceLanguage Source language code
		 * @param {string} targetLanguage Target language code
		 * @param {string} sourceTitle Source title
		 * @param {string} targetTitle Target title
		 * @param {Object} trace The event trace, possibly describing an AbuseFilter response
		 * @param {string} context "saving" or "publishing"
		 */
		handleAbuseFilter: function ( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace, context ) {
			var abuseFilterCodes = [ 'abusefilter-warning', 'abusefilter-disallowed' ];

			if ( trace &&
				trace.error &&
				trace.error.code &&
				abuseFilterCodes.indexOf( trace.error.code ) > -1 &&
				trace.error.abusefilter
			) {
				this.logAbuseFilter(
					sourceLanguage,
					targetLanguage,
					sourceTitle,
					targetTitle,
					context,
					trace.error.code,
					trace.error.abusefilter.id
				);
			}
		}
	};

	$( function () {
		// eslint-disable-next-line no-new
		new ContentTranslationEventLogging();
	} );
}() );
