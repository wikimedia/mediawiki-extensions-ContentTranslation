/**
 * Annotation representing an adapted link
 *
 * @class
 * @extends ve.ce.LinkAnnotation
 * @constructor
 * @param {ve.dm.CXLinkAnnotation} model
 */
ve.ce.CXLinkAnnotation = function VeCeCXLinkAnnotation( model ) {
	// Parent constructor
	ve.ce.CXLinkAnnotation.super.apply( this, arguments );

	this.$anchor
		.addClass( 've-ce-cxLinkAnnotation' )
		.data( 'linkid', model.getAttribute( 'linkid' ) );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXLinkAnnotation, ve.ce.LinkAnnotation );

/* Static Properties */

ve.ce.CXLinkAnnotation.static.name = 'cxLink';

/* Registration */

ve.ce.annotationFactory.register( ve.ce.CXLinkAnnotation );
