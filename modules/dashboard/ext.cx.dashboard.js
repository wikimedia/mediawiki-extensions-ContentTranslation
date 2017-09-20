/*!
 * ContentTranslation extension - Dashboard.
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * CXDashboard
	 *
	 * @class
	 * @param {HTMLElement} element
	 * @param {Object} siteMapper
	 */
	function CXDashboard( element, siteMapper ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;
		this.$header = null;
		this.$sidebar = null;
		this.translator = null;
		this.$publishedArticlesButton = null;
		this.lists = {};
		this.$translationListContainer = null;
		this.$newTranslationButton = null;
		this.$listHeader = null;
		this.$sourceSelector = null;
		this.narrowLimit = 700;
		this.isNarrowScreenSize = false;

		this.filterLabels = {};
		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			this.filterLabels.suggestions = {
				wide: {
					label: mw.msg( 'cx-translation-filter-suggested-translations' ),
					icon: undefined
				},
				narrow: {
					label: undefined,
					icon: 'bright'
				}
			};
		}
		this.filterLabels.draft = {
			wide: {
				label: mw.msg( 'cx-translation-filter-draft-translations' ),
				icon: undefined
			},
			narrow: {
				label: undefined,
				icon: 'edit'
			}
		};
		this.filterLabels.published = {
			wide: {
				label: mw.msg( 'cx-translation-filter-published-translations' ),
				icon: undefined
			},
			narrow: {
				label: undefined,
				icon: 'check'
			}
		};
	}

	/**
	 * Return an object of languages indexed by language code.
	 *
	 * @param {Array} languages An array of language codes.
	 * @return {Object} autonyms indexed by language code.
	 */
	function getAutonyms( languages ) {
		return languages.reduce( function ( prevObject, element ) {
			prevObject[ element ] = $.uls.data.getAutonym( element );

			return prevObject;
		}, {} );
	}

	/**
	 * Calculate position for ULS, depending on directionality
	 */
	function calculateUlsPosition() {
		var isRtl = $( 'html' ).prop( 'dir' ) === 'rtl',
			left = this.$element.offset().left,
			right = left + this.$element.parent().width() - this.$menu.width(),
			isInRtlViewport = right > 0,
			isInLtrViewport = left + this.$menu.width() > $( window ).width();

		if ( ( isRtl && isInRtlViewport ) || ( !isRtl && isInLtrViewport ) ) {
			this.left = right;
		} else {
			this.left = left;
		}

		this.$menu.css( this.position() );
	}

	/**
	 * Create ULS and attach to given DOM element, with options passed as parameters
	 *
	 * @param {jQuery} $languageFilter DOM element to which ULS will be attached
	 * @param {Function} onSelect Function called when ULS onSelect event gets triggered
	 * @param {Object} options Additional options for ULS creation
	 */
	function createUls( $languageFilter, onSelect, options ) {
		var ulsOptions = $.extend( {
			onSelect: onSelect,
			onReady: function () {
				this.$menu.addClass( options.ulsClass );
			},
			onVisible: calculateUlsPosition,
			menuWidth: 'narrow'
		}, options );
		$languageFilter.uls( ulsOptions );
	}

	/**
	 * Remove ULS attached to DOM element, and remove that element based on class
	 *
	 * @param {jQuery} $languageFilter DOM element to which ULS is attached
	 * @param {string} ulsClass CSS class of ULS
	 */
	function deleteUls( $languageFilter, ulsClass ) {
		$( '.' + ulsClass ).remove();
		$languageFilter.data( 'uls', null );
		$languageFilter.off( 'click' );
	}

	CXDashboard.prototype.init = function () {
		this.render();
		this.initLists();
		this.listen();

		$.uls.data.addLanguage( 'any', {
			script: 'Latn',
			regions: [ 'WW' ],
			autonym: mw.msg( 'cx-translation-filter-any-language' )
		} );
		mw.hook( 'mw.cx.dashboard.ready' ).fire();
	};

	/**
	 * Initialize the components
	 */
	CXDashboard.prototype.initLists = function () {
		var storedSourceLanguage,
			query = new mw.Uri().query;

		this.renderTranslations();
		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			this.renderTranslationSuggestions();
			this.createUlsForSuggestionsList();
		} else {
			this.setActiveList( 'draft' );
			return;
		}

		storedSourceLanguage = mw.storage.get( 'cxSourceLanguage' );

		// Show suggestions tab by default when user is coming from a campaign
		// entry point and does not have any previous cx source language.
		if ( ( query.campaign && !storedSourceLanguage ) ||
			// Show suggestions if URL has #suggestions
			location.hash === '#suggestions'
		) {
			this.setActiveList( 'suggestions' );
		} else {
			this.setActiveList( 'draft' );
		}
	};

	CXDashboard.prototype.createLanguageFilter = function () {
		var $sourceLanguageContainer, $targetLanguageContainer,
			$sourceLanguageFilter, $targetLanguageFilter,
			$element;

		$sourceLanguageFilter = $( '<div>' )
			.addClass( 'translation-source-language-filter' );
		this.setLanguageFilterLabel( $sourceLanguageFilter );

		$targetLanguageFilter = $( '<div>' )
			.addClass( 'translation-target-language-filter' );
		this.setLanguageFilterLabel( $targetLanguageFilter );

		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-source-container' )
			.append( $sourceLanguageFilter );

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-target-container' )
			.append( $targetLanguageFilter );

		$element = $( '<div>' )
			.addClass( 'translation-language-filter' )
			.append(
				$sourceLanguageContainer,
				$( '<div>' ).addClass( 'translation-language-arrow' ),
				$targetLanguageContainer
			);

		return {
			$element: $element,
			$sourceLanguageFilter: $sourceLanguageFilter,
			$targetLanguageFilter: $targetLanguageFilter
		};
	};

	/**
	 * Set the language filter label
	 *
	 * @param {jQuery} $filter Source filter or target filter
	 * @param {string} selected Selected language code
	 */
	CXDashboard.prototype.setLanguageFilterLabel = function ( $filter, selected ) {
		var label;

		if ( selected ) {
			label = this.isNarrowScreenSize ?
				mw.language.bcp47( selected ) :
				$.uls.data.getAutonym( selected );
		} else if ( $filter.is( '.translation-source-language-filter' ) ) {
			label = mw.msg( 'cx-translation-filter-from-any-language' );
		} else {
			label = mw.msg( 'cx-translation-filter-to-any-language' );
		}

		$filter.text( label );
	};

	/**
	 * Populates various UI components with data in the given translation suggestions.
	 */
	CXDashboard.prototype.renderTranslationSuggestions = function () {
		this.lists.suggestions = new mw.cx.CXSuggestionList(
			this.$translationListContainer,
			this.siteMapper,
			this.createLanguageFilter()
		);
	};

	/**
	 * Initiate and render the translation list.
	 * TODO: Refactor this to move some logic to translationlist module
	 */
	CXDashboard.prototype.renderTranslations = function () {
		this.lists.draft = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			'draft',
			this.siteMapper,
			this.createLanguageFilter()
		);
		this.lists.published = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			'published',
			this.siteMapper,
			this.createLanguageFilter()
		);
	};

	CXDashboard.prototype.getSidebarItems = function () {
		return [
			{
				'class': 'cx-dashboard-sidebar__link cx-dashboard-sidebar__link--information',
				href: 'https://www.mediawiki.org/wiki/ContentTranslation',
				label: mw.msg( 'cx-dashboard-sidebar-information' )
			},
			{
				'class': 'cx-dashboard-sidebar__link cx-dashboard-sidebar__link--stats',
				href: mw.util.getUrl( 'Special:ContentTranslationStats' ),
				label: mw.msg( 'cx-dashboard-sidebar-stats' )
			},
			{
				'class': 'cx-dashboard-sidebar__link cx-dashboard-sidebar__link--feedback',
				href: 'https://www.mediawiki.org/wiki/Talk:Content_translation',
				label: mw.msg( 'cx-dashboard-sidebar-feedback' )
			}
		];
	};

	CXDashboard.prototype.buildSidebar = function () {
		var $help, i, items, $links = [];

		this.translator = new mw.cx.widgets.CXTranslator();
		this.$publishedArticlesButton = this.translator.$lastMonthButton;

		$help = $( '<div>' )
			.addClass( 'cx-dashboard-sidebar__help' );

		items = this.getSidebarItems();
		$links = $( '<ul>' );
		for ( i = 0; i < items.length; i++ ) {
			$links.append(
				$( '<li>' ).append(
					$( '<a>' )
						.addClass( items[ i ].class )
						.text( items[ i ].label )
						.prop( {
							target: '_blank',
							href: items[ i ].href
						} )
				)
			);
		}
		$help.append(
			$( '<div>' )
				.addClass( 'cx-dashboard-sidebar__help-title' )
				.text( mw.msg( 'cx-dashboard-sidebar-title' ) ),
			$links
		);

		return [ this.translator.$widget, $help ];
	};

	CXDashboard.prototype.render = function () {
		var header;

		this.$header = $( '<div>' )
			.addClass( 'cx-header--dashboard' );

		header = new mw.cx.ui.Header( {
			siteMapper: this.siteMapper,
			titleText: mw.msg( 'cx-dashboard-header' )
		} );

		this.$header.append( header.$element );
		this.$translationListContainer = this.buildTranslationList();
		this.$sidebar = $( '<div>' )
			.addClass( 'cx-dashboard-sidebar' )
			.append( this.buildSidebar() );

		this.$dashboard = $( '<div>' )
			.addClass( 'cx-dashboard' )
			.append( this.$translationListContainer, this.$sidebar );

		this.$container.append( this.$header, this.$dashboard );
	};

	CXDashboard.prototype.buildTranslationList = function () {
		var newTranslationButton, size,
			filterButtons = [];

		// document.documentElement.clientWidth performs faster than $( window ).width()
		this.isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

		size = this.isNarrowScreenSize ? 'narrow' : 'wide';

		$.each( this.filterLabels, function ( key, value ) {
			filterButtons.push( new OO.ui.ButtonOptionWidget( {
				data: key,
				label: value[ size ].label,
				icon: value[ size ].icon
			} ) );
		} );

		this.filter = new OO.ui.ButtonSelectWidget( {
			items: filterButtons
		} );

		newTranslationButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-create-new-translation' ),
			icon: 'add',
			flags: [
				'primary',
				'progressive'
			]
		} );
		this.$newTranslationButton = newTranslationButton.$element;

		this.$listHeader = $( '<div>' ).addClass( 'translation-filter' );
		this.$listHeader.append(
			this.$newTranslationButton,
			this.filter.$element
		);

		this.$sourceSelector = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded' );

		return $( '<div>' )
			.addClass( 'cx-translationlist-container' )
			.append( this.$listHeader, this.$sourceSelector );
	};

	CXDashboard.prototype.setActiveList = function ( type ) {
		var self = this;

		this.activeList = type;
		this.filter.selectItemByData( type );
		$.each( this.lists, function ( name, list ) {
			if ( name === type ) {
				list.show();

				self.setLanguageFilterLabel( list.languageFilter.$sourceLanguageFilter, list.filters.sourceLanguage );
				self.setLanguageFilterLabel( list.languageFilter.$targetLanguageFilter, list.filters.targetLanguage );
			} else {
				list.hide();
			}
		} );
	};

	CXDashboard.prototype.listen = function () {
		var self = this;

		this.filter.on( 'select', function ( item ) {
			self.setActiveList( item.getData() );
		} );

		mw.hook( 'mw.cx.translationlist.items.changed' ).add( this.fillLanguageFilters.bind( this ) );

		this.$publishedArticlesButton.on( 'click', function () {
			self.filter.selectItemByData( 'published' );
		} );

		this.initSourceSelector();
		this.$newTranslationButton.on( 'click', function ( e ) {
			self.$listHeader.hide();
			e.stopPropagation();

			$( window ).scrollTop( 0 );
		} );
		// Scroll handler
		$( window ).scroll( $.throttle( 250, this.scroll.bind( this ) ) );
		// Resize handler
		$( window ).resize( $.throttle( 250, this.resize.bind( this ) ) );
	};

	CXDashboard.prototype.setFilter = function ( type, value ) {
		var list = this.lists[ this.activeList ];
		list.filters[ type ] = value;
		list.applyFilters( list.filters );
		this.setLanguageFilterLabel( list.languageFilter.$sourceLanguageFilter, list.filters.sourceLanguage );
		this.setLanguageFilterLabel( list.languageFilter.$targetLanguageFilter, list.filters.targetLanguage );
	};

	/**
	 * Creates source and target language ULS for suggestions list
	 */
	CXDashboard.prototype.createUlsForSuggestionsList = function () {
		var list = this.lists.suggestions,
			ulsOptions = {
				menuWidth: 'medium',
				quickList: function () {
					return mw.uls.getFrequentLanguageList();
				},
				compact: true
			};

		createUls(
			list.languageFilter.$sourceLanguageFilter,
			this.setFilter.bind( this, 'sourceLanguage' ),
			ulsOptions
		);
		createUls(
			list.languageFilter.$targetLanguageFilter,
			this.setFilter.bind( this, 'targetLanguage' ),
			ulsOptions
		);
	};

	/**
	 * Fill source and target language filter with respective data fetched from the server
	 */
	CXDashboard.prototype.fillLanguageFilters = function () {
		var list = this.lists[ this.activeList ],
			sourceLanguages = list.getTranslationLanguages().sourceLanguages,
			targetLanguages = list.getTranslationLanguages().targetLanguages,
			$sourceLanguageFilter = list.languageFilter.$sourceLanguageFilter,
			$targetLanguageFilter = list.languageFilter.$targetLanguageFilter;

		// Don't show the language filter if only one combination is possible
		if ( this.isOneTranslationLanguagesPair( sourceLanguages, targetLanguages ) ) {
			return;
		}

		// More than one combination possible. Show the language filter
		list.languageFilter.$element.show();

		// Delete any previous ULS, in case it needs to be recreated with new languages
		// when next batch of articles is fetched
		deleteUls( $sourceLanguageFilter, this.activeList + '-uls-source' );
		createUls(
			$sourceLanguageFilter,
			this.languageChangeHandler.bind( this, 'source', $sourceLanguageFilter ),
			{
				ulsClass: this.activeList + '-uls-source',
				languages: getAutonyms( sourceLanguages )
			}
		);
		deleteUls( $targetLanguageFilter, this.activeList + '-uls-target' );
		createUls(
			$targetLanguageFilter,
			this.languageChangeHandler.bind( this, 'target', $targetLanguageFilter ),
			{
				ulsClass: this.activeList + '-uls-target',
				languages: getAutonyms( targetLanguages )
			}
		);
	};

	/**
	 * Check if only one combination of source and target languages is possible
	 *
	 * @param {Object} sourceLanguages Array of possible source languages
	 * @param {Object} targetLanguages Array of possible target languages
	 * @return {boolean} Returns true if there is only one source and target language combination possible
	 */
	CXDashboard.prototype.isOneTranslationLanguagesPair = function ( sourceLanguages, targetLanguages ) {
		// Check if there is only one language combination, e.g. English to Spanish
		// sourceLanguages - [ 'en' ]
		// targetLanguages - [ 'es' ]
		if ( sourceLanguages.length === 1 && targetLanguages.length === 1 ) {
			return true;
		}

		return false;
	};

	/**
	 * Callback invoked when language in translationlist ULS changes
	 *
	 * @param {string} type Indicates type of language filter. Can be 'source' or 'target'
	 * @param {jQuery} $languageFilter DOM element of language filter
	 * @param {string} language Language code retured from ULS onSelect
	 */
	CXDashboard.prototype.languageChangeHandler = function ( type, $languageFilter, language ) {
		var list = this.lists[ this.activeList ],
			filterType = type + 'Language',
			languages = list.getTranslationLanguages()[ filterType + 's' ],
			selectedLanguage = ( language === 'any' ) ? null : language,
			ulsClass, languageDecorator;

		list.filters[ filterType ] = selectedLanguage;
		list.applyFilters( list.filters );
		this.setLanguageFilterLabel( $languageFilter, selectedLanguage );

		ulsClass = this.activeList + '-uls-' + type;
		// Delete the old ULS
		deleteUls( $languageFilter, ulsClass );

		languageDecorator = function ( $language, languageCode ) {
			if ( languageCode === 'any' ) {
				$language.parent().addClass( 'cx-translationlist-uls-any-language' );
			}
		};

		if ( selectedLanguage ) {
			languages.unshift( 'any' );
		}
		createUls( $languageFilter,
			this.languageChangeHandler.bind( this, type, $languageFilter ),
			{
				ulsClass: ulsClass,
				languages: getAutonyms( languages ),
				languageDecorator: languageDecorator
			}
		);
	};

	CXDashboard.prototype.initSourceSelector = function () {
		var query,
			sourceSelectorOptions = {};

		query = new mw.Uri().query;
		sourceSelectorOptions.sourceLanguage = query.from;
		sourceSelectorOptions.targetLanguage = query.to;
		sourceSelectorOptions.sourceTitle = query.page;
		sourceSelectorOptions.container = this.$sourceSelector;
		this.$newTranslationButton.cxSourceSelector( sourceSelectorOptions );

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.page, query.to );
		}
	};

	CXDashboard.prototype.scroll = function () {
		var scrollTop = $( window ).scrollTop();

		if ( scrollTop > 0 ) {
			this.$sidebar.addClass( 'sticky' );
		} else {
			this.$sidebar.removeClass( 'sticky' );
		}
	};

	CXDashboard.prototype.resize = function () {
		var filterItems = this.filter.getItems(),
			narrowScreenSize = document.documentElement.clientWidth < this.narrowLimit,
			list = this.lists[ this.activeList ],
			size = narrowScreenSize ? 'narrow' : 'wide',
			self = this;

		this.translator.resize();

		// Exit early if screen size stays above/under narrow screen size limit
		if ( this.isNarrowScreenSize === narrowScreenSize ) {
			return;
		}

		// Change filter labels to icons and vice-versa
		$.each( filterItems, function ( index, filter ) {
			var data = filter.getData(),
				label = self.filterLabels[ data ][ size ].label,
				icon = self.filterLabels[ data ][ size ].icon;

			filter.setIcon( icon );
			filter.setLabel( label );
		} );
		this.isNarrowScreenSize = narrowScreenSize;

		// Change language filter labels for active list
		this.setLanguageFilterLabel( list.languageFilter.$sourceLanguageFilter, list.filters.sourceLanguage );
		this.setLanguageFilterLabel( list.languageFilter.$targetLanguageFilter, list.filters.targetLanguage );
	};

	$( function () {
		var dashboard;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		dashboard = new CXDashboard( document.body, mw.cx.siteMapper );
		dashboard.init();
	} );
}( jQuery, mediaWiki ) );
