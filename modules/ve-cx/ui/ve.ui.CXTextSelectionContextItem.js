/**
 * Context item for a CX Text Selections.
 *
 * @class
 * @extends ve.ui.LinearContextItem
 *
 * @constructor
 * @param {ve.ui.Context} context Context item is in
 * @param {ve.dm.Model} model Model item is related to
 * @param {Object} config Configuration options
 */
ve.ui.CXTextSelectionContextItem = function VeUiCXTextSelectionContextItem() {
	// Parent constructor
	ve.ui.CXTextSelectionContextItem.super.apply( this, arguments );

	// Initialization
	this.$element.addClass( 've-ui-CXTextSelectionContextItem' );
	this.selectedText = null;
};

/* Inheritance */

OO.inheritClass( ve.ui.CXTextSelectionContextItem, ve.ui.LinearContextItem );

/* Static Properties */

ve.ui.CXTextSelectionContextItem.static.name = 'cxtextselection';

ve.ui.CXTextSelectionContextItem.static.icon = 'link';

ve.ui.CXTextSelectionContextItem.static.commandName = 'link';

ve.ui.CXTextSelectionContextItem.static.label = OO.ui.deferMsg( 'cx-tools-link-title' );

ve.ui.CXTextSelectionContextItem.static.deletable = false;

ve.ui.CXTextSelectionContextItem.static.editable = true;

/* Static Methods */

ve.ui.CXTextSelectionContextItem.static.isCompatibleWith = function ( model ) {
	return model.isEditable();
};

ve.ui.CXTextSelectionContextItem.static.generateBody = ve.ui.CXLinkContextItem.static.generateBody;

/* Methods */

/**
 * Render the body.
 */
ve.ui.CXTextSelectionContextItem.prototype.renderBody = function () {
	var translation = ve.init.target.getTranslation();

	ve.init.platform.linkCache.get( this.selectedText ).then( function ( linkData ) {
		var targetLinkInfo, $targetLink;

		if ( linkData.missing ) {
			// Title does not exist. Do not show the card
			this.$element.remove();
			return;
		}

		targetLinkInfo = {
			title: this.selectedText,
			pagelanguage: translation.targetDoc.getLang(),
			terms: { description: linkData.description },
			thumbnail: { source: linkData.imageUrl }
		};
		$targetLink = this.constructor.static.generateBody( targetLinkInfo, this.context );
		this.$body.append( $targetLink );
		this.$element.show();
	}.bind( this ) );
};

/**
 * @inheritdoc
 */
ve.ui.CXTextSelectionContextItem.prototype.setup = function () {
	var text, fragment = this.getFragment();
	text = fragment.getText().trim();
	if ( text.length === 0 || text.length > 30 ) {
		// Not a useful selection
		this.$element.remove();
		return;
	}
	// To avoid flashing of empy card, let us hide the card till we get the link information.
	this.$element.hide();
	this.selectedText = text;
	this.renderBody();
	return this;
};

/* Registration */

ve.ui.contextItemFactory.register( ve.ui.CXTextSelectionContextItem );
