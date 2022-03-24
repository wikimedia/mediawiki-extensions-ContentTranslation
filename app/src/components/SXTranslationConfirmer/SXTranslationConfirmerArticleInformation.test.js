import SXTranslationConfirmerArticleInformation from "./SXTranslationConfirmerArticleInformation";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import colors from "../../lib/mediawiki.ui/plugins/colors";
import mockStore from "./articleInformationMockStore";

jest.mock("../../store", () =>
  jest.requireActual("./articleInformationMockStore")
);

const i18n = createI18n();

describe("SXTranslationConfirmerArticleInformation test", () => {
  const wrapper = mount(SXTranslationConfirmerArticleInformation, {
    global: { plugins: [i18n, colors, mockStore] },
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
