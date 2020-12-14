import ExistingTranslationBanner from "./ExistingTranslationBanner";
import { mount, createLocalVue } from "@vue/test-utils";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
jest.mock("../../utils/siteMapper");

const localVue = createLocalVue();
localVue.use(VueBananaI18n);
localVue.use(Vuex);

describe("SXArticleSelector Existing Translation Banner Navigation test", () => {
  const sectionSuggestion = new SectionSuggestion({
    targetLanguage: "en",
    targetTitle: "Test target title"
  });
  const store = new Vuex.Store({
    modules: {
      mediawiki: {
        namespaced: true,
        state: {
          languages: []
        },
        getters: {
          getLanguage: state => languageCode => languageCode
        }
      }
    }
  });
  const wrapper = mount(ExistingTranslationBanner, {
    localVue,
    store,
    propsData: {
      sectionSuggestion
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
