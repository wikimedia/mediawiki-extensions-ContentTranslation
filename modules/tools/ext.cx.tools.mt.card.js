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

	var resetMT = 'reset-mt';

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
	 * @param {boolean} newProvider Is Provider is new?
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
			this.mt = new mw.cx.MachineTranslation( sourceId );
			this.$sourceSection.data( 'cxmt', this.mt );
		}

		this.mt.init().then( function () {
			var menuItems = self.mt.providers.concat(
				self.mt.translationOptions.filter( function ( item ) {
					return self.mt.providers.indexOf( item ) < 0;
				} ) );

			self.buildProvidersMenu( menuItems );
			self.$card.show();
			self.onShow();
		}, function () {
			self.stop();
		} );
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

}( jQuery, mediaWiki ) );
