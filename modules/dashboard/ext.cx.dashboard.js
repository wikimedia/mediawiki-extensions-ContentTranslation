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
		this.$sidebar = null;
		this.$translationList = null;
		this.$newTranslationButton = null;
		this.init();
	}

	CXDashboard.prototype.init = function () {
		this.render();
		this.initComponents();
		this.listen();
		mw.hook( 'mw.cx.dashboard.ready' ).fire();
	};

	/**
	 * Initialize the components
	 */
	CXDashboard.prototype.initComponents = function () {
		this.$translationList.cxTranslationList( this.siteMapper );
	};

	CXDashboard.prototype.getSidebarItems = function () {
		return [
			{
				class: 'cx-sidebar__link cx-sidebar__link--information',
				href: 'https://www.mediawiki.org/wiki/ContentTranslation',
				label: mw.msg( 'cx-dashboard-sidebar-information' )
			},
			{
				class: 'cx-sidebar__link cx-sidebar__link--feedback',
				href: 'https://www.mediawiki.org/wiki/Talk:Content_translation',
				label: mw.msg( 'cx-dashboard-sidebar-feedback' )
			}
		];
	};

	CXDashboard.prototype.buildSidebar = function () {
		var $header, i, items, $links = [];

		$header = $( '<div>' )
			.addClass( 'cx-sidebar__title' )
			.text( mw.msg( 'cx-dashboard-sidebar-title' ) );

		items = this.getSidebarItems();
		$links = $( '<ul>' );
		for ( i = 0; i < items.length; i++ ) {
			$links.append(
				$( '<li>' ).append(
					$( '<a>' )
					.addClass( items[ i ].class )
					.text( items[ i ].label )
					.prop( {
						target: '_blank',
						href: items[ i ].href
					} )
				)
			);
		}

		return $( '<div>' )
			.addClass( 'cx-sidebar' )
			.append( $header, $links );
	};

	CXDashboard.prototype.render = function () {
		this.$header = $( '<div>' )
			.addClass( 'cx-header--dashboard' );

		this.$header.cxHeader( this.siteMapper, mw.msg( 'cx-dashboard-header' ) );
		this.$translationList = $( '<div>' )
			.addClass( 'cx-translationlist-container' );
		this.$sidebar = $( '<div>' )
			.addClass( 'cx-dashboard__sidebar' )
			.append( this.buildSidebar() );

		this.$dashboard = $( '<div>' )
			.addClass( 'cx-dashboard' )
			.append( this.$translationList, this.$sidebar );

		this.$container.append( this.$header, this.$dashboard );
	};

	CXDashboard.prototype.listen = function () {
		$( window ).scroll( $.throttle( 250, $.proxy( this.scroll, this ) ) );
	};

	CXDashboard.prototype.scroll = function () {
		var scrollTop = $( window ).scrollTop(),
			offsetTop = this.$dashboard.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$sidebar.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$sidebar.removeClass( 'sticky' );
		}
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
