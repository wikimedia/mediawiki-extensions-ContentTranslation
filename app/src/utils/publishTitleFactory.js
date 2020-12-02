const namespaceIds = mw.config.get("wgNamespaceIds");

const namespaceOptions = {
  NEW_SECTION: namespaceIds[""],
  SANDBOX_SECTION: namespaceIds.user
};

export const getTitleForPublishOption = (originalTitle, publishOption) =>
  mw.cx.getTitleForNamespace(originalTitle, namespaceOptions[publishOption]);
