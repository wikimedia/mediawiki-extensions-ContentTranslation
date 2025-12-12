import cxSuggestionsApi from "@/wiki/cx/api/suggestions";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";
import { useStore } from "vuex";
import usePageMetadataFetch from "@/composables/usePageMetadataFetch";
import { ref } from "vue";

/**
 * A cache for previous (or in-progress) promises
 *
 * @type {Map<string, Promise<SectionSuggestion|ArticleSuggestion>>}
 */
const previousRequests = new Map();
/**
 * @type {Ref<UnwrapRef<SectionSuggestion[]>>}
 */
const loadedSectionSuggestions = ref([]);

const useSuggestionLoad = () => {
  const store = useStore();
  const fetchPageMetadata = usePageMetadataFetch();

  /**
   * Given a language pair and an article title this method:
   * 1. If matching sectionSuggestion model exists in state, returns it
   * 2. If no such model exists, it fetches sectionSuggestion model from API.
   *    If API response is valid, it stores the model in vuex state inside
   *    sectionSuggestions state variable, fetches corresponding page metadata
   *    for source article and returns the model.
   * 3. If the API response is empty, then the suggestion to be loaded is a page
   *    suggestion. To support this case, page metadata are fetched and a page
   *    suggestion (ArticleSuggestion model) is stored inside vuex pageSuggestions
   *    state variable and returned to support creation of new article by translating
   *    the lead section.
   *
   * If page metadata cannot be loaded, an Error with appropriate message is being thrown.
   *
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} sourceTitle
   * {Promise<SectionSuggestion|ArticleSuggestion>}
   */
  const loadSuggestion = (sourceLanguage, targetLanguage, sourceTitle) => {
    const key = `${sourceLanguage}:${targetLanguage}:${sourceTitle}`;

    // If a request for the same key is already in progress, return that promise
    if (previousRequests.has(key)) {
      return previousRequests.get(key);
    }

    const doLoadSuggestion = async () => {
      /** @type {SectionSuggestion|null} */
      const suggestion = await cxSuggestionsApi.fetchSectionSuggestion(
        sourceLanguage,
        sourceTitle,
        targetLanguage
      );

      try {
        await fetchPageMetadata(sourceLanguage, [sourceTitle]);

        if (!suggestion) {
          const page = store.getters["mediawiki/getPage"](
            sourceLanguage,
            sourceTitle
          );

          return new ArticleSuggestion({
            sourceLanguage,
            targetLanguage,
            sourceTitle,
            langLinksCount: page.langLinksCount,
            size: page.articleSize,
            wikidataId: page.wikidataId,
          });
        }
      } catch (e) {
        const error = new Error(
          `No page metadata found for title ${sourceTitle} and language pair ${sourceLanguage}-${targetLanguage}. ${e}`
        );
        mw.errorLogger.logError(error, "error.contenttranslation");
        throw error;
      }

      loadedSectionSuggestions.value.push(suggestion);

      return suggestion;
    };

    const loadPromise = doLoadSuggestion();

    // Store in previousRequests
    previousRequests.set(key, loadPromise);

    return loadPromise;
  };

  /**
   * @param {string} sourceLanguage
   * @param {string} targetLanguage
   * @param {string} sourceTitle
   * @returns {SectionSuggestion|null}
   */
  const getLoadedSuggestion = (sourceLanguage, targetLanguage, sourceTitle) =>
    loadedSectionSuggestions.value.find(
      (suggestion) =>
        suggestion.sourceLanguage === sourceLanguage &&
        suggestion.targetLanguage === targetLanguage &&
        suggestion.sourceTitle === sourceTitle
    ) || null;

  return { loadSuggestion, getLoadedSuggestion };
};

export default useSuggestionLoad;
