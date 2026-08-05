/*!
 * @license GPL-2.0-or-later
 */

( function () {
	'use strict';

	QUnit.module( 've.init.mw.CXTarget', QUnit.newMwEnvironment() );

	function makeReferenceElement( name ) {
		return {
			type: 'mwReference',
			attributes: {
				listGroup: 'mwReference/',
				listKey: 'literal/' + name,
				listIndex: 3,
				contentsUsed: true,
				refGroup: '',
				mw: {
					name: 'ref',
					attrs: { name: name },
					body: { html: '<span typeof="mw:Transclusion">adapted body</span>' }
				},
				originalMw: '{"name":"ref","attrs":{"name":"' + name + '"},"body":{"html":"adapted body"}}'
			}
		};
	}

	// Document stub: the internal list already has a reference with the
	// listKey 'literal/Bodie10' at listIndex 7. No other keys exist.
	const existingRefListIndex = 7;
	const doc = {
		getInternalList: () => ( {
			getNodeGroup: ( listGroup ) => listGroup === 'mwReference/' && {
				getFirstNode: ( listKey ) => listKey === 'literal/Bodie10' &&
					{ getAttribute: () => existingRefListIndex }
			}
		} )
	};

	QUnit.test( 'deduplicateReferences', ( assert ) => {
		const duplicateRef = makeReferenceElement( 'Bodie10' );
		const newRef = makeReferenceElement( 'OtherRef' );
		const tx = {
			operations: [
				{ type: 'retain', length: 5 },
				{
					type: 'replace',
					remove: [],
					insert: [
						{ type: 'paragraph' },
						duplicateRef,
						newRef,
						{ type: '/paragraph' }
					]
				}
			]
		};

		ve.init.mw.CXTarget.static.deduplicateReferences( doc, tx );

		assert.strictEqual( duplicateRef.attributes.listIndex, existingRefListIndex,
			'Duplicate reference points to the existing internal list item' );
		assert.false( duplicateRef.attributes.contentsUsed,
			'Duplicate reference does not own the contents' );
		assert.strictEqual( duplicateRef.attributes.mw.body, undefined,
			'Stale body is removed from the duplicate reference data-mw' );
		assert.strictEqual( duplicateRef.attributes.originalMw, undefined,
			'originalMw is removed so the duplicate reference reserializes' );
		assert.strictEqual( duplicateRef.attributes.mw.attrs.name, 'Bodie10',
			'Reference name is kept on the duplicate reference' );

		assert.strictEqual( newRef.attributes.listIndex, 3,
			'Non-duplicate reference keeps its list index' );
		assert.true( newRef.attributes.contentsUsed,
			'Non-duplicate reference keeps the contents ownership' );
		assert.deepEqual( newRef.attributes.mw.body,
			{ html: '<span typeof="mw:Transclusion">adapted body</span>' },
			'Non-duplicate reference keeps its body' );
		assert.notStrictEqual( newRef.attributes.originalMw, undefined,
			'Non-duplicate reference keeps originalMw' );
	} );

}() );
