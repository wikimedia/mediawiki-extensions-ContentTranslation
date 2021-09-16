import Vue from "vue";
import SxContentComparatorNewSectionPlaceholder from "./NewSectionPlaceholder";
import { computed, ref, watch } from "@vue/composition-api";
import store from "@/store";
import useApplicationState from "@/composables/useApplicationState";

const useCompareContents = () => {
  const discardedSections = ref([]);

  const {
    currentSectionSuggestion: suggestion,
    currentSourceSection: sourceSection
  } = useApplicationState();

  const targetTitle = computed(() => suggestion.value.targetTitle);
  const sourceSectionTitle = computed(
    () => store.getters["application/getCurrentSourceSectionTitle"]
  );

  const targetPage = computed(() =>
    store.getters["mediawiki/getPage"](
      suggestion.value.targetLanguage,
      targetTitle.value
    )
  );

  const activeSectionTargetTitle = computed(
    () =>
      suggestion.value.missingSections[sourceSectionTitle.value] ||
      suggestion.value.presentSections[sourceSectionTitle.value] ||
      ""
  );

  const targetSectionAnchor = computed(() =>
    (targetSection.value?.title || "").replace(/ /g, "_")
  );

  const targetSection = computed(() =>
    targetPage.value?.getSectionByTitle(activeSectionTargetTitle.value)
  );

  const sourceSectionContent = computed(() => sourceSection.value?.html);
  const targetSectionContent = computed(() => targetSection.value?.html);

  const getFirstAppendixTitleBySectionSuggestion = suggestion =>
    store.getters["suggestions/getFirstAppendixTitleBySectionSuggestion"](
      suggestion
    );

  const createNewSectionPlaceholderElement = () => {
    const PlaceholderClass = Vue.extend(
      SxContentComparatorNewSectionPlaceholder
    );

    const placeholderInstance = new PlaceholderClass({
      props: {
        isMappedSection: isCurrentSectionMapped.value
      }
    });

    return placeholderInstance.$mount().$el;
  };

  const targetPageContent = computed(() => {
    // Create new div with target page content
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = targetPage.value?.content;

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
      ).filter(h2 => h2.textContent.match(firstAppendixTitle));
      const firstAppendixSectionHeader = matchedHeaders[0].parentNode;

      // Insert placeholder element before first appendix section header
      firstAppendixSectionHeader.parentNode.insertBefore(
        placeholderEl,
        firstAppendixSectionHeader
      );
    } else {
      // If no "References" or similar section exists in target article,
      // append new section placeholder to the end of the target article
      contentDiv.appendChild(placeholderEl);
    }

    return contentDiv.innerHTML;
  });

  /**
   * A section is mapped if it's neither missing nor discarded
   * @type {ComputedRef<boolean>}
   */
  const isCurrentSectionMapped = computed(
    () =>
      !store.getters["application/isCurrentSourceSectionMissing"] &&
      !discardedSections.value.includes(activeSectionTargetTitle.value)
  );

  // watch for target title as it is not provided when the proxy suggestion object is created
  // (inside CXSuggestionList), so we'll have to wait until it is loaded from api request
  watch(
    targetTitle,
    () => {
      store.dispatch("mediawiki/fetchPageContent", {
        sourceLanguage: suggestion.value.targetLanguage,
        targetLanguage: suggestion.value.sourceLanguage,
        sourceTitle: targetTitle.value
      });
    },
    { immediate: true }
  );

  return {
    activeSectionTargetTitle,
    discardedSections,
    isCurrentSectionMapped,
    sourceSectionContent,
    sourceSectionTitle,
    targetPageContent,
    targetSectionAnchor,
    targetSectionContent
  };
};

export default useCompareContents;
