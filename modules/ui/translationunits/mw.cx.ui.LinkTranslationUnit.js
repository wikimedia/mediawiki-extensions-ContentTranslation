'use strict';

/**
 * Link translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.LinkTranslationUnit = function MwCxUiLinkTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.LinkTranslationUnit.super.call( this, model, toolFactory, config );

	// Properties
	this.adapted = false;
};

/* Setup */
OO.inheritClass( mw.cx.ui.LinkTranslationUnit, mw.cx.ui.TranslationUnit );

mw.cx.ui.LinkTranslationUnit.static.name = 'link';
mw.cx.ui.LinkTranslationUnit.static.matchTagNames = [ 'a' ];
mw.cx.ui.LinkTranslationUnit.static.matchRdfaTypes = [ 'mw:WikiLink' ];
mw.cx.ui.LinkTranslationUnit.static.highlightClass = 'cx-highlight--lightblue';
mw.cx.ui.LinkTranslationUnit.static.tools = {
	link: [ 'click', 'focus' ]
};

/**
 * @inheritDoc
 */
mw.cx.ui.LinkTranslationUnit.static.matchFunction = function ( node ) {
	// Links should have id
	return !!node.id;
};

mw.cx.ui.LinkTranslationUnit.prototype.getPlaceholderSection = function () {
	return $( '<section>' )
		.addClass( 'cx-link-placeholder' );
};

mw.cx.ui.LinkTranslationUnit.prototype.adapt = function () {
	var self = this;
	// Adapt in general will be asynchronous operation
	this.model.adapt().then( function() {
		if ( !self.model.targetTitleMissing ) {
			self.adapted = true;
			self.setContent( self.model.targetDocument );
		} else {
			self.markUnAdapted();
		}
	} );
};

mw.cx.ui.LinkTranslationUnit.prototype.markUnAdapted = function () {
	// All these unadapted links will be converted to plain text while publishing
	this.$translationSection.addClass( 'cx-target-link-unadapted' );
};

mw.cx.ui.LinkTranslationUnit.prototype.setContent = function ( content ) {
	var attributes, self = this;

	this.$translationSection.html( content.text );
	attributes = $( content ).prop( 'attributes' );
	// loop through attributes and apply them.
	$.each( attributes, function() {
		self.$translationSection.attr( this.name, this.value );
	} );
	// Refresh reference
	this.$translationSection = this.getTranslationSection();
	this.translated = true;
	// Re attach event handlers
	this.listen();
	this.emit( 'change' );
};

mw.cx.ui.LinkTranslationUnit.prototype.removePlaceholder = function () {
	this.$translationSection.removeClass( 'cx-link-placeholder' );
};

/**
 * Content change handler
 */
mw.cx.ui.LinkTranslationUnit.prototype.onChange = function () {
	// There is nothing to do on change, but inform the parent about change.
	if ( this.parentTranslationUnit ) {
		this.parentTranslationUnit.emit( 'change' );
	}
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.LinkTranslationUnit );
