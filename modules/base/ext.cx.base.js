/**
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $ ) {
	'use strict';

	/**
	 * ContentTranslation
	 *
	 * @class
	 */
	function ContentTranslation( element, options ) {
		this.$container = $( element );
		this.$translation = null;
		this.$header = null;
		this.$source = null;
		this.$tools = null;
		this.options = $.extend( true, {}, $.fn.cx.defaults, options );
		this.init();
	}

	ContentTranslation.prototype.init = function () {
		this.render();
		this.initComponents();
		this.listen();
	};

	ContentTranslation.prototype.initComponents = function () {
		// Initialize the components
		this.$header.cxHeader();
		this.$source.cxSource();
		this.$translation.cxTranslation();
		this.$tools.cxTools();
	};

	ContentTranslation.prototype.render = function () {
		var $content;

		$content = $( '<div>' ).addClass( 'cx-widget' )
			.append(
				$( '<div>' ).addClass( 'cx-widget__header' ),
				$( '<div>' ).addClass( 'cx-widget__columns' )
				.append(
					$( '<div>' ).addClass( 'cx-column cx-column--source' ),
					$( '<div>' ).addClass( 'cx-column cx-column--translation' ),
					$( '<div>' ).addClass( 'cx-column cx-column--tools' )
				)
		);

		this.$container.append( $content );
		this.$header = this.$container.find( '.cx-widget__header' );
		this.$source = this.$container.find( '.cx-column--source' );
		this.$translation = this.$container.find( '.cx-column--translation' );
		this.$tools = this.$container.find( '.cx-column--tools' );
	};

	ContentTranslation.prototype.listen = function () {
		$( window ).scroll( $.proxy( this.scroll, this ) );
	};

	ContentTranslation.prototype.scroll = function () {
		var scrollTop = $( window ).scrollTop(),
			// Use the top of source column as reference point
			offsetTop = this.$source.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$header.addClass( 'sticky' );
			this.$tools.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$header.removeClass( 'sticky' );
			this.$tools.removeClass( 'sticky' );
		}
	};

	$.fn.cx = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cx' );

			if ( !data ) {
				$this.data( 'cx', ( data = new ContentTranslation( this, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};
	$.fn.cx.defaults = {};

	$( function () {
		$( 'body' ).cx();
	} );
}( jQuery ) );
