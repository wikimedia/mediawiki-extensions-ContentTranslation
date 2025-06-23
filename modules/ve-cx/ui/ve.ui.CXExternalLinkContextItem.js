/**
 * Context item for external links in ContentTranslation.
 *
 * @class
 * @extends ve.ui.LinkContextItem
 * @constructor
 */
ve.ui.CXExternalLinkContextItem = function VeUiCXExternalLinkContextItem() {
	// Parent constructor
	ve.ui.CXExternalLinkContextItem.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXExternalLinkContextItem, ve.ui.LinkContextItem );

/* Static Properties */

ve.ui.CXExternalLinkContextItem.static.modelClasses = [ ve.dm.MWExternalLinkAnnotation ];

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXExternalLinkContextItem );
