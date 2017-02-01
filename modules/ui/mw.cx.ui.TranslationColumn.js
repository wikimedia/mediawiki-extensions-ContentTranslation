'use strict';

/**
 * Translation column
 *
 * @class
 * @param {mw.cx.dm.Translation} translation
 * @param {Object} [config] Configuration object
 */
mw.cx.ui.TranslationColumn = function ( translation, config ) {
	// Configuration initialization
	this.config = $.extend( {}, config, {
		continuous: true,
		classes: [ 'cx-column', 'cx-column--translation' ],
		expanded: false,
		scrollable: false
	} );
	// Parent constructor
	mw.cx.ui.TranslationColumn.parent.call( this, this.config );
	this.siteMapper = config.siteMapper;
	this.translation = translation;
	this.titleWidget = null;
	this.init();
	this.translation.connect( this, {
		sourcePageReady: 'onSourcePageReady'
	} );
};
/* Setup */

OO.inheritClass( mw.cx.ui.TranslationColumn, OO.ui.StackLayout );

mw.cx.ui.TranslationColumn.prototype.init = function () {
	this.direction = $.uls.data.getDir( this.config.targetLanguage );
	this.$element.prop( {
		lang: this.config.targetLanguage,
		dir: this.direction
	} );
	this.render();
};

mw.cx.ui.TranslationColumn.prototype.render = function () {
	var $languageLabel, userLanguage, $subHeading;

	this.titleWidget = new mw.cx.widgets.PageTitleWidget( {
		value: this.config.targetTitle,
		editable: true
	} );

	this.$element.append( this.titleWidget.$element );
	// Propage title change events
	this.titleWidget.on( 'change', function() {
		this.emit( 'titleChange', this.titleWidget.getValue() );
	}.bind( this ) );

	$languageLabel = $( '<span>' )
		.prop( {
			lang: this.config.targetLanguage,
			dir: this.direction
		} )
		.addClass( 'cx-column__language-label' )
		.text( $.uls.data.getAutonym( this.config.targetLanguage ) );

	// This is UI, and the UI language is not necessarily
	// the same as the target language
	userLanguage = mw.config.get( 'wgUserLanguage' );
	$subHeading = $( '<div>' )
		.prop( {
			lang: userLanguage,
			dir: $.uls.data.getDir( userLanguage )
		} )
		.addClass( 'cx-column__sub-heading' )
		.append( $languageLabel );

	this.$element.append( $subHeading );

	this.$content = $( '<div>' ).addClass( 'cx-column__content' );
	this.$element.append( this.$content );

	mw.hook( 'mw.cx.translation.ready' ).fire();
};

mw.cx.ui.TranslationColumn.prototype.onSourcePageReady = function() {
	this.showCategories();
};

mw.cx.ui.TranslationColumn.prototype.showCategories = function () {
	var categoryUI = new mw.cx.ui.Categories( {
		page: this.translation.targetPage,
		editable: true
	} );
	this.$content.before( categoryUI.getCategoryCount().$element );
	this.$content.after( categoryUI.getCategoryListing().$element );
	categoryUI.listen();
};

/**
 * @param {jQuery} $translationUnit
 * @param {integer} position
 */
mw.cx.ui.TranslationColumn.prototype.add = function ( $translationUnit, position ) {
	this.insertAt( position, $translationUnit );
};

/**
 * @param {integer} index
 * @param {jQuery} $element
 */
mw.cx.ui.TranslationColumn.prototype.insertAt = function ( index, $element ) {
	var lastIndex = this.$content.children().size();
	if ( index < 0 ) {
		index = Math.max( 0, lastIndex + 1 + index );
	}
	this.$content.append( $element );
	if ( index < lastIndex ) {
		this.$content.children().eq( index ).before( this.$content.children().last() );
	}
};
