/**
 *
 * It is assumed that `this` is a ve.dm.Model that belongs to a translation unit
 *
 * @class
 * @abstract
 * @constructor
 */
ve.dm.CXTranslationUnitModel = function VeDmCXTranslationUnitModel() {
	//
};

/* Inheritance */

OO.initClass( ve.dm.CXTranslationUnitModel );

/* Methods */

/**
 * @return {string|null} The translation unit ID corresponding to this model
 */
ve.dm.CXTranslationUnitModel.prototype.getTranslationUnitId = function () {
	var domNode,
		cxid = this.getAttribute( 'cxid' );
	if ( cxid ) {
		return cxid;
	}
	// TODO: get this info from the DM node directly
	domNode = this.getOriginalDomElements( this.store || this.getDocument().getStore() )[ 0 ];

	// TODO: The use of id or data-segmentid should be made regular in cxserver output
	return ( domNode && ( domNode.id || domNode.getAttribute( 'data-segmentid' ) ) ) || null;
};
