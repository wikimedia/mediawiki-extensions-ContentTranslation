/**
 * @class
 * @constructor
 * @param {string} name Unique issue identifier
 * @param {mw.Message|string} message Main message describing the translation issue.
 * Use mw.Message object for registered messages. For messages which are properly parsed,
 * string type can be used.
 * @param {Object} [messageInfo]
 * @cfg {string} [title]
 * @cfg {string} [type='warning'] 'warning' or 'error'
 * @cfg {string} [help]
 * @cfg {boolean} [resolvable=false]
 * @cfg {string} [actionIcon='check']
 * @cfg {string} [actionLabel]
 * @cfg {Function} [action]
 * @cfg {Object[]} [additionalButtons] Array of additional button configurations declaring icon, label and action.
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
	this.additionalButtons = messageInfo && messageInfo.additionalButtons;
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

/**
 * Get the HTML content of the message.
 *
 * @return {jQuery|string} If message is registered, it's being parsed as DOM. HTML strings are
 * considered to be already parsed messages.
 */
mw.cx.dm.TranslationIssue.prototype.getMessageContent = function () {
	if ( this.message instanceof mw.Message ) {
		return this.message.parseDom();
	}

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

mw.cx.dm.TranslationIssue.prototype.getAdditionalButtons = function () {
	return this.additionalButtons;
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
