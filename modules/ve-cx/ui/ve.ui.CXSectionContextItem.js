/**
 * Context item for a CX sections.
 *
 * @class
 * @extends ve.ui.CXLintContextItem
 * @mixins mw.cx.ui.mixin.LintableNode
 *
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXSectionContextItem = function VeUiCXSectionContextItem() {
	// Parent constructor
	ve.ui.CXSectionContextItem.super.apply( this, arguments );

	// Mixin constructors
	mw.cx.ui.mixin.LintableNode.call( this );
	this.registerClasses( this.$element, this.$head, this.$body );

	// Initialization
	this.$element.addClass( 've-ui-CXSectionContextItem' );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXSectionContextItem, ve.ui.LinearContextItem );
OO.mixinClass( ve.ui.CXSectionContextItem, mw.cx.ui.mixin.LintableNode );

/* Static Properties */

ve.ui.CXSectionContextItem.static.name = 'cxsection';

ve.ui.CXSectionContextItem.static.icon = 'close';

ve.ui.CXSectionContextItem.static.deletable = false;

ve.ui.CXSectionContextItem.static.editable = false;

/* Static Methods */

ve.ui.CXSectionContextItem.static.isCompatibleWith = function ( model ) {
	return ve.isInstanceOfAny( model, [ ve.dm.Node, ve.dm.Annotation ] ) && model.isEditable();
};

/* Methods */

ve.ui.CXSectionContextItem.prototype.getLintableNode = function () {
	return mw.cx.getParentSectionForSelection(
		this.context.getSurface(),
		this.getFragment().getSelection()
	);
};

/**
 * @inheritdoc
 */
ve.ui.CXSectionContextItem.prototype.setup = function () {
	if ( this.numberOfIssues ) {
		this.showCollapsed();
		this.$body.append( this.getBody() );
	} else {
		this.$element.remove();
	}

	return this;
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXSectionContextItem );
