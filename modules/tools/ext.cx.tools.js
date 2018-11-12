/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
	'use strict';

	/**
	 * ContentTranslationTools
	 *
	 * @class
	 * @param {Element} element
	 */
	function ContentTranslationTools( element ) {
		this.$container = $( element );

		this.$toolsContainer = null;
		this.$searchIcon = null;
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
				this.doSearch();
			}
		}.bind( this ) );

		this.$searchInput.keyup( $.debounce( 300, this.doSearch.bind( this ) ) );

		this.$searchIcon.on( 'click', this.doSearch.bind( this ) );

		mw.hook( 'mw.cx.tools.ready' ).fire();
	};

	ContentTranslationTools.prototype.render = function () {
		var $progressBar, $searchBox;

		$progressBar = $( '<div>' )
			.addClass( 'cx-header__progressbar' )
			.cxProgressBar();

		this.$searchInput = $( '<input>' )
			.addClass( 'cx-card--search__input' )
			.attr( {
				// It's more likely that the user will search
				// for words in the source language
				lang: mw.cx.sourceLanguage,
				dir: $.uls.data.getDir( mw.cx.sourceLanguage ),
				placeholder: mw.msg( 'cx-tools-searchbox-text' ),
				type: 'search'
			} );

		this.$searchIcon = $( '<div>' )
			.addClass( 'cx-card--search__icon' );

		$searchBox = $( '<div>' )
			.addClass( 'card cx-card--search cx-card--fixed' )
			.append( this.$searchIcon, this.$searchInput );

		this.$toolsContainer = $( '<div>' )
			.addClass( 'cx-tools' )
			.append( $searchBox )
			.cxFeedback();

		this.$container.append(
			$progressBar,
			this.$toolsContainer
		);
	};

	ContentTranslationTools.prototype.doSearch = function () {
		var text = this.$searchInput.val().trim().toLowerCase();

		mw.hook( 'mw.cx.search.word' ).fire( text );
	};

	ContentTranslationTools.prototype.updateSearch = function ( word ) {
		if ( typeof word === 'string' ) {
			this.$searchInput.val( word );
		} else {
			// This nicely covers emptying in case of link selection
			this.$searchInput.val( '' );
		}
	};

	ContentTranslationTools.prototype.listen = function () {
		mw.hook( 'mw.cx.select.word' ).add( this.updateSearch.bind( this ) );
		mw.hook( 'mw.cx.select.link' ).add( this.updateSearch.bind( this ) );
		$( window ).scroll( $.throttle( 250, this.scroll.bind( this ) ) );
	};

	ContentTranslationTools.prototype.scroll = function () {
		var scrollTop = window.pageYOffset;

		if ( scrollTop > 0 ) {
			this.$container.addClass( 'sticky' );
		} else {
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
}() );
