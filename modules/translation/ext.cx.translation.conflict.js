/*!
 * ContentTranslation - Translation conflict handler
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * Show the information about translation conflict
	 *
	 * @param {Object} translation
	 */
	function showConflictHandler( translation ) {
		var message, $userPage;

		if ( translation.translatorName ) {
			$userPage = $( '<a>' )
				.text( translation.translatorName )
				.prop( 'href', mw.util.getUrl( 'User:' + translation.translatorName ) );

			message = mw.message( 'cx-translation-already-in-progress',
				$userPage,
				translation.translatorGender
			);
		} else {
			message = mw.message( 'cx-translation-already-in-progress-unknown' );
		}

		return OO.ui.getWindowManager().openWindow( 'message', {
			message: message.parseDom(),
			actions: [
				{ action: 'cancel', label: mw.msg( 'cx-create-new-translation' ), flags: 'primary' }
			]
		} ).closed.then( function ( data ) {
			if ( !data || data.action === 'cancel' ) {
				// Go to dashboard
				var uri = new mw.Uri();

				delete uri.query.page;
				location.href = uri.toString();
			}
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.translation.conflict' ).add( function ( translation ) {
			showConflictHandler( translation );
		} );
	} );
}() );
