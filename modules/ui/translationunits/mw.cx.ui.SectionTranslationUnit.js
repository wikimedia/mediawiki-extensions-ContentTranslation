'use strict';

/**
 * Section translation unit
 *
 * @class
 * @param {mw.cx.dm.TranslationUnit} translationUnitModel
 * @param {mw.cx.ui.TranslationView} view
 * @param {Object} config
 */
mw.cx.ui.SectionTranslationUnit = function SectionTranslationUnit( translationUnitModel, view, config ) {
	// Parent constructor
	mw.cx.ui.SectionTranslationUnit.parent.call( this, translationUnitModel, view, config );
	// Mixin constructor
	mw.cx.ui.mixin.AlignableTranslationUnit.call( this );
};

/* Setup */
OO.inheritClass( mw.cx.ui.SectionTranslationUnit, mw.cx.ui.TranslationUnit );
OO.mixinClass( mw.cx.ui.SectionTranslationUnit, mw.cx.ui.mixin.AlignableTranslationUnit );

mw.cx.ui.SectionTranslationUnit.static.name = 'section';

mw.cx.ui.SectionTranslationUnit.static.matchTagNames = [ 'section' ];
mw.cx.ui.SectionTranslationUnit.static.highlightClass = 'cx-highlight';
mw.cx.ui.SectionTranslationUnit.static.tools = [ 'search', 'formatter', 'machinetranslation', 'linker' ];

mw.cx.ui.SectionTranslationUnit.prototype.render = function ( position ) {
	this.addSourceSection( position );
	this.addTranslationSection( position );
	this.listen();
};

/**
 * Add source section to source column.
 *
 * @param {integer} [position] Optional position to add
 */
mw.cx.ui.SectionTranslationUnit.prototype.addSourceSection = function ( position ) {
	if ( this.translationUnitModel.sourceDocument.tagName === 'SECTION' ) {
		// If the sourceDocument is <section> dont wrap it.
		this.$sourceSection = $( this.translationUnitModel.sourceDocument );
	} else {
		// Wrap with <section> tag
		this.$sourceSection = $( '<section>' ).html( this.translationUnitModel.sourceDocument );
	}
	// Add to the source column
	this.view.columns.sourceColumn.add( this.$sourceSection, position );
};

/**
 * Add target section - Either a placeholder or target document if already translated.
 *
 * @param {integer} [position] Optional position to add
 */
mw.cx.ui.SectionTranslationUnit.prototype.addTranslationSection = function ( position ) {
	if ( this.translationUnitModel.translationDocument ) {
		this.translated = true;
		this.$translationSection = $( '<section>' )
			.html( this.translationUnitModel.translationDocument );
	} else {
		this.$translationSection = this.getPlaceholderSection();
	}
	this.view.columns.translationColumn.add( this.$translationSection, position );
	this.emit( 'resize' );
};

/**
 * Get the placeholder
 * @return {jQuery} Placeholder section
 */
mw.cx.ui.SectionTranslationUnit.prototype.getPlaceholderSection = function () {
	return $( '<section>' )
		.addClass( 'cx-placeholder' )
		.text( mw.msg( 'cx-translation-add-translation' ) );
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onClick = function () {
	this.removeHighlight();

	if ( this.translated ) {
		return true;
	}
	// Adapt in general will be asynchronous operation
	this.translationUnitModel.adapt();
	this.setContent( this.translationUnitModel.targetDocument );

	if ( this.isEditable() ) {
		this.makeEditable( true );
	}
};

mw.cx.ui.SectionTranslationUnit.prototype.setContent = function ( content ) {
	if ( !content ) {
		return;
	}
	this.removePlaceholder();
	this.$translationSection.html( content );
	this.translated = true;
	this.emit( 'change' );
	this.emit( 'translationStarted' );
};

mw.cx.ui.SectionTranslationUnit.prototype.removePlaceholder = function () {
	this.$translationSection.removeClass( 'cx-placeholder' );
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onMouseOver = function () {
	if ( !this.translated ) {
		this.highlight();
	}
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onMouseLeave = function () {
	if ( !this.translated ) {
		this.removeHighlight();
	}
};

/**
 * @inheritDoc
 */
mw.cx.ui.SectionTranslationUnit.prototype.onChange = function () {
	this.view.emit( 'change' );
	this.translationUnits = this.buildSubTranslationUnits( this.translationUnitModel );
};

/**
 * Build sub translation units.
 * We might require to add and remove translation units as they get added or removed.
 * For example, links can get added to section and the corresponding translation unit
 * should reflect here.
 *
 * @param {mw.cx.dm.TranslationUnit} translationUnitModel
 * @return {mw.cx.dm.TranslationUnit[]} Array of sub translation units
 */
mw.cx.ui.SectionTranslationUnit.prototype.buildSubTranslationUnits = function ( translationUnitModel ) {
	var subTranslationUnitModels, name, translationUnits = [], translationUnit, i;

	// XXX Code duplication with mw.cx.ui.TranslationView
	subTranslationUnitModels = translationUnitModel.getTranslationUnits();

	if ( !subTranslationUnitModels ) {
		return translationUnits;
	}
	// XXX have a way to avoid creating translation units for unchanged units
	for ( i = 0; i < subTranslationUnitModels.length; i++ ) {
		name = 	subTranslationUnitModels[ i ].constructor.static.name;
		if ( !mw.cx.ui.translationUnitFactory.lookup( name ) ) {
			continue;
		}
		translationUnit = mw.cx.ui.translationUnitFactory.create(
			name, subTranslationUnitModels[ i ], this.view, this.config
		);
		translationUnits.push( translationUnit );
	}

	return translationUnits;
};

/* Register */
mw.cx.ui.translationUnitFactory.register( mw.cx.ui.SectionTranslationUnit );
