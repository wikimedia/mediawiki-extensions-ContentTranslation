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

	var providerIdPrefix = 'cx-provider-',
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
				MTControlCard.providers = response;

				if ( $.isEmptyObject( MTControlCard.providers ) ) {
					MTControlCard.provider = disableMT;
				} else {
					MTControlCard.provider = MTControlCard.providers.provider;
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
			sourceLang + '/' + targetLang;
		return $.post( mtURL, sourceHtml );
	}

	/**
	 * A plugin that performs machine translation on an element.
	 * @param {text} text
	 */
	$.fn.machineTranslate = function () {
		var $section = $( this );

		getProviders( mw.cx.sourceLanguage, mw.cx.targetLanguage ).then( function () {
			var sourceContent;

			if ( MTControlCard.provider === disableMT ) {
				mw.hook( 'mw.cx.translation.postMT' ).fire( $section );

				return;
			}

			sourceContent = $section[ 0 ].outerHTML;
			doMT( mw.cx.sourceLanguage, mw.cx.targetLanguage, sourceContent )
				.done( function ( translation ) {
					if ( translation ) {
						$section.html( $( translation ).children().html() );
					}
				} ).always( function () {
					$section.data( 'cx-mt', true );
					mw.hook( 'mw.cx.translation.change' ).fire( $section );
					mw.hook( 'mw.cx.translation.postMT' ).fire( $section );
				} );
		} );

		return this;
	};

	function MTControlCard() {
		this.$section = null;
		this.$card = null;
		this.$translations = null;
		this.$providersMenu = null;

		// This is static because the card can be reinitialized.
		// Indexed by section id.
		if ( !MTControlCard.enableRestore ) {
			MTControlCard.enableRestore = {};
		}
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
	 * Update the section with text from source, applying tools like
	 * adaptation and machine translation.
	 * @param {boolean} machineTranslate Whether to apply machine translation to the section.
	 */
	MTControlCard.prototype.updateSection = function ( machineTranslate ) {
		var sourceId = this.$section.data( 'source' ),
			cxMtCard = this;

		// Paste the source without machine translation
		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, machineTranslate );

		// Updating the section replaced the DOM element,
		// so it needs to be reinitialized
		mw.hook( 'mw.cx.translation.updated' ).add( function () {
			cxMtCard.$section = $( '#cx' + sourceId );
		} );
	};

	/**
	 * Update the section with text from source,
	 * not applying machine translation.
	 */
	MTControlCard.prototype.useSource = function () {
		this.updateSection( false );
		this.showRestore();
	};

	/**
	 * Update the section with text from source,
	 * apply machine translation,
	 * and hide the restore button.
	 */
	MTControlCard.prototype.restoreTranslation = function () {
		this.updateSection( true );
		this.hideRestore();
	};

	/**
	 * Clear the translation text.
	 */
	MTControlCard.prototype.clearTranslation = function () {
		this.$section
			.html( '' );

		this.showRestore();

		this.$section.focus();
	};

	/**
	 * Show the restore button.
	 */
	MTControlCard.prototype.showRestore = function () {
		MTControlCard.enableRestore[ this.$section.prop( 'id' ) ] = true;
		this.$restore.removeClass( 'hidden' );
	};

	/**
	 * Hide the restore button.
	 */
	MTControlCard.prototype.hideRestore = function () {
		MTControlCard.enableRestore[ this.$section.prop( 'id' ) ] = false;
		this.$restore.addClass( 'hidden' );
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
		this.$providerSelectorTrigger.text( this.getProviderTitle(
			providerId,
			mw.cx.sourceLanguage,
			mw.cx.targetLanguage
		) );
	};

	MTControlCard.prototype.listen = function () {
		this.$card.find( '.cx-use-source' )
			.on( 'click', $.proxy( this.useSource, this ) );

		this.$card.find( '.cx-clear-translation' )
			.on( 'click', $.proxy( this.clearTranslation, this ) );

		this.$restore
			.on( 'click', $.proxy( this.restoreTranslation, this ) );
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
	};

	/**
	 * Get the text for the menu item in the providers list.
	 * @param {string} id Provider id.
	 * @param {string} sourceLang Source language code.
	 * @param {string} targetLang Target language code.
	 * @return {string}
	 */
	MTControlCard.prototype.getProviderTitle = function ( id, from, to ) {
		if ( id === disableMT ) {
			return mw.msg( 'cx-tools-mt-dont-use' );
		} else {
			return mw.msg( 'cx-tools-mt-provider-title',
				id,
				$.uls.data.getAutonym( from ),
				$.uls.data.getAutonym( to )
			);
		}
	};

	/**
	 * Get a menu item for the providers list.
	 * @param {string} id Provider id.
	 * @param {string} from Source language code.
	 * @param {string} to Target language code.
	 * @return {jQuery}
	 */
	MTControlCard.prototype.getProviderItem = function ( id, from, to ) {
		return $( '<li>' )
			.text( this.getProviderTitle( id, from, to ) )
			.prop( 'id', providerIdPrefix + id )
			.on( 'click', $.proxy( this.selectProvider, this, id ) );
	};

	MTControlCard.prototype.start = function ( $section ) {
		this.$section = $section;
		this.selectProvider( MTControlCard.provider );

		if ( !MTControlCard.enableRestore[ this.$section.prop( 'id' ) ] ) {
			this.$restore.addClass( 'hidden' );
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
}( jQuery, mediaWiki ) );
