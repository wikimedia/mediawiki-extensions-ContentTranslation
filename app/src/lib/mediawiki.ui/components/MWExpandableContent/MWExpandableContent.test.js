import { shallowMount } from "@vue/test-utils";
import MwExpandableContent from "./MWExpandableContent.vue";

describe("MwExpandableContent.vue", () => {
  const minHeight = 60;

  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwExpandableContent, {
      props: { minHeight },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders correctly", async () => {
    jest
      .spyOn(HTMLDivElement.prototype, "scrollHeight", "get")
      .mockImplementation(() => 100);
    const wrapper = shallowMount(MwExpandableContent, {
      props: { minHeight },
      slots: {
        default: "<div>This is a sentence</div>",
      },
    });
    // Wait for two ticks so that onMounted function is complete and
    // contentMinHeight computed property is updated
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find(".mw-ui-expandable-content").attributes().style
    ).toMatch("--collapsed-height: 60px");
    expect(wrapper.element).toMatchSnapshot();
  });
});
