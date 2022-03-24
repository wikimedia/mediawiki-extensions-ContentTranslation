import { setTranslationURLParams, replaceUrl } from "@/utils/urlHandler";
import useApplicationState from "@/composables/useApplicationState";
import { computed, ref } from "vue";

/**
 * @param {VueRouter} router
 * @param {Store} store
 */
export default (router, store) => {
  const urlParams = new URLSearchParams(location.search);
  const preFilledSectionTitle = ref(urlParams.get("section"));

  const { currentSourceSection, currentSectionSuggestion: sectionSuggestion } =
    useApplicationState(store);

  const translationExists = computed(
    () => !!sectionSuggestion.value?.translationExists
  );

  const clearPreFilledSection = () => {
    preFilledSectionTitle.value = null;
    urlParams.delete("section");

    replaceUrl(Object.fromEntries(urlParams));
  };

  /**
   * 1. If "section" URL parameter exists, then try to select this section
   * as current source section. If this section title is valid, navigate
   * to "Compare contents" screen. If not, remove this URL parameter from the URL
   * 2. If no section has been pre-selected, and article exists in both source and
   * target languages, navigate to the "Pick a section" step
   * 3. If article doesn't exist in target language, then the lead section should
   * be selected for translation, and user should be navigated to the Quick Tutorial
   * step.
   *
   * @return {Promise<void>}
   */
  const onSectionSelectorClick = async () => {
    if (!!preFilledSectionTitle.value) {
      await store.dispatch(
        "application/selectPageSectionByTitle",
        preFilledSectionTitle.value
      );

      if (!!currentSourceSection.value) {
        router.push({
          name: "sx-content-comparator",
          params: { force: true },
        });
      } else {
        clearPreFilledSection();
      }
    } else if (translationExists.value) {
      router.push({ name: "sx-section-selector" });
    } else {
      await store.dispatch("application/selectPageSectionByIndex", 0);
      router.push({ name: "sx-quick-tutorial", params: { force: true } });
    }
    setTranslationURLParams(sectionSuggestion.value);
  };

  return {
    clearPreFilledSection,
    onSectionSelectorClick,
    preFilledSectionTitle,
  };
};
