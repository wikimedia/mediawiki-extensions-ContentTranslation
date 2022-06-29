import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";

const useEditTranslation = (store, router) => {
  const {
    currentSectionSuggestion: suggestion,
    currentSourceSection: pageSection,
  } = useApplicationState(store);

  const content = computed(() =>
    pageSection.value.subSections.reduce(
      (htmlContent, subSection) =>
        subSection.isTranslated
          ? `${htmlContent}<section rel="cx:Section" id="${subSection.targetSectionId}">${subSection.translatedContent}</section>`
          : htmlContent,
      ""
    )
  );

  const editTranslation = () =>
    router.push({
      name: "sx-editor",
      params: {
        content: content.value,
        sourceLanguage: suggestion.value.sourceLanguage,
        targetLanguage: suggestion.value.targetLanguage,
        title: suggestion.value.targetTitle || suggestion.value.sourceTitle,
        isFinalEdit: true,
      },
    });

  return { editTranslation };
};

export default useEditTranslation;
