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
		return;
	}

	if ( this.config.campaign ) {
		mw.hook( 'mw.cx.cta.accept' ).fire( this.config.campaign, this.config.sourceLanguage, this.config.targetLanguage );
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
	var i, j, translationUnits, subTranslationUnits, subTranslationUnit, translationUnit;
	translationUnits = this.translation.getTranslationUnits();
	for ( i = 0; i < translationUnits.length; i++ ) {
		translationUnit = mw.cx.ui.translationUnitFactory.create(
			translationUnits[ i ].constructor.static.name, translationUnits[ i ], this, this.config
		);
		translationUnit.render( i );
		subTranslationUnits = translationUnits[ i ].getTranslationUnits();
		for ( j = 0; j < subTranslationUnits.length; j++ ) {
			subTranslationUnit = mw.cx.ui.translationUnitFactory.create(
				subTranslationUnits[ j ].constructor.static.name,
				subTranslationUnits[ j ], this, this.config
			);
			subTranslationUnit.setParentTranslationUnit( translationUnit );
		}
	}
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
		click: 'onPublishButtonClick'
	} );
	mw.hook( 'mw.cx.progress' ).add( function ( weights ) {
		self.publishButton.setDisabled( weights.any === 0 );
	} );
};

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

mw.cx.ui.TranslationView.prototype.onPublishButtonClick = function () {
	this.publish();
};

/**
 * Publish the translation
 */
mw.cx.ui.TranslationView.prototype.publish = function () {
	var publisher, self = this;

	// Disable the trigger button
	this.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button-publishing' ) );
	publisher = new mw.cx.Publish( this.publishButton, this.config.siteMapper );
	publisher.publish().always( function () {
		self.publishButton.setDisabled( true ).setLabel( mw.msg( 'cx-publish-button' ) );
	} );
};

/**
 * Translation title change handler
 * @param {string} changedTitle The new title
 */
mw.cx.ui.TranslationView.prototype.onTranslationTitleChange = function ( changedTitle ) {
	this.translation.setTargetTitle( changedTitle );
	// Align translation titles when it get changed/being edited
	mw.cx.alignSections(
		this.columns.sourceColumn.titleWidget.$element,
		this.columns.translationColumn.titleWidget.$element
	);
	// Translation title change is a change trigger for translation.
	this.emit( 'change' );
};
