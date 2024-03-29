import { computed } from "vue";
import useCurrentDraftTranslation from "@/composables/useCurrentDraftTranslation";
import useCurrentPages from "@/composables/useCurrentPages";

/**
 * @return {ComputedRef<string>}
 */
const useCurrentPageRevision = () => {
  const { currentTranslation } = useCurrentDraftTranslation();
  const { currentSourcePage } = useCurrentPages();

  return computed(
    () =>
      currentTranslation.value?.pageRevision || currentSourcePage.value.revision
  );
};

export default useCurrentPageRevision;
