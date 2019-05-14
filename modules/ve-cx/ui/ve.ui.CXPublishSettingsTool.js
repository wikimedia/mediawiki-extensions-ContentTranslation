/**
 * Publishing settings tool
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ui.WindowTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.CXPublishSettingsTool = function VeUiCXPublishSettingsTool() {
	// Parent constructor
	ve.ui.CXPublishSettingsTool.super.apply( this, arguments );

	// Make the tool findable
	this.setData( 'publishSettings' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXPublishSettingsTool, ve.ui.WindowTool );

/* Static Properties */

ve.ui.CXPublishSettingsTool.static.name = 'publishSettings';

ve.ui.CXPublishSettingsTool.static.icon = 'settings';

ve.ui.CXPublishSettingsTool.static.title = OO.ui.deferMsg( 'cx-publish-destination-tooltip' );

ve.ui.CXPublishSettingsTool.static.commandName = 'publishSettings';

ve.ui.CXPublishSettingsTool.static.autoAddToCatchall = false;

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXPublishSettingsTool.prototype.onUpdateState = function () {
	// Parent method
	ve.ui.CXPublishSettingsTool.super.prototype.onUpdateState.apply( this, arguments );

	this.setDisabled(
		ve.init.target.targetSurface.isReadOnly() ||
		!mw.Title.newFromText( ve.init.target.pageName )
	);
};

/* Register */

ve.ui.toolFactory.register( ve.ui.CXPublishSettingsTool );
