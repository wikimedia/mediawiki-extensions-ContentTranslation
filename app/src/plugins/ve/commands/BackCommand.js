/**
 * Back command
 */
SXEditorBackCommand = function SXEditorBackCommand() {
  // Parent constructor
  SXEditorBackCommand.super.call(this, "back");
};
OO.inheritClass(SXEditorBackCommand, ve.ui.Command);

SXEditorBackCommand.prototype.execute = function() {
  ve.init.target.back();
};
ve.ui.commandRegistry.register(new SXEditorBackCommand());
module.exports = SXEditorBackCommand;
