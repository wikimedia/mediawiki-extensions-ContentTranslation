/**
 * Link Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.ui.TranslationUnit} translationUnit
 * @param {Object} config
 */

mw.cx.tools.LinkTool = function CXLinkTool( translationUnit, config ) {
	config.order = 4;
	config.title = 'Link';
	config.language = config.targetLanguage;
	this.sourceTitle = null;
	this.targetTitle = null;
	// Parent constructor
	mw.cx.tools.LinkTool.super.call( this, translationUnit, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.LinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.LinkTool.static.name = 'link';

/**
 * @inheritDoc
 */
mw.cx.tools.LinkTool.prototype.getActions = function () {
	this.addLinkButton = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-link-add' ),
		icon: 'add',
		framed: false,
		classes: [ 'cx-tools-link-add-button' ]
	} );
	this.removeLinkButton = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-link-remove' ),
		icon: 'close',
		framed: false,
		classes: [ 'cx-tools-link-remove-button' ]
	} );
	this.removeLinkButton.connect( this, {
		click: 'removeLink'
	} );
	this.actions = [
		this.addLinkButton,
		this.removeLinkButton
	];
	return this.actions;
};

mw.cx.tools.LinkTool.prototype.getContent = function () {
	var panel, $image, $linkTitle, $linkDesc, $linkInfo;
	this.targetTitle = this.translationUnitDataModel.getTargetTitle();
	$image = $( '<img>' )
		.addClass( 'cx-tools-link-image cx-tools-link-image-empty' );

	$linkTitle = $( '<a>' )
		.addClass( 'cx-tools-link-text' )
		.text( this.targetTitle )
		.prop( {
			target: '_blank',
			title: this.targetTitle,
			href: this.translationUnitDataModel.config.siteMapper.getPageUrl( this.translationUnitDataModel.config.targetLanguage, this.targetTitle )
		} );
	$linkDesc = $( '<div>' )
		.addClass( 'cx-tools-link-desc' );
	$linkInfo = $( '<div>' )
		.addClass( 'cx-tools-link-info' )
		.append( $linkTitle, $linkDesc );
	panel = new OO.ui.PanelLayout( {
		expanded: false,
		framed: false,
		padded: false,
		content: [ $image, $linkInfo ]
	} );
	this.translationUnitDataModel.requestManager.getLinkInfo(
		this.translationUnitDataModel.config.targetLanguage, this.targetTitle
	).then( function( pageInfo ) {
		$linkDesc.text( pageInfo.description );
		if ( pageInfo.imageUrl ) {
			$image.attr( 'src', pageInfo.imageUrl ).removeClass( 'cx-tools-link-image-empty' );
		}
	} );
	return panel.$element;
};

mw.cx.tools.LinkTool.prototype.removeLink = function () {
	this.translationUnitUIModel.remove();
	this.destroy();
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.LinkTool );
