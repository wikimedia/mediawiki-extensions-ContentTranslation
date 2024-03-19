import useApplicationState from "@/composables/useApplicationState";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

/**
 * @return {function}
 */
const useEditTranslation = () => {
  const store = useStore();
  const router = useRouter();
  const { sourceSection } = useCurrentPageSection();
  const { currentSourcePage, currentTargetPage } = useApplicationState(store);

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
        title: currentTargetPage.value?.title || currentSourcePage.value?.title,
        isFinalEdit: true,
      },
    });
};

export default useEditTranslation;
