/**
 * @class
 * @abstract
 * @constructor
 * @mixins {OO.EventEmitter}
 */
ve.dm.CXLintableNode = function VeDmCXLintableNode() {
	// @var {mw.cx.dm.TranslationIssue[]}
	this.translationIssues = [];

	// Mixin constructor
	OO.EventEmitter.call( this );
};

/* Inheritance */

OO.mixinClass( ve.dm.CXLintableNode, OO.EventEmitter );

/* Methods */

/**
 * @return {String}
 */
ve.dm.CXLintableNode.prototype.getId = null;

/**
 * @return {mw.cx.dm.Translation}
 */
ve.dm.CXLintableNode.prototype.getTranslation = function () {
	return ve.init.target.getTranslation();
};

/**
 * @return {mw.cx.dm.TranslationIssue[]}
 */
ve.dm.CXLintableNode.prototype.getTranslationIssues = function () {
	return this.translationIssues;
};

/**
 * @param {mw.cx.dm.TranslationIssue[]|string[]|Object[]} issues
 */
ve.dm.CXLintableNode.prototype.setTranslationIssues = function ( issues ) {
	if ( !issues || !issues.length ) {
		this.emit( 'issuesResolved' );
		this.getTranslation().emit( 'issuesResolved', this.getId() );
		return;
	}

	// Load the issue related RL modules when required.
	// There is no use of adding this to the initial JS payload
	mw.loader.using(
		[ 'mw.cx.dm.TranslationIssue', 'mw.cx.ui.TranslationIssueWidget' ]
	).then( function () {
		this.translationIssues = issues.map( this.processTranslationIssues );
		this.emit( 'translationIssues', this.hasErrors() );
		this.getTranslation().emit( 'translationIssues', this.getId(), this.hasErrors() );
	}.bind( this ) );
};

/**
 * Transform the issue into mw.cx.dm.TranslationIssue object.
 *
 * @param {mw.cx.dm.TranslationIssue|string|Object} issue
 * @return {mw.cx.dm.TranslationIssue}
 */
ve.dm.CXLintableNode.prototype.processTranslationIssues = function ( issue ) {
	if ( issue instanceof mw.cx.dm.TranslationIssue ) {
		return issue;
	}

	if ( typeof issue === 'string' || issue instanceof String ) {
		return new mw.cx.dm.TranslationIssue( issue );
	}

	// If issue is object with property message and optional property messageInfo
	if ( issue === Object( issue ) && issue.message ) {
		return new mw.cx.dm.TranslationIssue( issue.message, issue.messageInfo );
	}

	mw.log.error( 'Lint result cannot be processed' );
};

/**
 * True if this node has at least one issue that is an error. Number of warnings is irrelevant.
 *
 * @return {boolean}
 */
ve.dm.CXLintableNode.prototype.hasErrors = function () {
	return this.translationIssues.some( function ( issue ) {
		return issue.type === 'error';
	} );
};
