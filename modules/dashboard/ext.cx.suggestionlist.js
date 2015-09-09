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
		this.suggestions = null;
		this.$suggestionList = $( [] );
		this.$sourceLanguageFilter = null;
		this.$targetLanguageFilter = null;
		this.$header = null;
		this.$confirmationDialog = null;
		this.$overlay = null;
		this.suggestionFrom = null;
		this.suggestionTo = null;
		this.listen();
	}

	CXSuggestionList.prototype.init = function () {
		var lists, list, listId,
			storedTargetLanguage, storedSourceLanguage,
			self = this;

		// TODO: Refactor this to a method that abstracts the language calculation
		try {
			storedTargetLanguage = localStorage.getItem( 'cxTargetLanguage' );
			storedSourceLanguage = localStorage.getItem( 'cxSourceLanguage' );
		} catch ( e ) {
			// Local storage disabled?
		}
		this.suggestionFrom = storedSourceLanguage || 'en';
		this.suggestionTo = storedTargetLanguage || mw.config.get( 'wgContentLanguage' );

		this.getSuggestionLists( this.suggestionFrom, this.suggestionTo ).done( function ( response ) {
			self.suggestions = response.query.contenttranslationsuggestions;
			lists = self.suggestions.lists;
			for ( listId in lists ) {
				if ( lists.hasOwnProperty( listId ) ) {
					list = lists[ listId ];
					if ( list.name === 'cx-suggestionlist-featured' ) {
						// Show the suggestions items.
						self.listSuggestions( list.suggestions );
					}
					/* else {
						// We may want to show this list as collapsed
						// Example: Wiki Loves Monuments campaign collection with 20 articles
					} */
				}
			}
		} );
	};

	/**
	 * Get all the translation suggestion lists of given user.
	 *
	 * @return {jQuery.Promise}
	 */
	CXSuggestionList.prototype.getSuggestionLists = function ( from, to ) {
		var api = new mw.Api();

		return api.get( {
			action: 'query',
			list: 'contenttranslationsuggestions',
			from: from,
			to: to
		} );
	};

	/**
	 * Get the thumbnail image and description of the given title.
	 *
	 * @param {string} language The language of the title.
	 * @param {string} title Title
	 * @return {jQuery.Promise}
	 */
	CXSuggestionList.prototype.getPageDetails = function ( language, title ) {
		return this.siteMapper.getApi( language ).get( {
			action: 'query',
			titles: title,
			prop: [ 'pageimages', 'pageterms' ].join( '|' ),
			piprop: 'thumbnail',
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
	CXSuggestionList.prototype.showTitleImageAndDesc = function ( suggestion ) {
		this.getPageDetails( suggestion.sourceLanguage, suggestion.title )
			.done( function ( response ) {
				var pageId, page, imgSrc;

				pageId = Object.keys( response.query.pages )[ 0 ];
				page = response.query.pages[ pageId ];
				if ( page.thumbnail ) {
					imgSrc = page.thumbnail.source;
					suggestion.$element.find( '.image' ).attr( 'src', imgSrc );
				}
				if ( page.terms && page.terms.description ) {
					suggestion.$element.find( '.cx-slitem__desc' ).text( page.terms.description );
				}
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
			suggestion.id = 'suggestion' + i;
			$suggestion = this.buildSuggestionItem( suggestion );
			$suggestions.push( $suggestion );
		}

		if ( $suggestions.length ) {
			this.$suggestionList = $( '<div>' )
				.addClass( 'cx-suggestionlist' )
				.append( $suggestions );
		} else {
			// Show empty suggestion list
			this.$suggestionList = this.buildEmptySuggestionList();
		}
		this.$container.append( this.$suggestionList.hide() );
	};

	/**
	 * Build the DOM for suggestion item
	 *
	 * @return {jQuery}
	 */
	CXSuggestionList.prototype.buildSuggestionItem = function ( suggestion ) {
		var $imageBlock, $image, $desc, $featured,
			sourceDir, targetDir, $targetLanguage,
			$translationLink, $suggestion, $metaDataContainer,
			$sourceLanguage, $languageContainer,
			$titleLanguageBlock;

		$suggestion = $( '<div>' )
			.addClass( 'cx-slitem' )
			.attr( 'id', suggestion.id );
		$imageBlock = $( '<div>' )
			.addClass( 'cx-slitem__image' );
		$image = $( '<img>' )
			.addClass( 'image' );
		$imageBlock.append( $image );
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
			.addClass( 'cx-slitem__languages__language cx-slitem__languages__language--source' )
			.text( $.uls.data.getAutonym( suggestion.sourceLanguage ) );

		$targetLanguage = $( '<div>' )
			.prop( {
				lang: suggestion.targetlanguage,
				dir: sourceDir
			} )
			.addClass( 'cx-slitem__languages__language cx-slitem__languages__language--target' )
			.text( $.uls.data.getAutonym( suggestion.targetLanguage ) );

		$languageContainer = $( '<div>' )
			.addClass( 'cx-slitem__languages' )
			.append( $sourceLanguage, $targetLanguage );

		$desc = $( '<div>' ).addClass( 'cx-slitem__desc' );

		$featured = $( [] );
		if ( this.suggestions.lists[ suggestion.listId ].name === 'cx-suggestionlist-featured' ) {
			$featured = $( '<div>' )
				.addClass( 'cx-sltag cx-sltag--featured' )
				.text( mw.msg( this.suggestions.lists[ suggestion.listId ].displayName ) );
		}
		$metaDataContainer = $( '<div>' )
			.addClass( 'cx-slitem__meta' )
			.append( $languageContainer, $featured );

		$titleLanguageBlock = $( '<div>' )
			.addClass( 'cx-slitem__details' )
			.append( $translationLink, $desc, $metaDataContainer );

		$suggestion.append(
			$imageBlock,
			$titleLanguageBlock
		);
		// Store reference to the DOM node
		suggestion.$element = $suggestion;
		this.showTitleImageAndDesc( suggestion );
		return $suggestion;
	};

	CXSuggestionList.prototype.applyFilters = function ( filters ) {
		var lists, i, j, keys, visible, filterProp, filterValue, suggestion, list, listId;

		lists = this.suggestions.lists;
		for ( listId in lists ) {
			if ( lists.hasOwnProperty( listId ) ) {
				list = lists[ listId ];
				for ( i = 0; i < list.suggestions.length; i++ ) {
					suggestion = list.suggestions[ i ];
					visible = true;
					for ( j = 0; j < keys.length; j++ ) {
						filterProp = keys[ j ];
						filterValue = filters[ filterProp ];

						if ( filterValue === null || filterValue === '' ) {
							continue;
						}

						visible = visible && suggestion[ filterProp ] === filterValue;
					}

					if ( visible ) {
						suggestion.$element.show();
					} else {
						suggestion.$element.hide();
					}
				}
			}
		}
	};

	CXSuggestionList.prototype.buildEmptySuggestionList = function () {
		var $img, $title, $desc;

		$img = $( '<div>' )
			.addClass( 'cx-suggestionlist-empty__img' );
		$title = $( '<div>' )
			.addClass( 'cx-suggestionlist-empty__title' )
			.text( mw.msg( 'cx-suggestionlist-empty-title' ) );
		$desc = $( '<div>' )
			.addClass( 'cx-suggestionlist-empty__desc' )
			.text( mw.msg( 'cx-suggestionlist-empty-desc' ) );
		return $( '<div>' )
			.addClass( 'cx-suggestionlist cx-suggestionlist-empty' )
			.append( $img, $title, $desc );
	};

	/**
	 * Event handlers
	 */
	CXSuggestionList.prototype.listen = function () {
		this.$container.on( 'click', '.cx-suggestionlist .cx-slitem__translation-link', function () {
			var cxSelector, suggestion;

			cxSelector = $( this ).data( 'cxsourceselector' );
			if ( cxSelector ) {
				cxSelector.prefill();
			} else {
				suggestion = $( this ).data( 'suggestion' );
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
		var scrollTop = $( window ).scrollTop(),
			offsetTop = this.$container.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$container.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$container.removeClass( 'sticky' );
		}
	};

	mw.cx.CXSuggestionList = CXSuggestionList;
}( jQuery, mediaWiki ) );
