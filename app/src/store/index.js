import { createStore } from "vuex";
import translator from "./modules/translator";
import suggestions from "./modules/suggestions";
import mediawiki from "./modules/mediawiki";
import application from "./modules/application";

export default createStore({
  modules: { translator, suggestions, mediawiki, application },
});
