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
};

/* Setup */

OO.inheritClass( mw.cx.ui.Header, OO.ui.PanelLayout );

mw.cx.ui.Header.prototype.getContent = function () {
	var $wordmark, logo, $trademark, $trademarkText, personalMenu, $personal;

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
		icon: this.isAnon ? 'userAnonymous' : 'userAvatar',
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

	return [ $trademark, $personal ];
};

/**
 * Creates list of personal menu items and updates menu width
 *
 * @return {array} menuItems Array of menu items
 */
mw.cx.ui.Header.prototype.getPersonalMenuItems = function () {
	var index, menuItem,
		menuItems = [],
		personalMenuList = mw.config.get( 'personalMenuList' );

	if ( !this.isAnon ) {
		menuItem = personalMenuList.user;
		menuItems.push( this.createUserMenuOption( menuItem ) );
		delete personalMenuList.user;
	}

	for ( index in personalMenuList ) {
		menuItem = personalMenuList[ index ];
		menuItems.push( this.createUserMenuOption( menuItem ) );
	}

	return menuItems;
};

mw.cx.ui.Header.prototype.createUserMenuOption = function ( menuItem ) {
	var classes = menuItem.notvisited ? [ 'cx-header__personal-menu-option--missing' ] : [];

	return new OO.ui.MenuOptionWidget( {
		label: menuItem.text,
		data: menuItem.href,
		classes: classes,
		accessKey: menuItem.accesskey,
		$element: $( '<a>' )
			.attr( {
				href: menuItem.href,
				title: menuItem.title
			} )
	} );
};
