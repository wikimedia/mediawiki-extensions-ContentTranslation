import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";

const i18n = createI18n();

import SXSectionSelectorViewArticleItem from "./SXSectionSelectorViewArticleItem";

describe("SXSectionSelector View Article Item", () => {
  it("Component output matches snapshot for specified props", () => {
    const wrapper = mount(SXSectionSelectorViewArticleItem, {
      global: { plugins: [i18n] },
      props: {
        path: "my.test.url",
        autonym: "English",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
