/**
 * ContentTranslation Progress Indicator
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
	 * ProgressBar
	 *
	 * @class
	 */
	function ProgressBar( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxProgressBar.defaults, options );
		this.status = 0;
		this.init();
	}

	ProgressBar.prototype.init = function () {
		this.render();
		this.listen();
	};

	ProgressBar.prototype.render = function () {
		this.$container.append(
			$( '<div>' )
				.addClass( 'cx-progressbar' )
				.append(
					$( '<span>' ).addClass( 'cx-progressbar__bar' )
				),
			$( '<span>' ).addClass( 'cx-progressbar__text' )
		);

		this.$bar = this.$container.find( '.cx-progressbar__bar' );
		this.$text = this.$container.find( '.cx-progressbar__text' );

		this.update( 0 );
	};

	ProgressBar.prototype.listen = function () {
		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.update, this ) );
	};

	ProgressBar.prototype.update = function ( percentage ) {
		this.status = percentage;
		this.$bar.css( 'width', this.status + '%' );
		this.$text.text( this.status + '% translated' );
	};

	$.fn.cxProgressBar = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxProgressBar' );

			if ( !data ) {
				$this.data( 'cxProgressBar',
					( data = new ProgressBar( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.cxProgressBar.defaults = {};
}( jQuery, mediaWiki ) );
