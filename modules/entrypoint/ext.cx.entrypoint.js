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
	 * @class
	 * @param {jQuery} $trigger
	 * @param {Object} options
	 */
	function CXEntryPoint( $trigger, options ) {
		this.$trigger = $( $trigger );
		this.options = $.extend( {}, $.fn.cxEntryPoint.defaults, options );
		this.siteMapper = new mw.cx.SiteMapper( mw.config.get( 'wgContentTranslationSiteTemplates' ) );

		this.$dialog = null;
		this.$actionScratch = null;
		this.$actionTranslate = null;
		this.$titleInput = null;
		this.$closeIcon = null;

		this.shown = false;

		this.init();
	}

	/**
	 * Initialize the plugin.
	 */
	CXEntryPoint.prototype.init = function () {
		this.renderDialog();
		this.listen();
	};

	/**
	 * Listen for events.
	 */
	CXEntryPoint.prototype.listen = function () {
		var self = this;

		this.$trigger.on( 'click', function ( e ) {
			e.stopPropagation();
			e.preventDefault();
			self.toggle();
		} );
	};

	/**
	 * Toggle the entry point dialog.
	 */
	CXEntryPoint.prototype.toggle = function () {
		if ( this.shown ) {
			this.hide();
		} else {
			this.show();
		}
	};

	/**
	 * Show the entry point dialog.
	 */
	CXEntryPoint.prototype.show = function () {
		this.$trigger.callout( 'show' );
		this.shown = true;
		this.$titleInput.focus();
		this.$closeIcon.one( 'click', $.proxy( this.hide, this ) );
		this.$actionTranslate.one( 'click', $.proxy( this.startPageInCX, this ) );
		this.$actionScratch.one( 'click', $.proxy( this.startFromScratch, this ) );
		mw.hook( 'mw.cx.cta.shown' ).fire( this.options.entryPointName );
	};

	/**
	 * Hide the entry point dialog.
	 */
	CXEntryPoint.prototype.hide = function () {
		this.$trigger.callout( 'hide' );
		mw.hook( 'mw.cx.cta.reject' ).fire( this.options.entryPointName );
		this.shown = false;
	};

	/**
	 * Go to creating the article using the usual wiki editor.
	 */
	CXEntryPoint.prototype.startFromScratch = function () {
		var title, url;

		title = this.$titleInput.val() || mw.config.get( 'wgTitle' );
		url = this.siteMapper.getPageUrl( this.options.targetLanguage, title );
		location.href = url;
	};

	/**
	 * Start a new page translation in Special:CX.
	 */
	CXEntryPoint.prototype.startPageInCX = function () {
		var sourceLanguage = mw.config.get( 'wgContentLanguage' ),
			sourceTitle = mw.config.get( 'wgTitle' );

		this.siteMapper.setCXToken( sourceLanguage, this.options.targetLanguage, sourceTitle );
		location.href = this.siteMapper.getCXUrl(
			sourceTitle,
			this.$titleInput.val(),
			sourceLanguage,
			this.options.targetLanguage,
			this.options.entryPointName
		);
	};

	/**
	 * Render the CX entry point dialog.
	 */
	CXEntryPoint.prototype.renderDialog = function () {
		var $dialog, $heading, $titleLabel, $titleBoxBlock,
			translateButtonLabel, $license, $actions,
			targetAutonym = $.uls.data.getAutonym( this.options.targetLanguage ),
			currentTitle = mw.config.get( 'wgTitle' );

		$dialog = $( '<div>' )
			.prop( 'id', 'cx-entrypoint-dialog-' + this.options.targetLanguage );

		this.$closeIcon = $( '<span>' )
			.addClass( 'icon-close' )
			.on( 'click', $.proxy( this.hide, this ) );

		// Uses .html because of <br /> in the message
		$heading = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__heading' )
			.html( mw.msg( 'cx-entrypoint-dialog-page-doesnt-exist-yet', targetAutonym ) )
			.prepend( this.$closeIcon );

		$titleLabel = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__title-label' )
			.text( mw.msg( 'cx-entrypoint-dialog-title-in', targetAutonym ) );

		this.$titleInput = $( '<input>' )
			.prop( {
				placeholder: currentTitle,
				lang: this.options.targetLanguage,
				dir: $.uls.data.getDir( this.options.targetLanguage )
			} );

		$titleBoxBlock = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__title-box-block' )
			.append( this.$titleInput );

		this.$actionScratch = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-quiet cx-entrypoint-dialog-button-create-from-scratch' )
			.text( mw.msg( 'cx-entrypoint-dialog-button-create-from-scratch' ) );

		translateButtonLabel = mw.msg(
			'cx-entrypoint-dialog-button-translate-from',
			$.uls.data.getAutonym( mw.config.get( 'wgContentLanguage' ) )
		);
		this.$actionTranslate = $( '<button>' )
			.addClass( 'mw-ui-button mw-ui-progressive cx-entrypoint-dialog-button-translate-from' )
			.text( translateButtonLabel );

		$license = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__license' )
			.html( mw.message( 'cx-license-agreement', translateButtonLabel ).parse() );

		$actions = $( '<div>' )
			.addClass( 'cx-entrypoint-dialog__actions' )
			.append( this.$actionScratch, this.$actionTranslate );

		$dialog.append( $heading, $titleLabel, $titleBoxBlock, $license, $actions );

		this.$trigger.callout( {
			trigger: 'manual',
			content: $dialog,
			direction: $.fn.callout.autoDirection( '9' ),
			classes: 'cx-entrypoint-dialog'
		} );
	};

	/**
	 * CXEntryPoint plugin
	 * @param {Object} options
	 * @return {jQuery}
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
