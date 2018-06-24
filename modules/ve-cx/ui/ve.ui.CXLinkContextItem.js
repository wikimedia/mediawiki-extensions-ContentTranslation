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
		.insertAfter( this.$body );
	this.$body.addClass( 've-ui-cxLinkContextItem-targetBody' );
	this.$element.addClass( 've-ui-cxLinkContextItem' );
	// Do not show the delete button in red color
	this.clearButton.clearFlags();
};

/* Inheritance */

OO.inheritClass( ve.ui.CXLinkContextItem, ve.ui.MWInternalLinkContextItem );
OO.mixinClass( ve.ui.CXLinkContextItem, ve.ui.CXTranslationUnitContextItem );

/* Static Properties */

ve.ui.CXLinkContextItem.static.name = 'cxLink';

ve.ui.CXLinkContextItem.static.label = OO.ui.deferMsg( 'cx-linkcontextitem-title' );

ve.ui.CXLinkContextItem.static.modelClasses = [ ve.dm.CXLinkAnnotation ];

ve.ui.CXLinkContextItem.static.clearIcon = 'trash';

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXLinkContextItem.prototype.renderBody = function () {
	var $sourceLink, $targetLinkCard, markAsMissingButton,
		markAsMissingInfo,
		adaptationInfo = this.model.getAttribute( 'cx' );

	if ( adaptationInfo.sourceTitle ) {
		// Source link
		$sourceLink = ve.ui.CXLinkContextItem.static.generateSourceBody(
			adaptationInfo.sourceTitle,
			this.translation.getSourceLanguage()
		);
		this.$sourceBody.empty().append( $sourceLink );
	}

	// Target link
	if ( adaptationInfo.adapted ) {
		$targetLinkCard = ve.ui.CXLinkContextItem.static.generateBody(
			adaptationInfo.targetTitle, this.context
		);
	} else {
		this.editButton.toggle();
		this.setLabel( mw.msg( 'cx-tools-missing-link-title' ) );
		markAsMissingButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-missing-link-mark-link' ),
			classes: [ 've-ui-cxLinkContextItem-mark-missing-button' ],
			flags: [ 'progressive' ]
		} );
		markAsMissingInfo = $( '<div>' )
			.addClass( 've-ui-cxLinkContextItem-mark-missing-text' )
			.text( mw.msg( 'cx-tools-missing-link-text' ) );
		$targetLinkCard = $( '<div>' )
			.addClass( 've-ui-cxLinkContextItem-mark-missing' )
			.append( markAsMissingInfo, markAsMissingButton.$element );
	}

	this.$body.empty().append( $targetLinkCard );
};

ve.ui.CXLinkContextItem.static.generateSourceBody = function ( linkInfo, language ) {
	var $wrapper, $linkTitle, $languageLabel;

	$wrapper = $( '<div>' );

	$linkTitle = $( '<a>' )
		.addClass( 've-ui-cxLinkContextItem-title' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.description || linkInfo.title,
			href: ve.init.target.config.siteMapper.getPageUrl( linkInfo.pagelanguage, linkInfo.title )
		} );
	$languageLabel = $( '<span>' )
		.addClass( 've-ui-cxLinkContextItem-language' )
		.text( ve.init.platform.getLanguageAutonym( language ) );
	$wrapper.append( $linkTitle, $languageLabel );
	return $wrapper;
};

/**
 * Generate the body of the link context item
 *
 * @param {Object} linkInfo The object with title meta data
 * @param {ve.ui.Context} context Context (for resizing)
 * @return {jQuery} The jQuery object of the link context item
 */
ve.ui.CXLinkContextItem.static.generateBody = function ( linkInfo, context ) {
	var $linkTitle, icon, description, $description, imageUrl,
		$wrapper = $( '<div>' );

	$linkTitle = $( '<a>' )
		.addClass( 've-ui-cxLinkContextItem-title' )
		.text( linkInfo.title )
		.prop( {
			target: '_blank',
			title: linkInfo.title,
			href: ve.init.target.siteMapper.getPageUrl( linkInfo.pagelanguage, linkInfo.title )
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

	description = linkInfo.description;
	if ( description ) {
		$description = $( '<span>' )
			.addClass( 've-ui-cxLinkContextItem-description' )
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
