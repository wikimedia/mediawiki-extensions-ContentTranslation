/*!
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * CXSourceSelector
	 *
	 * @class
 	 * @param {Element} trigger
 	 * @param {Object} siteMapper
 	 * @param {Object} options
	 */
	function CXSourceSelector( trigger, siteMapper, options ) {
		this.$trigger = $( trigger );
		this.options = $.extend( {}, options );
		this.siteMapper = siteMapper;

		// Boolean property indicating if CXSourceSelector is used as
		// modal dialog or embedded
		this.isEmbedded = !!options.container && options.container instanceof jQuery;
		this.isArticleSelected = false;

		// this.$container is used for both types of CXSourceSelector - embedded and modal dialog
		// Embedded version - $container field gets DOM container passed through options parameter
		// Dialog version - $container fields gets created in renderAsDialog method of this class
		this.$container = this.isEmbedded ? options.container : null;

		// this.sourceLanguages and this.targetLanguages are arrays of language codes retrieved from cx-server
		// Represents all possible source/target language codes
		this.sourceLanguages = [];
		this.targetLanguages = [];
		// this.sourceLanguage and this.targetLanguage are selected source/target languages respectively
		this.sourceLanguage = null;
		this.targetLanguage = null;
		// this.sourceTitles is a map of language codes to article titles in those languages
		this.sourceTitles = {};

		this.$selectedItem = null;
		this.$selectedItemImage = null;
		this.$selectedItemLink = null;
		this.$selectedItemMetrics = null;
		this.$languageFilter = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.discardButton = null;
		this.$sourceInputs = null;
		this.$searchResults = null;
		this.$searchResultsMessage = null;
		this.$messageBar = null;
		this.targetTitleInput = null;
		this.overlay = null;
		this.translateFromButton = null;
		this.narrowLimit = 700;
		this.isNarrowScreenSize = false;
		this.validator = new mw.cx.ContentTranslationValidator( this.siteMapper );
		this.init();
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
	 * Return the appropriate menuWidth parameter for a given language count.
	 *
	 * @param {number} languagesCount Number of languages
	 * @return {string} wide, medium or narrow
	 */
	function getUlsMenuWidth( languagesCount ) {
		if ( languagesCount <= 16 ) {
			return 'narrow';
		}

		return 'medium';
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
	 * Initialize the plugin.
	 */
	CXSourceSelector.prototype.init = function () {
		var self = this;

		this.isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

		this.siteMapper.getLanguagePairs().then( function ( data ) {
			self.targetLanguages = data.targetLanguages;
			self.sourceLanguages = data.sourceLanguages;
			self.render();
			self.prefill();
			self.setDefaultLanguages();
			if ( self.isEmbedded ) {
				self.populateRecentEdits();
			}
			self.listen();
		} );

	};

	/**
	 * Prefill the selector if values are passed as options.
	 */
	CXSourceSelector.prototype.prefill = function () {
		if ( this.options.sourceLanguage ) {
			this.sourceLanguageChangeHandler( this.options.sourceLanguage );
		}

		if ( this.options.targetLanguage ) {
			this.targetLanguageChangeHandler( this.options.targetLanguage );
		}

		if ( this.options.sourceTitle ) {
			this.sourcePageSelector.setValue( this.options.sourceTitle );
		}

		// !this.isEmbedded is extra check, second one may be sufficient
		if ( !this.isEmbedded && this.options.targetTitle ) {
			this.targetTitleInput.setValue( this.options.targetTitle );
		}

		// If all of the values are already present,
		// show the dialog and initiate a validation.
		if ( this.options.sourceLanguage && this.options.targetLanguage &&
			this.options.sourceTitle
		) {
			this.show();
			this.check();
		}
	};

	/**
	 * Gets recently edited articles by user using usercontribs API
	 *
	 * @return {jQuery.Promise}
	 */
	CXSourceSelector.prototype.getRecentlyEditedArticleTitles = function () {
		var params, userName = mw.config.get( 'wgUserName' ),
			api = this.siteMapper.getApi( this.sourceLanguage );

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
	 * Get the thumbnail image, description and langlinks count for articles with the given titles.
	 *
	 * @return {jQuery.Promise}
	 */
	CXSourceSelector.prototype.getPageDetails = function () {
		var self = this;

		return this.getRecentlyEditedArticleTitles().then( function ( titles ) {
			return self.siteMapper.getApi( self.sourceLanguage ).get( {
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
	 * Uses page details loaded from server to register search result data for case
	 * when user does not provide any input
	 */
	CXSourceSelector.prototype.populateRecentEdits = function () {
		var self = this;

		this.getPageDetails().done( function ( data ) {
			var pages = OO.getProp( data, 'query', 'pages' );

			self.sourcePageSelector.requestCache[ '' ] = {
				pages: pages || {}
			};
			self.sourcePageSelector.populateLookupMenu();
		} ).fail( function ( error ) {
			mw.log( 'Error getting page data. ' + error );
		} );
	};

	/**
	 * Check whether a language is available as a target language
	 * for the specified source language.
	 *
	 * @param {string} targetLanguage A language code.
	 * @return {boolean} true if the target language is valid for the source language.
	 */
	CXSourceSelector.prototype.isValidTarget = function ( targetLanguage ) {
		return ( $.inArray( targetLanguage, this.targetLanguages ) > -1 );
	};

	/**
	 * Check whether a language is available as a source language
	 * for the specified target language.
	 *
	 * @param {string} sourceLanguage A language code.
	 * @return {boolean} true if the target language is valid for the source language.
	 */
	CXSourceSelector.prototype.isValidSource = function ( sourceLanguage ) {
		return ( $.inArray( sourceLanguage, this.sourceLanguages ) > -1 );
	};

	/**
	 * Get the current source language code.
	 *
	 * @return {string} Language code. Empty string if not set.
	 */
	CXSourceSelector.prototype.getSourceLanguage = function () {
		return this.sourceLanguage;
	};

	/**
	 * Sets the source language.
	 *
	 * @param {string} language A language code
	 */
	CXSourceSelector.prototype.setSourceLanguage = function ( language ) {
		var langProps, currentSource,
			languagesArticleExistsIn = Object.keys( this.sourceTitles );

		// Do not allow selection of invalid source languages under any circumstances
		if ( !this.isValidSource( language ) ) {
			return;
		}

		// Don't let the same languages be selected as source and target.
		// Instead, do what the user probably means: either swap them if
		// it's valid, or pick the first of the common languages in ULS.
		if ( language === this.getTargetLanguage() ) {
			currentSource = this.getSourceLanguage();

			if ( this.isValidTarget( currentSource ) ) {
				this.setTargetLanguage( currentSource );
			} else {
				this.setTargetLanguage(
					this.$targetLanguage.data( 'uls' ).options.quickList()[ 0 ]
				);
			}

		}
		this.sourceLanguage = language;
		langProps = {
			lang: this.sourceLanguage,
			dir: $.uls.data.getDir( this.sourceLanguage )
		};

		this.$sourceLanguage.prop( langProps )
			.text( this.isNarrowScreenSize ?
				mw.language.bcp47( this.sourceLanguage ) :
				$.uls.data.getAutonym( this.sourceLanguage )
			);
		mw.storage.set( 'cxSourceLanguage', this.sourceLanguage );
		this.sourcePageSelector.setLanguage( this.sourceLanguage );

		this.fillTargetLanguages( languagesArticleExistsIn );
	};

	/**
	 * Get the current target language code.
	 *
	 * @return {string} Language code. Empty string if not set.
	 */
	CXSourceSelector.prototype.getTargetLanguage = function () {
		return this.targetLanguage;
	};

	/**
	 * Sets the target language.
	 *
	 * @param {string} language A language code
	 */
	CXSourceSelector.prototype.setTargetLanguage = function ( language ) {
		var langProps;

		if ( !this.isValidTarget( language ) ) {
			return;
		}
		this.targetLanguage = language;
		langProps = {
			lang: this.targetLanguage,
			dir: $.uls.data.getDir( this.targetLanguage )
		};
		if ( !this.isEmbedded ) {
			this.targetTitleInput.$input.prop( langProps );
		}
		this.$targetLanguage.prop( langProps )
			.text( this.isNarrowScreenSize ?
				mw.language.bcp47( this.targetLanguage ) :
				$.uls.data.getAutonym( this.targetLanguage )
			);
		this.sourcePageSelector.setTargetLanguage( language );
		mw.storage.set( 'cxTargetLanguage', this.targetLanguage );
	};

	/**
	 * Fill the source language dropdown with source languages for which selected article exists
	 *
	 * @param {array} sourceLanguages Array of language codes used to populate ULS
	 */
	CXSourceSelector.prototype.fillSourceLanguages = function ( sourceLanguages ) {
		var cxSourceSelector = this,
			sourceUlsClass = 'cx-sourceselector-uls-source';

		// Delete the old source ULS
		$( '.' + sourceUlsClass ).remove();
		this.$sourceLanguage.data( 'uls', null );
		this.$sourceLanguage.off( 'click' );

		this.$sourceLanguage.uls( {
			languages: getAutonyms( sourceLanguages ),
			menuWidth: getUlsMenuWidth( sourceLanguages.length ),
			onSelect: function ( language ) {
				cxSourceSelector.sourceLanguageChangeHandler( language );
				mw.uls.addPreviousLanguage( language );
			},
			onReady: function () {
				this.$menu.addClass( sourceUlsClass );
			},
			onVisible: calculateUlsPosition,
			quickList: function () {
				return mw.uls.getFrequentLanguageList().filter( function ( n ) {
					return sourceLanguages.indexOf( n ) !== -1;
				} );
			}
		} );
	};

	/**
	 * Fill the target language dropdown with target languages that have
	 * language tools compatible with the source language.
	 * @param {array} languagesArticleExistsIn - array of language codes article exists in
	 */
	CXSourceSelector.prototype.fillTargetLanguages = function ( languagesArticleExistsIn ) {
		var targetLanguageCodes, sourceLanguage, ulsParams,
			cxSourceSelector = this,
			targetUlsClass = 'cx-sourceselector-uls-target';

		// Delete the old target ULS
		$( '.' + targetUlsClass ).remove();
		this.$targetLanguage.data( 'uls', null );
		this.$targetLanguage.off( 'click' );

		// Don't let the target be the same as source
		sourceLanguage = this.getSourceLanguage();
		targetLanguageCodes = $.grep( this.targetLanguages, function ( language ) {
			return language !== sourceLanguage;
		} );

		ulsParams = {
			languages: getAutonyms( targetLanguageCodes ),
			menuWidth: getUlsMenuWidth( targetLanguageCodes.length ),
			onSelect: function ( language ) {
				cxSourceSelector.targetLanguageChangeHandler( language );
				mw.uls.addPreviousLanguage( language );
			},
			onReady: function () {
				this.$menu.addClass( targetUlsClass );
			},
			onVisible: calculateUlsPosition,
			quickList: function () {
				return mw.uls.getFrequentLanguageList().filter( function ( n ) {
					return targetLanguageCodes.indexOf( n ) !== -1;
				} );
			}
		};

		// Bolds target languages that don't have version of article ( only for
		// embedded usage of CXSourceSelector )
		if ( cxSourceSelector.isEmbedded ) {
			ulsParams.languageDecorator = function ( $language, languageCode ) {
				if ( languagesArticleExistsIn.indexOf( languageCode ) < 0 ) {
					$language.css( 'font-weight', 'bold' );
				}
			};
		}

		// Create a new target ULS
		this.$targetLanguage.uls( ulsParams );
	};

	/**
	 * Listen for events.
	 */
	CXSourceSelector.prototype.listen = function () {
		var proxied, self = this;
		// Open or close the (embedded) dialog when clicking the link.
		// The (embedded) dialog will be unitialized until the first click.
		this.$trigger.click( this.show.bind( this ) );

		this.sourcePageSelector.on( 'change', function () {
			self.translateFromButton.setDisabled( false );
			// Hide any previous errors.
			self.$messageBar.hide();

			if ( self.isEmbedded ) {
				self.$searchResultsMessage.text(
					mw.msg( 'cx-sourceselector-embedded-search-no-results',
						self.sourcePageSelector.getQueryValue(),
						$.uls.data.getAutonym( self.sourceLanguage )
					)
				);
			}
		} );

		if ( !this.isEmbedded ) {
			// Target title input (check)
			this.targetTitleInput.$input.on( 'input blur',
				$.debounce( 600, false, this.check.bind( this ) )
			);
		} else {
			this.discardButton.connect( this, { click: this.discardEmbeddedDialog } );
			this.sourcePageSelector.onLookupMenuItemChoose = this.setSelectedItem.bind( this );

			// Unbind event handlers so search results don't disappear when focus is lost
			this.sourcePageSelector.$input.off( 'blur' );
			this.sourcePageSelector.lookupMenu.onDocumentMouseDownHandler = function () {};
			proxied = this.sourcePageSelector.lookupMenu.onKeyDownHandler;
			this.sourcePageSelector.lookupMenu.onKeyDownHandler = function ( e ) {
				if ( e.keyCode === OO.ui.Keys.TAB ) {
					return;
				}
				if ( e.keyCode === OO.ui.Keys.ESCAPE ) {
					self.discardEmbeddedDialog();
					return;
				}
				return proxied.apply( this, arguments );
			};
			// Disable width and height calculation for search results container
			this.sourcePageSelector.lookupMenu.setIdealSize = function () {};
		}

		// Keypress (start translation on enter key)
		this.$container.on(
			'keypress',
			'.cx-sourceselector-page-title',
			this.enterKeyHandler.bind( this )
		);

		// Resize handler
		$( window ).resize( $.throttle( 250, this.resize.bind( this ) ) );
	};

	CXSourceSelector.prototype.resize = function () {
		var isNarrowScreenSize = document.documentElement.clientWidth < this.narrowLimit;

		// Exit early if screen size stays above/under narrow screen size limit
		if ( this.isNarrowScreenSize === isNarrowScreenSize ) {
			return;
		}

		this.isNarrowScreenSize = isNarrowScreenSize;
		this.$sourceLanguage.text( isNarrowScreenSize ?
			mw.language.bcp47( this.sourceLanguage ) :
			$.uls.data.getAutonym( this.sourceLanguage )
		);
		this.$targetLanguage.text( isNarrowScreenSize ?
			mw.language.bcp47( this.targetLanguage ) :
			$.uls.data.getAutonym( this.targetLanguage )
		);
	};

	/**
	 * Handles source language change.
	 *
	 * @param {string} language Language code.
	 */
	CXSourceSelector.prototype.sourceLanguageChangeHandler = function ( language ) {
		var self = this;
		// When same language is chosen again, save network call for checking articles
		if ( language === this.getSourceLanguage() ) {
			return;
		}

		this.setSourceLanguage( language );
		this.sourcePageSelector.setLanguage( language );

		if ( this.isEmbedded ) {
			this.sourcePageSelector.closeLookupMenu();
			this.populateRecentEdits();
			this.sourcePageSelector.toggle( true );

			if ( this.isArticleSelected ) {
				this.changeSelectedItemTitle( language );
				this.$selectedItemMetrics.children( '.cx-sourceselector-embedded-selected-item__pageviews' ).remove();
				this.getPageInfo( this.sourceTitles[ language ] ).done( function ( data ) {
					self.renderPageViews( data.pageviews );
				} ).fail( function ( error ) {
					mw.log( 'Error getting page info for ' + self.sourceTitles[ language ] + '. ' + error );
				} );
			}
		}

		this.check();
	};

	/**
	 * Handles target language change.
	 *
	 * @param {string} language Language code.
	 */
	CXSourceSelector.prototype.targetLanguageChangeHandler = function ( language ) {
		// When same language is chosen again, save network call for checking articles
		if ( language === this.getTargetLanguage() ) {
			return;
		}

		this.setTargetLanguage( language );
		this.check();
	};

	/**
	 * Handles Enter (Return) keypress.
	 *
	 * @param {jQuery.Event} e
	 */
	CXSourceSelector.prototype.enterKeyHandler = function ( e ) {
		if ( e.which === 13 ) {
			this.startPageInCX();
		}
	};

	/**
	 * Checks source and target inputs for problems.
	 */
	CXSourceSelector.prototype.check = function () {
		var sourceLanguage = this.getSourceLanguage(),
			targetLanguage = this.getTargetLanguage(),
			sourceTitle = this.sourcePageSelector.getQueryValue(),
			targetTitle = this.isEmbedded ? '' : this.targetTitleInput.getValue().trim(),
			selector = this;

		this.$messageBar.hide();

		// We do not want to show "title does not exist" for empty input
		if ( sourceTitle === '' ) {
			this.translateFromButton.setDisabled( true );

			return;
		}

		// Perform multitude of validations for the titles
		this.validator.isTitleExistInLanguage( sourceLanguage, sourceTitle ).then( function ( sourceTitle ) {
			var titleCheck, translationCheck;

			selector.translateFromButton.setDisabled( !sourceTitle );

			if ( sourceTitle === false ) {
				selector.showSourceTitleError( sourceLanguage );

				return;
			}

			// Whether the target title, if given, exists in the target wiki
			titleCheck = selector.validator.isTitleExistInLanguage( targetLanguage, targetTitle );
			// Whether the source already has a translation linked via language links
			translationCheck = selector.validator.isTitleConnectedInLanguages(
				sourceLanguage,
				targetLanguage,
				sourceTitle
			);

			$.when(
				translationCheck,
				titleCheck
			).done( function ( existingTranslation, existingTargetTitle ) {
				// If there is an existing translation and
				// the specified target title is in use
				if ( existingTranslation && existingTargetTitle ) {
					selector.showPageExistsAndTitleInUseError(
						existingTranslation,
						existingTargetTitle
					);
				} else if ( existingTranslation ) {
					// If there is just an existing translation
					selector.showPageExistsError( existingTranslation );
				} else if ( existingTargetTitle ) {
					// If the specified target title is in use
					selector.showTitleInUseError( existingTargetTitle );
				}
			} );
		} );
	};

	/**
	 * Shows error for source page not existing.
	 *
	 * @param {string} sourceLanguage the source language language code
	 */
	CXSourceSelector.prototype.showSourceTitleError = function ( sourceLanguage ) {
		var sourceLanguageDisplay, message;

		sourceLanguageDisplay = $.uls.data.getAutonym( sourceLanguage );

		message = mw.message(
			'cx-sourceselector-dialog-error-no-source-article',
			sourceLanguageDisplay
		);

		this.showMessage( message );
	};

	/**
	 * Shows error for target page existing and target title in use.
	 *
	 * @param {string} equivalentTargetPage the title of the existing page
	 * @param {string} existingTargetTitle the title already in use
	 */
	CXSourceSelector.prototype.showPageExistsAndTitleInUseError = function (
		equivalentTargetPage,
		existingTargetTitle
	) {
		var targetLanguage, equivalentTargetPageLink, targetLanguageDisplay,
			existingTargetTitleLink, message;

		targetLanguage = this.getTargetLanguage();
		equivalentTargetPageLink = this.siteMapper
			.getPageUrl( targetLanguage, equivalentTargetPage );
		targetLanguageDisplay = $.uls.data.getAutonym( targetLanguage );

		existingTargetTitleLink = this.siteMapper
			.getPageUrl( targetLanguage, existingTargetTitle );

		message = mw.message(
			'cx-sourceselector-dialog-error-page-and-title-exist',
			equivalentTargetPageLink,
			targetLanguageDisplay,
			existingTargetTitleLink
		);

		this.showMessage( message );
	};

	/**
	 * Shows error for page already existing in target.
	 *
	 * @param {string} equivalentTargetPage the title of the existing page
	 */
	CXSourceSelector.prototype.showPageExistsError = function ( equivalentTargetPage ) {
		var targetLanguage, equivalentTargetPageLink,
			targetLanguageDisplay, message;

		targetLanguage = this.getTargetLanguage();
		equivalentTargetPageLink = this.siteMapper
			.getPageUrl( targetLanguage, equivalentTargetPage );
		targetLanguageDisplay = $.uls.data.getAutonym( targetLanguage );

		message = mw.message(
			'cx-sourceselector-dialog-error-page-exists',
			equivalentTargetPageLink, targetLanguageDisplay
		);

		this.showMessage( message );
	};

	/**
	 * Shows error for title already in use in target wiki.
	 *
	 * @param {string} existingTargetTitle the title already in use
	 */
	CXSourceSelector.prototype.showTitleInUseError = function ( existingTargetTitle ) {
		var targetLanguage, existingTargetTitleLink, message;

		targetLanguage = this.getTargetLanguage();
		existingTargetTitleLink = this.siteMapper
			.getPageUrl( targetLanguage, existingTargetTitle );

		message = mw.message(
			'cx-sourceselector-dialog-error-title-in-use',
			existingTargetTitleLink
		);

		this.showMessage( message );
	};

	/**
	 * Shows error message for dialog.
	 *
	 * @param {mw.Message|text} message the message to show
	 */
	CXSourceSelector.prototype.showMessage = function ( message ) {
		var $messageText = $( '.cx-sourceselector__messagebar-text' );

		if ( message instanceof mw.Message ) {
			$messageText.html( message.parse() );
		} else {
			$messageText.text( message );
		}

		this.$messageBar.find( 'a' )
			.attr( 'target', '_blank' );

		// Prevent embedded version of source selector to display message bar if not in selected state.
		// This check is needed because on slow connections, while message gets fetched
		// User can close embedded New translation dialog and if New translation dialog
		// Reopens (to search for different article), message bar gets attached below search bar
		if ( this.isEmbedded && !this.$container.hasClass( 'cx-sourceselector-embedded--selected' ) ) {
			return;
		}
		this.$messageBar.show();
	};

	/**
	 * Show the CXSourceSelector.
	 */
	CXSourceSelector.prototype.show = function () {
		if ( this.isEmbedded ) {
			this.showAsEmbedded();
		} else {
			this.showAsDialog();
		}

		// If there is something in the source field, it is probably auto-filled,
		// so go immediately to the target to save time
		if ( !this.isEmbedded && this.options.sourceTitle ) {
			this.targetTitleInput.focus();
		} else {
			this.sourcePageSelector.focus();
		}
	};

	/**
	 * Shows the source selector as a dialog. If top and left options
	 * are provided, uses those for positioning. Otherwise centered.
	 * If the option 'overlay' has been passed in, and overlay is placed
	 * over the rest of the content on the page.
	 */
	CXSourceSelector.prototype.showAsDialog = function () {
		var top, left;

		if ( this.options.top ) {
			top = this.options.top;
		} else {
			top = ( $( window ).height() - this.$container.height() ) / 2;
			top = top + $( document ).scrollTop();
		}

		if ( this.options.left ) {
			left = this.options.left;
		} else {
			left = ( $( window ).width() - this.$container.width() ) / 2;
		}

		this.$container.css( {
			top: top,
			left: left
		} );

		if ( !this.overlay ) {
			this.overlay = new mw.cx.widgets.Overlay();
		}

		this.overlay.show();
		this.$container.show();
	};

	/**
	 * Shows the embedded version of source selector dialog
	 *
	 * @param {jQuery} $container the container in which to embed the selector
	 */
	CXSourceSelector.prototype.showAsEmbedded = function () {
		var overlayOptions = {};

		if ( !this.overlay ) {
			overlayOptions.closeOnClick = this.discardEmbeddedDialog.bind( this );
			this.overlay = new mw.cx.widgets.Overlay( 'body', overlayOptions );
		}

		this.sourcePageSelector.toggle( true );
		this.overlay.show();
		this.$container.slideDown( 'fast' );
	};

	/**
	 * Cancels the translation starting process and hides the dialog.
	 */
	CXSourceSelector.prototype.cancel = function () {
		this.sourcePageSelector.setValue( '' );
		this.targetTitleInput.setValue( '' );

		this.translateFromButton.setDisabled( true );
		this.$messageBar.hide();

		// Only dialog version of CXSourceSelector has cancel button
		this.overlay.hide();
		this.hide();
	};

	/*
	* Close embedded version of CXSourceSelector, close overlay and show navigation items
	*/
	CXSourceSelector.prototype.closeEmbeddedDialog = function () {
		this.overlay.hide();
		this.$container.toggle();
		$( '.translation-filter' ).slideDown( 'fast' );
	};

	/**
	 * Hide the entry point dialog.
	 */
	CXSourceSelector.prototype.hide = function () {
		this.$container.hide();
	};

	/**
	 * Start a new page translation in Special:CX.
	 * Does nothing if source page does not exist.
	 */
	CXSourceSelector.prototype.startPageInCX = function () {
		var targetTitle, originalSourceTitle, sourceLanguage, targetLanguage, siteMapper, selector;

		selector = this;
		siteMapper = this.siteMapper;
		sourceLanguage = this.getSourceLanguage();
		targetLanguage = this.getTargetLanguage();
		originalSourceTitle = this.sourcePageSelector.getQueryValue();
		targetTitle = this.isEmbedded ? '' : this.targetTitleInput.getValue().trim();

		this.validator.isTitleExistInLanguage(
			sourceLanguage,
			originalSourceTitle
		).done( function ( sourceTitle ) {
			if ( sourceTitle === false ) {
				selector.showSourceTitleError( sourceLanguage );
				selector.sourcePageSelector.focus();
				return;
			}

			if ( targetTitle === '' ) {
				targetTitle = mw.cx.getTitleForNamespace(
					originalSourceTitle, mw.cx.getDefaultTargetNamespace()
				);
			}

			// Set CX token as cookie.
			siteMapper.setCXToken( sourceLanguage, targetLanguage, sourceTitle );

			location.href = siteMapper.getCXUrl(
				sourceTitle,
				targetTitle,
				sourceLanguage,
				targetLanguage,
				selector.options.campaign
			);
		} );
	};

	CXSourceSelector.prototype.setDefaultLanguages = function () {
		var validDefaultLanguagePair = this.findValidDefaultLanguagePair();

		this.setSourceLanguage( validDefaultLanguagePair.sourceLanguage );
		this.setTargetLanguage( validDefaultLanguagePair.targetLanguage );
	};

	/**
	 * Find valid source and target language pair, with different source and target language
	 *
	 * @return {Object} languages Valid and different source and target languages
	 */
	CXSourceSelector.prototype.findValidDefaultLanguagePair = function () {
		var sourceLanguage,
			targetLanguage,
			commonSourceLanguages, i, length;

		sourceLanguage = mw.storage.get( 'cxSourceLanguage' );
		targetLanguage = mw.storage.get( 'cxTargetLanguage' ) || mw.config.get( 'wgContentLanguage' );

		if ( !this.isValidSource( sourceLanguage ) || sourceLanguage === targetLanguage ) {
			commonSourceLanguages = this.$sourceLanguage.data( 'uls' ).options.quickList();

			for ( i = 0, length = commonSourceLanguages.length; i < length; i++ ) {
				if ( commonSourceLanguages[ i ] !== targetLanguage &&
					this.isValidSource( commonSourceLanguages[ i ] )
				) {
					sourceLanguage = commonSourceLanguages[ i ];

					break;
				}
			}
		}

		return {
			sourceLanguage: sourceLanguage,
			targetLanguage: targetLanguage
		};
	};

	CXSourceSelector.prototype.setSelectedItem = function ( item ) {
		var numOfLanguages,
			self = this,
			itemTitle = item.getData(),
			params = {
				prop: [ 'langlinks', 'pageviews' ],
				redirects: 1,
				lllimit: 'max'
			};

		this.$selectedItemMetrics.children( '.cx-sourceselector-embedded-selected-item__pageviews' ).remove();
		this.getPageInfo( itemTitle, params ).done( function ( data ) {
			var langCode, title, languagesArticleExistsIn;

			if ( !data ) {
				return;
			}

			self.renderPageViews( data.pageviews );

			// Reset source titles
			self.sourceTitles = {};
			// Extract results data and create sourceTitles mapping
			$( data.langlinks ).each( function ( index, element ) {
				langCode = element.lang;
				title = element[ '*' ];

				self.sourceTitles[ langCode ] = title;
			} );
			// Include chosen source title (not returned by langlinks)
			self.sourceTitles[ self.sourceLanguage ] = itemTitle;

			languagesArticleExistsIn = Object.keys( self.sourceTitles );

			self.fillSourceLanguages( languagesArticleExistsIn );
			self.fillTargetLanguages( languagesArticleExistsIn );
		} ).fail( function ( error ) {
			mw.log( 'Error getting page info for ' + itemTitle + '. ' + error );
		} );

		this.sourcePageSelector.setValueNoEmit( item.getData() );

		if ( item.imageUrl ) {
			this.$selectedItemImage.css( 'background-image', 'url( ' + item.imageUrl + ')' );
		} else {
			this.$selectedItemImage.addClass( 'oo-ui-iconElement-icon oo-ui-icon-' + item.icon );
		}

		this.$selectedItemLink.prop( {
			href: item.$label.prop( 'href' ),
			title: itemTitle,
			target: '_blank',
			text: itemTitle
		} );

		numOfLanguages = item.getNumberOfLanguages();
		if ( numOfLanguages ) {
			this.$selectedItemMetrics.prepend(
				$( '<span>' )
					.addClass( 'cx-sourceselector-embedded-selected-item__language-count' )
					.text( mw.language.convertNumber( numOfLanguages ) )
			);
		}

		this.$container.addClass( 'cx-sourceselector-embedded--selected' );
		this.isArticleSelected = true;

		this.$selectedItem.append( this.$languageFilter, this.discardButton.$element );

		// Check will display a warning if target language (which is default,
		// up to the first article selection) already has an article.
		// There is already 'Missing in <target language>' label,
		// but this is extra info that article already exists
		this.check();
	};

	CXSourceSelector.prototype.discardEmbeddedDialog = function () {
		this.closeEmbeddedDialog(); // Close source selector
		this.$messageBar.hide(); // Hide any previous messages

		this.sourcePageSelector.setValue( '' );

		// Discard selected item image and info
		this.$selectedItemMetrics.empty();
		this.$selectedItemImage
			.removeAttr( 'style' )
			.removeClass( 'oo-ui-iconElement-icon' )
			.attr( 'class', function ( i, className ) {
				return className.replace( /(?:^|\s)oo-ui-icon-page-\S+/, '' );
			} );

		this.$container.removeClass( 'cx-sourceselector-embedded--selected' );
		this.isArticleSelected = false;

		this.$sourceInputs.append( this.$languageFilter, this.discardButton.$element );

		// Reset source titles, as there is no selected item
		this.sourceTitles = {};
		// Reset source and target ULS to show all source and target languages
		this.fillSourceLanguages( this.sourceLanguages );
		this.fillTargetLanguages( this.targetLanguages );
	};

	CXSourceSelector.prototype.changeSelectedItemTitle = function ( language ) {
		var href, title = this.sourceTitles[ language ];

		if ( title ) {
			this.sourcePageSelector.setValueNoEmit( title );

			href = this.siteMapper.getPageUrl( language, title );
			this.$selectedItemLink.prop( {
				href: href,
				title: title,
				text: title
			} );
		}
	};

	/**
	 * Gets data for the selected page.
	 * Gets pageviews by default, and langlinks if specified through optional params.
	 *
	 * @param {string} title Title of the page for which data is fetched.
	 * @param {Object} [params] Optional parameter used for fetching additional item data.
	 * @return {jQuery.Promise} Returns thenable promise, so langlinks can be processed if necessary.
	 */
	CXSourceSelector.prototype.getPageInfo = function ( title, params ) {
		var api, self = this;

		if ( !title ) {
			throw new Error( 'Title is mandatory parameter' );
		}

		api = this.siteMapper.getApi( this.sourceLanguage );
		params = $.extend( {
			action: 'query',
			// If new prop array is provided in params, this one is overridden
			prop: [ 'pageviews' ],
			titles: title,
			pvipdays: 7
		}, params );

		return api.get( params ).then( function ( data ) {
			var pageId,
				page = OO.getProp( data, 'query', 'pages' );

			if ( !page ) {
				return $.Deferred().reject( 'No page data' ).promise();
			}

			// Only one title was passed in titles params, so we expect one result
			pageId = Object.keys( page )[ 0 ];
			if ( pageId === '-1' ) {
				// Page does not exist
				return $.Deferred().reject( 'Requested page does not exist' ).promise();
			}

			return page[ pageId ];
		}, function ( response ) {
			// In case of failure, fallback to all source and target languages
			self.sourceTitles = {};
			self.fillSourceLanguages( self.sourceLanguages );
			self.fillTargetLanguages( self.targetLanguages );

			mw.log(
				'Error getting page info from ' + api.apiUrl + ' . ' +
				response.statusText + ' (' + response.status + '). ' +
				response.responseText
			);
		} );
	};

	CXSourceSelector.prototype.renderPageViews = function ( pageViewData ) {
		var date, pageViews = 0;

		if ( !pageViewData ) {
			return;
		}

		for ( date in pageViewData ) {
			pageViews += pageViewData[ date ];
		}

		this.$selectedItemMetrics.append(
			$( '<span>' )
				.addClass( 'cx-sourceselector-embedded-selected-item__pageviews' )
				.text( mw.msg( 'cx-sourceselector-embedded-selected-item-pageviews',
					mw.language.convertNumber( pageViews ) )
				)
		);
	};

	CXSourceSelector.prototype.render = function () {
		if ( this.isEmbedded ) {
			this.renderAsEmbedded();
		} else {
			this.renderAsDialog();
		}
	};

	/**
	 * Render the CXSourceSelector as dialog.
	 */
	CXSourceSelector.prototype.renderAsDialog = function () {
		var $heading,
			$sourceLanguageLabel, $sourceLanguageLabelContainer, $sourceLanguageContainer,
			$targetLanguageLabel, $targetLanguageLabelContainer, $targetLanguageContainer,
			$sourceTitleInputContainer, $targetTitleInputContainer,
			$targetInputs,
			$messageText,
			cancelButton,
			translateButtonLabel,
			$actions, $license,
			cxSourceSelector = this;

		this.$container = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog' )
			.hide();

		$heading = $( '<div>' ).addClass( 'cx-sourceselector-dialog__heading' )
			.text( mw.msg( 'cx-sourceselector-dialog-new-translation' ) );

		$sourceLanguageLabel = $( '<label>' )
			.text( mw.msg( 'cx-sourceselector-dialog-source-language-label' ) );

		$sourceLanguageLabelContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__language-label' )
			.append( $sourceLanguageLabel );

		this.$sourceLanguage = $( '<button>' )
			.addClass( 'mw-ui-button' );

		this.$sourceLanguage.uls( {
			languages: getAutonyms( this.sourceLanguages ),
			menuWidth: getUlsMenuWidth( this.sourceLanguages.length ),
			onSelect: function ( language ) {
				cxSourceSelector.sourceLanguageChangeHandler( language );
				mw.uls.addPreviousLanguage( language );
			},
			onReady: function () {
				this.$menu.addClass( 'cx-sourceselector-uls-source' );
			},
			onVisible: calculateUlsPosition,
			quickList: function () {
				return mw.uls.getFrequentLanguageList().filter( function ( n ) {
					return cxSourceSelector.sourceLanguages.indexOf( n ) !== -1;
				} );
			}
		} );

		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__language' )
			.append( this.$sourceLanguage );

		$targetLanguageLabel = $( '<label>' )
			.text( mw.msg( 'cx-sourceselector-dialog-target-language-label' ) );

		$targetLanguageLabelContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__language-label' )
			.append( $targetLanguageLabel );

		this.$targetLanguage = $( '<button>' )
			.addClass( 'mw-ui-button' );

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__language' )
			.append( this.$targetLanguage );

		this.sourcePageSelector = new mw.cx.ui.PageSelectorWidget( {
			language: this.getSourceLanguage(),
			siteMapper: this.siteMapper,
			value: this.options.sourceTitle,
			validateTitle: true,
			placeholder: mw.msg( 'cx-sourceselector-dialog-source-title-placeholder' )
		} );
		$sourceTitleInputContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-page-title' )
			.append( this.sourcePageSelector.$element );

		this.targetTitleInput = new OO.ui.TextInputWidget( {
			placeholder: mw.msg( 'cx-sourceselector-dialog-target-title-placeholder' )
		} );

		$targetTitleInputContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-page-title' )
			.append( this.targetTitleInput.$element );

		this.$sourceInputs = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__source-inputs' )
			.append(
				$sourceLanguageLabelContainer,
				$sourceLanguageContainer,
				$sourceTitleInputContainer
			);

		$targetInputs = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__target-inputs' )
			.append(
				$targetLanguageLabelContainer,
				$targetLanguageContainer,
				$targetTitleInputContainer
			);

		this.$messageBar = $( '<div>' )
			.addClass( 'cx-sourceselector__messagebar' );
		$messageText = $( '<span>' )
			.addClass( 'cx-sourceselector__messagebar-text' );
		this.$messageBar
			.append( $messageText )
			.hide();

		cancelButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-sourceselector-dialog-button-cancel' )
		} ).on( 'click', this.cancel.bind( this ) );

		translateButtonLabel = mw.msg( 'cx-sourceselector-dialog-button-start-translation' );
		this.translateFromButton = new OO.ui.ButtonWidget( {
			flags: [ 'primary', 'progressive' ],
			label: translateButtonLabel,
			disabled: true
		} ).on( 'click', this.startPageInCX.bind( this ) );

		$license = $( '<div>' )
			.addClass( 'cx-sourceselector__license' )
			.html( mw.message( 'cx-license-agreement', translateButtonLabel ).parse() );

		$actions = $( '<div>' )
			.addClass( 'cx-sourceselector__actions' );

		$actions.append( cancelButton.$element, this.translateFromButton.$element );

		this.$container.append( $heading,
			this.$sourceInputs,
			$targetInputs,
			this.$messageBar,
			$license,
			$actions
		);

		$( 'body' ).append( this.$container );
	};

	CXSourceSelector.prototype.renderAsEmbedded = function () {
		var $selectedItemInfo,
			$selectedItemLinkContainer,
			$sourceLanguageContainer,
			$targetLanguageContainer,
			$searchResultsLabel,
			$recentEditsLabel,
			$recentEditsMessage,
			$recentEditsHeaderLabel,
			$messageText,
			translateButtonLabel,
			$actions, $license,
			cxSourceSelector = this;

		this.$container.hide(); // Starts as hidden, shown on button click

		this.$selectedItem = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded-selected-item' );

		this.$searchResultsMessage = $( '<span>' )
			.text( mw.msg( 'cx-sourceselector-embedded-search-no-results' ) );
		$recentEditsMessage = $( '<span>' )
			.text( mw.msg( 'cx-sourceselector-embedded-recent-edits-no-results' ) );

		$searchResultsLabel = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__search-message' )
			.append( this.$searchResultsMessage );
		$recentEditsLabel = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__recent-edits-message' )
			.append( $recentEditsMessage );
		$recentEditsHeaderLabel = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__recent-edits-header' )
			.text( mw.msg( 'cx-sourceselector-embedded-recent-edits-header' ) );
		this.$searchResults = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__search-results' )
			.append( $recentEditsHeaderLabel, $recentEditsLabel, $searchResultsLabel );

		this.$sourceLanguage = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__language-button' );

		this.$sourceLanguage.uls( {
			languages: getAutonyms( this.sourceLanguages ),
			menuWidth: getUlsMenuWidth( this.sourceLanguages.length ),
			onSelect: function ( language ) {
				cxSourceSelector.sourceLanguageChangeHandler( language );
				mw.uls.addPreviousLanguage( language );
			},
			onReady: function () {
				this.$menu.addClass( 'cx-sourceselector-uls-source' );
			},
			onVisible: calculateUlsPosition,
			quickList: function () {
				return mw.uls.getFrequentLanguageList().filter( function ( n ) {
					return cxSourceSelector.sourceLanguages.indexOf( n ) !== -1;
				} );
			}
		} );

		$sourceLanguageContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__source-language' )
			.append( this.$sourceLanguage );

		this.$targetLanguage = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__language-button' );

		$targetLanguageContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__target-language' )
			.append( this.$targetLanguage );

		this.$languageFilter = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__language-filter' )
			.append(
				$sourceLanguageContainer,
				$( '<div>' ).addClass( 'translation-language-arrow' ),
				$targetLanguageContainer
			);
		this.sourcePageSelector = new mw.cx.ui.PageSelectorWidget( {
			classes: [ 'cx-sourceselector-embedded-page-title' ],
			language: this.getSourceLanguage(),
			siteMapper: this.siteMapper,
			value: this.options.sourceTitle,
			validateTitle: true,
			placeholder: mw.msg( 'cx-sourceselector-embedded-source-page-placeholder' ),
			showRedirectTargets: true,
			$overlay: this.$searchResults,
			$container: this.$searchResults
		} );

		this.discardButton = new OO.ui.ButtonWidget( {
			framed: false,
			icon: 'close',
			classes: [ 'cx-sourceselector-embedded-discard' ]
		} );

		this.$sourceInputs = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded__source-inputs' )
			.append(
				this.sourcePageSelector.$element,
				this.$languageFilter,
				this.discardButton.$element
			);
		this.$selectedItemImage = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded-selected-item__image' );

		this.$selectedItemLink = $( '<a>' )
			.addClass( 'cx-sourceselector-embedded-selected-item__link' );
		$selectedItemLinkContainer = $( '<span>' )
			.append( this.$selectedItemLink );
		this.$selectedItemMetrics = $( '<span>' )
			.addClass( 'cx-sourceselector-embedded-selected-item__metrics' );
		$selectedItemInfo = $( '<div>' )
			.addClass( 'cx-sourceselector-embedded-selected-item__info' )
			.append( $selectedItemLinkContainer, this.$selectedItemMetrics );

		this.$selectedItem.append(
			this.$selectedItemImage,
			$selectedItemInfo
		);

		this.$messageBar = $( '<div>' )
			.addClass( 'cx-sourceselector__messagebar' );
		$messageText = $( '<span>' )
			.addClass( 'cx-sourceselector__messagebar-text' );
		this.$messageBar
			.append( $messageText )
			.hide();

		translateButtonLabel = mw.msg( 'cx-sourceselector-dialog-button-start-translation' );
		this.translateFromButton = new OO.ui.ButtonWidget( {
			flags: [ 'primary', 'progressive' ],
			label: translateButtonLabel,
			disabled: true
		} ).on( 'click', this.startPageInCX.bind( this ) );

		$license = $( '<div>' )
			.addClass( 'cx-sourceselector__license' )
			.html( mw.message( 'cx-license-agreement', translateButtonLabel ).parse() );

		$actions = $( '<div>' )
			.addClass( 'cx-sourceselector__actions' )
			.append( this.translateFromButton.$element );

		this.$container.append( this.$sourceInputs,
			this.$searchResults,
			this.$selectedItem,
			this.$messageBar,
			$license,
			$actions
		);
	};

	mw.cx.CXSourceSelector = CXSourceSelector;

	/**
	 * CXEntryPoint Plugin
	 * @param {Object} options
	 * @return {jQuery}
	 */
	$.fn.cxSourceSelector = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxsourceselector' );

			if ( !data ) {
				$this.data(
					'cxsourceselector', ( data = new CXSourceSelector( this, mw.cx.siteMapper, options ) )
				);
			}
		} );
	};
}( jQuery, mediaWiki ) );
