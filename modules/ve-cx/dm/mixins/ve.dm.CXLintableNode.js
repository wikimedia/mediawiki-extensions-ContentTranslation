/**
 * @class
 * @abstract
 * @constructor
 */
ve.dm.CXLintableNode = function VeDmCXLintableNode() {
	// @var {mw.cx.dm.TranslationIssue[]}
	this.translationIssues = [];

	// It is assumed that CXLintableNode will be mixed into a
	// node and therefore OO.EventEmitter is already available.
};

/* Methods */

/**
 * @method
 * @return {string|number}
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
	return this.translationIssues.filter( function ( issue ) {
		return !issue.isSuppressed();
	} );
};

/**
 * Find names of all issues that have some pattern in their name.
 *
 * @param {string} name Part of a name used in a regex
 * @return {string[]} All issues with some pattern in their name
 */
ve.dm.CXLintableNode.prototype.findMatchingIssues = function ( name ) {
	// Prevent matching all issues when empty string is given
	if ( !name.length ) {
		return [];
	}

	// If nothing is found, empty array is returned
	return this.translationIssues.filter( function ( issue ) {
		return ( new RegExp( name ) ).test( issue.getName() );
	} ).map( function ( issue ) {
		return issue.getName();
	} );
};

/**
 * Find the index of issue with some name, inside issue array.
 * Names act as unique ID and there should not be duplicates.
 *
 * @param {string} name Name of the issue
 * @return {number} Index of issue or -1 if not found.
 */
ve.dm.CXLintableNode.prototype.findIssueIndex = function ( name ) {
	var i, length = this.translationIssues.length;

	for ( i = 0; i < length; i++ ) {
		if ( this.translationIssues[ i ].getName() === name ) {
			return i;
		}
	}

	return -1;
};

/**
 * @param {mw.cx.dm.TranslationIssue[]|string[]|Object[]} issues
 */
ve.dm.CXLintableNode.prototype.addTranslationIssues = function ( issues ) {
	if ( issues.length < 1 ) {
		return;
	}

	// Load the translation issue DM module, now that it's required.
	// There is no use of adding this to the initial JS payload
	issues.map( this.processTranslationIssues ).forEach( function ( issue ) {
		var existingIssueIndex = this.findIssueIndex( issue.name );

		// When issue is suppressed, emit events about the current state
		issue.setSuppressCallback( this.notify.bind( this ) );

		if ( existingIssueIndex > -1 ) {
			// Replace existing issue
			this.translationIssues[ existingIssueIndex ] = issue;
			return;
		}

		this.translationIssues.push( issue );
	}, this );

	this.emit( 'translationIssues', this.hasErrors() );
	this.getTranslation().emit( 'translationIssues', this.getId(), this.hasErrors() );
};

/**
 * Resolve issues by name:
 * - Array of strings resolves issues that have those names
 * - Empty array resolves all issues of this node
 * - Plain string is used as regex to find resolvable issues
 *
 * @param {string|string[]} names
 */
ve.dm.CXLintableNode.prototype.resolveTranslationIssues = function ( names ) {
	if ( Array.isArray( names ) && names.length === 0 ) {
		this.translationIssues = [];
	}

	if ( typeof names === 'string' || names instanceof String ) {
		names = this.findMatchingIssues( names );
	}

	names.forEach( function ( name ) {
		var index = this.findIssueIndex( name );

		if ( index > -1 ) {
			this.translationIssues.splice( index, 1 );
		}
	}, this );

	this.notify();
};

/**
 * Emit events about the state of issues.
 */
ve.dm.CXLintableNode.prototype.notify = function () {
	if ( this.getTranslationIssues().length === 0 ) {
		this.emit( 'allIssuesResolved' );
		this.getTranslation().emit( 'issuesResolved', this.getId() );
	} else {
		this.emit( 'translationIssues', this.hasErrors() );
		this.getTranslation().emit( 'translationIssues', this.getId(), this.hasErrors() );
	}
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

	// If issue is object with properties name and message and optional property messageInfo
	if ( issue === Object( issue ) && issue.name && issue.message ) {
		return new mw.cx.dm.TranslationIssue( issue.name, issue.message, issue.messageInfo );
	}

	mw.log.error( 'Lint result cannot be processed' );
};

/**
 * True if this node has at least one issue that is an error. Number of warnings is irrelevant.
 *
 * @return {boolean}
 */
ve.dm.CXLintableNode.prototype.hasErrors = function () {
	return this.getTranslationIssues().some( function ( issue ) {
		return issue.type === 'error';
	} );
};
