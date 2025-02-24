import { useStore } from "vuex";
import pageApi from "@/wiki/mw/api/page";

const usePageMetadataFetch = () => {
  const store = useStore();

  /**
   * Given a language and an array of titles, this action fetches
   * page metadata for each title and returns a promise that is being
   * resolved when all metadata have been fetched and stored in the state
   *
   * @param {object} context
   * @param {object} context.getters
   * @param {function} context.commit
   * @param {object} payload
   * @param {string} payload.language
   * @param {string[]} payload.titles
   * @returns {Promise<void>}
   */
  return (language, titles) => {
    titles = titles.filter(
      (title) => !store.getters["mediawiki/getPage"](language, title)
    );

    const chunkSize = 50;

    const promises = [];

    for (let i = 0; i < titles.length; i += chunkSize) {
      const titlesSubset = titles.slice(i, i + chunkSize);
      const promise = pageApi
        .fetchPages(language, titlesSubset)
        .then((metadataList) =>
          metadataList.forEach((page) =>
            store.commit("mediawiki/addPage", page)
          )
        );
      promises.push(promise);
    }

    return Promise.all(promises);
  };
};

export default usePageMetadataFetch;
