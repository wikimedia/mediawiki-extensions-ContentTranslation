import { mount } from "@vue/test-utils";
import RetryMtCard from "../RetryMtCard.vue";
import { createI18n } from "vue-banana-i18n";

var i18n = createI18n();

describe("SXSentenceSelector Retry MT Card", () => {
  const wrapper = mount(RetryMtCard, { global: { plugins: [i18n] } });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
