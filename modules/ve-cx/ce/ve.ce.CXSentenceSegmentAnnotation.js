/*!
 * VisualEditor ContentEditable CXSentenceSegmentAnnotation class.
 *
 * @copyright 2011-2017 VisualEditor Team and others; see http://ve.mit-license.org
 */

/**
 * ContentEditable CX sentence segment annotation
 *
 * @class
 * @extends ve.ce.Annotation
 * @constructor
 * @param {ve.dm.CXSentenceSegmentAnnotation} model Model to observe
 * @param {ve.ce.ContentBranchNode} [parentNode] Node rendering this annotation
 * @param {Object} [config] Configuration options
 */
ve.ce.CXSentenceSegmentAnnotation = function VeCeCXSentenceSegmentAnnotation() {
	// Parent constructor
	ve.ce.CXSentenceSegmentAnnotation.super.apply( this, arguments );

	// DOM changes
	this.$element
		.addClass( 've-ce-cxSentenceSegmentAnnotation' )
		.attr( {
			'data-segmentid': this.model.getAttribute( 'segmentid' ) || undefined
		} );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXSentenceSegmentAnnotation, ve.ce.Annotation );

/* Static Properties */

ve.ce.CXSentenceSegmentAnnotation.static.name = 'cxSegment';

ve.ce.CXSentenceSegmentAnnotation.static.tagName = 'span';

/* Registration */

ve.ce.annotationFactory.register( ve.ce.CXSentenceSegmentAnnotation );
