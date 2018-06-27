'use strict';

/*!
 * Content Translation UserInterface TranslationAction class.
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 */

/**
 * Translation action.
 *
 * @class
 * @extends ve.ui.Action
 * @constructor
 * @param {ve.ui.Surface} surface Surface to act on
 */
ve.ui.CXTranslationAction = function VeUiCXTranslationAction() {
	// Parent constructor
	ve.ui.CXTranslationAction.super.apply( this, arguments );
	this.beforeTranslationData = {};
};

/* Inheritance */

OO.inheritClass( ve.ui.CXTranslationAction, ve.ui.Action );

/* Static Properties */

ve.ui.CXTranslationAction.static.name = 'translation';

/**
 * List of allowed methods for the action.
 *
 * @static
 * @property
 */
ve.ui.CXTranslationAction.static.methods = [ 'translate' ];

/**
 * Find the currently active section and request to change the source.
 *
 * @param {string} source Selected MT provider or `source` or `scratch`
 * @return {boolean} False if action is cancelled.
 */
ve.ui.CXTranslationAction.prototype.translate = function ( source ) {
	var section, promise, originalSource,
		target = ve.init.target,
		selection = this.surface.getModel().getSelection();

	if ( !( selection instanceof ve.dm.LinearSelection ) ) {
		return false;
	}

	section = mw.cx.getParentSectionForSelection( this.surface, selection );

	if ( !section ) {
		mw.log.error( '[CX] Could not find a CX Section as parent for the context.' );
		return false;
	}

	originalSource = section.getOriginalContentSource();

	this.beforeTranslate();

	if ( source === 'reset-translation' ) {
		promise = target.changeContentSource( section, null, originalSource, { noCache: true } );
	} else {
		promise = target.changeContentSource( section, originalSource, source );
	}

	promise
		.always( this.afterTranslate.bind( this ) )
		.fail( function () {
			// TODO: i18n
			mw.notify( 'Machine translation failed' );
			this.surface.getModel().emit( 'contextChange' );
		}.bind( this ) );

	return;
};

/**
 * Pre-translate handler
 */
ve.ui.CXTranslationAction.prototype.beforeTranslate = function () {
	// Save scroll position before changing section content
	this.beforeTranslationData.scrollTop = this.surface.view.$window.scrollTop();
};

/**
 * Post-translate handler
 */
ve.ui.CXTranslationAction.prototype.afterTranslate = function () {
	// Restore scroll position after changing content
	this.surface.view.$window.scrollTop( this.beforeTranslationData.scrollTop );
};

/* Registration */

ve.ui.actionFactory.register( ve.ui.CXTranslationAction );
