/**
 *
 * @class
 * @abstract
 * @constructor
 */
ve.dm.CXLintableNode = function VeDmCXLintableNode() {
	// @var mw.cx.dm.TranslationIssue[]
	this.lintResults = [];
};

/**
 * @param {mw.cx.dm.TranslationIssue|mw.cx.dm.TranslationIssue[]} results
 */
ve.dm.CXLintableNode.prototype.setLintResults = function ( results ) {
	if ( !results || !results.length ) {
		this.lintResults = [];
		this.emit( 'lintIssuesResolved' );
		return;
	}

	results = Array.isArray( results ) ? results : [ results ];
	// Load the issue related RL modules when required.
	// There is no use of adding this to initial JS payload
	mw.loader.using(
		[ 'mw.cx.dm.TranslationIssue', 'mw.cx.ui.TranslationIssueWidget' ]
	).then( function () {
		this.lintResults = results.map( this.processLintResult );
		this.emit( 'lintIssues', this.hasErrors() );
	}.bind( this ) );
};

ve.dm.CXLintableNode.prototype.processLintResult = function ( issue ) {
	if ( issue instanceof mw.cx.dm.TranslationIssue ) {
		return issue;
	}

	if ( typeof issue === 'string' || issue instanceof String ) {
		return new mw.cx.dm.TranslationIssue( mw.msg( 'cx-tools-linter-generic-title' ), issue );
	}

	// If issue is object with properties title and message
	if ( issue === Object( issue ) && issue.title && issue.message ) {
		return new mw.cx.dm.TranslationIssue( issue.title, issue.message, issue.messageInfo );
	}

	mw.log.error( 'Lint result cannot be processed' );
};

ve.dm.CXLintableNode.prototype.hasErrors = function () {
	return this.lintResults.some( function ( issue ) {
		return issue.type === 'error';
	} );
};
