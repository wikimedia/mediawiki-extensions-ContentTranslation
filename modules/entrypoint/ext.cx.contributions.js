/*!
 * Displays a set of entry points.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
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
		this.init();
	}

	/**
	 * Initialize the plugin.
	 */
	CXContributions.prototype.init = function () {
		this.render();
	};

	CXContributions.prototype.render = function () {
		var $sectionHeader, contributionButtons, contributionButtonsGroup;

		$sectionHeader = $( '<h1>' )
			.text( mw.msg( 'cx-contributions-new-contributions' ) );

		contributionButtons = this.getActivities().map( function ( item ) {
			return new OO.ui.ButtonWidget( {
				classes: [ 'cx-contributions-item' ].concat( item.classes ),
				label: item.text,
				icon: item.icon,
				title: item.tooltip,
				href: item.url
			} );
		} );
		contributionButtonsGroup = new OO.ui.ButtonGroupWidget( {
			classes: [ 'cx-contributions' ],
			items: contributionButtons
		} );

		this.$element.append( $sectionHeader, contributionButtonsGroup.$element );
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
				classes: [ 'cx-contributions-new-article' ],
				icon: 'article',
				url: mw.util.getUrl( 'Special:WantedPages' ),
				tooltip: mw.msg( 'cx-contributions-new-article-tooltip' )
			},
			{
				text: mw.msg( 'cx-contributions-upload' ),
				classes: [ 'cx-contributions-upload' ],
				icon: 'upload',
				url: 'https://commons.wikimedia.org/wiki/Special:UploadWizard',
				tooltip: mw.msg( 'cx-contributions-upload-tooltip' )
			},
			{
				text: mw.msg( 'cx-contributions-translation' ),
				classes: [ 'cx-contributions-translation', ( isNewToCX() ? 'cx-contributions-new' : '' ) ],
				icon: 'language',
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
