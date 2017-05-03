/**
 * Link Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */

mw.cx.tools.SourceLinkTool = function CXSourceLinkTool( model, config ) {
	config.order = 50;
	config.title = 'Link';
	config.language = config.sourceLanguage;
	// Parent constructor
	mw.cx.tools.SourceLinkTool.super.call( this, model, config );

	this.sourceTitle = null;
	this.targetTitle = null;
	this.pageInfo = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.SourceLinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.SourceLinkTool.static.name = 'sourcelink';

mw.cx.tools.SourceLinkTool.prototype.getContent = function () {
	var panel, $linkTitle, $linkDesc, $linkInfo;

	this.sourceTitle = this.model.sourceTitle;

	if ( !this.sourceTitle ) {
		return null;
	}

	$linkTitle = $( '<a>' )
		.addClass( 'cx-tools-link-text' )
		.text( this.sourceTitle )
		.prop( {
			target: '_blank',
			title: this.sourceTitle,
			href: this.model.config.siteMapper.getPageUrl( this.model.config.sourceLanguage, this.sourceTitle )
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
		content: [ $linkInfo ]
	} );
	if ( !this.pageInfo ) {
		this.model.requestManager.getLinkInfo(
			this.model.config.sourceLanguage, this.sourceTitle
		).then( function( pageInfo ) {
			this.pageInfo = pageInfo;
			$linkDesc.text( this.pageInfo.description );
			this.refresh();
		}.bind( this ) );
	} else {
		$linkDesc.text( this.pageInfo.description );
	}
	return panel.$element;
};

mw.cx.tools.SourceLinkTool.prototype.getBackgroundImage = function () {
	if ( this.pageInfo && this.pageInfo.imageUrl ) {
		return this.pageInfo.imageUrl;
	}
	return null;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.SourceLinkTool );
