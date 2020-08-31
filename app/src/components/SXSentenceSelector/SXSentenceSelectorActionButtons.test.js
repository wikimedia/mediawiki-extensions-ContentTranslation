import { mount, createLocalVue } from "@vue/test-utils";
import SXSentenceSelectorActionButtons from "./SXSentenceSelectorActionButtons";
import VueBananaI18n from "vue-banana-i18n";

const localVue = createLocalVue();
localVue.use(VueBananaI18n);

describe("SXSentenceSelector Action Buttons", () => {
  it("Component output matches snapshot", () => {
    const wrapper = mount(SXSentenceSelectorActionButtons, { localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
