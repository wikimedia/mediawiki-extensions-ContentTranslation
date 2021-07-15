import SXTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation";
import { mount, createLocalVue } from "@vue/test-utils";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
import colors from "../../lib/mediawiki.ui/plugins/colors";
import CompositionApi from "@vue/composition-api";
import mockStore from "./articleInformationMockStore";

jest.mock("../../store", () =>
  jest.requireActual("./articleInformationMockStore")
);

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VueBananaI18n);
localVue.use(Vuex);
localVue.use(colors);

describe("SXTranslationConfirmerArticleInformation test", () => {
  const wrapper = mount(SXTranslationConfirmerArticleInformation, {
    localVue,
    store: mockStore
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Properties are computed properly", () => {
    expect(wrapper.vm.weeklyViews).toEqual(3);
    expect(wrapper.vm.sourceTitle).toEqual("Test Title");
    expect(wrapper.vm.langLinksCount).toEqual(100);
  });
});
