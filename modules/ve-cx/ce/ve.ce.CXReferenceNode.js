'use strict';

/**
 * Handling of unadapted references in translations.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ce.MWReferenceNode
 * @constructor
 */
ve.ce.CXReferenceNode = function VeCeCXReferenceNode() {
	// Parent constructor
	ve.ce.CXReferenceNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXReferenceNode, ve.ce.MWReferenceNode );

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.CXReferenceNode.prototype.update = function () {
	var adaptationInfo;

	// Parent method
	ve.ce.CXReferenceNode.super.prototype.update.apply( this, arguments );

	adaptationInfo = this.model.getAttribute( 'cx' );
	if ( adaptationInfo && adaptationInfo.adapted === false ) {
		this.$link.addClass( 've-ce-cxReferenceNode-unadapted' );
	}
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXReferenceNode );
