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
	 * ContentTranslationHeader
	 *
	 * @class
	 */
	function ContentTranslationHeader( element, options ) {
		this.$container = $( element );
		this.$publishButton = null;
		this.options = $.extend( true, {}, $.fn.cxHeader.defaults, options );
		this.init();
	}

	ContentTranslationHeader.prototype.init = function () {
		this.render();
		this.listen();
	};

	/**
	 * Enable/Disable the publish button based on progress of translation
	 * @param {float} progress
	 */
	ContentTranslationHeader.prototype.setPublishButtonState = function ( progress ) {
		this.$publishButton.prop( 'disabled', parseInt( progress, 10 ) === 0 );
	};

	ContentTranslationHeader.prototype.listen = function () {
		this.$container.find( '.publish' ).on( 'click', function () {
			mw.hook( 'mw.cx.publish' ).fire();
		} );
		mw.hook( 'mw.cx.progress' ).add( $.proxy( this.setPublishButtonState, this ) );
	};

	$.fn.cxHeader = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxHeader' );

			if ( !data ) {
				$this.data(
					'cxHeader', ( data = new ContentTranslationHeader( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	mw.cx.ContentTranslationHeader = ContentTranslationHeader;
	$.fn.cxHeader.defaults = {};
}( jQuery, mediaWiki ) );
