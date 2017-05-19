'use strict';
/**
 * TranslationView
 *
 * @class
 * @param {Object} [config] Configuration object
 */

mw.cx.ui.TranslationView = function ( config ) {
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		expanded: false,
		classes: [ 'cx-widget' ],
		scrollable: false,
		padded: false
	} );
	// Parent constructor
	mw.cx.ui.TranslationView.parent.call( this, this.config );
	this.translation = null;
	this.targetArticle = null;
	this.publishButton = null;
	this.init();
	this.listen();
};

/* Setup */

OO.inheritClass( mw.cx.ui.TranslationView, OO.ui.StackLayout );
OO.mixinClass( mw.cx.ui.TranslationUnit, OO.EventEmitter );

mw.cx.ui.TranslationView.prototype.init = function () {
	if ( mw.user.isAnon() ) {
		mw.hook( 'mw.cx.error.anonuser' ).fire();
	}

	this.render();
};

mw.cx.ui.TranslationView.prototype.render = function () {
	this.header = new mw.cx.ui.Header( this.config );
	this.preparePublishButton();

	this.columns = new mw.cx.ui.Columns( this.config );
	this.addItems( [ this.header, this.columns ] );
};

/**
 * Show the categories in translationView
 */
mw.cx.ui.TranslationView.prototype.showCategories = function () {
	this.columns.sourceColumn.showCategories();
	this.columns.translationColumn.showCategories();
};

/**
 * Event handlers
 */
mw.cx.ui.TranslationView.prototype.listen = function () {
	this.connect( this, {
		change: 'onChange'
	} );
	this.columns.translationColumn.connect( this, {
		titleChange: 'onTranslationTitleChange'
	} );
};
/**
 * Present the source article and section placeholders
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.TranslationView.prototype.setTranslation = function ( translation ) {
	this.translation = translation;
	this.columns.setTranslation( this.translation );
};

/**
 * Present the source article and section placeholders
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.TranslationView.prototype.loadTranslation = function () {
	this.columns.sourceColumn.removeLoadingIndicator();
	this.prepareTranslationUnitUIs();
};

mw.cx.ui.TranslationView.prototype.prepareTranslationUnitUIs = function () {
	var i, translationUnits, translationUnit, toolFactory;

	toolFactory = mw.cx.tools.translationToolFactory;

	translationUnits = this.translation.getTranslationUnits();
	for ( i = 0; i < translationUnits.length; i++ ) {
		translationUnit = mw.cx.ui.translationUnitFactory.create(
			translationUnits[ i ].constructor.static.name,
			translationUnits[ i ],
			toolFactory,
			this.config
		);

		// Initialize the translation unit
		translationUnit.init();

		// Make the sections visible
		this.columns.sourceColumn.add( translationUnit.getSourceSection(), i );
		this.columns.translationColumn.add( translationUnit.getTranslationSection(), i );
		// Let the unit know it can align the sections
		translationUnit.emit( 'resize' );
		this.setTranslationUnitListeners( translationUnit );
	}
};

/**
 * @private
 * @param {mw.cx.dm.TranslationUnit} unit
 */
mw.cx.ui.TranslationView.prototype.setTranslationUnitListeners = function ( unit ) {
	unit.connect( this, {
		activate: 'setActiveTranslationUnit',
		change: 'onChange',
		showTool: 'showTranslationTool',
		subunit: 'setTranslationUnitListeners'
	} );
};

/**
 * @param {mw.cx.dm.TranslationUnit} unit
 */
mw.cx.ui.TranslationView.prototype.setActiveTranslationUnit = function ( unit ) {
	if ( unit !== this.activeTranslationUnit ) {
		this.columns.ToolsColumn.hideAllTools();
		this.activeTranslationUnit = unit;
	}
};

/**
 * @private
 * @param {mw.cx.tools.TranslationTool} tool
 * @param {Selection} [data]
 */
mw.cx.ui.TranslationView.prototype.showTranslationTool = function ( tool, data ) {
	// XXX
	if ( data && tool.onSelect ) {
		tool.onSelect( data );
	}
	this.columns.ToolsColumn.showTool( tool );
};

mw.cx.ui.TranslationView.prototype.preparePublishButton = function () {
	this.setupPublishButton();
	this.attachPublishButton();
};

mw.cx.ui.TranslationView.prototype.setupPublishButton = function () {
	var self = this;

	this.publishButton = new OO.ui.ButtonWidget( {
		disabled: true,
		flags: [ 'progressive', 'primary' ],
		classes: [ 'cx-header__publish-button' ],
		label: mw.msg( 'cx-publish-button' )
	} );
	this.publishButton.connect( this, {
		click: 'publish'
	} );
	mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
		self.publishButton.setDisabled( weights.any === 0 );
	} );
};

/**
 * Call this whenever something changes in the translation that requires saving.
 */
mw.cx.ui.TranslationView.prototype.onChange = function () {
	this.publishButton.setDisabled( false );
};

/**
 * Add the publish button to the user interface.
 */
mw.cx.ui.TranslationView.prototype.attachPublishButton = function () {
	this.header.$headerBar.append( new OO.ui.Element( {
		classes: [ 'cx-header__publish' ],
		$content: this.publishButton.$element
	} ).$element );
};

/**
 * Publish the translation
 */
mw.cx.ui.TranslationView.prototype.publish = function () {
	// Disable the trigger button
	this.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button-publishing' ) );
	if ( !this.targetArticle ) {
		this.targetArticle = new mw.cx.TargetArticle( this.translation, this, this.config );
		this.targetArticle.connect( this, {
			publishSuccess: 'onPublishSuccess'
		} );
	}
	this.targetArticle.publish().always( function () {
		this.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button' ) );
	}.bind( this ) );
};

/**
 * Translation title change handler
 * @param {string} changedTitle The new title
 */
mw.cx.ui.TranslationView.prototype.onTranslationTitleChange = function ( changedTitle ) {
	if ( !this.translation ) {
		mw.log( '[CX] Translation not ready yet' );
		return;
	}
	this.translation.setTargetTitle( changedTitle );
	// Align translation titles when it get changed/being edited
	mw.cx.alignSections(
		this.columns.sourceColumn.titleWidget.$element,
		this.columns.translationColumn.titleWidget.$element
	);
	// Translation title change is a change trigger for translation.
	this.onChange();
};

mw.cx.ui.TranslationView.prototype.onPublishSuccess = function () {
	this.showMessage(
		'success',
		mw.message( 'cx-publish-page-success',
		$( '<a>' ).attr( {
			href: mw.util.getUrl( this.translation.targetTitle ),
			target: '_blank'
		} ).text( this.translation.targetTitle )[ 0 ].outerHTML
	) );
	// Event logging
	mw.hook( 'mw.cx.translation.published' ).fire(
		this.translation.sourceLanguage,
		this.translation.targetLanguage,
		this.translation.sourceTitle,
		this.translation.targetTitle
	);
};

/**
 * Show a success/error message in the view
 * @param {string} type Message class.
 * @param {mediawiki.Message|string} message Message objects are parsed, strings are plain text.
 * @param {string} details The details of error in HTML.
 */
mw.cx.ui.TranslationView.prototype.showMessage = function ( type, message, details ) {
	this.header.infobar.showMessage( type, message, details );
};

mw.cx.ui.TranslationView.prototype.setStatusMessage = function ( message ) {
	this.header.setStatusMessage( message );
};

mw.cx.ui.TranslationView.prototype.showConflictWarning = function ( translation ) {
	mw.loader.using( 'ext.cx.translation.conflict' ).then( function () {
		mw.hook( 'mw.cx.translation.conflict' ).fire( translation );
	} );
};
