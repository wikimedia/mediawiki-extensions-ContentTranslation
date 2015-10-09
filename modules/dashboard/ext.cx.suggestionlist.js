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

	/**
	 * CXSuggestionList
	 * @param {jQuery} $container The container for this suggestion list
	 * @param {Object} The stitempper instance
	 * @class
	 */
	function CXSuggestionList( $container, siteMapper ) {
		this.$container = $container;
		this.siteMapper = siteMapper;
		this.suggestions = [];
		this.$suggestionList = null;
		this.$sourceLanguageFilter = null;
		this.$targetLanguageFilter = null;
		this.$header = null;
		this.$confirmationDialog = null;
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
		this.$suggestionList = $( '<div>' ).addClass( 'cx-suggestionlist' );
		this.$container.append( this.$suggestionList );
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
			self = this;

		if ( this.promise ) {
			return this.promise;
		}
		promise = this.getSuggestionLists();
		promise.done( function ( suggestions ) {
			lists = suggestions.lists;
			if ( !lists || !Object.keys( lists ).length ) {
				self.$emptySuggestionList = self.buildEmptySuggestionList();
				self.$suggestionList.append( self.$emptySuggestionList );
				self.$emptySuggestionList.show();
			} else if ( self.$emptySuggestionList ) {
				self.$emptySuggestionList.hide();
			}
			self.lists = $.extend( self.lists, lists );
			for ( listId in lists ) {
				if ( lists.hasOwnProperty( listId ) ) {
					list = lists[ listId ];
					if ( list.name === 'cx-suggestionlist-featured' ) {
						self.suggestions = self.suggestions.concat( list.suggestions );
						// Show the suggestions items.
						self.listSuggestions( list.suggestions );
					}
					/* else {
						// We may want to show this list as collapsed
						// Example: Wiki Loves Monuments campaign collection with 20 articles
					} */
				}
			}
		} ).fail( function () {
			this.promise = null;
			self.$emptySuggestionList = self.buildEmptySuggestionList();
			self.$suggestionList.append( self.$emptySuggestionList );
			self.$emptySuggestionList.show();
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
			return $.Deferred().resolve( [] );
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
		this.$suggestionList.show();
		if ( !Object.keys( this.lists ).length ) {
			this.loadItems();
		}
	};

	CXSuggestionList.prototype.hide = function () {
		this.active = false;
		this.$suggestionList.hide();
	};

	/**
	 * Match the suggestion with the current filter.
	 * @param  {Object} suggestion
	 * @return {Boolean}
	 */
	CXSuggestionList.prototype.matchesFilter = function ( suggestion ) {
		var j, visible = true,
			filterProp, filterValue,
			keys = Object.keys( this.filters );

		for ( j = 0; j < keys.length; j++ ) {
			filterProp = keys[ j ];
			filterValue = this.filters[ filterProp ];

			if ( filterValue === null || filterValue === '' ) {
				continue;
			}
			visible = visible && suggestion[ filterProp ] === filterValue;
		}

		return visible;
	};

	CXSuggestionList.prototype.applyFilters = function () {
		var i, suggestion, visible;

		for ( i = 0; i < this.suggestions.length; i++ ) {
			suggestion = this.suggestions[ i ];

			visible = this.matchesFilter( suggestion );
			if ( visible ) {
				suggestion.$element.show();
			} else {
				suggestion.$element.hide();
			}
		}
		// Reset the ongoing request trackers
		this.hasMore = true;
		this.promise = null;
		if ( this.$emptySuggestionList ) {
			this.$emptySuggestionList.hide();
		}
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
	 */
	CXSuggestionList.prototype.listSuggestions = function ( suggestions ) {
		var i, suggestion, $suggestion,
			$suggestions = [];

		for ( i = 0; i < suggestions.length; i++ ) {
			suggestion = suggestions[ i ];
			$suggestion = this.buildSuggestionItem( suggestion );
			$suggestions.push( $suggestion );
		}
		this.$suggestionList.append( $suggestions );
		this.showTitleImageAndDesc( suggestions );
	};

	/**
	 * Build the DOM for suggestion item
	 *
	 * @return {jQuery}
	 */
	CXSuggestionList.prototype.buildSuggestionItem = function ( suggestion ) {
		var $image, $desc, $featured,
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

		$featured = $( [] );
		if ( this.lists[ suggestion.listId ].name === 'cx-suggestionlist-featured' ) {
			$featured = $( '<div>' )
				.addClass( 'cx-sltag cx-sltag--featured' )
				.text( mw.msg( this.lists[ suggestion.listId ].displayName ) );
		}
		$metaDataContainer = $( '<div>' )
			.addClass( 'cx-slitem__meta' )
			.append( $languageContainer, $featured );

		$titleLanguageBlock = $( '<div>' )
			.addClass( 'cx-slitem__details' )
			.append( $translationLink, $desc, $metaDataContainer );

		$suggestion.append(
			$image,
			$titleLanguageBlock
		);
		// Store reference to the DOM node
		suggestion.$element = $suggestion;
		suggestion.$desc = $desc;
		suggestion.$image = $image;
		if ( !this.matchesFilter( suggestion ) ) {
			suggestion.$element.hide();
		}
		return $suggestion;
	};

	CXSuggestionList.prototype.buildEmptySuggestionList = function () {
		var $img, $title, $desc;

		if ( this.$emptySuggestionList ) {
			return this.$emptySuggestionList;
		}
		$img = $( '<div>' )
			.addClass( 'cx-suggestionlist-empty__img' );
		$title = $( '<div>' )
			.addClass( 'cx-suggestionlist-empty__title' )
			.text( mw.msg( 'cx-suggestionlist-empty-title' ) );
		$desc = $( '<div>' )
			.addClass( 'cx-suggestionlist-empty__desc' )
			.text( mw.msg( 'cx-suggestionlist-empty-desc' ) );
		return $( '<div>' )
			.addClass( 'cx-suggestionlist-empty' )
			.append( $img, $title, $desc );
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
		if ( scrollTop + windowHeight + 100 > $( document ).height() ) {
			this.loadItems();
		}
	};

	mw.cx.CXSuggestionList = CXSuggestionList;
}( jQuery, mediaWiki ) );
