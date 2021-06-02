/*!
 * ContentTranslation extension - Dashboard.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function () {
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

		this.$sidebar = null;
		this.translator = null;
		this.$publishedTranslationsButton = null;
		this.lists = {};
		this.infobar = null;
		this.$translationListContainer = null;
		this.newTranslationButton = null;
		this.filter = null;
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
					icon: 'lightbulb'
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
		// Render the main components
		this.render();

		// Get acceptable source/target language pairs
		this.siteMapper.getLanguagePairs().then(
			function ( data ) {
				// We store valid source and target languages as "static" variables of LanguageFilter
				mw.cx.ui.LanguageFilter.static.sourceLanguages = data.sourceLanguages;
				mw.cx.ui.LanguageFilter.static.targetLanguages = data.targetLanguages;

				this.setDefaultLanguages();

				this.initLists();
				this.listen();

				mw.hook( 'mw.cx.dashboard.ready' ).fire();
			}.bind( this ),
			function () {
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
			}
		);
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
		var sourceLanguage, targetLanguage, currentLang,
			commonLanguages, i, length,
			query = new mw.Uri().query,
			sourceLanguages = mw.cx.ui.LanguageFilter.static.sourceLanguages,
			targetLanguages = mw.cx.ui.LanguageFilter.static.targetLanguages;

		sourceLanguage = query.from || mw.storage.get( 'cxSourceLanguage' );
		targetLanguage = query.to || mw.storage.get( 'cxTargetLanguage' );

		// If query.to and local storage have no target language code,
		// or language code is invalid, fall back to content language as target.
		if ( targetLanguages.indexOf( targetLanguage ) < 0 ) {
			targetLanguage = mw.config.get( 'wgContentLanguage' );
		}

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

		// If wgContentLanguage has invalid language code for any reason, we try to find
		// some valid language from the list of common languages.
		if ( targetLanguages.indexOf( targetLanguage ) < 0 || sourceLanguage === targetLanguage ) {
			for ( i = 0, length = commonLanguages.length; i < length; i++ ) {
				currentLang = commonLanguages[ i ];
				if ( currentLang !== sourceLanguage && targetLanguages.indexOf( currentLang ) !== -1 ) {
					targetLanguage = currentLang;
					break;
				}
			}
		}

		// If the list of frequent languages does not have any valid language code different from
		// content language, we fall back to Spanish and English. Inability to find a suitable
		// language for source is most likely when target language is English, so we use most
		// common source language when translating to English. But, just in case list of frequent
		// languages only has code for content language, which is non-English, fall back to English
		// as source language.
		// Also, if local storage data is corrupted, either due to bug previously existing
		// in the code, or some manual change of local storage data, apply the same principle.
		// See T202286#4530740
		if ( sourceLanguages.indexOf( sourceLanguage ) < 0 || sourceLanguage === targetLanguage ) {
			if ( targetLanguage === 'en' ) {
				sourceLanguage = 'es';
			} else {
				sourceLanguage = 'en';
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
		var locationHash = location.hash.substring( 1 ),
			lists = [ 'draft', 'published' ];

		this.renderTranslations();
		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			this.renderTranslationSuggestions();
			lists.push( 'suggestions' );
		}

		if ( lists.indexOf( locationHash ) > -1 ) {
			this.setActiveList( locationHash );
		} else {
			this.setActiveList( 'draft' );
			this.lists.draft.once( 'noDrafts', this.onNoDrafts.bind( this ) );
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
			this.siteMapper,
			'draft'
		);
		this.lists.published = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			this.siteMapper,
			'published'
		);
	};

	CXDashboard.prototype.getSidebarItems = function () {
		return [
			{
				icon: 'infoFilled',
				classes: [ 'cx-dashboard-sidebar__link', 'cx-dashboard-sidebar__link--information' ],
				href: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation',
				label: mw.msg( 'cx-dashboard-sidebar-information' )
			},
			{
				icon: 'chart',
				classes: [ 'cx-dashboard-sidebar__link', 'cx-dashboard-sidebar__link--stats' ],
				href: mw.util.getUrl( 'Special:ContentTranslationStats' ),
				label: mw.msg( 'cx-dashboard-sidebar-stats' )
			},
			{
				icon: 'speechBubbles',
				classes: [ 'cx-dashboard-sidebar__link', 'cx-dashboard-sidebar__link--feedback' ],
				href: 'https://www.mediawiki.org/wiki/Talk:Content_translation',
				label: mw.msg( 'cx-dashboard-sidebar-feedback' )
			}
		];
	};

	CXDashboard.prototype.buildSidebar = function () {
		var $help, i, item, items, $links = [];

		this.translator = new mw.cx.widgets.CXTranslator();
		this.$publishedTranslationsButton = this.translator.$lastMonthButton;

		$help = $( '<div>' )
			.addClass( 'cx-dashboard-sidebar__help' );

		items = this.getSidebarItems();
		$links = $( '<ul>' );
		for ( i = 0; i < items.length; i++ ) {
			item = items[ i ];
			$links.append(
				// eslint-disable-next-line mediawiki/class-doc
				$( '<li>' ).append( new OO.ui.ButtonWidget( {
					icon: item.icon,
					framed: false,
					classes: item.classes,
					flags: [ 'progressive' ],
					label: item.label,
					href: item.href,
					target: '_blank'
				} ).$element )
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
		this.infobar = new mw.cx.ui.Infobar( this.config );

		this.$translationListContainer = this.buildTranslationList();
		this.$sidebar = $( '<div>' )
			.addClass( 'cx-dashboard-sidebar' )
			.append( this.buildSidebar() );

		this.$dashboard = $( '<main>' )
			.addClass( 'cx-dashboard' )
			.append( this.$translationListContainer, this.$sidebar );

		this.$container.append(
			this.infobar.$element,
			this.$dashboard
		);
	};

	CXDashboard.prototype.buildTranslationList = function () {
		var size, name, props, $translationList,
			filterButtons = [];

		// document.documentElement.clientWidth performs faster than $( window ).width()
		this.isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

		size = this.isNarrowScreenSize ? 'narrow' : 'wide';

		for ( name in this.filterLabels ) {
			props = this.filterLabels[ name ];

			filterButtons.push( new OO.ui.ButtonOptionWidget( {
				data: name,
				label: props[ size ].label,
				icon: props[ size ].icon
			} ) );
		}

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

		$translationList = $( '<div>' )
			.addClass( 'cx-translationlist-container' )
			.append( this.$listHeader, this.$sourcePageSelector );

		return $translationList;
	};

	CXDashboard.prototype.setActiveList = function ( type ) {
		var listName, list;

		this.activeList = type;
		this.filter.selectItemByData( type );

		for ( listName in this.lists ) {
			list = this.lists[ listName ];

			if ( listName === type ) {
				list.show();
				location.hash = type;
			} else {
				list.hide();
			}
		}
	};

	CXDashboard.prototype.listen = function () {
		this.filter.connect( this, { select: function ( item ) {
			this.setActiveList( item.getData() );
		} } );

		this.$publishedTranslationsButton.on( 'click', function () {
			this.filter.selectItemByData( 'published' );
		}.bind( this ) );

		this.initSourceSelector();
		this.newTranslationButton.connect( this, {
			click: this.hideListHeader
		} );
		// Resize handler
		$( window ).on( 'resize', OO.ui.throttle( this.resize.bind( this ), 250 ) );
	};

	/**
	 * Handler called when user has no draft translations
	 */
	CXDashboard.prototype.onNoDrafts = function () {
		if ( mw.config.get( 'wgContentTranslationEnableSuggestions' ) ) {
			this.setActiveList( 'suggestions' );
		}
	};

	CXDashboard.prototype.hideListHeader = function () {
		this.$listHeader.hide();
		window.scrollTo( window.pageXOffset, 0 ); // Equivalent to $( window ).scrollTop( 0 )
	};

	CXDashboard.prototype.initSourceSelector = function () {
		var query = new mw.Uri().query;

		// eslint-disable-next-line no-new
		new mw.cx.SourcePageSelector( this.newTranslationButton, {
			siteMapper: this.siteMapper,
			sourceLanguage: query.from,
			targetLanguage: query.to,
			sourceTitle: query.page,
			targetTitle: query.targettitle,
			$container: this.$sourcePageSelector
		} );
		// Check for conditions that pre-open source page selector
		if ( query.to && ( ( query.from && query.page ) || query.targettitle ) ) {
			this.hideListHeader();
		}

		if ( query.campaign ) {
			mw.hook( 'mw.cx.cta.accept' ).fire( query.campaign, query.from, query.page, query.to );
		}
	};

	CXDashboard.prototype.resize = function () {
		var filterItems = this.filter.getItems(),
			narrowScreenSize = document.documentElement.clientWidth < this.narrowLimit,
			size = narrowScreenSize ? 'narrow' : 'wide';

		this.translator.resize();

		// Exit early if screen size stays above/under narrow screen size limit
		if ( this.isNarrowScreenSize === narrowScreenSize ) {
			return;
		}

		// Change filter labels to icons and vice-versa
		filterItems.forEach( function ( filter ) {
			var data = filter.getData(),
				label = this.filterLabels[ data ][ size ].label,
				icon = this.filterLabels[ data ][ size ].icon;

			filter.setIcon( icon );
			filter.setLabel( label );
		}, this );
		this.isNarrowScreenSize = narrowScreenSize;
	};

	$( function () {
		var dashboard;

		// Set the global siteMapper for code which we cannot inject it
		mw.cx.siteMapper = new mw.cx.SiteMapper();
		dashboard = new CXDashboard( document.body, mw.cx.siteMapper );
		dashboard.init();
	} );
}() );
