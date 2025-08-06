import { ref } from "vue";

const isPermissionWarningDismissed = ref(false);
const isTitleErrorDismissed = ref(false);

/**
 * Composable for managing notice message states
 * @returns {{ isDismissed: Ref<boolean>, dismiss: Function, reset: Function }}
 */
export default function usePublishWarnings() {
  const dismissPermissionWarning = () => {
    isPermissionWarningDismissed.value = true;
  };

  const resetPermissionWarning = () => {
    isPermissionWarningDismissed.value = false;
  };

  const dismissTitleError = () => {
    isTitleErrorDismissed.value = true;
  };

  const resetTitleError = () => {
    isTitleErrorDismissed.value = false;
  };

  return {
    isPermissionWarningDismissed,
    dismissPermissionWarning,
    resetPermissionWarning,
    isTitleErrorDismissed,
    dismissTitleError,
    resetTitleError,
  };
}
