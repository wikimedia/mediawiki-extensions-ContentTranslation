import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import router from "../../router";
import { siteMapper } from "@/utils/mediawikiHelper";

const i18n = createI18n();

import { createStore } from "vuex";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";

const mockSectionSuggestion = new SectionSuggestion({
  targetLanguage: "en",
  targetTitle: "Test target title",
  missing: {
    source2: "target2",
    source1: "target1",
    source3: "target3",
  },
  sourceSections: ["source1", "source2", "source3"],
});

jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  sectionSuggestion: {
    value: mockSectionSuggestion,
  },
}));

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: { sourceLanguage: "en", targetLanguage: "el" },
      mutations: {
        setPreviousRoute: () => {},
      },
    },
  },
});

const breakpoints = { tabletAndUp: false };
describe("SXTranslationConfirmer Action Panel test", () => {
  const createWrapper = () =>
    mount(SxTranslationConfirmerActionPanel, {
      global: {
        plugins: [mockStore, router, i18n],
        provide: {
          colors: {},
          breakpoints: { value: breakpoints },
        },
      },
      store: mockStore,
      beforeCreate() {
        this.$i18n = jest.fn((key) => key);
        this.$mwui = { breakpoint: breakpoints };
      },
    });

  it("Component output matches snapshot", () => {
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component output matches snapshot for tablet or larger screens", () => {
    siteMapper.isMobileDomainVar = false;
    breakpoints.tabletAndUp = true;
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component output matches snapshot for tablet or larger screens with .m. in the url", () => {
    siteMapper.isMobileDomainVar = true;
    breakpoints.tabletAndUp = true;
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });

  const wrapper = createWrapper();

  it("Action information message is computed correctly", () => {
    const i18nArgs = [
      "cx-sx-existing-translation-additional-info",
      `"source1"`,
      2,
    ];
    expect(wrapper.vm.actionInformationMessage).toBe(
      wrapper.vm.$i18n(...i18nArgs)
    );
  });

  it("targetPageExists property is computed correctly", () => {
    expect(wrapper.vm.targetPageExists).toBe(true);
  });
});
