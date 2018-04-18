/**
 * @class
 * @constructor
 * @param {string} title
 * @param {string} message
 * @param {Object} [messageInfo]
 * @cfg {string} [type='warning'] 'warning' or 'error'
 * @cfg {string} [help]
 * @cfg {boolean} [resolvable=false]
 * @cfg {string} [actionIcon='check']
 * @cfg {string} [actionLabel]
 */
mw.cx.dm.TranslationIssue = function CXTranslationIssue( title, message, messageInfo ) {
	this.title = title;
	this.message = message;
	this.type = messageInfo && messageInfo.type || 'warning';
	this.help = messageInfo && messageInfo.help;
	this.resolvable = messageInfo && messageInfo.resolvable === true;
	this.actionIcon = messageInfo && messageInfo.actionIcon || 'check';
	this.actionLabel = messageInfo && messageInfo.actionLabel || mw.msg( 'cx-tools-linter-mark-as-resolved' );
};

/* Methods */

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

mw.cx.dm.TranslationIssue.prototype.getIcon = function () {
	return this.actionIcon;
};

mw.cx.dm.TranslationIssue.prototype.getLabel = function () {
	return this.actionLabel;
};
