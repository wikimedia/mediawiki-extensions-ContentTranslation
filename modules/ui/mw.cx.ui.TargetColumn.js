/**
 * Target column
 *
 * @class
 * @extends OO.ui.StackLayout
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.TargetColumn = function ( config ) {
	var languageLabel, subHeading;

	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column', 'cx-column--translation' ],
		expanded: false,
		scrollable: false
	} );
	// Parent constructor
	mw.cx.ui.TargetColumn.super.call( this, this.config );
	this.siteMapper = config.siteMapper;
	this.translation = null;
	this.titleWidget = null;
	this.direction = $.uls.data.getDir( this.config.targetLanguage );
	this.$element.prop( {
		lang: this.config.targetLanguage,
		dir: this.direction
	} );
	this.titleWidget = new mw.cx.widgets.PageTitleWidget( {
		value: this.config.targetTitle,
		editable: true
	} );

	this.$element.append( this.titleWidget.$element );
	// Propage title change events
	this.titleWidget.connect( this, { change: [ 'emit', 'titleChange' ] } );

	languageLabel = new OO.ui.LabelWidget( {
		label: $.uls.data.getAutonym( this.config.targetLanguage ),
		dir: this.direction,
		classes: [ 'cx-column-language-label' ]
	} );

	// TODO: remove the unnecessary HorizontalLayout
	subHeading = new OO.ui.HorizontalLayout( {
		classes: [ 'cx-column-sub-heading' ],
		items: [ languageLabel ]
	} );
	this.addItems( [ subHeading ] );

	this.$content = $( '<div>' ).addClass( 'cx-column__content' );
	this.$element.append( this.$content );

	mw.hook( 'mw.cx.translation.ready' ).fire();
};

/* Inheritance */

OO.inheritClass( mw.cx.ui.TargetColumn, OO.ui.StackLayout );

/**
 * Attach the target surface's element to the DOM
 *
 * @param {ve.ui.CXTargetSurface} surface The target surface
 */
mw.cx.ui.TargetColumn.prototype.attachSurface = function ( surface ) {
	this.$content.empty().append( surface.$element );
};

/**
 * Set the translation data model
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.TargetColumn.prototype.setTranslation = function ( translation ) {
	this.translation = translation;
	this.setTargetTitle( this.translation.getTargetTitle() );
};

mw.cx.ui.TargetColumn.prototype.setTargetTitle = function ( title ) {
	this.titleWidget.setValue( title );
};

mw.cx.ui.TargetColumn.prototype.getTargetTitle = function () {
	return this.titleWidget.getValue();
};

/**
 * Show target page categories
 *
 * @param {mw.cx.ui.Categories} categoryUI
 */
mw.cx.ui.TargetColumn.prototype.showCategories = function ( categoryUI ) {
	this.$content.before( categoryUI.getTargetCategoryCount() );
	this.$content.after( categoryUI.getTargetCategoryListing() );
};
