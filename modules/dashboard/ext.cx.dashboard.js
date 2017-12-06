/*!
 * ContentTranslation extension - Dashboard.
 *
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
	 * @param {mw.cx.SiteMapper} siteMapper
	 */
	function CXDashboard( element, siteMapper ) {
		this.$container = $( element );
		this.siteMapper = siteMapper;

		this.$header = null;
		this.$sidebar = null;
		this.translator = null;
		this.$publishedTranslationsButton = null;
		this.lists = {};
		this.$translationListContainer = null;
		this.newTranslationButton = null;
		this.$listHeader = null;
		this.$sourcePageSelector = null;

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

	CXDashboard.prototype.init = function () {
		var self = this;

		// 'all' could be valid language code, so we use extension mechanism and go with 'x-all'
		$.uls.data.addLanguage( 'x-all', {
			script: 'Latn',
			regions: [ 'WW' ],
			autonym: mw.msg( 'cx-translation-filter-uls-all-languages' )
		} );

		// Render the main components
		this.render();

		// Get acceptable source/target language pairs
		this.siteMapper.getLanguagePairs().then( function ( data ) {
			// We store valid source and target languages as "static" variables of LanguageFilter
			mw.cx.ui.LanguageFilter.sourceLanguages = data.sourceLanguages;
			mw.cx.ui.LanguageFilter.targetLanguages = data.targetLanguages;

			self.setDefaultLanguages();

			self.initLists();
			self.listen();

			mw.hook( 'mw.cx.dashboard.ready' ).fire();
		} ).fail( function () {
			mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
		} );
	};

	// Find valid source and target language pair and store them in local storage
	CXDashboard.prototype.setDefaultLanguages = function () {
		var validDefaultLanguagePair = this.findValidDefaultLanguagePair();

		mw.storage.set( 'cxSourceLanguage', validDefaultLanguagePair.sourceLanguage );
		mw.storage.set( 'cxTargetLanguage', validDefaultLanguagePair.targetLanguage );
	};

	/**
	 * Find valid source and target language pair, with different source and target language
	 *
	 * @return {Object} languages Valid and different source and target languages
	 */
	CXDashboard.prototype.findValidDefaultLanguagePair = function () {
		var sourceLanguage, targetLanguage, sourceLanguages, targetLanguages, currentLang,
			commonLanguages, i, length,
			query = new mw.Uri().query;
		sourceLanguages = mw.cx.ui.LanguageFilter.sourceLanguages;
		targetLanguages = mw.cx.ui.LanguageFilter.targetLanguages;

		sourceLanguage = query.from || mw.storage.get( 'cxSourceLanguage' );
		targetLanguage = query.to || mw.storage.get( 'cxTargetLanguage' ) || mw.config.get( 'wgContentLanguage' );

		commonLanguages = mw.uls.getFrequentLanguageList().filter( function ( n ) {
			return sourceLanguages.indexOf( n ) !== -1;
		} );

		if ( sourceLanguages.indexOf( sourceLanguage ) < 0 || sourceLanguage === targetLanguage ) {
			for ( i = 0, length = commonLanguages.length; i < length; i++ ) {
				currentLang = commonLanguages[ i ];
				if ( currentLang !== targetLanguage && sourceLanguages.indexOf( currentLang ) !== -1 ) {
					sourceLanguage = currentLang;
					break;
				}
			}
		}

		if ( targetLanguages.indexOf( targetLanguage ) < 0 || sourceLanguage === targetLanguage ) {
			for ( i = 0, length = commonLanguages.length; i < length; i++ ) {
				currentLang = commonLanguages[ i ];
				if ( currentLang !== sourceLanguage && targetLanguages.indexOf( currentLang ) !== -1 ) {
					targetLanguage = currentLang;
					break;
				}
			}
		}

		return {
			sourceLanguage: sourceLanguage,
			targetLanguage: targetLanguage
		};
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

	/**
	 * Populates various UI components with data in the given translation suggestions.
	 */
	CXDashboard.prototype.renderTranslationSuggestions = function () {
		this.lists.suggestions = new mw.cx.CXSuggestionList(
			this.$translationListContainer,
			this.siteMapper
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
		this.$publishedTranslationsButton = this.translator.$lastMonthButton;

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
		var size,
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

		this.newTranslationButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-create-new-translation' ),
			icon: 'add',
			flags: [
				'primary',
				'progressive'
			]
		} );

		this.$listHeader = $( '<div>' ).addClass( 'translation-filter' );
		this.$listHeader.append(
			this.newTranslationButton.$element,
			this.filter.$element
		);

		this.$sourcePageSelector = $( '<div>' )
			.addClass( 'cx-source-page-selector' );

		return $( '<div>' )
			.addClass( 'cx-translationlist-container' )
			.append( this.$listHeader, this.$sourcePageSelector );
	};

	CXDashboard.prototype.setActiveList = function ( type ) {
		this.activeList = type;
		this.filter.selectItemByData( type );

		$.each( this.lists, function ( name, list ) {
			if ( name === type ) {
				list.show();
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

		this.$publishedTranslationsButton.on( 'click', function () {
			self.filter.selectItemByData( 'published' );
		} );

		this.initSourceSelector();
		this.newTranslationButton.$element.on( 'click', function () {
			self.$listHeader.hide();
			$( window ).scrollTop( 0 );
		} );
		// Resize handler
		$( window ).resize( $.throttle( 250, this.resize.bind( this ) ) );
	};

	CXDashboard.prototype.setFilter = function ( type, value ) {
		var list = this.lists[ this.activeList ];

		list.filters[ type ] = value;
		list.applyFilters( list.filters );
	};

	CXDashboard.prototype.initSourceSelector = function () {
		var query,
			sourcePageSelectorOptions = {};

		query = new mw.Uri().query;
		sourcePageSelectorOptions.sourceLanguage = query.from;
		sourcePageSelectorOptions.targetLanguage = query.to;
		sourcePageSelectorOptions.sourceTitle = query.page;
		sourcePageSelectorOptions.targetTitle = query.targettitle;
		sourcePageSelectorOptions.$container = this.$sourcePageSelector;
		this.newTranslationButton.$element.cxSourcePageSelector( sourcePageSelectorOptions );
		// Check for conditions that pre-open source page selector
		if ( query.from && query.to && query.page ) {
			this.$listHeader.hide();
			$( window ).scrollTop( 0 );
		}

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.page, query.to );
		}
	};

	CXDashboard.prototype.resize = function () {
		var filterItems = this.filter.getItems(),
			narrowScreenSize = document.documentElement.clientWidth < this.narrowLimit,
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
	};

	$( function () {
		var dashboard;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );
		dashboard = new CXDashboard( document.body, mw.cx.siteMapper );
		dashboard.init();
	} );
}( jQuery, mediaWiki ) );
