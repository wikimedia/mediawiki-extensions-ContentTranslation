/*!
 * ContentTranslation extension - Translation suggestions listing in dashboard.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
'use strict';

/**
 * @class
 * @constructor
 * @extends {mw.cx.DashboardList}
 *
 * @param {jQuery} $container The container for this suggestion list
 * @param {mw.cx.SiteMapper} siteMapper
 */
mw.cx.CXSuggestionList = function CXSuggestionList() {
	this.suggestions = [];
	this.lists = {};

	this.$personalCollection = null;
	this.$publicCollection = null;
	this.$publicCollectionContainer = null;
	this.refreshTrigger = null;
	this.seed = null;
	this.selectedSourcePage = null;
	this.suggestionDialog = null;

	// Parent constructor
	mw.cx.CXSuggestionList.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( mw.cx.CXSuggestionList, mw.cx.DashboardList );

/* Static properties */

// Name of the empty list, used to show when there is no suggestions
mw.cx.CXSuggestionList.static.emptyListName = 'cx-suggestionlist-empty';
mw.cx.CXSuggestionList.static.listTypes = {
	TYPE_DEFAULT: 0,
	TYPE_FEATURED: 1,
	TYPE_DISCARDED: 2,
	TYPE_FAVORITE: 3,
	TYPE_CATEGORY: 4,
	TYPE_PERSONALIZED: 5
};
mw.cx.CXSuggestionList.static.listOrder = {};
mw.cx.CXSuggestionList.static.listOrder[ mw.cx.CXSuggestionList.static.listTypes.TYPE_FAVORITE ] = 0;
mw.cx.CXSuggestionList.static.listOrder[ mw.cx.CXSuggestionList.static.listTypes.TYPE_DISCARDED ] = 1;
mw.cx.CXSuggestionList.static.listOrder[ mw.cx.CXSuggestionList.static.listTypes.TYPE_CATEGORY ] = 2;
mw.cx.CXSuggestionList.static.listOrder[ mw.cx.CXSuggestionList.static.listTypes.TYPE_PERSONALIZED ] = 3;
mw.cx.CXSuggestionList.static.listOrder[ mw.cx.CXSuggestionList.static.listTypes.TYPE_FEATURED ] = 4;
mw.cx.CXSuggestionList.static.listOrder[ mw.cx.CXSuggestionList.static.listTypes.TYPE_DEFAULT ] = 5;

/* Static methods */

mw.cx.CXSuggestionList.static.friendlyListTypeName = function ( type ) {
	switch ( type ) {
		case this.listTypes.TYPE_DEFAULT:
			return 'default';
		case this.listTypes.TYPE_FEATURED:
			return 'featured';
		case this.listTypes.TYPE_DISCARDED:
			return 'discarded';
		case this.listTypes.TYPE_FAVORITE:
			return 'favorite';
		case this.listTypes.TYPE_CATEGORY:
			return 'category';
		case this.listTypes.TYPE_PERSONALIZED:
			return 'personalized';
		default:
			return 'unknown';
	}
};

mw.cx.CXSuggestionList.static.listCompare = function ( listA, listB ) {
	if ( this.listOrder[ listA.type ] > this.listOrder[ listB.type ] ) {
		return 1;
	}

	return -1;
};

/* Methods */

mw.cx.CXSuggestionList.prototype.init = function () {
	// Parent method
	mw.cx.CXSuggestionList.parent.prototype.init.call( this, {
		updateLocalStorage: true
	} );

	this.seed = Math.floor( Math.random() * 10000 );

	this.$personalCollection = $( '<div>' ).addClass( 'cx-suggestionlist__personal' );
	this.$headerContainer = $( '<div>' )
		.addClass( 'cx-suggestionlist__header' )
		.append( $( '<span>' )
			.text( mw.msg( 'cx-suggestionlist-title' ) )
			.addClass( 'cx-suggestionlist__public-title' ),
		this.languageFilter.$element );

	this.$publicCollectionContainer = $( '<div>' )
		.addClass( 'cx-suggestionlist__public' )
		.append( this.$headerContainer, this.$loadingIndicatorSpinner );
	this.$publicCollection = $( '<div>' )
		.addClass( 'cx-suggestionlist__public-items' );
	this.$publicCollectionContainer.append( this.$publicCollection );

	this.$listContainer
		.addClass( 'cx-suggestionlist-container' )
		.append( this.$personalCollection, this.$publicCollectionContainer );
};

/**
 * @param {Object} [list]
 * @return {jQuery.Promise}
 */
mw.cx.CXSuggestionList.prototype.loadItems = function ( list ) {
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

	this.$loadingIndicatorSpinner.show();
	this.pendingRequests++;

	return promise.then( function ( suggestions ) {
		var i, list, listId, listIds;

		lists = suggestions.lists;

		// Hide empty list, if any
		if (
			self.lists[ self.constructor.static.emptyListName ] &&
			self.lists[ self.constructor.static.emptyListName ].$list
		) {
			self.lists[ self.constructor.static.emptyListName ].$list.hide();
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

		return isEmpty;
	} ).always( function () {
		self.pendingRequests--;

		if ( self.pendingRequests === 0 ) {
			self.$loadingIndicatorSpinner.hide();
		}
	} );
};

/**
 * @return {jQuery.Promise}
 */
mw.cx.CXSuggestionList.prototype.loadAllSuggestions = function () {
	var self = this;

	return $.when(
		this.loadItems(),
		this.loadItems( {
			id: 'trex'
		} )
	).then( function ( empty1, empty2 ) {
		if ( empty1 && empty2 ) {
			// If both are empty Show empty list information.
			self.showEmptySuggestionList();
		}
	}, function ( error ) {
		if ( error === 'assertuserfailed' ) {
			self.constructor.static.showLoginDialog();
		}

		// On fail, show empty list
		self.showEmptySuggestionList();
	} );
};

/**
 * Get all the translation suggestion lists of given user.
 *
 * @return {jQuery.Promise}
 */
mw.cx.CXSuggestionList.prototype.getSuggestionLists = function () {
	var params,
		api = new mw.Api();

	params = {
		assert: 'user',
		action: 'query',
		list: 'contenttranslationsuggestions',
		from: this.languageFilter.getSourceLanguage(),
		to: this.languageFilter.getTargetLanguage(),
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
mw.cx.CXSuggestionList.prototype.loadSuggestionsForList = function ( list ) {
	var params,
		api = new mw.Api();

	if ( list.id === 'trex' ) {
		this.recommendtool = this.recommendtool || new mw.cx.Recommendtool(
			this.languageFilter.getSourceLanguage(),
			this.languageFilter.getTargetLanguage()
		);
		return this.recommendtool.getSuggestionList();
	}

	if ( list.hasMore === false ) {
		// This method is supposed to be called only if we there are items to fetch
		return $.Deferred().reject();
	}

	if ( !list.queryContinue ) {
		// Along with list information, we had fetch 4 suggestions as well.
		list.queryContinue = {
			offset: 4
		};
	}
	params = $.extend( {
		assert: 'user',
		action: 'query',
		list: 'contenttranslationsuggestions',
		listid: list.id,
		from: this.languageFilter.getSourceLanguage(),
		to: this.languageFilter.getTargetLanguage(),
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

mw.cx.CXSuggestionList.prototype.show = function () {
	// Parent method
	mw.cx.CXSuggestionList.parent.prototype.show.apply( this, arguments );

	if ( !Object.keys( this.lists ).length ) {
		this.loadAllSuggestions();
	}
};

mw.cx.CXSuggestionList.prototype.applyFilters = function () {
	var i, suggestion, listName, list;

	// Hide all lists
	for ( listName in this.lists ) {
		list = this.lists[ listName ];

		// List of favorite articles (a.k.a. "For later" list) should always be shown
		if ( list.type === this.constructor.static.listTypes.TYPE_FAVORITE ) {
			continue;
		}

		if ( list.$list ) {
			list.$list.hide();
		}

		if ( list.suggestions ) {
			for ( i = 0; i < list.suggestions.length; i++ ) {
				suggestion = list.suggestions[ i ];
				suggestion.$element.remove();
			}
		}

		delete this.lists[ listName ];
	}

	this.recommendtool = null;
	this.$publicCollection.empty().show();

	// Load suggested articles for new set of source and target languages.
	// This will bypass loading featured articles as suggestions for a new language pair,
	// because those are shipped alongside favorite articles, which we
	// show no matter which language pair is selected, meaning we don't
	// want to re-download favorite list on every language pair change. See T194476
	// TODO: Refactor suggestion list view and API and resolve this problem.
	this.loadItems( { id: 'trex' } );
};

/**
 * @inheritdoc
 */
mw.cx.CXSuggestionList.prototype.getPageProps = function () {
	return [ 'pageimages', 'description' ];
};

/**
 * List all suggestions.
 *
 * @param {string} listId
 * @param {Object[]} suggestions
 */
mw.cx.CXSuggestionList.prototype.insertSuggestionList = function ( listId, suggestions ) {
	var i, list, $suggestion, $listHeading,
		self = this,
		$suggestions = [];

	if ( !suggestions || !suggestions.length ) {
		return;
	}

	list = this.lists[ listId ];
	// Create the list container if not present already.
	if ( !list.$list ) {
		list.$list = $( '<div>' )
			.attr( 'data-listid', listId )
			// The following classes are used here:
			// * cx-suggestionlist-type-0
			// * cx-suggestionlist-type-1
			// * cx-suggestionlist-type-2
			// * cx-suggestionlist-type-3
			// * cx-suggestionlist-type-4
			// * cx-suggestionlist-type-5
			.addClass( 'cx-suggestionlist cx-suggestionlist-type-' + list.type );

		if ( list.type === this.constructor.static.listTypes.TYPE_FAVORITE ) {
			// No need to show heading for misc fallback suggestions shown at the end.
			$listHeading = $( '<div>' )
				.addClass( 'cx-suggestionlist__header' )
				.append( $( '<span>' )
					.text( mw.msg( 'cx-suggestionlist-favorite' ) )
				);
			list.$list.append( $listHeading );
		}
		if ( list.type === this.constructor.static.listTypes.TYPE_FAVORITE ) {
			this.$personalCollection.append( list.$list );
		} else {
			this.$publicCollectionContainer.show();
			this.$publicCollection.append( list.$list );
			this.$publicCollection.find( '.cx-suggestionlist' ).sort( function ( a, b ) {
				return self.constructor.static.listCompare(
					self.lists[ $( a ).data( 'listid' ) ],
					self.lists[ $( b ).data( 'listid' ) ]
				);
			} ).appendTo( this.$publicCollection );
		}
	} else {
		// The list might be hidden if it became empty due to item removals.
		list.$list.show();
	}

	for ( i = 0; i < suggestions.length; i++ ) {
		suggestions[ i ].rank = i;
		suggestions[ i ].type = list.type;
		suggestions[ i ].typeExtra = list.algorithm || '';
		$suggestion = this.buildSuggestionItem( suggestions[ i ] );
		$suggestions.push( $suggestion );
		mw.hook( 'mw.cx.suggestion.action' ).fire( 'shown', suggestions[ i ].rank,
			this.constructor.static.friendlyListTypeName( suggestions[ i ].type ), suggestions[ i ].typeExtra,
			suggestions[ i ].sourceLanguage, suggestions[ i ].targetLanguage, suggestions[ i ].title );
	}
	this.showTitleDetails( suggestions );

	// Insert after last suggestion, but before any buttons etc.
	if ( list.$list.find( '.cx-slitem' ).length ) {
		list.$list.find( '.cx-slitem' ).last().after( $suggestions );
	} else {
		list.$list.append( $suggestions );
	}

	if ( list.type === this.constructor.static.listTypes.TYPE_CATEGORY ) {
		this.makeExpandableList( listId );
	} else if (
		list.type === this.constructor.static.listTypes.TYPE_FEATURED ||
		list.type === this.constructor.static.listTypes.TYPE_PERSONALIZED
	) {
		this.addRefreshTrigger();
	}
};

/**
 * Build the DOM for suggestion item
 *
 * @param {Object} suggestion
 * @return {jQuery}
 */
mw.cx.CXSuggestionList.prototype.buildSuggestionItem = function ( suggestion ) {
	var $image, $desc, $featured, $actions, discardAction, favoriteAction,
		sourceDir, targetDir, $targetLanguage,
		$translationLink, $suggestion, $metaDataContainer,
		$sourceLanguage, $languageContainer,
		$titleLanguageBlock;

	$suggestion = $( '<div>' )
		.addClass( 'cx-slitem' )
		.attr( 'id', suggestion.id );
	$image = $( '<div>' )
		.addClass( 'cx-slitem__image oo-ui-icon-article' );

	sourceDir = $.uls.data.getDir( suggestion.sourceLanguage );
	targetDir = $.uls.data.getDir( suggestion.targetLanguage );

	$featured = $( [] );
	if ( this.lists[ suggestion.listId ].type === this.constructor.static.listTypes.TYPE_FEATURED ) {
		$featured = $( '<span>' )
			.addClass( 'cx-sltag cx-sltag--featured' )
			.text( this.lists[ suggestion.listId ].displayName );
	}

	$translationLink = $( '<div>' )
		.addClass( 'cx-slitem__translation-link' )
		.attr( 'data-suggestion', JSON.stringify( suggestion ) )
		// It must be a separate element to ensure
		// separation from the target title
		.append(
			$( '<span>' )
				.text( suggestion.title )
				.addClass( 'source-title' )
				.prop( {
					lang: suggestion.sourceLanguage,
					dir: sourceDir
				} ),
			$featured
		);

	$sourceLanguage = $( '<a>' )
		.prop( {
			lang: suggestion.sourcelanguage,
			dir: sourceDir,
			href: this.siteMapper.getPageUrl( suggestion.sourceLanguage, suggestion.title ),
			target: '_blank',
			title: mw.msg( 'cx-suggestionlist-view-source-page' )
		} )
		.on( 'click', function ( e ) {
			// Do not propagate to the parent suggestion item. Prevent opening selected source page dialog
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
		// We need to set ellipsis for pseudo element through data attribute
		// as there is no way to add localized message to LESS or manipulate
		// pseudo elements directly with JS
		.attr( 'data-ellipsis', mw.msg( 'ellipsis' ) )
		.addClass( 'cx-slitem__desc' )
		.hide();

	discardAction = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'close',
		classes: [ 'cx-slitem__action--discard' ]
	} );
	discardAction.once( 'click', this.discardSuggestion.bind( this, suggestion ) );

	if ( this.lists[ suggestion.listId ].type === this.constructor.static.listTypes.TYPE_FAVORITE ) {
		discardAction.$element.hide();

		favoriteAction = new OO.ui.ButtonWidget( {
			framed: false,
			flags: [ 'progressive' ],
			classes: [ 'cx-slitem__action--nonfavorite' ],
			icon: 'bookmark'
		} );

		favoriteAction.once( 'click', this.unmarkFavorite.bind( this, suggestion ) );
		favoriteAction.$element.on( 'mouseenter', this.setOutlineIcon.bind( favoriteAction ) );
		favoriteAction.$element.on( 'mouseleave', this.setFilledIcon.bind( favoriteAction ) );
	} else {
		favoriteAction = new OO.ui.ButtonWidget( {
			framed: false,
			classes: [ 'cx-slitem__action--favorite' ],
			icon: 'bookmarkOutline'
		} );

		favoriteAction.once( 'click', this.markFavorite.bind( this, suggestion ) );
		favoriteAction.$element.on( 'mouseenter', this.setFilledIcon.bind( favoriteAction ) );
		favoriteAction.$element.on( 'mouseleave', this.setOutlineIcon.bind( favoriteAction ) );
	}

	$metaDataContainer = $( '<div>' )
		.addClass( 'cx-slitem__meta' )
		.append( $languageContainer );

	$titleLanguageBlock = $( '<div>' )
		.addClass( 'cx-slitem__details' )
		.append( $translationLink, $desc, $metaDataContainer );
	$actions = $( '<div>' )
		.addClass( 'cx-slitem__actions' )
		.append( favoriteAction.$element, discardAction.$element );
	$suggestion.append(
		$image,
		$titleLanguageBlock,
		$actions
	);

	// Store reference to the DOM node
	suggestion.$element = $suggestion;
	suggestion.$desc = $desc;
	suggestion.$image = $image;
	suggestion.$discardAction = discardAction.$element;

	return $suggestion;
};

/**
 * Change "favorite" button icon to bookmark outline
 */
mw.cx.CXSuggestionList.prototype.setOutlineIcon = function () {
	this.clearFlags();
	this.setIcon( 'bookmarkOutline' );
};

/**
 * Change "favorite" button icon to filled bookmark
 */
mw.cx.CXSuggestionList.prototype.setFilledIcon = function () {
	this.setFlags( 'progressive' );
	this.setIcon( 'bookmark' );
};

/**
 * Discard a suggestion.
 *
 * @param  {Object} suggestion
 * @return {boolean}
 */
mw.cx.CXSuggestionList.prototype.discardSuggestion = function ( suggestion ) {
	var params,
		api = new mw.Api();

	params = {
		assert: 'user',
		action: 'cxsuggestionlist',
		listname: 'cx-suggestionlist-discarded',
		listaction: 'add',
		titles: suggestion.title,
		from: suggestion.sourceLanguage,
		to: suggestion.targetLanguage
	};
	api.postWithToken( 'csrf', params ).done( function ( response ) {
		if ( response.cxsuggestionlist.result === 'success' ) {
			mw.hook( 'mw.cx.suggestion.action' ).fire( 'discard', suggestion.rank,
				mw.cx.CXSuggestionList.static.friendlyListTypeName( suggestion.type ), suggestion.typeExtra,
				suggestion.sourceLanguage, suggestion.targetLanguage, suggestion.title
			);
			// FIXME: Use CSS transition
			// eslint-disable-next-line no-jquery/no-slide
			suggestion.$element.slideUp( 'slow', function () {
				$( this ).remove();
			} );
		}
	} ).fail( this.suggestionListFailHandler );
	// Avoid event propagation.
	return false;
};

/**
 * Mark a suggestion as favorite.
 *
 * @param  {Object} suggestion
 * @return {boolean}
 */
mw.cx.CXSuggestionList.prototype.markFavorite = function ( suggestion ) {
	var params, api = new mw.Api(),
		self = this;

	params = {
		assert: 'user',
		action: 'cxsuggestionlist',
		listname: 'cx-suggestionlist-favorite',
		listaction: 'add',
		titles: suggestion.title,
		from: suggestion.sourceLanguage,
		to: suggestion.targetLanguage
	};
	api.postWithToken( 'csrf', params ).done( function ( response ) {
		var favoriteListId;
		if ( response.cxsuggestionlist.result === 'success' ) {
			mw.hook( 'mw.cx.suggestion.action' ).fire( 'favorite', suggestion.rank,
				self.constructor.static.friendlyListTypeName( suggestion.type ),
				suggestion.typeExtra, suggestion.sourceLanguage,
				suggestion.targetLanguage, suggestion.title
			);
			suggestion.$element.addClass( 'cx-slideup-hide' );
			suggestion.$element.one( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
				function () {
					$( this ).remove();
				}
			);

			favoriteListId = self.getListId( 'cx-suggestionlist-favorite' );
			suggestion.listId = favoriteListId;
			if ( favoriteListId === null ) {
				// We need to construct a dummy list for now to help the UI rendering.
				favoriteListId = 'cx-suggestionlist-favorite';
				self.lists[ favoriteListId ] = {
					displayName: mw.msg( 'cx-suggestionlist-favorite' ),
					name: favoriteListId,
					suggestions: [],
					type: self.constructor.static.listTypes.TYPE_FAVORITE
				};
			}
			suggestion.listId = favoriteListId;
			self.lists[ favoriteListId ].suggestions.push( suggestion );
			self.insertSuggestionList( favoriteListId, [ suggestion ], true );
			// Remove favorited article from the list of suggestions
			self.lists.trex.suggestions = self.lists.trex.suggestions.filter( function ( item ) {
				return item.title !== suggestion.title;
			} );
		}
	} ).fail( this.suggestionListFailHandler );
	// Avoid event propagation.
	return false;
};

/**
 * Unmark a suggestion as favorite.
 *
 * @param  {Object} suggestion
 * @return {boolean}
 */
mw.cx.CXSuggestionList.prototype.unmarkFavorite = function ( suggestion ) {
	var params, self = this,
		api = new mw.Api();

	params = {
		assert: 'user',
		action: 'cxsuggestionlist',
		listname: 'cx-suggestionlist-favorite',
		listaction: 'remove',
		titles: suggestion.title,
		from: suggestion.sourceLanguage,
		to: suggestion.targetLanguage
	};
	api.postWithToken( 'csrf', params ).done( function ( response ) {
		if ( response.cxsuggestionlist.result === 'success' ) {
			suggestion.$element.addClass( 'cx-slidedown-hide' );
			suggestion.$element.one( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd',
				function () {
					var favoriteListId;
					$( this ).remove();
					favoriteListId = self.getListId( 'cx-suggestionlist-favorite' );
					if ( !self.lists[ favoriteListId ].$list.find( '.cx-slitem' ).length ) {
						self.lists[ favoriteListId ].$list.hide();
					}
				}
			);
			// Do we need to add to general suggestions?
		}
	} ).fail( this.suggestionListFailHandler );
	// Avoid event propagation.
	return false;
};

/**
 * Failure handler for API calls which are using action: 'cxsuggestionlist'
 *
 * @param {string} error
 */
mw.cx.CXSuggestionList.prototype.suggestionListFailHandler = function ( error ) {
	if ( error === 'assertuserfailed' ) {
		mw.cx.CXTranslationList.static.showLoginDialog();
	}
	// TODO: How do we handle other types of failure?
};

mw.cx.CXSuggestionList.prototype.showEmptySuggestionList = function () {
	var $img, $title, $desc,
		listId = this.constructor.static.emptyListName;

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
				.prop( 'href', 'https://recommend.wmflabs.org' )
			)
		);

		this.$publicCollection.empty().show();
		if ( this.refreshTrigger ) {
			this.refreshTrigger.toggle( false );
		}
		this.$publicCollectionContainer.append( this.lists[ listId ].$list );
	}

	this.lists[ listId ].$list.show();
};

/**
 * Get the list identifier by its name.
 *
 * @param  {string} listName List name.
 * @return {string|null} list identifier.
 */
mw.cx.CXSuggestionList.prototype.getListId = function ( listName ) {
	var listId, list;

	for ( listId in this.lists ) {
		list = this.lists[ listId ];

		if ( listName === list.name ) {
			return listId;
		}
	}

	return null;
};

/**
 * Event handlers
 */
mw.cx.CXSuggestionList.prototype.listen = function () {
	var self = this;

	// Parent method
	mw.cx.CXSuggestionList.parent.prototype.listen.apply( this, arguments );

	this.$listContainer.on( 'click', '.cx-suggestionlist .cx-slitem', function () {
		var $this = $( this ),
			suggestion = $this.find( '.cx-slitem__translation-link' ).data( 'suggestion' ),
			imageUrl = $this
				.find( '.cx-slitem__image:not(.oo-ui-icon-article)' )
				.css( 'background-image' );
		self.showSuggestionDialog( suggestion, imageUrl );

		mw.hook( 'mw.cx.suggestion.action' ).fire( 'accept', suggestion.rank,
			self.constructor.static.friendlyListTypeName( suggestion.type ),
			suggestion.typeExtra, suggestion.sourceLanguage,
			suggestion.targetLanguage, suggestion.title
		);
	} );
};

/**
 * Show dialog for selected suggestion
 *
 * @param {Object} suggestion Selected suggestion, for which dialog is shown
 * @param {string|null} imageUrl URL of suggestion page image
 */
mw.cx.CXSuggestionList.prototype.showSuggestionDialog = function ( suggestion, imageUrl ) {
	if ( imageUrl ) {
		imageUrl = imageUrl.slice( 5, -2 );
	}

	this.selectedSourcePage = new mw.cx.SelectedSourcePage( this.siteMapper, {
		onDiscard: this.discardSuggestionDialog.bind( this )
	} );

	this.selectedSourcePage.setData(
		suggestion.title,
		this.siteMapper.getPageUrl( suggestion.sourceLanguage, suggestion.title ),
		{
			imageUrl: imageUrl,
			imageIcon: 'article',
			sourceLanguage: suggestion.sourceLanguage,
			targetLanguage: suggestion.targetLanguage,
			params: { prop: [ 'langlinks', 'pageviews', 'langlinkscount' ] }
		}
	);

	if ( !this.suggestionDialog ) {
		this.suggestionDialog = new mw.cx.SelectedSourcePageDialog();
		OO.ui.getWindowManager().addWindows( [ this.suggestionDialog ] );
	}
	OO.ui.getWindowManager().openWindow( this.suggestionDialog, { selectedSourcePage: this.selectedSourcePage } );
};

/**
 * Closes suggestion dialog
 */
mw.cx.CXSuggestionList.prototype.discardSuggestionDialog = function () {
	OO.ui.getWindowManager().closeWindow( this.suggestionDialog );
};

/**
 * Scroll handler for the suggestions
 */
mw.cx.CXSuggestionList.prototype.onScroll = function () {
	var expandedListId, $expandedList, triggerPos,
		scrollTop, windowHeight, visibleArea, $loadTrigger;

	scrollTop = window.pageYOffset;
	windowHeight = document.documentElement.clientHeight;
	visibleArea = windowHeight + scrollTop;

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
		this.loadItems( this.lists[ expandedListId ] ).fail( function ( error ) {
			if ( error === 'assertuserfailed' ) {
				$( window ).off( 'scroll' );
				mw.cx.CXSuggestionList.static.showLoginDialog();
			}
		} );
	}
};

/**
 * Sort the lists in their logical order to display.
 *
 * @param  {Object[]} lists
 * @return {number[]} Ordered list ids.
 */
mw.cx.CXSuggestionList.prototype.sortLists = function ( lists ) {
	function compareKeys( a, b ) {
		return mw.cx.CXSuggestionList.static.listCompare( lists[ a ], lists[ b ] );
	}

	return Object.keys( lists ).sort( compareKeys );
};

/**
 * Make the list expandable and collapsible.
 *
 * @param {string} listId
 */
mw.cx.CXSuggestionList.prototype.makeExpandableList = function ( listId ) {
	var list = this.lists[ listId ];

	if ( list.$list.is( '.cx-suggestionlist--collapsed' ) ||
		list.$list.is( '.cx-suggestionlist--expanded' )
	) {
		return;
	}

	list.$list.find( 'h2' ).on( 'click', this.expandOrCollapse.bind( this, list.id ) );
	if ( list.suggestions.length > 2 ) {
		list.$list.append( $( '<div>' )
			.addClass( 'cx-suggestionlist__expand' )
			.text( mw.msg( 'cx-suggestionlist-expand' ) )
			.on( 'click', this.expandOrCollapse.bind( this, list.id ) )
		);
	}
	// By default, the list is collapsed.
	list.$list.addClass( 'cx-suggestionlist--collapsed' );
};

/**
 * Expand of collapse the list with the given listId.
 *
 * @param {string} listId List identifier.
 */
mw.cx.CXSuggestionList.prototype.expandOrCollapse = function ( listId ) {
	var $trigger,
		list = this.lists[ listId ];

	$trigger = list.$list.find( '.cx-suggestionlist__expand, .cx-suggestionlist__collapse' );

	if ( list.$list.is( '.cx-suggestionlist--collapsed' ) ) {
		// Collapse all expended lists.
		this.$listContainer.find( '.cx-suggestionlist__collapse' ).trigger( 'click' );
		$trigger.text( mw.msg( 'cx-suggestionlist-collapse' ) );
	} else {
		$trigger.text( mw.msg( 'cx-suggestionlist-expand' ) );
	}

	// eslint-disable-next-line no-jquery/no-class-state
	$trigger.toggleClass( 'cx-suggestionlist__collapse cx-suggestionlist__expand' );
	// eslint-disable-next-line no-jquery/no-class-state
	list.$list.toggleClass( 'cx-suggestionlist--collapsed cx-suggestionlist--expanded' );
};

/**
 * Make the list refreshable
 */
mw.cx.CXSuggestionList.prototype.addRefreshTrigger = function () {
	if ( this.refreshTrigger ) {
		this.refreshTrigger.toggle( true );
		return;
	}

	this.refreshTrigger = new OO.ui.ButtonWidget( {
		framed: false,
		classes: [ 'cx-suggestionlist__refresh' ],
		label: mw.msg( 'cx-suggestionlist-refresh' ),
		icon: 'reload',
		flags: 'progressive'
	} ).connect( this, { click: 'refreshPublicLists' } );

	this.$publicCollectionContainer.append( this.refreshTrigger.$element );
};

mw.cx.CXSuggestionList.prototype.refreshPublicLists = function () {
	var listId, list,
		categoryListCount = 2;

	// Scroll the page up to the beginning of $publicCollection
	$( 'html, body' ).animate( {
		// 200 px subtracted to deal with the sticky header.
		// It need not be 100% accurate. The idea is to scroll up
		// so that the beginning of public collection is visible.
		scrollTop: this.$publicCollectionContainer.offset().top - 200
	}, 'slow' );

	for ( listId in this.lists ) {
		list = this.lists[ listId ];

		if ( !list.$list ) {
			continue;
		}

		if (
			list.type === this.constructor.static.listTypes.TYPE_FEATURED ||
			list.type === this.constructor.static.listTypes.TYPE_PERSONALIZED
		) {
			this.refreshList( list.id );
		} else if (
			list.type === this.constructor.static.listTypes.TYPE_CATEGORY &&
			categoryListCount
		) {
			// The first two lists shown will be removed.
			list.$list.remove();
			delete this.lists[ listId ];
			categoryListCount--;
		}
	}
};

/**
 * @param {string} listId
 */
mw.cx.CXSuggestionList.prototype.refreshList = function ( listId ) {
	var i, itemsToRemove = [],
		list = this.lists[ listId ];

	if ( !list ) {
		return;
	}
	if ( list.suggestions ) {
		itemsToRemove = list.suggestions;
	}
	list.suggestions = [];
	// Do not run out of suggestions
	list.seed = Math.floor( Math.random() * 10000 );
	list.queryContinue = undefined;
	list.hasMore = true;
	// Remove the old items.
	this.loadItems( list ).then( function () {
		for ( i = 0; i < itemsToRemove.length; i++ ) {
			itemsToRemove[ i ].$element.remove();
		}
	}, function ( error ) {
		if ( error === 'assertuserfailed' ) {
			mw.cx.CXSuggestionList.static.showLoginDialog();
		}
	} );
};
