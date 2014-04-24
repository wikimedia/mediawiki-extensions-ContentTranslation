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
	 * Create a new page with given language and title.
	 * @param {string} language
	 * @param {string} title
	 */
	function createNewPage( language, title ) {
		var uri = new mw.Uri(),
			domainTemplate = mw.config.get( 'wgContentTranslationDomainTemplate' );

		uri.host = domainTemplate.replace( '$1', language );
		uri.path = mw.config.get( 'wgScript' );
		uri.query = {
			title: title || mw.config.get( 'wgTitle' ),
			action: 'edit'
		};

		window.location.href = uri.toString();
	}

	/**
	 * Do the content translation by goint to Special:CX
	 * with the given source-target title and target language
	 * @param {string} sourceTitle
	 * @param {string} targetTitle
	 * @param {string} targetLanguage
	 */
	function doCX( sourceTitle, targetTitle, targetLanguage ) {
		window.location.href = mw.util.getUrl(
			'Special:ContentTranslation', {
				page: sourceTitle,
				lang: targetLanguage,
				targettitle: targetTitle
			}
		);
	}

	/**
	 * @class
	 */
	function CXEntryPoint( $trigger, options ) {
		this.$trigger = $( $trigger );
		this.options = $.extend( {}, $.fn.cxEntryPoint.defaults, options );
		this.$dialog = null;

		this.init();
	}

	/**
	 * Initialize the plugin.
	 */
	CXEntryPoint.prototype.init = function () {
		this.listen();
	};

	/**
	 * Listen for events.
	 */
	CXEntryPoint.prototype.listen = function () {
		var entryPoint = this;

		// Hide the dialog when clicking outside it
		$( 'html' ).click( function () {
			if ( entryPoint.$dialog && !entryPoint.$dialog.hasClass( 'hidden' ) ) {
				entryPoint.hide();
			}
		} );

		// Open or close the dialog when clicking the link.
		// The dialog will be unitialized until the first click.
		this.$trigger.click( function ( e ) {
			e.preventDefault();
			e.stopPropagation();

			// jquery.uls.data is needed for autonyms
			mw.loader.using( 'jquery.uls.data', function () {
				if ( !entryPoint.$dialog ) {
					entryPoint.render();
				}

				entryPoint.toggle();
			} );
		} );
	};

	/**
	 * Show or Hide the CX entry point dialog based on current state
	 */
	CXEntryPoint.prototype.toggle = function () {
		if ( this.$dialog.hasClass( 'hidden' ) ) {
			this.show();
		} else {
			this.hide();
		}
	};

	/**
	 * Show the entry point dialog
	 */
	CXEntryPoint.prototype.show = function () {
		this.$dialog.removeClass( 'hidden' );
		this.position();
		this.$dialog.find( 'input' ).focus();
	};

	/**
	 * Position the entry point dialog.
	 */
	CXEntryPoint.prototype.position = function () {
		var dialogTop, dialogLeft,
			dir = $( 'html' ).prop( 'dir' );

		// The default is to place the dialog near the element that triggers it
		dialogTop = this.options.top || this.$trigger.offset().top;
		dialogLeft = this.options.left || this.$trigger.offset().left;

		if ( dir === 'rtl' ) {
			dialogLeft = dialogLeft - this.$dialog.width();
		}

		this.$dialog.css( {
			top: dialogTop,
			left: dialogLeft
		} );
	};

	/**
	 * Hide the entry point dialog.
	 */
	CXEntryPoint.prototype.hide = function () {
		this.$dialog.addClass( 'hidden' );
	};

	/**
	 * Start a new page translation in Special:CX
	 */
	CXEntryPoint.prototype.startPageInCX = function () {
		var $titleInput = this.$dialog.find( '.cx-entrypoint-dialog__title-box-block input' );

		doCX( mw.config.get( 'wgTitle' ), $titleInput.val(), this.options.targetLanguage );
	};

	/**
	 * Render the CX entry point dialog.
	 */
	CXEntryPoint.prototype.render = function () {
		var $fromScratchButton, $translateFromButton, $actions,
			$titleInput, $titleBoxBlock,
			$closeIcon, $heading, $titleLabel,
			entryPoint = this,
			targetAutonym = $.uls.data.getAutonym( this.options.targetLanguage ),
			currentTitle = mw.config.get( 'wgTitle' );

		this.$dialog = $( '<div>' )
			.prop( 'id', 'cx-entrypoint-dialog-' + this.options.targetLanguage )
			.addClass( 'cx-entrypoint-dialog hidden' )
			.click( function ( e ) {
				e.stopPropagation();
			} );

		$closeIcon = $( '<span>' )
			.addClass( 'icon-close' )
			.click( $.proxy( this.hide, this ) );

		$heading = $( '<div>' ).addClass( 'cx-entrypoint-dialog__heading' )
			.html( mw.msg( 'cx-entrypoint-dialog-page-doesnt-exist-yet', targetAutonym ) )
			.prepend( $closeIcon );

		$titleLabel = $( '<div>' ).addClass( 'cx-entrypoint-dialog__title-label' )
			.html( mw.msg( 'cx-entrypoint-dialog-title-in', targetAutonym ) );

		$titleInput = $( '<input>' )
			.prop( {
				placeholder: currentTitle,
				lang: this.options.targetLanguage,
				dir: $.uls.data.getDir( this.options.targetLanguage )
			} );

		$titleBoxBlock = $( '<div>' ).addClass( 'cx-entrypoint-dialog__title-box-block' )
			.append( $titleInput );

		$fromScratchButton = $( '<button>' )
			.addClass( 'mw-ui-button cx-entrypoint-dialog-button-create-from-scratch' )
			.text( mw.msg( 'cx-entrypoint-dialog-button-create-from-scratch' ) )
			.click( function () {
				createNewPage( entryPoint.options.targetLanguage, $titleInput.val() );
			} );

		$translateFromButton = $( '<button>' )
			.addClass( 'mw-ui-button cx-entrypoint-dialog-button-translate-from' )
			.text( mw.msg(
				'cx-entrypoint-dialog-button-translate-from',
				$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) )
			) )
			.click( $.proxy( this.startPageInCX, this ) );

		$actions = $( '<div>' ).addClass( 'cx-entrypoint-dialog__actions' )
			.append( $fromScratchButton, $translateFromButton );

		this.$dialog.append( $heading, $titleLabel, $titleBoxBlock, $actions );

		$( 'body' ).append( this.$dialog );
	};

	/**
	 * CXEntryPoint Plugin
	 */
	$.fn.cxEntryPoint = function ( options ) {
		return this.each( function () {
			var $this = $( this ),
				data = $this.data( 'cxentrypoint' );

			if ( !data ) {
				$this.data( 'cxentrypoint', ( data = new CXEntryPoint( this, options ) ) );
			}
		} );
	};

	$.fn.cxEntryPoint.defaults = {};

}( jQuery, mediaWiki ) );
