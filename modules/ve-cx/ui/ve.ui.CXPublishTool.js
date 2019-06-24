/**
 * Publishing tool
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ui.Tool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.CXPublishTool = function VeUiCXPublishTool() {
	// Parent constructor
	ve.ui.CXPublishTool.super.apply( this, arguments );

	this.$link.addClass( 'cx-header__publish-button' );
	// Make the tool find-able
	this.setData( 'publish' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXPublishTool, ve.ui.Tool );

/* Static Properties */

ve.ui.CXPublishTool.static.name = 'publish';

ve.ui.CXPublishTool.static.title = OO.ui.deferMsg( 'cx-publish-button' );

ve.ui.CXPublishTool.static.displayBothIconAndLabel = true;

ve.ui.CXPublishTool.static.autoAddToCatchall = false;

ve.ui.CXPublishTool.static.flags = [ 'primary', 'progressive' ];

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXPublishTool.prototype.onSelect = function () {
	this.setActive( false );
	ve.init.target.onPublishButtonClick();
};

/* Register */

ve.ui.toolFactory.register( ve.ui.CXPublishTool );
