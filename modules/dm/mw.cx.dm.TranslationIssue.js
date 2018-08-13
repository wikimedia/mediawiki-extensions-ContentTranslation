/**
 * @class
 * @constructor
 * @param {string} name Unique issue identifier
 * @param {string} message
 * @param {Object} [messageInfo]
 * @cfg {string} [title]
 * @cfg {string} [type='warning'] 'warning' or 'error'
 * @cfg {string} [help]
 * @cfg {boolean} [resolvable=false]
 * @cfg {string} [actionIcon='check']
 * @cfg {string} [actionLabel]
 * @cfg {Function} [action]
 */
mw.cx.dm.TranslationIssue = function CXTranslationIssue( name, message, messageInfo ) {
	this.name = name;
	this.message = message;
	this.title = messageInfo && messageInfo.title;
	this.type = messageInfo && messageInfo.type || 'warning';
	this.help = messageInfo && messageInfo.help;
	this.resolvable = messageInfo && messageInfo.resolvable === true;
	this.actionIcon = messageInfo && messageInfo.actionIcon || 'check';
	this.actionLabel = messageInfo && messageInfo.actionLabel;
	this.action = messageInfo && messageInfo.action || this.suppress.bind( this );
	this.suppressed = false;
	// @var {Function}
	this.onSuppressedCallback = null;
};

/* Methods */

mw.cx.dm.TranslationIssue.prototype.getName = function () {
	return this.name;
};

mw.cx.dm.TranslationIssue.prototype.getTitle = function () {
	return this.title;
};

mw.cx.dm.TranslationIssue.prototype.getMessage = function () {
	return this.message;
};

mw.cx.dm.TranslationIssue.prototype.getType = function () {
	return this.type;
};

mw.cx.dm.TranslationIssue.prototype.getHelpLink = function () {
	return this.help;
};

mw.cx.dm.TranslationIssue.prototype.isResolvable = function () {
	return this.resolvable;
};

mw.cx.dm.TranslationIssue.prototype.getAction = function () {
	return this.action;
};

mw.cx.dm.TranslationIssue.prototype.getIcon = function () {
	return this.actionIcon;
};

mw.cx.dm.TranslationIssue.prototype.getLabel = function () {
	return this.actionLabel;
};

mw.cx.dm.TranslationIssue.prototype.suppress = function () {
	this.suppressed = true;

	if ( this.onSuppressedCallback ) {
		this.onSuppressedCallback();
	}
};

mw.cx.dm.TranslationIssue.prototype.isSuppressed = function () {
	return this.suppressed;
};

mw.cx.dm.TranslationIssue.prototype.setSuppressCallback = function ( fn ) {
	this.onSuppressedCallback = fn;
};
