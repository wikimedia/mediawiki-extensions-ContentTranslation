/**
 * Content Translation VE Surface
 *
 * @class
 * @extends ve.ui.Surface
 *
 * @constructor
 * @param {HTMLDocument|Array|ve.dm.ElementLinearData|ve.dm.Document} dataOrDoc Document data to edit
 * @param {mw.cx.ui.ToolsColumn} toolsColumn Tools column
 * @param {Object} [config] Configuration options
 */
ve.ui.CXSurface = function VeUiCXSurface( dataOrDoc, toolsColumn, config ) {
	// Parent constructor
	ve.ui.CXSurface.super.call( this, dataOrDoc, config );

	// Move context to toolsContainer
	toolsColumn.toolContainer.$element.append( this.context.$element );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXSurface, ve.ui.Surface );

/**
 * Create a context.
 *
 * @method
 * @return {ve.ui.DesktopContext} Context
 */
ve.ui.CXSurface.prototype.createContext = function () {
	return new ve.ui.CXDesktopContext( this );
};
