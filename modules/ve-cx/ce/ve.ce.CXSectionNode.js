/**
 * Node representing an adapted section
 *
 * @class
 * @extends ve.ce.SectionNode
 * @constructor
 * @param {ve.dm.CXSectionNode} model
 */
ve.ce.CXSectionNode = function VeCeCXSectionNode() {
	// Parent constructor
	ve.ce.CXSectionNode.super.apply( this, arguments );

	this.$element
		.attr( {
			id: this.model.getAttribute( 'cxid' ),
			rel: 'cx:Section'
		} )
		.addClass( 've-ce-cxSectionNode' );

	this.model.connect( this, {
		lintIssues: 'onLintIssues',
		lintIssuesResolved: 'onLintIssuesResolved'
	} );
};

/* Inheritance */

OO.inheritClass( ve.ce.CXSectionNode, ve.ce.SectionNode );

/* Static Properties */

ve.ce.CXSectionNode.static.tagName = 'section';

ve.ce.CXSectionNode.static.name = 'cxSection';

/* Methods */

/**
 * @param {boolean} hasErrors True if lint issues have at least one error,
 * false if all issues are warnings.
 */
ve.ce.CXSectionNode.prototype.onLintIssues = function ( hasErrors ) {
	this.$element.addClass( hasErrors ? 've-ce-cxSectionNode-lint-errors' : 've-ce-cxSectionNode-lint-warnings' );
};

ve.ce.CXSectionNode.prototype.onLintIssuesResolved = function () {
	this.$element.removeClass( 've-ce-cxSectionNode-lint-errors ve-ce-cxSectionNode-lint-warnings' );
};

/* Registration */

ve.ce.nodeFactory.register( ve.ce.CXSectionNode );
