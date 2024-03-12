import siteApi from "../../../wiki/mw/api/site";
import PublishFeedbackMessage from "../../../wiki/cx/models/publishFeedbackMessage";
import SubSection from "../../../wiki/cx/models/subSection";
import { renderTemplateFromCXServer } from "../../../utils/templateRenderer";
import debounce from "../../../utils/debounce";
import AssertUserError from "@/utils/errors/assertUserError";

/**
 * In order to save the draft section translation and its parallel corpora,
 * during "Pick a sentence" step, we use the debounced "translator/saveTranslation"
 * action. This way, we avoid to send more than one "save" request every 3 seconds,
 * since each "save" request overrides the previous one. For this reason, the debounced
 * action is executed in the trailing edge of the waiting time, meaning that only the
 * last call for "save" is actually executed. This debounced action is used both when
 * the "Apply translation" button and when an edited translation is applied.
 *
 * @type {function}
 */
let debouncedSaveTranslation;

/**
 * @param {object} context
 * @param {function} context.dispatch
 * @param {function} context.commit
 * @return {function}
 */
const getDebouncedSaveTranslation = ({ dispatch, commit }) => {
  if (!debouncedSaveTranslation) {
    let retryDelay = 1000;
    let retry = 0;

    const saveTranslationWithRetry = () => {
      dispatch("translator/saveTranslation", {}, { root: true })
        .then((saveResponse) => {
          if (saveResponse instanceof PublishFeedbackMessage) {
            retryDelay *= retry + 1;
            retry++;

            setTimeout(debouncedSaveTranslation, retryDelay);
          } else {
            retry = 0;
            retryDelay = 1000;
            commit("setAutoSavePending", false);
          }
        })
        .catch((error) => {
          if (error instanceof AssertUserError) {
            commit("setIsLoginDialogOn", true);
          } else {
            throw error;
          }
        });
    };
    debouncedSaveTranslation = debounce(saveTranslationWithRetry, 3000);
  }

  return debouncedSaveTranslation;
};

const clearPendingSaveTranslationRequests = ({ dispatch, commit }) => {
  commit("setAutoSavePending", false);
  const debouncedSave = getDebouncedSaveTranslation({ dispatch, commit });
  debouncedSave.cancel();
};

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
  clearPendingSaveTranslationRequests,
  getCXServerToken,
  initializeSectionTranslation,
  restoreSectionTranslation,
  selectNextTranslationUnit,
  selectPreviousTranslationUnit,
  selectTranslationUnitById,
  translateTranslationUnitById,
  translateSelectedTranslationUnitForAllProviders,
  updateMTProvider,
  getDebouncedSaveTranslation,
};
