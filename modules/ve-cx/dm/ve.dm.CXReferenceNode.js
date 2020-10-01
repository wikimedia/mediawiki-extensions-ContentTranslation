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
	var dataElement, cxData,
		cxDataJSON = domElements[ 0 ].getAttribute( 'data-cx' );

	// Parent method
	dataElement = ve.dm.CXReferenceNode.super.static.toDataElement.apply( this, arguments );

	try {
		cxData = cxDataJSON ? JSON.parse( cxDataJSON ) : {};
	} catch ( e ) {
		cxData = {};
	}

	dataElement.attributes.cx = cxData;

	return dataElement;
};

/**
 * @inheritdoc
 */
ve.dm.CXReferenceNode.static.toDomElements = function ( dataElement ) {
	var elements = ve.dm.CXReferenceNode.super.static.toDomElements.apply( this, arguments ),
		cxData = OO.getProp( dataElement, 'attributes', 'cx' );

	if ( cxData ) {
		elements[ 0 ].setAttribute( 'data-cx', JSON.stringify( cxData ) );
	}

	return elements;
};

/* Methods */

ve.dm.CXReferenceNode.prototype.onAttach = function () {
	var sectionNode, title, message, cxData;

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

	cxData = this.getAdaptationInfo();
	if ( cxData.partial === true ) {
		title = mw.msg( 'cx-tools-linter-incomplete-reference' );
		message = mw.message( 'cx-tools-linter-incomplete-reference-message' );
	} else if ( cxData.adapted === false ) {
		title = mw.msg( 'cx-tools-linter-reference' );
		message = mw.message( 'cx-tools-linter-reference-message' );
	} else {
		if ( cxData.adapted !== true ) {
			mw.log.warn(
				'[CX] Reference adaptation status is missing for the reference in section ' +
				sectionNode.getId()
			);
		}

		return;
	}

	sectionNode.addTranslationIssues( [ {
		name: 'reference',
		message: message,
		messageInfo: {
			title: title,
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

/**
 * Get the adaptation info supplied by cxserver
 *
 * @return {Object} The adaptation info
 */
ve.dm.CXReferenceNode.prototype.getAdaptationInfo = function () {
	var nodeGroup, kinNodes, contentsUsed,
		cxData = {};

	contentsUsed = this.getAttribute( 'contentsUsed' );
	// If contentsUsed is false, then this reference is a reused reference.
	// The adaptation status needs to be extracted from original reference.
	if ( contentsUsed ) {
		cxData = this.getAttribute( 'cx' ) || {};
	} else {
		nodeGroup = this.doc.getInternalList().getNodeGroup(
			this.getAttribute( 'listGroup' )
		);
		kinNodes = nodeGroup && nodeGroup.keyedNodes[ this.getAttribute( 'listKey' ) ];
		// See if there is any kin nodes and if so, use the first one.
		if ( kinNodes && kinNodes.length > 0 ) {
			cxData = kinNodes[ 0 ].getAttribute( 'cx' ) || {};
		}
	}
	return cxData;
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXReferenceNode );
