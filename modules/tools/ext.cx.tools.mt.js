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
		disableMT = 'disable-mt';

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

		fetchProvidersUrl = mw.config.get( 'wgContentTranslationServerURL' ) + '/list/mt/' +
			encodeURIComponent( from ) + '/' + encodeURIComponent( to );

		return $.get( fetchProvidersUrl )
			.done( function ( response ) {
				MTControlCard.providers = response.providers;

				if ( $.isEmptyObject( MTControlCard.providers ) ) {
					MTControlCard.provider = disableMT;
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
		var mtURL = mw.config.get( 'wgContentTranslationServerURL' ) + '/mt/' +
			sourceLang + '/' + targetLang + '/' + MTControlCard.provider;

		return $.post( mtURL, sourceHtml );
	}

	function markMTLoading( $section ) {
		$section
			.empty()
			.addClass( 'cx-spinner' )
			.append(
				$( '<div>' ).addClass( 'bounce1' ),
				$( '<div>' ).addClass( 'bounce2' ),
				$( '<div>' ).addClass( 'bounce3' ) );
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
		// Check if the section is ediable or provider is disabled
		if ( MTControlCard.provider === disableMT || $section.data( 'editable' ) === false ) {
			return $.Deferred().reject().promise();
		}

		sectionId = $section.prop( 'id' );
		sourceContent = getSimplifiedHTMLForMT( $section );
		sectionTranslationRequest = cache[ sectionId ] && cache[ sectionId ][ provider ];

		if ( !sectionTranslationRequest ) {
			sectionTranslationRequest =
				doMT( mw.cx.sourceLanguage, mw.cx.targetLanguage, sourceContent );
			// Put that in cache.
			cache[ sectionId ] = cache[ sectionId ] || {};
			cache[ sectionId ][ MTControlCard.provider ] = sectionTranslationRequest;
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
					);
					// $section was replaced. Get the updated instance.
					$section = $( '#cx' + sourceId );
				}
			} )
			.fail( function () {
				mw.hook( 'mw.cx.translation.add' ).fire( sourceId, false );
			} )
			.always( function () {
				$section.data( 'cx-mt', true );
				mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
			} );

		return this;
	};

	function MTControlCard() {
		this.$section = null;
		this.$card = null;
		this.$translations = null;
		this.$providersMenu = null;
	}

	MTControlCard.prototype.getCard = function () {
		var $titleRow, $title,
			$controlButtonsBlock, $useSource, $clearTranslation,
			$bottom;

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

		this.$restore = $( '<div>' )
			.addClass( 'card__control-button cx-restore-translation' )
			.text( mw.msg( 'cx-tools-mt-restore' ) );

		$useSource = $( '<div>' )
			.addClass( 'card__control-button cx-use-source' )
			.text( mw.msg( 'cx-tools-mt-use-source' ) );

		$clearTranslation = $( '<div>' )
			.addClass( 'card__control-button cx-clear-translation' )
			.text( mw.msg( 'cx-tools-mt-clear-translation' ) );

		$controlButtonsBlock = $( '<div>' )
			.addClass( 'card__button-block' )
			.append(
				this.$restore,
				$useSource,
				$clearTranslation
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
		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, false );
	};

	/**
	 * Update the section with text from source,
	 * apply machine translation,
	 * and hide the restore button.
	 */
	MTControlCard.prototype.restoreTranslation = function () {
		var sourceId = this.$section.data( 'source' );
		// Use the source without machine translation
		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, true );
		this.stop();
	};

	/**
	 * Clear the translation text.
	 */
	MTControlCard.prototype.clearTranslation = function () {
		this.$section.empty();
		mw.hook( 'mw.cx.translation.change' ).fire( this.$section );
		this.$section.focus();
	};

	MTControlCard.prototype.selectProvider = function ( providerId ) {
		var $providerItem = $( '#' + providerIdPrefix + providerId );

		// Hide the menu
		this.$providersMenu.addClass( 'hidden' );

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
		this.$card.find( '.cx-use-source' )
			.on( 'click', $.proxy( this.useSource, this ) );

		this.$card.find( '.cx-clear-translation' )
			.on( 'click', $.proxy( this.clearTranslation, this ) );

		this.$restore
			.on( 'click', $.proxy( this.restoreTranslation, this ) );

		mw.hook( 'mw.cx.translation.change' ).add( $.proxy( this.showRestore, this ) );
	};

	MTControlCard.prototype.buildProvidersMenu = function () {
		var provider,
			cxMtCard = this;

		this.$providersMenu = $( '<ul>' )
			.addClass( 'card__providers-menu hidden' );

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
		this.$providersMenu.append( this.getProviderItem( disableMT ) );

		this.$providerSelectorTrigger
			.on( 'click', function ( e ) {
				cxMtCard.$providersMenu.toggleClass( 'hidden' );
				e.stopPropagation();
			} )
			.after( this.$providersMenu );

		// Hide the dropdown on clicking outside of it
		$( 'html' ).on( 'click', function ( e ) {
			if ( !e.isDefaultPrevented() ) {
				cxMtCard.$providersMenu.addClass( 'hidden' );
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
		return $( '<li>' )
			.text( this.getProviderTitle( id ) )
			.prop( 'id', providerIdPrefix + id )
			.on( 'click', $.proxy( this.selectProvider, this, id ) );
	};

	MTControlCard.prototype.start = function ( $section ) {
		this.$section = $section;
		this.selectProvider( MTControlCard.provider );

		if ( this.$section.data( 'cx-mt' ) ) {
			this.$restore.addClass( 'hidden' );
		} else {
			this.$restore.removeClass( 'hidden' );
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
			'mw.cx.translation.focus'
		];
	};

	mw.cx.tools.mt = MTControlCard;

	$( function () {
		mw.hook( 'mw.cx.source.ready' ).add( $.proxy( function () {
			translateSection( $( '.cx-column__content' ).find( mw.cx.getSectionSelector() ).first(), true );
		}, this ) );
	} );
}( jQuery, mediaWiki ) );
