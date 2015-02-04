/**
 * ContentTranslation event logging.
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
		this.defaults = {
			version: 1,
			token: mw.user.id()
		};
		this.listen();
	}

	ContentTranslationEventLogging.prototype = {
		/**
		 * Log the event
		 *
		 * @param {Object} event Event action and optional fields
		 */
		log: function ( event ) {
			mw.track( 'event.ContentTranslation', $.extend( {}, event, this.defaults ) );
		},

		/**
		 * Listen for event logging.
		 */
		listen: function () {
			// Register handlers for event logging triggers
			mw.hook( 'mw.cx.translation.published' ).add(
				$.proxy( this.translatedPageCreated, this )
			);
		},

		/**
		 * Log creation of translated page.
		 * @param {string} contentLanguage source language
		 * @param {string} targetLanguage Target language code
		 */
		translatedPageCreated: function ( contentLanguage, targetLanguage ) {
			this.log( {
				action: 'create-translated-page',
				contentLanguage: contentLanguage,
				targetLanguage: targetLanguage
			} );
		}
	};

	$( function () {
		/*jshint -W031*/
		new ContentTranslationEventLogging();
	} );
}( jQuery, mediaWiki ) );
