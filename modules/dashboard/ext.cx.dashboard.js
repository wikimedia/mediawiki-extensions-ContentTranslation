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
		this.$publishedArticlesButton = null;
		this.lists = {};
		this.$translationListContainer = null;
		this.$newTranslationButton = null;
		this.$listHeader = null;
		this.$sourceSelector = null;
	}

	CXDashboard.prototype.init = function () {
		this.render();
		this.initLists();
		this.listen();
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
		} else {
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
		$targetLanguageFilter = $( '<div>' )
			.addClass( 'translation-target-language-filter' );
		this.setLanguageFilterLabel( $sourceLanguageFilter );
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
			label = $.uls.data.getAutonym( selected );
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
		var $help, $statistics, i, items, $links = [];

		$statistics = mw.cx.widgets.CXTranslator();
		this.$publishedArticlesButton = $statistics.$button;

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

		return [ $statistics.$element, $help ];
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
		var newTranslationButton,
			filterButtons = [];

		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			filterButtons.push( new OO.ui.ButtonOptionWidget( {
				data: 'suggestions',
				label: mw.msg( 'cx-translation-filter-suggested-translations' )
			} ) );
		}

		filterButtons.push( new OO.ui.ButtonOptionWidget( {
			data: 'draft',
			label: mw.msg( 'cx-translation-filter-draft-translations' )
		} ) );

		filterButtons.push( new OO.ui.ButtonOptionWidget( {
			data: 'published',
			label: mw.msg( 'cx-translation-filter-published-translations' )
		} ) );

		this.$listHeader = $( '<div>' ).addClass( 'translation-filter' );

		newTranslationButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-create-new-translation' ),
			icon: 'add',
			flags: [
				'primary',
				'progressive'
			]
		} );
		this.$newTranslationButton = newTranslationButton.$element;

		this.filter = new OO.ui.ButtonSelectWidget( {
			items: filterButtons
		} );

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
		var self = this,
			onVisibleCallback;

		this.filter.on( 'select', function ( item ) {
			self.setActiveList( item.getData() );
		} );

		onVisibleCallback = function () {
			if ( $( 'html' ).prop( 'dir' ) === 'rtl' ) {
				this.left = this.$element.offset().left + this.$element.parent().width() - this.$menu.width();
			} else {
				this.left = this.$element.offset().left;
			}

			this.$menu.css( this.position() );
		};

		$.each( this.lists, function ( name, list ) {
			var setFilter = self.setFilter.bind( self );

			list.languageFilter.$sourceLanguageFilter.uls( {
				onSelect: function ( language ) {
					setFilter( 'sourceLanguage', language );
				},
				onVisible: onVisibleCallback,
				menuWidth: 'medium',
				left: list.languageFilter.$sourceLanguageFilter.offset().left,
				quickList: function () {
					return mw.uls.getFrequentLanguageList();
				},
				compact: true
			} );

			list.languageFilter.$targetLanguageFilter.uls( {
				onSelect: function ( language ) {
					setFilter( 'targetLanguage', language );
				},
				onVisible: onVisibleCallback,
				menuWidth: 'medium',
				left: list.languageFilter.$targetLanguageFilter.offset().left,
				quickList: function () {
					return mw.uls.getFrequentLanguageList();
				},
				compact: true
			} );
		} );

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
	};

	CXDashboard.prototype.setFilter = function ( type, value ) {
		var list = this.lists[ this.activeList ];
		list.filters[ type ] = value;
		list.applyFilters( list.filters );
		this.setLanguageFilterLabel( list.languageFilter.$sourceLanguageFilter, list.filters.sourceLanguage );
		this.setLanguageFilterLabel( list.languageFilter.$targetLanguageFilter, list.filters.targetLanguage );
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

	$( function () {
		var dashboard;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		dashboard = new CXDashboard( document.body, mw.cx.siteMapper );
		dashboard.init();
	} );
}( jQuery, mediaWiki ) );
