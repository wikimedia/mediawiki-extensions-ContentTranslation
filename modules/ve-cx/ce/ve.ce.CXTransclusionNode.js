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
 * @extends ve.ce.CXTransclusionNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 */
ve.ce.CXTransclusionBlockNode = function VeCeCXTransclusionBlockNode() {
	// Parent constructor
	ve.ce.CXTransclusionBlockNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXTransclusionBlockNode, ve.ce.CXTransclusionNode );

/* Static Properties */

ve.ce.CXTransclusionBlockNode.static.name = 'cxTransclusionBlock';

ve.ce.CXTransclusionBlockNode.static.tagName = 'div';

/* Methods */

/**
 * @inheritdoc
 */
ve.ce.CXTransclusionBlockNode.prototype.afterRender = function () {
	var parentSection;
	ve.ce.CXTransclusionBlockNode.super.prototype.afterRender.apply( this, arguments );
	parentSection = this.model.findParent( ve.dm.CXSectionNode );
	// Emit an event so that the parent section can do visual re-alignment if needed.
	parentSection.emit( 'afterRender' );
	// Emit change for the parent section, so that saving is queued.
	parentSection.emit( 'update' );
};

/**
 * @return {boolean} True if transclusion node is not adapted by cxserver.
 */
ve.ce.CXTransclusionBlockNode.prototype.isUnadapted = function () {
	return this.getModel() && this.getModel().missingInTargetLanguage();
};

/**
 * @inheritdoc
 */
ve.ce.CXTransclusionBlockNode.prototype.update = function () {
	if ( this.isUnadapted() ) {
		return;
	}

	return ve.ce.CXTransclusionBlockNode.super.prototype.update.apply( this, arguments );
};

/**
 * @inheritdoc
 */
ve.ce.CXTransclusionBlockNode.prototype.onFocusableSetup = function () {
	var iconWhenInvisible = this.constructor.static.iconWhenInvisible;

	if ( this.isUnadapted() ) {
		// Temporarily set static property to null to avoid displaying icon
		// while generating transclusion node content.
		this.constructor.static.iconWhenInvisible = null;
	}

	ve.ce.CXTransclusionBlockNode.super.prototype.onFocusableSetup.apply( this, arguments );

	// Reset the icon static property
	this.constructor.static.iconWhenInvisible = iconWhenInvisible;
};

/**
 * @inheritdoc
 */
ve.ce.CXTransclusionBlockNode.prototype.setFocused = function ( value ) {
	if ( this.isUnadapted() ) {
		value = false;
	}

	return ve.ce.CXTransclusionBlockNode.super.prototype.setFocused.call( this, value );
};

/**
 * XXX: ContentEditable MediaWiki transclusion inline node.
 *
 * @class
 * @extends ve.ce.CXTransclusionNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 */
ve.ce.CXTransclusionInlineNode = function VeCeCXTransclusionInlineNode() {
	// Parent constructor
	ve.ce.CXTransclusionInlineNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXTransclusionInlineNode, ve.ce.CXTransclusionNode );

/* Static Properties */

ve.ce.CXTransclusionInlineNode.static.name = 'cxTransclusionInline';

ve.ce.CXTransclusionInlineNode.static.tagName = 'span';

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
		parentSection.emit( 'afterRender' );
	}
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXTransclusionNode );
ve.ce.nodeFactory.register( ve.ce.CXTransclusionBlockNode );
ve.ce.nodeFactory.register( ve.ce.CXTransclusionInlineNode );
