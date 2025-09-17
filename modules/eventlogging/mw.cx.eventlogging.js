'use strict';

const statsLogging = require( './mw.cx.stats.eventlogging.js' );

/**
 * ContentTranslation event logger module.
 */
const contentTranslationEventLogging = {
	/**
	 * Listen for event logging.
	 * This should be called to activate the event listeners.
	 */
	listen: function () {
		mw.hook( 'mw.cx.translation.publish.error' ).add(
			( sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace ) => this.handleAbuseFilter(
				sourceLanguage, targetLanguage, sourceTitle, targetTitle, trace, 'publishing'
			)
		);
		mw.hook( 'mw.cx.translation.abusefilter' ).add( this.logAbuseFilter.bind( this ) );
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
			filterId: parseInt( filterId, 10 ) // It's best practice to provide a radix.
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
			abuseFilterCodes.includes( trace.error.code ) &&
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

contentTranslationEventLogging.listen();
mw.cx.eventlogging = {
	stats: statsLogging
};
