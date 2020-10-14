import { shallowMount } from "@vue/test-utils";
import MwRadio from "./MWRadio.vue";

describe("MWRadio.vue", () => {
  it("renders with given slots and options", async () => {
    const wrapper = shallowMount(MwRadio, {
      propsData: {
        id: "my-test-radio",
        label: "A radio button",
        value: "test-radio",
        inputValue: "test-radio"
      }
    });
    const trigger = wrapper.find(".mw-ui-radio");
    expect(trigger.exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
