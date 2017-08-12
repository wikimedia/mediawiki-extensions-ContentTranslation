/**
 * Context item for CXLinkAnnotation
 *
 * @class
 * @extends ve.ui.MWInternalLinkContextItem
 * @constructor
 */
ve.ui.CXLinkContextItem = function VeUiCXLinkContextItem() {
	// Parent constructor
	ve.ui.CXLinkContextItem.super.apply( this, arguments );
	// Mixin constructor
	ve.ui.CXTranslationUnitContextItem.apply( this );
	this.$sourceBody = $( '<div>' )
		.addClass( 've-ui-linearContextItem-body' )
		.addClass( 've-ui-cxLinkContextItem-sourceBody' )
		.insertBefore( this.$body );
	this.$element.addClass( 've-ui-cxLinkContextItem' );
	this.setLabel( this.constructor.static.title );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkContextItem, ve.ui.MWInternalLinkContextItem );
OO.mixinClass( ve.ui.CXLinkContextItem, ve.ui.CXTranslationUnitContextItem );

/* Static Properties */

ve.ui.CXLinkContextItem.static.name = 'cxLink';

ve.ui.CXLinkContextItem.static.title = OO.ui.deferMsg( 'cx-linkcontextitem-title' );

ve.ui.CXLinkContextItem.static.modelClasses = [ ve.dm.CXLinkAnnotation ];

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXLinkContextItem.prototype.renderBody = function () {
	var translation, unit, sourceModel;

	ve.ui.CXLinkContextItem.super.prototype.renderBody.call( this );

	translation = this.context.getSurface().getTranslationView().getTranslation();
	unit = translation.getTranslationUnit( this.model.getTranslationUnitId() );
	sourceModel = unit.sourceModel;
	this.$sourceBody.empty().append( this.constructor.static.generateBody(
		// TODO: this ought to be a linkCache pointing at the source wiki
		ve.init.platform.linkCache,
		sourceModel,
		translation.sourceSurface.getDocument().getHtmlDocument()
	) );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXLinkContextItem );
