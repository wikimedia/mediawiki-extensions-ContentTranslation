import { computed } from "vue";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";
import useURLHandler from "@/composables/useURLHandler";
import useLanguageTitleGroup from "@/composables/useLanguageTitleGroup";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

const useSectionPresenceStatus = () => {
  const { sectionURLParameter: sectionTitle } = useURLHandler();
  const { targetPageExists } = useLanguageTitleGroup();
  const { sourceSection } = useCurrentPageSection();

  const { sectionSuggestion } = useCurrentSectionSuggestion();

  const isPresentLeadSection = computed(
    () => targetPageExists.value && !!sourceSection.value?.isLeadSection
  );

  const isMissingLeadSection = computed(
    () => !!sourceSection.value?.isLeadSection && !targetPageExists.value
  );

  const isCurrentSectionPresent = computed(
    () =>
      isPresentLeadSection.value ||
      !!sectionSuggestion.value?.presentSections.hasOwnProperty(
        sectionTitle.value
      )
  );

  return {
    isCurrentSectionPresent,
    isPresentLeadSection,
    isMissingLeadSection,
  };
};

export default useSectionPresenceStatus;
