'use strict';

/**
 * Title validation tool
 *
 * @class
 * @constructor
 * @extends mw.cx.tools.TranslationTool
 * @mixins mw.cx.ui.mixin.LintableNode
 *
 * @param {mw.cx.widgets.PageTitleWidget} titleWidget
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {Object} config
 */
mw.cx.tools.TitleValidationTool = function CXTitleValidationTool( titleWidget, model, config ) {
	config.order = 2;

	// Parent constructor
	mw.cx.tools.TitleValidationTool.super.call( this, model, config );

	this.titleWidget = titleWidget;
	this.icon = new OO.ui.IconWidget( { icon: 'close' } );
	this.actionButtons = new OO.ui.ButtonGroupWidget();

	// Mixin constructor
	mw.cx.ui.mixin.LintableNode.call( this );

	this.card = this.getCard();
	this.card.$header.empty().append( this.getHeader() );
	this.registerClasses( this.card.$element, this.card.$header, this.card.$information );
};

/* Inheritance */
OO.inheritClass( mw.cx.tools.TitleValidationTool, mw.cx.tools.TranslationTool );
OO.mixinClass( mw.cx.tools.TitleValidationTool, mw.cx.ui.mixin.LintableNode );

/* Static property */

mw.cx.tools.TitleValidationTool.static.name = 'titlevalidation';

/**
 * @inheritDoc
 */
mw.cx.tools.TitleValidationTool.prototype.getContent = function () {
	this.showCollapsed();
	return this.getBody();
};

mw.cx.tools.TitleValidationTool.prototype.getHeader = function () {
	var $title, $actions;

	$title = $( '<div>' )
		.addClass( 'cx-widget-titleValidationTool-title' )
		.append(
			this.icon.$element,
			new OO.ui.LabelWidget( { label: this.constructor.static.label } ).$element
		);

	$actions = $( '<div>' )
		.addClass( 'cx-widget-titleValidationTool-actions' )
		.append( this.actionButtons.$element );

	return [ $title, $actions ];
};

mw.cx.tools.TitleValidationTool.prototype.getData = function () {
	return this.constructor.static.name + '::1';
};

mw.cx.tools.TitleValidationTool.prototype.getLintableNode = function () {
	return this.titleWidget;
};

/* Register */
mw.cx.tools.translationToolFactory.register( mw.cx.tools.TitleValidationTool );
