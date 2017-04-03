/**
 * Template tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.TemplateTool = function CXTemplateTool( model, config ) {
	config.title = mw.msg( 'cx-tools-template-title' );
	config.language = config.targetLanguage;
	config.order = 70;
	// Parent constructor
	mw.cx.tools.TemplateTool.super.call( this, model, config );
	this.templateActions = null;
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.TemplateTool, mw.cx.tools.TranslationTool );

mw.cx.tools.TemplateTool.static.name = 'template';

/**
 * @inheritDoc
 */
mw.cx.tools.TemplateTool.prototype.getActions = function () {
	var adapt, keepOriginal, skip;

	adapt = new OO.ui.MenuOptionWidget( {
		data: 'adapt',
		label: mw.msg( 'cx-template-action-adapt' )
	} );
	keepOriginal = new OO.ui.MenuOptionWidget( {
		data: 'keep-original',
		label: mw.msg( 'cx-template-action-keep-original' )
	} );
	skip = new OO.ui.MenuOptionWidget( {
		data: 'skip',
		label: mw.msg( 'cx-template-action-skip' )
	} );
	this.templateActions = new OO.ui.DropdownWidget( {
		classes: [ 'card-template-actions-menu' ],
		menu: {
			items: [ adapt, keepOriginal, skip ]
		}
	} );
	this.templateActions.getMenu().selectItemByData( 'adapt' );

	return [ this.templateActions ];
};

mw.cx.tools.TemplateTool.prototype.getContent = function () {
	return 'Template name';
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.TemplateTool );
