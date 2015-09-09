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
		this.translationList = null;
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
		this.renderTranslationSuggestions();
	};

	/**
	 * Populate the language filter
	 *
	 * @param {jQuery} $filter Source filter or target filter to fill
	 * @param {String[]} languages Array of language codes
	 */
	CXDashboard.prototype.populateLanguageFilter = function ( $filter, languages ) {
		var i, label;

		$filter.empty();
		// The "any language" label is shown only when there are more than 1 language.
		if ( languages.length > 1 ) {
			if ( $filter.is( '.translation-source-language-filter' ) ) {
				label = mw.msg( 'cx-translation-filter-from-any-language' );
			} else {
				label = mw.msg( 'cx-translation-filter-to-any-language' );
			}
			$filter.append( $( '<option>' )
				.text( label )
				.attr( 'value', '' )
			);
		}
		for ( i = 0; i < languages.length; i++ ) {
			$filter.append( $( '<option>' )
				// Todo: use translated language name
				.text( $.uls.data.getAutonym( languages[ i ] ) )
				.attr( 'value', languages[ i ] )
			);
		}
	};

	/**
	 * Populates various UI components with data in the given translation suggestions.
	 */
	CXDashboard.prototype.renderTranslationSuggestions = function () {
		this.suggestionList = new mw.cx.CXSuggestionList( this.$translationListContainer, this.siteMapper );
		this.suggestionList.init();
	};

	/**
	 * Initiate and render the translation list.
	 * TODO: Refactor this to move some logic to translationlist module
	 */
	CXDashboard.prototype.renderTranslations = function () {
		var self = this;
		this.translationList = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			this.siteMapper
		);
		this.translationList.getTranslations().done( function ( translations ) {
			self.translationList.translations = translations;
			self.translationList.init();
			if ( translations.length ) {
				self.setFilter( 'status', 'draft' );
			}
		} );
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
		var $sourceLanguageContainer, $filterTabs, $targetLanguageContainer;

		$filterTabs = [
			$( '<span>' )
				.addClass( 'cx-filter cx-suggestions mw-ui-input' )
				.text( mw.msg( 'cx-translation-filter-suggested-translations' ) ),
			$( '<span>' )
				.addClass( 'cx-filter cx-filter--draft cx-filter--selected mw-ui-input' )
				.text( mw.msg( 'cx-translation-filter-draft-translations' ) ),
			$( '<span>' )
				.addClass( 'cx-filter cx-filter--published mw-ui-input' )
				.text( mw.msg( 'cx-translation-filter-published-translations' ) )
		];
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

	CXDashboard.prototype.listen = function () {
		var setFilter,
			self = this;

		setFilter = $.proxy( this.setFilter, this );

		this.$filter.click( '.cx-filter', function ( e ) {
			var $filter = $( e.target );

			self.$filter
				.find( '.cx-filter--selected' )
				.removeClass( 'cx-filter--selected' );

			$filter.addClass( 'cx-filter--selected' );

			if ( $filter.is( '.cx-filter--draft' ) ) {
				setFilter( 'status', 'draft' );
			} else if ( $filter.is( '.cx-filter--published' ) ) {
				setFilter( 'status', 'published' );
			} else if ( $filter.is( '.cx-suggestions' ) ) {
				setFilter( 'suggestions', 'all' );
			}
		} );

		this.$sourceLanguageFilter.on( 'change', function () {
			var $selector,
				code = $( this ).val();

			setFilter( 'sourceLanguage', code );

			$selector = self.$sourceLanguageFilter
				.siblings( '.translation-language-select-content' );

			if ( code === '' ) {
				$selector
					.text( mw.msg( 'cx-translation-filter-from-any-language' ) )
					.removeProp( 'lang' )
					.removeProp( 'dir' );
			} else {
				$selector
					.text( $.uls.data.getAutonym( code ) )
					.prop( {
						lang: code,
						dir: $.uls.data.getDir( code )
					} );
			}
		} );

		this.$targetLanguageFilter.on( 'change', function () {
			var $selector,
				code = $( this ).val();

			setFilter( 'targetLanguage', code );

			$selector = self.$targetLanguageFilter
				.siblings( '.translation-language-select-content' );

			if ( code === '' ) {
				$selector
					.text( mw.msg( 'cx-translation-filter-to-any-language' ) )
					.removeProp( 'lang' )
					.removeProp( 'dir' );
			} else {
				$selector
					.text( $.uls.data.getAutonym( code ) )
					.prop( {
						lang: code,
						dir: $.uls.data.getDir( code )
					} );
			}
		} );

		this.initSourceSelector();
		// Scroll handler
		$( window ).scroll( $.throttle( 250, $.proxy( this.scroll, this ) ) );
	};

	CXDashboard.prototype.setFilter = function ( type, value ) {
		if ( type === 'status' ) {
			this.populateLanguageFilter( this.$sourceLanguageFilter, this.translationList.sourceLanguages );
			this.populateLanguageFilter( this.$targetLanguageFilter, this.translationList.targetLanguages );
		}
		if ( type === 'suggestions' ) {
			this.translationList.$translationsList.hide();
			this.suggestionList.$suggestionList.show();
			this.populateLanguageFilter( this.$sourceLanguageFilter, [ this.suggestionList.suggestionFrom ] );
			this.populateLanguageFilter( this.$targetLanguageFilter, [ this.suggestionList.suggestionTo ] );
		} else {
			this.translationList.filters[ type ] = value;
			this.translationList.applyFilters( this.translationList.filters );
			this.translationList.$translationsList.show();
			this.suggestionList.$suggestionList.hide();
		}
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
