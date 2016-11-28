/*!
 * Provides a dropdown entry point
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	var entrypointName = 'contributions-page';

	/**
	 * @class
	 * @param {Element} element
	 */
	function CXContributions( element ) {
		this.$element = $( element );
		this.$container = null;
		this.init();
	}

	/**
	 * Initialize the plugin.
	 */
	CXContributions.prototype.init = function () {
		this.render();
	};

	CXContributions.prototype.render = function () {
		var $sectionHeader;

		$sectionHeader = $( '<h1>' )
			.text( mw.msg( 'cx-contributions-new-contributions' ) );

		this.$container = $( '<div>' )
			.addClass( 'cx-contributions' )
			.append( $.map( this.getActivities(), function ( item ) {
				return $( '<a>' )
					.addClass( item.class )
					.text( item.text )
					.attr( {
						title: item.tooltip,
						href: item.url
					} );
			} ) );

		this.$element.append( $sectionHeader, this.$container );
		mw.hook( 'mw.cx.cta.shown' ).fire( entrypointName );
	};

	/**
	 * A weak and inaccurate way to guess if this user has done
	 * any contribution using CX.
	 *
	 * @return {boolean}
	 */
	function isNewToCX() {
		return $( '.mw-tag-marker-contenttranslation' ).length === 0;
	}

	CXContributions.prototype.getActivities = function () {
		return [
			{
				text: mw.msg( 'cx-contributions-new-article' ),
				'class': 'cx-contributions-new-article',
				url: mw.util.getUrl( 'Special:WantedPages' ),
				tooltip: mw.msg( 'cx-contributions-new-article-tooltip' )
			},
			{
				text: mw.msg( 'cx-contributions-upload' ),
				'class': 'cx-contributions-upload',
				url: 'https://commons.wikimedia.org/wiki/Special:UploadWizard',
				tooltip: mw.msg( 'cx-contributions-upload-tooltip' )
			},
			{
				text: mw.msg( 'cx-contributions-translation' ),
				'class': 'cx-contributions-translation ' + ( isNewToCX() ? 'cx-contributions-new' : '' ),
				url: mw.util.getUrl( 'Special:ContentTranslation', {
					campaign: entrypointName
				} ),
				tooltip: mw.msg( 'cx-contributions-translation-tooltip' )
			}
		];
	};

	/**
	 * CXContributions entry point plugin
	 * @param {Object} options
	 * @return {jQuery}
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

}( jQuery, mediaWiki ) );
