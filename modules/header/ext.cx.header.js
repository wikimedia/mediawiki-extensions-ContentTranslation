/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation aids
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * ContentTranslationHeader
	 *
	 * @class
	 */
	function ContentTranslationHeader( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxHeader.defaults, options );
		this.init();
	}

	ContentTranslationHeader.prototype.init = function () {
		this.render();
		this.listen();
	};

	ContentTranslationHeader.prototype.render = function () {
		this.$container.addClass( 'cx-header' );
		this.$container.append(
			$( '<div>' )
				.addClass( 'cx-header__logo' ),
			$( '<div>' )
				.addClass( 'cx-header__user-details' )
				.append(
					$( '<a>' )
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
								.text( 'Translation center' )
								.attr( 'href', '#' )
						),
					$( '<div>' )
						.addClass( 'cx-header__progressbar' )
						.cxProgressBar(),
					$( '<button>' )
						.addClass( 'cx-header__publish publish mw-ui-button mw-ui-constructive' )
						.text( 'Publish translation' )
				)
		);
	};

	ContentTranslationHeader.prototype.listen = function () {
		this.$container.find( '.publish' ).on( 'click', function () {
			mw.hook( 'mw.cx.publish' ).fire();
		} );
	};
	$.fn.cxHeader = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxHeader' );

			if ( !data ) {
				$this.data(
					'cxHeader',
					( data = new ContentTranslationHeader( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.cxHeader.defaults = {};
}( jQuery, mediaWiki ) );
