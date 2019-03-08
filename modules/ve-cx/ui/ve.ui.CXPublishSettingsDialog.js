'use strict';

/**
 * Creates an ve.ui.CXPublishSettingsDialog object.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends OO.ui.ProcessDialog
 */
ve.ui.CXPublishSettingsDialog = function VeUiCXPublishSettingsDialog() {
	// Parent constructor
	ve.ui.CXPublishSettingsDialog.parent.apply( this, arguments );

	this.namespaceSelector = null;
};

/* Inheritance */

OO.inheritClass( ve.ui.CXPublishSettingsDialog, OO.ui.ProcessDialog );

/* Static properties */

ve.ui.CXPublishSettingsDialog.static.name = 'publishSettings';

ve.ui.CXPublishSettingsDialog.static.title = OO.ui.deferMsg( 'cx-publish-settings' );

ve.ui.CXPublishSettingsDialog.static.actions = [
	{
		label: OO.ui.deferMsg( 'visualeditor-dialog-action-cancel' ),
		flags: [ 'safe', 'back' ]
	},
	{
		action: 'done',
		label: OO.ui.deferMsg( 'visualeditor-dialog-action-apply' ),
		flags: [ 'progressive', 'primary' ]
	}
];

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getActionProcess = function ( action ) {
	if ( action ) {
		return new OO.ui.Process( function () {
			if ( action === 'done' ) {
				ve.init.target.onPublishNamespaceChange(
					this.namespaceSelector.findSelectedItem().getData()
				);
			}

			this.close();
		}, this );
	}

	// Parent method
	return ve.ui.CXPublishSettingsDialog.parent.prototype.getActionProcess.call( this, action );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.initialize = function () {
	var publishDestinationLabel, helpIcon, $publishSettingsContainer,
		mainNamespaceId = mw.config.get( 'wgNamespaceIds' )[ '' ],
		userNamespaceId = mw.config.get( 'wgNamespaceIds' ).user,
		draftNamespaceId = mw.config.get( 'wgNamespaceIds' ).draft;

	// Parent method
	ve.ui.CXPublishSettingsDialog.parent.prototype.initialize.apply( this, arguments );

	publishDestinationLabel = new OO.ui.LabelWidget( {
		label: mw.msg( 'cx-publish-destination-header' ),
		classes: [ 've-ui-cxPublishSettings-destination' ]
	} );

	helpIcon = new OO.ui.ButtonWidget( {
		icon: 'helpNotice',
		framed: false,
		href: 'https://www.mediawiki.org/wiki/Help:Content_translation/Publishing',
		target: '_blank'
	} );

	$publishSettingsContainer = $( '<div>' )
		.addClass( 've-ui-cxPublishSettings-destination-container' )
		.append( publishDestinationLabel.$element, helpIcon.$element );

	this.namespaceSelector = new OO.ui.RadioSelectWidget( {
		classes: [ 've-ui-cxPublishSettings-selector' ],
		items: [
			this.createRadioOptionWidget( 'main', mainNamespaceId ),
			this.createRadioOptionWidget( 'user', userNamespaceId )
		]
	} );

	if ( draftNamespaceId ) {
		this.namespaceSelector.addItems( this.createRadioOptionWidget( 'draft', draftNamespaceId ) );
	}

	this.$body.append( $publishSettingsContainer, this.namespaceSelector.$element );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.setup = function () {
	this.namespaceSelector.selectItemByData( ve.init.target.getPublishNamespace() );

	// Parent method
	return ve.ui.CXPublishSettingsDialog.parent.prototype.setup.apply( this, arguments );
};

/**
 * Create OO.ui.RadioOptionWidget with description
 *
 * @param {string} namespace Name of the namespace. Also used as message key for label and description:
 * - Label: `cx-publish-destination-namespace-${namespace}`
 * - Description: `cx-publish-destination-namespace-${namespace}-description`
 * @param {Mixed} data Element data
 * @return {OO.ui.RadioOptionWidget}
 */
ve.ui.CXPublishSettingsDialog.prototype.createRadioOptionWidget = function ( namespace, data ) {
	var radioOption, description;

	radioOption = new OO.ui.RadioOptionWidget( {
		label: mw.msg( 'cx-publish-destination-namespace-' + namespace ),
		data: data
	} );
	description = new OO.ui.LabelWidget( {
		label: mw.msg( 'cx-publish-destination-namespace-' + namespace + '-description' ),
		classes: [ 'oo-ui-inline-help' ]
	} );

	radioOption.$label.append( description.$element );

	return radioOption;
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CXPublishSettingsDialog );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'publishSettings', 'window', 'open',
		{ args: [ 'publishSettings' ] }
	)
);
