'use strict';

/**
 * TranslationView Header
 *
 * @class
 * @extends OO.ui.PanelLayout
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.Header = function ( config ) {
	// Configuration initialization
	this.config = config || {};
	this.$headerBar = null;
	this.$headerBarContainer = null;
	this.$toolbar = null;
	this.infobar = null;
	this.statusbar = null;

	this.mainPageTitle = mw.util.getUrl( mw.config.get( 'wgMainPageTitle' ) );
	this.isAnon = mw.user.isAnon();
	this.userName = mw.config.get( 'wgUserName' );

	// Parent constructor
	mw.cx.ui.Header.super.call( this, $.extend( {}, this.config, {
		continuous: true,
		expanded: false,
		$content: this.getContent(),
		classes: [ 'cx-widget__header', 'cx-header' ].concat( this.config.classes )
	} ) );

	this.listen();
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.Header, OO.ui.PanelLayout );

mw.cx.ui.Header.static.timer = null;

mw.cx.ui.Header.prototype.getContent = function () {
	var $wordmark, logo, $trademark, $trademarkText,
		personalMenu, $personal, $main, $translationCenterLink, $translationCenter;

	$wordmark = $( '#cx-header__wordmark' );
	logo = new OO.ui.ButtonWidget( {
		href: this.mainPageTitle,
		icon: 'logoWikipedia',
		classes: [ 'cx-header__trademark-logo' ],
		framed: false
	} );
	$trademarkText = $( '<span>' )
		.addClass( 'cx-header__trademark-text' )
		.text( this.config.titleText || mw.msg( 'cx' ) );

	$trademark = $( '<div>' )
		.addClass( 'cx-header__trademark' )
		.toggleClass( 'cx-header__trademark--has-wordmark', !!$wordmark[ 0 ] )
		.append(
			$( '<a>' ).attr( 'href', this.mainPageTitle ).append( $wordmark ),
			logo.$element,
			$trademarkText
		);

	personalMenu = new mw.cx.ui.PersonalMenuWidget( {
		label: this.isAnon ? mw.msg( 'cx-personaltools-anon' ) : this.userName,
		icon: this.isAnon ? 'userInactive' : 'userAvatar',
		classes: [ 'cx-header__personal-menu' ],
		menu: {
			items: this.getPersonalMenuItems(),
			horizontalPosition: 'end',
			width: 'auto'
		}
	} );
	if ( !this.isAnon ) {
		personalMenu.setFlags( 'progressive' );
	}

	$personal = $( '.cx-header__personal' )
		.append( personalMenu.$element );

	$main = $( '<div>' )
		.addClass( 'cx-header__main' )
		.append( $trademark, $personal );

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

	this.$toolbar = $( '<div>' )
		.addClass( 'cx-header__toolbar' );

	this.$headerBar = $( '<div>' )
		.addClass( 'cx-header__bar' )
		.append( $translationCenter, this.statusbar.$element, this.$toolbar );

	this.$headerBarContainer = $( '<div>' )
		.addClass( 'cx-header__bar-container' )
		.append( this.$headerBar );

	this.infobar = new mw.cx.ui.Infobar( this.config );
	return [ $main, this.$headerBarContainer, this.infobar.$element ];
};

/**
 * Creates list of personal menu items and updates menu width
 *
 * @return {array} menuItems Array of menu items
 */
mw.cx.ui.Header.prototype.getPersonalMenuItems = function () {
	var i, length, menuItem,
		menuItems = [],
		personalMenuList = mw.config.get( 'personalMenuList' );

	if ( !this.isAnon ) {
		menuItems.push( this.addUserMenuOption() );
	}

	for ( i = 0, length = personalMenuList.length; i < length; i++ ) {
		menuItem = personalMenuList[ i ];

		menuItems.push( new OO.ui.MenuOptionWidget( {
			label: menuItem.text,
			data: menuItem.href,
			accessKey: menuItem.accesskey,
			$element: $( '<a>' )
				.attr( {
					href: menuItem.href,
					title: menuItem.title
				} )
		} ) );
	}

	return menuItems;
};

mw.cx.ui.Header.prototype.addUserMenuOption = function () {
	var userPageData = mw.config.get( 'userPageData' ),
		userLabel = mw.msg( 'cx-personaltools-user' );

	return new OO.ui.MenuOptionWidget( {
		label: userLabel,
		data: userPageData.link,
		accessKey: userPageData.accesskey,
		$element: $( '<a>' )
			.attr( {
				href: userPageData.link,
				title: userPageData.title
			} )
	} );
};

mw.cx.ui.Header.prototype.listen = function () {
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

	$( window ).on( 'scroll resize', $.throttle( 250, this.onWindowScroll.bind( this ) ) );
};

mw.cx.ui.Header.prototype.setStatusMessage = function ( message ) {
	this.statusbar.setLabel( message );
};

mw.cx.ui.Header.prototype.onWindowScroll = function () {
	var scrollTop = $( window ).scrollTop(),
		headerOffsetTop = this.$headerBarContainer.offset().top;

	if ( scrollTop > headerOffsetTop ) {
		this.$element.addClass( 'sticky' );
	} else {
		this.$element.removeClass( 'sticky' );
	}
};
