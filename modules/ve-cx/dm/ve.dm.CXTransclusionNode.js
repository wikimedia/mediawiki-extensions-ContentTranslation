'use strict';

/**
 * Handling of unadapted templates in translations.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 * @file
 */

/**
 * This class exists to override inlineType and blockType. Those actually inherit
 * the ve.dm.MW* classes, so this is not part of the inheritance tree. Also the
 * static methods are partially "inherited" from this class.
 *
 * @class
 * @extends ve.dm.MWTransclusionNode
 * @constructor
 */
ve.dm.CXTransclusionNode = function VeDmCXTransclusionNode() {
	// Parent constructor
	ve.dm.CXTransclusionNode.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXTransclusionNode, ve.dm.MWTransclusionNode );

/* Static Properties */

ve.dm.CXTransclusionNode.static.name = 'cxTransclusion';
ve.dm.CXTransclusionNode.static.inlineType = 'cxTransclusionInline';
ve.dm.CXTransclusionNode.static.blockType = 'cxTransclusionBlock';

/* Static Methods */

ve.dm.CXTransclusionNode.static.toDataElement = function ( domElements ) {
	var dataElement,
		cxDataJSON = domElements[ 0 ].getAttribute( 'data-cx' ),
		cxData = cxDataJSON ? JSON.parse( cxDataJSON ) : {};

	// Parent method
	dataElement = ve.dm.CXTransclusionNode.super.static.toDataElement.apply( this, arguments );
	dataElement.attributes.cx = cxData;
	return dataElement;
};

ve.dm.CXTransclusionNode.static.toDomElements = function ( dataElement ) {
	var elements = ve.dm.CXTransclusionNode.super.static.toDomElements.apply( this, arguments );
	if ( Object.keys( dataElement.attributes.cx ).length ) {
		// Do not add empty data for data-cx. For example, nodes in source page has no data for cx.
		elements[ 0 ].setAttribute( 'data-cx', JSON.stringify( dataElement.attributes.cx ) );
	}
	return elements;
};

/**
 * Communicate warnings about unadapted templates.
 *
 * @class
 * @extends ve.dm.CXTransclusionNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 */
ve.dm.CXTransclusionBlockNode = function VeDmCXTransclusionBlockNode() {
	// Parent constructor
	ve.dm.CXTransclusionBlockNode.super.apply( this, arguments );

	// attach is fired when section is filled with MT, but not on restoring.
	this.connect( this, {
		attach: 'onAttach',
		detach: 'onDetach'
	} );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXTransclusionBlockNode, ve.dm.CXTransclusionNode );

/* Static Properties */

ve.dm.CXTransclusionBlockNode.static.name = 'cxTransclusionBlock';

/* Only ve.dm.CXTransclusionNode matches, then creates block/inline nodes dynamically */
ve.dm.CXTransclusionBlockNode.static.matchTagNames = [];

/* Methods */

ve.dm.CXTransclusionBlockNode.prototype.onAttach = function () {
	var message, title,
		additionalButtons = [],
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

	if ( this.missingInTargetLanguage() ) {
		// TODO: Add help link
		title = mw.msg( 'cx-tools-linter-template' );
		message = mw.message( 'cx-tools-linter-template-block-message' );
		additionalButtons.push( {
			icon: 'puzzle',
			label: mw.msg( 'cx-tools-linter-template-add-new' ),
			action: this.addNewTemplate
		} );
	} else if ( !this.isAdapted() ) {
		title = mw.msg( 'cx-tools-linter-incomplete-template' );
		message = mw.message( 'cx-tools-linter-empty-template' );
	} else if ( this.isPartiallyAdapted() ) {
		title = mw.msg( 'cx-tools-linter-incomplete-template' );
		message = mw.message( 'cx-tools-linter-template-missing-mandatory' );
	} else {
		if ( !this.hasAdaptationInfo() ) {
			mw.log.warn(
				'[CX] Template adaptation status is missing for a block template in section ' +
				sectionNode.getId()
			);
		}

		return;
	}

	// TODO: Add help link
	sectionNode.addTranslationIssues( [ {
		name: 'block-template',
		message: message,
		messageInfo: {
			title: title,
			resolvable: true,
			additionalButtons: additionalButtons
		}
	} ] );
};

ve.dm.CXTransclusionBlockNode.prototype.addNewTemplate = function () {
	var targetSurface = ve.init.target.targetSurface,
		command = targetSurface.commandRegistry.lookup( 'transclusion' );

	command.execute( targetSurface );
};

ve.dm.CXTransclusionBlockNode.prototype.onDetach = function ( parent ) {
	if ( parent instanceof ve.dm.CXSectionNode && parent.isTargetSection() ) {
		parent.resolveTranslationIssues( [ 'block-template' ] );
	}
};

/**
 * Check whether the target title is missing for this template
 *
 * @return {boolean} Whether the target template is missing or not.
 */
ve.dm.CXTransclusionBlockNode.prototype.missingInTargetLanguage = function () {
	var cxData = this.getAttribute( 'cx' ) || {};
	return ve.getProp( cxData, 0, 'targetExists' ) === false;
};

/**
 * @return {boolean} Whether cxserver provided adaptation info or not.
 */
ve.dm.CXTransclusionBlockNode.prototype.hasAdaptationInfo = function () {
	var cxData = this.getAttribute( 'cx' ) || {};
	return ve.getProp( cxData, 0, 'adapted' ) !== undefined;
};

/**
 * Check whether the template was adapted by cxserver successfully.
 * It means, some parameters are mapped to target template
 *
 * @return {boolean} Whether template is adapted or not.
 */
ve.dm.CXTransclusionBlockNode.prototype.isAdapted = function () {
	var cxData = this.getAttribute( 'cx' ) || {};
	return ve.getProp( cxData, 0, 'adapted' ) === true;
};

/**
 * Check whether all mandatory parameters are mapped to target template
 *
 * @return {boolean} Whether some mandatory parameters are not mapped
 */
ve.dm.CXTransclusionBlockNode.prototype.isPartiallyAdapted = function () {
	var cxData = this.getAttribute( 'cx' ) || {};
	return ve.getProp( cxData, 0, 'partial' ) === true;
};

/**
 * Communicate warnings about unadapted inline templates.
 *
 * @class
 * @extends ve.dm.CXTransclusionNode
 *
 * @constructor
 * @param {Object} [element] Reference to element in linear model
 */
ve.dm.CXTransclusionInlineNode = function VeDmCXTransclusionInlineNode() {
	// Parent constructor
	ve.dm.CXTransclusionInlineNode.super.apply( this, arguments );

	// attach is fired when section is filled with MT, but not on restoring.
	this.connect( this, {
		attach: 'onAttach',
		detach: 'onDetach'
	} );
};

/* Inheritance */

OO.inheritClass( ve.dm.CXTransclusionInlineNode, ve.dm.CXTransclusionNode );

/* Static Properties */

ve.dm.CXTransclusionInlineNode.static.name = 'cxTransclusionInline';

/* Only ve.dm.CXTransclusionNode matches, then creates block/inline nodes dynamically */
ve.dm.CXTransclusionInlineNode.static.matchTagNames = [];

ve.dm.CXTransclusionInlineNode.static.isContent = true;

/* Methods */

ve.dm.CXTransclusionInlineNode.prototype.onAttach = function () {
	var index, part,
		cxData = this.getAttribute( 'cx' ) || [],
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

	for ( index = 0; index < cxData.length; index++ ) {
		part = cxData[ index ];

		if ( part.adapted ) {
			// Continue looping to check other parts
			continue;
		}

		if ( part.adapted !== false ) {
			mw.log.warn(
				'[CX] Template adaptation status is missing for an inline template ' +
				'`%1` in section `%2` for part `$3`'
					.replace( '%1', OO.getProp( cxData, 'sourceTitle', 'title' ) )
					.replace( '%2', sectionNode.getId() )
					.replace( '%3', index )
			);
			// Stop looping, this seems broken enough.
			break;
		}

		// Convert the unadapted inline template to plain text value. T204942
		sectionNode.on( 'afterTranslation', this.convertToPlainText.bind( this ) );

		// TODO: Add help link
		sectionNode.addTranslationIssues( [ {
			name: 'inline-template',
			message: mw.message( 'cx-tools-linter-template-inline-message' ),
			messageInfo: {
				title: mw.msg( 'cx-tools-linter-template' ),
				resolvable: true
			}
		} ] );

		// Stop looping because we already added an issue warning
		break;
	}
};

ve.dm.CXTransclusionInlineNode.prototype.onDetach = function ( parent ) {
	// FIXME: There might be multiple unadapted inline templates. How to track?
	if ( parent instanceof ve.dm.CXSectionNode && parent.isTargetSection() ) {
		parent.resolveTranslationIssues( [ 'inline-template' ] );
	}
};

ve.dm.CXTransclusionInlineNode.prototype.convertToPlainText = function () {
	var fragment, originalDomElements, surfaceModel, textValue = '';

	surfaceModel = ve.init.target.targetSurface.getModel();
	originalDomElements = this.getOriginalDomElements( this.doc.store ) || [];
	fragment = surfaceModel.getLinearFragment( this.getOuterRange(), true );
	textValue = originalDomElements.map( function ( elem ) {
		return elem.innerText || '';
	} ).join( '' );
	fragment.insertContent( textValue, true );
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.CXTransclusionNode );
ve.dm.modelRegistry.register( ve.dm.CXTransclusionBlockNode );
ve.dm.modelRegistry.register( ve.dm.CXTransclusionInlineNode );

// Re-register ve.dm.MWReferencesListNode so that it gets high rank in
// ve.dm.modelRegistry.matchElement. See T206756
if ( ve.dm.MWReferencesListNode ) {
	ve.dm.modelRegistry.unregister( ve.dm.MWReferencesListNode );
	ve.dm.modelRegistry.register( ve.dm.MWReferencesListNode );
}
