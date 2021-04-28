import ExistingArticleBanner from "./ExistingArticleBanner";
import { mount, createLocalVue } from "@vue/test-utils";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);
localVue.use(Vuex);

describe("SXArticleSelector Existing Translation Banner Navigation test", () => {
  const sectionSuggestion = new SectionSuggestion({
    targetLanguage: "en",
    targetTitle: "Test target title"
  });
  const mediawikiModule = {
    namespaced: true,
    state: { languages: [] },
    getters: { getLanguage: () => languageCode => languageCode }
  };
  const applicationModule = {
    namespaced: true,
    state: { currentSectionSuggestion: sectionSuggestion }
  };
  const store = new Vuex.Store({
    modules: {
      mediawiki: mediawikiModule,
      application: applicationModule
    }
  });
  const wrapper = mount(ExistingArticleBanner, {
    localVue,
    store
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
