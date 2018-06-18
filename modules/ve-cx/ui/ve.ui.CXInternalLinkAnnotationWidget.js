'use strict';

/**
 * Creates an ve.ui.CXInternalLinkAnnotationWidget object.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @extends ve.ui.MWInternalLinkAnnotationWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
ve.ui.CXInternalLinkAnnotationWidget = function VeUiCXInternalLinkAnnotationWidget() {
	// Parent constructor
	ve.ui.CXInternalLinkAnnotationWidget.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXInternalLinkAnnotationWidget, ve.ui.MWInternalLinkAnnotationWidget );

/* Static Methods */

/**
 * @inheritdoc
 */
ve.ui.CXInternalLinkAnnotationWidget.static.getAnnotationFromText = function ( value ) {
	var trimmed = value.trim(),
		title = mw.Title.newFromText( trimmed );

	if ( !title ) {
		return null;
	}

	return ve.dm.CXLinkAnnotation.static.newFromTitle( title, trimmed );
};
