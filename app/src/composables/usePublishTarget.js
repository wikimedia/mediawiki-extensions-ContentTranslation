import { ref } from "vue";
import useCurrentSectionSuggestion from "@/composables/useCurrentSectionSuggestion";

const PUBLISHING_TARGETS = {
  NEW_SECTION: "NEW_SECTION",
  EXPAND: "EXPAND",
  REPLACE: "REPLACE",
  SANDBOX: "SANDBOX",
};

const target = ref(null);

/**
 * A composable that manages the current publishing target for section translations.
 *
 * This composable determines whether a new section should be created or an existing one should be expanded/replaced,
 * or the section should be published to the user's sandbox. It also provides utilities for explicitly setting,
 * resetting, or clearing the publishing target.
 */
const usePublishTarget = () => {
  const { isCurrentSectionPresent } = useCurrentSectionSuggestion();

  const resetPublishTarget = () => {
    if (isCurrentSectionPresent.value) {
      setTarget(PUBLISHING_TARGETS.EXPAND);
    } else {
      setTarget(PUBLISHING_TARGETS.NEW_SECTION);
    }
  };

  const clearPublishTarget = () => {
    target.value = null;
  };

  const setTarget = (newTarget) => {
    if (!Object.values(PUBLISHING_TARGETS).includes(newTarget)) {
      throw new Error("[CX] Invalid publishing target used");
    }
    target.value = newTarget;
  };

  return {
    target,
    resetPublishTarget,
    clearPublishTarget,
    setTarget,
    PUBLISHING_TARGETS,
  };
};

export default usePublishTarget;
