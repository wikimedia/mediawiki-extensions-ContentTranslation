/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	mw.cx.ContentTranslationHeader.prototype.render = function () {
		var $logo, $userName, $userDetails, $headerBar,
			$translationCenterLink, $translationCenter, $infoBar;

		$logo = $( '<div>' ).addClass( 'cx-header__logo' );

		$userName = $( '<a>' )
			.addClass( 'cx-header__user-details__user-name' )
			.attr( 'href', mw.util.getUrl( 'User:' + mw.user.getName() ) )
			.text( mw.user.getName() );

		$userDetails = $( '<div>' )
			.addClass( 'cx-header__user-details' )
			.append( $userName );

		this.$publishButton = $( '<button>' )
			.addClass( 'cx-header__publish publish mw-ui-button mw-ui-constructive' )
			.prop( 'disabled', true )
			.text( mw.msg( 'cx-publish-button' ) );

		$translationCenterLink = $( '<a>' )
			.text( mw.msg( 'cx-header-translation-center' ) )
			.attr( 'href', '#' );

		$translationCenter = $( '<div>' )
			.addClass( 'cx-header__translation-center' )
			.append( $translationCenterLink );

		$headerBar = $( '<div>' )
			.addClass( 'cx-header__bar' )
			.append( $translationCenter, this.$publishButton );

		$infoBar = $( '<div>' )
			.addClass( 'cx-header__infobar' )
			.hide();

		this.$container
			.addClass( 'cx-header' )
			.append( $logo, $userDetails, $headerBar, $infoBar );
	};
}( jQuery, mediaWiki ) );
