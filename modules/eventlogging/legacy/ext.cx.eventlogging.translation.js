/*!
 * ContentTranslation event logging for translation view.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	let saveCount = 0;
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
		 * Count creation of translated page.
		 */
		published: function () {
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
			mw.track( 'counter.MediaWiki.cx.publish.fail', 1 );
			this.handleAbuseFilter( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace, 'publishing' );
		},

		/**
		 * Count save failures
		 */
		saveFailed: function () {
			mw.track( 'counter.MediaWiki.cx.save.fail', 1 );
		},

		/**
		 * Count translation restore failures
		 */
		restoreFailed: function () {
			mw.track( 'counter.MediaWiki.cx.restore.fail', 1 );
		},

		/**
		 * Count saving (draft) of translated page.
		 */
		saved: function () {
			if ( saveCount ) {
				return;
			}
			saveCount++;
			mw.track( 'counter.MediaWiki.cx.save.success', 1 );
		},

		/**
		 * Count continuing translation.
		 */
		continued: function () {
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
			const abuseFilterCodes = [ 'abusefilter-warning', 'abusefilter-disallowed' ];

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
