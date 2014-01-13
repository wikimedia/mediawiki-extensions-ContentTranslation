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
				.addClass( 'progressbar' )
				.append(
					$( '<span>')
						.addClass( 'status' )
				)
			// TODO add a textual status indicator
		);

		this.update( 0 );
	};

	ProgressBar.prototype.listen = function () {
		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.update, this ) );
	};

	ProgressBar.prototype.update = function ( percentage ) {
		this.status = percentage;
		this.$container.find( '.status' )
			.css( 'width', this.status + '%' );
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
