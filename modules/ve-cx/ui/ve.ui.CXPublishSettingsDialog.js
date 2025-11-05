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
	ve.ui.CXPublishSettingsDialog.super.apply( this, arguments );

	this.publishOptionSelector = null;
	// this is used (modified) only for article translations
	this.initialNamespace = null;
	// this string value is used only for section translations
	this.initialPublishTarget = null;
	this.mainNamespaceId = mw.config.get( 'wgNamespaceIds' )[ '' ];
	this.targetTitleExists = false;
	/**
	 * This is used (modified) only for section translations
	 *
	 * @type {mw.cx.dm.Translation|null}
	 */
	this.translation = null;
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
			const selectedOption = this.publishOptionSelector.findSelectedItem().getData();
			if ( action === 'done' ) {
				if ( !this.isSectionTranslation() ) {
					ve.init.target.onPublishNamespaceChange( selectedOption );
				} else {
					this.translation.setPublishTarget( selectedOption );
				}
			}

			this.close();
		}, this );
	}

	// Parent method
	return ve.ui.CXPublishSettingsDialog.super.prototype.getActionProcess.call( this, action );
};

/**
 * Update the 'done' action according to whether there are changes
 *
 * @param {OO.ui.OptionWidget|null} selectedItem
 */
ve.ui.CXPublishSettingsDialog.prototype.updateActions = function ( selectedItem ) {
	const namespace = selectedItem ? selectedItem.getData() : null;
	this.actions.setAbilities( { done: this.initialNamespace !== namespace } );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.initialize = function () {
	// Parent method
	ve.ui.CXPublishSettingsDialog.super.prototype.initialize.apply( this, arguments );

	const publishDestinationLabel = new OO.ui.LabelWidget( {
		label: mw.msg( 'cx-publish-destination-header' ),
		classes: [ 've-ui-cxPublishSettings-destination' ]
	} );

	const helpIcon = new OO.ui.ButtonWidget( {
		icon: 'helpNotice',
		framed: false,
		href: 'https://www.mediawiki.org/wiki/Help:Content_translation/Publishing',
		target: '_blank'
	} );

	const $publishSettingsContainer = $( '<div>' )
		.addClass( 've-ui-cxPublishSettings-destination-container' )
		.append( publishDestinationLabel.$element, helpIcon.$element );

	this.publishOptionSelector = new OO.ui.RadioSelectWidget( {
		classes: [ 've-ui-cxPublishSettings-selector' ],
		items: this.getInitialOptionWidgets()
	} );

	this.$body.append( $publishSettingsContainer, this.publishOptionSelector.$element );
};

ve.ui.CXPublishSettingsDialog.prototype.getInitialOptionWidgets = function () {
	const namespaceIds = mw.config.get( 'wgNamespaceIds' );

	const widgets = [
		this.createRadioOptionWidget(
			mw.msg( 'cx-publish-destination-namespace-main' ),
			mw.msg( 'cx-publish-destination-namespace-main-description' ),
			namespaceIds[ '' ]
		),
		this.createRadioOptionWidget(
			mw.msg( 'cx-publish-destination-namespace-user' ),
			mw.msg( 'cx-publish-destination-namespace-user-description' ),
			namespaceIds.user
		)
	];

	if ( namespaceIds.draft ) {
		const widget = this.createRadioOptionWidget(
			mw.msg( 'cx-publish-destination-namespace-draft' ),
			mw.msg( 'cx-publish-destination-namespace-draft-description' ),
			namespaceIds.draft
		);
		widgets.push( widget );
	}
	return widgets;
};

ve.ui.CXPublishSettingsDialog.prototype.setSectionTranslationOptionWidgets = function () {
	if ( this.isSectionTranslation() ) {
		this.publishOptionSelector.clearItems();
		const widgets = [
			this.createRadioOptionWidget(
				mw.msg( 'cx-publish-destination-section-new' ),
				mw.msg( 'cx-publish-destination-section-new-description' ),
				'NEW_SECTION'
			),
			this.createRadioOptionWidget(
				mw.msg( 'cx-publish-destination-section-sandbox' ),
				mw.msg( 'cx-publish-destination-section-sandbox-description' ),
				'SANDBOX'
			)
		];

		const isCurrentSectionPresent = mw.cx.sectionMappingService.isSectionPresent(
			this.translation.getSourceSectionTitle()
		);

		if ( isCurrentSectionPresent ) {
			const mappedSectionWidgets = [
				this.createRadioOptionWidget(
					mw.msg( 'cx-publish-destination-section-expand' ),
					mw.msg( 'cx-publish-destination-section-expand-description' ),
					'EXPAND'
				),
				this.createRadioOptionWidget(
					mw.msg( 'cx-publish-destination-section-replace' ),
					mw.msg( 'cx-publish-destination-section-replace-description' ),
					'REPLACE'
				)
			];
			widgets.push( ...mappedSectionWidgets );
		}

		this.publishOptionSelector.addItems( widgets );
	}
};

ve.ui.CXPublishSettingsDialog.prototype.isSectionTranslation = function () {
	return ( this.translation && this.translation.isSectionTranslation() ) || false;
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getSetupProcess = function ( data ) {
	// Parent method
	return ve.ui.CXPublishSettingsDialog.super.prototype.getSetupProcess.call( this, data )
		.next( async function () {
			this.translation = data && data.surface && data.surface.target ? data.surface.target.translation : null;
			this.initialNamespace = ve.init.target.getPublishNamespace();
			this.initialPublishTarget = this.translation.getPublishTarget();
			this.publishOptionSelector.connect( this, { select: 'updateActions' } );

			if ( !this.isSectionTranslation() ) {
				this.publishOptionSelector.selectItemByData( this.initialNamespace );
				await this.doesTargetTitleExist().then( this.changeMainNamespaceLabel.bind( this ) );
			} else {
				this.setSectionTranslationOptionWidgets();
				if ( this.isSectionTranslation() ) {
					this.publishOptionSelector.selectItemByData( this.initialPublishTarget );
				}
			}
		}, this );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getReadyProcess = function ( data ) {
	// Parent method
	return ve.ui.CXPublishSettingsDialog.super.prototype.getReadyProcess.call( this, data )
		.next( function () {
			if ( this.publishOptionSelector.findSelectedItem() ) {
				// Focus causes the first item to become selected
				this.publishOptionSelector.focus();
			}
		}, this );
};

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsDialog.prototype.getTeardownProcess = function ( data ) {
	// Parent method
	return ve.ui.CXPublishSettingsDialog.super.prototype.getTeardownProcess.call( this, data )
		.next( function () {
			this.publishOptionSelector.disconnect( this );
			this.publishOptionSelector.selectItem();
		}, this );
};

/**
 * Create OO.ui.RadioOptionWidget with description
 *
 * @param {string} label The label of the radio button
 * @param {string} descriptionText The description below the label of the radio button
 * @param {Mixed} data Option widget data
 * @return {OO.ui.RadioOptionWidget}
 */
ve.ui.CXPublishSettingsDialog.prototype.createRadioOptionWidget = function ( label, descriptionText, data ) {
	const radioOption = new OO.ui.RadioOptionWidget( { label, data: data } );
	const description = new OO.ui.LabelWidget( { label: descriptionText, classes: [ 'oo-ui-inline-help' ] } );
	radioOption.$element.append( description.$element );

	return radioOption;
};

/**
 * @return {jQuery.Promise}
 */
ve.ui.CXPublishSettingsDialog.prototype.doesTargetTitleExist = function () {
	const pageTitle = mw.cx.getTitleForNamespace( ve.init.target.getPageName(), this.mainNamespaceId );

	return ve.init.platform.linkCache.get( pageTitle ).then( ( result ) => !result.missing );
};

/**
 * @param {boolean} targetTitleExists True if target title exists in main namespace
 */
ve.ui.CXPublishSettingsDialog.prototype.changeMainNamespaceLabel = function ( targetTitleExists ) {
	let msgKey = 'cx-publish-destination-namespace-main';

	if ( this.targetTitleExists === targetTitleExists ) {
		return;
	}

	this.targetTitleExists = targetTitleExists;

	msgKey += targetTitleExists ? '-exists' : '';
	// Messages used here:
	// * cx-publish-destination-namespace-main
	// * cx-publish-destination-namespace-main-exists
	this.publishOptionSelector.findItemFromData( this.mainNamespaceId ).setLabel( mw.msg( msgKey ) );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CXPublishSettingsDialog );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'publishSettings', 'window', 'open',
		{ args: [ 'publishSettings' ] }
	)
);
