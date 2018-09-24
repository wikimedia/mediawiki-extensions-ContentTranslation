'use strict';

/**
 * Handling of unadapted templates in translations.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 * @file
 */

/**
 *
 * @class
 * @extends ve.ce.MWTransclusionNode
 * @constructor
 */
ve.ce.CXTransclusionNode = function VeCeCXTransclusionNode() {
	// Parent constructor
	ve.ce.CXTransclusionNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXTransclusionNode, ve.ce.MWTransclusionNode );

/* Static Properties */

ve.ce.CXTransclusionNode.static.name = 'cxTransclusion';

/**
 * XXX: ContentEditable MediaWiki transclusion block node.
 *
 * @class
 * @extends ve.ce.MWTransclusionBlockNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 */
ve.ce.CXTransclusionBlockNode = function VeCeCXTransclusionBlockNode() {
	// Parent constructor
	ve.ce.CXTransclusionBlockNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXTransclusionBlockNode, ve.ce.MWTransclusionBlockNode );

/* Static Properties */

ve.ce.CXTransclusionBlockNode.static.name = 'cxTransclusionBlock';

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.CXTransclusionBlockNode.prototype.afterRender = function () {
	ve.ce.CXTransclusionBlockNode.super.prototype.afterRender.apply( this, arguments );
	this.model.findParent( ve.dm.CXSectionNode ).emit( 'update' );
};

/**
 * XXX: ContentEditable MediaWiki transclusion inline node.
 *
 * @class
 * @extends ve.ce.MWTransclusionInlineNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 */
ve.ce.CXTransclusionInlineNode = function VeCeCXTransclusionInlineNode() {
	// Parent constructor
	ve.ce.CXTransclusionInlineNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXTransclusionInlineNode, ve.ce.MWTransclusionInlineNode );

/* Static Properties */

ve.ce.CXTransclusionInlineNode.static.name = 'cxTransclusionInline';

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.CXTransclusionInlineNode.prototype.afterRender = function () {
	var parentSection;
	ve.ce.CXTransclusionInlineNode.super.prototype.afterRender.apply( this, arguments );
	parentSection = this.model.findParent( ve.dm.CXSectionNode );
	// For citations, the corresponding template is not rendered inside the section, but
	// in the reference context item. So there is no parent section.
	if ( parentSection ) {
		parentSection.emit( 'update' );
	}
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXTransclusionNode );
ve.ce.nodeFactory.register( ve.ce.CXTransclusionBlockNode );
ve.ce.nodeFactory.register( ve.ce.CXTransclusionInlineNode );
