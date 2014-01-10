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
	 * ContentTranslationSource
	 *
	 * @class
	 */
	function ContentTranslationSource( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.ctSource.defaults, options );
		this.init();
	}

	ContentTranslationSource.prototype.init = function () {
		this.render();
	};

	ContentTranslationSource.prototype.render = function () {
		this.$container.append( $( '<h2>' )
				.text( 'Article title' )
			);

		this.$container.append( $( '<div>' )
			.text( 'Article text' ) );
	};

	$.fn.ctSource = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'ctSource' );

			if ( !data ) {
				$this.data( 'ctSource',
					( data = new ContentTranslationSource( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};
	$.fn.ctSource.defaults = {};
}( jQuery ) );
