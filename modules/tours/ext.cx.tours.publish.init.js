/*!
 * Guided Tour for ContentTranslation publishing - Initialization module.
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';
	/**
	 * If GuidedTour is available, set cookies to start a tour.
	 *
	 * @param {string} translatedTitle
	 */
	function initGuidedTourAfterPublish( translatedTitle ) {
		if ( !mw.guidedTour ) {
			return;
		}

		mw.cookie.set(
			'-cx-published',
			JSON.stringify( {
				translatedTitle: translatedTitle,
				username: mw.user.getName()
			} )
		);

		mw.guidedTour.setTourCookie( 'cxpublish', 'suggestmovestart' );
	}

	mw.hook( 'mw.cx.translation.published' ).add( function ( sourceLanguage, targetLanguage, sourceTitle, title ) {
		initGuidedTourAfterPublish( title );
	} );
}( jQuery, mediaWiki ) );
