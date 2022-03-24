import { shallowMount } from "@vue/test-utils";
import { MwDialog } from "..";

describe("MWDialog.vue", () => {
  it("renders dialog with given properties", () => {
    const wrapper = shallowMount(MwDialog, {
      global: { renderStubDefaultSlot: true },
      props: { title: "Dialog Title" },
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find(".mw-ui-dialog__header-title").exists()).toBe(true);
  });
});
