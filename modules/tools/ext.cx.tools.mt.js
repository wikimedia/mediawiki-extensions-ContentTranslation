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

	var cache = {}, // MT requests cache
		providerIdPrefix = 'cx-provider-',
		disableMT = 'disable-mt',
		noMT = 'no-mt',
		sourceMT = 'source-mt';

	/**
	 * Get the registry of machine translation providers
	 * for a language pair from the CX server.
	 * @param {string} from Source language
	 * @param {string} to Target language
	 * @return {jQuery.Promise}
	 */
	function getProviders( from, to ) {
		var fetchProvidersUrl;

		if ( MTControlCard.provider ) {
			return $.Deferred().resolve();
		}

		// @todo refactor
		fetchProvidersUrl = mw.cx.siteMapper.getCXServerUrl( '/list/mt/$from/$to', {
			$from: from,
			$to: to
		} );

		return $.get( fetchProvidersUrl )
			.done( function ( response ) {
				MTControlCard.providers = response.providers;

				if ( $.isEmptyObject( MTControlCard.providers ) ) {
					MTControlCard.provider = noMT;
				} else {
					// TODO Consider user preferences
					MTControlCard.provider = MTControlCard.providers[ 0 ];
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
	 * Do machine translation.
	 * @param {string} sourceLang Source language
	 * @param {string} targetLang Target language
	 * @param {string} sourceHtml Content
	 * @return {jQuery.Promise}
	 */
	function doMT( sourceLang, targetLang, sourceHtml ) {
		// @todo refactor
		var mtURL = mw.cx.siteMapper.getCXServerUrl( '/mt/$from/$to/$provider', {
			$from: sourceLang,
			$to: targetLang,
			$provider: MTControlCard.provider
		} );

		return $.post( mtURL, sourceHtml ).then( null, function () {
			return new $.Deferred().reject( 'service-failure', arguments ).promise();
		} );
	}

	function markMTLoading( $section ) {
		$section
			.empty()
			.addClass( 'cx-spinner' )
			.append(
				$( '<div>' ).addClass( 'bounce1' ),
				$( '<div>' ).addClass( 'bounce2' ),
				$( '<div>' ).addClass( 'bounce3' )
			);
	}

	/**
	 * Clean up the section by removing data-parsoid and data-mw attributes
	 * @param {jQuery} $section
	 * @retun {string}
	 */
	function getSimplifiedHTMLForMT( $section ) {
		var $wrapper = $( '<div>' ).append( $section.clone() );

		$wrapper.find( '*' ).removeAttr( 'data-parsoid data-mw' );

		return $wrapper.html();
	}

	/**
	 * Translate the given source section
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
	 * @param {text} text
	 * @return {jQuery}
	 */
	$.fn.machineTranslate = function () {
		var $sourceSection = $( this ),
			prefetch = true,
			sourceId = $sourceSection.prop( 'id' ),
			$section = $( '#cx' + sourceId );

		markMTLoading( $section );
		translateSection( $sourceSection, prefetch )
			.done( function ( translation ) {
				if ( translation ) {
					$section.replaceWith( $( translation )
						.children()
						.attr( {
							id: 'cx' + sourceId,
							'data-source': sourceId
						} )
						.data( 'cx-state', 'mt' )
					);
					// $section was replaced. Get the updated instance.
					$section = $( '#cx' + sourceId );
				}
			} )
			.fail( function ( reason ) {
				mw.hook( 'mw.cx.translation.add' ).fire( sourceId, reason );
			} )
			.always( function () {
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
		var $titleRow, $title, $controlButtonsBlock, $bottom;

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

		$bottom = $( '<div>' )
			.addClass( 'card__bottom' );

		this.$card.append(
			$titleRow,
			this.$providerSelectorTrigger,
			$controlButtonsBlock,
			$bottom
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
		// TODO This should be saved in a preference or a cookie
		MTControlCard.provider = providerId;

		// Set the main label
		this.$providerSelectorTrigger.text( this.getProviderTitle( providerId ) );
	};

	MTControlCard.prototype.listen = function () {
		this.actions.$source
			.on( 'click', $.proxy( this.useSource, this ) );

		this.actions.$clear
			.on( 'click', $.proxy( this.clearTranslation, this ) );

		this.actions.$restore
			.on( 'click', $.proxy( this.restoreTranslation, this ) );
	};

	MTControlCard.prototype.buildProvidersMenu = function () {
		var provider,
			cxMtCard = this;

		this.$providersMenu = $( '<ul>' )
			.addClass( 'card__providers-menu' )
			.hide();

		// Add available machine translation engines to the menu
		for ( provider in MTControlCard.providers ) {
			this.$providersMenu.append(
				this.getProviderItem(
					MTControlCard.providers[ provider ],
					mw.cx.sourceLanguage,
					mw.cx.targetLanguage
				)
			);
		}

		// Add an item to disable machine translation for the language
		this.$providersMenu.append(
			this.getProviderItem( sourceMT ),
			this.getProviderItem( disableMT )
		);

		this.$providerSelectorTrigger
			.on( 'click', function ( e ) {
				cxMtCard.$providersMenu.toggle();
				e.stopPropagation();
			} )
			.after( this.$providersMenu );

		// Hide the dropdown on clicking outside of it
		$( 'html' ).on( 'click', function ( e ) {
			if ( !e.isDefaultPrevented() ) {
				cxMtCard.$providersMenu.hide();
			}
		} );
	};

	/**
	 * Get the text for the menu item in the providers list.
	 * @param {string} id Provider id.
	 * @return {string}
	 */
	MTControlCard.prototype.getProviderTitle = function ( id ) {
		if ( id === disableMT ) {
			return mw.msg( 'cx-tools-mt-dont-use' );
		} else if ( id === noMT ) {
			return mw.msg( 'cx-tools-mt-not-available', $.uls.data.getAutonym( mw.cx.targetLanguage ) );
		} else if ( id === sourceMT ) {
			// FIXME: message reuse
			return mw.msg( 'cx-tools-mt-use-source' );
		} else {
			return mw.msg( 'cx-tools-mt-provider-title', id );
		}
	};

	/**
	 * Get a menu item for the providers list.
	 * @param {string} id Provider id.
	 * @return {jQuery}
	 */
	MTControlCard.prototype.getProviderItem = function ( id ) {
		var cxMtCard = this;
		return $( '<li>' )
			.text( this.getProviderTitle( id ) )
			.prop( 'id', providerIdPrefix + id )
			.on( 'click', function () {
				cxMtCard.selectProvider( id );
				mw.cx.selection.restore( 'translation' );
			} );
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
