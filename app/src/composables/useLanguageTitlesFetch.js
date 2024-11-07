import pageApi from "@/wiki/mw/api/page";
import { useStore } from "vuex";

let pendingRequests = [];

/**
 * Returns a function that fetches language links for a given language and title,
 * storing them in the store if they do not already exist.
 *
 * @return {function(language: string, title: string): Promise<void>}
 */
const useLanguageTitlesFetch = () => {
  const store = useStore();

  return (language, title) => {
    const pendingRequestHash = `${language}:${title}`;

    if (
      store.getters["mediawiki/getLanguageTitleGroup"](language, title) ||
      pendingRequests.includes(pendingRequestHash)
    ) {
      // Already exist in store or already being fetched
      return Promise.resolve();
    }

    pendingRequests.push(pendingRequestHash);

    return pageApi
      .fetchLanguageTitles(language, title)
      .then((languageTitleGroup) => {
        pendingRequests = pendingRequests.filter(
          (hash) => hash !== pendingRequestHash
        );

        if (languageTitleGroup) {
          store.commit("mediawiki/addLanguageTitleGroup", languageTitleGroup);
        }
      });
  };
};

export default useLanguageTitlesFetch;
