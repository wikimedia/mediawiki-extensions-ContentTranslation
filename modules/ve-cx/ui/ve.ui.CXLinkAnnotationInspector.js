/**
 * Inspector for CXLinkAnnotation (adapted links)
 *
 * @class
 * @extends ve.ui.MWLinkAnnotationInspector
 * @constructor
 */
ve.ui.CXLinkAnnotationInspector = function VeUiCXLinkAnnotationInspector() {
	// Parent constructor
	ve.ui.CXLinkAnnotationInspector.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkAnnotationInspector, ve.ui.MWLinkAnnotationInspector );

/* Static Properties */

ve.ui.CXLinkAnnotationInspector.static.name = 'cxLink';

ve.ui.CXLinkAnnotationInspector.static.title = OO.ui.deferMsg( 'visualeditor-cxlinkinspector-title' );

ve.ui.CXLinkAnnotationInspector.static.modelClasses = [ ve.dm.CXLinkAnnotation ];

/* Methods */

ve.ui.CXLinkAnnotationInspector.prototype.createAnnotationInput = function () {
	return new ve.ui.CXLinkAnnotationWidget();
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CXLinkAnnotationInspector );
