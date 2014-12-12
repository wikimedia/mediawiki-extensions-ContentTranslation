/**
 * ContentTranslation Tools
 * A tool that allows editors to translate pages from one language
 * to another with the help of machine translation and other translation tools
 *
 * @file
 * @ingroup Extensions
 * @copyright See AUTHORS.txt
 * @license GPL-2.0+
 */
( function ( $, mw ) {
	'use strict';

	/**
	 * CXSourceSelector
	 * @class
	 */
	function CXSourceSelector( $trigger, siteMapper, options ) {
		this.$trigger = $( $trigger );
		this.options = $.extend( {}, options );
		this.siteMapper = siteMapper;

		this.languagePairs = null;
		this.sourceLanguages = [];
		this.targetLanguages = [];

		this.$dialog = null;
		this.$sourceLanguage = null;
		this.$targetLanguage = null;
		this.$messageBar = null;
		this.$sourceTitleInput = null;
		this.$targetTitleInput = null;
		this.$overlay = null;
		this.init();
	}

	/**
	 * Return an object of languages indexed by language code.
	 * @param {array} languages An array of language codes.
	 * return {object} Autonyms indexed by language code.
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
	 * Get all the source and target languages.
	 * @return {jQuery.Promise}
	 */
	CXSourceSelector.prototype.getLanguagePairs = function () {
		var languagePairsAPIUrl, cxSourceSelector = this;

		languagePairsAPIUrl = this.siteMapper.getCXServerUrl( '/languagepairs' );

		return $.get( languagePairsAPIUrl )
			.done( function ( response ) {
				var sourceLanguage, i,
					targetLanguages = [];

				cxSourceSelector.languagePairs = response;
				for ( sourceLanguage in cxSourceSelector.languagePairs ) {
					cxSourceSelector.sourceLanguages.push( sourceLanguage );
					$.merge( targetLanguages, cxSourceSelector.languagePairs[ sourceLanguage ] );
				}

				if ( !cxSourceSelector.targetLanguages ) {
					cxSourceSelector.targetLanguages = [];
				}

				// Make the target languages array unique
				targetLanguages = targetLanguages.sort();
				for ( i = 0; i < targetLanguages.length; i++ ) {
					if ( targetLanguages[ i ] !== targetLanguages[ i - 1 ] ) {
						cxSourceSelector.targetLanguages.push( targetLanguages[ i ] );
					}
				}
			} )
			.fail( function ( response ) {
				mw.log(
					'Error getting language pairs from ' + languagePairsAPIUrl + ' . ' +
					response.statusText + ' (' + response.status + '). ' +
					response.responseText
				);
			} );
	};

	/**
	 * Returns the valid source languages for the given target language
	 * @param {string} targetLanguage A language code
	 * @return {array} An array of valid source languages
	 */
	CXSourceSelector.prototype.getValidSourceLanguages = function ( targetLanguage ) {
		var sourceLanguage,
			validSourceLanguages = [];

		for ( sourceLanguage in this.languagePairs ) {
			if ( $.inArray( targetLanguage, this.languagePairs[ sourceLanguage ] ) > -1 ) {
				validSourceLanguages.push( sourceLanguage );
			}
		}

		return validSourceLanguages;
	};

	/**
	 * Returns the valid target languages for the given source langauge
	 * @param {string} sourceLanguage A language code
	 * @return {array} An array of valid target languages
	 */
	CXSourceSelector.prototype.getValidTargetLanguages = function ( sourceLanguage ) {
		return this.languagePairs[ sourceLanguage ];
	};

	/**
	 * Check whether a language is available as a target language
	 * for the specified source language.
	 * @param {string} targetLanguage A language code.
	 * @param {string} sourceLanguage A language code.
	 * return {boolean} true if the target language is valid for the source language.
	 */
	CXSourceSelector.prototype.isValidTarget = function ( targetLanguage, sourceLanguage ) {
		return ( $.inArray(
			targetLanguage,
			this.languagePairs[ sourceLanguage ]
		) > -1 );
	};

	/**
	 * Check whether a language is available as a source language
	 * for the specified target language.
	 * @param {string} targetLanguage A language code.
	 * @param {string} sourceLanguage A language code.
	 * return {boolean} true if the target language is valid for the source language.
	 */
	CXSourceSelector.prototype.isValidSource = function ( sourceLanguage, targetLanguage ) {
		var sourceLanguages;

		sourceLanguages = this.getValidSourceLanguages( targetLanguage );

		return ( $.inArray(
			sourceLanguage,
			sourceLanguages
		) > -1 );
	};

	/**
	 * Get the current source language code.
	 * return {string} Language code. Empty string if not set.
	 */
	CXSourceSelector.prototype.getSourceLanguage = function () {
		return this.$sourceLanguage.prop( 'lang' );
	};

	/**
	 * Sets the source language
	 * @param {string} language A language code
	 */
	CXSourceSelector.prototype.setSourceLanguage = function ( language ) {
		this.$sourceLanguage
			.prop( {
				lang: language,
				dir: $.uls.data.getDir( language )
			} )
			.text( $.uls.data.getAutonym( language ) );

		if ( localStorage ) {
			localStorage.cxSourceLanguage = language;
		}
	};

	/**
	 * Get the current target language code.
	 * return {string} Language code. Empty string if not set.
	 */
	CXSourceSelector.prototype.getTargetLanguage = function () {
		return this.$targetLanguage.prop( 'lang' );
	};

	/**
	 * Sets the target language
	 * @param {string} language A language code
	 */
	CXSourceSelector.prototype.setTargetLanguage = function ( language ) {
		this.$targetLanguage
			.prop( {
				lang: language,
				dir: $.uls.data.getDir( language )
			} )
			.text( $.uls.data.getAutonym( language ) );

		if ( localStorage ) {
			localStorage.cxTargetLanguage = language;
		}
	};

	/**
	 * Fill the target language dropdown with target languages that have
	 * language tools compatible with the source language.
	 */
	CXSourceSelector.prototype.fillTargetLanguages = function () {
		var cxSourceSelector = this,
			targetUlsClass = 'cx-sourceselector-uls-target',
			sourceLanguage = this.getSourceLanguage();

		// Delete the old target ULS
		$( '.' + targetUlsClass ).remove();
		this.$targetLanguage.data( 'uls', null );

		// Create a new target ULS
		this.$targetLanguage.uls( {
			languages: getAutonyms( this.targetLanguages ),
			onSelect: function ( language ) {
				cxSourceSelector.targetLanguageChangeHandler( language );
			},
			onReady: function () {
				this.$menu.addClass( targetUlsClass );
			},
			languageDecorator: function ( $languageLink, language ) {
				if ( !cxSourceSelector.isValidTarget( language, sourceLanguage ) ) {
					$languageLink.addClass( 'cx-sourceselector-unavailable-target' );
				}
			},
			compact: true
		} );
	};

	/**
	 * Listen for events.
	 */
	CXSourceSelector.prototype.listen = function () {
		// Open or close the dialog when clicking the link.
		// The dialog will be unitialized until the first click.
		this.$trigger.click( $.proxy( this.show, this ) );

		// Source title input input (search titles)
		this.$sourceTitleInput.on(
			'input',
			$.debounce( 100, false, $.proxy( this.searchHandler, this ) )
		);

		// Source title input or target title input, input or search (check)
		this.$dialog.on(
			'input blur',
			'.cx-sourceselector-dialog__title',
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
	 * Handles searching for titles based on source title input
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
	 * Handles source language change
	 * @param {string} language Language code.
	 */
	CXSourceSelector.prototype.sourceLanguageChangeHandler = function ( language ) {
		this.setSourceLanguage( language );
		this.fillTargetLanguages();
		this.setTargetLanguage( this.getValidTargetLanguages( language )[ 0 ] );
		this.check();
	};

	/**
	 * Handles target language change.
	 * @param {string} language Language code.
	 */
	CXSourceSelector.prototype.targetLanguageChangeHandler = function ( language ) {
		// Only allow valid target languages to be selected
		if ( !this.isValidTarget( language, this.getSourceLanguage() ) ) {
			return;
		}

		this.setTargetLanguage( language );

		// Disable the target input if the target language is not valid
		// for the current source language
		this.$targetTitleInput
			.prop( 'disabled', !this.isValidTarget( language, this.getSourceLanguage() ) );

		this.check();
	};

	/**
	 * Handles enter keypress
	 */
	CXSourceSelector.prototype.enterKeyHandler = function ( e ) {
		var sourceLanguage = this.getSourceLanguage(),
			sourceTitle = this.$sourceTitleInput.val().trim(),
			selector = this;

		if ( e.which === 13 && sourceTitle !== '' ) {
			this.checkForTitle( sourceLanguage, sourceTitle )
				.done( function ( response ) {
					if ( response !== false ) {
						selector.startPageInCX();
					}
				} );
		}
	};

	/**
	 * Checks source and target inputs for errors.
	 */
	CXSourceSelector.prototype.check = function () {
		var sourceLanguage = this.getSourceLanguage(),
			targetLanguage = this.getTargetLanguage(),
			sourceTitle = this.$sourceTitleInput.val().trim(),
			targetTitle = this.$targetTitleInput.val().trim(),
			selector = this;

		this.$messageBar.hide();

		// if source title is blank, disable button and skip validation
		if ( !sourceTitle ) {
			selector.$translateFromButton.prop( 'disabled', true );
			return;
		}

		// check to see if the specified source article exists
		this.checkForTitle( sourceLanguage, sourceTitle )
			.done( function ( sourcePage ) {
				// if no source page to translate disable button and show error
				// skip rest of validation checks
				if ( !sourcePage ) {
					selector.$translateFromButton.prop( 'disabled', true );
					selector.showSourceTitleError( sourceLanguage );
				} else {
					selector.$translateFromButton.prop( 'disabled', false );
					// check to see if there is a matching article in the target wiki
					// the matching article may or may not have the same title
					selector.checkForEquivalentTargetPage(
						sourceLanguage,
						targetLanguage,
						sourceTitle
					)
						.done( function ( equivalentTargetPage ) {
							// check to see if the specified target title is in use
							// must be nested inside check for matching target article
							// because first possible error requires results of both api calls
							selector.checkForTitle( targetLanguage, targetTitle )
								.done( function ( existingTargetTitle ) {
									// if there is a matching target page and
									// the specified target title is in use
									if ( equivalentTargetPage && existingTargetTitle ) {
										selector.showPageExistsAndTitleInUseError(
											equivalentTargetPage,
											existingTargetTitle
										);
										// if there is just an matching target page
									} else if ( equivalentTargetPage ) {
										selector.showPageExistsError( equivalentTargetPage );
										// if the specified target title is in use
									} else if ( existingTargetTitle ) {
										selector.showTitleInUseError( existingTargetTitle );
									}
								} );
						} );
				}
			} );
	};

	/**
	 * Checks to see if a title exists in the specified language wiki
	 * @param {string} language the language of the wiki to check
	 * @param {string} title the title to look for
	 * return {jQuery.promise}
	 */
	CXSourceSelector.prototype.checkForTitle = function ( language, title ) {
		var api = this.siteMapper.getApi( language ),
			$deferred = $.Deferred();

		api.get( {
			action: 'opensearch',
			search: title,
			namespace: 0,
			format: 'json',
			limit: 1
		}, {
			dataType: 'jsonp',
			// This prevents warnings about the unrecognized parameter "_"
			cache: true
		} )
			.done( function ( response ) {
				if ( response[ 1 ][ 0 ] === title ) {
					$deferred.resolve( title );
				} else {
					$deferred.resolve( false );
				}
			} )
			.fail( function () {
				$deferred.resolve( false );
			} );
		return $deferred.promise();
	};

	/**
	 * Checks for an equivalent page in the target wiki based on sourceTitle
	 * @param {string} sourceLanguage the source language
	 * @param {string} targetLanguage the target language
	 * @param {string} sourceTitle the title to check
	 * @return {jQuery.promise}
	 */
	CXSourceSelector.prototype.checkForEquivalentTargetPage = function (
		sourceLanguage,
		targetLanguage,
		sourceTitle
	) {
		var api = this.siteMapper.getApi( sourceLanguage ),
			$deferred = $.Deferred();

		api.get( {
			action: 'query',
			prop: 'langlinks',
			titles: sourceTitle,
			lllang: targetLanguage,
			lllimit: 1,
			redirects: true,
			format: 'json'
		}, {
			dataType: 'jsonp',
			cache: true
		} ).done( function ( response ) {
			var equivalentTargetPage = false;
			if ( response.query && response.query.pages ) {
				$.each( response.query.pages, function ( pageId, page ) {
					if ( page.langlinks ) {
						equivalentTargetPage = page.langlinks[ 0 ][ '*' ];
					}
				} );
			}
			$deferred.resolve( equivalentTargetPage );
		} ).fail( function () {
			$deferred.resolve( false );
		} );

		return $deferred.promise();
	};

	/**
	 * Shows error for source page not existing
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
	 * Shows error for target page existing and target title in use
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
	 * Shows error for page already existing in target
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
	 * Shows error for title already in use in target wiki
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
	 * Shows error message for dialog
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
	 * Show the CXSourceSelector
	 */
	CXSourceSelector.prototype.show = function () {
		var $container = this.options.container;

		if ( $container && $container instanceof jQuery ) {
			this.showAsEmbedded( $container );
		} else {
			this.showAsDialog();
		}
	};

	/**
	 * Shows the source selector as a dialog. If top and left options
	 * are provided, uses those for positioning. Otherwise centered.
	 * If the option 'overlay' has been passed in, and overlay is placed
	 * over the rest of the content on the page.
	 */
	CXSourceSelector.prototype.showAsDialog = function () {
		var top, left, dir;

		dir = $( 'html' ).prop( 'dir' );

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

		if ( dir === 'rtl' ) {
			left = left - this.$dialog.width();
		}

		this.$dialog.css( {
			'top': top,
			'left': left,
			'z-index': 100
		} );

		if ( !this.$overlay ) {
			this.$overlay = $( '<div>' )
				.addClass( 'cx-sourceselector-dialog__overlay' );
			$( 'body' ).append( this.$overlay );
		}

		this.$overlay.show();
		this.$dialog.show();
	};

	/**
	 * Embeds source selector dialog inside the element
	 * specified by $container
	 * @param {jQuery} $container, the container in which to embed the selector
	 */
	CXSourceSelector.prototype.showAsEmbedded = function ( $container ) {
		$container.append( this.$dialog );
		this.$dialog.show();
	};

	/**
	 * Cancels the start translation process and hides dialog
	 */
	CXSourceSelector.prototype.cancel = function () {
		this.$sourceTitleInput.val( '' );
		this.$targetTitleInput.val( '' );
		this.$translateFromButton.prop( 'disabled', true );
		this.$messageBar.hide();
		if ( !this.options.container ) {
			this.$overlay.hide();
			this.$dialog.hide();
		}
	};

	/**
	 * Provides titles for autocompletion from given wiki.
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
	 * Start a new page translation in Special:CX
	 */
	CXSourceSelector.prototype.startPageInCX = function () {
		var targetTitle;

		if ( this.$targetTitleInput.val() === '' ) {
			targetTitle = this.$sourceTitleInput.val();
		} else {
			targetTitle = this.$targetTitleInput.val();
		}
		location.href = this.siteMapper.getCXUrl(
			this.$sourceTitleInput.val(),
			targetTitle,
			this.getSourceLanguage(),
			this.getTargetLanguage()
		);
	};

	CXSourceSelector.prototype.setDefaultLanguages = function () {
		var sourceLanguage, targetLanguage;

		// If there is a target language code in localStorage, use that.
		// Otherwise default to wiki content language
		if ( localStorage && localStorage.cxTargetLanguage ) {
			targetLanguage = localStorage.cxTargetLanguage;
		} else {
			targetLanguage = mw.config.get( 'wgContentLanguage' );
		}

		// If there is a source language code in localStorage and it is valid
		// for the target language, use that.
		// Otherwise use the first valid source language.
		if ( localStorage &&
			localStorage.cxSourceLanguage &&
			this.isValidSource( localStorage.cxSourceLanguage, targetLanguage )
		) {
			sourceLanguage = localStorage.cxSourceLanguage;
		} else {
			sourceLanguage = this.getValidSourceLanguages( targetLanguage )[ 0 ];
		}

		// Set the source language
		this.setSourceLanguage( sourceLanguage );
		// Fill in the target languages
		this.fillTargetLanguages();
		// Set the target language
		this.setTargetLanguage( targetLanguage );
	};

	/**
	 * Render the CXSourceSelector dialog.
	 */
	CXSourceSelector.prototype.render = function () {
		var $actions,
			$sourceLanguageLabel,
			$heading, $targetLanguageLabel,
			$sourceInputs, $targetInputs,
			$messageText,
			translateButtonLabel,
			$license,
			cxSourceSelector = this;

		this.$dialog = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog' )
			.hide();

		$heading = $( '<div>' ).addClass( 'cx-sourceselector-dialog__heading' )
			.text( mw.msg( 'cx-sourceselector-dialog-new-translation' ) );

		$sourceLanguageLabel = $( '<label>' ).addClass( 'cx-sourceselector-dialog__language-label' )
			.text( mw.msg( 'cx-sourceselector-dialog-source-language-label' ) );

		this.$sourceLanguage = $( '<button>' )
			.addClass( 'cx-sourceselector-dialog__language mw-ui-button' );

		this.$sourceLanguage.uls( {
			languages: getAutonyms( this.sourceLanguages ),
			onSelect: function ( language ) {
				cxSourceSelector.sourceLanguageChangeHandler( language );
			},
			onReady: function () {
				this.$menu.addClass( 'cx-sourceselector-uls-source' );
			},
			compact: true
		} );

		$targetLanguageLabel = $( '<label>' ).addClass( 'cx-sourceselector-dialog__language-label' )
			.text( mw.msg( 'cx-sourceselector-dialog-target-language-label' ) );

		this.$targetLanguage = $( '<button>' )
			.addClass( 'cx-sourceselector-dialog__language mw-ui-button' );

		this.setDefaultLanguages();

		this.$sourceTitleInput = $( '<input>' )
			.addClass( 'cx-sourceselector-dialog__title' )
			.attr( {
				name: 'sourceTitle',
				type: 'search',
				list: 'searchresults',
				placeholder: mw.msg( 'cx-sourceselector-dialog-source-title-placeholder' )
			} );

		this.$targetTitleInput = $( '<input>' )
			.addClass( 'cx-sourceselector-dialog__title' )
			.attr( {
				name: 'targetTitle',
				placeholder: mw.msg( 'cx-sourceselector-dialog-target-title-placeholder' )
			} );

		$sourceInputs = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__source-inputs' )
			.append( $sourceLanguageLabel,
				this.$sourceLanguage,
				this.$sourceTitleInput
		);
		$targetInputs = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__target-inputs' )
			.append(
				$targetLanguageLabel,
				this.$targetLanguage,
				this.$targetTitleInput
		);

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
			.text( mw.msg( 'cx-sourceselector-dialog-button-start-translation' ) )
			.prop( 'disabled', true )
			.click( $.proxy( this.startPageInCX, this ) );

		$actions = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__actions' );

		$actions.append( this.$cancelButton, this.$translateFromButton );

		$license = $( '<div>' )
			.addClass( 'cx-sourceselector-dialog__license' )
			.html( mw.message( 'cx-license-agreement', translateButtonLabel ).parse() );

		this.$dialog.append( $heading,
			$sourceInputs,
			$targetInputs,
			this.$messageBar,
			$license,
			$actions
		);

		$( 'body' ).append( this.$dialog );
	};

	/**
	 * CXEntryPoint Plugin
	 */
	$.fn.cxSourceSelector = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxsourceselector' );

			if ( !data ) {
				$this.data( 'cxsourceselector', ( data = new CXSourceSelector( this, mw.cx.siteMapper, options ) ) );
			}
		} );
	};

}( jQuery, mediaWiki ) );
