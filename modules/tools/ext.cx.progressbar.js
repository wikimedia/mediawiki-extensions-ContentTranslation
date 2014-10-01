/**
 * ContentTranslation Progress Indicator
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
	};

	ProgressBar.prototype.render = function () {
		this.$container.append( $( '<div>' )
			.addClass( 'cx-progressbar' )
			.append(
				$( '<span>' ).addClass( 'cx-progressbar__bar' ),
				$( '<span>' ).addClass( 'cx-progressbar__bar--mt' )
			)
		);

		this.$info = $( '<div>' )
			.addClass( 'cx-progressbar__info' )
			.append(
				$( '<div>' ).addClass( 'cx-progressbar__info--total' ),
				$( '<div>' ).addClass( 'cx-progressbar__info--mt' )
			);

		this.$container.append( this.$info.hide() );
		this.$bar = this.$container.find( '.cx-progressbar__bar' );
		this.$mtbar = this.$container.find( '.cx-progressbar__bar--mt' );
		this.update( { maximum: 0, any: 0, human: 0, mt: 0 } );
	};

	ProgressBar.prototype.listen = function () {
		var progressBar = this;

		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.update, this ) );

		this.$container.on( 'mouseenter', '.cx-progressbar', function () {
			progressBar.$info.show();
		} );

		this.$container.on( 'mouseleave', '.cx-progressbar', function () {
			progressBar.$info.hide();
		} );
	};

	ProgressBar.prototype.update = function ( weights ) {
		var progress = weights.any * 100,
			mtProgress = weights.mt * 100,
			mtPercentage = weights.mt / weights.any * 100 || 0;

		this.$bar.css( 'width', progress + '%' );
		this.$mtbar.css( 'width', mtProgress + '%' );

		this.$info.find( '.cx-progressbar__info--total' )
			.text( mw.msg(
				'cx-header-progressbar-text',
				mw.language.convertNumber( parseInt( progress, 10 ) )
			) );

		this.$info.find( '.cx-progressbar__info--mt' )
			.text( mw.msg(
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
