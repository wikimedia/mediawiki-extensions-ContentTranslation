'use strict';

/**
 * Node representing a reference
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends ve.dm.MWReferenceNode
 * @mixins ve.dm.CXLintableNode
 */
ve.dm.CXReferenceNode = function VeDmCXReferenceNode() {
	// Parent constructor
	ve.dm.CXReferenceNode.super.apply( this, arguments );

	// Mixin constructor
	ve.dm.CXLintableNode.call( this );

	// attach is fired when section is filled with MT, but not on restoring.
	this.connect( this, {
		attach: 'onAttach',
		detach: 'onDetach'
	} );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXReferenceNode, ve.dm.MWReferenceNode );
OO.mixinClass( ve.dm.CXReferenceNode, ve.dm.CXLintableNode );

/* Static Methods */

/**
 * @inheritdoc
 */
ve.dm.CXReferenceNode.static.toDataElement = function ( domElements ) {
	var dataElement,
		cxDataJSON = domElements[ 0 ].getAttribute( 'data-cx' ),
		cxData = cxDataJSON ? JSON.parse( cxDataJSON ) : {};

	// Parent method
	dataElement = ve.dm.CXReferenceNode.super.static.toDataElement.apply( this, arguments );
	dataElement.attributes.cx = cxData;

	return dataElement;
};

/**
 * @inheritdoc
 */
ve.dm.CXReferenceNode.static.toDomElements = function ( dataElement ) {
	var elements = ve.dm.CXReferenceNode.super.static.toDomElements.apply( this, arguments );
	elements[ 0 ].setAttribute( 'data-cx', JSON.stringify( dataElement.attributes.cx ) );
	return elements;
};

/* Methods */

ve.dm.CXReferenceNode.prototype.onAttach = function () {
	var sectionNode,
		cxData = this.getAttribute( 'cx' ) || {};

	if ( cxData.adapted === true ) {
		// Reference is adapted.
		return;
	}

	sectionNode = this.findParent( ve.dm.CXSectionNode );
	// When section content is replaced, this happens:
	// 1) attach is called with VeDmSectionNode and we cannot access VeDmCXSectionNode
	// 2) detach is called with VeDmCXSectionNode and we unregister our warning
	if ( !sectionNode ) {
		return;
	}

	// This is just a sanity check, since source column does not have data-cx
	if ( !sectionNode.isTargetSection() ) {
		return;
	}

	if ( cxData.adapted !== false ) {
		mw.log.warn(
			'[CX] Reference adaptation status is missing for the reference in section ' +
			sectionNode.getId()
		);
		return;
	}

	sectionNode.addTranslationIssues( [ {
		name: 'reference',
		message: mw.message( 'cx-tools-linter-reference-message' ),
		messageInfo: {
			title: mw.msg( 'cx-tools-linter-reference' ),
			resolvable: true,
			help: 'https://www.mediawiki.org/wiki/Special:MyLanguage/Content_translation/Templates'
		}
	} ] );
};

ve.dm.CXReferenceNode.prototype.onDetach = function ( parent ) {
	if ( parent instanceof ve.dm.CXSectionNode && parent.isTargetSection() ) {
		parent.resolveTranslationIssues( [ 'reference' ] );
	}
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXReferenceNode );
