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
		this.$container.append(
			$( '<div>' ).addClass( 'logo')
		);

		this.$container.append(
			$( '<div>' )
				.addClass( 'translation-bar' )
				.append(
					$( '<div>' )
						.addClass( 'translation-center-link' )
						.append(
							$( '<a>' )
								.text( 'Translation center' )
								.attr( 'href', '#' )
						),
					$( '<div>' )
						.addClass( 'translation-progress' )
						.cxProgressBar(),
					$( '<button>' )
						.addClass( 'publish mw-ui-button mw-ui-primary' )
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
