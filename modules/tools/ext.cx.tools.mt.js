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
	 * A plugin that performs machine translation on an element.
	 * @param {text} text
	 */
	$.fn.machineTranslate = function () {
		var $section, sourceContent;

		if ( !mw.cx.tools.mt.enabled() ) {
			return;
		}

		$section = $( this );
		sourceContent = $section[ 0 ].outerHTML;

		mw.cx.mt( mw.cx.sourceLanguage, mw.cx.targetLanguage, sourceContent )
			.done( function ( translation ) {
				if ( translation ) {
					$section.html( $( translation ).children().html() )
						.adaptLinks( mw.cx.targetLanguage );
				}
			} ).fail( function () {
				$section.adaptLinks( mw.cx.targetLanguage );
			} );

		return this;
	};

	function MTControlCard() {
		this.$section = null;
		this.$card = null;
		this.$translations = null;
		this.$definition = null;

		if ( !mw.cx.tools.mt.providers ) {
			mw.cx.tools.mt.providers = getProviders( mw.cx.sourceLanguage, mw.cx.targetLanguage );
			mw.cx.tools.mt.provider = mw.cx.tools.mt.providers ?
				mw.cx.tools.mt.providers.defaultProvider :
				disableMT;
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

		$useSource = $( '<div>' )
			.addClass( 'card__control-button cx-use-source' )
			.text( mw.msg( 'cx-tools-mt-use-source' ) );

		$clearTranslation  = $( '<div>' )
			.addClass( 'card__control-button cx-clear-translation' )
			.text( mw.msg( 'cx-tools-mt-clear-translation' ) );

		this.$providerSelectorTrigger = $( '<div>' )
			.addClass( 'card__trigger' );

		$controlButtonsBlock = $( '<div>' )
			.addClass( 'card__control-block' )
			.append(
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

	MTControlCard.prototype.useSource = function () {
		var sourceId = this.$section.data( 'source' ),
			cxMtCard = this;

		// Paste the source without machine translation
		mw.hook( 'mw.cx.translation.add' ).fire( sourceId, false );

		// Updating the section replaced the DOM element,
		// so it needs to be reinitialized
		mw.hook( 'mw.cx.translation.updated' ).add( function () {
			cxMtCard.$section = $( '#cx' + sourceId );
		} );
	};

	MTControlCard.prototype.clearTranslation = function () {
		this.$section
			.html( '' )
			.focus();
	};

	MTControlCard.prototype.selectProvider = function ( providerId ) {
		var $providerItem = $( '#' + providerIdPrefix + providerId );

		$providerItem.parent().addClass( 'hidden' );
		mw.cx.tools.mt.provider = providerId;

		this.$providerSelectorTrigger.text( $providerItem.text() );
	};

	MTControlCard.prototype.listen = function () {
		this.$card.find( '.cx-use-source' )
			.on( 'click', $.proxy( this.useSource, this ) );

		this.$card.find( '.cx-clear-translation' )
			.on( 'click', $.proxy( this.clearTranslation, this ) );
	};

	MTControlCard.prototype.buildProvidersMenu = function () {
		var provider, $providersMenu;

		$providersMenu = $( '<ul>' )
			.addClass( 'card__providers-menu hidden' );

		// Add available machine translation engines to the menu
		for ( provider in mw.cx.tools.mt.providers ) {
			$providersMenu.append(
				this.getProviderItem(
					provider,
					mw.cx.tools.mt.providers[ provider ].title
				)
			);
		}

		// Add an item to disable machine translation for the language
		$providersMenu.append(
			this.getProviderItem(
				'disable-mt',
				mw.msg( 'cx-tools-mt-dont-use' ),
				function () {
					mw.cx.tools.mt.provider = disableMT;
					mw.log( 'disabling machine translation' );
				}
			)
		);

		this.$providerSelectorTrigger
			.on( 'click', function ( e ) {
				$providersMenu.toggleClass( 'hidden' );
				e.stopPropagation();
			} )
			.after( $providersMenu );
	};

	MTControlCard.prototype.getProviderItem = function ( id, providerName ) {
		return $( '<li>' )
			.text( providerName )
			.prop( 'id', providerIdPrefix + id )
			.on( 'click', $.proxy( this.selectProvider, this, id ) );
	};

	/**
	 * TODO
	 */
	function getProviders( from, to ) {
		var providers;

		providers = {
			es: {
				ca: {
					'apertium-es-ca': {
						title: 'Apertium español-català'
					},
					defaultProvider: 'apertium-es-ca'
				}
			}
		};

		if ( providers[ from ] && providers[ from ][ to ] ) {
			return providers[ from ][ to ];
		}

		return false;
	}

	MTControlCard.prototype.start = function ( $section ) {
		mw.log( 'MTControlCard.prototype.start' ); // TODO remove

		this.$section = $section;
		this.$card.show();
		this.onShow();
	};

	MTControlCard.prototype.stop = function () {
		mw.log( 'MTControlCard.prototype.stop' ); // TODO remove
		this.$card.remove();
	};

	MTControlCard.prototype.onShow = function () {
		this.selectProvider( mw.cx.tools.mt.provider );
		mw.hook( 'mw.cx.tools.shown' ).fire( true );
	};

	MTControlCard.prototype.getTriggerEvents = function () {
		return [
			'mw.cx.translation.focus'
		];
	};

	mw.cx.tools.mt = MTControlCard;

	mw.cx.tools.mt.enabled = function () {
		return mw.cx.tools.mt.provider !== disableMT;
	};
}( jQuery, mediaWiki ) );
