/*!
 * VisualEditor UserInterface CXDestinationTool classes.
 *
 * @copyright 2011-2017 VisualEditor Team and others; see http://ve.mit-license.org
 */

/**
 * UserInterface format tool.
 *
 * @abstract
 * @class
 * @extends OO.ui.Tool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.CXDestinationTool = function VeUiCXDestinationTool() {
	// Parent constructor
	ve.ui.CXDestinationTool.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXDestinationTool, OO.ui.Tool );

/* Static Properties */

ve.ui.CXDestinationTool.static.deactivateOnSelect = false;

ve.ui.CXDestinationTool.static.group = 'cxDestination';

ve.ui.CXDestinationTool.static.autoAddToCatchall = false;

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXDestinationTool.prototype.onSelect = function () {
	ve.init.target.onPublishNamespaceChange( this.constructor.static.namespace );
};

/**
 * @inheritdoc
 */
ve.ui.CXDestinationTool.prototype.onUpdateState = function () {
	this.setActive( ve.init.target.getPublishNamespace() === this.constructor.static.namespace );
};

/**
 * UserInterface main namespace destination tool.
 *
 * @class
 * @extends ve.ui.CXDestinationTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.CXMainDestinationTool = function VeUiCXMainDestinationTool() {
	ve.ui.CXMainDestinationTool.super.apply( this, arguments );
};
OO.inheritClass( ve.ui.CXMainDestinationTool, ve.ui.CXDestinationTool );
ve.ui.CXMainDestinationTool.static.name = 'cxMainDestination';
ve.ui.CXMainDestinationTool.static.namespace = mw.config.get( 'wgNamespaceIds' )[ '' ];
ve.ui.CXMainDestinationTool.static.title =
	OO.ui.deferMsg( 'cx-publish-destination-namespace-main' );
ve.ui.toolFactory.register( ve.ui.CXMainDestinationTool );

/**
 * UserInterface personal draft destination tool.
 *
 * @class
 * @extends ve.ui.CXDestinationTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.CXPersonalDestinationTool = function VeUiCXPersonalDestinationTool() {
	ve.ui.CXPersonalDestinationTool.super.apply( this, arguments );
};
OO.inheritClass( ve.ui.CXPersonalDestinationTool, ve.ui.CXDestinationTool );
ve.ui.CXPersonalDestinationTool.static.name = 'cxPersonalDestination';
ve.ui.CXPersonalDestinationTool.static.namespace = mw.config.get( 'wgNamespaceIds' ).user;
ve.ui.CXPersonalDestinationTool.static.title =
	OO.ui.deferMsg( 'cx-publish-destination-namespace-user' );
ve.ui.toolFactory.register( ve.ui.CXPersonalDestinationTool );

// Add draft only if that namespace exists
if ( mw.config.get( 'wgNamespaceIds' ).draft ) {
	/**
	 * UserInterface community draft destination tool.
	 *
	 * @class
	 * @extends ve.ui.CXDestinationTool
	 * @constructor
	 * @param {OO.ui.ToolGroup} toolGroup
	 * @param {Object} [config] Configuration options
	 */
	ve.ui.CXCommunityDestinationTool = function VeUiCXCommunityDestinationTool() {
		ve.ui.CXCommunityDestinationTool.super.apply( this, arguments );
	};
	OO.inheritClass( ve.ui.CXCommunityDestinationTool, ve.ui.CXDestinationTool );
	ve.ui.CXCommunityDestinationTool.static.name = 'cxCommunityDestination';
	ve.ui.CXCommunityDestinationTool.static.namespace = mw.config.get( 'wgNamespaceIds' ).draft;
	ve.ui.CXCommunityDestinationTool.static.title =
		OO.ui.deferMsg( 'cx-publish-destination-namespace-draft' );
	ve.ui.toolFactory.register( ve.ui.CXCommunityDestinationTool );
}
