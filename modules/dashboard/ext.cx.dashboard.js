/**
 * ContentTranslation extension - Dashboard.
 *
 * @file
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
	function CXDashboard( element, siteMapper, options ) {
		this.$container = $( element );
		this.options = $.extend( true, {}, $.fn.cxDashboard.defaults, options );
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
		this.init();
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
		this.renderTranslations();
		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			this.renderTranslationSuggestions();
		}
		this.setActiveList( 'draft' );
	};

	/**
	 * Populate the language filter
	 *
	 * @param {jQuery} $filter Source filter or target filter to fill
	 * @param {String[]} languages Array of language codes
	 * @param {String} selected Selected language code
	 */
	CXDashboard.prototype.populateLanguageFilter = function ( $filter, languages, selected ) {
		var i, label, $options = [];

		$filter.empty();

		if ( $filter.is( '.translation-source-language-filter' ) ) {
			label = mw.msg( 'cx-translation-filter-from-any-language' );
		} else {
			label = mw.msg( 'cx-translation-filter-to-any-language' );
		}
		$options.push( $( '<option>' )
			.text( label )
			.attr( 'value', '' )
		);

		for ( i = 0; i < languages.length; i++ ) {
			$options.push( $( '<option>' )
				// Todo: use translated language name
				.text( $.uls.data.getAutonym( languages[ i ] ) )
				.prop( 'selected', selected === languages[ i ] )
				.attr( 'value', languages[ i ] )
			);
		}
		$filter.append( $options ).show();
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
		var $header, i, items, $links = [];

		$header = $( '<div>' )
			.addClass( 'cx-sidebar__title' )
			.text( mw.msg( 'cx-dashboard-sidebar-title' ) );

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
			.append( $header, $links );
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
				.addClass( 'cx-filter cx-suggestions mw-ui-input' )
				.text( mw.msg( 'cx-translation-filter-suggested-translations' ) ) );
		}

		$filterTabs.push( $( '<span>' )
			.addClass( 'cx-filter cx-filter--draft cx-filter--selected mw-ui-input' )
			.text( mw.msg( 'cx-translation-filter-draft-translations' ) ) );

		$filterTabs.push( $( '<span>' )
			.addClass( 'cx-filter cx-filter--published mw-ui-input' )
			.text( mw.msg( 'cx-translation-filter-published-translations' ) ) );

		this.$listHeader = $( '<div>' ).addClass( 'translation-filter' );
		this.$newTranslationButton = $( '<button>' )
			.addClass( 'cx-cta__new-translation mw-ui-button mw-ui-constructive' )
			.text( mw.msg( 'cx-create-new-translation' ) );
		this.$cta = $( '<div>' )
			.addClass( 'cx-cta' )
			.append( this.$newTranslationButton );

		this.$filter = $( '<span>' )
			.addClass( 'cx-filters' )
			.append( $filterTabs );

		this.$sourceLanguageFilter = $( '<select>' ).addClass( 'translation-source-language-filter' );
		this.$targetLanguageFilter = $( '<select>' ).addClass( 'translation-target-language-filter' );
		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-source-container' )
			.append(
				this.$sourceLanguageFilter,
				$( '<div>' )
				.addClass( 'translation-language-select-arrow' )
			);

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-target-container' )
			.append(
				this.$targetLanguageFilter,
				$( '<div>' ).addClass( 'translation-language-select-arrow' )
			);

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
		$.each( this.lists, function ( name, list ) {
			if ( name === type ) {
				list.show();
				list.getLanguages().done( function ( languages ) {
					self.populateLanguageFilter( self.$sourceLanguageFilter, languages, list.filters.sourceLanguage );
					self.populateLanguageFilter( self.$targetLanguageFilter, languages, list.filters.targetLanguage );
				} );
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
			} else if ( $filter.is( '.cx-suggestions' ) ) {
				self.setActiveList( 'suggestions' );
			}
		} );

		this.$sourceLanguageFilter.on( 'change', function () {
			var code = $( this ).val();

			setFilter( 'sourceLanguage', code );
		} );

		this.$targetLanguageFilter.on( 'change', function () {
			var code = $( this ).val();

			setFilter( 'targetLanguage', code );
		} );

		this.initSourceSelector();
		// Scroll handler
		$( window ).scroll( $.throttle( 250, $.proxy( this.scroll, this ) ) );
	};

	CXDashboard.prototype.setFilter = function ( type, value ) {
		var list = this.lists[ this.activeList ];
		list.filters[ type ] = value;
		list.applyFilters( list.filters );
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
		var scrollTop = $( window ).scrollTop(),
			offsetTop = this.$dashboard.offset().top;

		if ( scrollTop > offsetTop ) {
			this.$sidebar.addClass( 'sticky' );
		} else if ( scrollTop <= offsetTop ) {
			this.$sidebar.removeClass( 'sticky' );
		}
	};

	$.fn.cxDashboard = function ( siteMapper, options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxdashboard' );

			if ( !data ) {
				$this.data( 'cx', ( data = new CXDashboard( this, siteMapper, options ) ) );
			}

			if ( typeof options === 'string' ) {
				data[ options ].call( $this );
			}
		} );
	};

	$.fn.cxDashboard.defaults = {};

	// Set the global siteMapper for code which we cannot inject it
	mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

	$( function () {
		$( 'body' ).cxDashboard( mw.cx.siteMapper );
	} );
}( jQuery, mediaWiki ) );
