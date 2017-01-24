'use strict';

/**
 *
 * @class
 * @param {mw.cx.dm.Translation} translation
 * @param {Object} config
 */
mw.cx.ui.Columns = function ( translation, config ) {
	// Configuration initialization
	this.config = config || {};
	this.sourceColumn = new mw.cx.ui.SourceColumn( translation, this.config );
	this.translationColumn = new mw.cx.ui.TranslationColumn( translation, this.config );
	this.ToolsColumn = new mw.cx.ui.ToolsColumn( this.config );

	// Parent constructor
	mw.cx.ui.Columns.parent.call( this, $.extend( {}, this.config, {
		continuous: true,
		expanded: false,
		classes: [ 'cx-widget__columns' ],
		items: [ this.sourceColumn, this.translationColumn, this.ToolsColumn ]
	} ) );
	this.$element.removeClass( 'oo-ui-horizontalLayout' );
};

/* Setup */

OO.inheritClass( mw.cx.ui.Columns, OO.ui.HorizontalLayout );
