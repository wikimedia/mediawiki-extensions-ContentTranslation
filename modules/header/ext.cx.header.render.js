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
		var $logo, $userDetails, $headerBar,
			$translationCenterLink, $translationCenter;

		$logo = $( '<div>' ).addClass( 'cx-header__logo' );

		this.$userName = $( '<a>' )
			.addClass( 'cx-header__user-details__user-name' )
			.attr( {
				href: mw.util.getUrl( 'User:' + mw.user.getName() ),
				target: '_blank'
			} )
			.text( mw.user.getName() );

		$userDetails = $( '<div>' )
			.addClass( 'cx-header__user-details' )
			.append( this.$userName );

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

		this.$infoBar = $( '<div>' )
			.addClass( 'cx-header__infobar' )
			.append( $( '<span>' ).addClass( 'text' ) )
			.append( $( '<span>' ).addClass( 'remove' ) )
			.hide();

		this.$container
			.addClass( 'cx-header' )
			.append( $logo, $userDetails, $headerBar, this.$infoBar );
	};
}( jQuery, mediaWiki ) );
