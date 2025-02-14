import { createApp } from "vue";

export function loadTestComposable(composable, plugins = []) {
  let result;
  const app = createApp({
    setup() {
      result = composable();

      // suppress missing template warning
      return () => {};
    },
  });

  for (const plugin of plugins) {
    app.use(plugin);
  }
  app.mount(document.createElement("div"));

  return { result, app };
}
