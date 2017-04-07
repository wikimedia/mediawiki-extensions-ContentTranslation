/**
 * Link Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */

mw.cx.tools.TargetLinkTool = function CXTargetLinkTool( model, config ) {
	config.order = 51;
	config.title = 'Link';
	config.language = config.targetLanguage;
	// Parent constructor
	mw.cx.tools.TargetLinkTool.super.call( this, model, config );

	this.sourceTitle = null;
	this.targetTitle = null;
	this.pageInfo = null;
	this.makeRedLinkButton = null;
	this.removeLinkButton = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.TargetLinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.TargetLinkTool.static.name = 'targetlink';

/**
 * @inheritDoc
 */
mw.cx.tools.TargetLinkTool.prototype.getActions = function () {
	if ( this.model.isTargetExist() ) {
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
			this.removeLinkButton
		];
	} else {
		this.makeRedLinkButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-missing-link-mark-link' ),
			icon: 'flag',
			framed: false,
			classes: [ 'cx-tools-link-mark-red' ]
		} );
		this.actions = [
			this.makeRedLinkButton
		];
	}

	return this.actions;
};

mw.cx.tools.TargetLinkTool.prototype.getContent = function () {
	var panel, $linkTitle, $linkDesc, $linkInfo, $missingLink;

	this.targetTitle = this.model.getTargetTitle();

	if ( this.model.isTargetExist() ) {
		$linkTitle = $( '<a>' )
			.addClass( 'cx-tools-link-text' )
			.text( this.targetTitle )
			.prop( {
				target: '_blank',
				title: this.targetTitle,
				href: this.model.config.siteMapper.getPageUrl( this.model.config.targetLanguage, this.targetTitle )
			} );
		$linkDesc = $( '<div>' )
			.addClass( 'cx-tools-link-desc' );
		$linkInfo = $( '<div>' )
			.addClass( 'cx-tools-link-info' )
			.append( $linkTitle, $linkDesc );
		if ( !this.pageInfo ) {
			this.model.requestManager.getLinkInfo(
				this.model.config.targetLanguage, this.targetTitle
			).then( function( pageInfo ) {
				this.pageInfo = pageInfo;
				$linkDesc.text( this.pageInfo.description );
				this.refresh();
			}.bind( this ) );
		} else {
			$linkDesc.text( this.pageInfo.description );
		}
	} else {
		$missingLink = $( '<div>' ).text( mw.msg( 'cx-tools-missing-link-text' ) );
	}

	panel = new OO.ui.PanelLayout( {
		expanded: false,
		framed: false,
		padded: false,
		content: [ $missingLink || $linkInfo ]
	} );

	return panel.$element;
};

mw.cx.tools.TargetLinkTool.prototype.getBackgroundImage = function () {
	if ( this.pageInfo && this.pageInfo.imageUrl ) {
		return this.pageInfo.imageUrl;
	}
	if ( !this.model.isTargetExist() ) {
		return;
	}
};

mw.cx.tools.TargetLinkTool.prototype.removeLink = function () {
	this.emit( 'remove' );
	this.destroy();
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.TargetLinkTool );
