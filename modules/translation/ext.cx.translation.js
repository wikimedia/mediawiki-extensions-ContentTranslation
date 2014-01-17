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
	 * ContentTranslationEditor
	 *
	 * @class
	 */
	function ContentTranslationEditor( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxTranslation.defaults, options );
		this.init();
	}

	ContentTranslationEditor.prototype.init = function () {
		this.render();
		this.listen();
	};

	ContentTranslationEditor.prototype.render = function () {
		var $content;

		this.$container.append(
			$( '<h2>' )
				.attr( 'contenteditable', true )
				.addClass( 'cx-column__title' )
				.text( $( '.cx-column--source .cx-column__title' ).text() )
		);

		$content = $( '<div>' )
			.attr( 'contenteditable', true )
			.addClass( 'cx-column__content' );

		this.$container.append( $content );
	};

	ContentTranslationEditor.prototype.listen = function () {
		mw.hook( 'mw.cx.addContent' ).add( $.proxy( this.update, this ) );
	};

	ContentTranslationEditor.prototype.update = function ( data ) {
		this.$container.find( '.cx-column__content' ).html( data );
		mw.hook( 'mw.cx.progress' ).fire( 100 );
	};

	$.fn.cxTranslation = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTranslation' );

			if ( !data ) {
				$this.data( 'cxTranslation',
					( data = new ContentTranslationEditor( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.cxTranslation.defaults = {};
}( jQuery, mediaWiki ) );
