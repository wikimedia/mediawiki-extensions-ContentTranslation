/**
 * Link Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */

mw.cx.tools.NewLinkTool = function CXNewLinkTool( model, config ) {
	config.order = 52;
	config.title = 'Link';
	config.language = config.targetLanguage;
	// Parent constructor
	mw.cx.tools.NewLinkTool.super.call( this, model, config );

	this.sourceTitle = null;
	this.targetTitle = null;
	this.pageInfo = null;
	this.makeRedLinkButton = null;
	this.removeLinkButton = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.NewLinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.NewLinkTool.static.name = 'newlink';

mw.cx.tools.NewLinkTool.prototype.getContent = function () {
	var card, compactTrigger, tabBar, internalLink, internalLinkPanel, externalLink, externalLinkPanel,
		internalLinkTab, externalLinkTab, applyButton;

	compactTrigger = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-newlink-compact-trigger' ],
		expanded: false,
		framed: false,
		padded: false,
		text: mw.msg( 'cx-tools-link-to-another-page' )
	} );
	internalLinkTab = new OO.ui.ButtonWidget( {
		classes: [ 'cx-tools-newlink-internal-trigger' ],
		framed: false,
		label: mw.msg( 'cx-tools-link-internal-link' )
	} ),
	externalLinkTab = new OO.ui.ButtonWidget( {
		classes: [ 'cx-tools-newlink-external-trigger' ],
		framed: false,
		label: mw.msg( 'cx-tools-link-external-link' )
	} ),
	applyButton = new OO.ui.ButtonWidget( {
		classes: [ 'cx-tools-newlink-apply' ],
		flags: [ 'primary', 'progressive' ],
		icon: 'check',
		label: mw.msg( 'cx-tools-link-apply' )
	} );
	tabBar = new OO.ui.HorizontalLayout( {
		classes: [ 'cx-tools-newlink-tabs' ],
		items: [ internalLinkTab, externalLinkTab, applyButton ]
	} );
	internalLink = new mw.cx.ui.PageSelectorWidget( {
		classes: [ 'cx-tools-newlink-internallink-selector' ],
		language: this.language,
		siteMapper: this.model.config.siteMapper
	} );
	externalLink = new OO.ui.TextInputWidget( {
		classes: [ 'cx-tools-newlink-internallink' ],
		icon: 'linkExternal'
	} );
	internalLinkPanel = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-newlink-internallink-panel', 'active' ],
		content: [ internalLink ]
	} );
	externalLinkPanel = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-newlink-externallink-panel' ],
		content: [ externalLink ]
	} );
	card = new OO.ui.StackLayout( {
		continuous: true,
		expanded: false,
		scrollable: false,
		items: [ compactTrigger, tabBar, internalLinkPanel, externalLinkPanel ]
	} );

	compactTrigger.$element.on( 'click', function() {
		card.$element.addClass( 'expanded' );
	} );
	internalLinkTab.on( 'click', function() {
		internalLinkPanel.$element.addClass( 'active' );
		externalLinkPanel.$element.removeClass( 'active' );
	} );
	externalLinkTab.on( 'click', function() {
		externalLinkPanel.$element.addClass( 'active' );
		internalLinkPanel.$element.removeClass( 'active' );
	} );
	return card.$element;
};

/**
 * @inheritDoc
 */
mw.cx.tools.NewLinkTool.prototype.getBackgroundImage = function () {
	if ( this.pageInfo && this.pageInfo.imageUrl ) {
		return this.pageInfo.imageUrl;
	}
	return null;
};

mw.cx.tools.NewLinkTool.prototype.removeLink = function () {
	this.emit( 'remove' );
	this.destroy();
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.NewLinkTool );
