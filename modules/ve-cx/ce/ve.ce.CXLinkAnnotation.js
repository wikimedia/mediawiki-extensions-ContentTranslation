/**
 * Annotation representing an adapted or unadapted link
 *
 * @class
 * @extends ve.ce.MWInternalLinkAnnotation
 * @constructor
 * @param {ve.dm.CXLinkAnnotation} model
 */
ve.ce.CXLinkAnnotation = function VeCeCXLinkAnnotation( model ) {
	this.model = model;
	// Parent's parent constructor because the parent constructor also uses
	// VE Link cache to style the links. CX can not use it.
	ve.ce.MWInternalLinkAnnotation.super.apply( this, arguments );

	this.$anchor
		.addClass( 've-ce-cxLinkAnnotation' )
		.data( 'linkid', this.model.getAttribute( 'linkid' ) );

	// Style the link based on the adaptation information.
	this.styleAnchor( this.getAdaptationInfo() );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXLinkAnnotation, ve.ce.MWInternalLinkAnnotation );

/* Static Properties */

ve.ce.CXLinkAnnotation.static.name = 'cxLink';

/**
 * Get the adaptation info supplied by cxserver
 *
 * @return {Object} adaptationInfo
 */
ve.ce.CXLinkAnnotation.prototype.getAdaptationInfo = function () {
	return this.model.getAttribute( 'cx' );
};

/**
 * Style the link based on the adaptation information.
 *
 * @param {Object} adaptationInfo
 */
ve.ce.CXLinkAnnotation.prototype.styleAnchor = function ( adaptationInfo ) {
	if ( adaptationInfo && !adaptationInfo.adapted ) {
		if ( adaptationInfo.targetTitle ) {
			this.$anchor.addClass( 'new' );
		} else {
			this.$anchor.addClass( 'cx-target-link-unadapted' );
		}
	}
};

/* Registration */

ve.ce.annotationFactory.register( ve.ce.CXLinkAnnotation );
