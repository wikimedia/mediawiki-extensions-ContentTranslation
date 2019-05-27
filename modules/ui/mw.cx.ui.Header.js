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

	// Default index resolves to the wiki's Main Page
	this.mainPageUrl = mw.config.get( 'wgScript' );
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

/**
 * Creates the content for the header
 *
 * @return {Array} content item
 */
mw.cx.ui.Header.prototype.getContent = function () {
	var $wordmark, logo, $trademarkText, personalMenuList, personalMenu, userLink,
		content = [];

	$wordmark = $( '#cx-header__wordmark' );
	logo = new OO.ui.ButtonWidget( {
		href: this.mainPageUrl,
		icon: 'logoWikipedia',
		classes: [ 'cx-header__trademark-logo' ],
		framed: false
	} );
	$trademarkText = $( '<span>' )
		.addClass( 'cx-header__trademark-text' )
		.text( this.config.titleText || mw.msg( 'cx' ) );

	content.push( $( '<div>' )
		.addClass( 'cx-header__trademark' )
		.toggleClass( 'cx-header__trademark--has-wordmark', !!$wordmark[ 0 ] )
		.append(
			$( '<a>' ).attr( 'href', this.mainPageUrl ).append( $wordmark ),
			logo.$element,
			$trademarkText
		)
	);
	personalMenuList = mw.config.get( 'personalMenuList' );
	if ( personalMenuList && Object.keys( personalMenuList ).length ) {
		personalMenu = new mw.cx.ui.PersonalMenuWidget( {
			label: this.isAnon ? mw.msg( 'cx-personaltools-anon' ) : this.userName,
			icon: this.isAnon ? 'userAnonymous' : 'userAvatar',
			classes: [ 'cx-header__personal-menu' ],
			menu: {
				items: this.getPersonalMenuItems( personalMenuList ),
				horizontalPosition: 'end',
				width: 'auto'
			}
		} );
		if ( !this.isAnon ) {
			personalMenu.setFlags( 'progressive' );
		}

		content.push( $( '.cx-header__personal' ).append( personalMenu.$element ) );
	} else {
		userLink = new OO.ui.ButtonWidget( {
			label: this.isAnon ? mw.msg( 'cx-personaltools-anon' ) : this.userName,
			icon: this.isAnon ? 'userAnonymous' : 'userAvatar',
			classes: [ 'cx-header__personal-menu' ],
			href: mw.util.getUrl( 'User:' + this.userName ),
			target: '_blank'
		} );
		content.push( $( '.cx-header__personal' ).append( userLink.$element ) );
	}

	return content;
};

/**
 * Creates list of personal menu items and updates menu width
 *
 * @param {Object} personalMenuList
 * @return {Array} menuItems Array of menu items
 */
mw.cx.ui.Header.prototype.getPersonalMenuItems = function ( personalMenuList ) {
	var index, menuItem,
		menuItems = [];

	if ( !this.isAnon ) {
		menuItem = personalMenuList.user;
		if ( menuItem ) {
			menuItems.push( this.createUserMenuOption( menuItem ) );
		}
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
