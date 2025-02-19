import { useStore } from "vuex";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";

const useAppendixSectionTitlesFetch = () => {
  const store = useStore();

  return async (language) => {
    if (store.getters["suggestions/appendixTitlesExistForLanguage"](language)) {
      return;
    }

    const appendixTitles =
      await cxSuggestionsApi.fetchAppendixTargetSectionTitles(language);

    store.commit("suggestions/addAppendixSectionTitlesForLanguage", {
      language,
      titles: appendixTitles,
    });
  };
};

export default useAppendixSectionTitlesFetch;
