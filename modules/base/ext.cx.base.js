/**
 * ContentTranslation extension
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
	 * ContentTranslation
	 *
	 * @class
	 */
	function ContentTranslation( element, options ) {
		this.$container =  $( element );
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

		$content = $( '<div>' ).addClass( 'content' )
			.append(
				$( '<div>' ).addClass( 'header' ),
				$( '<div>' ).addClass( 'source' ),
				$( '<div>' ).addClass( 'translation' ),
				$( '<div>' ).addClass( 'tools' )
			);

		this.$container.append( $content );
		this.$header = this.$container.find( '.header' );
		this.$source = this.$container.find( '.source' );
		this.$translation = this.$container.find( '.translation' );
		this.$tools = this.$container.find( '.tools' );
	};

	$.fn.cx = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cx' );

			if ( !data ) {
				$this.data( 'cx',
					( data = new ContentTranslation( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};
	$.fn.cx.defaults = {};

	$( document ).ready( function () {
		$( 'body' ).cx();
	} );
}( jQuery ) );
