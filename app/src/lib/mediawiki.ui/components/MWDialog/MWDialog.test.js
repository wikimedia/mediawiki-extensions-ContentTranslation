import { createLocalVue, shallowMount } from "@vue/test-utils";
import { MwDialog } from "..";
import CompositionApi from "@vue/composition-api";
const localVue = createLocalVue();
localVue.use(CompositionApi);

describe("MWDialog.vue", () => {
  it("renders dialog with given properties", () => {
    const wrapper = shallowMount(MwDialog, {
      localVue,
      propsData: { title: "Dialog Title" }
    });
    expect(wrapper.find(".mw-ui-dialog__header-title").exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
