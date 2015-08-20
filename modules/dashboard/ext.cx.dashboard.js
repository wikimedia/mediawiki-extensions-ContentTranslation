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
	 * Get all the translations of given user.
	 *
	 * @return {jQuery.Promise}
	 */
	CXDashboard.prototype.getTranslations = function () {
		var api = new mw.Api();

		return api.get( { list: 'contenttranslation' } );
	};

	/**
	 * Initialize the components
	 */
	CXDashboard.prototype.initLists = function () {
		var self = this;

		this.getTranslations().done( function ( response ) {
			self.renderTranslations(
				response.query.contenttranslation.translations
			);
		} );
		// TODO: Get suggestions
	};

	/**
	 * Populate the language filter
	 *
	 * @param {jQuery} $filter Source filter or target filter to fill
	 * @param {String[]} languages Array of language codes
	 */
	CXDashboard.prototype.populateLanguageFilter = function ( $filter, languages ) {
		var i;

		for ( i = 0; i < languages.length; i++ ) {
			$filter.append( $( '<option>' )
				// Todo: use translated language name
				.text( $.uls.data.getAutonym( languages[ i ] ) )
				.attr( 'value', languages[ i ] )
			);
		}
	};

	/**
	 * Populates various UI components with data in the given translations.
	 */
	CXDashboard.prototype.renderTranslations = function ( translations ) {
		var sourceLanguages, targetLanguages;

		// Remove unnecessary object wrapping to get plain list of objects
		translations = $.map( translations, function ( e ) {
			return e.translation;
		} );

		this.translations = translations;
		this.translationList = new mw.cx.CXTranslationList(
			this.$translationListContainer,
			this.translations,
			this.siteMapper
		);
		this.translationList.init();
		sourceLanguages = $.map( translations, function ( e ) {
			return e.sourceLanguage;
		} );

		this.populateLanguageFilter( this.$sourceLanguageFilter, mw.cx.unique( sourceLanguages ) );

		targetLanguages = $.map( translations, function ( e ) {
			return e.targetLanguage;
		} );
		this.populateLanguageFilter( this.$targetLanguageFilter, mw.cx.unique( targetLanguages ) );
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

	/**
	 * Creates a jQuery select element from given options.
	 * @param {string} classes
	 * @param {Object} options
	 * @return {jQuery}
	 */
	function createSelect( classes, options ) {
		var i, value, key,
			keys = Object.keys( options ),
			$select = $( '<select>' ).addClass( classes );

		for ( i = 0; i < keys.length; i++ ) {
			value = keys[ i ];
			key = options[ value ];

			$select.append( $( '<option>' ).text( key ).attr( 'value', value ) );
		}

		return $select;
	}

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
		var $sourceLanguageContainer, $targetLanguageContainer;

		this.$listHeader = $( '<div>' )
			.addClass( 'translation-filter' );

		this.$newTranslationButton = $( '<button>' )
			.addClass( 'cx-cta__new-translation mw-ui-button mw-ui-constructive' )
			.text( mw.msg( 'cx-create-new-translation' ) );
		this.$cta = $( '<div>' )
			.addClass( 'cx-cta' )
			.append( this.$newTranslationButton );

		this.$filter = $( '<span>' )
			.addClass( 'cx-statusfilter' )
			.append(
				$( '<span>' )
				.addClass( 'cx-status cx-status--draft cx-status--selected mw-ui-input' )
				.text( mw.msg( 'cx-translation-filter-draft-translations' ) ),
				$( '<span>' )
				.addClass( 'cx-status cx-status--published mw-ui-input' )
				.text( mw.msg( 'cx-translation-filter-published-translations' ) )
			);

		this.$sourceLanguageFilter = createSelect(
			'translation-source-language-filter', {
				'': mw.msg( 'cx-translation-filter-from-any-language' )
			}
		);

		this.$targetLanguageFilter = createSelect(
			'translation-target-language-filter', {
				'': mw.msg( 'cx-translation-filter-to-any-language' )
			}
		);

		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-source-container' )
			.append(
				this.$sourceLanguageFilter,
				$( '<div>' )
				.addClass( 'translation-language-select-content' )
				.text( mw.msg( 'cx-translation-filter-from-any-language' ) ),
				$( '<div>' )
				.addClass( 'translation-language-select-arrow' )
			);

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'translation-language-target-container' )
			.append(
				this.$targetLanguageFilter,
				$( '<div>' )
				.addClass( 'translation-language-select-content' )
				.text( mw.msg( 'cx-translation-filter-to-any-language' ) ),
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

		this.$filter.click( '.cx-status', function ( e ) {
			var $filter = $( e.target );

			self.$filter
				.find( '.cx-status--selected' )
				.removeClass( 'cx-status--selected' );

			$filter.addClass( 'cx-status--selected' );

			if ( $filter.is( '.cx-status--draft' ) ) {
				setFilter( 'status', 'draft' );
			} else if ( $filter.is( '.cx-status--published' ) ) {
				setFilter( 'status', 'published' );
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
		this.translationList.filters[ type ] = value;
		this.translationList.applyFilters( this.translationList.filters );
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
