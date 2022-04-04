import { computed, createApp } from "vue";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder.vue";
import useCompareContents from "./useCompareContents";
import useApplicationState from "@/composables/useApplicationState";

/**
 * @param {Store} store
 * @param {function} i18n
 * @return {ComputedRef<string>}
 */
const useTargetArticlePreview = (store, i18n) => {
  const { isCurrentSectionMapped, targetPage } = useCompareContents(store);
  const { currentSectionSuggestion: suggestion } = useApplicationState(store);

  const createNewSectionPlaceholderElement = () => {
    const placeholderInstance = createApp(
      SxContentComparatorNewSectionPlaceholder,
      {
        isMappedSection: isCurrentSectionMapped.value,
        i18n,
      }
    );

    return placeholderInstance.mount(document.createElement("div")).$el;
  };

  const getFirstAppendixTitleBySectionSuggestion = (suggestion) =>
    store.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
      suggestion
    );

  // <base> elements mess with Vue Router, affecting history.pushState() calls
  // Reference: https://router.vuejs.org/api/#createwebhashhistory
  // Remove them to avoid complications
  const removeBaseElements = (articleElement) => {
    const baseElements = articleElement.getElementsByTagName("base");
    Array.from(baseElements).forEach((baseEl) =>
      baseEl.parentNode.removeChild(baseEl)
    );
  };

  return computed(() => {
    // Create new div with target page content
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = targetPage.value?.content;

    removeBaseElements(contentDiv);
    const placeholderEl = createNewSectionPlaceholderElement();
    // If "References" section (or a similar one - e.g "See also" etc)
    // is present, position new section placeholder before that section
    const firstAppendixTitle = getFirstAppendixTitleBySectionSuggestion(
      suggestion.value
    );

    if (firstAppendixTitle) {
      // Find first appendix section header element
      const matchedHeaders = Array.from(
        contentDiv.querySelectorAll("h2")
      ).filter((h2) => h2.textContent.match(firstAppendixTitle));

      if (matchedHeaders && matchedHeaders.length) {
        const firstAppendixSectionHeader = matchedHeaders[0].parentNode;

        // Insert placeholder element before first appendix section header
        firstAppendixSectionHeader.parentNode.insertBefore(
          placeholderEl,
          firstAppendixSectionHeader
        );
      }
    } else {
      // If no "References" or similar section exists in target article,
      // append new section placeholder to the end of the target article
      contentDiv.appendChild(placeholderEl);
    }

    return contentDiv.innerHTML;
  });
};

export default useTargetArticlePreview;
