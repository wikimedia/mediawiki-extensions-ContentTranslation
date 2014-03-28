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
	 * ContentTranslationSource
	 *
	 * @class
	 */
	function ContentTranslationSource( element, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxSource.defaults, options );
		this.$title = null;
		this.$content = null;
		this.init();
	}

	ContentTranslationSource.prototype.init = function () {
		mw.cx.sourceTitle = new mw.Uri().query.page;
		mw.cx.targetLanguage = new mw.Uri().query.lang || '';
		this.render();
		mw.cx.connect();
		this.listen();
	};

	/**
	 * Render the source content column
	 */
	ContentTranslationSource.prototype.render = function () {
		var $heading, $languageLabel, $articleLink, $subHeading, $loader;

		mw.cx.sourceLanguage = mw.config.get( 'wgContentLanguage' );

		this.$container.prop( {
			lang: mw.cx.sourceLanguage,
			dir: $.uls.data.getDir( mw.cx.sourceLanguage )
		} );

		$heading = $( '<h2>' )
			.addClass( 'cx-column__title' )
			.text( mw.cx.sourceTitle );
		$languageLabel = $( '<span>' )
			.addClass( 'cx-column__language-label' )
			.text( $.uls.data.getAutonym( mw.cx.sourceLanguage ) );
		$articleLink = $( '<span>' )
			.addClass( 'cx-column__sub-heading__view-page' )
			.html(
				mw.message(
					'cx-source-view-page',
					mw.util.getUrl( mw.cx.sourceTitle )
				).parse()
		);
		$subHeading = $( '<div>' )
			.addClass( 'cx-column__sub-heading' )
			.append( $languageLabel, $articleLink );
		$loader = $( '<div>' )
			.addClass( 'cx-column__content' )
			.text( mw.msg( 'cx-source-loading', mw.cx.sourceTitle ) );
		this.$container.append( $heading, $subHeading, $loader );

		this.$title = this.$container.find( '.cx-column__title' );
		this.$content = this.$container.find( '.cx-column__content' );
	};

	ContentTranslationSource.prototype.load = function () {
		this.$content.html( mw.cx.data.segmentedContent );
		mw.hook( 'mw.cx.source.loaded' ).fire();
	};

	ContentTranslationSource.prototype.listen = function () {
		mw.hook( 'mw.cx.source.ready' ).add( $.proxy( this.load, this ) );
	};

	$.fn.cxSource = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxSource' );

			if ( !data ) {
				$this.data(
					'cxSource', ( data = new ContentTranslationSource( this, options ) )
				);
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxSource.defaults = {};
}( jQuery, mediaWiki ) );
