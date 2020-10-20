/*global mw */

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import i18n from "vue-banana-i18n";
import { BreakpointsPlugin } from "@/lib/mediawiki.ui/plugins";
Vue.use(BreakpointsPlugin);

const locale = mw.config.get("wgUserLanguage");
const finalFallback = "en";
const messages = mw.messages.values || {};
Vue.use(i18n, {
  locale,
  finalFallback,
  messages,
  wikilinks: true
});

new Vue({
  store,
  router,
  el: "#contenttranslation",
  render: h => h(App)
});
