import { getUrl } from "@/utils/mediawikiHelper";
import { ref, computed } from "vue";
import DraftTranslation from "@/wiki/cx/models/draftTranslation";
import useFiltersValidator from "@/composables/useFiltersValidator";
import { useI18n } from "vue-banana-i18n";

const sourceLanguageURLParameter = ref(null);
const targetLanguageURLParameter = ref(null);
const pageURLParameter = ref(null);
const sectionURLParameter = ref(null);
const draftURLParameter = ref(null);
const filterTypeURLParameter = ref(null);
const filterIdURLParameter = ref(null);
const activeDashboardTabParameter = ref(null);

const { validateFilters, filtersValidatorError } = useFiltersValidator();

const parametersMap = {
  from: sourceLanguageURLParameter,
  to: targetLanguageURLParameter,
  section: sectionURLParameter,
  draft: draftURLParameter,
  page: pageURLParameter,
  "active-list": activeDashboardTabParameter,
};
/**
 * @type {ComputedRef<{id: string, type: string}>}
 */
const currentSuggestionFilters = computed(() => ({
  type: filterTypeURLParameter.value,
  id: filterIdURLParameter.value,
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

  const parameterValues = {
    page: translationToBeStarted?.sourceTitle,
    from: translationToBeStarted?.sourceLanguage,
    to: translationToBeStarted?.targetLanguage,
  };

  for (const parameterName in parameterValues) {
    const value = parameterValues[parameterName];
    params.set(parameterName, value);
    parametersMap[parameterName].value = value;
  }

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

const setURLParamAndRef = (parameterName, value) => {
  parametersMap[parameterName].value = value;
  setUrlParam(parameterName, value);
};

const setSectionURLParam = (sectionTitle) => {
  setURLParamAndRef("section", sectionTitle);
};

const setPageURLParam = (pageTitle) => {
  setURLParamAndRef("page", pageTitle);
};

const setActiveDashboardTabParameter = (activeDashboardTab) => {
  setURLParamAndRef("active-list", activeDashboardTab);
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
  const bananaI18n = useI18n();
  const urlParams = new URLSearchParams(location.search);
  pageURLParameter.value = urlParams.get("page");
  sourceLanguageURLParameter.value = urlParams.get("from");
  targetLanguageURLParameter.value = urlParams.get("to");
  sectionURLParameter.value = urlParams.get("section");

  const suggestionFilter = validateFilters({
    type: urlParams.get("filter-type"),
    id: urlParams.get("filter-id"),
  });

  setFilterURLParams(suggestionFilter.type, suggestionFilter.id);

  if (filtersValidatorError.value) {
    mw.notify(bananaI18n.i18n("cx-sx-suggestions-filters-invalid-url"));
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
    activeDashboardTabParameter,
    setActiveDashboardTabParameter,
  };
};

export default useURLHandler;
