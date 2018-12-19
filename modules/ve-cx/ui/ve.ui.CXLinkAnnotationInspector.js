'use strict';

/**
 * Inspector for applying and editing labeled MediaWiki internal and external links.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends ve.ui.MWLinkAnnotationInspector
 *
 * @param {Object} [config] Configuration options
 */
ve.ui.CXLinkAnnotationInspector = function VeUiCXLinkAnnotationInspector( config ) {
	// Parent constructor
	ve.ui.CXLinkAnnotationInspector.super.call( this, config );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkAnnotationInspector, ve.ui.MWLinkAnnotationInspector );

/* Static properties */

ve.ui.CXLinkAnnotationInspector.static.modelClasses = [
	ve.dm.MWExternalLinkAnnotation,
	ve.dm.CXLinkAnnotation
];

/* Methods */

/**
 * @return {ve.ui.CXInternalLinkAnnotationWidget}
 */
ve.ui.CXLinkAnnotationInspector.prototype.createInternalAnnotationInput = function () {
	return new ve.ui.CXInternalLinkAnnotationWidget();
};

/**
 * @inheritdoc
 * @return {ve.dm.CXLinkAnnotation} The annotation.
 */
ve.ui.CXLinkAnnotationInspector.prototype.newInternalLinkAnnotationFromTitle = function ( title ) {
	return ve.dm.CXLinkAnnotation.static.newFromTitle( title );
};

/**
 * @inheritdoc
 */
ve.ui.CXLinkAnnotationInspector.prototype.ready = function ( data ) {
	return this.getReadyProcess( data ).execute().then( function () {
		this.$element.addClass( 'oo-ui-window-ready' ).width();
		this.$content.addClass( 'oo-ui-window-content-ready' ).width();
	}.bind( this ) );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CXLinkAnnotationInspector );
