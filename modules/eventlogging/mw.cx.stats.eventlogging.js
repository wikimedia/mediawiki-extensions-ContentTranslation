'use strict';

/**
 * ContentTranslation stats event logger module.
 */
const contentTranslationStatsEventLogging = {
	/**
	 * Count creation of translated page.
	 */
	published: () => {
		mw.track( 'counter.MediaWiki.cx.publish.success', 1 );
		mw.track( 'stats.mediawiki_cx_publish_success_total', 1 );
	},

	/**
	 * Log publish failures.
	 */
	publishFailed: () => {
		mw.track( 'counter.MediaWiki.cx.publish.fail', 1 );
		mw.track( 'stats.mediawiki_cx_publish_fail_total', 1 );
	},

	recommendationFailed: () => {
		mw.track( 'stats.mediawiki_cx_recommendation_fail_total', 1 );
	}
};

mw.hook( 'mw.cx.translation.published' ).add( contentTranslationStatsEventLogging.published );
mw.hook( 'mw.cx.translation.publish.error' ).add( contentTranslationStatsEventLogging.publishFailed );

module.exports = contentTranslationStatsEventLogging;
