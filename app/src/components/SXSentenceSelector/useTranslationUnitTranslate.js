import { useStore } from "vuex";
import SubSection from "@/wiki/cx/models/subSection";
import { renderTemplateFromCXServer } from "@/utils/templateRenderer";
import translatorApi from "@/wiki/cx/api/translator";
import SectionSentence from "@/wiki/cx/models/sectionSentence";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";

const useTranslationUnitTranslate = () => {
  const store = useStore();
  const { sourceSection } = useCurrentPageSection();
  const { getCurrentTitleByLanguage } = useLanguageTitleGroup();

  const setProposedTranslationForTranslationUnitById = (
    id,
    provider,
    proposedTranslation
  ) => {
    if (id === 0) {
      sourceSection.value.proposedTitleTranslations[provider] =
        proposedTranslation;

      return;
    }
    const unit = sourceSection.value.getContentTranslationUnitById(id);

    if (unit instanceof SubSection) {
      unit.blockTemplateProposedTranslations[provider] = proposedTranslation;
    } else if (unit instanceof SectionSentence) {
      unit.addProposedTranslation(provider, proposedTranslation);
    }
  };

  /**
   * Translates HTML content for a given MT provider and the
   * application's source/target language pair, and returns
   * a promise that resolves to a string containing the translation.
   *
   * @param {string} provider
   * @param {string} originalContent
   * @return {Promise<String>}
   */
  const translateContent = async (provider, originalContent) => {
    const { sourceLanguage, targetLanguage } = store.state.application;
    const isValidProvider = store.getters[
      "mediawiki/isValidProviderForTranslation"
    ](sourceLanguage, targetLanguage, provider);

    if (!isValidProvider) {
      return "";
    }

    try {
      const token = await store.dispatch("application/getCXServerToken");

      return await translatorApi.fetchSegmentTranslation(
        sourceLanguage,
        targetLanguage,
        provider,
        originalContent,
        token
      );
    } catch (error) {
      mw.log.error("Error while translating segment", error);

      // no need for fallback here, let the RetryMtCard appear
      return "";
    }
  };

  /**
   * Given an id and a valid MT provider, this action
   * translates the original content of the corresponding
   * translation unit, and sets the proposed translation
   * for this provider. If the given id is equal to 0,
   * then the section title is translated.
   *
   * @param {string|0} id
   * @param {string} provider
   */
  const translateTranslationUnitById = async (id, provider) => {
    const { sourceLanguage, targetLanguage } = store.state.application;

    if (
      sourceSection.value.hasProposedTranslationByTranslationUnitId(
        id,
        provider
      )
    ) {
      return;
    }

    let originalContent =
      sourceSection.value.getOriginalContentByTranslationUnitId(id);

    const translationUnit =
      sourceSection.value.getContentTranslationUnitById(id);

    // The content of this variable will ultimately be stored as proposed
    // translation for the given translation unit and the given MT provider
    let proposedTranslation;
    store.commit("application/addMtRequestsPending", id);

    /** @type {string} */
    proposedTranslation = await translateContent(provider, originalContent);

    if (!proposedTranslation) {
      store.commit("application/removeMtRequestsPending", id);

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

      const translationHtml = await renderTemplateFromCXServer(
        proposedTranslation,
        getCurrentTitleByLanguage(targetLanguage, sourceLanguage),
        targetLanguage
      );
      proposedTranslation = translationHtml || "";
    }

    setProposedTranslationForTranslationUnitById(
      id,
      provider,
      proposedTranslation
    );

    store.commit("application/removeMtRequestsPending", id);
  };

  /**
   * This action is dispatched when translation for all available
   * MT providers is needed (i.e. when user wants to select among
   * available MT translations). This action translates currently
   * selected translation unit (title or sentence) for all supported
   * MT providers, by dispatching "translateTranslationUnitById"
   * action.
   */
  const translateSelectedTranslationUnitForAllProviders = () => {
    const { sourceLanguage, targetLanguage } = store.state.application;
    const mtProviders = store.getters["mediawiki/getSupportedMTProviders"](
      sourceLanguage,
      targetLanguage
    );
    const { selectedTranslationUnitId: id } = sourceSection.value;

    mtProviders.forEach((provider) =>
      translateTranslationUnitById(id, provider)
    );
  };

  return {
    translateTranslationUnitById,
    translateSelectedTranslationUnitForAllProviders,
  };
};

export default useTranslationUnitTranslate;
