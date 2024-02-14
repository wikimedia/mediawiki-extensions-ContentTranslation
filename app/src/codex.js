if (import.meta.env.PROD) {
  const { CdxButton, CdxIcon } = require("../codex.js");

  window.Codex = { CdxButton, CdxIcon };
}
