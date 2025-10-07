import translatorApi from "@/wiki/cx/api/translator";
import translationRestorer from "@/utils/translationRestorer";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentPages from "@/composables/useCurrentPages";

/**
 * @return {(function(DraftTranslation): Promise<void>)}
 */
const useDraftTranslationStart = () => {
  const { currentSourcePage } = useCurrentPages();
  const { sourceSection } = useCurrentPageSection();

  /**
   * @param {DraftTranslation} translation
   * @return {(function(): Promise)}
   */
  return async (translation) => {
    if (translation.restored) {
      return;
    }

    try {
      const translationUnits = await translatorApi.fetchTranslationUnits(
        translation.translationId
      );
      await translationRestorer.restoreCorporaDraft(
        currentSourcePage.value,
        translation.targetTitle,
        translation.targetLanguage,
        translationUnits
      );
    } catch (error) {
      mw.cx.eventlogging.stats.restoreFailure(true);
      throw new Error(error);
    }

    translation.restored = true;

    let sectionTitleTranslation;

    if (translation.isLeadSectionTranslation) {
      // initialize the original title, so that we can restore the draft section/article title
      // this is NOT needed for non-lead sections as the original title is already populated
      sourceSection.value.originalTitle = translation.sourceTitle;
      sectionTitleTranslation = translation.targetTitle;
    } else {
      sectionTitleTranslation = translation.targetSectionTitle;
    }
    sourceSection.value.translatedTitle = sectionTitleTranslation;
  };
};

export default useDraftTranslationStart;
