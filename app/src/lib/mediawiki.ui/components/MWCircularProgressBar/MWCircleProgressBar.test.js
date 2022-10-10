import { shallowMount } from "@vue/test-utils";
import MwCircleProgressBar from "./MWCircleProgressBar.vue";

describe("MwCircleProgressBar.vue", () => {
  it("should be mounted properly", () => {
    const wrapper = shallowMount(MwCircleProgressBar);
    expect(wrapper.vm).toBeTruthy();
  });

  it("should be rendered correctly", () => {
    const size = 20;
    const percentage = 60;

    const wrapper = shallowMount(MwCircleProgressBar, {
      props: { size, percentage },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
