/**
 * Dialog for editing transclusion nodes
 *
 * @class
 * @extends ve.ui.MWTransclusionDialog
 *
 * @constructor
 * @param {Object} [config] Configuration options
 */
ve.ui.CXTransclusionDialog = function VeUiCXTransclusionDialog( config ) {
	// Parent constructor
	ve.ui.CXTransclusionDialog.super.call( this, config );
};

OO.inheritClass( ve.ui.CXTransclusionDialog, ve.ui.MWTransclusionDialog );

ve.ui.CXTransclusionDialog.static.name = 'cxtransclusion'; // Must match the existing dialog name to override

ve.ui.CXTransclusionDialog.prototype.getActionProcess = function ( action ) {
	const process = ve.ui.CXTransclusionDialog.super.prototype.getActionProcess.call( this, action );

	const findCXSectionAncestor = ( node ) => {
		while ( node ) {
			node = node.getParent();
			if ( node instanceof ve.dm.CXSectionNode ) {
				return node;
			}
		}
		return null;
	};

	const cxSectionNode = findCXSectionAncestor( this.selectedNode );

	if ( action === 'done' && !!cxSectionNode ) {
		cxSectionNode.emitSegmentEdit();
	}

	return process;
};

ve.ui.windowFactory.register( ve.ui.CXTransclusionDialog );

ve.ui.commandRegistry.register(
	new ve.ui.Command( 'cxtransclusion', 'window', 'open', { args: [ 'cxtransclusion' ] } )
);
