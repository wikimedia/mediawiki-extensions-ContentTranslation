import cxSuggestionsApi from "../../../wiki/cx/api/suggestions";
import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
import ArticleSuggestion from "@/wiki/cx/models/articleSuggestion";

/**
 * Given a language pair and an article title this action:
 * 1. If matching sectionSuggestion model exists in state, returns it
 * 2. If no such model exists, it fetches sectionSuggestion model from API.
 *    If API response is valid, it stores the model in vuex state inside
 *    sectionSuggestions state variable, fetches corresponding page metadata
 *    for source article and returns the model.
 * 3. If the API response is empty then the suggestion to be loaded is a page
 *    suggestion. To support this case, page metadata are fetched and a page
 *    suggestion is stored inside vuex pageSuggestions state variable. Finally,
 *    a new sectionSuggestion model is created and returned to support creation
 *    of new article by translating the lead section.
 * If page metadata cannot be loaded, an Error with appropriate message
 * is being thrown.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {object} payload
 * @param {string} payload.sourceLanguage
 * @param {string} payload.targetLanguage
 * @param {string} payload.sourceTitle
 * @return {Promise<SectionSuggestion>}
 */
async function loadSectionSuggestion(
  { commit, dispatch, getters, rootGetters },
  { sourceLanguage, targetLanguage, sourceTitle }
) {
  /** @type {SectionSuggestion|null} */
  let suggestion = getters.getSectionSuggestionsForArticle(
    sourceLanguage,
    targetLanguage,
    sourceTitle
  );

  if (!suggestion) {
    /** @type {SectionSuggestion|null} */
    suggestion = await cxSuggestionsApi.fetchSectionSuggestions(
      sourceLanguage,
      sourceTitle,
      targetLanguage
    );

    try {
      await dispatch(
        "mediawiki/fetchPageMetadata",
        { language: sourceLanguage, titles: [sourceTitle] },
        { root: true }
      );

      if (!suggestion) {
        const page = rootGetters["mediawiki/getPage"](
          sourceLanguage,
          sourceTitle
        );
        suggestion = new SectionSuggestion({
          sourceLanguage,
          targetLanguage,
          // suggestion source title is directly displayed to the user (it's used in v-text
          // directives in some SFCs), so use the normalized page title here
          sourceTitle: page.title,
        });
        commit(
          "addPageSuggestion",
          new ArticleSuggestion({
            sourceLanguage,
            targetLanguage,
            sourceTitle,
            langLinksCount: page.langLinksCount,
            wikidataId: page.wikidataId,
          })
        );
      } else {
        commit("addSectionSuggestion", suggestion);
      }
    } catch (e) {
      throw new Error(
        `No page metadata found for title ${sourceTitle} and language pair ${sourceLanguage}-${targetLanguage}`
      );
    }
  }

  return suggestion;
}

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
  loadSectionSuggestion,
};
