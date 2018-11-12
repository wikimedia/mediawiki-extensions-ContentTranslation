/*!
 * ContentTranslation event logging.
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
			mw.hook( 'mw.cx.translation.published' ).add( this.published.bind( this ) );
			mw.hook( 'mw.cx.translation.publish.error' ).add( this.publishFailed.bind( this ) );
			mw.hook( 'mw.cx.translation.abusefilter' ).add( this.logAbuseFilter.bind( this ) );
			mw.hook( 'mw.cx.translation.saved' ).add( this.saved.bind( this ) );
			mw.hook( 'mw.cx.translation.continued' ).add( this.continued.bind( this ) );
			mw.hook( 'mw.cx.translation.deleted' ).add( this.deleted.bind( this ) );
			mw.hook( 'mw.cx.cta.shown' ).add( this.ctaShown.bind( this ) );
			mw.hook( 'mw.cx.cta.accept' ).add( this.ctaAccept.bind( this ) );
			mw.hook( 'mw.cx.cta.reject' ).add( this.ctaReject.bind( this ) );
			mw.hook( 'mw.cx.draft.restore-failed' ).add( this.restoreFailed.bind( this ) );
			mw.hook( 'mw.cx.translation.save-failed' ).add( this.saveFailed.bind( this ) );
			mw.hook( 'mw.cx.suggestion.action' ).add( this.suggestionAction.bind( this ) );
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
		},

		suggestionAction: function ( action, rank, type, typeExtra, sourceLanguage, targetLanguage, sourceTitle ) {
			mw.track( 'event.ContentTranslationSuggestion', {
				version: 1,
				session: mw.user.sessionId(),
				token: mw.user.id(),
				suggestionId: mw.user.id() + '-' + sourceTitle,
				rank: rank,
				type: type,
				typeExtra: typeExtra,
				action: action,
				interfaceLanguage: mw.config.get( 'wgUserLanguage' ),
				contentLanguage: mw.config.get( 'wgContentLanguage' ),
				sourceLanguage: sourceLanguage,
				targetLanguage: targetLanguage,
				sourceTitle: sourceTitle
			} );
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
				filterId: filterId
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
				trace.edit &&
				trace.result === 'error' &&
				trace.edit.code &&
				abuseFilterCodes.indexOf( trace.edit.code ) > -1 &&
				trace.edit.abusefilter
			) {
				this.logAbuseFilter(
					sourceLanguage,
					targetLanguage,
					sourceTitle,
					targetTitle,
					context,
					trace.edit.code,
					trace.edit.abusefilter.id
				);
			}
		}
	};

	$( function () {
		// eslint-disable-next-line no-new
		new ContentTranslationEventLogging();
	} );
}() );
