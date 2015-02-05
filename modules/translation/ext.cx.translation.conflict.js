/**
 * ContentTranslation - Translation conflict handler
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * Show the information about translaton conflict with a button
	 * to create a new translation on another topic.
	 * @param {Object} translation
	 */
	function showConflictHandler( translation ) {
		var $header, $columns, $conflictInfo, $info,
			$collaborate, $action, $userLink;

		$columns = $( '.cx-widget__columns' );
		$header = $( '.cx-header' );
		$userLink = $( '<a>' ).attr( {
			href: mw.util.getUrl( 'User:' + translation.translatorName )
		} ).text( translation.translatorName )[ 0 ].outerHTML;
		$info = $( '<div>' )
			.addClass( 'cx-conflict-info' )
			.html( mw.message( 'cx-translation-already-in-progress', $userLink ).parse() );
		$collaborate = $( '<div>' )
			.addClass( 'cx-conflict-info' )
			.text( mw.msg( 'cx-translation-already-in-progress-collaborate' ) );
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
		$action.click( function () {
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
}( jQuery, mediaWiki ) );
