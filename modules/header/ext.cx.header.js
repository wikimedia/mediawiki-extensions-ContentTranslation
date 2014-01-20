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

	ContentTranslationHeader.prototype.setPublishButtonState = function () {
		var translationText = $( '.cx-column--translation .cx-column__content' ).text();

		// Disable the publish button if it has any non-space characters
		this.$container.find( '.cx-header__publish' ).prop( {
			disabled: !translationText.match( /\S/ )
		} );
	};

	ContentTranslationHeader.prototype.listen = function () {
		this.$container.find( '.publish' ).on( 'click', function () {
			mw.hook( 'mw.cx.publish' ).fire();
		} );

		mw.hook( 'mw.cx.translation.change' ).add( $.proxy( this.setPublishButtonState, this ) );
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
