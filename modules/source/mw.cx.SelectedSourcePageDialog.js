/*!
 * SelectedSourcePageDialog
 *
 * Simple dialog wrapper for SelectedSourcePage
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */
'use strict';

/**
 * SelectedSourcePageDialog
 *
 * @class
 * @extends {OO.ui.Dialog}
 */
mw.cx.SelectedSourcePageDialog = function () {
	// Parent method
	mw.cx.SelectedSourcePageDialog.super.apply( this, arguments );

	this.selectedSourcePage = null;
};

OO.inheritClass( mw.cx.SelectedSourcePageDialog, OO.ui.Dialog );

mw.cx.SelectedSourcePageDialog.static.name = 'selectedSourcePage';
mw.cx.SelectedSourcePageDialog.static.size = 'large';

/**
 * @inheritdoc
 */
mw.cx.SelectedSourcePageDialog.prototype.getSetupProcess = function ( data ) {
	// Parent method
	return mw.cx.SelectedSourcePageDialog.super.prototype.getSetupProcess.call( this, data )
		.next( function () {
			this.selectedSourcePage = data.selectedSourcePage;
			this.$body.append( data.selectedSourcePage.$element );
		}, this );
};

/**
 * @inheritdoc
 */
mw.cx.SelectedSourcePageDialog.prototype.getReadyProcess = function ( data ) {
	// Parent method
	return mw.cx.SelectedSourcePageDialog.super.prototype.getReadyProcess.call( this, data )
		.next( function () {
			this.selectedSourcePage.focusStartTranslationButton();
		}, this );
};

/**
 * @inheritdoc
 */
mw.cx.SelectedSourcePageDialog.prototype.getTeardownProcess = function ( data ) {
	// Parent method
	return mw.cx.SelectedSourcePageDialog.super.prototype.getTeardownProcess.call( this, data )
		.next( function () {
			this.selectedSourcePage = null;
			this.$body.empty();
		}, this );
};
