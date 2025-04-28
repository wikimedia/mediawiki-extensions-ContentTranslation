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
	 * @param {string} translatorName
	 * @param {string} translatorGender
	 */
	function showConflictHandler( translatorName, translatorGender ) {
		let message;

		if ( translatorName ) {
			const $userPage = $( '<a>' )
				.text( translatorName )
				.prop( 'href', mw.util.getUrl( 'User:' + translatorName ) );

			message = mw.message( 'cx-translation-already-in-progress', $userPage, translatorGender );
		} else {
			message = mw.message( 'cx-translation-already-in-progress-unknown' );
		}

		OO.ui.getWindowManager().openWindow( 'message', {
			message: message.parseDom(),
			actions: [
				{ action: 'cancel', label: mw.msg( 'cx-create-new-translation' ), flags: 'primary' }
			]
		} ).closed.then( ( data ) => {
			if ( !data || data.action === 'cancel' ) {
				// Go to dashboard
				const uri = new URL( location.href );
				uri.searchParams.delete( 'page' );
				location.href = uri.toString();
			}
		} );
	}

	$( () => {
		mw.hook( 'mw.cx.translation.conflict' ).add( ( translatorName, translatorGender ) => {
			showConflictHandler( translatorName, translatorGender );
		} );
	} );
}() );
