/*global mw */

import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import i18n from "vue-banana-i18n";

const locale = mw.config.get("wgUserLanguage");
const finalFallback = "en";
const messages = mw.messages.values || {};
Vue.use(i18n, {
  locale,
  finalFallback,
  messages
});

new Vue({
  store,
  render: h => h(App),
  el: "#cxdashboard"
});
