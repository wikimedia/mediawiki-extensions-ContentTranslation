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

	/**
	 * ContentTranslationTools
	 *
	 * @class
	 */
	function ContentTranslationTools( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxTools.defaults, options );
		this.init();
		this.listen();
	}

	ContentTranslationTools.prototype.init = function () {
		this.render();
	};

	ContentTranslationTools.prototype.render = function () {
		var $progressBar = $( '<div>' )
			.addClass( 'cx-header__progressbar' )
			.cxProgressBar();
		this.$container.append( $progressBar );
		this.helpMessage();
	};

	ContentTranslationTools.prototype.listen = function () {
		$( window ).scroll( $.proxy( this.scroll, this ) );
	};

	ContentTranslationTools.prototype.scroll = function () {
		var scrollTop = $( window ).scrollTop(),
			// Use the .prev() element as the reference point(anchor)
			offsetTop = this.$container.prev().offset().top;

		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}
	};

	$.fn.cxTools = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTools' );

			if ( !data ) {
				$this.data( 'cxTools', ( data = new ContentTranslationTools( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};
	mw.cx.ContentTranslationTools = ContentTranslationTools;
	$.fn.cxTools.defaults = {};
}( jQuery, mediaWiki ) );
