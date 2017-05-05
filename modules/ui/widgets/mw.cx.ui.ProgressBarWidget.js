'use strict';

/**
 * Creates a mw.cx.widgets.ProgressBarWidget object.
 *
 * @class
 * @extends OO.ui.PanelLayout
 *
 * @constructor
 * @param {Object} config Configuration options
 * @cfg {string} title The tool title
 */
mw.cx.widgets.ProgressBarWidget = function CXProgressBarWidget( config ) {
	this.totalProgressBar = new OO.ui.ProgressBarWidget( {
		classes: [ 'cx-progressbar-total' ],
		progress: 50
	} );
	this.mtProgressBar = new OO.ui.ProgressBarWidget( {
		classes: [ 'cx-progressbar-mt' ],
		progress: 40
	} );
	config = $.extend( {}, config, {
		classes: [ 'cx-progressbar' ],
		expanded: false,
		scrollable: false,
		continuous: true,
		framed: false,
		padded: false,
		items: [ this.totalProgressBar, this.mtProgressBar ]
	} );
	// Parent constructor
	mw.cx.widgets.ProgressBarWidget.parent.call( this, config );
};

/* Setup */
OO.inheritClass( mw.cx.widgets.ProgressBarWidget, OO.ui.StackLayout );

mw.cx.widgets.ProgressBarWidget.prototype.setMTProgress = function ( progress ) {
	this.mtProgressBar.setProgress( progress );
};

mw.cx.widgets.ProgressBarWidget.prototype.setTotalProgress = function ( progress ) {
	this.totalProgressBar.setProgress( progress );
};
