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
( function ( $ ) {
	'use strict';

	/**
	 * ContentTranslationHeader
	 *
	 * @class
	 */
	function ContentTranslationHeader( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.ctHeader.defaults, options );
		this.init();
	}

	ContentTranslationHeader.prototype.init = function () {
		this.render();
	};

	ContentTranslationHeader.prototype.render = function () {
		this.$container.append( $( '<div>' )
				.addClass( 'logo')
			);
	};

	$.fn.ctHeader = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'ctHeader' );

			if ( !data ) {
				$this.data( 'ctHeader',
					( data = new ContentTranslationHeader( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};
	$.fn.ctHeader.defaults = {};
}( jQuery ) );
