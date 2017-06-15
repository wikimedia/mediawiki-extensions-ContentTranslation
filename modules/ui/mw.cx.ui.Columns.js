'use strict';

/**
 *
 * @class
 * @param {mw.cx.dm.Translation} translation
 * @param {Object} config
 */
mw.cx.ui.Columns = function MwCxUiColumns( translation, config ) {
	// Configuration initialization
	this.config = config || {};
	this.sourceColumn = new mw.cx.ui.SourceColumn( translation, this.config );
	this.translationColumn = new mw.cx.ui.TranslationColumn( translation, this.config );
	this.ToolsColumn = new mw.cx.ui.ToolsColumn( this.config );
	this.translation = null;
	// Parent constructor
	mw.cx.ui.Columns.super.call( this, $.extend( {}, this.config, {
		continuous: true,
		expanded: false,
		classes: [ 'cx-widget__columns' ],
		items: [ this.sourceColumn, this.translationColumn, this.ToolsColumn ]
	} ) );
	this.$element.removeClass( 'oo-ui-horizontalLayout' );
};

/* Setup */

OO.inheritClass( mw.cx.ui.Columns, OO.ui.HorizontalLayout );

/**
 * Set the translation data model
 * @param {mw.cx.dm.Translation} translation
 */
mw.cx.ui.Columns.prototype.setTranslation = function ( translation ) {
	this.translation = translation;
	this.sourceColumn.setTranslation( this.translation );
	this.translationColumn.setTranslation( this.translation );
	this.ToolsColumn.setTranslation( this.translation );
};
