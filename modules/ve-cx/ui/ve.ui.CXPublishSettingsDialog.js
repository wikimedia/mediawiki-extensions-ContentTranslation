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
	this.initialNamespace = null;
	this.mainNamespaceId = mw.config.get( 'wgNamespaceIds' )[ '' ];
	this.targetTitleExists = false;
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
		flags: [ 'progressive', 'primary' ],
		disabled: true
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
 * Update the 'done' action according to whether there are changes
 *
 * @param {OO.ui.OptionWidget|null} selectedItem
 */
ve.ui.CXPublishSettingsDialog.prototype.updateActions = function ( selectedItem ) {
	var namespace = selectedItem ? selectedItem.getData() : null;
	this.actions.setAbilities( { done: this.initialNamespace !== namespace } );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.initialize = function () {
	var publishDestinationLabel, helpIcon, $publishSettingsContainer,
		namespaceIds = mw.config.get( 'wgNamespaceIds' );

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
			this.createRadioOptionWidget( 'main', namespaceIds[ '' ] ),
			this.createRadioOptionWidget( 'user', namespaceIds.user )
		]
	} );

	if ( namespaceIds.draft ) {
		this.namespaceSelector.addItems( this.createRadioOptionWidget( 'draft', namespaceIds.draft ) );
	}

	this.$body.append( $publishSettingsContainer, this.namespaceSelector.$element );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getSetupProcess = function ( data ) {
	// Parent method
	return ve.ui.CXPublishSettingsDialog.parent.prototype.getSetupProcess.call( this, data )
		.next( function () {
			this.initialNamespace = ve.init.target.getPublishNamespace();
			this.namespaceSelector.connect( this, { select: 'updateActions' } );
			this.namespaceSelector.selectItemByData( this.initialNamespace );
			this.doesTargetTitleExist().then( this.changeMainNamespaceLabel.bind( this ) );
		}, this );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getReadyProcess = function ( data ) {
	// Parent method
	return ve.ui.CXPublishSettingsDialog.parent.prototype.getReadyProcess.call( this, data )
		.next( function () {
			if ( this.namespaceSelector.findSelectedItem() ) {
				// Focus causes the first item to become selected
				this.namespaceSelector.focus();
			}
		}, this );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getTeardownProcess = function ( data ) {
	// Parent method
	return ve.ui.CXPublishSettingsDialog.parent.prototype.getTeardownProcess.call( this, data )
		.next( function () {
			this.namespaceSelector.disconnect( this );
			this.namespaceSelector.selectItem();
		}, this );
};

/**
 * Create OO.ui.RadioOptionWidget with description
 *
 * @param {string} namespace Name of the namespace. 'main', 'user' or 'draft'.
 *  Also used as message key for label and description:
 *  - Label: `cx-publish-destination-namespace-${namespace}`
 *  - Description: `cx-publish-destination-namespace-${namespace}-description`
 * @param {Mixed} data Option widget data
 * @return {OO.ui.RadioOptionWidget}
 */
ve.ui.CXPublishSettingsDialog.prototype.createRadioOptionWidget = function ( namespace, data ) {
	var radioOption, description;

	radioOption = new OO.ui.RadioOptionWidget( {
		// Messages used here:
		// * cx-publish-destination-namespace-main
		// * cx-publish-destination-namespace-user
		// * cx-publish-destination-namespace-draft
		label: mw.msg( 'cx-publish-destination-namespace-' + namespace ),
		data: data
	} );
	description = new OO.ui.LabelWidget( {
		// Messages used here:
		// * cx-publish-destination-namespace-main-description
		// * cx-publish-destination-namespace-user-description
		// * cx-publish-destination-namespace-draft-description
		label: mw.msg( 'cx-publish-destination-namespace-' + namespace + '-description' ),
		classes: [ 'oo-ui-inline-help' ]
	} );

	radioOption.$element.append( description.$element );

	return radioOption;
};

/**
 * @return {jQuery.Promise}
 */
ve.ui.CXPublishSettingsDialog.prototype.doesTargetTitleExist = function () {
	var pageTitle = mw.cx.getTitleForNamespace( ve.init.target.getPageName(), this.mainNamespaceId );

	return ve.init.platform.linkCache.get( pageTitle ).then( function ( result ) {
		return !result.missing;
	} );
};

/**
 * @param {boolean} targetTitleExists True if target title exists in main namespace
 */
ve.ui.CXPublishSettingsDialog.prototype.changeMainNamespaceLabel = function ( targetTitleExists ) {
	var msgKey = 'cx-publish-destination-namespace-main';

	if ( this.targetTitleExists === targetTitleExists ) {
		return;
	}

	this.targetTitleExists = targetTitleExists;

	msgKey += targetTitleExists ? '-exists' : '';
	// Messages used here:
	// * cx-publish-destination-namespace-main
	// * cx-publish-destination-namespace-main-exists
	this.namespaceSelector.findItemFromData( this.mainNamespaceId ).setLabel( mw.msg( msgKey ) );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CXPublishSettingsDialog );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'publishSettings', 'window', 'open',
		{ args: [ 'publishSettings' ] }
	)
);
