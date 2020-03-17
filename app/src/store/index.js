import Vue from "vue";
import Vuex from "vuex";
import translator from "./modules/translator";
import suggestions from "./modules/suggestions";
import wikipedia from "./modules/wikipedia";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { translator, suggestions, wikipedia }
});
