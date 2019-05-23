/**
 * Widget for CX translation issues
 *
 * @class
 * @extends OO.ui.TabPanelLayout
 * @constructor
 *
 * @param {string} name Unique name of tab panel
 * @param {mw.cx.dm.TranslationIssue} model
 * @param {Object} [config] Configuration options
 */
mw.cx.ui.TranslationIssueWidget = function TranslationIssueWidget( name, model, config ) {
	config = $.extend( {
		expanded: false,
		scrollable: false
	}, config );
	this.model = model;

	// Parent constructor
	mw.cx.ui.TranslationIssueWidget.super.call( this, name, config );

	// Initialization
	this.$element.addClass( 'cx-ui-translationIssue' );

	this.icon = new OO.ui.IconWidget( this.getIconConfig() );
	this.$title = $( '<h4>' )
		.addClass( 'cx-ui-translationIssue-title' )
		.text( this.model.getTitle() || mw.msg( 'cx-tools-linter-generic-title' ) );
	this.$message = $( '<p>' )
		.addClass( 'cx-ui-translationIssue-message' )
		.append( this.model.getMessageContent() );
	this.$message.find( 'a' ).prop( 'target', '_blank' );
	this.$foot = $( '<div>' ).addClass( 'cx-ui-translationIssue-foot' );

	this.$element.append( this.icon.$element, this.$title, this.$message, this.$foot );

	if ( this.model.getHelpLink() ) {
		this.helpLink = new OO.ui.ButtonWidget( {
			framed: false,
			label: mw.msg( 'cx-tools-linter-learn-more' ),
			flags: [ 'progressive' ],
			classes: [ 'cx-ui-translationIssue-help' ],
			href: this.model.getHelpLink(),
			target: '_blank'
		} );
		this.$foot.before( this.helpLink.$element );
	}

	if ( this.model.isResolvable() ) {
		this.resolveButton = new OO.ui.ButtonWidget( {
			framed: false,
			icon: this.model.getIcon(),
			label: this.model.getLabel() || mw.msg( 'cx-tools-linter-mark-as-resolved' )
		} );
		this.resolveButton.connect( this, { click: this.model.getAction() } );
		this.$foot.append( this.resolveButton.$element );
	}

	this.buildAdditionalButtons();
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TranslationIssueWidget, OO.ui.TabPanelLayout );

/* Methods */

mw.cx.ui.TranslationIssueWidget.prototype.getIconConfig = function () {
	var isError = this.model.getType() === 'error';

	return {
		flags: isError ? [ 'error' ] : [ 'warning' ],
		icon: isError ? 'error' : 'alert',
		classes: [ 'cx-ui-translationIssue-icon' ]
	};
};

mw.cx.ui.TranslationIssueWidget.prototype.buildAdditionalButtons = function () {
	var additionalButtons = this.model.getAdditionalButtons() || [];

	if ( !additionalButtons.length ) {
		return;
	}

	this.$foot.addClass( 'cx-ui-translationIssue-foot-additional' );

	additionalButtons.forEach( function ( buttonConfig ) {
		var button = new OO.ui.ButtonWidget( {
			framed: false,
			icon: buttonConfig.icon,
			label: buttonConfig.label
		} );

		button.connect( this, { click: buttonConfig.action } );

		this.$foot.prepend( button.$element );
	}.bind( this ) );
};
