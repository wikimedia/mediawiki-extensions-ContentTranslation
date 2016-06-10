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
		cache = {}, // MT requests cache
		providerIdPrefix = 'cx-provider-',
		disableMT = 'disable-mt',
		noMT = 'no-mt',
		sourceMT = 'source-mt',
		translationOptions = [ disableMT, noMT, sourceMT ];
	/**
	 * Fetch token for authentication with cxserver.
	 *
	 * @return {jQuery.Promise}
	 */
	function getCXServerToken() {
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
			.then(
				function ( response ) {
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
	}

	/**
	 * Get the registry of machine translation providers
	 * for a language pair from the CX server.
	 *
	 * @param {string} from Source language
	 * @param {string} to Target language
	 * @return {jQuery.Promise}
	 */
	function getProviders( from, to ) {
		var fetchProvidersUrl,
			translationPreference;

		if ( MTControlCard.provider ) {
			return $.Deferred().resolve();
		}

		// This is for backwards compatibility with old drafts. For example
		// we have lots of drafts stored with language code "no".
		from = mw.cx.siteMapper.getLanguageCodeForWikiDomain( from );
		to = mw.cx.siteMapper.getLanguageCodeForWikiDomain( to );

		// TODO: Refactor
		fetchProvidersUrl = mw.cx.siteMapper.getCXServerUrl( '/list/mt/$from/$to', {
			$from: from,
			$to: to
		} );

		return $.get( fetchProvidersUrl )
			.done( function ( response ) {
				MTControlCard.providers = response.mt || [];
				translationPreference = mw.storage.get( getMTProviderStorageKey() );
				if ( MTControlCard.providers.indexOf( translationPreference ) < 0 &&
					translationOptions.indexOf( translationPreference ) < 0 ) {
					// Stored MT preference is not available now.
					translationPreference = null;
				}

				if ( $.isEmptyObject( MTControlCard.providers ) ) {
					MTControlCard.provider = translationPreference || noMT;
					// For languages with different directionality,
					// provide disable MT as default option. It gives
					// an empty editor to translator.
					if ( $.uls.data.getDir( mw.cx.sourceLanguage ) !==
						$.uls.data.getDir( mw.cx.targetLanguage )
					) {
						MTControlCard.provider = translationPreference || disableMT;
					}
				} else {
					// There are MT providers. If there is a saved mt provider preference
					// select that from the providers. Otherwise select the first one.
					MTControlCard.provider = translationPreference || MTControlCard.providers[ 0 ];
				}
			} )
			.fail( function ( response ) {
				mw.log(
					'Error getting translation providers from ' + fetchProvidersUrl + ' . ' +
					response.statusText + ' (' + response.status + '). ' +
					response.responseText
				);
			} );
	}

	/**
	 * Get the localStorage key for the MT preference
	 *
	 * @return {string} The storage key.
	 */
	function getMTProviderStorageKey() {
		return [
			'cxMTProvider', mw.cx.sourceLanguage, mw.cx.targetLanguage
		].join( '-' );
	}

	/**
	 * Do machine translation.
	 *
	 * @param {string} sourceLang Source language
	 * @param {string} targetLang Target language
	 * @param {string} sourceHtml Content
	 * @return {jQuery.Promise}
	 */
	function doMT( sourceLang, targetLang, sourceHtml ) {
		// TODO: Refactor
		var mtURL = mw.cx.siteMapper.getCXServerUrl( '/mt/$from/$to/$provider', {
			// This is for backwards compatibility with old drafts. For example
			// we have lots of drafts stored with language code "no".
			$from: mw.cx.siteMapper.getLanguageCodeForWikiDomain( sourceLang ),
			$to: mw.cx.siteMapper.getLanguageCodeForWikiDomain( targetLang ),
			$provider: MTControlCard.provider
		} );

		return getCXServerToken().then( function ( token ) {
			return $.ajax( {
				type: 'post',
				url: mtURL,
				data: {
					html: sourceHtml
				},
				headers: {
					Authorization: token
				}
			} ).then( null, function () {
				return $.Deferred().reject( 'service-failure', arguments ).promise();
			} );
		} );
	}

	function markMTLoading( $section ) {
		$section.empty().append( mw.cx.widgets.spinner() );
	}

	/**
	 * Clean up the section by removing data-parsoid and data-mw attributes
	 *
	 * @param {jQuery} $section
	 * @return {string}
	 */
	function getSimplifiedHTMLForMT( $section ) {
		var $wrapper = $( '<div>' ).append( $section.clone() );

		$wrapper.find( '*' ).removeAttr( 'data-parsoid data-mw' );

		return $wrapper.html();
	}

	/**
	 * Translate the given source section
	 *
	 * @param {jQuery} $section Source section to translate
	 * @param {boolean} prefetch Whether the translation of next secton to be prefetched
	 * @return {jQuery.Promise}
	 */
	function translateSection( $section, prefetch ) {
		var sectionId, sourceContent, sectionTranslationRequest,
			$nextSection,
			provider = MTControlCard.provider;

		if ( !provider ) {
			// Provider information not ready. Fetch it and call this method again.
			return getProviders( mw.cx.sourceLanguage, mw.cx.targetLanguage ).then( function () {
				translateSection( $section );
			} );
		}

		if ( provider === disableMT ) {
			return $.Deferred().reject( 'mt-user-disabled' ).promise();
		}

		if ( provider === noMT ) {
			return $.Deferred().reject( 'mt-not-available' ).promise();
		}

		if ( provider === sourceMT ) {
			return $.Deferred().reject( 'mt-not-available' ).promise();
		}

		if ( $section.data( 'editable' ) === false ) {
			return $.Deferred().reject( 'non-editable' ).promise();
		}

		sectionId = $section.prop( 'id' );
		sourceContent = getSimplifiedHTMLForMT( $section );
		sectionTranslationRequest = cache[ sectionId ] && cache[ sectionId ][ provider ];

		if ( !sectionTranslationRequest ) {
			sectionTranslationRequest =
				doMT( mw.cx.sourceLanguage, mw.cx.targetLanguage, sourceContent );
			// Put that in cache.
			cache[ sectionId ] = cache[ sectionId ] || {};
			cache[ sectionId ][ provider ] = sectionTranslationRequest;
		}

		if ( prefetch ) {
			$nextSection = $section.next();

			if ( $nextSection.length ) {
				translateSection( $nextSection );
			}
		}

		return sectionTranslationRequest;
	}

	/**
	 * A plugin that performs machine translation on a section element.
	 *
	 * @return {jQuery}
	 */
	$.fn.machineTranslate = function () {
		var $sourceSection = $( this ),
			prefetch = true,
			sourceId = $sourceSection.prop( 'id' ),
			$section = mw.cx.getTranslationSection( sourceId );

		markMTLoading( $section );
		translateSection( $sourceSection, prefetch )
			.done( function ( translation ) {
				if ( translation ) {
					// Translation is sent as json string
					// Automatically parsed by jQuery into object
					// Html is inside contents field
					$section.replaceWith( $( translation.contents )
						.children()
						.attr( {
							id: 'cx' + sourceId,
							'data-source': sourceId,
							'data-cx-state': 'mt',
							'data-cx-mt-provider': MTControlCard.provider
						} )
					);
				}
			} )
			.fail( function ( reason ) {
				mw.hook( 'mw.cx.translation.add' ).fire( sourceId, reason );
			} )
			.always( function () {
				// $section was replaced. Get the updated instance.
				$section = mw.cx.getTranslationSection( sourceId );
				mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
			} );

		return this;
	};

	function MTControlCard() {
		this.$section = null;
		this.$card = null;
		this.$translations = null;
		this.$providersMenu = null;
		this.actions = {
			$restore: null,
			$clear: null,
			$source: null
		};
	}

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

		this.actions.$restore = $( '<div>' )
			.addClass( 'card__control-button cx-restore-translation' )
			.text( mw.msg( 'cx-tools-mt-restore' ) );

		this.actions.$source = $( '<div>' )
			.addClass( 'card__control-button cx-use-source' )
			.text( mw.msg( 'cx-tools-mt-use-source' ) );

		this.actions.$clear = $( '<div>' )
			.addClass( 'card__control-button cx-clear-translation' )
			.text( mw.msg( 'cx-tools-mt-clear-translation' ) );

		$controlButtonsBlock = $( '<div>' )
			.addClass( 'card__button-block' )
			.append( // Object.values would be nice here
				this.actions.$restore,
				this.actions.$source,
				this.actions.$clear
			);

		this.$card.append(
			$titleRow,
			this.$providerSelectorTrigger,
			$controlButtonsBlock
		);

		this.buildProvidersMenu();

		this.listen();

		return this.$card;
	};

	/**
	 * Update the section with text from source,
	 * not applying machine translation.
	 */
	MTControlCard.prototype.useSource = function () {
		var sourceId = this.$section.data( 'source' );
		// Use the source without machine translation
		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, 'source' );
	};

	/**
	 * Update the section with text from source,
	 * apply machine translation,
	 * and hide the restore button.
	 */
	MTControlCard.prototype.restoreTranslation = function () {
		var sourceId = this.$section.data( 'source' );
		// Use the source without machine translation
		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, 'restore' );
		this.stop();
	};

	/**
	 * Clear the translation text.
	 */
	MTControlCard.prototype.clearTranslation = function () {
		var sourceId = this.$section.data( 'source' );

		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, 'clear' );
	};

	MTControlCard.prototype.selectProvider = function ( providerId ) {
		var $providerItem = $( '#' + providerIdPrefix + providerId );

		// Hide the menu
		this.$providersMenu.hide();

		// Mark the selected item
		this.$providersMenu.find( 'li' ).removeClass( 'selected' );
		$providerItem.addClass( 'selected' );

		// Set the global engine
		if ( MTControlCard.provider !== providerId ) {
			MTControlCard.provider = providerId;
			// Apply this choice to the current section.
			if ( providerId === sourceMT ) {
				this.useSource();
			} else if ( providerId === disableMT ) {
				this.clearTranslation();
			} else {
				// Must be an MT engine. Restore.
				this.restoreTranslation();
			}

			// Save the current provider
			mw.storage.set( getMTProviderStorageKey(), providerId );

		}
		// Set the main label
		this.$providerSelectorTrigger.text( this.getProviderTitle( providerId ) );
	};

	/*
	 * Toggle the section highlight.
	 */
	MTControlCard.prototype.toggleSectionHighlight = function () {
		this.$section.toggleClass( 'cx-highlight' );
	};

	MTControlCard.prototype.listen = function () {
		var self = this;

		this.actions.$source
			.on( 'click', $.proxy( this.useSource, this ) )
			.on( 'mouseenter mouseleave', $.proxy( this.toggleSectionHighlight, this ) );

		this.actions.$clear
			.on( 'click', $.proxy( this.clearTranslation, this ) )
			.on( 'mouseenter mouseleave', $.proxy( this.toggleSectionHighlight, this ) );

		this.actions.$restore
			.on( 'click', $.proxy( this.restoreTranslation, this ) )
			.on( 'mouseenter mouseleave', $.proxy( this.toggleSectionHighlight, this ) );

		this.$providerSelectorTrigger
			.on( 'click', function ( e ) {
				self.$providersMenu.toggle();
				e.stopPropagation();
			} );

		this.$providersMenu.find( '.card__providers-menu-item' )
			.on( 'click', function () {
				self.selectProvider( $( this ).data( 'provider' ) );
				// Restore the selection
				mw.cx.selection.restore( 'translation' );
			} )
			.on( 'mouseenter mouseleave', $.proxy( this.toggleSectionHighlight, this ) );

		// Hide the dropdown on clicking outside of it
		$( 'html' ).on( 'click', function ( e ) {
			if ( !e.isDefaultPrevented() ) {
				self.$providersMenu.hide();
			}
		} );
	};

	MTControlCard.prototype.buildProvidersMenu = function () {
		var provider, items = [],
			nonDefaultMT, translationPreference, newProvider = false;

		translationPreference = mw.storage.get( getMTProviderStorageKey() );

		if (
			// If there are more than one provider
			MTControlCard.providers && MTControlCard.providers.length > 1 &&
			// If there is no stored preference or preference is not a MT engine
			( translationPreference === null ||
				translationOptions.indexOf( translationPreference ) >= 0 )
		) {
			nonDefaultMT = true;
			// There are more MT options or non default MT available. Announce.
			this.$card.find( '.card__title-row' )
				.addClass( 'card--new' )
				.append( $( '<div>' )
					.text( mw.msg( 'cx-tools-mt-new-providers-available' ) )
					.addClass( 'card__new-providers' )
				);
		}

		this.$providersMenu = $( '<ul>' )
			.addClass( 'card__providers-menu' )
			.hide();

		if ( MTControlCard.providers ) {
			items = MTControlCard.providers.slice( 0 ); // Copy values.
		}
		if ( items.indexOf( sourceMT ) < 0 ) {
			items.push( sourceMT );
		}
		if ( items.indexOf( disableMT ) < 0 ) {
			items.push( disableMT );
		}
		// Add available machine translation engines to the menu
		for ( provider in items ) {
			if ( !items.hasOwnProperty( provider ) ) {
				continue;
			}

			if ( nonDefaultMT && translationOptions.indexOf( items[ provider ] ) < 0 ) {
				newProvider = true;
			} else {
				newProvider = false;
			}
			this.$providersMenu.append(
				this.getProviderItem( items[ provider ], newProvider )
			);
		}

		this.$providerSelectorTrigger.after( this.$providersMenu );
	};

	/**
	 * Get the text for the menu item in the providers list.
	 *
	 * @param {string} id Provider id.
	 * @return {string}
	 */
	MTControlCard.prototype.getProviderTitle = function ( id ) {
		var providerLabels = {
			Yandex: 'Yandex.Translate'
		};

		if ( id === disableMT ) {
			return mw.msg( 'cx-tools-mt-dont-use' );
		} else if ( id === noMT ) {
			return mw.msg( 'cx-tools-mt-not-available', $.uls.data.getAutonym( mw.cx.targetLanguage ) );
		} else if ( id === sourceMT ) {
			// FIXME: message reuse
			return mw.msg( 'cx-tools-mt-use-source' );
		} else {
			return mw.msg( 'cx-tools-mt-provider-title', providerLabels[ id ] || id );
		}
	};

	/**
	 * Get a menu item for the providers list.
	 *
	 * @param {string} providerId Provider id.
	 * @return {jQuery}
	 */
	MTControlCard.prototype.getProviderItem = function ( providerId, newProvider ) {
		var $label, $new = $( [] );
		$label = $( '<span>' )
			.text( this.getProviderTitle( providerId ) )
			.addClass( 'card__providers-menu-item' )
			.attr( {
				id: providerIdPrefix + providerId,
				'data-provider': providerId
			} );
		if ( newProvider ) {
			$new = $( '<span>' )
				.text( mw.msg( 'cx-tools-mt-new-provider' ) )
				.addClass( 'card__providers-menu-item--new' );
		}

		return $( '<li>' )
			.append( $label, $new );
	};

	MTControlCard.prototype.start = function ( $section ) {
		var state,
			provider = MTControlCard.provider;

		this.$section = $section;
		this.selectProvider( provider );

		// Hide or disable action buttons depending on the state.
		// Disabling is achieved by changing style. Actions are
		// only disabled if they were already executed and no changes
		// have been done after that. Hence there is no need to actually
		// prevent doing them again.
		state = $section.data( 'cx-state' );

		if (
			state === 'mt' ||
			provider === disableMT ||
			provider === sourceMT ||
			provider === noMT
		) {
			this.actions.$restore.hide();
		} else {
			this.actions.$restore.show();
		}

		if ( state === 'empty' ) {
			this.actions.$clear.addClass( 'card__control-button--disabled' );
		} else {
			this.actions.$clear.removeClass( 'card__control-button--disabled' );
		}

		if ( state === 'source' ) {
			this.actions.$source.addClass( 'card__control-button--disabled' );
		} else {
			this.actions.$source.removeClass( 'card__control-button--disabled' );
		}

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

	$( function () {
		mw.hook( 'mw.cx.source.ready' ).add( $.proxy( function () {
			translateSection( $( '.cx-column__content' ).find( mw.cx.getSectionSelector() ).first(), true );
		}, this ) );
	} );
}( jQuery, mediaWiki ) );
