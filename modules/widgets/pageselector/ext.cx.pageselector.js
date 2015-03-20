/**
 * MediaWiki Page selector widget
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * MediaWikiPageSelector widget
	 * @param {jQuery|HTMLElement} input field
	 * @param {Object} [options]
	 */
	function MediaWikiPageSelector( input, options ) {
		this.$input = $( input );
		this.options = $.extend( {}, mw.PageSelector.defaults, options );
		this.render();
		this.listen();
	}

	/**
	 * Render the page selector
	 */
	MediaWikiPageSelector.prototype.render = function () {
		this.$menu = $( '<ul>' )
			.addClass( 'mw-pageselector-menu' )
			.hide();

		// Append it to the body
		$( 'body' ).append( this.$menu );
	};

	/**
	 * Set the API to use for querying pages.
	 * @param {mediawiki.Api} api MediaWiki API instance
	 */
	MediaWikiPageSelector.prototype.setApi = function ( api ) {
		this.options.api = api;
	};

	/**
	 * Get the pages matching the given query
	 * @param {string} input The query string
	 * @return {jQuery.Promise}
	 */
	MediaWikiPageSelector.prototype.getPages = function ( input ) {
		var api = this.options.api;

		if ( !input || !input.trim() ) {
			return $.Deferred().reject();
		}

		return api.get( {
			action: 'query',
			generator: 'prefixsearch',
			gpssearch: input,
			gpslimit: 10,
			prop: [ 'pageimages', 'pageterms' ].join( '|' ),
			piprop: 'thumbnail',
			pithumbsize: 50,
			pilimit: 10,
			redirects: true,
			list: 'prefixsearch',
			pssearch: input,
			pslimit: 10
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );
	};

	MediaWikiPageSelector.prototype.search = function () {
		var self = this;

		this.getPages( this.$input.val().trim() ).then( function ( items ) {
			var page, pageId, pages, $resultItem;

			pages = items.query.pages;
			self.$menu.empty().attr( {
				lang: self.$input.attr( 'lang' ),
				dir: self.$input.attr( 'dir' )
			} );

			for ( pageId in pages ) {
				page = pages[ pageId ];
				$resultItem = $( '<li>' )
					.append(
						$( '<div>' ).addClass( 'mw-page-title' ).text( page.title ),
						$( '<div>' ).addClass( 'mw-page-description' ).text( page.terms.description )
					)
					.data( 'page-title', page.title );
				if ( page.thumbnail ) {
					$resultItem.css( {
						'background-image': 'url(' + page.thumbnail.source + ')',
						'background-size': page.thumbnail.width + 'px ' + page.thumbnail.height + 'px'
					} );
				}
				self.$menu.append( $resultItem );
			}

			if ( pages ) {
				self.show();
			} else {
				self.hide();
			}
		} );
	};

	/**
	 * Select the given page
	 * @param {jQuery} $item Menu item
	 */
	MediaWikiPageSelector.prototype.select = function ( $item ) {
		this.$input.val( $item.data( 'page-title' ) ).focus();
	};

	/**
	 * Show the menu when there is something in input field
	 */
	MediaWikiPageSelector.prototype.show = function () {
		var offset;

		if ( this.$input.val().trim() ) {
			offset = this.$input.offset();
			this.$menu
				.css( {
					left: offset.left,
					top: offset.top
				} )
				.show();
		}
	};

	/*
	 * Hide the menu.
	 */
	MediaWikiPageSelector.prototype.hide = function () {
		this.$menu.hide();
	};

	/**
	 * Event binding
	 */
	MediaWikiPageSelector.prototype.listen = function () {
		var self = this,
			$menu = this.$menu;

		$menu.on( 'click', '> li', function () {
			self.select( $( this ) );
			self.hide();
		} );

		$menu.on( 'mouseover', '> li', function () {
			$( this ).addClass( 'mw-pageselector-selected' );
		} );

		$menu.on( 'mouseleave', '> li', function () {
			$( this ).removeClass( 'mw-pageselector-selected' );
		} );

		this.$input.one( 'focus', function () {
			$menu.css( 'min-width', $( this ).css( 'width' ) );
		} );

		// Hide the menu when clicked outside.
		$( document ).on( 'click', $.proxy( this.hide, this ) );

		this.$input.on( 'input', $.debounce( 250, false, $.proxy( this.search, this ) ) );

		// Handle navigation by arrow keys and selection by enter key
		this.$input.on( 'keydown', function ( event ) {
			var currentItem = 0,
				$items;

			if ( [ 13, 27, 38, 40 ].indexOf( event.keyCode ) < 0 ) {
				// Early return
				return;
			}

			$items = $menu.find( '> li' );
			if ( $items.length ) {
				self.show();
			}
			currentItem = $menu.find( '> li.mw-pageselector-selected' ).index();

			if ( event.keyCode === 40 ) {
				// Move to the next element
				currentItem++;
			}

			if ( event.keyCode === 38 ) {
				currentItem--;
			}

			if ( event.keyCode === 27 ) {
				// Escape handler
				self.hide();
				return false;
			}

			// Remove selected class from all elements
			$items.removeClass( 'mw-pageselector-selected' );
			// Add selected class to current item
			$items.eq( currentItem ).addClass( 'mw-pageselector-selected' );
			self.select( $items.eq( currentItem ) );

			if ( event.keyCode === 13 ) {
				// Enter key handler
				self.hide();
				return false;
			}
		} );
	};

	mw.PageSelector = MediaWikiPageSelector;

	mw.PageSelector.defaults = {
		// API to use for querying pages. By default queries the same wiki
		// To query other wikis, set the ajax URL to mw.Api.
		// Example: mw.Api( { ajax: { url: apiURL } } )
		api: new mw.Api()
	};
}( jQuery, mediaWiki ) );
