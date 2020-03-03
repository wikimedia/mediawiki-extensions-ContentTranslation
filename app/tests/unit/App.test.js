import App from "@/App.vue";
import i18n from "vue-banana-i18n";
import messages from "@/../../i18n/en.json";

import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(i18n, { locale: "en", finalFallback: "en", messages });

describe("App component", () => {
  it("has id attribute", () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.element.id).toBe("cxdashboard");
  });

  it("contains an H1 element", () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.contains("h1")).toBe(true);
  });

  it("matches the snapshot", () => {
    const wrapper = shallowMount(App, { localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
