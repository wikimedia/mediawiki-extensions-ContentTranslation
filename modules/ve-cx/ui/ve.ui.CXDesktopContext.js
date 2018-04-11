/**
 * CX Context menu and inspectors.
 *
 * @class
 * @extends ve.ui.LinearContext
 *
 * @constructor
 * @param {ve.ui.CXSurface} surface
 */
ve.ui.CXDesktopContext = function VeUiCXDesktopContext( surface ) {
	// Parent constructor
	ve.ui.CXDesktopContext.super.apply( this, arguments );
	this.toolsContainer = surface.toolsContainer;
	if ( surface.isDisabled() ) {
		return;
	}
	// Properties

	this.transitioning = null;
	this.suppressed = false;
	this.$window = $( this.getElementWindow() );

	// Events
	this.surface.getView().connect( this, {
		relocationStart: 'onSuppress',
		relocationEnd: 'onUnsuppress',
		blur: 'onSuppress',
		focus: 'onUnsuppress'
	} );
	this.surface.getModel().connect( this, {
		select: 'onModelSelect'
	} );

	// Initialization
	this.$element.addClass( 've-ui-cxDesktopContext' ).append(
		this.inspectors.$element
			.addClass( 've-ui-cxDesktopContext-inspectors' )
	);
};

/* Inheritance */

OO.inheritClass( ve.ui.CXDesktopContext, ve.ui.LinearContext );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXDesktopContext.prototype.afterContextChange = function () {
	// Parent method
	ve.ui.CXDesktopContext.super.prototype.afterContextChange.call( this );

	// Bypass while dragging
	if ( this.suppressed ) {
		return;
	}
};

/**
 * Handle context suppression event.
 */
ve.ui.CXDesktopContext.prototype.onSuppress = function () {
	this.suppressed = true;
	if ( this.isVisible() ) {
		if ( !this.isEmpty() ) {
			// Change state: menu -> closed
			this.toggleMenu( false );
			this.toggle( false );
		} else if ( this.inspector ) {
			// Change state: inspector -> closed
			this.inspector.close();
		}
	}
};

/**
 * Handle context unsuppression event.
 */
ve.ui.CXDesktopContext.prototype.onUnsuppress = function () {
	this.suppressed = false;

	if ( this.isInspectable() ) {
		// Change state: closed -> menu
		this.toggleMenu( true );
		this.toggle( true );
	}
};

/**
 * Handle model select event.
 */
ve.ui.CXDesktopContext.prototype.onModelSelect = function () {
	if ( this.isVisible() ) {
		if ( this.inspector && this.inspector.isOpened() ) {
			this.inspector.close();
		}
	}
};

/**
 * @inheritdoc
 */
ve.ui.CXDesktopContext.prototype.createInspectorWindowManager = function () {
	return new ve.ui.DesktopInspectorWindowManager( this.surface, {
		factory: ve.ui.windowFactory,
		overlay: this.surface.getLocalOverlay(),
		modal: false
	} );
};

/**
 * @inheritdoc
 */
ve.ui.CXDesktopContext.prototype.toggle = function ( show ) {
	var promise;

	if ( this.transitioning ) {
		return this.transitioning;
	}
	show = show === undefined ? !this.visible : !!show;
	if ( show === this.visible ) {
		return $.Deferred().resolve().promise();
	}

	this.transitioning = $.Deferred();
	promise = this.transitioning.promise();

	// Parent method
	ve.ui.CXDesktopContext.super.prototype.toggle.call( this, show );

	this.transitioning.resolve();
	this.transitioning = null;
	this.visible = show;

	if ( show ) {
		if ( this.inspector ) {
			this.inspector.updateSize();
		}
	} else if ( this.inspector ) {
		this.inspector.close();
	}

	return promise;
};

/**
 * @inheritdoc
 */
ve.ui.CXDesktopContext.prototype.destroy = function () {
	// Disconnect
	this.surface.getView().disconnect( this );

	// Parent method
	return ve.ui.CXDesktopContext.super.prototype.destroy.call( this );
};
