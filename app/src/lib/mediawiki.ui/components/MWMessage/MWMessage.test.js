import { mount } from "@vue/test-utils";
import { MwMessage } from "..";

describe("MwMessage.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(MwMessage);
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders correctly", () => {
    const dismissable = true;
    const errorMessage = "This is an error message";
    const wrapper = mount(MwMessage, {
      props: { type: "error", dismissable },
      slots: {
        default: errorMessage,
      },
    });
    expect(wrapper.find(".mw-ui-message--error").text()).toMatch(errorMessage);
    expect(wrapper.element).toMatchSnapshot();
  });
});
