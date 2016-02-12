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
	 * ContentTranslationView
	 *
	 * @class
	 */
	function ContentTranslationView( element, siteMapper ) {
		this.$container = $( element );

		this.$translation = null;
		this.$header = null;
		this.$source = null;
		this.$tools = null;
		this.siteMapper = siteMapper;
	}

	ContentTranslationView.prototype.init = function () {
		this.render();
		this.initComponents();
	};

	/**
	 * Initialize the components
	 */
	ContentTranslationView.prototype.initComponents = function () {
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
				cx.$translation.cxTranslation( cx.siteMapper );
				cx.$tools.cxTools();
			} );
		}
	};

	ContentTranslationView.prototype.render = function () {
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

	$( function () {
		var cxview,
			container = document.body;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		cxview = new ContentTranslationView( container, mw.cx.siteMapper );
		cxview.init();
	} );
}( jQuery, mediaWiki ) );
