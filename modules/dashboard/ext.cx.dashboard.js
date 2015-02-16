/**
 * ContentTranslation extension - Dashboard.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * CXDashboard
	 *
	 * @class
	 */
	function CXDashboard( element, siteMapper, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxDashboard.defaults, options );
		this.siteMapper = siteMapper;
		this.$header = null;
		this.$translationList = null;
		this.$newTranslationButton = null;
		this.init();
	}

	CXDashboard.prototype.init = function () {
		this.render();
		this.initComponents();
		this.listen();
	};

	/**
	 * Initialize the components
	 */
	CXDashboard.prototype.initComponents = function () {
		this.$header.cxHeader( this.siteMapper );
		this.$translationList.cxTranslationList( this.siteMapper );
	};

	CXDashboard.prototype.render = function () {
		var $content, $newTranslationContainer, $newTranslationDesc;

		this.$header = $( '<div>' ).addClass( 'cx-widget__header' );
		$newTranslationContainer = $( '<div>' ).addClass( 'cx-cta' );
		this.$translationList = $( '<div>' ).addClass( 'cx-translationlist' );
		$content = $( '<div>' ).addClass( 'cx-widget' )
			.append( this.$header, $newTranslationContainer, this.$translationList );

		this.$container.append( $content );
		this.$newTranslationButton = $( '<button>' )
			.addClass( 'cx-cta__action mw-ui-button mw-ui-big mw-ui-progressive' )
			.text( mw.msg( 'cx-create-new-translation' ) );
		$newTranslationDesc = $( '<div>' )
			.addClass( 'cx-cta___description' )
			.html( mw.message( 'cx-create-new-translation-desc' ).parse() );

		$newTranslationContainer.append( this.$newTranslationButton, $newTranslationDesc );
		this.$container.cxFeedback();
	};

	CXDashboard.prototype.listen = function () {
		var query,
			sourceSelectorOptions = {};

		query = new mw.Uri().query;
		sourceSelectorOptions.sourceLanguage = query.from;
		sourceSelectorOptions.targetLanguage = query.to;
		sourceSelectorOptions.sourceTitle = query.page;
		sourceSelectorOptions.targetTitle = query.targettitle;
		this.$newTranslationButton.cxSourceSelector( sourceSelectorOptions );
	};

	$.fn.cxDashboard = function ( siteMapper, options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxdashboard' );

			if ( !data ) {
				$this.data( 'cx', ( data = new CXDashboard( this, siteMapper, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxDashboard.defaults = {};

	// Set the global siteMapper for code which we cannot inject it
	mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

	$( function () {
		$( 'body' ).cxDashboard( mw.cx.siteMapper );
	} );
}( jQuery, mediaWiki ) );
