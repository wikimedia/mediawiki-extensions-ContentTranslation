/**
 * TranslationView
 *
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.TranslationView = function ( config ) {
	this.infobar = new mw.cx.ui.Infobar( config );
	this.sourceColumn = new mw.cx.ui.SourceColumn( config.siteMapper, config.sourceLanguage, config.sourceTitle );
	this.targetColumn = new mw.cx.ui.TargetColumn( config.siteMapper, config.targetLanguage, config.targetTitle );
	this.toolsColumn = new mw.cx.ui.ToolsColumn( config );
	this.translationHeader = new mw.cx.ui.TranslationHeader( config );
	this.titleValidationTool = null;
	// @var {mw.cx.ui.Categories}
	this.categoryUI = null;

	this.pageName = this.targetColumn.getTitle();
	this.contentContainer = new OO.ui.HorizontalLayout( $.extend( {}, config, {
		continuous: true,
		expanded: true,
		classes: [ 'cx-content-container' ],
		items: [ this.sourceColumn, this.targetColumn ]
	} ) );

	this.translationViewContainer = new OO.ui.StackLayout( $.extend( {}, config, {
		continuous: true,
		expanded: false,
		classes: [ 'cx-translation-view-container' ],
		scrollable: false,
		padded: false,
		items: [ this.translationHeader, this.infobar, this.contentContainer ]
	} ) );

	this.columns = new OO.ui.HorizontalLayout( $.extend( {}, config, {
		continuous: true,
		expanded: true,
		classes: [ 'cx-widget__columns' ],
		items: [ this.translationViewContainer, this.toolsColumn ]
	} ) );

	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		expanded: false,
		items: [ this.columns ],
		classes: [ 'cx-translation-view' ],
		scrollable: false,
		padded: false
	} );

	// Parent constructor
	mw.cx.ui.TranslationView.super.call( this, this.config );

	// Events
	this.targetColumn.titleWidget.connect( this, {
		focus: 'onFocus',
		blur: 'onBlur'
	} );
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TranslationView, OO.ui.StackLayout );

/* Events */

/**
 * @event hasTranslationIssues
 *
 * @param {boolean} hasErrors True if any of the translation issues is of type 'error'
 */

/* Static methods */

/**
 * Align a source+target section pair by adjusting their paddingTop
 *
 * @param {number} sourceOffsetTop Pixel offset of the source section
 * @param {number} targetOffsetTop Pixel offset of the target section
 * @param {number} sectionNumber The number in the source/target section id attribute
 */
mw.cx.ui.TranslationView.static.alignSectionPair = function ( sourceOffsetTop, targetOffsetTop, sectionNumber ) {
	var offsetTop, viewNode,
		sourceNode = document.getElementById( 'cxSourceSection' + sectionNumber ),
		targetNode = document.getElementById( 'cxTargetSection' + sectionNumber );

	function isSubclass( x, y ) {
		return x && ( x.constructor === y || x.constructor instanceof y );
	}
	if ( !sourceNode || !targetNode ) {
		return;
	}
	viewNode = $.data( targetNode, 'view' );
	sourceNode.style.marginTop = '';
	targetNode.style.marginTop = '';
	// Reset heights before we do calculations.
	sourceNode.style.height = '';
	targetNode.style.height = '';
	offsetTop = Math.max(
		sourceOffsetTop + sourceNode.offsetTop,
		targetOffsetTop + targetNode.offsetTop
	);
	sourceNode.style.marginTop = ( offsetTop - sourceOffsetTop - sourceNode.offsetTop ) + 'px';
	targetNode.style.marginTop = ( offsetTop - targetOffsetTop - targetNode.offsetTop ) + 'px';
	if ( isSubclass( viewNode, ve.ce.CXPlaceholderNode ) || isSubclass( viewNode, ve.ce.CXSectionNode ) ) {
		if ( sourceNode.offsetHeight > targetNode.offsetHeight ) {
			targetNode.style.height = sourceNode.offsetHeight + 'px';
		} else {
			sourceNode.style.height = targetNode.offsetHeight + 'px';
		}
	}
};

/* Methods */

mw.cx.ui.TranslationView.prototype.showCategories = function ( categoryUI ) {
	this.categoryUI = categoryUI;

	this.sourceColumn.setCategoryCount( categoryUI.getSourceCategoryCount() );
	this.sourceColumn.setCategoryListing( categoryUI.getSourceCategoryListing() );
	this.targetColumn.setCategoryCount( categoryUI.getTargetCategoryCount() );
	this.targetColumn.setCategoryListing( categoryUI.getTargetCategoryListing() );
};

/**
 * Show a success/error message in the view
 *
 * @param {string} type Message class.
 * @param {mw.Message|string} message Message objects are parsed, strings are plain text.
 * @param {mw.Message|string} details The details of error in HTML.
 * @param {Mixed} data Element data.
 * @param {OO.ui.ButtonWidget[]} buttons Array of additional buttons to add to infobar.
 */
mw.cx.ui.TranslationView.prototype.showMessage = function ( type, message, details, data, buttons ) {
	this.infobar.showMessage( type, message, details, data, buttons );
};

/**
 * @param {string} message Message to display inside infobar
 * @param {string} issueName Name of the issue to be displayed when infobar message is closed
 * @param {string} type 'error' or 'warning'
 */
mw.cx.ui.TranslationView.prototype.showViewIssuesMessage = function ( message, issueName, type ) {
	var button = new OO.ui.ButtonWidget( {
		framed: false,
		flags: [ 'progressive' ],
		label: mw.msg( 'cx-infobar-view-issues' )
	} );

	button.connect( this, { click: [ 'displayIssueDetails', issueName ] } );

	this.showMessage( type, message, null, issueName, [ button ] );
};

/**
 * @param {string} issueName Name of the issue to be displayed when infobar message is closed
 */
mw.cx.ui.TranslationView.prototype.displayIssueDetails = function ( issueName ) {
	var issueCard = this.toolsColumn.issueCard;

	if ( !issueCard ) {
		throw new Error( 'Issue card is not initialized' );
	}

	issueCard.openIssueByName( issueName );
	this.clearMessages();
};

/**
 * @param {Mixed} messageData
 */
mw.cx.ui.TranslationView.prototype.removeMessage = function ( messageData ) {
	this.infobar.removeMessage( messageData );
};

/**
 * Hide all infobar messages.
 */
mw.cx.ui.TranslationView.prototype.clearMessages = function () {
	this.infobar.clearMessages();
};

mw.cx.ui.TranslationView.prototype.setStatusMessage = function ( message ) {
	this.translationHeader.setStatusMessage( message );
};

mw.cx.ui.TranslationView.prototype.showConflictWarning = function ( translation ) {
	mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
		mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
	} );
};

/**
 * @param {Mixed[]} nodesWithIssues
 * @param {boolean} hasErrors
 * @fires hasTranslationIssues
 */
mw.cx.ui.TranslationView.prototype.onTranslationIssues = function ( nodesWithIssues, hasErrors ) {
	if ( hasErrors ) {
		// TODO: Do this in target#onTranslationIssues
		ve.init.target.publishButton.setDisabled( true );
	}

	this.emit( 'hasTranslationIssues', hasErrors );
	this.toolsColumn.showIssues( nodesWithIssues );
};

/**
 * @param {Mixed[]} nodesWithIssues
 * @fires hasTranslationIssues
 */
mw.cx.ui.TranslationView.prototype.onIssuesResolved = function ( nodesWithIssues ) {
	if ( nodesWithIssues.length === 0 ) {
		this.toolsColumn.hideIssues();
		this.emit( 'hasTranslationIssues', false );
		return;
	}

	this.toolsColumn.showIssues( nodesWithIssues );
};

/**
 * Set the height for both title widgets to whichever
 * is the bigger height between source and target titles.
 */
mw.cx.ui.TranslationView.prototype.alignTitles = function () {
	var height,
		$sourceTitleWidget = this.sourceColumn.getTitleWidget().$element,
		$targetTitleWidget = this.targetColumn.getTitleWidget().$element;

	$sourceTitleWidget.css( 'min-height', '' );
	$targetTitleWidget.css( 'min-height', '' );

	height = Math.max(
		$sourceTitleWidget.outerHeight(),
		$targetTitleWidget.outerHeight()
	);

	$sourceTitleWidget.css( 'min-height', height );
	$targetTitleWidget.css( 'min-height', height );
};

mw.cx.ui.TranslationView.prototype.onFocus = function () {
	this.toolsColumn.toolContainer.$element.addClass( 'cx-column-tools-container--contextual' );
};

mw.cx.ui.TranslationView.prototype.onBlur = function () {
	this.toolsColumn.toolContainer.$element.removeClass( 'cx-column-tools-container--contextual' );
};
