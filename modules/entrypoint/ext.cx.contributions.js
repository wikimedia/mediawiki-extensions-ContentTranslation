/**
 * Provides a dropdown entry point
 *
 * @file
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * @class
	 */
	function CXContributions( element, options ) {
		this.$element = $( element );
		this.options = $.extend( {}, $.fn.cxContributions.defaults, options );
		this.init();

		this.$trigger = null;
		this.$menu = null;
	}

	/**
	 * Initialize the plugin.
	 */
	CXContributions.prototype.init = function () {
		this.render();
		this.listen();
	};

	CXContributions.prototype.render = function () {
		var $menuContainer;

		this.$trigger = $( '<button>' )
			.text( mw.msg( 'cx-contributions' ) )
			.addClass( 'mw-ui-button mw-ui-progressive' )
			.addClass( 'cx-contributions__trigger' );

		this.$menu = $( '<ul>' )
			.addClass( 'cx-contributions__menu' );
		this.$menu.hide();

		this.$menu.append(
			$.map( this.getActivities(), function ( item ) {
				return $( '<li>' ).text( item.text ).data( 'url', item.url );
			} )
		);

		$menuContainer = $( '<div>' )
			.addClass( 'cx-contributions' )
			.append( this.$trigger, this.$menu );

		this.$element.append( $menuContainer );
	};

	CXContributions.prototype.getActivities = function () {
		return [
			{
				text: mw.msg( 'cx-contributions-translation' ),
				url: mw.util.getUrl( 'Special:ContentTranslation' )
			},
			{
				text: mw.msg( 'cx-contributions-media' ),
				url: 'https://commons.wikimedia.org/wiki/Special:UploadWizard'
			}
		];
	};

	CXContributions.prototype.listen = function () {
		var menu = this.$menu;

		menu.toggle = function ( e ) {
			if ( menu.is( ':hidden' ) ) {
				menu.show();
				$( document ).one( 'click', function () {
					menu.hide();
				} );
			} else {
				menu.hide();
			}

			e.stopPropagation();
		};

		menu.on( 'click', '> li', this.startActivity );

		this.$trigger.one( 'click', function () {
			menu.css( 'min-width', $( this ).css( 'width' ) );
		} );
		this.$trigger.on( 'click', menu.toggle );

	};

	CXContributions.prototype.startActivity = function () {
		location.href = $( this ).data( 'url' );
	};

	/**
	 * CXContributions entry point plugin
	 */
	$.fn.cxContributions = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxentrypoint' );

			if ( !data ) {
				$this.data( 'cxentrypoint', ( data = new CXContributions( this, options ) ) );
			}
		} );
	};

	$.fn.cxContributions.defaults = {};

}( jQuery, mediaWiki ) );
