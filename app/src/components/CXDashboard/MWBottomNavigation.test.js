import { shallowMount } from "@vue/test-utils";
import MwBottomNavigation from "./MWBottomNavigation";

jest.mock("@/composables/useEventLogging", () => () => jest.fn());

describe("MwBottomNavigation.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwBottomNavigation);
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders correctly", () => {
    const wrapper = shallowMount(MwBottomNavigation, {
      slots: {
        default: "bottom navigation content",
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
