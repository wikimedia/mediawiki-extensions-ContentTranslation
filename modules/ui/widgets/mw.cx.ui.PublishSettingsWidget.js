/*!
 * Content Translation UserInterface PublishSettingsWidget class.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

'use strict';

/**
 * Creates an mw.cx.ui.PublishSettingsWidget object.
 *
 * @class
 * @extends OO.ui.PopupButtonWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {string} [destination] publishing destination. Any of main, user, draft.
 */
mw.cx.ui.PublishSettingsWidget = function PublishSettingsWidget( config ) {

	this.publishingOptionsWidget = null;
	config = $.extend( {}, {
		icon: 'settings',
		framed: false,
		destination: 'main',
		title: mw.msg( 'cx-publish-destination-tooltip' )
	}, config );
	this.destination = config.destination;
	config.popup = {
		$content: this.getOptionsMenu(),
		padded: false,
		anchor: false,
		align: 'forwards'
	};
	// Parent constructor
	mw.cx.ui.PublishSettingsWidget.super.call( this, config );

	// Initialization
	this.$element.addClass( 'mw-cx-ui-PublishSettingsWidget' );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.PublishSettingsWidget, OO.ui.PopupButtonWidget );

/* Events */

/**
 * @event choose
 *
 * An item from the publishing destination was chosen
 *
 * @param {number} namespaceId Namespace Identifier
 */

/* Methods */
mw.cx.ui.PublishSettingsWidget.prototype.getOptionsMenu = function () {
	var menu, publishDestinationMain, publishDestinationUser, publishDestinationDraft,
		publishingOptions;

	publishDestinationMain = new OO.ui.RadioOptionWidget( {
		data: 0,
		label: mw.msg( 'cx-publish-destination-namespace-main' )
	} );

	publishDestinationUser = new OO.ui.RadioOptionWidget( {
		data: mw.config.get( 'wgNamespaceIds' ).user,
		label: mw.msg( 'cx-publish-destination-namespace-user' )
	} );

	publishingOptions = [ publishDestinationMain, publishDestinationUser ];

	// Add draft only if that namespace exists
	if ( mw.config.get( 'wgNamespaceIds' ).draft ) {
		publishDestinationDraft = new OO.ui.RadioOptionWidget( {
			data: mw.config.get( 'wgNamespaceIds' ).draft,
			label: mw.msg( 'cx-publish-destination-namespace-draft' )
		} );
		publishingOptions.push( publishDestinationDraft );
	}

	this.publishingOptionsWidget = new OO.ui.RadioSelectWidget( {
		items: publishingOptions
	} );
	this.publishingOptionsWidget.selectItemByData( this.destination );
	this.publishingOptionsWidget.connect( this, { choose: 'onChoose' } );
	menu = new OO.ui.SelectWidget( {
		classes: [ 'mw-cx-ui-PublishSettingsWidget-menu' ],
		items: [
			new OO.ui.MenuSectionOptionWidget( {
				classes: [ 'mw-cx-ui-PublishSettingsWidget-menu-section-header' ],
				label: mw.msg( 'cx-publish-destination-header' )
			} ),
			new OO.ui.MenuOptionWidget( {
				classes: [ 'mw-cx-ui-PublishSettingsWidget-menu-destinations' ],
				content: [ this.publishingOptionsWidget ]
			} )
		]
	} );
	return menu.$element;
};

mw.cx.ui.PublishSettingsWidget.prototype.setDestinationNamespace = function ( destination ) {
	this.publishingOptionsWidget.selectItemByData( destination );
};

mw.cx.ui.PublishSettingsWidget.prototype.onChoose = function ( item ) {
	this.emit( 'choose', item.data );
	this.popup.toggle();
};
