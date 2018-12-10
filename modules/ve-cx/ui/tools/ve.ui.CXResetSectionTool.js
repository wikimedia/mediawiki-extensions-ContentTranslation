/*!
 * @license GPL-2.0-or-later
 */
'use strict';

/**
 * CX specific tool to reset current section to state before user modifications.
 *
 * @class
 * @extends ve.ui.Tool
 */
ve.ui.CXResetSectionTool = function VeUiCXResetSectionTool() {
	// Parent constructor
	ve.ui.CXResetSectionTool.super.apply( this, arguments );
	// Hide the tool initially. Need to show only if the section has modifications
	this.toggle( false );

	// Since state changes are processed asynchronously, we need to wait here
	// for a bit to ensure we get the correct state right after first event.
	// See this.changeTrackerScheduler in mw.cxTranslationController where the
	// timeout is defined
	this.onUpdateStateDebounced = OO.ui.debounce( this.onUpdateState, 200 );

	// When running on ve.ui.CXSurface, use the transaction event to update the tool state.
	// Without this, only surface or surface fragment change would trigger an update, but
	// the reset tool really depends on the document state instead. For performance, this
	// is only applied for the reset tool, not for the toolbar itself.
	this.toolbar.getSurface().connect( this, {
		documentTransactCX: 'onUpdateStateDebounced'
	} );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXResetSectionTool, ve.ui.Tool );

/* Static Properties */

ve.ui.CXResetSectionTool.static.name = 'ResetSection';
ve.ui.CXResetSectionTool.static.group = 'mt';
ve.ui.CXResetSectionTool.static.title = mw.msg( 'cx-tools-mt-reset' );
ve.ui.CXResetSectionTool.static.commandName = 'reset-translation';
ve.ui.CXResetSectionTool.static.deactivateOnSelect = true;
ve.ui.CXResetSectionTool.static.autoAddToCatchall = false;

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXResetSectionTool.prototype.onUpdateState = function () {
	var section, oldState, newState,
		surface = this.toolbar.getSurface(),
		selection = surface.getModel().getSelection();

	// Parent method
	ve.ui.CXResetSectionTool.super.prototype.onUpdateState.apply( this, arguments );

	// Check that we are not getting ve.dm.NullSelection
	if ( !( selection instanceof ve.dm.LinearSelection ) ) {
		return;
	}

	// When changing providers, temporarily, there is no parent section
	section = mw.cx.getParentSectionForSelection( surface, selection );
	if ( !section ) {
		return;
	}

	oldState = this.isVisible();
	newState = section.hasUserModifications();

	// For some reason this tool is set to disabled frequently. Make sure it is enabled when visible.
	this.setDisabled( !newState );

	if ( oldState === newState ) {
		return;
	}

	// If section has user modifications, show the tool (or hide if the user used reset)
	this.toggle( newState );
};

/* Registration */

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'reset-translation', 'translation', 'translate',
		{ args: [ 'reset-translation' ], supportedSelections: [ 'linear' ] }
	)
);

ve.ui.toolFactory.register( ve.ui.CXResetSectionTool );
