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
		this.$container.addClass( 'cx-header' );
		this.$container.append(
			$( '<div>' )
				.addClass( 'cx-header__logo' ),
			$( '<div>' )
				.addClass( 'cx-header__user-details' )
				.append(
					$( '<a>' )
						.addClass( 'cx-header__user-details__user-name' )
						.attr( 'href', mw.util.getUrl( 'User:' + mw.user.getName() ) )
						.text ( mw.user.getName() )
				)
		);

		this.$container.append(
			$( '<div>' )
				.addClass( 'cx-header__bar' )
				.append(
					$( '<div>' )
						.addClass( 'cx-header__translation-center' )
						.append(
							$( '<a>' )
								.text( mw.msg( 'cx-header-translation-center' ) )
								.attr( 'href', '#' )
						),
					$( '<div>' )
						.addClass( 'cx-header__progressbar' )
						.cxProgressBar(),
					$( '<button>' )
						.addClass( 'cx-header__publish publish mw-ui-button mw-ui-constructive' )
						.text( mw.msg( 'cx-publish-button' ) )
				)
		);
	};

}( jQuery, mediaWiki ) );
