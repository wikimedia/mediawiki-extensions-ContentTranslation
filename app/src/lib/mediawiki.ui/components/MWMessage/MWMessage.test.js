import { shallowMount } from "@vue/test-utils";
import { MwMessage } from "..";

describe("MwMessage.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwMessage);
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders correctly", () => {
    const dismissable = true;
    const errorMessage = "This is an error message";
    const wrapper = shallowMount(MwMessage, {
      propsData: { type: "error", dismissable },
      slots: {
        default: errorMessage
      }
    });
    expect(wrapper.find(".mw-ui-message--error").text()).toMatch(errorMessage);
    expect(wrapper.element).toMatchSnapshot();
  });
});
