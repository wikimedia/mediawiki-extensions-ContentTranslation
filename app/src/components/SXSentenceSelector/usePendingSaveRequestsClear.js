import { useStore } from "vuex";
import useDebouncedSave from "@/composables/useDebouncedSave";

const usePendingSaveRequestsClear = () => {
  const store = useStore();
  const saveDebounced = useDebouncedSave();

  return () => {
    store.commit("application/setAutoSavePending", false);
    saveDebounced.cancel();
  };
};

export default usePendingSaveRequestsClear;
