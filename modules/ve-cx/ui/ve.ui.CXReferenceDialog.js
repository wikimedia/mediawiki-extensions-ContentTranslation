'use strict';

/**
 * Creates an ve.ui.CXReferenceDialog object.
 *
 * @copyright See AUTHORS.txt
 * @license GPL-2.0-or-later
 *
 * @class
 * @constructor
 * @extends ve.ui.MWReferenceDialog
 */
ve.ui.CXReferenceDialog = function VeUiCXReferenceDialog() {
	// Parent constructor
	ve.ui.CXReferenceDialog.super.apply( this, arguments );
};

/* Inheritance */

const MWReferenceDialog = ve.ui.windowFactory.lookup( 'reference' );
OO.inheritClass( ve.ui.CXReferenceDialog, MWReferenceDialog );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXReferenceDialog.prototype.getActionProcess = function ( action ) {
	if ( action === 'done' ) {
		const MWReferenceNode = ve.dm.modelRegistry.lookup( 'mwReference' );
		if ( this.selectedNode instanceof MWReferenceNode ) {
			const cxData = this.selectedNode.getAttribute( 'cx' ) || {};

			if ( cxData.adapted === false ) {
				const targetDoc = this.selectedNode.getDocument();
				const attributeTx = ve.dm.TransactionBuilder.static.newFromAttributeChanges(
					targetDoc,
					this.selectedNode.getOuterRange().start,
					{ cx: {} }
				);
				targetDoc.commit( attributeTx );
			}
		}
	}

	return ve.ui.CXReferenceDialog.super.prototype.getActionProcess.call( this, action );
};

/* Registration */

ve.ui.windowFactory.register( ve.ui.CXReferenceDialog );
