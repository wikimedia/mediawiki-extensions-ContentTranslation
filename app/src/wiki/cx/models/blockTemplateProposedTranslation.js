export default class BlockTemplateProposedTranslation {
  constructor(content) {
    this.content = content;
  }

  /**
   * This getter returns the template name of the current
   * proposed translation of a block template subsection.
   * If no data for this template name exist, null is returned.
   *
   * @return {string|null}
   */
  get templateName() {
    const div = document.createElement("div");
    div.innerHTML = content;
    const template = div.firstElementChild;
    const mwData = JSON.parse(template.dataset?.mw || "{}");
    // We currently do NOT support multi part templates. For this
    // reason, we only about the first part (parts[0]) of mwData
    const templateData = mwData?.parts?.[0]?.template?.target || { wt: null };

    return templateData.wt;
  }
}
