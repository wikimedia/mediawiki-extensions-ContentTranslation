import Vue from "vue";
import Vuex from "vuex";
import translator from "./modules/translator";
import suggestions from "./modules/suggestions";
import mediawiki from "./modules/mediawiki";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { translator, suggestions, mediawiki }
});
