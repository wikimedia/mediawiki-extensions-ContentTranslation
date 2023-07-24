import { setTranslationURLParams, replaceUrl } from "@/utils/urlHandler";
import useApplicationState from "@/composables/useApplicationState";
import { computed, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { siteMapper } from "@/utils/mediawikiHelper";
import usePageSectionSelect from "@/composables/usePageSectionSelect";

export default () => {
  const router = useRouter();
  const store = useStore();
  const breakpoints = inject("breakpoints");

  const urlParams = new URLSearchParams(location.search);
  const preFilledSectionTitle = ref(urlParams.get("section"));

  const {
    currentSourceSection,
    currentSectionSuggestion: sectionSuggestion,
    sourceLanguage,
    targetLanguage,
  } = useApplicationState(store);

  const targetPageExists = computed(
    () => !!sectionSuggestion.value?.targetTitle
  );

  const clearPreFilledSection = () => {
    preFilledSectionTitle.value = null;
    urlParams.delete("section");

    replaceUrl(Object.fromEntries(urlParams));
  };

  const { selectPageSectionByIndex, selectPageSectionByTitle } =
    usePageSectionSelect();

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
      await selectPageSectionByTitle(preFilledSectionTitle.value);

      if (!!currentSourceSection.value) {
        router.push({
          name: "sx-content-comparator",
          query: { force: true },
        });
      } else {
        clearPreFilledSection();
      }
    } else if (targetPageExists.value) {
      router.push({ name: "sx-section-selector" });
    } else {
      return startNewTranslation();
    }
    setTranslationURLParams(sectionSuggestion.value);
  };

  const startCX = () => {
    const sourceTitle = sectionSuggestion.value?.sourceTitle;
    siteMapper.setCXToken(
      sourceLanguage.value,
      targetLanguage.value,
      sourceTitle
    );
    location.href = siteMapper.getCXUrl(
      sourceTitle,
      null,
      sourceLanguage.value,
      targetLanguage.value
    );
  };

  const startNewTranslation = async () => {
    if (!siteMapper.isMobileDomain() && breakpoints.value.tabletAndUp) {
      startCX();
    } else {
      await selectPageSectionByIndex(0);

      if (store.getters["translator/userHasSectionTranslations"]) {
        router.push({ name: "sx-sentence-selector", query: { force: true } });
      } else {
        router.push({ name: "sx-quick-tutorial", query: { force: true } });
      }
      setTranslationURLParams(sectionSuggestion.value);
    }
  };

  return {
    clearPreFilledSection,
    startNewTranslation,
    onSectionSelectorClick,
    preFilledSectionTitle,
  };
};
