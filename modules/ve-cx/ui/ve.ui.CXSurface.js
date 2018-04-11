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
	this.toolsContainer = toolsColumn.toolContainer;
	// Move context to toolsContainer
	this.toolsContainer.$element.append( this.context.$element );
	this.getView().connect( this, {
		focus: 'onFocus',
		blur: 'onBlur'
	} );
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

ve.ui.CXSurface.prototype.onBlur = function () {
	this.toolsContainer.$element.removeClass( 'cx-column-tools-container--contextual' );
};

ve.ui.CXSurface.prototype.onFocus = function () {
	this.toolsContainer.$element.addClass( 'cx-column-tools-container--contextual' );
};
