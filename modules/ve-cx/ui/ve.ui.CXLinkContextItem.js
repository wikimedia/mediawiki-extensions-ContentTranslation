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
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkContextItem, ve.ui.MWInternalLinkContextItem );
OO.mixinClass( ve.ui.CXLinkContextItem, ve.ui.CXTranslationUnitContextItem );

/* Static Properties */

ve.ui.CXLinkContextItem.static.name = 'cxLink';

ve.ui.CXLinkContextItem.static.label = OO.ui.deferMsg( 'cx-linkcontextitem-title' );

ve.ui.CXLinkContextItem.static.modelClasses = [ ve.dm.CXLinkAnnotation ];

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXLinkContextItem.prototype.renderBody = function () {
	var $sourceLink, $targetLink,
		targetSurface = this.context.getSurface(),
		translation = ve.init.target.getTranslation(),
		unit = translation.getTranslationUnit( this.model.getTranslationUnitId() ),
		sourceModel = unit.sourceModel;

	// Source link
	$sourceLink = this.constructor.static.generateBody(
		// TODO: this ought to be a linkCache pointing at the source wiki
		ve.init.platform.linkCache,
		sourceModel,
		translation.sourceDoc.getHtmlDocument()
	);
	// Target link
	$targetLink = this.constructor.static.generateBody(
		ve.init.platform.linkCache,
		this.model,
		targetSurface.getModel().getDocument().getHtmlDocument()
	);

	function addLanguageDescription( $link, lang ) {
		$link.find( '.ve-ui-mwInternalLinkContextItem-link' ).after(
			$( '<span>' )
				.addClass( 've-ui-mwInternalLinkContextItem-description' )
				.text( ve.init.platform.getLanguageAutonym( lang ) )
		);
	}

	addLanguageDescription( $sourceLink, translation.sourceDoc.getLang() );
	addLanguageDescription( $targetLink, translation.targetDoc.getLang() );

	this.$sourceBody.empty().append( $sourceLink );
	this.$body.empty().append( $targetLink );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXLinkContextItem );
