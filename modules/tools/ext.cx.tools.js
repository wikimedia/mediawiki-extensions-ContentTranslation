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
		this.$container.append( this.helpMessage() );
	};

	ContentTranslationTools.prototype.listen = function () {
		$( window ).scroll( $.proxy( this.scroll, this ) );
	};

	ContentTranslationTools.prototype.helpMessage = function () {
		var $content;

		$content = $( '<h2>' )
			.text( mw.msg( 'cx-tools-instructions-title' ) )
			.after( $( '<ol>' )
				.append(
					$( '<li>' )
						.text( mw.msg( 'cx-tools-instructions-text1' ) ),
					$( '<li>' )
						.text( mw.msg( 'cx-tools-instructions-text2' ) )
						.append( $( '<ul>')
							.append(
								$( '<li>' )
									.text( mw.msg( 'cx-tools-instructions-text3' ) ),
								$( '<li>' )
									.text( mw.msg( 'cx-tools-instructions-text4' ) )
							)
						),
					$( '<div>' )
						.text( mw.msg( 'cx-tools-instructions-text5' ) )
				)
			);

		return $content;
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
				$this.data( 'cxTools',
					( data = new ContentTranslationTools( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.cxTools.defaults = {};
}( jQuery, mediaWiki ) );
