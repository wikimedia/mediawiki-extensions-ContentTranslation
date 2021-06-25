import ExistingArticleBanner from "./ExistingArticleBanner";
import { mount, createLocalVue } from "@vue/test-utils";
import SectionSuggestion from "../../wiki/cx/models/sectionSuggestion";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
import colors from "../../lib/mediawiki.ui/plugins/colors";
import CompositionApi from "@vue/composition-api";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VueBananaI18n);
localVue.use(Vuex);
localVue.use(colors);

describe("SXTranslationConfirmer Existing Translation Banner Navigation test", () => {
  const sectionSuggestion = new SectionSuggestion({
    targetLanguage: "en",
    targetTitle: "Test target title",
    missing: {
      source1: "target1",
      source2: "target2",
      source3: "target3"
    }
  });

  const applicationModule = {
    namespaced: true,
    state: { currentSectionSuggestion: sectionSuggestion }
  };
  const store = new Vuex.Store({
    modules: {
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

  it("missing sections count is computed correctly", () => {
    expect(wrapper.vm.missingSectionsCount).toBe(3);
  });
});
