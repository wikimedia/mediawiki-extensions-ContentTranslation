/**
 * Back tool
 */
SXEditorBackTool = function SXEditorBackTool() {
  // Parent constructor
  SXEditorBackTool.super.apply(this, arguments);
};
OO.inheritClass(SXEditorBackTool, ve.ui.Tool);
SXEditorBackTool.static.name = "back";
SXEditorBackTool.static.group = "navigation";
SXEditorBackTool.static.icon = "close";
SXEditorBackTool.static.title = OO.ui.deferMsg(
  "visualeditor-backbutton-tooltip"
);
SXEditorBackTool.static.commandName = "back";

/**
 * On state updated event handler
 */
SXEditorBackTool.prototype.onUpdateState = function() {
  // Parent method
  SXEditorBackTool.super.prototype.onUpdateState.apply(this, arguments);
  this.setActive(false);
  this.setDisabled(false);
};

ve.ui.toolFactory.register(SXEditorBackTool);
module.exports = SXEditorBackTool;
