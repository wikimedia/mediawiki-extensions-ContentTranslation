import cxSuggestionsApi from "../../../wiki/cx/api/suggestions";

async function fetchAppendixSectionTitles({ getters, commit }, language) {
  if (getters.appendixTitlesExistForLanguage(language)) {
    return;
  }
  const appendixTitles =
    await cxSuggestionsApi.fetchAppendixTargetSectionTitles(language);
  commit("addAppendixSectionTitlesForLanguage", {
    language,
    titles: appendixTitles,
  });
}

export default {
  fetchAppendixSectionTitles,
};
