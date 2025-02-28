/*!
 * ContentTranslation event logging for translation view.
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
			mw.hook( 'mw.cx.translation.abusefilter' ).add( this.logAbuseFilter );
		},

		/**
		 * Count creation of translated page.
		 */
		published: function () {
			mw.track( 'counter.MediaWiki.cx.publish.success', 1 );
			mw.track( 'stats.mediawiki_cx_publish_success_total', 1 );
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
			mw.track( 'stats.mediawiki_cx_publish_fail_total', 1 );
			this.handleAbuseFilter( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace, 'publishing' );
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

	$( () => {
		// eslint-disable-next-line no-new
		new ContentTranslationEventLogging();
	} );
}() );
