import { useStore } from "vuex";
import segmentedContentConverter from "@/utils/segmentedContentConverter";
import { loadVEModules } from "@/plugins/ve";

/**
 * This method returns an asynchronous function that given a source language
 * and a source title, gets the corresponding page from the store, resolves
 * the references within its contents, and finally updates the page sections
 * to include these resolved references. Since, this is natively a synchronous
 * operation, it is wrapped inside a setTimeout callback with zero waiting time,
 * so that it is executed once the JS call stack is empty.
 *
 * @return {function(string, string): Promise}
 */
const useContentReferencesResolve = () => {
  const store = useStore();

  return async (sourceLanguage, sourceTitle) => {
    const existingPage = store.getters["mediawiki/getPage"](
      sourceLanguage,
      sourceTitle
    );

    if (!existingPage) {
      throw new Error(
        `[CX] No page found for the ${sourceLanguage} language and the ${sourceTitle} title`
      );
    }

    await loadVEModules();

    return new Promise((resolve) => {
      // Add reference resolution as a setTimeout callback, to make it asynchronous.
      setTimeout(() => {
        const updatedSections =
          segmentedContentConverter.convertSegmentedContentToPageSections(
            existingPage.content,
            true // resolve references
          );
        existingPage.updateSections(updatedSections);

        resolve();
      }, 0);
    });
  };
};

export default useContentReferencesResolve;
