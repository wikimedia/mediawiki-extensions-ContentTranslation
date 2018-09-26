/**
 * DataModel CX image node.
 *
 * @class
 * @extends ve.dm.MWBlockImageNode
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 * @param {ve.dm.Node[]} [children]
 */
ve.dm.CXBlockImageNode = function VeDmCXBlockImageNode() {
	// Parent constructor
	ve.dm.CXBlockImageNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXBlockImageNode, ve.dm.MWBlockImageNode );

/* Static Properties */

ve.dm.CXBlockImageNode.static.name = 'cxBlockImage';

/* Static Methods */

// Increase the specificity of class match over the parent class
ve.dm.CXBlockImageNode.static.matchFunction = function ( node ) {
	return node.getAttribute( 'rel' ) === 'cx:Figure';
};

ve.dm.CXBlockImageNode.static.childNodeTypes = [ 'cxImageCaption' ];

ve.dm.CXBlockImageNode.static.toDataElement = function ( domElements, converter ) {
	var i, rel, dataCX, figure, dataElements;

	figure = domElements[ 0 ];

	dataElements = ve.dm.CXBlockImageNode.super.static.toDataElement.call( this, domElements, converter );

	rel = domElements[ 0 ].getAttribute( 'rel' );
	if ( rel ) {
		figure.setAttribute( 'rel', rel );
	}
	dataCX = figure.getAttribute( 'data-cx' );
	if ( dataCX ) {
		dataElements[ 0 ].attributes.cx = JSON.parse( domElements[ 0 ].getAttribute( 'data-cx' ) );
	}

	for ( i = 0; i < dataElements.length; i++ ) {
		if ( dataElements[ i ].type === 'mwImageCaption' ) {
			dataElements[ i ].type = 'cxImageCaption';
		}
		if ( dataElements[ i ].type === '/mwImageCaption' ) {
			dataElements[ i ].type = '/cxImageCaption';
		}
	}

	return dataElements;
};

ve.dm.CXBlockImageNode.static.toDomElements = function ( dataElements, doc, converter ) {
	var rel,
		domElements = ve.dm.CXBlockImageNode.super.static.toDomElements.call( this, dataElements, doc, converter );
	if ( dataElements[ 0 ].attributes.cx ) {
		domElements[ 0 ].setAttribute( 'data-cx', JSON.stringify( dataElements[ 0 ].attributes.cx ) );
	}

	rel = dataElements[ 0 ].attributes.rel;
	if ( rel ) {
		domElements[ 0 ].setAttribute( 'rel', dataElements[ 0 ].attributes.rel );
	}
	return domElements;
};

ve.dm.CXBlockImageNode.static.getMatchRdfaTypes = function () {
	// Parent method
	var types = ve.dm.CXBlockImageNode.super.static.getMatchRdfaTypes();
	return [ 'cx:Figure' ].concat( types );
};

/* Methods */

/**
 * @inheritdoc
 */
ve.dm.CXBlockImageNode.prototype.getScalable = function () {
	// VE uses its image cache to get image dimensions.
	// CX has it in the adaptation info. Use that.
	// Mixin method, bypass ve.dm.MWBlockImageNode.prototype.getScalable
	return ve.dm.ResizableNode.prototype.getScalable.call( this );
};

/**
 * Get the caption node of the image.
 *
 * @method
 * @return {ve.dm.CXImageCaptionNode|null} Caption node, if present
 */
ve.dm.CXBlockImageNode.prototype.getCaptionNode = function () {
	var node = this.children[ 0 ];
	return node instanceof ve.dm.CXImageCaptionNode ? node : null;
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXBlockImageNode );
