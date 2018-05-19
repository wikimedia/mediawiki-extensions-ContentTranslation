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
	var section,
		selection = this.surface.getModel().getSelection();

	if ( !( selection instanceof ve.dm.LinearSelection ) ) {
		return false;
	}

	section = mw.cx.getParentSectionForSelection( this.surface, selection );

	if ( !section ) {
		mw.log.error( '[CX] Could not find a CX Section as parent for the context.' );
		return false;
	}

	ve.init.target.changeContentSource( section, section.getOriginalContentSource(), source ).fail( function () {
		// TODO: i18n
		mw.notify( 'Machine translation failed' );
		this.surface.getModel().emit( 'contextChange' );
	}.bind( this ) );

	return;
};

/* Registration */

ve.ui.actionFactory.register( ve.ui.CXTranslationAction );
