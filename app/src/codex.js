if (import.meta.env.PROD) {
  const { CdxButton, CdxIcon, CdxDialog, CdxInfoChip } = require("../codex.js");

  window.Codex = { CdxButton, CdxIcon, CdxDialog, CdxInfoChip };
}
