import pageApi from "@/wiki/mw/api/page";
import { useStore } from "vuex";

// const { sourceLanguage, sourceTitle } = state.currentSectionSuggestion;
// const payload = { language: sourceLanguage, title: sourceTitle };
const useLanguageTitlesFetch = () => {
  const store = useStore();

  return (language, title) => {
    if (store.getters["mediawiki/getLanguageTitleGroup"](language, title)) {
      // Already exist in store.
      return;
    }

    return pageApi
      .fetchLanguageTitles(language, title)
      .then(
        (languageTitleGroup) =>
          languageTitleGroup &&
          store.commit("mediawiki/addLanguageTitleGroup", languageTitleGroup)
      );
  };
};

export default useLanguageTitlesFetch;
