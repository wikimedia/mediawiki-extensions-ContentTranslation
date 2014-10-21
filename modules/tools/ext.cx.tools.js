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
	 * ContentTranslationTools
	 *
	 * @class
	 */
	function ContentTranslationTools( element ) {
		this.$container = $( element );

		this.$toolsContainer = null;
		this.$searchBox = null;
		this.$searchInput = null;

		this.init();
		this.listen();
	}

	ContentTranslationTools.prototype.init = function () {
		this.render();
		this.$toolsContainer.cxtoolmanager();

		// Handle enter key press in the search field.
		this.$searchInput.keypress( function ( event ) {
			if ( event.which === 13 ) {
				var text = $( this ).val().trim().toLowerCase();
				mw.hook( 'mw.cx.search.word' ).fire( text );
				mw.hook( 'mw.cx.search.link' ).fire( text );
			}
		} );

		mw.hook( 'mw.cx.tools.ready' ).fire();
	};

	ContentTranslationTools.prototype.render = function () {
		var $progressBar, $loadingIndicator;

		$progressBar = $( '<div>' )
			.addClass( 'cx-header__progressbar' )
			.cxProgressBar();

		this.$searchInput = $( '<input>' )
			.addClass( 'cx-card--search__input' )
			.attr( {
				placeholder: mw.msg( 'cx-tools-searchbox-text' ),
				type: 'search'
			} );

		this.$searchBox = $( '<div>' )
			.addClass( 'card cx-card--search cx-card--fixed' )
			.append( this.$searchInput );

		this.$toolsContainer = $( '<div>' )
			.addClass( 'cx-tools' )
			.append( this.$searchBox );

		$loadingIndicator = getLoadingIndicator();

		this.$container.append(
			$progressBar,
			this.$toolsContainer,
			$loadingIndicator
		);
	};

	function getLoadingIndicator() {
		return $( '<div>' )
			.addClass( 'cx-spinner cx-spinner--tools' )
			.append(
				$( '<div>' ).addClass( 'bounce1' ),
				$( '<div>' ).addClass( 'bounce2' ),
				$( '<div>' ).addClass( 'bounce3' )
			)
			.hide();
	}

	ContentTranslationTools.prototype.clearSearch = function () {
		this.$searchInput.val( '' );
	};

	ContentTranslationTools.prototype.listen = function () {
		mw.hook( 'mw.cx.select.word' ).add( $.proxy( this.clearSearch, this ) );
		mw.hook( 'mw.cx.select.link' ).add( $.proxy( this.clearSearch, this ) );
	};

	$.fn.cxTools = function () {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxTools' );

			if ( !data ) {
				$this.data( 'cxTools', ( data = new ContentTranslationTools( this ) ) );
			}
		} );
	};
}( jQuery, mediaWiki ) );
