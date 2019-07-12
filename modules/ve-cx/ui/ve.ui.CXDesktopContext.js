/**
 * CX Context menu and inspectors.
 *
 * @class
 * @extends ve.ui.DesktopContext
 *
 * @constructor
 * @param {ve.ui.CXSurface} surface
 * @param {Object} [config]
 */
ve.ui.CXDesktopContext = function VeUiCXDesktopContext() {
	// Parent constructor
	ve.ui.CXDesktopContext.super.apply( this, arguments );

	this.popup.$element.remove();

	// Initialization
	this.$element.addClass( 've-ui-cxDesktopContext' ).append(
		this.$group,
		this.inspectors.$element
			.addClass( 've-ui-cxDesktopContext-inspectors' )
	);
};

/* Inheritance */

OO.inheritClass( ve.ui.CXDesktopContext, ve.ui.DesktopContext );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXDesktopContext.prototype.afterContextChange = function () {
	// Parent method
	ve.ui.CXDesktopContext.super.prototype.afterContextChange.call( this );

	this.emit( 'afterContextChange' );
};

ve.ui.CXDesktopContext.prototype.updateDimensions = function () {};

ve.ui.CXDesktopContext.prototype.setPopupSizeAndPosition = function () {};
