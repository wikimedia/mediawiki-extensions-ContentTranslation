/*global mw */

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueCompositionAPI from "@vue/composition-api";
import i18n from "vue-banana-i18n";
import { BreakpointsPlugin, ColorsPlugin } from "@/lib/mediawiki.ui/plugins";
import EventLoggingPlugin from "./plugins/eventlogging";
Vue.use(BreakpointsPlugin);
Vue.use(ColorsPlugin);
Vue.use(EventLoggingPlugin);
Vue.use(VueCompositionAPI);

const locale = mw.config.get("wgUserLanguage");
const finalFallback = "en";
const messages = mw.messages.values || {};

/**
 * Indicates that application is still under development and mobile support is experimental
 */
Vue.prototype.$incompleteVersion = true;

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
