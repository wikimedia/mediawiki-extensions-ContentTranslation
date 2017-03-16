'use strict';

var timer;
/**
 * TranslationView Header
 *
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.Header = function ( config ) {
	// Configuration initialization
	this.config = config || {};
	this.$headerBar = null;
	this.infobar = null;
	this.statusbar = null;
	// Parent constructor
	mw.cx.ui.Header.parent.call( this, $.extend( {}, this.config, {
		continuous: true,
		expanded: false,
		$content: this.getContent(),
		classes: [ 'cx-widget__header', 'cx-header' ]
	} ) );
	this.listen();
};

/* Setup */

OO.inheritClass( mw.cx.ui.Header, OO.ui.PanelLayout );

mw.cx.ui.Header.prototype.getContent = function () {
	var logo, $titleText, $headerTitle, $translationCenterLink, $translationCenter;

	logo = new OO.ui.ButtonWidget( {
		href: mw.config.get( 'wgScript' ),
		icon: 'logoWikipedia',
		classes: [ 'cx-header__logo' ],
		framed: false
	} );
	$titleText = $( '<span>' )
		.addClass( 'cx-header__title-text' )
		.text( this.config.titleText || mw.msg( 'cx' ) );

	$headerTitle = $( '<div>' )
		.addClass( 'cx-header__title' )
		.append( logo.$element, $titleText );

	$translationCenterLink = $( '<a>' )
		.attr( 'href', mw.util.getUrl( 'Special:ContentTranslation' ) )
		.text( mw.msg( 'cx-header-all-translations' ) );

	$translationCenter = $( '<div>' )
		.addClass( 'cx-header__translation-center' )
		.append( $translationCenterLink );

	this.statusbar = new OO.ui.LabelWidget( {
		classes: [ 'cx-header-draft-status' ],
		title: mw.msg( 'cx-save-draft-tooltip' )
	} );

	this.$headerBar = $( '<div>' )
		.addClass( 'cx-header__bar' )
		.append( $translationCenter, this.statusbar.$element );

	this.infobar = new mw.cx.ui.Infobar( this.config );
	return $( '<div>' ).append( $headerTitle, this.$headerBar, this.infobar.$element );
};

mw.cx.ui.Header.prototype.listen = function () {
	mw.hook( 'mw.cx.translation.save-started' ).add(
		this.setStatusMessage.bind( this, mw.msg( 'cx-save-draft-saving' ) )
	);
	mw.hook( 'mw.cx.translation.saved' ).add( function() {
		var minutes = 0;

		clearTimeout( timer );
		this.setStatusMessage( mw.msg( 'cx-save-draft-save-success', 0 ) );
		timer = setInterval( function () {
			minutes++;
			this.setStatusMessage(
				mw.msg( 'cx-save-draft-save-success', mw.language.convertNumber( minutes ) )
			);
		}.bind( this ), 60 * 1000 );
	}.bind( this ) );
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
	$( window ).on( 'scroll resize', this.onWindowScroll.bind( this ) );
};

mw.cx.ui.Header.prototype.setStatusMessage = function ( message ) {
	this.statusbar.setLabel( message );
};

mw.cx.ui.Header.prototype.onWindowScroll = function () {
	var scrollTop = $( window ).scrollTop();

	if ( scrollTop > 0 ) {
		this.$element.addClass( 'sticky' );
	} else {
		this.$element.removeClass( 'sticky' );
	}
};
