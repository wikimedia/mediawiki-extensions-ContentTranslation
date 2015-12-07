/*!
 * ContentTranslation extension
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * ContentTranslation
	 *
	 * @class
	 */
	function ContentTranslation( element, siteMapper, options ) {
		this.$container = $( element );

		this.$translation = null;
		this.$header = null;
		this.$source = null;
		this.$tools = null;

		this.options = $.extend( true, {}, $.fn.cx.defaults, options );
		this.siteMapper = siteMapper;

		this.init();
	}

	ContentTranslation.prototype.init = function () {
		this.render();
		this.initComponents();
		this.listen();
	};

	/**
	 * Initialize the components
	 */
	ContentTranslation.prototype.initComponents = function () {
		var cx = this,
			modules;
		this.$header.cxHeader( this.siteMapper );
		this.$source.cxSource( this.siteMapper );

		modules = [
			'ext.cx.tools',
			'ext.cx.translation',
			'ext.cx.translation.progress',
			'ext.cx.publish',
			'ext.cx.translation.storage.init'
		];

		if ( mw.cx.sourceTitle ) {
			mw.loader.using( modules ).then( function () {
				cx.$translation.cxTranslation();
				cx.$tools.cxTools();
			} );
		}
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

	$.fn.cx = function ( siteMapper, options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cx' );

			if ( !data ) {
				$this.data( 'cx', ( data = new ContentTranslation( this, siteMapper, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cx.defaults = {};

	// Set the global siteMapper for code which we cannot inject it
	mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

	$( function () {
		$( 'body' ).cx( mw.cx.siteMapper );
	} );
}( jQuery, mediaWiki ) );
