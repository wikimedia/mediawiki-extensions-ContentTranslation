/*!
 * @license GPL-2.0-or-later
 */
'use strict';

/**
 * CX specific tool to save current MT engine as default preference
 *
 * @class
 * @extends ve.ui.Tool
 */
ve.ui.CXSaveMTPreferenceTool = function VeUiCXSaveMTPreferenceTool() {
	// Parent constructor
	ve.ui.CXSaveMTPreferenceTool.super.apply( this, arguments );
	// Hide the tool initially. Need to show only if the section has modifications
	this.toggle( false );

	this.MTManager = ve.init.target.config.MTManager;
};

/* Inheritance */

OO.inheritClass( ve.ui.CXSaveMTPreferenceTool, ve.ui.Tool );

/* Static Properties */

ve.ui.CXSaveMTPreferenceTool.static.name = 'save-mt-preference';
ve.ui.CXSaveMTPreferenceTool.static.group = 'mt-default';
ve.ui.CXSaveMTPreferenceTool.static.icon = 'pushPin';
ve.ui.CXSaveMTPreferenceTool.static.title = OO.ui.deferMsg( 'cx-tools-mt-set-default' );
ve.ui.CXSaveMTPreferenceTool.static.label = OO.ui.deferMsg( 'cx-tools-mt-set-default' );
ve.ui.CXSaveMTPreferenceTool.static.displayBothIconAndLabel = true;
ve.ui.CXSaveMTPreferenceTool.static.commandName = 'save-mt-preference';
ve.ui.CXSaveMTPreferenceTool.static.deactivateOnSelect = true;
ve.ui.CXSaveMTPreferenceTool.static.autoAddToCatchall = false;

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXSaveMTPreferenceTool.prototype.onUpdateState = function () {
	var section,
		surface = this.toolbar.getSurface(),
		selection = surface.getModel().getSelection();

	// Parent method
	ve.ui.CXSaveMTPreferenceTool.super.prototype.onUpdateState.apply( this, arguments );

	// Check that we are not getting ve.dm.NullSelection
	if ( !( selection instanceof ve.dm.LinearSelection ) ) {
		return;
	}

	// When changing provides, there is temporarily no parent section
	section = mw.cx.getParentSectionForSelection( surface, selection );
	if ( !section ) {
		return;
	}

	this.MTManager.getDefaultProvider().then( function ( defaultProvider ) {
		var source = section.getOriginalContentSource() || defaultProvider;
		this.MTManager.getPreferredProvider().then( function ( preferredProvider ) {
			this.toggle( source !== preferredProvider );
		}.bind( this ) );
	}.bind( this ) );

};

/* Registration */

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'save-mt-preference', 'translation', 'savePreference',
		{ supportedSelections: [ 'linear' ] }
	)
);

ve.ui.toolFactory.register( ve.ui.CXSaveMTPreferenceTool );
