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
	selection = selectionObj.toString();
	if ( selection && selection.length < 1000 ) {
		this.selectionObj = selectionObj;
		this.selection = selection;
	}
	mw.cx.selection.save( 'translation', this.selectionObj );
	this.pageInfo = null;
	this.refresh();
};

/**
 * @inheritDoc
 */
mw.cx.tools.TargetLinkTool.prototype.getActions = function () {
	this.actions = [];

	if ( this.selection ) {
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
	} else if ( this.model.isTargetExist() ) {
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
	} else {
		this.makeRedLinkButton = new OO.ui.ButtonWidget( {
			label: mw.msg( 'cx-tools-missing-link-mark-link' ),
			icon: 'flag',
			framed: false,
			classes: [ 'cx-tools-link-mark-red' ]
		} );
		this.actions.push( this.makeRedLinkButton );
	}

	return this.actions;
};

mw.cx.tools.TargetLinkTool.prototype.getContent = function () {
	var panel, $linkInfo;

	if ( this.selection ) {
		$linkInfo = this.buildLinkInfo(
			this.model.config.targetLanguage,
			this.pageInfo ? this.pageInfo.title : this.selection,
			this.pageInfo && this.pageInfo.description
		);

		if ( !this.pageInfo ) {
			this.getPageInfo( this.model.config.targetLanguage, this.selection ).then( function() {
				this.refresh();
			}.bind( this ) );
		}
	} else if ( this.model.isTargetExist() ) {
		this.targetTitle = this.model.getTargetTitle();
		$linkInfo = this.buildLinkInfo(
			this.model.config.targetLanguage,
			this.pageInfo ? this.pageInfo.title : this.targetTitle,
			this.pageInfo && this.pageInfo.description
		);
		if ( !this.pageInfo ) {
			this.getPageInfo( this.model.config.targetLanguage, this.targetTitle ).then( function() {
				this.refresh();
			}.bind( this ) );
		}
	} else {
		$linkInfo = $( '<div>' ).text( mw.msg( 'cx-tools-missing-link-text' ) );
	}

	panel = new OO.ui.PanelLayout( {
		expanded: false,
		framed: false,
		padded: false,
		content: [ $linkInfo ]
	} );

	return panel.$element;
};

/**
 * Build the link title, description for the tool card
 * @param {string} language
 * @param {string} title
 * @param {string} [description]
 * @return {jQuery}
 */
mw.cx.tools.TargetLinkTool.prototype.buildLinkInfo = function ( language, title, description ) {
	var $linkTitle, $linkDesc;

	$linkTitle = $( '<a>' )
		.addClass( 'cx-tools-link-text' )
		.text( title )
		.prop( {
			target: '_blank',
			title: title,
			href: this.model.config.siteMapper.getPageUrl( language, title )
		} );

	$linkDesc = $( '<div>' )
		.text( description || '' )
		.addClass( 'cx-tools-link-desc' );
	return $( '<div>' )
		.addClass( 'cx-tools-link-info' )
		.append( $linkTitle, $linkDesc );
};

/**
 * Get the page info for the given title in given language
 * @param {string} language
 * @param {string} title
 * @return {jQuery.Promise}
 */
mw.cx.tools.TargetLinkTool.prototype.getPageInfo = function ( language, title ) {
	this.pageInfo = null;

	return this.model.requestManager.getLinkInfo( language, title ).then( function( pageInfo ) {
		this.pageInfo = pageInfo;
	}.bind( this ) );
};

/**
 * @inheritdoc
 */
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

mw.cx.tools.TargetLinkTool.prototype.addLink = function () {
	this.emit( 'addlink', this.selectionObj, this.pageInfo.title );
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.TargetLinkTool );
