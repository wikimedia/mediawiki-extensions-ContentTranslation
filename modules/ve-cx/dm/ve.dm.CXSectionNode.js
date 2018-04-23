/**
 * Node representing an adapted section
 *
 * @class
 * @extends ve.dm.SectionNode
 * @constructor
 */
ve.dm.CXSectionNode = function VeDmCXSectionNode() {
	// Parent constructor
	ve.dm.CXSectionNode.super.apply( this, arguments );
	// Mixin constructors
	ve.dm.CXTranslationUnitModel.call( this );

	this.translation = ve.init.target.getTranslation();
	// Update is triggered by a tree modification. Wait for the whole tree modification
	// to finish, e.g. if there are relevant internal list changes to wait for.
	this.connect( this, { update: ve.debounce( this.onUpdate.bind( this ), 0 ) } );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXSectionNode, ve.dm.SectionNode );
OO.mixinClass( ve.dm.CXSectionNode, ve.dm.CXTranslationUnitModel );

/* Static Properties */

ve.dm.CXSectionNode.static.name = 'cxSection';

ve.dm.CXSectionNode.static.matchTagNames = [ 'section' ];

ve.dm.CXSectionNode.static.matchRdfaTypes = [ 'cx:Section' ];

ve.dm.CXSectionNode.static.toDataElement = function ( domElements ) {
	// Parent method
	var dataElement = ve.dm.CXSectionNode.super.static.toDataElement.apply( this, arguments );

	dataElement.attributes.cxid = domElements[ 0 ].id;
	return dataElement;
};

ve.dm.CXSectionNode.static.toDomElements = function ( dataElement ) {
	var elements = ve.dm.CXSectionNode.super.static.toDomElements.apply( this, arguments );
	elements[ 0 ].setAttribute( 'rel', 'cx:Section' );
	elements[ 0 ].setAttribute( 'id', dataElement.attributes.cxid );
	return elements;
};

ve.dm.CXSectionNode.prototype.onUpdate = function () {
	if ( this.isTargetSection() ) {
		this.translation.emit( 'sectionChange', this.getSectionId() );
	}
};

/**
 * Get the section id for this section.
 * Example: cxTargetSection34
 * @return {string}
 */
ve.dm.CXSectionNode.prototype.getSectionId = function () {
	return this.getAttribute( 'cxid' );
};

/**
 * Get the section number for the section. It is common for both
 * source and target section. Examples: 45, 12 etc.
 * @return {number} section number
 */
ve.dm.CXSectionNode.prototype.getSectionNumber = function () {
	return mw.cx.getSectionNumberFromSectionId( this.getSectionId() );
};

/**
 * Whether the section is target section or not.
 * @return {boolean}
 */
ve.dm.CXSectionNode.prototype.isTargetSection = function () {
	return this.translation && this.translation.targetDoc === this.getDocument();
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXSectionNode );

/**
 * HACK: We need to improve how suggestedParentNodes works
 */

ve.dm.MWHeadingNode.static.suggestedParentNodeTypes.push( 'cxSection' );
ve.dm.MWPreformattedNode.static.suggestedParentNodeTypes.push( 'cxSection' );
ve.dm.MWTableNode.static.suggestedParentNodeTypes.push( 'cxSection' );
