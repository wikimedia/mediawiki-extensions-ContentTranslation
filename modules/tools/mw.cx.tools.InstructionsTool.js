'use strict';

/**
 * Instructions Tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.InstructionsTool = function CXInstructionsTool( model, config ) {
	config.order = 30;
	mw.cx.tools.InstructionsTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.InstructionsTool, mw.cx.tools.TranslationTool );

mw.cx.tools.InstructionsTool.static.name = 'instructions';

/**
 * @inheritDoc
 */
mw.cx.tools.InstructionsTool.prototype.getActions = function () {
	return [];
};

/**
 * @inheritDoc
 */
mw.cx.tools.InstructionsTool.prototype.getContent = function () {
	var i, count = 1,
		renderParams = {
			href: mw.msg( 'cx-tools-view-guidelines-link' ),
			text: mw.msg( 'cx-tools-view-guidelines' )
		};

	for ( i = 1; i <= 3; i++ ) {
		renderParams[ 'count' + i ] = mw.language.convertNumber( i );
		// The following messages are used here:
		// * cx-tools-instructions-text1
		// * cx-tools-instructions-text3
		// * cx-tools-instructions-text5
		renderParams[ 'heading' + i ] = mw.msg( 'cx-tools-instructions-text' + count++ );
		// The following messages are used here:
		// * cx-tools-instructions-text2
		// * cx-tools-instructions-text4
		// * cx-tools-instructions-text6
		renderParams[ 'description' + i ] = mw.msg( 'cx-tools-instructions-text' + count++ );
	}
	return mw.template.get( 'mw.cx.tools.InstructionsTool', 'tools/instructions.mustache' )
		.render( renderParams );
};

mw.cx.tools.InstructionsTool.prototype.getData = function () {
	return this.constructor.static.name + '::' + 1;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.InstructionsTool );
