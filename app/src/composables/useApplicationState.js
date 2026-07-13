import { computed } from "vue";

/**
 * @param {Store} store
 * @return {{previousRoute: ComputedRef<string>, currentMTProvider: *}}
 */
export default function (store) {
  const currentMTProvider = computed(
    () => store.state.application.currentMTProvider
  );

  const previousRoute = computed(() => store.state.application.previousRoute);

  return {
    currentMTProvider,
    previousRoute,
  };
}
