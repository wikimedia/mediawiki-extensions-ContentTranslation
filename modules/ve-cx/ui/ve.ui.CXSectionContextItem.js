/**
 * Context item for a CX sections.
 *
 * @class
 * @extends ve.ui.LinearContextItem
 *
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXSectionContextItem = function VeUiCXSectionContextItem() {
	// Parent constructor
	ve.ui.CXSectionContextItem.super.apply( this, arguments );

	// Initialization
	this.$element.addClass( 've-ui-CXSectionContextItem' );

	this.section = mw.cx.getParentSectionForSelection(
		this.context.getSurface(),
		this.getFragment().getSelection()
	);

	if ( !this.section ) {
		// This can happen during unit tests that runs on non CX contexts,
		// but this context item is registered in ve.ui.contextItemFactory
		mw.log( '[CX] Warning: Context is not a CX Section' );
		return;
	}

	this.numberOfIssues = this.section.lintResults && this.section.lintResults.length;
	this.numberOfWarnings = this.getIssueCount( 'warning' );
	this.numberOfErrors = this.getIssueCount( 'error' );
	this.currentIssue = 1;

	this.viewDetailsButton = new OO.ui.ButtonWidget( {
		framed: false,
		label: mw.msg( 'cx-tools-linter-view-details' ),
		classes: [ 'cx-tools-linter-view-details' ],
		flags: [ 'progressive' ]
	} );
	this.numberOfIssuesLabel = new OO.ui.LabelWidget( {
		label: mw.msg( 'cx-tools-linter-issues-count', 1, this.numberOfIssues )
	} );
	this.previousButton = new OO.ui.ButtonWidget( {
		framed: false,
		disabled: true,
		icon: 'previous'
	} );
	this.nextButton = new OO.ui.ButtonWidget( {
		framed: false,
		icon: 'next'
	} );

	this.issuesLayout = new OO.ui.IndexLayout( {
		expanded: false,
		scrollable: false,
		autoFocus: false,
		classes: [ 'cx-tools-linter-issues-layout' ]
	} );
	this.warningsCount = new OO.ui.ButtonWidget( {
		framed: false,
		disabled: true,
		classes: [ 'cx-tools-linter-warnings-count' ],
		label: mw.msg( 'cx-tools-linter-warnings-count', this.numberOfWarnings )
	} );
	this.errorsCount = new OO.ui.ButtonWidget( {
		framed: false,
		disabled: true,
		classes: [ 'cx-tools-linter-errors-count' ],
		label: mw.msg( 'cx-tools-linter-errors-count', this.numberOfErrors )
	} );

	// Events
	this.viewDetailsButton.connect( this, {
		click: 'showDetails'
	} );
	this.previousButton.connect( this, {
		click: 'previousIssue'
	} );
	this.nextButton.connect( this, {
		click: 'nextIssue'
	} );

	this.icon.$element.attr( 'tabindex', 0 );
	this.icon.$element.on( {
		click: this.showCollapsed.bind( this ),
		keydown: function ( e ) {
			if ( e.which === OO.ui.Keys.SPACE || e.which === OO.ui.Keys.ENTER ) {
				$( this ).click();
				e.preventDefault();
			}
		}
	} );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXSectionContextItem, ve.ui.LinearContextItem );

/* Static Properties */

ve.ui.CXSectionContextItem.static.name = 'cxsection';

ve.ui.CXSectionContextItem.static.icon = 'close';

ve.ui.CXSectionContextItem.static.label = OO.ui.deferMsg( 'cx-tools-linter-issues' );

ve.ui.CXSectionContextItem.static.deletable = false;

ve.ui.CXSectionContextItem.static.editable = false;

/* Static Methods */

ve.ui.CXSectionContextItem.static.isCompatibleWith = function ( model ) {
	return ve.isInstanceOfAny( model, [ ve.dm.Node, ve.dm.Annotation ] ) && model.isEditable();
};

/* Methods */

/**
 * Render the body.
 *
 * @localdoc Renders the result of #getDescription, override for custom body rendering
 */
ve.ui.CXSectionContextItem.prototype.renderBody = function () {
	var issues;

	if ( !this.section.lintResults ) {
		return;
	}

	issues = this.section.lintResults.map( function ( model, index ) {
		return new mw.cx.ui.TranslationIssueWidget( index, model );
	} );

	this.issuesLayout
		.toggleMenu( false ) // IndexLayout offers config option showMenu, but does not respect setting it to false
		.addTabPanels( issues );

	this.$body.append(
		this.errorsCount.$element, this.warningsCount.$element, this.issuesLayout.$element
	);
};

ve.ui.CXSectionContextItem.prototype.showCollapsed = function () {
	this.actionButtons.clearItems().addItems( [ this.viewDetailsButton ] );

	this.icon.toggle( false );
	this.issuesLayout.toggle( false );
	this.warningsCount.toggle( this.numberOfWarnings > 0 );
	this.errorsCount.toggle( this.numberOfErrors > 0 );
};

ve.ui.CXSectionContextItem.prototype.showDetails = function () {
	this.actionButtons.clearItems();
	if ( this.numberOfIssues > 1 ) {
		this.actionButtons.addItems( [
			this.numberOfIssuesLabel, this.previousButton, this.nextButton
		] );
	}

	this.icon.toggle( true );
	this.issuesLayout.toggle( true );
	this.warningsCount.toggle( false );
	this.errorsCount.toggle( false );
};

/**
 * @inheritdoc
 */
ve.ui.CXSectionContextItem.prototype.setup = function () {
	if ( this.numberOfIssues ) {
		this.showCollapsed();
		this.renderBody();
	} else {
		this.$element.remove();
	}

	return this;
};

ve.ui.CXSectionContextItem.prototype.nextIssue = function () {
	if ( ++this.currentIssue === this.numberOfIssues ) {
		this.nextButton.setDisabled( true );
	}

	this.previousButton.setDisabled( false );
	this.openCurrentPanel();
};

ve.ui.CXSectionContextItem.prototype.previousIssue = function () {
	if ( --this.currentIssue === 1 ) {
		this.previousButton.setDisabled( true );
	}

	this.nextButton.setDisabled( false );
	this.openCurrentPanel();
};

ve.ui.CXSectionContextItem.prototype.openCurrentPanel = function () {
	this.issuesLayout.setTabPanel( this.currentIssue - 1 );
	this.numberOfIssuesLabel.setLabel(
		mw.msg( 'cx-tools-linter-issues-count', this.currentIssue, this.numberOfIssues )
	);
};

/**
 * @param {string} type
 * @return {Number} Number of issues of given type (warnings or errors)
 */
ve.ui.CXSectionContextItem.prototype.getIssueCount = function ( type ) {
	var lintResults = this.section.lintResults;

	return !lintResults ? 0 : lintResults.reduce( function ( accumulator, currentValue ) {
		return accumulator + ( currentValue && currentValue.type === type ? 1 : 0 );
	}, 0 );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXSectionContextItem );
