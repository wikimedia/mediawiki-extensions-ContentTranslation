import "./vuex";
import "./codex";
import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import { createI18n } from "vue-banana-i18n";
import { BreakpointsPlugin, ColorsPlugin } from "@/lib/mediawiki.ui/plugins";

const locale = mw.config.get("wgUserLanguage");
const finalFallback = "en";
const messages = mw.messages.values || {};

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ColorsPlugin);
app.use(BreakpointsPlugin);
const i18nPlugin = createI18n({
  locale,
  finalFallback,
  messages,
  wikilinks: true,
});
app.use(i18nPlugin);

app.mount("#contenttranslation");
