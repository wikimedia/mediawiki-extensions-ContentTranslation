import { ref } from "vue";

const isDismissed = ref(false);

/**
 * Composable for managing permission warning dismissal state
 * @returns {{ isDismissed: Ref<boolean>, dismiss: Function, reset: Function }}
 */
export default function usePermissionWarningDismiss() {
  const dismiss = () => {
    isDismissed.value = true;
  };

  const reset = () => {
    isDismissed.value = false;
  };

  return {
    isDismissed,
    dismiss,
    reset,
  };
}
