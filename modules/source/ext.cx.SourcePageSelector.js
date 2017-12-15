/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * SourcePageSelector
	 *
	 * @class
 	 * @param {Element} trigger
 	 * @param {mw.cx.SiteMapper} siteMapper
 	 * @param {Object} options
	 */
	function SourcePageSelector( trigger, siteMapper, options ) {
		this.$trigger = $( trigger );
		this.options = $.extend( {}, options );
		this.siteMapper = siteMapper;

		this.$container = options.$container;

		this.pageSelector = null;
		this.selectedSourcePage = null;
		this.languageFilter = null;
		this.discardButton = null;
		this.$searchResults = null;
		this.$searchResultsMessage = null;
		this.overlay = null;
		this.init();
	}

	/**
	 * Initialize the plugin.
	 */
	SourcePageSelector.prototype.init = function () {
		var self = this;

		self.render();
		self.prefill();
		self.populateRecentEdits();
		self.listen();
	};

	/**
	 * Prefill the selector if values are passed as options.
	 */
	SourcePageSelector.prototype.prefill = function () {
		if ( this.options.sourceLanguage ) {
			this.languageFilter.setSourceLanguage( this.options.sourceLanguage );
		}

		if ( this.options.targetLanguage ) {
			this.languageFilter.setTargetLanguage( this.options.targetLanguage );
		}

		if ( this.options.sourceTitle ) {
			this.selectedSourcePage.setSourceTitle( this.options.sourceTitle );
			this.pageSelector.setValue( this.options.sourceTitle );
		}

		if ( this.options.targetTitle ) {
			this.selectedSourcePage.setTargetTitle( this.options.targetTitle );
		}

		// If all of the values are already present, show the dialog and initiate a validation.
		if ( this.options.sourceLanguage && this.options.targetLanguage &&
			this.options.sourceTitle
		) {
			this.show();

			this.$searchResultsMessage.text(
				mw.msg( 'cx-source-page-selector-no-search-results',
					this.pageSelector.getQueryValue(),
					$.uls.data.getAutonym( this.languageFilter.getSourceLanguage() )
				)
			);
		}
	};

	/**
	 * Uses page details loaded from server to register search result data for case
	 * when user does not provide any input into page selector search field
	 */
	SourcePageSelector.prototype.populateRecentEdits = function () {
		var self = this;

		this.getPageDetails().done( function ( data ) {
			var pages = OO.getProp( data, 'query', 'pages' );

			self.pageSelector.requestCache[ '' ] = {
				pages: pages || {}
			};
			self.pageSelector.populateLookupMenu();
		} ).fail( function ( error ) {
			mw.log( 'Error getting page data. ' + error );
		} );
	};

	/**
	 * Get the thumbnail image, description and langlinks count for articles with the given titles.
	 *
	 * @return {jQuery.Promise}
	 */
	SourcePageSelector.prototype.getPageDetails = function () {
		var self = this;

		return this.getRecentlyEditedArticleTitles().then( function ( titles ) {
			return self.siteMapper.getApi( self.languageFilter.getSourceLanguage() ).get( {
				action: 'query',
				titles: titles,
				prop: [ 'pageimages', 'pageterms', 'langlinks', 'langlinkscount' ],
				piprop: 'thumbnail',
				pilimit: 10,
				pithumbsize: 80,
				lllang: self.targetLanguage,
				wbptterms: [ 'description' ]
			} );
		}, function ( error ) {
			mw.log( 'Error getting recent edit titles. ' + error );
		} );
	};

	/**
	 * Gets recently edited articles by user (using usercontribs API)
	 *
	 * @return {jQuery.Promise}
	 */
	SourcePageSelector.prototype.getRecentlyEditedArticleTitles = function () {
		var params, userName = mw.config.get( 'wgUserName' ),
			api = this.siteMapper.getApi( this.languageFilter.getSourceLanguage() );

		params = {
			action: 'query',
			list: [ 'usercontribs' ],
			ucuser: userName,
			uclimit: 5,
			ucnamespace: mw.config.get( 'wgNamespaceIds' )[ '' ], // Main namespace
			ucprop: 'title'
		};

		return api.get( params ).then( function ( data ) {
			var articles = OO.getProp( data, 'query', 'usercontribs' );

			if ( !articles ) {
				return $.Deferred().reject( 'No recent user contributions' ).promise();
			}

			return articles.map( function ( article ) {
				return article.title;
			} );
		}, function ( error ) {
			mw.log( 'Error getting recent edits for ' + userName + '. ' + error );
		} );
	};

	/**
	 * Listen for events.
	 */
	SourcePageSelector.prototype.listen = function () {
		var self = this;
		// Open or close the dialog when clicking the trigger link.
		// The dialog will be unitialized until the first click.
		this.$trigger.click( this.show.bind( this ) );

		this.pageSelector.on( 'change', function () {
			self.$searchResultsMessage.text(
				mw.msg( 'cx-source-page-selector-no-search-results',
					self.pageSelector.getQueryValue(),
					$.uls.data.getAutonym( self.languageFilter.getSourceLanguage() )
				)
			);
		} );

		this.languageFilter.on( 'resize', this.pageSelector.positionLabel.bind( this.pageSelector ) );

		this.discardButton.connect( this, { click: this.discardDialog } );
		this.pageSelector.onLookupMenuItemChoose = function ( source ) {
			self.selectedSourcePage.setSelectedSourcePageData(
				source.getData(),
				source.$label.prop( 'href' ),
				{
					numOfLanguages: source.getNumberOfLanguages(),
					imageUrl: source.imageUrl,
					imageIcon: source.icon,
					sourceLanguage: self.languageFilter.getSourceLanguage(),
					targetLanguage: self.languageFilter.getTargetLanguage()
				}
			);
			self.$container.addClass( 'cx-source-page-selector--selected' );
		};
	};

	/**
	 * Handles source language change.
	 *
	 * @param {string} language Language code.
	 */
	SourcePageSelector.prototype.sourceLanguageChangeHandler = function ( language ) {
		this.pageSelector.setLanguage( language );

		this.pageSelector.closeLookupMenu();
		this.populateRecentEdits();
		this.pageSelector.toggle( true );
	};

	/**
	 * Handles target language change.
	 *
	 * @param {string} language Language code.
	 */
	SourcePageSelector.prototype.targetLanguageChangeHandler = function ( language ) {
		this.pageSelector.setTargetLanguage( language );
	};

	/**
	 * Show the SourcePageSelector.
	 */
	SourcePageSelector.prototype.show = function () {
		if ( !this.overlay ) {
			this.overlay = new mw.cx.widgets.Overlay( 'body', {
				closeOnClick: this.discardDialog.bind( this )
			} );
		}

		this.pageSelector.toggle( true );
		this.overlay.show();
		this.$container.slideDown( 'fast' );
		this.pageSelector.focus();
		this.pageSelector.positionLabel();
	};

	SourcePageSelector.prototype.discardDialog = function () {
		this.overlay.hide();
		$( '.translation-filter' ).slideDown( 'fast' );
		this.$container.removeClass( 'cx-source-page-selector--selected' ).toggle();

		this.pageSelector.setValue( '' );
	};

	SourcePageSelector.prototype.render = function () {
		var $searchMessage,
			$recentEditsMessageContainer,
			$recentEditsMessage,
			$recentEditsHeader;

		this.$container.hide(); // Starts as hidden, shown on this.$trigger button click

		this.$searchResultsMessage = $( '<span>' )
			.text( mw.msg( 'cx-source-page-selector-no-search-results' ) );
		$recentEditsMessage = $( '<span>' )
			.text( mw.msg( 'cx-source-page-selector-recent-edits-no-results' ) );

		$searchMessage = $( '<div>' )
			.addClass( 'cx-source-page-selector__search-message' )
			.append( this.$searchResultsMessage );
		$recentEditsMessageContainer = $( '<div>' )
			.addClass( 'cx-source-page-selector__recent-edits-message' )
			.append( $recentEditsMessage );
		$recentEditsHeader = $( '<div>' )
			.addClass( 'cx-source-page-selector__recent-edits-header' )
			.text( mw.msg( 'cx-source-page-selector-recent-edits-header' ) );
		this.$searchResults = $( '<div>' )
			.addClass( 'cx-source-page-selector__search-results' )
			.append( $recentEditsHeader, $recentEditsMessageContainer, $searchMessage );

		this.languageFilter = new mw.cx.ui.LanguageFilter( {
			onSourceLanguageChange: this.sourceLanguageChangeHandler.bind( this ),
			onTargetLanguageChange: this.targetLanguageChangeHandler.bind( this ),
			updateLocalStorage: true
		} );

		this.discardButton = new OO.ui.ButtonWidget( {
			framed: false,
			icon: 'close',
			classes: [ 'cx-source-page-selector__discard' ]
		} );

		this.pageSelector = new mw.cx.ui.PageSelectorWidget( {
			classes: [ 'cx-source-page-selector__page-title' ],
			language: this.languageFilter.getSourceLanguage(),
			targetLanguage: this.languageFilter.getTargetLanguage(),
			siteMapper: this.siteMapper,
			value: this.options.sourceTitle,
			validateTitle: false,
			placeholder: mw.msg( 'cx-source-page-selector-input-placeholder' ),
			showRedirectTargets: true,
			$overlay: this.$searchResults,
			$container: this.$searchResults,
			label: this.languageFilter.$element.add( this.discardButton.$element )
		} );

		this.selectedSourcePage = new mw.cx.SelectedSourcePage( this.siteMapper, {
			onDiscard: this.discardDialog.bind( this )
		} );

		this.$container.append(
			this.pageSelector.$element,
			this.$searchResults,
			this.selectedSourcePage.$element
		);
	};

	mw.cx.SourcePageSelector = SourcePageSelector;

	/**
	 * CXEntryPoint Plugin
	 * @param {Object} options
	 * @return {jQuery}
	 */
	$.fn.cxSourcePageSelector = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxsourcepageselector' );

			if ( !data ) {
				$this.data(
					'cxsourcepageselector', ( data = new SourcePageSelector( this, mw.cx.siteMapper, options ) )
				);
			}
		} );
	};
}( jQuery, mediaWiki ) );
