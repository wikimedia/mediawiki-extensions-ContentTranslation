import { useStore } from "vuex";
import { validateParallelCorporaPayload } from "@/utils/parallelCorporaValidator";
import translatorApi from "@/wiki/cx/api/translator";
import useApplicationState from "@/composables/useApplicationState";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useCurrentPages from "@/composables/useCurrentPages";

const useTranslationSave = () => {
  const store = useStore();
  const { sourceSection, targetPageTitleForPublishing } =
    useCurrentPageSection();
  const { currentSourcePage: sourcePage } = useCurrentPages();
  const { sourceLanguage, targetLanguage } = useApplicationState(store);

  /**
   * This action is called:
   * a. after each segment translation (either by clicking on the "Apply the translation" button
   * or by editing a segment in the Visual Editor),
   * b. just before publishing a section translation
   * It basically sends a request to the "sxsave" with the proper payload, to store the parallel
   * corpora and create/update the translation in the "cx_translations" and "cx_section_translations"
   * database tables.
   *
   * @return {Promise<PublishFeedbackMessage|null>}
   */
  return () => {
    const sourceTitle = sourcePage.value.title;
    const targetTitle = targetPageTitleForPublishing.value;

    const supportedMTProviders = store.getters[
      "mediawiki/getSupportedMTProviders"
    ](sourceLanguage.value, targetLanguage.value);

    const revision = store.getters["application/getCurrentRevision"];
    const baseSectionId = `${revision}_${sourceSection.value.id}`;

    const units = sourceSection.value.getParallelCorporaUnits(baseSectionId);
    units.forEach((unit) =>
      validateParallelCorporaPayload(unit, supportedMTProviders)
    );

    const progress = sourceSection.value.getTranslationProgress(targetLanguage);
    const isSandbox = store.getters["application/isSandboxTarget"];

    /**
     * saveTranslation api method returns null on success and a PublishFeedbackMessage upon failure
     * @type {Promise<number|PublishFeedbackMessage>}
     */
    return translatorApi.saveTranslation({
      sourceTitle,
      targetTitle,
      // pass a dummy string to be stored as "cxsx_source_section_title" inside "cx_section_translations" table for lead sections
      sourceSectionTitle: sourceSection.value.sourceSectionTitleForPublishing,
      // pass a dummy string to be stored as "cxsx_target_section_title" inside "cx_section_translations" table for lead sections
      targetSectionTitle: sourceSection.value.targetSectionTitleForPublishing,
      sourceLanguage: sourceLanguage.value,
      targetLanguage: targetLanguage.value,
      revision,
      units: units.map((unit) => unit.payload),
      // section id to be stored as "cxsx_section_id" inside "cx_section_translations"
      sectionId: baseSectionId,
      isSandbox,
      progress,
    });
  };
};

export default useTranslationSave;
