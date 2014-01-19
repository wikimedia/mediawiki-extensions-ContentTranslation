/**
 * ContentTranslation event logging.
 * Uses the EventLogging extension, if it's available, to log events.
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
		this.logEventQueue = $.Callbacks( 'memory once' );
		this.init();
		this.listen();
	}

	ContentTranslationEventLogging.prototype = {
		init: function () {
			var eventLogging = this;

			// Set event defaults and make the
			mw.eventLog.setDefaults( 'ContentTranslation', {
				version: 1,
				token: mw.user.id()
			} );

			eventLogging.logEventQueue.fire();
		},

		/**
		 * Local wrapper for 'mw.eventLog.logEvent'
		 *
		 * @param {Object} event Event action and optional fields
		 * @return {jQuery.Promise} jQuery Promise object for the logging call
		 */
		log: function ( event ) {
			// We need to create our own deferred for two reasons:
			//  - logEvent might not be executed immediately
			//  - we cannot reject a promise returned by it
			// So we proxy the original promises status updates.
			var deferred = $.Deferred();

			this.logEventQueue.add( function () {
				mw.eventLog.logEvent( 'ContentTranslation', event )
					.done( deferred.resolve )
					.fail( deferred.reject );
			} );

			return deferred.promise();
		},

		/**
		 * Listen for event logging
		 */
		listen: function () {
			// Register handlers for event logging triggers
			mw.hook( 'mw.cx.translate.create' ).add(
				$.proxy( this.translatedPageCreated, this )
			);
		},

		/**
		 * Log creation of translated page
		 * @param {string} contentLanguage source language
		 * @param {string} targetLanguage Target language code
		 */
		translatedPageCreated: function ( contentLanguage, targetLanguage ) {
			mw.log( 'eventlogging! translatedPageCreated!' ); // XXX
			this.log( {
				action: 'create-translated-page',
				contentLanguage: contentLanguage,
				targetLanguage: targetLanguage
			} );
		}
	};

	mw.cx = mw.cx || {};
	mw.cx.eventlogging = new ContentTranslationEventLogging();
}( jQuery, mediaWiki ) );
