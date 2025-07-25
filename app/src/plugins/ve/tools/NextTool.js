/**
 * Mobile Next tool
 */
const SXEditorNextTool = function SXEditorNextTool() {
  // Parent Constructor
  SXEditorNextTool.super.apply(this, arguments);
};
OO.inheritClass(SXEditorNextTool, ve.ui.Tool);
SXEditorNextTool.static.name = "sxNext";
SXEditorNextTool.static.icon = "next";
SXEditorNextTool.static.flags = ["primary", "progressive"];
SXEditorNextTool.static.group = "navigation";
SXEditorNextTool.static.displayBothIconAndLabel = false;
SXEditorNextTool.static.commandName = "next";
SXEditorNextTool.static.autoAddToCatchall = false;

/**
 * On state updated event handler
 */
SXEditorNextTool.prototype.onUpdateState = function () {
  // Parent method
  SXEditorNextTool.super.prototype.onUpdateState.apply(this, arguments);
  this.setActive(true);
  this.setDisabled(false);
};
ve.ui.toolFactory.register(SXEditorNextTool);
