/**
 * Mixin class for editable content nodes which can have translation issues.
 *
 * @class
 * @constructor
 */
ve.ce.CXLintableNode = function VeCeCXLintableNode() {
	this.focusListenerAttached = false;

	this.getHighlightableElement().addClass( 've-ce-cxLintableNode' );

	this.model.connect( this, {
		allIssuesResolved: 'onAllIssuesResolved',
		translationIssues: 'highlightNode'
	} );
};

/* Methods */

/**
 * Get element which should be focused when going through issues in issue card
 * and getting to this node's issue. See T189488 for issue card interactions.
 *
 * @return {jQuery}
 */
ve.ce.CXLintableNode.prototype.getFocusableElement = function () {
	return this.$element;
};

/**
 * Get element which should be visually highlighted with a marker when there
 * are translation issues with this particular node.
 *
 * @return {jQuery}
 */
ve.ce.CXLintableNode.prototype.getHighlightableElement = function () {
	return this.$element;
};

/**
 * @return {boolean} True if opening issue related to this node blurs the VE editing surface.
 */
ve.ce.CXLintableNode.prototype.blursEditingSurface = function () {
	return false;
};

/**
 * Handler triggered when translation issues of this node are resolved.
 */
ve.ce.CXLintableNode.prototype.onAllIssuesResolved = function () {
	this.removeHighlight();
};

/**
 * Remove the CSS highlights for warnings and errors.
 */
ve.ce.CXLintableNode.prototype.removeHighlight = function () {
	this.getHighlightableElement()
		.removeClass( 'mw-cx-lintIssue-error mw-cx-lintIssue-warning' )
		.removeClass( 'mw-cx-current-issue-warning mw-cx-current-issue-error' );
};

/**
 * Set warning or error marker for a node.
 *
 * @param {boolean} hasErrors
 */
ve.ce.CXLintableNode.prototype.highlightNode = function ( hasErrors ) {
	var type = hasErrors ? 'error' : 'warning';
	this.removeHighlight();
	// The following classes are used here:
	// * mw-cx-lintIssue-error
	// * mw-cx-lintIssue-warning
	this.getHighlightableElement().addClass( 'mw-cx-lintIssue-' + type );
};

ve.ce.CXLintableNode.prototype.isFocusListenerAttached = function () {
	return this.focusListenerAttached;
};

ve.ce.CXLintableNode.prototype.setFocusListenerAttached = function ( isFocusListenerAttached ) {
	this.focusListenerAttached = isFocusListenerAttached;
};
