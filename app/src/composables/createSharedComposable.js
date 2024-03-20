import { effectScope, onScopeDispose } from "vue";

const createSharedComposable = (composable) => {
  let subscribers = 0;
  let state, scope;

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop();
      state = scope = null;
    }
  };

  return (...args) => {
    subscribers++;

    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    onScopeDispose(dispose);

    return state;
  };
};

export default createSharedComposable;
