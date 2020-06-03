/*!
 * Displays a set of entry points.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	var entrypointName = 'contributions-page';

	/**
	 * @class
	 * @param {HTMLElement} element
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
			// eslint-disable-next-line mediawiki/class-doc
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
			// eslint-disable-next-line mediawiki/class-doc
			{
				text: mw.msg( 'cx-contributions-translation' ),
				classes: [ 'cx-contributions-translation' ]
					.concat( isNewToCX() ? [ 'cx-contributions-new' ] : [] ),
				icon: 'language',
				url: mw.util.getUrl( 'Special:ContentTranslation', {
					campaign: entrypointName
				} ),
				tooltip: mw.msg( 'cx-contributions-translation-tooltip' )
			}
		];
	};

	$( function () {
		var contributionsItemsContainer = document.createElement( 'span' );
		// eslint-disable-next-line no-new
		new CXContributions( contributionsItemsContainer );

		$( '#firstHeading' ).before( contributionsItemsContainer );
	} );

}() );
