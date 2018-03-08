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
	ve.ui.CXTranslationUnitContextItem.apply( this, arguments );
	this.$sourceBody = $( '<div>' )
		.addClass( 've-ui-linearContextItem-body ve-ui-cxLinkContextItem-sourceBody' )
		.insertBefore( this.$body );
	this.$body.addClass( 've-ui-cxLinkContextItem-targetBody' );
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
		adaptationInfo = this.model.getAttribute( 'cx' ),
		translation = ve.init.target.getTranslation();

	function addLanguageDescription( $link, lang ) {
		$link.find( '.ve-ui-mwInternalLinkContextItem-link' ).after(
			$( '<span>' )
				.addClass( 've-ui-mwInternalLinkContextItem-description' )
				.text( ve.init.platform.getLanguageAutonym( lang ) )
		);
	}

	// Source link
	$sourceLink = this.generateBody( adaptationInfo.sourceTitle, this.context );
	addLanguageDescription( $sourceLink, translation.sourceDoc.getLang() );

	// Target link
	if ( adaptationInfo.adapted ) {
		$targetLink = this.generateBody( adaptationInfo.targetTitle, this.context );
		addLanguageDescription( $targetLink, translation.targetDoc.getLang() );
	}

	this.$sourceBody.empty().append( $sourceLink );
	this.$body.empty().append( $targetLink );
};

/**
 * Generate the body of the link context item
 *
 * @param {Object} linkInfo The object with title meta data
 * @param {ve.ui.Context} context Context (for resizing)
 * @return {jQuery} The jQuery object of the link context item
 */
ve.ui.CXLinkContextItem.prototype.generateBody = function ( linkInfo, context ) {
	var $linkTitle, icon, description, $description, imageUrl,
		$wrapper = $( '<div>' );

	$linkTitle = $( '<a>' )
		.addClass( 've-ui-mwInternalLinkContextItem-link  cx-tools-link-text' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.title,
			href: ve.init.target.config.siteMapper.getPageUrl( linkInfo.pagelanguage, linkInfo.title )
		} );

	icon = new OO.ui.IconWidget( {
		icon: 'page-existing',
		classes: [ 'cx-tools-link-image' ]
	} );

	icon = new OO.ui.IconWidget( { icon: 'page-existing' } );
	$wrapper
		.addClass( 've-ui-mwInternalLinkContextItem-withImage' )
		.append( icon.$element );

	$wrapper.append( $linkTitle );

	description = OO.getProp( linkInfo, 'terms', 'description' );
	if ( description ) {
		$description = $( '<span>' )
			.addClass( 've-ui-mwInternalLinkContextItem-description' )
			.text( description );
		$wrapper.append( $description );
		// Multiline descriptions may make the context bigger (T183650)
		context.updateDimensions();
	}

	imageUrl = OO.getProp( linkInfo, 'thumbnail', 'source' );
	if ( imageUrl ) {
		icon.$element
			.addClass( 've-ui-mwInternalLinkContextItem-hasImage' )
			.css( 'background-image', 'url(' + imageUrl + ')' );
	}

	return $wrapper;
};
/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXLinkContextItem );
