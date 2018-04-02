'use strict';

/**
 * TranslationView Header
 *
 * @class
 * @extends OO.ui.PanelLayout
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.TranslationHeader = function ( config ) {
	// Configuration initialization
	this.config = config || {};
	this.statusbar = null;
	this.publishButton = null;
	// Parent constructor
	mw.cx.ui.TranslationHeader.super.call( this, $.extend( {}, this.config, {
		continuous: true,
		expanded: false,
		$content: this.getContent(),
		classes: [ 'cx-translation-view-header' ].concat( this.config.classes )
	} ) );

	this.listen();
};

/* Setup */

OO.inheritClass( mw.cx.ui.TranslationHeader, OO.ui.PanelLayout );

mw.cx.ui.TranslationHeader.prototype.getContent = function () {
	var translationCenter = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'previous',
		classes: [ 'cx-header__translation-center' ],
		label: mw.msg( 'cx-header-all-translations' ),
		href: mw.util.getUrl( 'Special:ContentTranslation' )
	} );

	this.statusbar = new OO.ui.LabelWidget( {
		classes: [ 'cx-header-draft-status' ],
		title: mw.msg( 'cx-save-draft-tooltip' )
	} );

	this.publishSettings = new mw.cx.ui.PublishSettingsWidget( {
		disabled: true,
		destination: mw.cx.getDefaultTargetNamespace()
	} );

	this.publishButton = new OO.ui.ButtonWidget( {
		disabled: true,
		flags: [ 'progressive', 'primary' ],
		classes: [ 'cx-header__publish-button' ],
		label: mw.msg( 'cx-publish-button' )
	} );

	this.toolbar = new OO.ui.HorizontalLayout( {
		continuous: true,
		expanded: true,
		classes: [ 'cx-header-tools-container' ],
		items: [ this.publishSettings, this.publishButton ]
	} );

	return [ translationCenter.$element, this.statusbar.$element, this.toolbar.$element ];
};

mw.cx.ui.TranslationHeader.prototype.listen = function () {
	mw.hook( 'mw.cx.translation.save-started' ).add(
		this.setStatusMessage.bind( this, mw.msg( 'cx-save-draft-saving' ) )
	);
	mw.hook( 'mw.cx.translation.save-failed' ).add(
		this.setStatusMessage.bind( this, mw.msg( 'cx-save-draft-error' ) )
	);

	mw.hook( 'mw.cx.draft.restoring' ).add(
		this.setStatusMessage.bind( this, mw.msg( 'cx-draft-restoring' ) )
	);
	mw.hook( 'mw.cx.draft.restored' ).add(
		this.setStatusMessage.bind( this, mw.msg( 'cx-draft-restored' ) )
	);
	mw.hook( 'mw.cx.draft.restore-failed' ).add( function () {
		this.setStatusMessage( mw.msg( 'cx-draft-restore-failed' ) );
		$( '.cx-widget__columns' ).addClass( 'disabled' );
	}.bind( this ) );

	if ( !mw.cx.supportsSticky() ) {
		$( window ).on( 'scroll resize', OO.ui.throttle( this.onWindowScroll.bind( this ), 100 ) );
	}
};

mw.cx.ui.TranslationHeader.prototype.setStatusMessage = function ( message ) {
	this.statusbar.setLabel( message );
};

mw.cx.ui.TranslationHeader.prototype.onWindowScroll = function () {
	var scrollTop = window.pageYOffset,
		$parent = this.$element.parent(),
		top = $parent.position().top;

	if ( scrollTop > top ) {
		this.$element.addClass( 'sticky' );
		// Adjust parent size with padding (in place for floated translation header) to avoid jumpiness
		$parent.css( 'padding-top', top );
	} else {
		this.$element.removeClass( 'sticky' );
		$parent.css( 'padding-top', 0 );
	}
};
