'use strict';

/**
 * Context item for reference nodes.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends ve.ui.MWReferenceContextItem
 *
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXReferenceContextItem = function VeUiCXReferenceContextItem() {
	// Parent constructor
	ve.ui.CXReferenceContextItem.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXReferenceContextItem, ve.ui.MWReferenceContextItem );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXReferenceContextItem.prototype.getRendering = function () {
	var cxData = this.model.getAttribute( 'cx' ) || {};

	if ( cxData.adapted === false ) {
		// Reference is not adapted. Use an empty div as content with the same
		// CSS class that parent class uses for such empty content.
		return $( '<div>' )
			.addClass( 've-ui-mwReferenceContextItem-muted' );
	}

	return ve.ui.CXReferenceContextItem.super.prototype.getRendering.apply( this, arguments );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXReferenceContextItem );
