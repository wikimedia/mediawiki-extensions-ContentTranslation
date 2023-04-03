import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";

const useEditTranslation = (store, router) => {
  const {
    currentSourcePage,
    currentTargetPage,
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
      state: {
        content: content.value,
        title: currentTargetPage.value?.title || currentSourcePage.value?.title,
        isFinalEdit: true,
      },
    });

  return { editTranslation };
};

export default useEditTranslation;
