import { mount, createLocalVue } from "@vue/test-utils";
import VueBananaI18n from "vue-banana-i18n";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);

import SXSectionSelectorViewArticleItem from "./SXSectionSelectorViewArticleItem";

describe("SXSectionSelector View Article Item", () => {
  it("Component output matches snapshot for specified props", () => {
    const wrapper = mount(SXSectionSelectorViewArticleItem, {
      localVue,
      propsData: {
        path: "my.test.url",
        autonym: "English"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
