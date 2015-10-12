/**
 * ContentTranslation extension - Translation suggestions listing in dashboard.
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	// Name of the empty list, used to show when there is no suggestions
	var emptyListName = 'cx-suggestionlist-empty';

	/**
	 * CXSuggestionList
	 *
	 * @param {jQuery} $container The container for this suggestion list
	 * @param {Object} The stitempper instance
	 * @class
	 */
	function CXSuggestionList( $container, siteMapper ) {
		this.$container = $container;
		this.siteMapper = siteMapper;
		this.suggestions = [];
		this.sourceLanguage = null;
		this.targetLanguage = null;
		this.promise = null;
		this.queryContinue = null;
		this.hasMore = true;
		this.lists = {};
		this.active = false;
		this.filters = {
			sourceLanguage: null,
			targetLanguage: null
		};
		this.seed = null;
		this.listen();
		this.init();
	}

	CXSuggestionList.prototype.init = function () {
		this.seed = parseInt( Math.random() * 10000, 10 );
		this.initLanguages();
	};

	CXSuggestionList.prototype.initLanguages = function () {
		var storedTargetLanguage, storedSourceLanguage,
			query = new mw.Uri().query;

		try {
			storedTargetLanguage = localStorage.getItem( 'cxTargetLanguage' );
			storedSourceLanguage = localStorage.getItem( 'cxSourceLanguage' );
		} catch ( e ) {
			// Local storage disabled?
		}

		// Find a sensible language pair.
		this.sourceLanguage = query.from || storedSourceLanguage || 'en';
		this.targetLanguage = query.to || storedTargetLanguage || mw.config.get( 'wgContentLanguage' );
		if ( this.sourceLanguage === this.targetLanguage ) {
			this.targetLanguage = 'es';
			// In case this is also same as source language, nothing breaks.
		}
		this.filters = {
			sourceLanguage: this.sourceLanguage,
			targetLanguage: this.targetLanguage
		};
	};

	CXSuggestionList.prototype.loadItems = function () {
		var lists, list, listId, promise,
			isEmpty = true,
			self = this;

		if ( this.promise ) {
			return this.promise;
		}
		promise = this.getSuggestionLists();
		promise.done( function ( suggestions ) {
			var i, listIds;

			lists = suggestions.lists;
			// Hide empty list, if any
			if ( self.lists[ emptyListName ] && self.lists[ emptyListName ].$list ) {
				self.lists[ emptyListName ].$list.hide();
			}

			listIds = Object.keys( lists );
			// Sort the items based on type. Descending order.
			// When we have many lists, we will require more intellignet list sorting
			listIds.sort( function ( a, b ) {
				return lists[ a ].type < lists[ b ].type;
			} );

			for ( i = 0; i < listIds.length; i++ ) {
				listId = listIds[ i ];
				list = lists[ listId ];
				if ( self.lists[ listId ] ) {
					// Add new set of suggestions to existing list
					self.lists[ listId ].suggestions.concat( list.suggestions );
				} else {
					// Add as new list
					self.lists[ listId ] = list;
				}
				if ( self.lists[ listId ].suggestions.length ) {
					isEmpty = false;
				}
				// Show the suggestions items.
				self.insertSuggestionList( listId, list.suggestions );
			}

			if ( isEmpty ) {
				self.showEmptySuggestionList();
			}
		} ).fail( function () {
			self.promise = null;
			// Show empty list
			self.showEmptySuggestionList();
		} );

		return promise;
	};

	/**
	 * Get all the translation suggestion lists of given user.
	 *
	 * @return {jQuery.Promise}
	 */
	CXSuggestionList.prototype.getSuggestionLists = function () {
		var self = this,
			params,
			api = new mw.Api();

		if ( this.promise ) {
			// Avoid duplicate API requests.
			return this.promise;
		}
		if ( this.hasMore === false ) {
			// This method is supposed to call only if we there are items to fetch
			return $.Deferred().reject();
		}

		params = $.extend( {
			action: 'query',
			list: 'contenttranslationsuggestions',
			from: this.filters.sourceLanguage,
			to: this.filters.targetLanguage,
			limit: 10,
			seed: this.seed
		}, this.queryContinue );

		this.promise = api.get( params ).then( function ( response ) {
			self.promise = null;
			self.queryContinue = response.continue;
			self.hasMore = !!response.continue;
			return response.query.contenttranslationsuggestions;
		} );

		return this.promise;
	};

	CXSuggestionList.prototype.show = function () {
		this.active = true;
		$.each( this.lists, function ( index, list ) {
			if ( list.$list ) {
				list.$list.show();
			}
		} );
		if ( !Object.keys( this.lists ).length ) {
			this.loadItems();
		}
	};

	CXSuggestionList.prototype.hide = function () {
		this.active = false;
		$.each( this.lists, function ( index, list ) {
			if ( list.$list ) {
				list.$list.hide();
			}
		} );
	};

	CXSuggestionList.prototype.applyFilters = function () {
		var i, suggestion;

		// Hide all lists
		$.each( this.lists, function ( index, list ) {
			if ( list.$list ) {
				list.$list.hide();
			}
			if ( list.suggestions ) {
				for ( i = 0; i < list.suggestions.length; i++ ) {
					suggestion = list.suggestions[ i ];
					suggestion.$element.remove();
				}
			}
		} );
		this.lists = {};
		// Reset the ongoing request trackers
		this.hasMore = true;
		this.queryContinue = null;
		this.promise = null;
		this.loadItems();
	};

	/**
	 * Get the thumbnail image and description of the given title.
	 *
	 * @param {string} language The language of the title.
	 * @param {string[]} titles Title
	 * @return {jQuery.Promise}
	 */
	CXSuggestionList.prototype.getPageDetails = function ( language, titles ) {
		return this.siteMapper.getApi( language ).get( {
			action: 'query',
			titles: titles.join( '|' ),
			prop: [ 'pageimages', 'pageterms' ].join( '|' ),
			piprop: 'thumbnail',
			pilimit: 50, // maximum
			pithumbsize: 150,
			redirects: true
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );
	};

	/**
	 * Show a title image of the translation based on source title.
	 *
	 * @param {Object} suggestion
	 */
	CXSuggestionList.prototype.showTitleImageAndDesc = function ( suggestions ) {
		var apply,
			self = this,
			queries = {},
			map = {};

		// TODO: We dont need this grouping since suggestions are fetched for a fixed language pair
		$.each( suggestions, function ( index, suggestion ) {
			var language = self.siteMapper.getWikiDomainCode( suggestion.sourceLanguage );

			queries[ language ] = queries[ language ] || [];
			queries[ language ].push( suggestion.title );

			// So that we can easily find the element in the callback
			if ( !map[ suggestion.title ] ) {
				// Same source title might be translated to multiple languages.
				map[ suggestion.title ] = [];
			}
			map[ suggestion.title ].push( suggestion );
		} );

		apply = function ( page ) {
			$.each( map[ page.title ], function ( i, item ) {
				if ( page.thumbnail ) {
					item.$image.css( {
						'background-image': 'url(' + page.thumbnail.source + ')'
					} );
				}
				if ( page.terms ) {
					item.$desc.text( page.terms.description ).show();
				}
			} );
		};

		$.each( queries, function ( language, titles ) {
			self.getPageDetails( language, titles ).done( function ( response ) {
				$.map( response.query.pages, apply );
			} );
		} );
	};

	/**
	 * List all suggestions.
	 *
	 * @param {string} listId
	 * @param {Object[]} suggestions
	 * @param {boolean} [addtoTop=false] Whether the list need to be added to top of all other lists.
	 */
	CXSuggestionList.prototype.insertSuggestionList = function ( listId, suggestions, addtoTop ) {
		var i, list, $suggestion, $listHeading,
			$suggestions = [];

		if ( !suggestions || !suggestions.length ) {
			return;
		}

		list = this.lists[ listId ];
		// Create the list container if not present already.
		if ( !list.$list ) {
			list.$list = $( '<div>' )
				.addClass( 'cx-suggestionlist ' + list.name );
			$listHeading = $( '<h2>' ).text( mw.msg( list.name ) );
			list.$list.append( $listHeading );

			if ( addtoTop && this.$container.find( '.cx-suggestionlist' ).length ) {
				this.$container.find( '.cx-suggestionlist:first' )
					.before( list.$list );
			} else {
				this.$container.append( list.$list );
			}
		} else {
			// The list might be hidden if it became empty due to item removals.
			list.$list.show();
		}

		for ( i = 0; i < suggestions.length; i++ ) {
			$suggestion = this.buildSuggestionItem( suggestions[ i ] );
			$suggestions.push( $suggestion );
		}
		this.showTitleImageAndDesc( suggestions );
		list.$list.append( $suggestions );
	};

	/**
	 * Build the DOM for suggestion item
	 *
	 * @return {jQuery}
	 */
	CXSuggestionList.prototype.buildSuggestionItem = function ( suggestion ) {
		var $image, $desc, $featured, $actions, $discardAction, $favoriteAction,
			sourceDir, targetDir, $targetLanguage,
			$translationLink, $suggestion, $metaDataContainer,
			$sourceLanguage, $languageContainer,
			$titleLanguageBlock;

		$suggestion = $( '<div>' )
			.addClass( 'cx-slitem' )
			.attr( 'id', suggestion.id );
		$image = $( '<div>' )
			.addClass( 'cx-slitem__image' );

		sourceDir = $.uls.data.getDir( suggestion.sourceLanguage );
		targetDir = $.uls.data.getDir( suggestion.targetLanguage );

		$translationLink = $( '<div>' )
			.addClass( 'cx-slitem__translation-link' )
			.attr( 'data-suggestion', JSON.stringify( suggestion ) )
			// It must be a separate element to ensure
			// separation from the target title
			.append( $( '<span>' )
				.text( suggestion.title )
				.addClass( 'source-title' )
				.prop( {
					lang: suggestion.sourceLanguage,
					dir: sourceDir
				} )
			);

		$sourceLanguage = $( '<a>' )
			.prop( {
				lang: suggestion.sourcelanguage,
				dir: sourceDir,
				href: this.siteMapper.getPageUrl( suggestion.sourceLanguage, suggestion.title ),
				target: '_blank',
				title: mw.msg( 'cx-suggestionlist-view-source-page' )
			} )
			.click( function ( e ) {
				// Do not propagate to the parent suggestion item. Prevent opening
				// source selector.
				e.stopPropagation();
			} )
			.addClass( 'cx-slitem__languages__language cx-slitem__languages__language--source' )
			.text( $.uls.data.getAutonym( suggestion.sourceLanguage ) );

		$targetLanguage = $( '<div>' )
			.prop( {
				lang: suggestion.targetLanguage,
				dir: targetDir
			} )
			.addClass( 'cx-slitem__languages__language cx-slitem__languages__language--target' )
			.text( $.uls.data.getAutonym( suggestion.targetLanguage ) );

		$languageContainer = $( '<div>' )
			.addClass( 'cx-slitem__languages' )
			.append( $sourceLanguage, $targetLanguage );

		$desc = $( '<div>' )
			.prop( {
				lang: suggestion.sourceLanguage,
				dir: sourceDir
			} )
			.addClass( 'cx-slitem__desc' )
			.hide();
		$discardAction = $( '<div>' )
			.addClass( 'cx-slitem__action cx-slitem__action--discard' )
			.one( 'click', $.proxy( this.discardSuggestion, this, suggestion ) );

		$featured = $( [] );
		if ( this.lists[ suggestion.listId ].name === 'cx-suggestionlist-featured' ) {
			$featured = $( '<div>' )
				.addClass( 'cx-sltag cx-sltag--featured' )
				.text( mw.msg( this.lists[ suggestion.listId ].displayName ) );
		}

		if ( this.lists[ suggestion.listId ].name === 'cx-suggestionlist-favorite' ) {
			$discardAction.hide();
			$favoriteAction = $( '<div>' )
				.addClass( 'cx-slitem__action cx-slitem__action--nonfavorite' )
				.one( 'click', $.proxy( this.unmarkFavorite, this, suggestion ) );
		} else {
			$favoriteAction = $( '<div>' )
				.addClass( 'cx-slitem__action cx-slitem__action--favorite' )
				.one( 'click', $.proxy( this.markFavorite, this, suggestion ) );
		}

		$metaDataContainer = $( '<div>' )
			.addClass( 'cx-slitem__meta' )
			.append( $languageContainer, $featured );

		$titleLanguageBlock = $( '<div>' )
			.addClass( 'cx-slitem__details' )
			.append( $translationLink, $desc, $metaDataContainer );
		$actions = $( '<div>' )
			.addClass( 'cx-slitem__actions' )
			.append( $discardAction, $favoriteAction );
		$suggestion.append(
			$image,
			$titleLanguageBlock,
			$actions
		);

		// Store reference to the DOM node
		suggestion.$element = $suggestion;
		suggestion.$desc = $desc;
		suggestion.$image = $image;
		suggestion.$discardAction = $discardAction;

		return $suggestion;
	};

	/**
	 * Discard a suggestion.
	 *
	 * @param  {Object} suggestion
	 * @return {boolean}
	 */
	CXSuggestionList.prototype.discardSuggestion = function ( suggestion ) {
		var params,
			api = new mw.Api();

		params = {
			action: 'cxsuggestionlist',
			listname: 'cx-suggestionlist-discarded',
			listaction: 'add',
			titles: suggestion.title,
			from: suggestion.sourceLanguage,
			to: suggestion.targetLanguage
		};
		api.postWithToken( 'edit', params ).done( function ( response ) {
			if ( response.cxsuggestionlist.result === 'success' ) {
				suggestion.$element.slideUp( 'slow', function () {
					$( this ).remove();
				} );
			}
			// TODO: What happens if this fails?
		} );
		// Avoid event propagation.
		return false;
	};

	/**
	 * Mark a suggestion as favorite.
	 *
	 * @param  {Object} suggestion
	 * @return {boolean}
	 */
	CXSuggestionList.prototype.markFavorite = function ( suggestion ) {
		var params, api = new mw.Api(),
			self = this;

		params = {
			action: 'cxsuggestionlist',
			listname: 'cx-suggestionlist-favorite',
			listaction: 'add',
			titles: suggestion.title,
			from: suggestion.sourceLanguage,
			to: suggestion.targetLanguage
		};
		api.postWithToken( 'edit', params ).done( function ( response ) {
			var favoriteListId;
			if ( response.cxsuggestionlist.result === 'success' ) {
				suggestion.$element.slideUp( 'slow', function () {
					$( this ).remove();
				} );

				favoriteListId = self.getListId( 'cx-suggestionlist-favorite' );
				suggestion.listId = favoriteListId;
				if ( favoriteListId === null ) {
					// We need to construct a dummy list for now to help the UI rendering.
					favoriteListId = 'cx-suggestionlist-favorite';
					self.lists[ favoriteListId ] = {
						name: favoriteListId,
						suggestions: []
					};
				}
				suggestion.listId = favoriteListId;
				self.lists[ favoriteListId ].suggestions.push( suggestion );
				self.insertSuggestionList( favoriteListId, [ suggestion ], true );
			}
			// TODO: What happens if this fails?
		} );
		// Avoid event propagation.
		return false;
	};

	/**
	 * Unmark a suggestion as favorite.
	 *
	 * @param  {Object} suggestion
	 * @return {boolean}
	 */
	CXSuggestionList.prototype.unmarkFavorite = function ( suggestion ) {
		var params, self = this,
			api = new mw.Api();

		params = {
			action: 'cxsuggestionlist',
			listname: 'cx-suggestionlist-favorite',
			listaction: 'remove',
			titles: suggestion.title,
			from: suggestion.sourceLanguage,
			to: suggestion.targetLanguage
		};
		api.postWithToken( 'edit', params ).done( function ( response ) {
			if ( response.cxsuggestionlist.result === 'success' ) {
				suggestion.$element.slideUp( 'slow', function () {
					var favoriteListId;
					$( this ).remove();
					favoriteListId = self.getListId( 'cx-suggestionlist-favorite' );
					if ( !self.lists[ favoriteListId ].$list.find( '.cx-slitem' ).length ) {
						self.lists[ favoriteListId ].$list.hide();
					}
				} );
				// Do we need to add to general suggestions?
			}
			// TODO: What happens if this fails?
		} );
		// Avoid event propagation.
		return false;
	};

	CXSuggestionList.prototype.showEmptySuggestionList = function () {
		var $img, $title, $desc, listId = emptyListName;

		if ( !this.lists[ listId ] ) {
			this.lists[ listId ] = {
				name: listId
			};
			$img = $( '<div>' )
				.addClass( 'cx-suggestionlist-empty__img' );
			$title = $( '<div>' )
				.addClass( 'cx-suggestionlist-empty__title' )
				.text( mw.msg( 'cx-suggestionlist-empty-title' ) );
			$desc = $( '<div>' )
				.addClass( 'cx-suggestionlist-empty__desc' )
				.text( mw.msg( 'cx-suggestionlist-empty-desc' ) );
			this.lists[ listId ].$list = $( '<div>' )
				.addClass( 'cx-suggestionlist-empty' )
				.append( $img, $title, $desc );
			this.$container.append( this.lists[ listId ].$list );
		}
		// Hide all other lists, if any.
		$.each( this.lists, function ( index, list ) {
			if ( list.$list ) {
				list.$list.hide();
			}
		} );
		this.lists[ listId ].$list.show();
	};

	/**
	 * Get the list identifier by its name.
	 *
	 * @param  {string} listName List name.
	 * @return {string|null} list identifier.
	 */
	CXSuggestionList.prototype.getListId = function ( listName ) {
		var listId = null;

		$.each( this.lists, function ( index, value ) {
			if ( listName === value.name ) {
				listId = index;
				return false;
			}
		} );
		return listId;
	};

	/**
	 * Event handlers
	 */
	CXSuggestionList.prototype.listen = function () {
		this.$container.on( 'click', '.cx-suggestionlist .cx-slitem', function () {
			var cxSelector, suggestion;

			cxSelector = $( this ).data( 'cxsourceselector' );

			if ( cxSelector ) {
				cxSelector.prefill();
			} else {
				suggestion = $( this ).find( '.cx-slitem__translation-link' ).data( 'suggestion' );
				$( this ).cxSourceSelector( {
					sourceLanguage: suggestion.sourceLanguage,
					targetLanguage: suggestion.targetLanguage,
					sourceTitle: suggestion.title,
					campaign: 'suggestions'
				} );
			}
		} );

		$( window ).scroll( $.throttle( 250, $.proxy( this.scroll, this ) ) );
	};

	/**
	 * Scroll handler for the suggestions
	 */
	CXSuggestionList.prototype.scroll = function () {
		var $window, scrollTop, windowHeight, offsetTop;

		if ( !this.active ) {
			return;
		}
		$window = $( window );
		scrollTop = $window.scrollTop();
		windowHeight = $window.height();
		offsetTop = this.$container.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}

		// Load next batch of items on scroll.
		if ( this.hasMore && scrollTop + windowHeight + 100 > $( document ).height() ) {
			this.loadItems();
		}
	};

	mw.cx.CXSuggestionList = CXSuggestionList;
}( jQuery, mediaWiki ) );
