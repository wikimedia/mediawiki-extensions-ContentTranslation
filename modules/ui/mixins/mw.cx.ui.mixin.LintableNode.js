/**
 * Context item for CX linting.
 *
 * @class
 * @abstract
 * @extends ve.ui.LinearContextItem
 */
mw.cx.ui.mixin.LintableNode = function MwCxUiMixinLintableNode() {
	this.node = this.getLintableNode();
	if ( !this.node ) {
		// This can happen during unit tests that runs on non CX contexts,
		// but this context item is registered in ve.ui.contextItemFactory
		mw.log( '[CX] Warning: Context is not a CX section or title' );
		return;
	}

	this.numberOfIssues = OO.getProp( this.node, 'lintResults', 'length' );
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

	this.icon.$element.prop( 'tabindex', 0 );
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

OO.inheritClass( mw.cx.ui.mixin.LintableNode, ve.ui.LinearContextItem );

/* Static properties */

mw.cx.ui.mixin.LintableNode.static.label = OO.ui.deferMsg( 'cx-tools-linter-issues' );

/* Methods */

/**
 * Get node that has the array of lint issues, which will be displayed by this UI element.
 *
 * @method
 * @abstract
 * @return {ve.dm.CXLintableNode}
 */
mw.cx.ui.mixin.LintableNode.prototype.getLintableNode = null;

mw.cx.ui.mixin.LintableNode.prototype.registerClasses = function ( $element, $head, $body ) {
	$element.addClass( 'mw-cx-ui-lintableNode' );
	$head.addClass( 'mw-cx-ui-lintableNode-head' );
	$body.addClass( 'mw-cx-ui-lintableNode-body' );
};

/**
 * Render the body.
 *
 * @localdoc Renders the result of #getDescription, override for custom body rendering
 * @return {Array}
 */
mw.cx.ui.mixin.LintableNode.prototype.getBody = function () {
	var issues;

	if ( !this.node.lintResults ) {
		return;
	}

	issues = this.node.lintResults.map( function ( model, index ) {
		return new mw.cx.ui.TranslationIssueWidget( index, model );
	} );

	this.issuesLayout
		.toggleMenu( false ) // IndexLayout offers config option showMenu, but does not respect setting it to false
		.addTabPanels( issues );

	return [ this.errorsCount.$element, this.warningsCount.$element, this.issuesLayout.$element ];
};

mw.cx.ui.mixin.LintableNode.prototype.showCollapsed = function () {
	this.actionButtons.clearItems().addItems( [ this.viewDetailsButton ] );

	this.icon.toggle( false );
	this.issuesLayout.toggle( false );
	this.warningsCount.toggle( this.numberOfWarnings > 0 );
	this.errorsCount.toggle( this.numberOfErrors > 0 );
};

mw.cx.ui.mixin.LintableNode.prototype.showDetails = function () {
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

mw.cx.ui.mixin.LintableNode.prototype.nextIssue = function () {
	if ( ++this.currentIssue === this.numberOfIssues ) {
		this.nextButton.setDisabled( true );
	}

	this.previousButton.setDisabled( false );
	this.openCurrentPanel();
};

mw.cx.ui.mixin.LintableNode.prototype.previousIssue = function () {
	if ( --this.currentIssue === 1 ) {
		this.previousButton.setDisabled( true );
	}

	this.nextButton.setDisabled( false );
	this.openCurrentPanel();
};

mw.cx.ui.mixin.LintableNode.prototype.openCurrentPanel = function () {
	this.issuesLayout.setTabPanel( this.currentIssue - 1 );
	this.numberOfIssuesLabel.setLabel(
		mw.msg( 'cx-tools-linter-issues-count', this.currentIssue, this.numberOfIssues )
	);
};

/**
 * @param {string} type
 * @return {Number} Number of issues of given type (warnings or errors)
 */
mw.cx.ui.mixin.LintableNode.prototype.getIssueCount = function ( type ) {
	var lintResults = this.node.lintResults;

	return !lintResults ? 0 : lintResults.reduce( function ( accumulator, currentValue ) {
		return accumulator + ( currentValue && currentValue.type === type ? 1 : 0 );
	}, 0 );
};
