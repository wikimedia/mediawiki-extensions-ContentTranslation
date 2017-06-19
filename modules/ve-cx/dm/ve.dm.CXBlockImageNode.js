/**
 * DataModel CX image node.
 *
 * @class
 * @extends ve.dm.MWBlockImageNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 * @param {ve.dm.Node[]} [children]
 */
ve.dm.CXBlockImageNode = function VeDmCXBlockImageNode() {
	// Parent constructor
	ve.dm.CXBlockImageNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXBlockImageNode, ve.dm.MWBlockImageNode );

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXBlockImageNode );
