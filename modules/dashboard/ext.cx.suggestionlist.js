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
	var
		emptyListName = 'cx-suggestionlist-empty',
		listTypes = {
			TYPE_DEFAULT: 0,
			TYPE_FEATURED: 1,
			TYPE_DISCARDED: 2,
			TYPE_FAVORITE: 3,
			TYPE_CATEGORY: 4,
			TYPE_PERSONALIZED: 5
		};

	/**
	 * CXSuggestionList
	 *
	 * @param {jQuery} $container The container for this suggestion list
	 * @param {Object} siteMapper
	 * @class
	 */
	function CXSuggestionList( $container, siteMapper ) {
		this.$container = $container;
		this.siteMapper = siteMapper;
		this.suggestions = [];
		this.sourceLanguage = null;
		this.targetLanguage = null;
		this.lists = {};
		this.active = false;
		this.filters = {
			sourceLanguage: null,
			targetLanguage: null
		};
		this.$personalCollection = null;
		this.$publicCollection = null;
		this.seed = null;
		this.listen();
		this.init();
	}

	CXSuggestionList.prototype.init = function () {
		var $publicCollectionTitle;

		this.seed = parseInt( Math.random() * 10000, 10 );
		this.$personalCollection = $( '<div>' ).addClass( 'cx-suggestionlist__personal' );
		this.$publicCollection = $( '<div>' )
			.addClass( 'cx-suggestionlist__public' );
		$publicCollectionTitle = $( '<h2>' )
			.text( mw.msg( 'cx-suggestionlist-title' ) )
			.addClass( 'cx-suggestionlist__public-title' );
		this.$container.append( this.$personalCollection, $publicCollectionTitle, this.$publicCollection );
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

	/**
	 * @param {Object} [list]
	 */
	CXSuggestionList.prototype.loadItems = function ( list ) {
		var lists, promise,
			isEmpty = true,
			self = this;

		if ( !list ) {
			// Initial load, load available lists and couple of suggestions for them
			promise = this.getSuggestionLists();
		} else {
			// Afterwards, suggestions are loaded per list
			if ( list.promise ) {
				return;
			}

			promise = this.loadSuggestionsForList( list );
		}

		promise.done( function ( suggestions ) {
			var i, list, listId, listIds;

			lists = suggestions.lists;
			// Hide empty list, if any
			if ( self.lists[ emptyListName ] && self.lists[ emptyListName ].$list ) {
				self.lists[ emptyListName ].$list.hide();
			}

			listIds = self.sortLists( lists );
			for ( i = 0; i < listIds.length; i++ ) {
				listId = listIds[ i ];
				list = lists[ listId ];
				if ( self.lists[ listId ] ) {
					// Add new set of suggestions to existing list
					self.lists[ listId ].suggestions =
						self.lists[ listId ].suggestions.concat( list.suggestions );
				} else {
					// Add as new list
					list.id = listId;
					list.seed = self.seed;
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
		var params,
			api = new mw.Api();

		params = {
			action: 'query',
			list: 'contenttranslationsuggestions',
			from: this.filters.sourceLanguage,
			to: this.filters.targetLanguage,
			limit: 4,
			seed: this.seed
		};

		return api.get( params ).then( function ( response ) {
			return response.query.contenttranslationsuggestions;
		} );
	};

	/**
	 * Get all the translation suggestion lists of given user.
	 *
	 * @param {Object} list
	 * @return {jQuery.Promise}
	 */
	CXSuggestionList.prototype.loadSuggestionsForList = function ( list ) {
		var params,
			api = new mw.Api();

		if ( list.id === 'trex' ) {
			this.recommendtool = this.recommendtool || new mw.cx.recommendtool(
				this.filters.sourceLanguage,
				this.filters.targetLanguage
			);
			return this.recommendtool.getSuggestionList();
		}

		if ( list.hasMore === false ) {
			// This method is supposed to be called only if we there are items to fetch
			return $.Deferred().reject();
		}

		params = $.extend( {
			action: 'query',
			list: 'contenttranslationsuggestions',
			listid: list.id,
			from: this.filters.sourceLanguage,
			to: this.filters.targetLanguage,
			limit: 10,
			seed: list.seed
		}, list.queryContinue );

		list.promise = api.get( params ).then( function ( response ) {
			list.promise = undefined;
			list.queryContinue = response.continue;
			list.hasMore = !!response.continue;
			return response.query.contenttranslationsuggestions;
		} );

		return list.promise;
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
			this.loadItems( {
				id: 'trex'
			} );
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
		this.recommendtool = null;
		this.loadItems();
		this.loadItems( {
			id: 'trex'
		} );
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
	 * @param {Object} suggestions
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
			if ( !map[ page.title ] ) {
				return;
			}
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
	 */
	CXSuggestionList.prototype.insertSuggestionList = function ( listId, suggestions ) {
		var i, list, $suggestion, $listHeading,
			$suggestions = [];

		if ( !suggestions || !suggestions.length ) {
			return;
		}

		list = this.lists[ listId ];
		// Create the list container if not present already.
		if ( !list.$list ) {
			list.$list = $( '<div>' )
				.attr( 'data-listid', listId )
				.addClass( 'cx-suggestionlist ' + list.name );

			if ( list.type !== listTypes.TYPE_FEATURED && list.type !== listTypes.TYPE_PERSONALIZED ) {
				// No need to show heading for misc fallback suggestions shown at the end.
				$listHeading = $( '<h2>' ).text( list.displayName );
				list.$list.append( $listHeading );
			}
			if ( list.type === listTypes.TYPE_FAVORITE ) {
				this.$personalCollection.append( list.$list );
			} else {
				this.$publicCollection.append( list.$list );
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

		// Insert after last suggestion, but before any buttons etc.
		if ( list.$list.find( '.cx-slitem:last' ).length ) {
			list.$list.find( '.cx-slitem:last' ).after( $suggestions );
		} else {
			list.$list.append( $suggestions );
		}

		if ( list.type === listTypes.TYPE_CATEGORY ) {
			this.makeExpandableList( listId );
		} else if ( list.type === listTypes.TYPE_FEATURED || list.type === listTypes.TYPE_PERSONALIZED ) {
			this.addRefreshTrigger();
		}
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
		if ( this.lists[ suggestion.listId ].type === listTypes.TYPE_FEATURED ) {
			$featured = $( '<div>' )
				.addClass( 'cx-sltag cx-sltag--featured' )
				.text( this.lists[ suggestion.listId ].displayName );
		}

		if ( this.lists[ suggestion.listId ].type === listTypes.TYPE_FAVORITE ) {
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
		var $img, $title, $desc,
			listId = emptyListName;

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

			$desc.after( $( '<div>' )
				.addClass( 'cx-suggestionlist-empty__recommend' )
				.append( $( '<a>' )
					.text( mw.msg( 'cx-suggestionlist-empty-desc-recommend-link-text' ) )
					.prop( 'href', 'http://recommend.wmflabs.org' )
				)
			);

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
		var expandedListId, $expandedList, $window, triggerPos,
			scrollTop, windowHeight, offsetTop, visibleArea, $loadTrigger;

		if ( !this.active ) {
			return;
		}
		$window = $( window );
		scrollTop = $window.scrollTop();
		windowHeight = $window.height();
		offsetTop = this.$container.offset().top;
		visibleArea = windowHeight + scrollTop;
		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}

		// Load next batch of items when loadTrigger is in viewpot
		$expandedList = this.$container.find( '.cx-suggestionlist--expanded' );
		$loadTrigger = $expandedList.find( '.cx-suggestionlist__collapse' );

		if ( !$loadTrigger.length ) {
			return;
		}

		triggerPos = $loadTrigger.offset().top + $loadTrigger.outerHeight();
		expandedListId = $expandedList.data( 'listid' );
		if (
			expandedListId &&
			this.lists[ expandedListId ].hasMore !== false &&
			visibleArea >= triggerPos && scrollTop <= triggerPos
		) {
			this.loadItems( this.lists[ expandedListId ] );
		}
	};

	/**
	 * Sort the lists in their logical order to display.
	 *
	 * @param  {Object[]} lists
	 * @return {number[]} Orderded list ids.
	 */
	CXSuggestionList.prototype.sortLists = function ( lists ) {
		var order, ids;

		order = {};
		order[ listTypes.TYPE_FAVORITE ] = 0;
		order[ listTypes.TYPE_DISCARDED ] = 1;
		order[ listTypes.TYPE_PERSONALIZED ] = 2;
		order[ listTypes.TYPE_CATEGORY ] = 3;
		order[ listTypes.TYPE_FEATURED ] = 4;
		order[ listTypes.TYPE_DEFAULT ] = 5;

		ids = Object.keys( lists ).sort( function ( a, b ) {
			return order[ lists[ a ].type ] - order[ lists[ b ].type ];
		} );

		return ids;
	};

	/**
	 * Make the list expandable and collapsable.
	 *
	 * @param {string} listId
	 */
	CXSuggestionList.prototype.makeExpandableList = function ( listId ) {
		var list = this.lists[ listId ];

		if ( list.$list.is( '.cx-suggestionlist--collapsed' ) ||
			list.$list.is( '.cx-suggestionlist--expanded' )
		) {
			return;
		}

		list.$list.find( 'h2' ).on( 'click', $.proxy( this.expandOrCollapse, this, list.id ) );
		if ( list.suggestions.length > 2 ) {
			list.$list.append( $( '<div>' )
				.addClass( 'cx-suggestionlist__expand' )
				.text( mw.msg( 'cx-suggestionlist-expand' ) )
				.on( 'click', $.proxy( this.expandOrCollapse, this, list.id ) )
			);
		}
		// By default, the list is collapsed.
		list.$list.addClass( 'cx-suggestionlist--collapsed' );
	};

	/**
	 * Expand of collapse the list with the given listId.
	 *
	 * @param  {string} listId List identifier.
	 */
	CXSuggestionList.prototype.expandOrCollapse = function ( listId ) {
		var $trigger,
			list = this.lists[ listId ];

		$trigger = list.$list.find( '.cx-suggestionlist__expand, .cx-suggestionlist__collapse' );

		if ( list.$list.is( '.cx-suggestionlist--collapsed' ) ) {
			// Collapse all expended lists.
			this.$container.find( '.cx-suggestionlist__collapse' ).trigger( 'click' );
			$trigger.text( mw.msg( 'cx-suggestionlist-collapse' ) );
		} else {
			$trigger.text( mw.msg( 'cx-suggestionlist-expand' ) );
		}

		$trigger.toggleClass( 'cx-suggestionlist__collapse cx-suggestionlist__expand' );
		list.$list.toggleClass( 'cx-suggestionlist--collapsed cx-suggestionlist--expanded' );
	};

	/**
	 * Make the list refreshable
	 */
	CXSuggestionList.prototype.addRefreshTrigger = function () {
		var self = this;

		if ( this.$container.find( '.cx-suggestionlist__refresh' ).length ) {
			return;
		}

		this.$container.append( $( '<div>' )
			.addClass( 'cx-suggestionlist__refresh' )
			.text( mw.msg( 'cx-suggestionlist-refresh' ) )
			.on( 'click', function () {
				// Hide all other lists, if any.
				$.each( self.lists, function ( index, list ) {
					if ( list.$list &&
						( list.type === listTypes.TYPE_FEATURED ||
							list.type === listTypes.TYPE_PERSONALIZED
						)
					) {
						self.refreshList( list.id );
					}
				} );
			} )
		);
	};

	/**
	 * @param {string} listId
	 */
	CXSuggestionList.prototype.refreshList = function ( listId ) {
		var i, suggestion, list = this.lists[ listId ];

		if ( !list ) {
			return;
		}

		if ( list.suggestions ) {
			for ( i = 0; i < list.suggestions.length; i++ ) {
				suggestion = list.suggestions[ i ];
				suggestion.$element.hide();
			}
		}
		list.suggestions = [];
		// Do not run out of suggestions
		list.seed = parseInt( Math.random() * 10000, 10 );
		list.queryContinue = undefined;
		list.hasMore = true;
		// FIXME: Till the new items arrive, this list will become empty.
		// May be we need to keep the height of container and show a loading
		// indicator?
		this.loadItems( list );
	};

	mw.cx.CXSuggestionList = CXSuggestionList;
}( jQuery, mediaWiki ) );
