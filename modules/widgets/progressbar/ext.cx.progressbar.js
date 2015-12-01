/*!
 * ContentTranslation Progress Indicator
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
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
		this.init();
	}

	ProgressBar.prototype.init = function () {
		this.render();
		this.listen();
		if ( this.options.weights ) {
			this.update( this.options.weights );
		}
	};

	ProgressBar.prototype.render = function () {
		this.$container.append( $( '<div>' )
			.addClass( 'cx-progressbar' )
			.append(
				$( '<span>' ).addClass( 'cx-progressbar__bar' ),
				$( '<span>' ).addClass( 'cx-progressbar__bar--mt' )
			)
		);

		this.$bar = this.$container.find( '.cx-progressbar__bar' );
		this.$mtbar = this.$container.find( '.cx-progressbar__bar--mt' );
		this.update( {
			maximum: 0,
			any: 0,
			human: 0,
			mt: 0
		} );
	};

	ProgressBar.prototype.listen = function () {
		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.update, this ) );
	};

	ProgressBar.prototype.update = function ( weights ) {
		var progress = weights.any * 100,
			mtProgress = weights.mt * 100,
			mtPercentage = weights.mt / weights.any * 100 || 0;

		this.$bar.css( 'width', progress + '%' );
		this.$mtbar.css( 'width', mtProgress + '%' );

		this.$container.attr( 'title',
			mw.msg(
				'cx-header-progressbar-text',
				mw.language.convertNumber( parseInt( progress, 10 ) ) ) +
			'\n' +
			mw.msg(
				'cx-header-progressbar-text-mt',
				mw.language.convertNumber( parseInt( mtPercentage, 10 ) )
			) );
	};

	$.fn.cxProgressBar = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxProgressBar' );

			if ( !data ) {
				$this.data( 'cxProgressBar', ( data = new ProgressBar( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxProgressBar.defaults = {};
}( jQuery, mediaWiki ) );
