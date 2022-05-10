import SectionSuggestion from "../../../wiki/cx/models/sectionSuggestion";
import siteApi from "../../../wiki/mw/api/site";
import translatorApi from "../../../wiki/cx/api/translator";
import MTProviderGroup from "../../../wiki/mw/models/mtProviderGroup";
import { siteMapper } from "../../../utils/mediawikiHelper";
import SubSection from "../../../wiki/cx/models/subSection";
import {
  getWikitextFromTemplate,
  isTransclusionNode,
  targetTemplateExists,
} from "../../../utils/templateHelper";

/**
 * This asynchronous action returns the current cxserver jwt token as string.
 * If no such token or current token is expired an api request to
 * fetch new token is being sent. If the api request fails, then
 * an empty string is returned.
 *
 * @param {object} context
 * @param {function} context.dispatch
 * @param {object} context.state
 * @param {function} context.commit
 * @return {Promise<string>}
 */
const getCXServerToken = async ({ dispatch, state, commit }) => {
  if (!state.cxServerToken) {
    await siteApi.fetchCXServerToken().then(
      (token) => {
        // Make sure token.age is configured to a valid value.
        if (token.age <= 30) {
          // Set the default token age
          token.age = 3600;
        }
        const now = Math.floor(Date.now() / 1000);
        // We use `age` instead of `exp` because it is more reliable, as user's
        // clocks might be set to wrong time.
        token.refreshAt = now + token.age - 30;
        commit("setCXServerToken", token);
      },
      (errorCode) => {
        if (errorCode === "token-impossible") {
          // Likely CX extension has not been configured properly.
          // To make development and testing easier, assume that
          // no token is needed.
          const now = Math.floor(Date.now() / 1000);
          // Set a dummy token with higher `refreshAt` time
          commit("setCXServerToken", { jwt: "", refreshAt: now + 3600 * 10 });
        }
      }
    );
  }
  const now = Math.floor(Date.now() / 1000);

  if (state.cxServerToken?.refreshAt <= now) {
    commit("setCXServerToken", null);

    return dispatch("getCXServerToken");
  }

  return state.cxServerToken?.jwt;
};

/**
 * @param {object} context
 * @param {function} context.dispatch
 * @param {FavoriteSuggestion} favorite
 * @return {Promise<void>}
 */
async function startFavoriteSectionTranslation({ dispatch }, favorite) {
  const suggestion = await dispatch(
    "suggestions/loadSectionSuggestion",
    {
      sourceLanguage: favorite.sourceLanguage,
      targetLanguage: favorite.targetLanguage,
      sourceTitle: favorite.title,
    },
    { root: true }
  );
  dispatch("initializeSectionTranslation", suggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {SectionSuggestion|ArticleSuggestion} suggestion
 */
function initializeSectionTranslation({ commit, dispatch }, suggestion) {
  dispatch("getCXServerToken");
  commit("setCurrentSectionSuggestion", suggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {object} context.state
 * @param {object} context.getters
 * @param {function} context.dispatch
 * @param {string} newSourceLanguage
 * @return {Promise<void>}
 */
async function updateSourceLanguage(
  { commit, state, getters, dispatch },
  newSourceLanguage
) {
  // If newly selected source language is same as target language, swap languages
  if (newSourceLanguage === state.targetLanguage) {
    window.location.href = siteMapper.getCXUrl(
      null,
      null,
      newSourceLanguage,
      state.sourceLanguage,
      {}
    );

    return;
  }
  commit("setSourceLanguage", newSourceLanguage);

  // If translation has not started yet, re-fetch suggestions
  if (!state.currentSectionSuggestion) {
    dispatch("suggestions/initializeSuggestions", {}, { root: true });

    return;
  }

  const sourceTitle = getters.getCurrentLanguageTitleGroup.getTitleForLanguage(
    state.sourceLanguage
  );
  let suggestion = new SectionSuggestion({
    sourceLanguage: state.sourceLanguage,
    targetLanguage: state.targetLanguage,
    sourceTitle,
    missing: {},
  });

  if (getters.getCurrentLanguageTitleGroup.hasLanguage(state.targetLanguage)) {
    suggestion = await dispatch(
      "suggestions/loadSectionSuggestion",
      suggestion,
      { root: true }
    );
  }

  dispatch("initializeSectionTranslation", suggestion);
}

/**
 * @param {object} context
 * @param {function} context.commit
 * @param {object} context.state
 * @param {function} context.dispatch
 * @param {string} newTargetLanguage
 * @return {Promise<void>}
 */
async function updateTargetLanguage(
  { state, dispatch, commit },
  newTargetLanguage
) {
  // If newly selected target language is same as source language, swap languages
  const sourceLanguage =
    newTargetLanguage === state.sourceLanguage
      ? state.targetLanguage
      : state.sourceLanguage;

  window.location.href = siteMapper.getCXUrl(
    state.currentSectionSuggestion?.sourceTitle,
    null,
    sourceLanguage,
    newTargetLanguage,
    { sx: true }
  );
}

async function fetchCurrentSectionSuggestionLanguageTitles({
  dispatch,
  state,
}) {
  const { sourceLanguage, sourceTitle } = state.currentSectionSuggestion;
  const payload = { language: sourceLanguage, title: sourceTitle };
  await dispatch("mediawiki/fetchLanguageTitles", payload, { root: true });
}

/**
 * Given a section title this action, sets the page section
 * with the matching title as current page section, if exists.
 * If not, the action fetches page sections from the API, then
 * sets the corresponding page section as current. In case when
 * no page section with the given title exists, null is set as
 * currentPageSection
 *
 * @param {object} context
 * @param {object} context.state
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {string} sectionTitle
 * @return {Promise<void>}
 */
async function selectPageSectionByTitle(
  { state, commit, dispatch, getters },
  sectionTitle
) {
  const suggestion = state.currentSectionSuggestion;
  const page = getters.getCurrentPage;

  const setCurrentSectionByTitle = () => {
    const section = page.getSectionByTitle(sectionTitle);
    commit("setCurrentSourceSection", section);
  };

  if (!page.getSectionByTitle(sectionTitle)) {
    await dispatch("mediawiki/fetchPageContent", suggestion, { root: true });

    // Asynchronously resolve references and update page sections to
    // include this resolved references
    dispatch("mediawiki/resolvePageContentReferences", suggestion, {
      root: true,
    }).then(() => setCurrentSectionByTitle());
  }

  setCurrentSectionByTitle();
}

/**
 * Given the index of a page section inside the current page's sections array,
 * this action sets the corresponding page section as current page section,
 * if exists. If not, the action fetches page sections from the API, then
 * sets the corresponding page section as current. In case when no page section
 * with the given index, null is set as currentPageSection
 *
 * @param {object} context
 * @param {object} context.state
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {number} index
 * @return {Promise<void>}
 */
async function selectPageSectionByIndex(
  { state, commit, dispatch, getters },
  index
) {
  const suggestion = state.currentSectionSuggestion;
  const page = getters.getCurrentPage;

  const setCurrentSectionByIndex = () => {
    const section = page.sections?.[index];

    // If lead section set source page title as proposed page title
    if (index === 0) {
      section.proposedTitleTranslations[
        MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
      ] = page.title;
    }
    commit("setCurrentSourceSection", section);
  };

  if (!page.sections?.[index]) {
    await dispatch("mediawiki/fetchPageContent", suggestion, { root: true });

    // Asynchronously resolve references and update page sections to
    // include this resolved references
    dispatch("mediawiki/resolvePageContentReferences", suggestion, {
      root: true,
    }).then(() => setCurrentSectionByIndex());
  }

  setCurrentSectionByIndex();
}

/**
 * Given an id, this action selects a translation unit for translation.
 * Such translation units are the section title and the section sentences.
 * If the given id is equal to 0, then the section title will be selected.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.state
 * @param {string} id
 */
async function selectTranslationUnitById({ commit, dispatch, state }, id) {
  const { currentSourceSection, currentMTProvider } = state;
  currentSourceSection.selectTranslationUnitById(id);
  await dispatch("translateTranslationUnitById", {
    id,
    provider: currentMTProvider,
  });
  const { followingTranslationUnit } = currentSourceSection;

  if (followingTranslationUnit) {
    await dispatch("translateTranslationUnitById", {
      id: followingTranslationUnit.id,
      provider: currentMTProvider,
    });
  }
}

/**
 * @param {object} context
 * @param {function} context.dispatch
 * @param {object} context.getters
 * @param {function} context.commit
 * @param {object} context.state
 */
function applyProposedTranslationToSelectedTranslationUnit({
  dispatch,
  getters,
  commit,
  state,
}) {
  commit("setTranslationInProgress", true);
  const translation = getters.getCurrentProposedTranslation;
  const { currentSourceSection } = state;
  currentSourceSection.setTranslationForSelectedTranslationUnit(translation);
  dispatch("selectNextTranslationUnit");
}

/**
 * Given an edited translation string, this action applies this
 * translation to the selected translation unit, and selects
 * the next sentence.
 *
 * @param context
 * @param {object} context.state
 * @param {function} context.dispatch
 * @param {function} context.commit
 * @param {string} translation
 */
async function applyEditedTranslationToSelectedTranslationUnit(
  { state, dispatch, commit },
  translation
) {
  commit("setTranslationInProgress", true);

  const div = document.createElement("div");
  div.innerHTML = translation;
  // Remove dummy span node if exists. This node was only added so that VE doesn't add a new paragraph (which is done
  // by default when VE initial content is empty).
  div.querySelectorAll(".sx-edit-dummy-node").forEach((el) => el.remove());
  translation = div.innerHTML;

  const { currentSourceSection, targetLanguage } = state;
  const { selectedContentTranslationUnit } = currentSourceSection;

  if (selectedContentTranslationUnit instanceof SubSection) {
    const { sourceTitle, targetTitle } = state.currentSectionSuggestion;
    /** @type {Element} */
    const templateElement = Array.from(div.children).find((node) =>
      isTransclusionNode(node)
    );

    if (templateElement) {
      translation = await translatorApi.parseTemplateWikitext(
        getWikitextFromTemplate(templateElement),
        targetLanguage,
        targetTitle || sourceTitle
      );
    }
  }
  currentSourceSection.setTranslationForSelectedTranslationUnit(translation);
  dispatch("selectNextTranslationUnit");
}

/**
 * This action clear current selection and selects the following
 * sentence inside section contents.
 *
 * @param {object} context
 * @param {object} context.state
 * @param {function} context.dispatch
 */
function selectNextTranslationUnit({ state, dispatch }) {
  const { followingTranslationUnit } = state.currentSourceSection;

  if (!followingTranslationUnit) {
    return;
  }
  dispatch("selectTranslationUnitById", followingTranslationUnit.id);
}

/**
 * This action clears current selection and selects
 * the previous sentence inside section contents,
 * or the section title, in case the first section
 * sentence is currently selected.
 *
 * @param {object} context
 * @param {object} context.state
 * @param {function} context.dispatch
 */
function selectPreviousTranslationUnit({ state, dispatch }) {
  const { selectedContentTranslationUnitIndex, contentTranslationUnits } =
    state.currentSourceSection;
  const previousIndex = selectedContentTranslationUnitIndex - 1;
  // Id for section title
  let previousId = 0;

  if (previousIndex > -1) {
    previousId = contentTranslationUnits[previousIndex].id;
  }
  dispatch("selectTranslationUnitById", previousId);
}

/**
 * Checks if current MT provider exists and is valid for the
 * given language pair. If not, selects the first provider
 * among the supported ones and sets it as the current MT
 * provider.
 * @return {Promise<void>}
 */
async function initializeMTProviders({ state, dispatch, rootGetters, commit }) {
  const { sourceLanguage, targetLanguage } = state.currentSectionSuggestion;
  await dispatch(
    "mediawiki/fetchMTProviders",
    { sourceLanguage, targetLanguage },
    { root: true }
  );
  const supportedProviders = rootGetters["mediawiki/getSupportedMTProviders"](
    sourceLanguage,
    targetLanguage
  );

  const currentProvider = state.currentMTProvider;

  if (currentProvider && supportedProviders.includes(currentProvider)) {
    return;
  }

  commit("setCurrentMTProvider", supportedProviders[0]);
}

/**
 * Given a valid MT provider, this action updates the
 * currently selected MT provider and translates the
 * currently selected translation unit (section title
 * or section sentence) using this MT provider.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {function} context.dispatch
 * @param {object} context.state
 * @param {string} provider
 */
function updateMTProvider({ commit, dispatch, state }, provider) {
  commit("setCurrentMTProvider", provider);
  const { currentSourceSection } = state;
  const { selectedTranslationUnitId: id } = currentSourceSection;
  dispatch("translateTranslationUnitById", { id, provider });
}

/**
 * Given an id and a valid MT provider, this action
 * translates the original content of the corresponding
 * translation unit, and sets the proposed translation
 * for this provider. If the given id is equal to 0,
 * then the section title is translated.
 *
 * @param {object} context
 * @param {function} context.commit
 * @param {object} context.state
 * @param {function} context.dispatch
 * @param {object} payload
 * @param {string|0} payload.id
 * @param {string} payload.provider
 */
async function translateTranslationUnitById(
  { commit, state, dispatch },
  { id, provider }
) {
  const {
    currentSectionSuggestion,
    currentSourceSection: sourceSection,
    targetLanguage,
  } = state;

  if (sourceSection.hasProposedTranslationByTranslationUnitId(id, provider)) {
    return;
  }

  const { sourceTitle, targetTitle } = currentSectionSuggestion;
  let originalContent = sourceSection.getOriginalContentByTranslationUnitId(id);

  const translationUnit = sourceSection.getContentTranslationUnitById(id);

  // The content of this variable will ultimately be stored as proposed
  // translation for the given translation unit and the given MT provider
  let proposedTranslation;

  /** @type {string} */
  proposedTranslation = await dispatch(
    "translator/translateContent",
    { originalContent, provider },
    { root: true }
  );

  // If the given translation unit is a block template, get the
  // nested transclusion node, and use it to parse the template
  // wikitext in order to get an HTML string containing both
  // the template definition and the HTML string that renders
  // the template
  if (translationUnit instanceof SubSection) {
    const div = document.createElement("div");
    div.innerHTML = proposedTranslation;
    /** @type {HTMLElement|null} */
    const templateElement = Array.from(div.children).find((node) =>
      isTransclusionNode(node)
    );

    // If no nested transclusion node, or target template doesn't exist
    // set proposed translation to an empty string
    if (templateElement && targetTemplateExists(templateElement)) {
      /**
       * An HTML string containing both the template definition
       * and the HTML string that renders the template
       * @type {string}
       */
      proposedTranslation = await translatorApi.parseTemplateWikitext(
        getWikitextFromTemplate(templateElement),
        targetLanguage,
        targetTitle || sourceTitle
      );

      const adaptationStatus = JSON.parse(templateElement.dataset.cx);
      translationUnit.setBlockTemplateAdaptationStatus(
        provider,
        adaptationStatus
      );
    } else {
      proposedTranslation = "";
    }
  }

  commit("setProposedTranslationForTranslationUnitById", {
    id,
    provider,
    proposedTranslation,
  });
}

/**
 * This action is dispatched when translation for all available
 * MT providers is needed (i.e. when user wants to select among
 * available MT translations). This action translates currently
 * selected translation unit (title or sentence) for all supported
 * MT providers, by dispatching "translateTranslationUnitById"
 * action.
 *
 * @param {object} context
 * @param {object} context.rootGetters
 * @param {function} context.dispatch
 * @param {object} context.state
 */
function translateSelectedTranslationUnitForAllProviders({
  rootGetters,
  dispatch,
  state,
}) {
  const { sourceLanguage, targetLanguage, currentSourceSection } = state;
  const mtProviders = rootGetters["mediawiki/getSupportedMTProviders"](
    sourceLanguage,
    targetLanguage
  );
  const { selectedTranslationUnitId: id } = currentSourceSection;

  mtProviders.forEach((provider) =>
    dispatch("translateTranslationUnitById", { id, provider })
  );
}

function clearCurrentSectionSuggestion({ commit }) {
  commit("setCurrentSectionSuggestion", null);
}

export default {
  applyEditedTranslationToSelectedTranslationUnit,
  applyProposedTranslationToSelectedTranslationUnit,
  clearCurrentSectionSuggestion,
  fetchCurrentSectionSuggestionLanguageTitles,
  getCXServerToken,
  initializeMTProviders,
  initializeSectionTranslation,
  selectNextTranslationUnit,
  selectPageSectionByTitle,
  selectPageSectionByIndex,
  selectPreviousTranslationUnit,
  selectTranslationUnitById,
  startFavoriteSectionTranslation,
  translateTranslationUnitById,
  translateSelectedTranslationUnitForAllProviders,
  updateMTProvider,
  updateSourceLanguage,
  updateTargetLanguage,
};
