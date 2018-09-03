/**
 * Annotation representing an adapted or unadapted link
 *
 * @class
 * @extends ve.ce.MWInternalLinkAnnotation
 * @constructor
 * @param {ve.dm.CXLinkAnnotation} model
 */
ve.ce.CXLinkAnnotation = function VeCeCXLinkAnnotation() {
	// Parent constructor
	ve.ce.CXLinkAnnotation.super.apply( this, arguments );

	this.$anchor
		.addClass( 've-ce-cxLinkAnnotation' )
		.data( 'linkid', this.model.getAttribute( 'linkid' ) );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXLinkAnnotation, ve.ce.MWInternalLinkAnnotation );

/* Static Properties */

ve.ce.CXLinkAnnotation.static.name = 'cxLink';

/* Methods */

/**
 * Get the adaptation info supplied by cxserver
 *
 * @return {Object} adaptationInfo
 */
ve.ce.CXLinkAnnotation.prototype.getAdaptationInfo = function () {
	return this.model.getAttribute( 'cx' );
};

/**
 * @inheritdoc
 */
ve.ce.CXLinkAnnotation.prototype.updateClasses = function () {
	var adaptationInfo = this.getAdaptationInfo();
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
