import { computed } from "vue";

/**
 * @param {SubSection} subSection
 * @return {ComputedRef<string>}
 */
const getContent = (subSection) =>
  computed(() => {
    if (subSection.isBlockTemplate) {
      return subSection.isTranslated
        ? subSection.translatedContent
        : subSection.node.innerHTML;
    }

    const sentenceClass = "sx-sentence-selector__section-sentence";

    const cloneNode = subSection.node.cloneNode(true);
    const segments = Array.from(cloneNode.getElementsByClassName("cx-segment"));

    segments.forEach((segment) => {
      const sentence = subSection.getSentenceById(segment.dataset.segmentid);

      segment.classList.add(sentenceClass, "py-1", "me-1");
      const sentenceClasses = ["untranslated", "translated", "selected"].map(
        (postfix) => `${sentenceClass}--${postfix}`
      );
      segment.classList.remove(...sentenceClasses);

      if (sentence.selected) {
        segment.classList.add(`${sentenceClass}--selected`);
      }

      const highLightPostfix = sentence.isTranslated
        ? "translated"
        : "untranslated";
      segment.classList.add(`${sentenceClass}--${highLightPostfix}`);
      segment.innerHTML = sentence.content;
    });

    return cloneNode.innerHTML;
  });

export default getContent;
