import { shallowMount } from "@vue/test-utils";
import MwBottomNavigation from "@/lib/mediawiki.ui/components/MWBottomNavigation";

describe("MwBottomNavigation.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwBottomNavigation);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders correctly", () => {
    const wrapper = shallowMount(MwBottomNavigation, {
      slots: {
        default: "bottom navigation content"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
