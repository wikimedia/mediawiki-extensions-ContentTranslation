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

	this.icon = new OO.ui.IconWidget( {
		icon: this.getIconFromModel(),
		classes: [ 'cx-ui-translationIssue-icon' ]
	} );
	this.$title = $( '<h4>' )
		.addClass( 'cx-ui-translationIssue-title' )
		.text( this.model.getTitle() || mw.msg( 'cx-tools-linter-generic-title' ) );
	this.$message = $( '<p>' )
		.addClass( 'cx-ui-translationIssue-message' )
		.append( this.model.getMessageContent() );
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
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TranslationIssueWidget, OO.ui.TabPanelLayout );

/* Methods */

mw.cx.ui.TranslationIssueWidget.prototype.getIconFromModel = function () {
	return this.model.getType() === 'error' ? 'clear' : 'alert';
};
