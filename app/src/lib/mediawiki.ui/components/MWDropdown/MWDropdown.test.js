import { shallowMount } from "@vue/test-utils";
import { MwDropdown } from "..";

describe("MWDropdown.vue", () => {
  it("renders with given slots and options", async () => {
    const triggerClass = "mw-ui-dropdown__trigger";
    const value = "InputContent";
    const languages = [
      { label: "English", value: "en" },
      { label: "Spanish", value: "es" },
      { label: "Hindi", value: "hi" },
      { label: "French", value: "fr" }
    ];
    const wrapper = shallowMount(MwDropdown, {
      propsData: { value: languages }
    });
    const trigger = wrapper.find(`.${triggerClass}`);
    expect(trigger.exists()).toBe(true);
    expect(trigger.classes(triggerClass)).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
