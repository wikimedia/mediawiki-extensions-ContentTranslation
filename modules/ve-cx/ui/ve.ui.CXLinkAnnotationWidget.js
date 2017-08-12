/**
 * Widget for CXLinkAnnotation
 *
 * @class
 * @extends ve.ui.MWInternalLinkAnnotationWidget
 * @constructor
 */
ve.ui.CXLinkAnnotationWidget = function VeUiCXLinkAnnotationWidget() {
	// Parent constructor
	ve.ui.CXLinkAnnotationWidget.super.apply( this, arguments );
	this.$element.addClass( 've-ui-cxLinkAnnotationWidget' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkAnnotationWidget, ve.ui.MWInternalLinkAnnotationWidget );
