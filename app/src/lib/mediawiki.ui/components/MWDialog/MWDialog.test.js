import { shallowMount } from "@vue/test-utils";
import { MwDialog } from "..";

describe("MWDialog.vue", () => {
  it("renders dialog with given properties", () => {
    const wrapper = shallowMount(MwDialog, {
      propsData: { title: "Dialog Title" }
    });
    expect(wrapper.find(".mw-ui-dialog__header-title").exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
