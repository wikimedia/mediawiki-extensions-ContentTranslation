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

	var
		cxserverToken = {
			expires: undefined,
			jwt: undefined,
			promise: undefined
		},
		mtProvidersRequestCache = {},
		mtRequestCache = {}, // MT requests cache
		noMT = 'no-mt',
		resetMT = 'reset-mt',
		sourceMT = 'source-mt';

	/**
	 * Machine Translation functionality related to a section
	 *
	 * @class
	 * @param {string} sourceId Source section id
	 * @param {Object} options Options
	 */
	function MachineTranslation( sourceId, options ) {
		this.sourceId = sourceId;
		this.$targetSection = null;
		this.$sourceSection = null;
		this.options = $.extend( {}, mw.cx.MachineTranslation.defaults, options );
		this.siteMapper = this.options.siteMapper;
		this.sourceLanguage = this.options.sourceLanguage;
		this.targetLanguage = this.options.targetLanguage;
		this.translationStorage = {}; // Remember the translation between provider switching.
		// This is for backwards compatibility with old drafts. For example
		// we have lots of drafts stored with language code "no".
		this.sourceLanguage = this.siteMapper.getLanguageCodeForWikiDomain( this.sourceLanguage );
		this.targetLanguage = this.siteMapper.getLanguageCodeForWikiDomain( this.targetLanguage );
		this.translationOptions = [ sourceMT, noMT ];
		// Available providers
		this.providers = null;
		// The current selected provider
		this.provider = null;
	}

	MachineTranslation.prototype.init = function () {
		var self = this;

		if ( this.providers ) {
			// An already initialized instance.
			return $.Deferred().resolve();
		}
		this.$sourceSection = mw.cx.getSourceSection( this.sourceId );
		this.$targetSection = mw.cx.getTranslationSection( this.sourceId );
		this.translationStorage = {};

		// A validation for the passed sourceId - See if a section exists.
		if ( !this.$sourceSection || !this.$sourceSection.length ) {
			return $.Deferred().reject();
		}

		// Validate whether a corresponding target section exists.
		// It may happen in case of template generated sections in source that we filter out.
		// Or when target section is not ready yet.
		if ( !this.$targetSection || !this.$targetSection.length ) {
			return $.Deferred().reject();
		}

		return this.getProviders().then( function ( providers ) {
			var cxState, mtProvider;

			self.providers = providers;
			// Also try to infer the provider from the section if it is restored.
			mtProvider = self.$targetSection.data( 'cx-mt-provider' );
			cxState = self.$targetSection.data( 'cx-state' );

			if ( cxState === 'empty' ) {
				self.provider = noMT;
			} else if ( cxState === 'source' ) {
				self.provider = sourceMT;
			} else {
				self.provider = mtProvider || self.getPreferredProvider();
			}

			mw.log( '[CX][MT] Initialized MT for section ' + self.sourceId +
				' with provider ' + self.provider );
		} );
	};

	/**
	 * Change the MT provider. Also save the current translation for future
	 * switching back.
	 *
	 * @param {string} newProvider New provider id
	 */
	MachineTranslation.prototype.changeProvider = function ( newProvider ) {
		if ( newProvider === resetMT ) {
			this.translationStorage = {};
		} else {
			// Remember the section HTML
			this.translationStorage[ this.provider ] = this.$targetSection[ 0 ].outerHTML;
		}

		this.provider = newProvider;

		mw.log( '[CX][MT] Switched provider from ' + this.provider + ' to ' + newProvider );
	};

	/**
	 * Fetch token for authentication with cxserver.
	 *
	 * @return {jQuery.Promise}
	 */
	MachineTranslation.prototype.getCXServerToken = function () {
		var now = Math.floor( Date.now() / 1000 );

		// If request in progress, wait for it
		if ( cxserverToken.promise ) {
			return cxserverToken.promise;
		}

		// Return cached token if fresh and not expiring soon.
		// And hope that client clock is at correct time.
		if (
			cxserverToken.expires !== undefined &&
			cxserverToken.expires + 5 < now
		) {
			return $.Deferred().resolve( cxserverToken.jwt );
		}

		// (Re-)fetch cxserver token
		cxserverToken.promise = ( new mw.Api() )
			.postWithToken( 'csrf', {
				action: 'cxtoken'
			} )
			.always( function () {
				cxserverToken.promise = undefined;
			} )
			.then( function ( response ) {
					cxserverToken.jwt = response.jwt;
					cxserverToken.expires = response.exp;

					return response.jwt;
				},
				// Not all MT services require token, so let the caller try
				// with empty token to see if it fails.
				function () {
					return $.Deferred().resolve( '' );
				}
			);

		return cxserverToken.promise;
	};

	/**
	 * Translate the given source section
	 *
	 * @return {jQuery.Promise}
	 */
	MachineTranslation.prototype.getTranslatedSection = function () {
		var mtURL, sourceContent, sectionTranslationRequest;

		mtURL = this.siteMapper.getCXServerUrl( '/mt/$from/$to/$provider', {
			$from: this.sourceLanguage,
			$to: this.targetLanguage,
			$provider: this.provider
		} );

		if ( this.$sourceSection.data( 'editable' ) === false ) {
			return $.Deferred().reject();
		}

		sectionTranslationRequest = mtRequestCache[ this.sourceId ] &&
			mtRequestCache[ this.sourceId ][ this.provider ];

		if ( !sectionTranslationRequest ) {
			sourceContent = this.getSimplifiedHTMLForMT( this.$sourceSection );
			sectionTranslationRequest =
				this.getCXServerToken().then( function ( token ) {
					var req = {
						type: 'post',
						url: mtURL,
						data: {
							html: sourceContent
						},
						headers: {
							Authorization: token
						}
					};
					return $.ajax( req ).then( function ( response ) {
						// Translation is sent as json string
						// Automatically parsed by jQuery into object
						// Html is inside contents field
						return response.contents;
					} );
				} );
			// Put that in cache.
			mtRequestCache[ this.sourceId ] = mtRequestCache[ this.sourceId ] || {};
			mtRequestCache[ this.sourceId ][ this.provider ] = sectionTranslationRequest;
		}

		return sectionTranslationRequest;
	};

	/**
	 * Clean up the section by removing data-parsoid and data-mw attributes
	 *
	 * @param {jQuery} $section
	 * @return {string}
	 */
	MachineTranslation.prototype.getSimplifiedHTMLForMT = function ( $section ) {
		var $wrapper = $( '<div>' ).append( $section.clone() );

		$wrapper.find( '*' ).removeAttr( 'data-parsoid data-mw' );

		return $wrapper.html();
	};

	MachineTranslation.prototype.markMTLoading = function () {
		this.$targetSection.empty().append( mw.cx.widgets.spinner() );
	};

	MachineTranslation.prototype.setFocus = function () {
		var scrollTop;

		// Get the current scroll top position to restore this position.
		scrollTop = $( document ).scrollTop();
		// Note that if the section is not editable - if its contenteditable attribute
		// value is false, we cannot focus on it.
		this.$targetSection.focus();
		// Capture and save the new selection and cursor position
		mw.cx.selection.save( 'translation', mw.cx.selection.get() );
		// Avoid page scrolling while setting focus.
		window.scrollTo( 0, scrollTop );
	};

	MachineTranslation.prototype.useSource = function () {
		var $clone;

		if ( this.translationStorage[ this.provider ] ) {
			this.$targetSection.replaceWith( $( this.translationStorage[ this.provider ] ) );
		} else {
			$clone = this.$sourceSection.clone()
				.attr( {
					id: 'cx' + this.sourceId,
					'data-source': this.sourceId,
					'data-cx-state': 'source'
				} );
		}
		this.replaceSectionWith( $clone );
	};

	MachineTranslation.prototype.clearSection = function () {
		var $clone;

		if ( this.translationStorage[ this.provider ] ) {
			this.replaceSectionWith( $( this.translationStorage[ this.provider ] ) );
		} else {
			$clone = this.$sourceSection.clone()
				.attr( {
					id: 'cx' + this.sourceId,
					'data-source': this.sourceId,
					'data-cx-state': 'empty'
				} );
			if ( this.$sourceSection.is( 'figure' ) ) {
				// Clear figure caption alone.
				$clone.find( 'figcaption' ).empty();
			} else if ( this.$sourceSection.is( 'ul, ol' ) ) {
				// Explicit contenteditable attribute helps to place the cursor
				// in empty <ul> or <ol>.
				$clone.prop( 'contenteditable', true ).find( 'li' ).empty();
			} else {
				$clone.empty();
			}
			this.replaceSectionWith( $clone );
		}
	};

	/**
	 * Replace the translation section with the given content.
	 * Update the references, fire the postMT event, and set the focus.
	 *
	 * @param {jQuery} $content The jQuery object to replace the section.
	 */
	MachineTranslation.prototype.replaceSectionWith = function ( $content ) {
		// Replace the placeholder with a translatable element
		this.$targetSection.replaceWith( $content );
		// $section was replaced. Get the updated instance.
		this.$targetSection = mw.cx.getTranslationSection( this.sourceId );
		mw.hook( 'mw.cx.translation.postMT' ).fire( this.$targetSection );
		this.setFocus();
	};

	MachineTranslation.prototype.reset = function () {
		this.provider = this.getPreferredProvider();
		this.translate();
	};

	MachineTranslation.prototype.translate = function () {
		var self = this;

		//  Use source content as translation template
		if ( this.provider === sourceMT ) {
			return this.useSource();
		}

		// No translation template
		if ( this.provider === noMT ) {
			return this.clearSection();
		}

		// Reset the translation to the unmodified MT from current provider.
		if ( this.provider === resetMT ) {
			return this.reset();
		}
		this.markMTLoading();
		// Check if there is any user edited version of this MT
		if ( self.translationStorage[ self.provider ] ) {
			self.replaceSectionWith( $( self.translationStorage[ self.provider ] ) );
		} else {
			this.getTranslatedSection( this.$sourceSection )
				.done( function ( translation ) {
					if ( !translation || !translation.length ) {
						return self.useSource();
					}

					// Use fresh copy
					self.replaceSectionWith( $( translation )
						.children()
						.attr( {
							id: 'cx' + self.sourceId,
							'data-source': self.sourceId,
							'data-cx-state': 'mt',
							'data-cx-mt-provider': self.provider
						} ) );
				} ).fail( function () {
					return self.useSource();
				} ).always( function () {
					var $nextSection = self.$targetSection.next();
					// Initiate the request for next section. Translation prefetch.
					if ( $nextSection.is( '.placeholder' ) ) {
						initTranslationRequest( $nextSection.data( 'source' ) );
					}
				} );
		}
	};

	/**
	 * Get the registry of machine translation providers
	 * for a language pair from the CX server.
	 *
	 * @return {jQuery.Promise}
	 */
	MachineTranslation.prototype.getProviders = function () {
		var fetchProvidersUrl, cacheKey;

		cacheKey = this.sourceLanguage + '-' + this.targetLanguage;
		if ( mtProvidersRequestCache[ cacheKey ] ) {
			return mtProvidersRequestCache[ cacheKey ];
		}

		fetchProvidersUrl = this.siteMapper.getCXServerUrl( '/list/mt/$from/$to', {
			$from: this.sourceLanguage,
			$to: this.targetLanguage
		} );

		mtProvidersRequestCache[ cacheKey ] = $.get( fetchProvidersUrl )
			.then( function ( response ) {
				return response.mt || [];
			} );
		return mtProvidersRequestCache[ cacheKey ];
	};

	/**
	 * Get the localStorage key for the MT preference.
	 *
	 * @return {string} The storage key.
	 */
	MachineTranslation.prototype.getMTProviderStorageKey = function () {
		return [ 'cxMTProvider', this.sourceLanguage, this.targetLanguage
				].join( '-' );
	};

	/**
	 * Set the default MT provider preference. This preference get saved in
	 * localStorage.
	 *
	 * @param {string} provider MT provider id
	 */
	MachineTranslation.prototype.setDefaultProvider = function ( provider ) {
		this.provider = provider;
		mw.storage.set( this.getMTProviderStorageKey(), this.provider );
	};

	/**
	 * Get the preferred provider for this section.
	 *
	 * @return {string} Provider id.
	 */
	MachineTranslation.prototype.getPreferredProvider = function () {
		var storedMTPreference;

		storedMTPreference = mw.storage.get( this.getMTProviderStorageKey() );
		if ( this.providers.indexOf( storedMTPreference ) >= 0 ||
			this.translationOptions.indexOf( storedMTPreference ) >= 0 ) {
			// Stored MT preference is available.
			return storedMTPreference;
		}

		if ( $.isEmptyObject( this.providers ) ) {
			// For languages with different directionality, provide noMT
			// as default option. It gives an empty editor to translator.
			// We access languages from this.options since this.sourceLanguage and
			// this.targetLanguage are wiki domain codes and therefore nonstandard.
			if ( $.uls.data.getDir( this.options.sourceLanguage ) !==
				$.uls.data.getDir( this.options.targetLanguage )
			) {
				return noMT;
			} else {
				return sourceMT;
			}
		} else {
			// There are MT providers. Select the first one.
			return this.providers[ 0 ];
		}
	};

	mw.cx.MachineTranslation = MachineTranslation;
	// Sensible defaults for the MachineTranslation class
	mw.cx.MachineTranslation.defaults = {
		siteMapper: mw.cx.siteMapper,
		sourceLanguage: mw.cx.sourceLanguage,
		targetLanguage: mw.cx.targetLanguage
	};

	/**
	 * MT Control card
	 */
	function MTControlCard() {
		this.mt = null;
		this.$targetSection = null;
		this.$sourceSection = null;
		this.$card = null;
		this.$translations = null;
		this.$providersMenu = null;
	}

	/**
	 * Prepare and return the card template.
	 *
	 * @return {jQuery}
	 */
	MTControlCard.prototype.getCard = function () {
		var $titleRow, $title, $controlButtonsBlock;

		this.$card = $( '<div>' )
			.addClass( 'card mt' );

		$title = $( '<div>' )
			.addClass( 'card__title' )
			.text( mw.msg( 'cx-tools-mt-title' ) );

		$titleRow = $( '<div>' )
			.addClass( 'card__title-row' )
			.append( $title );

		this.$providerSelectorTrigger = $( '<div>' )
			.addClass( 'card__trigger' );

		this.$keepDefault = $( '<div>' )
			.addClass( 'card__control-button cx-mt-set-default' )
			.text( mw.msg( 'cx-tools-mt-set-default' ) )
			.hide();

		$controlButtonsBlock = $( '<div>' )
			.addClass( 'card__button-block' )
			.append( this.$keepDefault );

		this.$card.append(
			$titleRow,
			this.$providerSelectorTrigger,
			$controlButtonsBlock
		);
		this.$providersMenu = $( [] );

		this.listen();

		return this.$card;
	};

	/**
	 * Select a given provider id for the current section.
	 *
	 * @param {string} providerId Provider id
	 */
	MTControlCard.prototype.onProviderSelect = function ( providerId ) {
		// Hide the menu
		this.$providersMenu.hide();

		// Set the main label
		this.$providerSelectorTrigger.text( this.getProviderLabel( providerId ) );

		// Apply the selected provider to the current section.
		this.mt.changeProvider( providerId );
		this.mt.translate();
	};

	MTControlCard.prototype.listen = function () {
		var self = this;

		this.$providerSelectorTrigger
			.on( 'click', function ( e ) {
				self.$providersMenu.toggle();
				e.stopPropagation();
			} );

		// Hide the dropdown on clicking outside of it
		$( 'html' ).on( 'click', function ( e ) {
			if ( !e.isDefaultPrevented() ) {
				self.$providersMenu.hide();
			}
		} );

		this.$keepDefault.on( 'click', function () {
			self.mt.setDefaultProvider( self.mt.provider );
			self.$keepDefault.hide();
		} );
	};

	MTControlCard.prototype.buildProvidersMenu = function ( providers ) {
		var i, self = this,
			nonDefaultMT = false,
			newProvider = false;

		this.$providersMenu = $( '<ul>' )
			.addClass( 'card__providers-menu' )
			.hide();

		if ( this.mt.translationOptions.indexOf( this.mt.providers[ 0 ] ) === 0 &&
			this.mt.translationOptions.indexOf( this.mt.provider ) >= 0
		) {
			nonDefaultMT = true;
			this.$card.find( '.card__title-row' )
				.addClass( 'card--new' )
				.append( $( '<div>' )
					.text( mw.msg( 'cx-tools-mt-new-providers-available' ) )
					.addClass( 'card__new-providers' )
				);
		}

		if ( !this.$targetSection.data( 'cx-state' ) ) {
			providers.unshift( resetMT );
		}

		// Add available machine translation engines to the menu
		for ( i = 0; i < providers.length; i++ ) {
			newProvider = nonDefaultMT && this.mt.translationOptions.indexOf( providers[ i ] ) < 0;
			this.$providersMenu.append(
				this.getProviderMenuItem( providers[ i ], newProvider )
			);
		}

		// Set the main label
		this.$providerSelectorTrigger.text( this.getProviderLabel( this.mt.provider ) );

		if ( this.mt.provider !== this.mt.getPreferredProvider() ) {
			this.$keepDefault.show();
		} else {
			this.$keepDefault.hide();
		}

		this.$providerSelectorTrigger.after( this.$providersMenu );

		this.$providersMenu.find( '.card__providers-menu-item' )
			.on( 'click', function () {
				self.onProviderSelect( $( this ).data( 'provider' ) );
			} );
	};

	/**
	 * Get the text for the menu item in the providers list.
	 *
	 * @param {string} providerId Provider id.
	 * @return {string}
	 */
	MTControlCard.prototype.getProviderLabel = function ( providerId ) {
		var providerLabels = {
			Yandex: mw.msg( 'cx-tools-mt-provider-title', 'Yandex.Translate' ),
			'no-mt': mw.msg( 'cx-tools-mt-dont-use' ),
			'source-mt': mw.msg( 'cx-tools-mt-use-source' ),
			'reset-mt': mw.msg( 'cx-tools-mt-reset' )
		};

		return providerLabels[ providerId ] || mw.msg( 'cx-tools-mt-provider-title', providerId );
	};

	/**
	 * Get a menu item for the providers list.
	 *
	 * @param {string} providerId Provider id.
	 * @return {jQuery}
	 */
	MTControlCard.prototype.getProviderMenuItem = function ( providerId, newProvider ) {
		var $label,
			providerIdPrefix = 'cx-provider-',
			selected = '',
			$new = $( [] );

		$label = $( '<span>' )
			.text( this.getProviderLabel( providerId ) );

		if ( newProvider ) {
			$new = $( '<span>' )
				.text( mw.msg( 'cx-tools-mt-new-provider' ) )
				.addClass( 'card__providers-menu-item--new' );
		}

		// Mark the selected item
		if ( providerId === this.mt.provider ) {
			selected = 'selected';
		}

		return $( '<li>' )
			.addClass( [
				'card__providers-menu-item', selected, providerIdPrefix + providerId
			].join( ' ' ) )
			.attr( 'data-provider', providerId )
			.append( $label, $new );
	};

	MTControlCard.prototype.start = function ( $section ) {
		var self = this,
			sourceId;

		this.$targetSection = $section;
		sourceId = this.$targetSection.data( 'source' );
		this.$sourceSection = mw.cx.getSourceSection( sourceId );
		this.mt = this.$sourceSection.data( 'cxmt' );

		if ( !this.mt ) {
			this.mt = new MachineTranslation( sourceId );
			this.$sourceSection.data( 'cxmt', this.mt );
		}

		this.mt.init().then( function () {
			var menuItems = self.mt.providers.concat(
				self.mt.translationOptions.filter( function ( item ) {
					return self.mt.providers.indexOf( item ) < 0;
				} ) );

			self.buildProvidersMenu( menuItems );
		} );

		this.$card.show();
		this.onShow();
	};

	MTControlCard.prototype.stop = function () {
		this.$card.remove();
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	MTControlCard.prototype.onShow = function () {
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	MTControlCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.translation.focus',
			'mw.cx.translation.change'
		];
	};

	mw.cx.tools.mt = MTControlCard;

	function initTranslationRequest( sourceSectionId ) {
		var mt;
		mt = new MachineTranslation( sourceSectionId );
		mt.init().then( function () {
			// Make sure that the current provider is an MT service.
			if ( mt.provider === sourceMT || mt.provider === noMT || mt.provider === resetMT ) {
				return;
			}
			// If so, start an MT request.
			mt.getTranslatedSection();
		} );
		mw.log( '[CX][MT] Prefetching MT for section ' + sourceSectionId );
	}

	$( function () {
		mw.hook( 'mw.cx.source.ready' ).add( function () {
			var $firstSection;

			// Initiate the request for first section. Translation prefetch.
			$firstSection = $( '.cx-column--source .cx-column__content' )
				.find( mw.cx.getSectionSelector() )
				.first();
			initTranslationRequest( $firstSection.prop( 'id' ) );
		} );
	} );
}( jQuery, mediaWiki ) );
