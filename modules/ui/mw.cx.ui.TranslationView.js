/**
 * TranslationView
 *
 * @class
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.TranslationView = function ( config ) {
	this.header = new mw.cx.ui.Header( config );
	this.infobar = new mw.cx.ui.Infobar( this.config );
	this.sourceColumn = new mw.cx.ui.SourceColumn( config );
	this.targetColumn = new mw.cx.ui.TargetColumn( config );
	this.toolsColumn = new mw.cx.ui.ToolsColumn( config );
	this.translationHeader = new mw.cx.ui.TranslationHeader( config );
	// @var {mw.cx.ui.Categories}
	this.categoryUI = null;

	this.pageName = this.targetColumn.getTargetTitle();
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
		items: [ this.header, this.columns ],
		classes: [ 'cx-translation-view' ],
		scrollable: false,
		padded: false
	} );

	// Parent constructor
	mw.cx.ui.TranslationView.super.call( this, this.config );
};

/* Setup */

OO.inheritClass( mw.cx.ui.TranslationView, OO.ui.StackLayout );

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
		}
	}
};

mw.cx.ui.TranslationView.prototype.showCategories = function ( categoryUI ) {
	this.categoryUI = categoryUI;

	this.sourceColumn.showCategories( categoryUI );
	this.targetColumn.showCategories( categoryUI );
};

/**
 * Show a success/error message in the view
 * @param {string} type Message class.
 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
 * @param {string} details The details of error in HTML.
 */
mw.cx.ui.TranslationView.prototype.showMessage = function ( type, message, details ) {
	this.infobar.showMessage( type, message, details );
};

mw.cx.ui.TranslationView.prototype.setStatusMessage = function ( message ) {
	this.translationHeader.setStatusMessage( message );
};

mw.cx.ui.TranslationView.prototype.showConflictWarning = function ( translation ) {
	mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
		mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
	} );
};
