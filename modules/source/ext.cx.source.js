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
		this.listen();
	};

	ContentTranslationSource.prototype.render = function () {
		var contentLanguage = mw.config.get( 'wgContentLanguage' );

		this.$container.prop( {
			lang: contentLanguage,
			dir: $.uls.data.getDir( contentLanguage )
		} );

		this.$container.append(
			$( '<h2>' )
				.addClass( 'cx-column__title' )
				.text( this.page )
		);

		this.$container.append(
			$( '<div>' )
				.addClass( 'cx-column__content' )
				.text( mw.msg( 'cx-source-loading', this.page ) )
		);
	};

	ContentTranslationSource.prototype.load = function () {
		var api = new mw.Api(),
			cxSource = this;

		api.get( {
			action: 'parse',
			page: this.page,
			disablepp: true
		} ).done( function ( result ) {
			cxSource.$container.find( '.cx-column__title' ).html( result.parse.title );
			cxSource.$container.find( '.cx-column__content' ).html( result.parse.text['*'] );
		} );

	};

	ContentTranslationSource.prototype.listen = function () {
		this.$container.find( '.cx-column__content' ).on( 'click', function () {
			mw.hook( 'mw.cx.translation.add' ).fire( $( this ).html() );
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
