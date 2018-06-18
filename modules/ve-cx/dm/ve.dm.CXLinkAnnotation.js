/**
 * @class
 * @extends ve.dm.MWInternalLinkAnnotation
 * @constructor
 * @param {Object} element
 */
ve.dm.CXLinkAnnotation = function VeDmCXLinkAnnotation() {
	// Parent constructor
	ve.dm.CXLinkAnnotation.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXLinkAnnotation, ve.dm.MWInternalLinkAnnotation );

/* Static Properties */

ve.dm.CXLinkAnnotation.static.name = 'cxLink';

/* Static Methods */

ve.dm.CXLinkAnnotation.static.matchFunction = function ( domElement ) {
	return domElement.classList.contains( 'cx-link' );
};

ve.dm.CXLinkAnnotation.static.toDataElement = function ( domElements, converter ) {
	var dataCX,
		dataElement = ve.dm.CXLinkAnnotation.super.static.toDataElement.call( this, domElements, converter );
	dataElement.attributes.linkid = domElements[ 0 ].getAttribute( 'data-linkid' );

	dataCX = domElements[ 0 ].getAttribute( 'data-cx' );
	if ( dataCX ) {
		dataElement.attributes.cx = JSON.parse( domElements[ 0 ].getAttribute( 'data-cx' ) );
	}
	return dataElement;
};

ve.dm.CXLinkAnnotation.static.toDomElements = function ( dataElement, doc ) {
	var domElements = ve.dm.CXLinkAnnotation.super.static.toDomElements.call( this, dataElement, doc );
	domElements[ 0 ].setAttribute( 'data-linkid', dataElement.attributes.linkid );
	if ( dataElement.attributes.cx ) {
		domElements[ 0 ].setAttribute( 'data-cx', JSON.stringify( dataElement.attributes.cx ) );
	}
	return domElements;
};

/**
 * @inheritdoc
 * @return {ve.dm.CXLinkAnnotation} The annotation.
 */
ve.dm.CXLinkAnnotation.static.newFromTitle = function ( title, rawTitle ) {
	var element = this.dataElementFromTitle( title, rawTitle );

	element.attributes.cx = {
		userAdded: true,
		adapted: true
	};

	return new ve.dm.CXLinkAnnotation( element );
};

/* Methods */

ve.dm.CXLinkAnnotation.prototype.getComparableObject = function () {
	var comparableObject = ve.dm.CXLinkAnnotation.super.prototype.getComparableObject.call( this );
	comparableObject.linkid = this.getAttribute( 'linkid' );

	return comparableObject;
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXLinkAnnotation );
