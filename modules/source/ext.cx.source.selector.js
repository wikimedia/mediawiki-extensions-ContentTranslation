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
	 */
	function CXSourceSelector( $trigger, siteMapper, options ) {
		this.$trigger = $( $trigger );
		this.options = $.extend( {}, options );
		this.siteMapper = siteMapper;

		this.sourceLanguages = [];
		this.targetLanguages = [];

		this.$dialog = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$messageBar = null;
		this.$sourceTitleInput = null;
		this.$targetTitleInput = null;
		this.overlay = null;
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
		var i,
			autonyms = {};

		for ( i = 0; i < languages.length; i++ ) {
			autonyms[ languages[ i ] ] = $.uls.data.getAutonym( languages[ i ] );
		}

		return autonyms;
	}

	/**
	 * Return the appropriate menuWidth parameter for a given language count.
	 *
	 * @param {number} languagesCount Number of languages
	 * return {string} wide, medium or narrow
	 */
	function getUlsMenuWidth( languagesCount ) {
		if ( languagesCount <= 12 ) {
			return 'narrow';
		}

		if ( languagesCount <= 100 ) {
			return 'medium';
		}

		return 'wide';
	}

	/**
	 * Initialize the plugin.
	 */
	CXSourceSelector.prototype.init = function () {
		var cxSourceSelector = this;

		this.getLanguagePairs().then( function () {
			cxSourceSelector.render();
			cxSourceSelector.listen();
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
			this.$sourceTitleInput.val( this.options.sourceTitle );
		}

		if ( this.options.targetTitle ) {
			this.$targetTitleInput.val( this.options.targetTitle );
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
	 * Get all the source and target languages.
	 *
	 * @return {jQuery.Promise}
	 */
	CXSourceSelector.prototype.getLanguagePairs = function () {
		var languagePairsAPIUrl,
			cxSourceSelector = this;

		languagePairsAPIUrl = this.siteMapper.getCXServerUrl( '/languagepairs' );

		return $.get( languagePairsAPIUrl )
			.done( function ( response ) {
				cxSourceSelector.targetLanguages = response.target;
				cxSourceSelector.sourceLanguages = response.source;
			} )
			.fail( function ( response ) {
				mw.log(
					'Error getting language pairs from ' + languagePairsAPIUrl + ' . ' +
					response.statusText + ' (' + response.status + '). ' +
					response.responseText
				);
				mw.hook( 'mw.cx.error' ).fire( mw.msg( 'cx-error-server-connection' ) );
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
		return this.$sourceLanguage.prop( 'lang' );
	};

	/**
	 * Sets the source language.
	 *
	 * @param {string} language A language code
	 */
	CXSourceSelector.prototype.setSourceLanguage = function ( language ) {
		var langProps, currentSource;

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

		langProps = {
			lang: language,
			dir: $.uls.data.getDir( language )
		};

		this.$sourceTitleInput.prop( langProps );
		this.$sourceLanguage.prop( langProps )
			.text( $.uls.data.getAutonym( language ) );
		mw.storage.set( 'cxSourceLanguage', language );
		this.fillTargetLanguages();
	};

	/**
	 * Get the current target language code.
	 *
	 * @return {string} Language code. Empty string if not set.
	 */
	CXSourceSelector.prototype.getTargetLanguage = function () {
		return this.$targetLanguage.prop( 'lang' );
	};

	/**
	 * Sets the target language.
	 *
	 * @param {string} language A language code
	 */
	CXSourceSelector.prototype.setTargetLanguage = function ( language ) {
		var langProps = {
			lang: language,
			dir: $.uls.data.getDir( language )
		};

		if ( !this.isValidTarget( language ) ) {
			return;
		}

		this.$targetTitleInput.prop( langProps );
		this.$targetLanguage.prop( langProps )
			.text( $.uls.data.getAutonym( language ) );
		mw.storage.set( 'cxTargetLanguage', language );
	};

	/**
	 * Fill the target language dropdown with target languages that have
	 * language tools compatible with the source language.
	 */
	CXSourceSelector.prototype.fillTargetLanguages = function () {
		var targetLanguageCodes, sourceLanguage,
			cxSourceSelector = this,
			targetUlsClass = 'cx-sourceselector-uls-target';

		// Delete the old target ULS
		$( '.' + targetUlsClass ).remove();
		this.$targetLanguage.data( 'uls', null );
		this.$targetLanguage.off( 'click' );

		// Don't let the target be the same as source
		sourceLanguage = this.getSourceLanguage();
		targetLanguageCodes = jQuery.grep( this.targetLanguages, function ( language ) {
			return language !== sourceLanguage;
		} );

		// Create a new target ULS
		this.$targetLanguage.uls( {
			languages: getAutonyms( targetLanguageCodes ),
			menuWidth: getUlsMenuWidth( targetLanguageCodes.length ),
			onSelect: function ( language ) {
				cxSourceSelector.targetLanguageChangeHandler( language );
				mw.uls.addPreviousLanguage( language );
			},
			onReady: function () {
				this.$menu.addClass( targetUlsClass );
			},
			onVisible: function () {
				if ( $( 'html' ).prop( 'dir' ) === 'rtl' ) {
					this.left = this.$element.offset().left + this.$element.parent().width() - this.$menu.width();
				} else {
					this.left = this.$element.offset().left;
				}

				this.$menu.css( this.position() );
			},
			quickList: function () {
				return mw.uls.getFrequentLanguageList().filter( function ( n ) {
					return targetLanguageCodes.indexOf( n ) !== -1;
				} );
			}
		} );
	};

	/**
	 * Listen for events.
	 */
	CXSourceSelector.prototype.listen = function () {
		var self = this;
		// Open or close the dialog when clicking the link.
		// The dialog will be unitialized until the first click.
		this.$trigger.click( $.proxy( this.show, this ) );

		this.$sourceTitleInput.on( 'input', function () {
			self.$translateFromButton.prop( 'disabled', false );
			// Hide any previous errors.
			self.$messageBar.hide();
		} );

		// Target title input (check)
		this.$targetTitleInput.on( 'input blur',
			$.debounce( 600, false, $.proxy( this.check, this ) )
		);

		// Keypress (start translation on enter key)
		this.$dialog.on(
			'keypress',
			'.cx-sourceselector-dialog__title',
			$.proxy( this.enterKeyHandler, this )
		);
	};

	/**
	 * Handles searching for titles based on source title input.
	 */
	CXSourceSelector.prototype.searchHandler = function () {
		var $input = this.$sourceTitleInput;

		this.$messageBar.hide();
		this.searchTitles(
			this.getSourceLanguage(),
			$input.val()
		).done( function ( response ) {
			$input.suggestions( 'suggestions', response[ 1 ] );
		} );
	};

	/**
	 * Handles source language change.
	 *
	 * @param {string} language Language code.
	 */
	CXSourceSelector.prototype.sourceLanguageChangeHandler = function ( language ) {
		this.setSourceLanguage( language );
		this.$sourceTitleInput.attr( {
			lang: language,
			dir: $.uls.data.getDir( language )
		} );
		this.$sourcePageSelector.setApi( this.siteMapper.getApi( language ) );
		this.check();
	};

	/**
	 * Handles target language change.
	 *
	 * @param {string} language Language code.
	 */
	CXSourceSelector.prototype.targetLanguageChangeHandler = function ( language ) {
		// Don't allow setting the target language to the source language.
		if ( language === this.getSourceLanguage() ) {
			return;
		}

		this.setTargetLanguage( language );
		this.check();
	};

	/**
	 * Handles Enter (Return) keypress.
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
			sourceTitle = this.$sourceTitleInput.val().trim(),
			targetTitle = this.$targetTitleInput.val().trim(),
			selector = this;

		this.$messageBar.hide();

		// We do not want to show "title does not exist" for empty input
		if ( sourceTitle === '' ) {
			this.$translateFromButton.prop( 'disabled', true );

			return;
		}

		// Perform multitude of validations for the titles
		this.validator.isTitleExistInLanguage( sourceLanguage, sourceTitle ).then( function ( sourceTitle ) {
			var titleCheck, translationCheck;

			selector.$translateFromButton.prop( 'disabled', !sourceTitle );

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
		var $messageText = $( '.cx-sourceselector-dialog__messagebar-text' );

		if ( message instanceof mw.Message ) {
			$messageText.html( message.parse() );
		} else {
			$messageText.text( message );
		}

		this.$messageBar.find( 'a' )
			.attr( 'target', '_blank' );

		this.$messageBar.show();
	};

	/**
	 * Show the CXSourceSelector.
	 */
	CXSourceSelector.prototype.show = function () {
		var $container = this.options.container;

		if ( $container && $container instanceof jQuery ) {
			this.showAsEmbedded( $container );
		} else {
			this.showAsDialog();
		}

		// If there is something in the source field, it is probably auto-filled,
		// so go immediately to the target to save time
		if ( this.options.sourceTitle ) {
			this.$targetTitleInput.focus();
		} else {
			this.$sourceTitleInput.focus();
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
			top = ( $( window ).height() - this.$dialog.height() ) / 2;
			top = top + $( document ).scrollTop();
		}

		if ( this.options.left ) {
			left = this.options.left;
		} else {
			left = ( $( window ).width() - this.$dialog.width() ) / 2;
		}

		this.$dialog.css( {
			top: top,
			left: left
		} );

		if ( !this.overlay ) {
			this.overlay = new mw.cx.widgets.overlay();
		}

		this.overlay.show();
		this.$dialog.show();
	};

	/**
	 * Embeds source selector dialog inside the element
	 * specified by $container.
	 *
	 * @param {jQuery} $container the container in which to embed the selector
	 */
	CXSourceSelector.prototype.showAsEmbedded = function ( $container ) {
		$container.append( this.$dialog );
		this.$dialog.show();
	};

	/**
	 * Cancels the translation starting process and hides the dialog.
	 */
	CXSourceSelector.prototype.cancel = function () {
		this.$sourceTitleInput.val( '' );
		this.$targetTitleInput.val( '' );

		this.$translateFromButton.prop( 'disabled', true );
		this.$messageBar.hide();

		if ( !this.options.container ) {
			this.overlay.hide();
			this.$dialog.hide();
		}
	};

	/**
	 * Provides titles for autocompletion from given wiki.
	 *
	 * @param {string} language
	 * @param {string} input
	 * @return {jQuery.Deferred}
	 */
	CXSourceSelector.prototype.searchTitles = function ( language, input ) {
		var api = this.siteMapper.getApi( language );

		return api.get( {
			action: 'opensearch',
			search: input,
			namespace: 0,
			suggest: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} );
	};

	/**
	 * Hide the entry point dialog.
	 */
	CXSourceSelector.prototype.hide = function () {
		this.$dialog.hide();
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
		originalSourceTitle = this.$sourceTitleInput.val().trim();
		targetTitle = this.$targetTitleInput.val().trim();

		this.validator.isTitleExistInLanguage(
			sourceLanguage,
			originalSourceTitle
		).done( function ( sourceTitle ) {
			if ( sourceTitle === false ) {
				selector.showSourceTitleError( sourceLanguage );
				selector.$sourceTitleInput.focus();
				return;
			}

			if ( targetTitle === '' ) {
				targetTitle = originalSourceTitle;
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
		var storedTargetLanguage, storedSourceLanguage,
			targetLanguage, sourceLanguage,
			commonSourceLanguages, i;

		storedTargetLanguage = mw.storage.get( 'cxTargetLanguage' );
		storedSourceLanguage = mw.storage.get( 'cxSourceLanguage' );

		targetLanguage = storedTargetLanguage || mw.config.get( 'wgContentLanguage' );
		sourceLanguage = storedSourceLanguage;

		if ( !this.isValidSource( sourceLanguage ) ) {
			commonSourceLanguages = this.$sourceLanguage.data( 'uls' ).options.quickList();

			for ( i = 0; i < commonSourceLanguages.length; i++ ) {
				if ( commonSourceLanguages[ i ] !== targetLanguage &&
					this.isValidSource( commonSourceLanguages[ i ], targetLanguage )
				) {
					sourceLanguage = commonSourceLanguages[ i ];

					break;
				}
			}
		}

		// Still couldn't find a valid source language?
		if ( !this.isValidSource( sourceLanguage ) ) {
			sourceLanguage = mw.config.get( 'wgContentTranslationDefaultSourceLanguage' );
		}

		this.setSourceLanguage( sourceLanguage );
		this.setTargetLanguage( targetLanguage );
	};

	/**
	 * Render the CXSourceSelector dialog.
	 */
	CXSourceSelector.prototype.render = function () {
		var $heading,
			$sourceLanguageLabel, $sourceLanguageLabelContainer, $sourceLanguageContainer,
			$targetLanguageLabel, $targetLanguageLabelContainer, $targetLanguageContainer,
			$sourceTitleInputContainer, $targetTitleInputContainer,
			$sourceInputs, $targetInputs,
			$messageText,
			translateButtonLabel,
			$actions, $license,
			cxSourceSelector = this;

		this.$dialog = $( '<div>' )
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
			onVisible: function () {
				if ( $( 'html' ).prop( 'dir' ) === 'rtl' ) {
					this.left = this.$element.offset().left + this.$element.parent().width() - this.$menu.width();
				} else {
					this.left = this.$element.offset().left;
				}

				this.$menu.css( this.position() );
			},
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

		this.$sourceTitleInput = $( '<input>' )
			.attr( {
				name: 'sourceTitle',
				type: 'search',
				list: 'searchresults',
				placeholder: mw.msg( 'cx-sourceselector-dialog-source-title-placeholder' )
			} );

		$sourceTitleInputContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__title' )
			.append( this.$sourceTitleInput );

		this.$targetTitleInput = $( '<input>' )
			.attr( {
				name: 'targetTitle',
				placeholder: mw.msg( 'cx-sourceselector-dialog-target-title-placeholder' )
			} );

		$targetTitleInputContainer = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__title' )
			.append( this.$targetTitleInput );

		$sourceInputs = $( '<div>' )
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

		this.setDefaultLanguages();

		this.$sourcePageSelector = new mw.PageSelector( this.$sourceTitleInput, {
			api: this.siteMapper.getApi( this.getSourceLanguage() )
		} );

		this.$messageBar = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__messagebar' );
		$messageText = $( '<span>' )
			.addClass( 'cx-sourceselector-dialog__messagebar-text' );
		this.$messageBar
			.append( $messageText )
			.hide();

		this.$cancelButton = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-quiet cx-sourceselector-dialog__button-cancel' )
			.text( mw.msg( 'cx-sourceselector-dialog-button-cancel' ) )
			.click( $.proxy( this.cancel, this ) );

		translateButtonLabel = mw.msg( 'cx-sourceselector-dialog-button-start-translation' );
		this.$translateFromButton = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-progressive cx-sourceselector-dialog__button-translate' )
			.text( translateButtonLabel )
			.prop( 'disabled', true )
			.click( $.proxy( this.startPageInCX, this ) );

		$license = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__license' )
			.html( mw.message( 'cx-license-agreement', translateButtonLabel ).parse() );

		$actions = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__actions' );

		$actions.append( this.$cancelButton, this.$translateFromButton );

		this.$dialog.append( $heading,
			$sourceInputs,
			$targetInputs,
			this.$messageBar,
			$license,
			$actions
		);

		$( 'body' ).append( this.$dialog );

		this.prefill();
	};

	mw.cx.CXSourceSelector = CXSourceSelector;

	/**
	 * CXEntryPoint Plugin
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
