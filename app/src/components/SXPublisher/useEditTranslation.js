import { computed } from "vue";
import { useRouter } from "vue-router";
import useCurrentPageSection from "@/composables/useCurrentPageSection";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useURLHandler from "@/composables/useURLHandler";

/**
 * @return {function}
 */
const useEditTranslation = () => {
  const router = useRouter();
  const { sourceSection } = useCurrentPageSection();
  const { getCurrentTitleByLanguage } = useLanguageTitleGroup();
  const {
    sourceLanguageURLParameter: sourceLanguage,
    targetLanguageURLParameter: targetLanguage,
  } = useURLHandler();

  const content = computed(() =>
    sourceSection.value.subSections.reduce(
      (htmlContent, subSection) =>
        subSection.isTranslated
          ? `${htmlContent}<section rel="cx:Section" id="${subSection.targetSectionId}">${subSection.translatedContent}</section>`
          : htmlContent,
      ""
    )
  );

  return () =>
    router.push({
      name: "sx-editor",
      state: {
        content: content.value,
        title: getCurrentTitleByLanguage(
          targetLanguage.value,
          sourceLanguage.value
        ),
        isFinalEdit: true,
      },
    });
};

export default useEditTranslation;
