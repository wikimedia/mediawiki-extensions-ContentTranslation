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
ve.ui.CXTranslationAction = function VeUiCXTranslationtAction() {
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
 * Machine translate using the given MT engine
 *
 * @method
 * @param {string} engine MT Engine
 * @return {boolean} Action was executed
 */
ve.ui.CXTranslationAction.prototype.translate = function ( engine ) {
	var sectionId, section,
		selection = this.surface.getModel().getSelection();

	if ( !( selection instanceof ve.dm.LinearSelection ) ) {
		return false;
	}

	section = ve.init.target.getParentSectionForSelection( this.surface, selection );

	if ( !section ) {
		mw.log.error( '[CX] Could not find a CX Section as parent for the context.' );
		return false;
	}
	sectionId = section.getAttribute( 'cxid' );
	mw.log( 'Machine translating ' + sectionId + ' using ' + engine );

	ve.init.target.translateSection( sectionId, engine ).then( function ( translationResponse ) {
		ve.init.target.setSectionContent( section, translationResponse );
	} );

	return true;
};

/* Registration */

ve.ui.actionFactory.register( ve.ui.CXTranslationAction );
