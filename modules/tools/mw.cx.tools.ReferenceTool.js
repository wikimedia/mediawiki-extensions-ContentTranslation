/**
 * Reference tool
 *
 * @class
 * @extends mw.cx.tools.TranslationTool
 * @constructor
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.ReferenceTool = function CXReferenceTool( model, config ) {
	config.title = mw.msg( 'cx-tools-reference-title' );
	config.name = 'reference';
	config.language = config.targetLanguage;
	config.order = 301;
	// Parent constructor
	mw.cx.tools.ReferenceTool.super.call( this, model, config );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.ReferenceTool, mw.cx.tools.TranslationTool );

mw.cx.tools.ReferenceTool.static.name = 'reference';

/**
 * @inheritDoc
 */
mw.cx.tools.ReferenceTool.prototype.getActions = function () {
	this.removeReferenceButton = new OO.ui.ButtonWidget( {
		label: mw.msg( 'cx-tools-reference-remove' ),
		icon: 'close',
		framed: false,
		classes: [ 'card__remove-reference' ]
	} );
	this.actions = [
		this.removeReferenceButton
	];
	this.removeReferenceButton.connect( this, {
		click: 'removeReference'
	} );
	return this.actions;
};

mw.cx.tools.ReferenceTool.prototype.getContent = function () {
	return this.model.getTargetHTMLContent();
};

/**
 * Remove the reference
 */
mw.cx.tools.ReferenceTool.prototype.removeReference = function () {
	this.emit( 'remove' );
	this.destroy();
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.ReferenceTool );
