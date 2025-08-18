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

const MWReferenceNode = ve.ce.nodeFactory.lookup( 'mwReference' );
OO.inheritClass( ve.ce.CXReferenceNode, MWReferenceNode );

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.CXReferenceNode.prototype.onAttributeChange = function ( key ) {
	// Parent method
	ve.ce.CXReferenceNode.super.prototype.onAttributeChange.apply( this, arguments );

	if ( key === 'cx' ) {
		this.update();
	}
};

/**
 * @inheritdoc
 */
ve.ce.CXReferenceNode.prototype.update = function () {
	// Parent method
	ve.ce.CXReferenceNode.super.prototype.update.apply( this, arguments );

	const adaptationInfo = this.model.getAdaptationInfo();
	if ( adaptationInfo && adaptationInfo.adapted === false ) {
		this.$link.addClass( 've-ce-cxReferenceNode-unadapted' );
	} else {
		this.$link.removeClass( 've-ce-cxReferenceNode-unadapted' );
	}
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXReferenceNode );
