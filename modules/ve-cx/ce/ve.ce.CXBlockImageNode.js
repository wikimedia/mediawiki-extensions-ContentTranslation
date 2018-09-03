/**
 * CX Block image node
 *
 * @class
 * @extends ve.ce.MWBlockImageNode
 * @constructor
 * @param {ve.dm.CXImageCaptionNode} model Model to observe
 */
ve.ce.CXBlockImageNode = function CXBlockImageNode() {
	var adaptationInfo;

	// Parent constructor
	ve.ce.CXBlockImageNode.super.apply( this, arguments );
	this.$element.addClass( 've-ce-cxBlockImageNode' );

	adaptationInfo = this.getAdaptationInfo();
	if ( adaptationInfo && !adaptationInfo.adapted ) {
		this.$element.addClass( 'cx-image-unadapted' );
	}

	// Fix the link target
	this.$a.attr( 'target', '_blank' );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXBlockImageNode, ve.ce.MWBlockImageNode );

/* Static Properties */

ve.ce.CXBlockImageNode.static.name = 'cxBlockImage';

/* Methods */

/**
 * Get the adaptation info supplied by cxserver
 *
 * @return {Object} adptationInfo
 */
ve.ce.CXBlockImageNode.prototype.getAdaptationInfo = function () {
	return this.model.getAttribute( 'cx' );
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXBlockImageNode );
