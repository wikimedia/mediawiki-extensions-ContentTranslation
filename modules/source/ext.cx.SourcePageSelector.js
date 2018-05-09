/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * SourcePageSelector
	 *
	 * @class
 	 * @param {mw.cx.SiteMapper} siteMapper
	 * @param {Object} options
	 * @cfg {OO.ui.ButtonWidget} triggerButton Button that triggers opening of source page selector.
	 * @cfg {jQuery} $container Container for source page selector.
	 */
	function SourcePageSelector( siteMapper, options ) {
		this.options = $.extend( {}, options );
		this.siteMapper = siteMapper;

		this.triggerButton = options.triggerButton;
		this.$container = options.$container;

		this.pageSelector = null;
		this.selectedSourcePage = null;
		this.languageFilter = null;
		this.discardButton = null;
		this.$noResultsMessage = null;
		this.overlay = null;
		this.init();
	}

	/**
	 * Initialize the plugin.
	 */
	SourcePageSelector.prototype.init = function () {
		this.render();
		this.prefill();
		this.pageSelector.populateSuggestions();
		this.listen();
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
		if ( this.options.sourceLanguage &&
			this.options.targetLanguage &&
			this.options.sourceTitle
		) {
			this.pageSelector.lookupChooseFirstItem = true;
			this.show();
		}
	};

	/**
	 * Listen for events.
	 */
	SourcePageSelector.prototype.listen = function () {
		var proxied, self = this;
		// Open or close the dialog when clicking the trigger link.
		// The dialog will be uninitialized until the first click.
		this.triggerButton.connect( this, {
			click: this.show
		} );

		this.pageSelector.connect( this, { noResults: 'updateNoResultsMessage' } );

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
			self.selectedSourcePage.focusStartTranslationButton();
		};

		this.$container.on( 'keydown', function ( e ) {
			if ( e.keyCode !== OO.ui.Keys.ESCAPE ) {
				return;
			}

			self.discardDialog();
		} );

		proxied = this.pageSelector.lookupMenu.onKeyDownHandler;
		this.pageSelector.lookupMenu.onKeyDownHandler = function ( e ) {
			if ( e.keyCode === OO.ui.Keys.TAB || e.keyCode === OO.ui.Keys.ESCAPE ) {
				return;
			}

			return proxied.apply( this, arguments );
		};
	};

	/**
	 * Updates the message displayed when there are no search results
	 */
	SourcePageSelector.prototype.updateNoResultsMessage = function () {
		var message = mw.msg( 'cx-source-page-selector-no-search-results',
			this.pageSelector.getQueryValue(),
			$.uls.data.getAutonym( this.languageFilter.getSourceLanguage() )
		);

		this.$noResultsMessage.text( message );
	};

	/**
	 * Handles source language change.
	 *
	 * @param {string} language Language code.
	 */
	SourcePageSelector.prototype.sourceLanguageChangeHandler = function ( language ) {
		this.pageSelector.setLanguage( language );

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

		this.overlay.show();
		this.pageSelector.populateLookupMenu();
		this.pageSelector.lookupMenu.toggle( true );
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
		var $searchResults,
			$recentEditsMessage;

		this.$container.hide(); // Starts as hidden, shown on this.triggerButton click

		$recentEditsMessage = $( '<div>' )
			.addClass( 'cx-source-page-selector__no-suggestions-message' )
			.text( mw.msg( 'cx-source-page-selector-no-suggestions' ) );

		this.$noResultsMessage = $( '<div>' )
			.addClass( 'cx-source-page-selector__search-message' );

		$searchResults = $( '<div>' )
			.addClass( 'cx-source-page-selector__search-results' )
			.append( $recentEditsMessage, this.$noResultsMessage );

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
			allowSuggestionsWhenEmpty: true,
			showRedirectTargets: true,
			$overlay: $searchResults,
			$container: $searchResults,
			label: this.languageFilter.$element.add( this.discardButton.$element )
		} );

		this.selectedSourcePage = new mw.cx.SelectedSourcePage( this.siteMapper, {
			onDiscard: this.discardDialog.bind( this )
		} );

		this.$container.append(
			this.pageSelector.$element,
			$searchResults,
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
					'cxsourcepageselector', ( data = new SourcePageSelector( mw.cx.siteMapper, options ) )
				);
			}
		} );
	};
}( jQuery, mediaWiki ) );
