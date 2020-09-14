/**
 * Mobile Next tool
 */
SXEditorNextTool = function SXEditorNextTool() {
  // Parent Constructor
  SXEditorNextTool.super.apply(this, arguments);
};
OO.inheritClass(SXEditorNextTool, ve.ui.Tool);
SXEditorNextTool.static.name = "showMobileNext";
SXEditorNextTool.static.icon = "next";
SXEditorNextTool.static.flags = ["primary", "progressive"];
SXEditorNextTool.static.group = "navigation";
SXEditorNextTool.static.displayBothIconAndLabel = false;
SXEditorNextTool.static.commandName = "next";

/**
 * On state updated event handler
 */
SXEditorNextTool.prototype.onUpdateState = function() {
  // Parent method
  SXEditorNextTool.super.prototype.onUpdateState.apply(this, arguments);
  this.setActive(true);
  this.setDisabled(false);
};
ve.ui.toolFactory.register(SXEditorNextTool);
module.exports = SXEditorNextTool;
