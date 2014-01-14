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
	 * ContentTranslationSource
	 *
	 * @class
	 */
	function ContentTranslationSource( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxSource.defaults, options );
		this.page = null;
		this.init();
	}

	ContentTranslationSource.prototype.init = function () {
		this.page = new mw.Uri().query.page;
		this.render();
		this.load();
	};

	ContentTranslationSource.prototype.render = function () {
		this.$container.append(
			$( '<h2>' )
				.addClass( 'title' )
				.text( this.page )
		);

		this.$container.append(
			$( '<div>' )
				.addClass( 'content' )
				.text( 'Loading ' + ( this.page || '' ) )
		);
	};

	ContentTranslationSource.prototype.load = function () {
		var api = new mw.Api(),
			ctSource = this;

		api.get( {
			action: 'parse',
			page: this.page,
			disablepp: true
		} ).done( function ( result ) {
			ctSource.$container.find( '.title' ).html( result.parse.title );
			ctSource.$container.find( '.content' ).html( result.parse.text['*'] );
		} );

	};

	$.fn.cxSource = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSource' );

			if ( !data ) {
				$this.data(
					'cxSource',
					( data = new ContentTranslationSource( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[options].call( $this );
			}
		} );
	};

	$.fn.cxSource.defaults = {};
}( jQuery, mediaWiki ) );
