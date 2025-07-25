if (import.meta.env.PROD) {
  const {
    CdxButton,
    CdxIcon,
    CdxDialog,
    CdxInfoChip,
    CdxSearchInput,
    CdxTextInput,
    CdxMenu,
    CdxMessage,
    CdxTabs,
    CdxTab,
    CdxField,
    CdxRadio,
  } = require("../codex.js");

  window.Codex = {
    CdxButton,
    CdxIcon,
    CdxDialog,
    CdxInfoChip,
    CdxSearchInput,
    CdxTextInput,
    CdxMenu,
    CdxMessage,
    CdxTabs,
    CdxTab,
    CdxField,
    CdxRadio,
  };
}
