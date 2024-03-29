if (import.meta.env.PROD) {
  const { CdxButton, CdxIcon, CdxDialog } = require("../codex.js");

  window.Codex = { CdxButton, CdxIcon, CdxDialog };
}
