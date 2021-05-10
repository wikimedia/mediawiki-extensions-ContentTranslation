/**
 * Next command
 */
SXEditorNextCommand = function SXEditorNextCommand() {
  // Parent constructor
  SXEditorNextCommand.super.call(this, "next");
};
OO.inheritClass(SXEditorNextCommand, ve.ui.Command);

SXEditorNextCommand.prototype.execute = function() {
  ve.init.target.next();
};
ve.ui.commandRegistry.register(new SXEditorNextCommand());
module.exports = SXEditorNextCommand;
