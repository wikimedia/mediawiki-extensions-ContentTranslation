import { computed, createApp } from "vue";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder.vue";
import { useI18n } from "vue-banana-i18n";
import { useStore } from "vuex";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentPages from "@/composables/useCurrentPages";

/**
 * @return {ComputedRef<string>}
 */
const useTargetArticlePreview = () => {
  const store = useStore();
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
  const { currentTargetPage: targetPage } = useCurrentPages();

  const bananaI18n = useI18n();

  const createNewSectionPlaceholderElement = () => {
    const placeholderInstance = createApp(
      SxContentComparatorNewSectionPlaceholder,
      {
        placeholderTitle: bananaI18n.i18n(
          "cx-sx-content-comparator-missing-section-placeholder-title"
        ),
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
