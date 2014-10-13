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
	 * Handles the jump between category counter and listing
	 *
	 * @param {Event} e the click event
	 * @return {boolean} false
	 */
	function jump( e ) {
		var id, url = location.href;
		id = e.data.id;
		location.href = '#' + id;
		history.replaceState( null, null, url );

		return false;
	}

	/**
	 * CXCategoryCounter Class
	 * @class
	 * @param {string} language the language for the counter
	 * @param {CXCategoryTool} categoryTool the CXCategoryTool
	 */
	function CXCategoryCounter( language, categoryTool ) {
		this.language = language;
		this.categoryTool = categoryTool;
		this.$view = null;
		this.init();
	}

	/**
	 * Initializes the category counter
	 */
	CXCategoryCounter.prototype.init = function () {
		var count = 0;

		this.$view = this.getView();
		if ( this.language === mw.cx.sourceLanguage &&
			this.categoryTool.categories.source !== null
		) {
			count = Object.keys( this.categoryTool.categories.source ).length;
		} else if ( this.language === mw.cx.targetLanguage &&
			this.categoryTool.categories.target !== null
		) {
			count = Object.keys( this.categoryTool.categories.target ).length;
		}

		this.update( count );
	};

	/**
	 * Retrieves the view for the category counter
	 *
	 * @return {jQuery}
	 */
	CXCategoryCounter.prototype.getView = function () {
		var $view, $button, $icon, $count;

		$view = $( '<div>' )
			.addClass( 'cx-category-widget cx-category-counter' );
		$button = $( '<button>' )
			.addClass( 'cx-category-counterbutton mw-ui-button mw-ui-quiet' );
		if ( this.language === mw.cx.sourceLanguage ) {
			$button.on( 'click', {
				id: 'cx-category-listing-anchor--source'
			}, jump );
		} else {
			$button.on( 'click', {
				id: 'cx-category-listing-anchor--translation'
			}, jump );
		}

		$icon = $( '<span>' )
			.addClass( 'cx-category-icon' );

		$count = $( '<span>' )
			.addClass( 'cx-category-count' );

		$button.append( $icon, $count );
		$view.append( $button )
			.hide();

		return $view;
	};

	/**
	 * Updates the count shown in the category counter
	 *
	 * @param {integer} count the category count
	 */
	CXCategoryCounter.prototype.update = function ( count ) {
		var text;
		count = mw.language.convertNumber( count );
		text = mw.message( 'cx-tools-categories-count-message', count ).text();
		this.$view.find( 'span.cx-category-count' ).text( text );
	};

	/**
	 * CXCategoryListing Class
	 * @class
	 * @param {string} language the language for the counter
	 * @param {CXCategoryTool} categoryTool the CXCategoryTool
	 */
	function CXCategoryListing( language, categoryTool ) {
		this.language = language;
		this.categoryTool = categoryTool;
		this.$view = null;
		this.init();
	}

	/**
	 * Initializes the category listing
	 */
	CXCategoryListing.prototype.init = function () {
		this.$view = this.getView();

		if ( this.language === mw.cx.sourceLanguage &&
			this.categoryTool.categories.source !== null &&
			Object.keys( this.categoryTool.categories.source ).length > 0
		) {
			this.addCategories( this.categoryTool.categories.source );
		} else if ( this.language === mw.cx.targetLanguage &&
			this.categoryTool.categories.target !== null &&
			Object.keys( this.categoryTool.categories.target ).length > 0
		) {
			this.addCategories( this.categoryTool.categories.target );
		}
	};

	/**
	 * Handles click events on source list items
	 *
	 * @param {Event} e the click event
	 */
	function sourceClickHandler( e ) {
		var $listItem, categoryId, categoryTool, title, count;

		/*jshint validthis:true */
		$listItem = $( this );
		categoryId = $listItem.attr( 'cx-category-id' );
		categoryTool = e.data.tool;

		if ( categoryTool.categories.adapted.hasOwnProperty( categoryId ) &&
			!categoryTool.categories.target.hasOwnProperty( categoryId )
		) {

			title = categoryTool.categories.adapted[ categoryId ];
			categoryTool.categories.target[ categoryId ] = title;
			count = Object.keys( categoryTool.categories.target ).length;
			categoryTool.widgets.target.listing.addCategory( categoryId, title );
			$( '.cx-category--translation[cx-category-id="' + categoryId + '"]' )
				.addClass( 'cx-category-highlight' );
			categoryTool.widgets.target.counter.update( count );
		}
	}

	/**
	 * Handles click events on the remove span inside target list items
	 *
	 * @param {Event} e the click event
	 */
	function targetClickHandler( e ) {
		var $remove, $listItem, categoryId, categoryTool, count;

		/*jshint validthis:true */
		$remove = $( this );
		$listItem = $remove.parent();
		categoryId = $listItem.attr( 'cx-category-id' );
		categoryTool = e.data.tool;

		$listItem.remove();
		delete categoryTool.categories.target[ categoryId ];
		count = Object.keys( categoryTool.categories.target ).length;
		$( '.cx-category--source[cx-category-id="' + categoryId + '"]' )
			.removeClass( 'cx-category-highlight' );
		categoryTool.widgets.target.counter.update( count );
	}

	/**
	 * Highlights the category and connected category list items
	 */
	function highlightCategory() {
		/*jshint validthis:true */
		var categoryId, $category = $( this );

		if ( $category.hasClass( 'cx-category-disabled' ) ) {
			return;
		}

		categoryId = $category.attr( 'cx-category-id' );

		$( '[cx-category-id="' + categoryId + '"]' )
			.addClass( 'cx-category-highlight' );
	}

	/**
	 * Remove the highlight on the category and connected category list items
	 */
	function removeCategoryHighlight() {
		/*jshint validthis:true */
		var categoryId, $category = $( this );

		if ( $category.hasClass( 'cx-category-disabled' ) ) {
			return;
		}
		categoryId = $category.attr( 'cx-category-id' );

		$( '[cx-category-id="' + categoryId + '"]' )
			.removeClass( 'cx-category-highlight' );
	}

	/**
	 * Gets the view for the category listing
	 *
	 * @return {jQuery}
	 */
	CXCategoryListing.prototype.getView = function () {
		var categoryTool, $view, $anchor, $icon, $categoryList;

		categoryTool = this.categoryTool;

		$view = $( '<div>' ).addClass( 'cx-category-widget cx-category-listing' );
		$icon = $( '<span>' ).addClass( 'cx-category-icon' );
		$categoryList = $( '<ul>' ).addClass( 'cx-category-categorylist' );
		$anchor = $( '<a>' );

		if ( this.language === mw.cx.sourceLanguage ) {
			$anchor.prop( 'id', 'cx-category-listing-anchor--source' );
			$categoryList.on( 'click', '.cx-category--source', {
				tool: categoryTool
			}, sourceClickHandler );
		} else {
			$anchor.prop( 'id', 'cx-category-listing-anchor--translation' );
			$categoryList.on( 'click', '.cx-category-remove', {
				tool: categoryTool
			}, targetClickHandler );
		}

		$categoryList.on( 'mouseover', '.cx-category', highlightCategory )
			.on( 'mouseout', '.cx-category', removeCategoryHighlight );

		$view.append( $anchor, $icon, $categoryList )
			.hide();

		return $view;
	};

	/**
	 * Adds categories to the category listing
	 *
	 * @param {object} categories key value object with ids and titles
	 * @param {boolean} clear flag to clear existing categories
	 */
	CXCategoryListing.prototype.addCategories = function ( categories, clear ) {
		var category, $categoryList;

		if ( !categories ) {
			return;
		}

		clear = typeof clear !== 'boolean' ? false : clear;

		$categoryList = this.$view.find( '.cx-category-categorylist' );
		if ( clear ) {
			$categoryList.empty();
		}

		for ( category in categories ) {
			this.addCategory( category, categories[ category ] );
		}
	};

	/**
	 * Creates a source category list item
	 *
	 * @param {string} id the category id
	 * @param {string} title the category title
	 * @return {jQuery}
	 */
	function createSourceCategoryListItem( id, title ) {
		var extract, $listItem;

		extract = title.match( /^.*:(.*)$/ );
		$listItem = $( '<li>' )
			.addClass( 'cx-category cx-category--source' )
			.attr( 'cx-category-id', id )
			.text( extract[ 1 ] );

		return $listItem;
	}

	/**
	 * Creates a target category list item
	 *
	 * @param {string} id the category id
	 * @param {string} title the category title
	 * @return {jQuery}
	 */
	function createTargetCategoryListItem( id, title ) {
		var extract, $listItem, $span;

		extract = title.match( /^.*:(.*)$/ );
		$listItem = $( '<li>' )
			.addClass( 'cx-category cx-category--translation' )
			.attr( 'cx-category-id', id )
			.text( extract[ 1 ] );

		$span = $( '<span>' )
			.addClass( 'cx-category-remove' );

		$listItem.append( $span );

		return $listItem;
	}

	/**
	 * Ads a category to the category list
	 *
	 * @param {string} id the category id
	 * @param {string} title the category title
	 */
	CXCategoryListing.prototype.addCategory = function ( id, title ) {
		var $categoryList, $categoryListItem;

		$categoryList = this.$view.find( '.cx-category-categorylist' );

		if ( this.language === mw.cx.sourceLanguage ) {
			$categoryListItem = createSourceCategoryListItem( id, title );
			if ( !this.categoryTool.categories.adapted[ id ] ) {
				$categoryListItem.addClass( 'cx-category-disabled' );
			}
		} else {
			$categoryListItem = createTargetCategoryListItem( id, title );
		}

		$categoryList.append( $categoryListItem );
	};

	/**
	 * CX Category Tool Class
	 * @class
	 * @param {mw.cx.SiteMapper} siteMapper
	 */
	function CXCategoryTool( siteMapper ) {
		this.categories = {
			source: null,
			target: null,
			adapted: null
		};
		this.widgets = {};
		this.siteMapper = siteMapper;
	}

	/**
	 * Retrieves categories for the source article
	 *
	 * @param {string} title the article title
	 * @param {string} language the article language
	 * @return {jQuery.Promise}
	 */
	CXCategoryTool.prototype.getArticleCategories = function ( title, language ) {
		var categoryTool, deferred = $.Deferred();

		if ( this.categories.source !== null ) {
			deferred.resolve( this.categories.source );
		}

		categoryTool = this;

		this.siteMapper.getApi( language ).get( {
			action: 'query',
			prop: 'categories',
			clshow: '!hidden',
			indexpageids: true,
			titles: title,
			format: 'json'
		}, {
			dataType: 'jsonp',
			cache: true
		} ).done( function ( response ) {
			var pageId, data, categories;

			categories = {};

			if ( response.query ) {
				pageId = response.query.pageids[ 0 ];
				data = response.query.pages[ pageId ].categories;
				if ( data ) {
					$.each( data, function ( index, value ) {
						var key;
						key = 'cx-category-' + index;
						categories[ key ] = value.title;
					} );
				}
			}

			categoryTool.categories.source = categories;
			deferred.resolve( categories );
		} ).fail( function ( error ) {
			mw.log( '[CX] Error while retrieving source categories ' + error );
			categoryTool.categories.source = {};
			deferred.resolve( {} );
		} );

		return deferred.promise();
	};

	/**
	 * Adapts a set of categories
	 *
	 * @param {object} categories key value listing of ids and titles
	 * @param {string} language the language for adaptation
	 * @return {jQuery.Promise}
	 */
	CXCategoryTool.prototype.adaptCategories = function ( categories, language ) {
		var categoryTool, categoryId, categoryTitles, inverted,
			keys, sorted, counter, deferred = $.Deferred();

		if ( this.categories.adapted !== null ) {
			deferred.resolve( this.categories.adapted );
		}

		categoryTool = this;

		categoryTitles = [];
		inverted = {};
		for ( categoryId in categories ) {
			categoryTitles.push( categories[ categoryId ] );
			if ( categories.hasOwnProperty( categoryId ) ) {
				inverted[ categories[ categoryId ].replace( /[:\s]/g, '-' ) ] = categoryId;
			}
		}

		this.siteMapper.getApi( mw.cx.sourceLanguage ).get( {
			action: 'query',
			titles: categoryTitles.join( '|' ),
			prop: 'langlinks',
			lllang: language,
			redirects: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			cache: true
		} ).done( function ( response ) {
			var redirects,
				adaptedCategories = {};

			if ( response.query ) {
				redirects = response.query.redirects || {};

				$.each( response.query.pages, function ( pageId, page ) {
					var i, key, title;

					for ( i in redirects ) {
						if ( redirects[ i ].to === page.title ) {
							key = redirects[ i ].from;
							break;
						}
					}

					if ( !key ) {
						key = page.title;
					}

					title = key.replace( /[:\s]/g, '-' );

					if ( title && page.langlinks ) {
						adaptedCategories[ inverted[ title ] ] = page.langlinks &&
							page.langlinks[ 0 ][ '*' ];
					}
				} );
			}

			// Maintain the same sort order
			keys = Object.keys( adaptedCategories );
			keys.sort();
			sorted = {};
			for ( counter = 0; counter < keys.length; counter++ ) {
				sorted[ keys[ counter ] ] = adaptedCategories[ keys[ counter ] ];
			}

			categoryTool.categories.adapted = sorted;
			if ( categoryTool.categories.target === null ) {
				categoryTool.categories.target = $.extend( {}, sorted );
			}
			deferred.resolve( adaptedCategories );
		} ).fail( function ( error ) {
			mw.log( 'Error adapting categories ' + error );
			categoryTool.categories.adapted = {};
			deferred.resolve( {} );
		} );

		return deferred.promise();
	};

	/**
	 * Retrieves the specified set of categories
	 * Valid sets are 'source', 'target' and 'adapted'
	 * If no set is specified, returns all three sets
	 *
	 * @param {string} categorySet the set of categories to return
	 * @return {jQuery.promis}
	 */
	CXCategoryTool.prototype.getCategories = function ( categorySet ) {
		var categoryTool = this,
			deferred = $.Deferred();

		switch ( categorySet ) {
		case 'source':
			this.getArticleCategories( mw.cx.sourceTitle, mw.cx.sourceLanguage )
				.done( function ( categories ) {
					deferred.resolve( categories );
				} );
			break;
		case 'adapted':
			this.getArticleCategories( mw.cx.sourceTitle, mw.cx.sourceLanguage )
				.done( function ( categories ) {
					categoryTool.adaptCategories( categories, mw.cx.targetLanguage )
						.done( function ( adaptedCategories ) {
							deferred.resolve( adaptedCategories );
						} );
				} );
			break;
		case 'target':
			if ( this.categories.target !== null ) {
				deferred.resolve( this.categories.target );
			} else {
				this.getArticleCategories( mw.cx.sourceTitle, mw.cx.sourceLanguage )
					.done( function ( categories ) {
						categoryTool.adaptCategories( categories, mw.cx.targetLanguage )
							.done( function ( adaptedCategories ) {
								deferred.resolve( adaptedCategories );
							} );
					} );
			}
			break;
		default:
			this.getArticleCategories( mw.cx.sourceTitle, mw.cx.sourceLanguage )
				.done( function ( categories ) {
					categoryTool.adaptCategories( categories, mw.cx.targetLanguage )
						.done( function () {
							deferred.resolve( categoryTool.categories );
						} );
				} );
		}

		return deferred.promise();

	};

	/**
	 * Initalizes UI widgets and attaches them to DOM
	 */
	CXCategoryTool.prototype.initializeWidgets = function ( column ) {
		if ( column === 'source' ) {
			this.widgets.source = {};
			this.widgets.source.counter = new CXCategoryCounter( mw.cx.sourceLanguage, this );
			this.widgets.source.listing = new CXCategoryListing( mw.cx.sourceLanguage, this );
		}
		if ( column === 'translation' ) {
			this.widgets.target = {};
			this.widgets.target.counter = new CXCategoryCounter( mw.cx.targetLanguage, this );
			this.widgets.target.listing = new CXCategoryListing( mw.cx.targetLanguage, this );
		}
	};

	/**
	 * Attaches UI widgets to DOM
	 */
	CXCategoryTool.prototype.attachWidgets = function ( column ) {
		var categoryTool;

		categoryTool = this;

		// Load widgets for the source column
		if ( column === 'source' ) {
			$( 'div.cx-column--source > div.cx-column__sub-heading' )
				.append( categoryTool.widgets.source.counter.$view );
			$( 'div.cx-column--source > div.cx-column__content' )
				.after( categoryTool.widgets.source.listing.$view );
		}

		// Load widgets for the translation column
		if ( column === 'translation' ) {
			$( 'div.cx-column--translation > div.cx-column__sub-heading' )
				.append( categoryTool.widgets.target.counter.$view );
			$( 'div.cx-column--translation > div.cx-column__content' )
				.after( categoryTool.widgets.target.listing.$view );
		}
	};

	/**
	 * Shows UI widgets
	 */
	CXCategoryTool.prototype.showWidgets = function ( column ) {
		if ( column === 'source' ) {
			this.widgets.source.counter.$view.show();
			this.widgets.source.listing.$view.show();
		}
		if ( column === 'translation' ) {
			this.widgets.target.counter.$view.show();
			this.widgets.target.listing.$view.show();
		}
	};

	// Expose the CXCategoryTool (required by publishing)
	mw.cx.categoryTool = new CXCategoryTool( mw.cx.siteMapper );

	$( function () {
		mw.hook( 'mw.cx.source.loaded' ).add( function () {
			mw.cx.categoryTool.getCategories().done( function () {
				mw.cx.categoryTool.initializeWidgets( 'source' );
				mw.cx.categoryTool.attachWidgets( 'source' );
				mw.cx.categoryTool.showWidgets( 'source' );
				window.setTimeout( function () {
					mw.cx.categoryTool.initializeWidgets( 'translation' );
					mw.cx.categoryTool.attachWidgets( 'translation' );
					mw.cx.categoryTool.showWidgets( 'translation' );
				}, 2000 );
			} );
		} );
	} );

}( jQuery, mediaWiki ) );
