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
	 */
	function CXDashboard( element, siteMapper ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;
		this.$header = null;
		this.$sidebar = null;
		this.lists = {};
		this.$translationListContainer = null;
		this.$newTranslationButton = null;
		this.$filter = null;
		this.$listHeader = null;
		this.$sourceLanguageFilter = null;
		this.$targetLanguageFilter = null;
		this.$cta = null;
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
		this.lists.suggestions = new mw.cx.CXSuggestionList( this.$translationListContainer, this.siteMapper );
	};

	/**
	 * Initiate and render the translation list.
	 * TODO: Refactor this to move some logic to translationlist module
	 */
	CXDashboard.prototype.renderTranslations = function () {
		this.lists.draft = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			'draft',
			this.siteMapper
		);
		this.lists.published = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			'published',
			this.siteMapper
		);
	};

	CXDashboard.prototype.getSidebarItems = function () {
		return [
			{
				class: 'cx-sidebar__link cx-sidebar__link--information',
				href: 'https://www.mediawiki.org/wiki/ContentTranslation',
				label: mw.msg( 'cx-dashboard-sidebar-information' )
			},
			{
				class: 'cx-sidebar__link cx-sidebar__link--stats',
				href: mw.util.getUrl( 'Special:ContentTranslationStats' ),
				label: mw.msg( 'cx-dashboard-sidebar-stats' )
			},
			{
				class: 'cx-sidebar__link cx-sidebar__link--feedback',
				href: 'https://www.mediawiki.org/wiki/Talk:Content_translation',
				label: mw.msg( 'cx-dashboard-sidebar-feedback' )
			}
		];
	};

	CXDashboard.prototype.buildSidebar = function () {
		var $header, $translator, i, items, $links = [];

		$header = $( '<div>' )
			.addClass( 'cx-sidebar__title' )
			.text( mw.msg( 'cx-dashboard-sidebar-title' ) );

		$translator = mw.cx.widgets.CXTranslator();
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

		return $( '<div>' )
			.addClass( 'cx-sidebar' )
			.append( $translator, $header, $links );
	};

	CXDashboard.prototype.render = function () {
		this.$header = $( '<div>' )
			.addClass( 'cx-header--dashboard' );

		this.$header.cxHeader( this.siteMapper, mw.msg( 'cx-dashboard-header' ) );
		this.$translationListContainer = this.buildTranslationList();
		this.$sidebar = $( '<div>' )
			.addClass( 'cx-dashboard__sidebar' )
			.append( this.buildSidebar() );

		this.$dashboard = $( '<div>' )
			.addClass( 'cx-dashboard' )
			.append( this.$translationListContainer, this.$sidebar );

		this.$container.append( this.$header, this.$dashboard );
	};

	CXDashboard.prototype.buildTranslationList = function () {
		var $sourceLanguageContainer, $targetLanguageContainer,
			$filterTabs = [];

		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			$filterTabs.push( $( '<span>' )
				.addClass( 'cx-filter cx-filter--suggestions' )
				.text( mw.msg( 'cx-translation-filter-suggested-translations' ) ) );
		}

		$filterTabs.push( $( '<span>' )
			.addClass( 'cx-filter cx-filter--draft' )
			.text( mw.msg( 'cx-translation-filter-draft-translations' ) ) );

		$filterTabs.push( $( '<span>' )
			.addClass( 'cx-filter cx-filter--published' )
			.text( mw.msg( 'cx-translation-filter-published-translations' ) ) );

		this.$listHeader = $( '<div>' ).addClass( 'translation-filter' );
		this.$newTranslationButton = $( '<button>' )
			.addClass( 'cx-cta__new-translation mw-ui-button mw-ui-progressive' )
			.text( mw.msg( 'cx-create-new-translation' ) );
		this.$cta = $( '<div>' )
			.addClass( 'cx-cta' )
			.append( this.$newTranslationButton );

		this.$filter = $( '<span>' )
			.addClass( 'cx-filters' )
			.append( $filterTabs );

		this.$sourceLanguageFilter = $( '<div>' )
			.addClass( 'translation-source-language-filter' );
		this.$targetLanguageFilter = $( '<div>' )
			.addClass( 'translation-target-language-filter' );
		this.setLanguageFilterLabel( this.$sourceLanguageFilter );
		this.setLanguageFilterLabel( this.$targetLanguageFilter );
		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-source-container' )
			.append( this.$sourceLanguageFilter );

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-target-container' )
			.append( this.$targetLanguageFilter );

		this.$listHeader.append(
			this.$filter,
			$( '<div>' ).addClass( 'translation-language-filter' ).append(
				$sourceLanguageContainer,
				$( '<div>' ).addClass( 'translation-language-arrow' ),
				$targetLanguageContainer
			),
			this.$cta
		);

		return $( '<div>' )
			.addClass( 'cx-translationlist-container' )
			.append( this.$listHeader );
	};

	CXDashboard.prototype.setActiveList = function ( type ) {
		var self = this;

		this.activeList = type;
		this.$filter
			.find( '.cx-filter--selected' )
			.removeClass( 'cx-filter--selected' );
		this.$filter
			.find( '.cx-filter--' + type )
			.addClass( 'cx-filter--selected' );
		$.each( this.lists, function ( name, list ) {
			if ( name === type ) {
				list.show();
				self.setLanguageFilterLabel( self.$sourceLanguageFilter, list.filters.sourceLanguage );
				self.setLanguageFilterLabel( self.$targetLanguageFilter, list.filters.targetLanguage );
			} else {
				list.hide();
			}
		} );
	};

	CXDashboard.prototype.listen = function () {
		var setFilter,
			self = this;

		setFilter = $.proxy( this.setFilter, this );

		this.$filter.click( '.cx-filter', function ( e ) {
			var $filter = $( e.target );

			if ( $filter.is( '.cx-filter--selected' ) ) {
				// Do not do anything on click of already selected filter.
				return;
			}

			self.$filter
				.find( '.cx-filter--selected' )
				.removeClass( 'cx-filter--selected' );

			$filter.addClass( 'cx-filter--selected' );

			if ( $filter.is( '.cx-filter--draft' ) ) {
				self.setActiveList( 'draft' );
			} else if ( $filter.is( '.cx-filter--published' ) ) {
				self.setActiveList( 'published' );
			} else if ( $filter.is( '.cx-filter--suggestions' ) ) {
				self.setActiveList( 'suggestions' );
			}
		} );

		this.$sourceLanguageFilter.uls( {
			onSelect: function ( language ) {
				setFilter( 'sourceLanguage', language );
			},
			menuWidth: 'medium',
			left: this.$sourceLanguageFilter.offset().left,
			quickList: function () {
				// TODO: We might need a smarter list here including previous translation
				// languages.
				return mw.uls.getFrequentLanguageList();
			},
			compact: true
		} );

		this.$targetLanguageFilter.uls( {
			onSelect: function ( language ) {
				setFilter( 'targetLanguage', language );
			},
			menuWidth: 'medium',
			left: this.$targetLanguageFilter.offset().left,
			quickList: function () {
				return mw.uls.getFrequentLanguageList();
			},
			compact: true
		} );

		this.initSourceSelector();
		// Scroll handler
		$( window ).scroll( $.throttle( 250, $.proxy( this.scroll, this ) ) );
	};

	CXDashboard.prototype.setFilter = function ( type, value ) {
		var list = this.lists[ this.activeList ];
		list.filters[ type ] = value;
		list.applyFilters( list.filters );
		this.setLanguageFilterLabel( this.$sourceLanguageFilter, list.filters.sourceLanguage );
		this.setLanguageFilterLabel( this.$targetLanguageFilter, list.filters.targetLanguage );
	};

	CXDashboard.prototype.initSourceSelector = function () {
		var query,
			sourceSelectorOptions = {};

		query = new mw.Uri().query;
		sourceSelectorOptions.sourceLanguage = query.from;
		sourceSelectorOptions.targetLanguage = query.to;
		sourceSelectorOptions.sourceTitle = query.page;
		sourceSelectorOptions.targetTitle = query.targettitle;
		this.$newTranslationButton.cxSourceSelector( sourceSelectorOptions );

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.to );
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
