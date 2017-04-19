'use strict';

/**
 * External Link translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.ExternalLinkTranslationUnit = function MwCxUiExternalLinkTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.ExternalLinkTranslationUnit.super.call( this, model, toolFactory, config );
};

/* Setup */
OO.inheritClass( mw.cx.ui.ExternalLinkTranslationUnit, mw.cx.ui.TranslationUnit );

mw.cx.ui.ExternalLinkTranslationUnit.static.name = 'extlink';
mw.cx.ui.ExternalLinkTranslationUnit.static.matchTagNames = [ 'a' ];
mw.cx.ui.ExternalLinkTranslationUnit.static.matchRdfaTypes = [ 'mw:ExtLink' ];
mw.cx.ui.ExternalLinkTranslationUnit.static.highlightClass = 'cx-highlight--lightblue';
mw.cx.ui.ExternalLinkTranslationUnit.static.tools = {
	extlink: [ 'click', 'focus' ]
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.ExternalLinkTranslationUnit );
