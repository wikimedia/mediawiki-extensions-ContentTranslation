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
	let dataElement = ve.dm.CXLinkAnnotation.super.static.toDataElement.call( this, domElements, converter );

	if ( !dataElement ) {
		// ve.dm.CXLinkAnnotation.super.static.toDataElement has assumptions about document.baseURI.
		// baseURI can use URL patterns like /wiki/$1 or w/index.php?title=$1. It also uses
		// current wikis 'wgScript', 'wgArticlePath' configuration values which can
		// totally be different when running on a local dev wiki.
		// Because of this dataElement can be null as toDataElement fails to parse an internal link
		// So make this dataElement calculation agnostic of all of the above mentioned factors.
		let title = domElements[ 0 ].getAttribute( 'title' );
		if ( !title ) {
			// No title present. This can happen if the link is to a section in the article
			// Example: href=./Oxygen#Occurance in the Oxygen article.
			title = domElements[ 0 ].getAttribute( 'href' ).replace( /^\.\//, '' );
		}
		dataElement = ve.dm.CXLinkAnnotation.super.static.dataElementFromTitle.call(
			this,
			mw.Title.newFromText( title )
		);
	}

	dataElement.attributes.linkid = domElements[ 0 ].getAttribute( 'data-linkid' );

	const dataCX = domElements[ 0 ].getAttribute( 'data-cx' );
	if ( dataCX ) {
		dataElement.attributes.cx = JSON.parse( domElements[ 0 ].getAttribute( 'data-cx' ) );
	}
	return dataElement;
};

ve.dm.CXLinkAnnotation.static.toDomElements = function ( dataElement, doc ) {
	const domElements = ve.dm.CXLinkAnnotation.super.static.toDomElements.call( this, dataElement, doc );
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
	const element = this.dataElementFromTitle( title, rawTitle );

	element.attributes.cx = {
		userAdded: true,
		adapted: true
	};

	return new ve.dm.CXLinkAnnotation( element );
};

/* Methods */

ve.dm.CXLinkAnnotation.prototype.getComparableObject = function () {
	const comparableObject = ve.dm.CXLinkAnnotation.super.prototype.getComparableObject.call( this );
	comparableObject.linkid = this.getAttribute( 'linkid' );

	return comparableObject;
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXLinkAnnotation );
