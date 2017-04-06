'use strict';
/**
 * CX Reference TranslationUnit
 *
 * @constructor
 * @param {Object} config
 * @param {mw.cx.dm.Translation} translation The translation context
 * @param {Element} sourceDocument
 * @param {Element} targetDocument
 */
mw.cx.dm.ReferenceTranslationUnit = function ReferenceTranslationUnit( config, translation, sourceDocument, targetDocument ) {
	mw.cx.dm.ReferenceTranslationUnit.super.call( this, config, translation, sourceDocument, targetDocument );
	this.sourceDefinition = null;
	this.targetDefinition = null;
};

/* Inheritance */

OO.inheritClass( mw.cx.dm.ReferenceTranslationUnit, mw.cx.dm.TranslationUnit );

mw.cx.dm.ReferenceTranslationUnit.static.name = 'reference';
mw.cx.dm.ReferenceTranslationUnit.static.matchTagNames = [ 'span' ];
mw.cx.dm.ReferenceTranslationUnit.static.matchRdfaTypes = [ 'dc:references', 'mw:Extension/ref' ];

mw.cx.dm.ReferenceTranslationUnit.prototype.getSourceDefinition = function () {
	var dataMW, dataMWAttribute, referenceContentElement, $referenceContent;

	dataMWAttribute = this.sourceDocument.getAttribute( 'data-mw' );
	if ( !dataMWAttribute ) {
		throw Error( '[CX] Reference missing data-mw' );
	}
	dataMW = JSON.parse( dataMWAttribute );
	dataMW.body = dataMW.body || {};
	if ( !dataMW.body.id ) {
		/*
		Every reference must have a data-mw.body with id poiting to the item
		in References section. In general, we can just get copy the data-mw
		from the source reference. But there are cases it wont be filled in source reference.
		Example: When reference is reused more than once, the second reference might not have
		the data-mw.body.id. We need to find that id by looking at references section.
		To understand this, consider this example reference.

		<span about="#mwt6" class="reference" id="cite_ref-three_3-0" rel="dc:references" typeof="mw:Extension/Ref"
			data-mw='{"name": "ref", "attrs": {"name": "three"}, "body":{"id":"mw-reference-text-cite_three-3"}}'>
		 <a href="#cite_note-three-3">[3]</a>
		</span>
		When reused, note that body.id is missing.
		<span about="#mwt8" class="reference" id="cite_ref-three_3-1" rel="dc:references" typeof="mw:Extension/ref"
			data-mw='{"name":"ref", "attrs":{"name":"three"}}'>
		 <a href="#cite_note-three-3">[3]</a>
		</span>
		Reference template expands in references section as below
		<ol about="#mwt11" typeof="mw:Extension/references">
		<li about="#cite_note-three-3" id="cite_note-three-3">
			<span rel="mw:referencedBy">↑
				<a href="#cite_ref-three_3-0">3.0</a>
				<a href="#cite_ref-three_3-1">3.1</a>
			</span>
			<span id="mw-reference-text-cite_note-three-3" class="mw-reference-text" data-parsoid="{}">Three</span>
			</li>
		</li>
		The href value can also be like href='./Title#cite_ref-three_3-0'
		*/
		$referenceContent = $( this.translation.sourcePage.sections )
			.find( 'a[href$="#' + this.sourceDocument.id + '"]' )
			.closest( 'li' )
			.find( '.mw-reference-text' );
		if ( $referenceContent.length > 0 ) {
			dataMW.body.id = $referenceContent[ 0 ].id;
		}
	}
	// Make sure that the data-mw.body.id points to an element that exists. Otherwise
	// remove that reference. This happens when references in source article changed
	// and the reference in draft translation no longer points to a valid reference.
	// See T109574
	if ( dataMW.body.id && !document.getElementById( dataMW.body.id ) ) {
		return null;
	}
	if ( !dataMW.body.html ) {
		referenceContentElement = document.getElementById( dataMW.body.id );
		dataMW.body.html = referenceContentElement && referenceContentElement.outerHTML;
	}
	// TODO: This dataMW.body.html can be a template like Cite web or citation journal.
	// We need to use it with template translation unit and adapt it to target wiki.
	return dataMW;
};

/**
 * Get target definition for the reference
 *
 * @return {Object}
 */
mw.cx.dm.ReferenceTranslationUnit.prototype.getTargetDefinition = function () {
	this.sourceDefinition = this.getSourceDefinition();
	return this.sourceDefinition;
};

/**
 * Get Reference rendering as HTML
 *
 * @return {string} Reference rendering as HTML
 */
mw.cx.dm.ReferenceTranslationUnit.prototype.getTargetHTMLContent = function () {
	return this.getTargetDefinition().body.html;
};

/**
 * @inheritDoc
 */
mw.cx.dm.ReferenceTranslationUnit.prototype.adapt = function () {
	// Copy source document
	this.targetDocument = this.sourceDocument.cloneNode( true );
	// Set the target definition
	this.targetDefinition = this.getTargetDefinition();
	this.targetDocument.setAttribute( 'data-mw', JSON.stringify( this.targetDefinition ) );
	// Update the target id attributes.
	this.setTargetId();
	// TODO: Reference definition can be templates. Adapt that template to target language using
	// template translation unit.
};

mw.cx.dm.modelRegistry.register( mw.cx.dm.ReferenceTranslationUnit );
