/**
 * Context item for transclusion nodes.
 *
 * @class
 * @extends ve.ui.MWTransclusionContextItem
 *
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXTransclusionContextItem = function VeUiCXTransclusionContextItem() {
	// Parent constructor
	ve.ui.CXTransclusionContextItem.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.ui.CXTransclusionContextItem, ve.ui.MWTransclusionContextItem );

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.CXTransclusionContextItem.prototype.setup = function () {
	var cxData = this.model.getAttribute( 'cx' );

	if ( ve.getProp( cxData, 0, 'adapted' ) === false ) {
		this.$element.remove();
		return;
	}

	ve.ui.CXTransclusionContextItem.super.prototype.setup.apply( this, arguments );
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXTransclusionContextItem );
