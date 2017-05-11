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
	this.linkTabs = null;
	this.internalLink = null;
	this.externalLink = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.NewLinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.NewLinkTool.static.name = 'newlink';

/**
 * Text selection handler
 * @param {Selection} selectionObj Selection object
 */
mw.cx.tools.NewLinkTool.prototype.onSelect = function ( selectionObj ) {
	var selection;

	// TODO: Sanitize content
	selection = selectionObj.toString().trim();
	if ( selection && selection.length < 1000 ) {
		this.selectionObj = selectionObj;
	} else {
		return;
	}
	// Save the selection with a name so that it can be restored after the tool
	// modify the selected content.
	mw.cx.selection.save( 'translation', this.selectionObj );
	// Check if selection changed.
	if ( this.selection !== selection ) {
		this.selection = selection;
		this.pageInfo = null;
		this.refresh();
	}
};

mw.cx.tools.NewLinkTool.prototype.getContent = function () {
	var card, compactTrigger, internalLinkTab, externalLinkTab;

	this.collapse();

	compactTrigger = new OO.ui.PanelLayout( {
		classes: [ 'cx-tools-newlink-compact-trigger' ],
		expanded: false,
		framed: false,
		padded: false,
		text: mw.msg( 'cx-tools-link-to-another-page' )
	} );

	this.internalLink = new mw.cx.ui.PageSelectorWidget( {
		value: this.selection,
		classes: [ 'cx-tools-newlink-internallink' ],
		language: this.language,
		placeholder: mw.msg( 'cx-tools-link-internal-link-placeholder' ),
		siteMapper: this.model.config.siteMapper
	} );
	internalLinkTab = new OO.ui.TabPanel( 'internal', {
		label: mw.msg( 'cx-tools-link-internal-link' ),
		expanded: false,
		scrollable: false
	} );
	internalLinkTab.$element.append( this.internalLink.$element );

	this.externalLink = new OO.ui.TextInputWidget( {
		classes: [ 'cx-tools-newlink-externallink' ],
		icon: 'linkExternal',
		placeholder: 'https://...'
	} );
	externalLinkTab = new OO.ui.TabPanel( 'external', {
		label: mw.msg( 'cx-tools-link-external-link' ),
		expanded: false,
		scrollable: false
	} );
	externalLinkTab.$element.append( this.externalLink.$element );

	this.linkTabs = new OO.ui.IndexLayout( {
		expanded: false,
		scrollable: false,
		classes: [ 'cx-tools-newlink-tabs' ]
	} );
	this.linkTabs.addTabPanels( [ internalLinkTab, externalLinkTab ] );
	card = new OO.ui.StackLayout( {
		continuous: true,
		expanded: false,
		scrollable: false,
		items: [ compactTrigger, this.linkTabs ]
	} );

	compactTrigger.$element.on( 'click', this.expand.bind( this ) );

	this.internalLink.getLookupMenu().connect( this, { choose: 'onApply' } );
	this.externalLink.connect( this, { enter: 'onApply' } );
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

mw.cx.tools.NewLinkTool.prototype.expand = function () {
	this.getCard().$element.addClass( 'expanded' );
	this.linkTabs.getTabPanel( 'internal' ).focus();
	// Hide the source link and target link cards
	this.card.$element.siblings( '.cx-card-sourcelink' ).addClass( 'collapse' );
	this.card.$element.siblings( '.cx-card-targetlink' ).addClass( 'collapse' );
};

mw.cx.tools.NewLinkTool.prototype.collapse = function () {
	if ( this.card ) {
		this.card.$element.removeClass( 'expanded' );
		this.card.$element.siblings( '.cx-card-sourcelink' ).removeClass( 'collapse' );
		this.card.$element.siblings( '.cx-card-targetlink' ).removeClass( 'collapse' );
	}
};

/**
 * Check if the current input mode is for external links
 *
 * @return {boolean} Input mode is for external links
 */
mw.cx.tools.NewLinkTool.prototype.isExternal = function () {
	return this.linkTabs.getCurrentTabPanelName() === 'external';
};

mw.cx.tools.NewLinkTool.prototype.onApply = function () {
	this.collapse();
	if ( this.isExternal() ) {
		this.emit( 'addExternalLink', this.selectionObj, this.externalLink.getValue() );
	} else if ( this.selection ) {
		this.emit( 'addlink', this.selectionObj, this.internalLink.getValue(), true );
	} else {
		this.emit( 'changeLinkTarget', this.internalLink.getValue() );
	}
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.NewLinkTool );
