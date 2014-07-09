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
		this.init();
		this.listen();
	}

	ContentTranslationTools.prototype.init = function () {
		this.render();
		this.$toolsContainer.cxtoolmanager();
		// Handle enter key press in the search field.
		this.$searchBox.find( 'input' ).keypress( function ( event ) {
			if ( event.which === 13 ) {
				var text = $( this ).val().trim().toLowerCase();
				mw.hook( 'mw.cx.search.word' ).fire( text );
				mw.hook( 'mw.cx.search.link' ).fire( text );
			}
		} );
		mw.hook( 'mw.cx.tools.ready' ).fire();
	};

	ContentTranslationTools.prototype.render = function () {
		var $progressBar, $loadingIndicator, $search;

		this.$searchBox = $( '<div>' )
			.addClass( 'card search cx-tools--container' );
		this.$toolsContainer = $( '<div>' )
			.addClass( 'cx-tools--container' );
		$progressBar = $( '<div>' )
			.addClass( 'cx-header__progressbar' )
			.cxProgressBar();
		$search = $( '<input>' )
			.addClass( 'tools-words-search box' )
			.attr( {
				placeholder: mw.msg( 'cx-tools-searchbox-text' ),
				type: 'search'
			} );
		this.$searchBox.append( $search );
		$loadingIndicator = getLoadingIndicator();
		this.$container.append(
			$progressBar,
			this.$searchBox,
			this.$toolsContainer,
			$loadingIndicator
		);
	};

	function getLoadingIndicator() {
		return $( '<div>' )
			.addClass( 'cx-spinner cx-tools__loading-indicator' )
			.append(
				$( '<div>' ).addClass( 'bounce1' ),
				$( '<div>' ).addClass( 'bounce2' ),
				$( '<div>' ).addClass( 'bounce3' ) )
			.hide();
	}

	ContentTranslationTools.prototype.clearSearch = function () {
		this.$searchBox.find( 'input' ).val( '' );
	};

	ContentTranslationTools.prototype.listen = function () {
		$( window ).scroll( $.proxy( this.scroll, this ) );
		mw.hook( 'mw.cx.select.word' ).add( $.proxy( this.clearSearch, this ) );
		mw.hook( 'mw.cx.select.link' ).add( $.proxy( this.clearSearch, this ) );
	};

	ContentTranslationTools.prototype.scroll = function () {
		var scrollTop = $( window ).scrollTop(),
			// Use the .prev() element as the reference point(anchor)
			offsetTop = this.$container.prev().offset().top;

		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}
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

	mw.cx.ContentTranslationTools = ContentTranslationTools;

}( jQuery, mediaWiki ) );
