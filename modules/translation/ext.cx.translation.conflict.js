/*!
 * ContentTranslation - Translation conflict handler
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * Show the information about translation conflict with a button
	 * to create a new translation on another topic.
	 *
	 * @param {Object} translation
	 */
	function showConflictHandler( translation ) {
		var $header, $columns, $conflictInfo, $info,
			$collaborate, $action, name, gender, $userPage;

		$columns = $( '.cx-widget__columns' );
		$header = $( '.cx-header' );

		name = translation.translatorName;
		gender = translation.translatorGender;

		if ( name ) {
			$userPage = $( '<a>' )
				.text( name )
				.prop( 'href', mw.util.getUrl( 'User:' + name ) );

			$info = $( '<div>' )
				.addClass( 'cx-conflict-info' )
				.msg( 'cx-translation-already-in-progress', $userPage, gender );
			$collaborate = $( '<div>' )
				.addClass( 'cx-conflict-info' )
				.msg( 'cx-translation-already-in-progress-collaborate', gender );
		} else {
			$info = $( '<div>' )
				.addClass( 'cx-conflict-info' )
				.msg( 'cx-translation-already-in-progress-unknown' );
			$collaborate = $( '<div>' );
		}
		$action = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-progressive cx-create-new-translation' )
			.text( mw.msg( 'cx-create-new-translation' ) );
		$conflictInfo = $( '<div>' )
			.addClass( 'cx-conflict' )
			.append( $info, $collaborate, $action );
		// Add the conflict warning to the header
		$header.append( $conflictInfo );
		// Gray out the columns
		$columns.addClass( 'disabled' );
		// Remove the publish and save status from header
		$( '.cx-header__save-status, .cx-header__publish' ).remove();
		// Add click handler to "Create new translation button"
		$action.on( 'click', function () {
			var uri = new mw.Uri();

			delete uri.query.page;
			location.href = uri.toString();
		} );
	}

	$( function () {
		mw.hook( 'mw.cx.translation.conflict' ).add( function ( translation ) {
			showConflictHandler( translation );
		} );
	} );
}() );
