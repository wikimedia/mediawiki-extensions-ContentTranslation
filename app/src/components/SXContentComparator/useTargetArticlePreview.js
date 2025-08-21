import { computed, createApp } from "vue";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder.vue";
import { useI18n } from "vue-banana-i18n";
import { useStore } from "vuex";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useCurrentPages from "@/composables/useCurrentPages";
import useURLHandler from "@/composables/useURLHandler";
import findNextSectionForPlaceholder from "./findNextSectionForPlaceholder";

/**
 * @return {ComputedRef<string>}
 */
const useTargetArticlePreview = () => {
  const store = useStore();
  const { sectionSuggestion: suggestion } = useCurrentSectionSuggestion();
  const { currentTargetPage: targetPage } = useCurrentPages();
  const { sectionURLParameter } = useURLHandler();

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

  const appendixSectionTitles = computed(() => {
    const { appendixSectionTitles } = store.state.suggestions;

    return appendixSectionTitles[suggestion.value.targetLanguage] || [];
  });

  /**
   * This getter returns the section title, before which we need to position the new section placeholder.
   * If none such section is found (and new section should be published at the end of the target page as "new"),
   * it returns null
   *
   * @returns {string|null}
   */
  const nextSectionTitleForPlaceholder = computed(() =>
    findNextSectionForPlaceholder({
      sourceSectionTitle: sectionURLParameter.value,
      sourceSectionTitles: suggestion.value.sourceSections,
      targetSectionTitles: suggestion.value.targetSections,
      presentSectionMappings: suggestion.value.presentSections,
      targetAppendixSectionTitles: appendixSectionTitles.value,
    })
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
    if (!targetPage.value?.content) {
      return null;
    }
    // Create new div with target page content
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = targetPage.value.content;

    removeBaseElements(contentDiv);
    const placeholderEl = createNewSectionPlaceholderElement();

    if (nextSectionTitleForPlaceholder.value) {
      // Find next section header element
      const matchedHeaders = Array.from(
        contentDiv.querySelectorAll("h2")
      ).filter((h2) =>
        h2.textContent.match(nextSectionTitleForPlaceholder.value)
      );

      if (matchedHeaders && matchedHeaders.length) {
        const nextSectionHeader = matchedHeaders[0].parentNode;

        // Insert placeholder element before first appendix section header
        nextSectionHeader.parentNode.insertBefore(
          placeholderEl,
          nextSectionHeader
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
