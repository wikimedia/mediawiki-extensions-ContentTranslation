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
	ve.ui.CXResetSectionTool.super.apply( this, arguments );
};

OO.inheritClass( ve.ui.CXResetSectionTool, ve.ui.Tool );

ve.ui.CXResetSectionTool.static.name = 'ResetSection';
ve.ui.CXResetSectionTool.static.group = 'mt';
ve.ui.CXResetSectionTool.static.title = mw.msg( 'cx-tools-mt-reset' );
ve.ui.CXResetSectionTool.static.commandName = 'reset-translation';
ve.ui.CXResetSectionTool.static.deactivateOnSelect = true;
ve.ui.CXResetSectionTool.static.autoAddToCatchall = false;

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'reset-translation', 'translation', 'translate',
		{ args: [ 'reset-translation' ], supportedSelections: [ 'linear' ] }
	)
);

ve.ui.toolFactory.register( ve.ui.CXResetSectionTool );
