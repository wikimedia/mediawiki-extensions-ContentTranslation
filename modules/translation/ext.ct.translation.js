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
	 * ContentTranslationEditor
	 *
	 * @class
	 */
	function ContentTranslationEditor( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.ctTranslation.defaults, options );
		this.init();
	}

	ContentTranslationEditor.prototype.init = function () {
		this.render();
	};

	ContentTranslationEditor.prototype.render = function () {
		var $content;

		this.$container.append( $( '<h2>' )
				.attr( 'contenteditable', true )
				.text( 'Translated title' )
			);

		$content = $( '<div>' )
			.attr( 'contenteditable', true )
			.text( 'Translated text' );
		this.$container.append( $content );
	};

	$.fn.ctTranslation = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'ctTranslation' );

			if ( !data ) {
				$this.data( 'ctTranslation',
					( data = new ContentTranslationEditor( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};
	$.fn.ctTranslation.defaults = {};
}( jQuery ) );
