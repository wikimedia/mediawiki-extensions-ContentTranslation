import MwAutonym from "../components/MWAutonym.vue";
import Vue from "vue";
import Vuex from "vuex";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, select } from "@storybook/addon-knobs";
import mediawiki from "@/store/modules/mediawiki";
import centered from "@storybook/addon-centered/vue";

Vue.use(Vuex);
const store = new Vuex.Store({ modules: { mediawiki } });
const languageInfo = {
  en: {
    autonym: "English",
    dir: "ltr"
  },
  he: {
    autonym: "עברית",
    dir: "rtl"
  },
  ml: {
    autonym: "മലയാളം",
    dir: "ltr"
  }
};
store.commit("mediawiki/setLanguageInfo", languageInfo);
export default {
  title: "Components",
  component: MwAutonym,
  decorators: [withKnobs, centered, withA11y]
};

export const Autonym = () => ({
  components: { MwAutonym },
  store,
  props: {
    lang: {
      default: select("Language code:", Object.keys(languageInfo), "en")
    }
  },
  template: `<mw-autonym :lang="lang"></mw-autonym>`
});
