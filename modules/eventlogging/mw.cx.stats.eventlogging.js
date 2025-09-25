'use strict';

/**
 * ContentTranslation stats event logger module.
 */
const contentTranslationStatsEventLogging = {
	/**
	 * Count creation of translated page.
	 */
	published: ( isMobile ) => {
		mw.track( 'counter.MediaWiki.cx.publish.success', 1 );
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_mobile_publish_success_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_publish_success_total', 1 );
		}
	},

	/**
	 * Log publish failures.
	 */
	publishFailed: ( isMobile ) => {
		mw.track( 'counter.MediaWiki.cx.publish.fail', 1 );
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_mobile_publish_fail_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_publish_fail_total', 1 );
		}
	},

	recommendationFailed: () => {
		mw.track( 'stats.mediawiki_cx_recommendation_fail_total', 1 );
	},

	articleSearchFailed: () => {
		mw.track( 'stats.mediawiki_cx_articlesearch_fail_total', 1 );
	},

	sourceArticleFetchFailed: ( isMobile ) => {
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_mobile_sourcearticle_fail_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_sourcearticle_fail_total', 1 );
		}
	},

	dashboardAccess: ( isMobile ) => {
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_access_mobile_dashboard_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_access_dashboard_total', 1 );
		}
	},

	articleSearchAccess: ( isMobile ) => {
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_access_mobile_articlesearch_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_access_articlesearch_total', 1 );
		}
	},

	selectSectionAccess: ( isMobile ) => {
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_access_mobile_selectsection_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_access_selectsection_total', 1 );
		}
	},

	sectionCompareAccess: ( isMobile ) => {
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_access_mobile_sectioncompare_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_access_sectioncompare_total', 1 );
		}
	},

	editingStepAccess: ( isMobile ) => {
		if ( isMobile ) {
			mw.track( 'stats.mediawiki_cx_access_mobile_editor_total', 1 );
		} else {
			mw.track( 'stats.mediawiki_cx_access_editor_total', 1 );
		}
	},

	publishStepAccess: () => {
		mw.track( 'stats.mediawiki_cx_access_mobile_publish_total', 1 );
	}
};

mw.hook( 'mw.cx.translation.published' ).add( () => contentTranslationStatsEventLogging.published( false ) );
mw.hook( 'mw.cx.translation.publish.error' ).add( () => contentTranslationStatsEventLogging.publishFailed( false ) );

module.exports = contentTranslationStatsEventLogging;
