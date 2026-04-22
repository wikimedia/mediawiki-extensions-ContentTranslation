import pageApi from "@/wiki/mw/api/page";
import { useStore } from "vuex";

/** @type {Object.<string, Promise<void>>} */
const pendingRequests = {};

/**
 * Returns a function that fetches language links for a given language and title,
 * storing them in the store if they do not already exist.
 *
 * @return {function(language: string, title: string): Promise<void>}
 */
const useLanguageTitlesFetch = () => {
  const store = useStore();

  return (language, title) => {
    const key = `${language}:${title}`;

    if (store.getters["mediawiki/getLanguageTitleGroup"](language, title)) {
      // Already exist in store
      return Promise.resolve();
    }

    if (pendingRequests[key]) {
      // Already being fetched — return the same promise
      return pendingRequests[key];
    }

    pendingRequests[key] = pageApi
      .fetchLanguageTitles(language, title)
      .then((languageTitleGroup) => {
        delete pendingRequests[key];

        if (languageTitleGroup) {
          store.commit("mediawiki/addLanguageTitleGroup", languageTitleGroup);
        }
      });

    return pendingRequests[key];
  };
};

export default useLanguageTitlesFetch;
