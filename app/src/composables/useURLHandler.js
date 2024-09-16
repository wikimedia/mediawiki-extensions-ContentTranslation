import { getUrl } from "@/utils/mediawikiHelper";
import { ref, computed } from "vue";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";
import { EDITS_SUGGESTION_PROVIDER } from "@/composables/useSuggestionsFetchByEdits";

const sourceLanguageURLParameter = ref(null);
const targetLanguageURLParameter = ref(null);
const pageURLParameter = ref(null);
const sectionURLParameter = ref(null);
const draftURLParameter = ref(null);
const filterTypeURLParameter = ref(EDITS_SUGGESTION_PROVIDER);
const filterIdURLParameter = ref(null);

/**
 * @type {ComputedRef<{id: string, type: string}>}
 */
const currentSuggestionFilters = computed(() => ({
  type: filterTypeURLParameter.value,
  id: filterIdURLParameter.value || filterTypeURLParameter.value,
}));

/**
 * @param {string} filterType
 * @param {string|null} filterId
 */
const setFilterURLParams = (filterType, filterId) => {
  filterTypeURLParameter.value = filterType;
  filterIdURLParameter.value = filterId;
  setUrlParam("filter-type", filterType);

  if (filterId) {
    setUrlParam("filter-id", filterId);
  }
};

/**
 * @param {SectionSuggestion|DraftTranslation|null} translationToBeStarted
 */
const setTranslationURLParams = (translationToBeStarted) => {
  const params = new URLSearchParams(location.search);
  // both SectionSuggestion and Translation models have the below properties
  params.set("page", translationToBeStarted?.sourceTitle);
  params.set("from", translationToBeStarted?.sourceLanguage);
  params.set("to", translationToBeStarted?.targetLanguage);

  pageURLParameter.value = translationToBeStarted?.sourceTitle;
  sourceLanguageURLParameter.value = translationToBeStarted?.sourceLanguage;
  targetLanguageURLParameter.value = translationToBeStarted?.targetLanguage;

  if (translationToBeStarted instanceof DraftTranslation) {
    params.set("draft", true);
    draftURLParameter.value = true;

    if (!translationToBeStarted.isLeadSectionTranslation) {
      params.set("section", translationToBeStarted.sourceSectionTitle);
      sectionURLParameter.value = translationToBeStarted.sourceSectionTitle;
    }
  }
  params.delete("title");
  replaceUrl(Object.fromEntries(params));
};

const setSectionURLParam = (sectionTitle) => {
  sectionURLParameter.value = sectionTitle;
  setUrlParam("section", sectionTitle);
};

const setPageURLParam = (pageTitle) => {
  pageURLParameter.value = pageTitle;
  setUrlParam("page", pageTitle);
};

/**
 * @param {object} params A mapping of query parameter names to values,
 *  e.g. `{ action: 'edit' }`
 */
const replaceUrl = (params) => {
  history.replaceState(
    {},
    document.title,
    getUrl("Special:ContentTranslation", params)
  );
};

const initializeURLState = () => {
  const urlParams = new URLSearchParams(location.search);
  pageURLParameter.value = urlParams.get("page");
  sourceLanguageURLParameter.value = urlParams.get("from");
  targetLanguageURLParameter.value = urlParams.get("to");
  sectionURLParameter.value = urlParams.get("section");

  if (urlParams.get("filter-type")) {
    filterTypeURLParameter.value = urlParams.get("filter-type");
  }

  if (urlParams.get("filter-id")) {
    filterIdURLParameter.value = urlParams.get("filter-id");
  }
};

const clearSectionURLParameter = () => {
  const urlParams = new URLSearchParams(location.search);

  sectionURLParameter.value = null;
  urlParams.delete("section");
  urlParams.delete("title");
  replaceUrl(Object.fromEntries(urlParams));
};

const setUrlParam = (param, value) => {
  const params = new URLSearchParams(location.search);
  params.set(param, value);
  params.delete("title");
  replaceUrl(Object.fromEntries(params));
};

const getUrlParam = (param) => {
  const params = new URLSearchParams(location.search);

  return params.get(param);
};

const setLanguageURLParams = (sourceLanguage, targetLanguage) => {
  const params = new URLSearchParams(location.search);
  params.set("from", sourceLanguage);
  params.set("to", targetLanguage);

  sourceLanguageURLParameter.value = sourceLanguage;
  targetLanguageURLParameter.value = targetLanguage;
  params.delete("title");
  replaceUrl(Object.fromEntries(params));
};

const clearURLParameters = () => {
  sourceLanguageURLParameter.value = null;
  targetLanguageURLParameter.value = null;
  pageURLParameter.value = null;
  sectionURLParameter.value = null;

  replaceUrl(null);
};

const useURLHandler = () => {
  return {
    setLanguageURLParams,
    setSectionURLParam,
    setTranslationURLParams,
    initializeURLState,
    clearURLParameters,
    clearSectionURLParameter,
    setUrlParam,
    getUrlParam,
    pageURLParameter,
    sourceLanguageURLParameter,
    targetLanguageURLParameter,
    sectionURLParameter,
    draftURLParameter,
    setPageURLParam,
    currentSuggestionFilters,
    setFilterURLParams,
  };
};

export default useURLHandler;
