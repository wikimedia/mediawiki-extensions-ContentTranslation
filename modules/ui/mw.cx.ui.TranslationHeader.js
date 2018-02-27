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
	this.$headerBar = null;
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

mw.cx.ui.TranslationHeader.static.timer = null;

mw.cx.ui.TranslationHeader.prototype.getContent = function () {
	var $translationCenterLink, $translationCenter;

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
		items: [ this.publishButton ]
	} );

	return [ $translationCenter, this.statusbar.$element, this.toolbar.$element ];
};

mw.cx.ui.TranslationHeader.prototype.listen = function () {
	mw.hook( 'mw.cx.translation.save-started' ).add(
		this.setStatusMessage.bind( this, mw.msg( 'cx-save-draft-saving' ) )
	);
	mw.hook( 'mw.cx.translation.saved' ).add( function () {
		var minutes = 0;

		clearTimeout( this.constructor.static.timer );
		this.setStatusMessage( mw.msg( 'cx-save-draft-save-success', 0 ) );
		this.constructor.static.timer = setInterval( function () {
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

	$( window ).on( 'scroll resize', OO.ui.throttle( this.onWindowScroll.bind( this ), 100 ) );

};

mw.cx.ui.TranslationHeader.prototype.setStatusMessage = function ( message ) {
	this.statusbar.setLabel( message );
};

mw.cx.ui.TranslationHeader.prototype.onWindowScroll = function () {
	var scrollTop = $( window ).scrollTop();
	if ( scrollTop > 50 ) {
		this.$element.addClass( 'sticky' );
	} else {
		this.$element.removeClass( 'sticky' );
	}
};
