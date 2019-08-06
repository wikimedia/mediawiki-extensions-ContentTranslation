/*!
 * VisualEditor DataModel CXSentenceSegmentAnnotation class.
 *
 * @copyright 2011-2017 VisualEditor Team and others; see http://ve.mit-license.org
 */

/**
 * ContentTranslation sentence segment annotation
 *
 * Represents `<span class="cx-segment">` tags with data-segmentid attribute
 *
 * @class
 * @extends ve.dm.Annotation
 * @constructor
 * @param {Object} element
 */
ve.dm.CXSentenceSegmentAnnotation = function VeDmCXSentenceSegmentAnnotation() {
	// Parent constructor
	ve.dm.CXSentenceSegmentAnnotation.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXSentenceSegmentAnnotation, ve.dm.Annotation );

/* Static Properties */

ve.dm.CXSentenceSegmentAnnotation.static.name = 'cxSegment';

ve.dm.CXSentenceSegmentAnnotation.static.matchTagNames = [ 'span' ];

/* Static Methods */

ve.dm.CXSentenceSegmentAnnotation.static.matchFunction = function ( domElement ) {
	return domElement.classList.contains( 'cx-segment' ) &&
		domElement.getAttribute( 'data-segmentid' );
};

ve.dm.CXSentenceSegmentAnnotation.static.applyToAppendedContent = true;

ve.dm.CXSentenceSegmentAnnotation.static.toDataElement = function ( domElements ) {
	return {
		type: this.name,
		attributes: {
			segmentid: domElements[ 0 ].getAttribute( 'data-segmentid' )
		}
	};
};

ve.dm.CXSentenceSegmentAnnotation.static.toDomElements = function ( dataElement, doc, converter ) {
	var domElement;
	// We only need these segments when converting the document for saving
	// or for translating, not for the clipboard (or previewing) (T220495)
	if ( converter.isForParser() || converter.isForTranslation ) {
		domElement = doc.createElement( 'span' );
		if ( dataElement.attributes.segmentid ) {
			domElement.setAttribute( 'data-segmentid', dataElement.attributes.segmentid );
		}

		return [ domElement ];
	} else {
		return [];
	}
};

/* Methods */

/**
 * @return {Object}
 */
ve.dm.CXSentenceSegmentAnnotation.prototype.getComparableObject = function () {
	return {
		type: 'cxSegment',
		segmentid: this.getAttribute( 'segmentid' )
	};
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXSentenceSegmentAnnotation );
