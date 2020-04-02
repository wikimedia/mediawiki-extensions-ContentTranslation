import { shallowMount } from "@vue/test-utils";
import MwDialog from "@/lib/mediawiki.ui/components/MWDialog";

describe("MWDialog.vue", () => {
  it("renders dialog with given properties", () => {
    const wrapper = shallowMount(MwDialog, {
      propsData: { title: "Dialog Title" }
    });
    expect(wrapper.contains(".mw-ui-dialog__header-title")).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
