/**
 * Reference tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.MachineTranslationTool = function CXMachineTranslationTool( model, config ) {
	config.title = mw.msg( 'cx-tools-mt-title' );
	config.name = 'machinetranslation';
	config.language = config.targetLanguage;
	config.order = 5;
	// Parent constructor
	mw.cx.tools.MachineTranslationTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.MachineTranslationTool, mw.cx.tools.TranslationTool );

mw.cx.tools.MachineTranslationTool.static.name = 'machinetranslation';
mw.cx.tools.MachineTranslationTool.static.defaultProvider = null;

/**
 * @inheritDoc
 */
mw.cx.tools.MachineTranslationTool.prototype.getActions = function () {
	this.keepDefault = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-mt-set-default' ),
		icon: 'check',
		framed: false,
		classes: [ 'cx-mt-set-default' ]
	} );
	this.actions = [
		this.keepDefault
	];
	this.keepDefault.connect( this, {
		click: 'setDefaultProvider'
	} );
	return this.actions;
};

mw.cx.tools.MachineTranslationTool.prototype.getContent = function () {
	var noMT, useSource, resetMT;

	noMT = new OO.ui.MenuOptionWidget( {
		data: 'no-mt',
		label: mw.msg( 'cx-tools-mt-dont-use' )
	} );
	useSource = new OO.ui.MenuOptionWidget( {
		data: 'source-mt',
		label: mw.msg( 'cx-tools-mt-use-source' )
	} );
	resetMT = new OO.ui.MenuOptionWidget( {
		data: 'reset-mt',
		label: mw.msg( 'cx-tools-mt-reset' )
	} );
	this.mtProviderSelector = new OO.ui.DropdownWidget( {
		classes: [ 'card-mt-providers-menu' ],
		menu: {
			items: [ useSource, noMT, resetMT ]
		}
	} );
	this.mtProviderSelector.getMenu().selectItemByData( 'source-mt' );

	return this.mtProviderSelector.$element;
};

/**
 * Remove the reference
 */
mw.cx.tools.MachineTranslationTool.prototype.setDefaultProvider = function () {};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.MachineTranslationTool );
