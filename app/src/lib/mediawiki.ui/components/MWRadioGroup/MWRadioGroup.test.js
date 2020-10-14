import { mount } from "@vue/test-utils";
import MwRadioGroup from "./MWRadioGroup.vue";

describe("MWRadioGroup.vue", () => {
  it("renders with given slots and options", async () => {
    const wrapper = mount(MwRadioGroup, {
      propsData: {
        items: [
          { text: "A radio button", value: "first_button" },
          { text: "Another radio button", value: "second_button" }
        ],
        value: "first_button",
        name: "radio_button_group"
      }
    });
    const trigger = wrapper.find(".mw-ui-radio-group");
    expect(trigger.exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
