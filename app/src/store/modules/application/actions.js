import siteApi from "../../../wiki/mw/api/site";
import SubSection from "../../../wiki/cx/models/subSection";
import { renderTemplateFromCXServer } from "../../../utils/templateRenderer";

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
 * @param {function} context.dispatch
 * @param {Translation} translation
 */
function restoreSectionTranslation({ commit, dispatch }, translation) {
  dispatch("getCXServerToken");
  commit("setCurrentTranslation", translation);
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
 * @param {object} context.getters
 * @param {object} payload
 * @param {string|0} payload.id
 * @param {string} payload.provider
 */
async function translateTranslationUnitById(
  { commit, state, dispatch, getters },
  { id, provider }
) {
  const { currentSourceSection: sourceSection, targetLanguage } = state;

  if (sourceSection.hasProposedTranslationByTranslationUnitId(id, provider)) {
    return;
  }

  let originalContent = sourceSection.getOriginalContentByTranslationUnitId(id);

  const translationUnit = sourceSection.getContentTranslationUnitById(id);

  // The content of this variable will ultimately be stored as proposed
  // translation for the given translation unit and the given MT provider
  let proposedTranslation;
  commit("addMtRequestsPending", id);

  /** @type {string} */
  proposedTranslation = await dispatch(
    "translator/translateContent",
    { originalContent, provider },
    { root: true }
  );

  if (!proposedTranslation) {
    commit("removeMtRequestsPending", id);

    return;
  }

  // If the given translation unit is a block template, get the
  // nested transclusion node, and use it to parse the template
  // wikitext in order to get an HTML string containing both
  // the template definition and the HTML string that renders
  // the template
  if (translationUnit instanceof SubSection) {
    translationUnit.setBlockTemplateAdaptationInfoByHtml(
      provider,
      proposedTranslation
    );

    const currentSourcePage = getters.getCurrentPage;
    const currentTargetPage = getters.getCurrentTargetPage;

    const translationHtml = await renderTemplateFromCXServer(
      proposedTranslation,
      currentTargetPage?.title || currentSourcePage.title,
      targetLanguage
    );
    proposedTranslation = translationHtml || "";
  }

  commit("setProposedTranslationForTranslationUnitById", {
    id,
    provider,
    proposedTranslation,
  });
  commit("removeMtRequestsPending", id);
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
  clearCurrentSectionSuggestion,
  getCXServerToken,
  initializeSectionTranslation,
  restoreSectionTranslation,
  translateTranslationUnitById,
  translateSelectedTranslationUnitForAllProviders,
  updateMTProvider,
};
