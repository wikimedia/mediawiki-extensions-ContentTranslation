import { computed } from "vue";
import useSectionPresenceStatus from "@/composables/useSectionPresenceStatus";
import useCurrentPages from "@/composables/useCurrentPages";
import useCurrentPageSection from "@/composables/useCurrentPageSection";

const useTitleForPublishing = () => {
  const { sourceSection } = useCurrentPageSection();
  const { currentTargetPageTitle } = useCurrentPages();
  const { isMissingLeadSection } = useSectionPresenceStatus();

  const targetPageTitleForPublishing = computed(() =>
    isMissingLeadSection.value
      ? sourceSection.value.title
      : currentTargetPageTitle.value
  );

  return { targetPageTitleForPublishing };
};

export default useTitleForPublishing;
