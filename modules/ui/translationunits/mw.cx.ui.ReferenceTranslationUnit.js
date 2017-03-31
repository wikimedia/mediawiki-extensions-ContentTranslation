'use strict';

/**
 * Reference translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} model
 * @param {mw.cx.tools.TranslationToolFactory} toolFactory
 * @param {Object} config
 */
mw.cx.ui.ReferenceTranslationUnit = function MwCxUiReferenceTranslationUnit( model, toolFactory, config ) {
	mw.cx.ui.ReferenceTranslationUnit.super.call( this, model, toolFactory, config );
};

/* Setup */
OO.inheritClass( mw.cx.ui.ReferenceTranslationUnit, mw.cx.ui.TranslationUnit );

mw.cx.ui.ReferenceTranslationUnit.static.name = 'reference';
mw.cx.ui.ReferenceTranslationUnit.static.matchTagNames = [ 'span' ];
mw.cx.ui.ReferenceTranslationUnit.static.matchRdfaTypes = [ 'dc:references', 'mw:Extension/ref' ];
mw.cx.ui.ReferenceTranslationUnit.static.highlightClass = 'cx-highlight--lightblue';
mw.cx.ui.ReferenceTranslationUnit.static.tools = {
	reference: [ 'click' ]
};

mw.cx.ui.ReferenceTranslationUnit.prototype.init = function () {
	if ( !this.model.sourceDocument.id ) {
		throw Error( '[CX] Invalid source document' );
	}
	this.$sourceSection = $( this.model.sourceDocument );
	this.$translationSection = this.getTranslationSection();
	this.adapt();
	this.listen();
};

mw.cx.ui.ReferenceTranslationUnit.prototype.isEditable = function () {
	return true;
};

mw.cx.ui.ReferenceTranslationUnit.prototype.adapt = function () {
	// Adapt in general will be asynchronous operation
	this.model.adapt();
	this.setContent( this.model.targetDocument );
};

mw.cx.ui.ReferenceTranslationUnit.prototype.setContent = function ( content ) {
	var attributes, self = this;

	if ( !content ) {
		return;
	}
	// Refresh reference
	this.$translationSection = this.getTranslationSection();
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
};

mw.cx.ui.ReferenceTranslationUnit.prototype.onChange = function () {
	if ( this.parentTranslationUnit ) {
		this.parentTranslationUnit.emit( 'change' );
	}
};

mw.cx.ui.translationUnitFactory.register( mw.cx.ui.ReferenceTranslationUnit );
