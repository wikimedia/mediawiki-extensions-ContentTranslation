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
	this.selection = null;
	this.makeRedLinkButton = null;
	this.removeLinkButton = null;
	this.addLinkButton = null;
	this.$linkInfo = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.TargetLinkTool, mw.cx.tools.TranslationTool );

mw.cx.tools.TargetLinkTool.static.name = 'targetlink';

/**
 * Text selection handler
 * @param {Selection} selectionObj Selection object
 */
mw.cx.tools.TargetLinkTool.prototype.onSelect = function ( selectionObj ) {
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

/**
 * @inheritDoc
 */
mw.cx.tools.TargetLinkTool.prototype.getActions = function () {
	this.actions = [];

	if ( this.pageInfo && this.pageInfo.missing && !this.model.redlink ) {
		this.makeRedLinkButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-missing-link-mark-link' ),
			icon: 'flag',
			framed: false,
			classes: [ 'cx-tools-link-mark-red' ]
		} );
		this.makeRedLinkButton.connect( this, {
			click: 'makeRedLink'
		} );
		this.actions.push( this.makeRedLinkButton );
	} else if ( this.selection ) {
		this.addLinkButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-link-add' ),
			icon: 'add',
			framed: false,
			classes: [ 'cx-tools-link-add-button' ]
		} );
		this.addLinkButton.connect( this, {
			click: 'addLink'
		} );
		this.actions.push( this.addLinkButton );
	} else if ( this.model && ( this.model.isTargetExist() || this.model.redlink ) ) {
		this.removeLinkButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-link-remove' ),
			icon: 'close',
			framed: false,
			classes: [ 'cx-tools-link-remove-button' ]
		} );
		this.removeLinkButton.connect( this, {
			click: 'removeLink'
		} );
		this.actions.push( this.removeLinkButton );
	}

	return this.actions;
};

mw.cx.tools.TargetLinkTool.prototype.getContent = function () {
	var panel, linkTitle;

	linkTitle = this.selection || this.model && this.model.getTargetTitle();
	this.pageInfo = {
		title: linkTitle,
		pagelanguage: this.model.config.targetLanguage,
		missing: false
	};
	if ( !this.selection && !this.model.isTargetExist() ) {
		this.pageInfo.missing = true;
	}

	// Provisional link information while we fetch the page information.
	this.$linkInfo = this.buildLinkInfo( this.pageInfo );

	if ( !this.pageInfo.missing ) {
		this.model.requestManager.getLinkInfo( this.model.config.targetLanguage, linkTitle )
			.then( function ( pageInfo ) {
				this.pageInfo = pageInfo;
				this.$linkInfo.replaceWith( this.buildLinkInfo( this.pageInfo ) );
			}.bind( this ) );
	}

	panel = new OO.ui.PanelLayout( {
		expanded: false,
		framed: false,
		padded: false,
		content: [ this.$linkInfo ]
	} );

	return panel.$element;
};

/**
 * Build the link title, description for the tool card
 * @param {Object} pageinfo
 * @return {jQuery}
 */
mw.cx.tools.TargetLinkTool.prototype.buildLinkInfo = function ( pageinfo ) {
	var $linkTitle, $linkDesc;

	this.emit( 'actionsChange' );
	this.emit( 'backgroundChange' );

	if ( pageinfo.missing && !this.model.redlink ) {
		return $( '<div>' ).text( mw.msg( 'cx-tools-missing-link-text' ) );
	}

	$linkTitle = $( '<a>' )
		.addClass( 'cx-tools-link-text ' + ( this.model.redlink ? 'new' : '' ) )
		.text( pageinfo.title )
		.prop( {
			target: '_blank',
			title: pageinfo.title,
			href: this.model.config.siteMapper.getPageUrl( this.pageInfo.pagelanguage, pageinfo.title )
		} );

	$linkDesc = $( '<div>' )
		.text( pageinfo.description || '' )
		.addClass( 'cx-tools-link-desc' );
	return $( '<div>' )
		.addClass( 'cx-tools-link-info' )
		.append( $linkTitle, $linkDesc );
};

/**
 * @inheritdoc
 */
mw.cx.tools.TargetLinkTool.prototype.getBackgroundImage = function () {
	if ( this.pageInfo && this.pageInfo.imageUrl ) {
		return this.pageInfo.imageUrl;
	}
	return null;
};

mw.cx.tools.TargetLinkTool.prototype.removeLink = function () {
	this.emit( 'removelink' );
	this.destroy();
};

mw.cx.tools.TargetLinkTool.prototype.addLink = function () {
	this.emit( 'addlink', this.selectionObj, this.pageInfo && this.pageInfo.title, true );
};

mw.cx.tools.TargetLinkTool.prototype.makeRedLink = function () {
	if ( this.selection ) {
		this.emit( 'addlink', this.selectionObj, this.pageInfo && this.pageInfo.title, false );
	} else {
		this.emit( 'makeRedLink' );
		this.refresh();
	}
};
/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.TargetLinkTool );
