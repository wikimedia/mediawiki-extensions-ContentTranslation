import { shallowMount } from "@vue/test-utils";
import MwButtonGroup from "./MWButtonGroup.vue";

describe("MwButtonGroup.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwButtonGroup);
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders correctly", () => {
    const wrapper = shallowMount(MwButtonGroup, {
      propsData: {
        active: "item1",
        items: [
          {
            value: "item1",
            props: {
              label: "buttonLabel1"
            }
          },
          {
            value: "item2",
            props: {
              label: "buttonLabel2"
            }
          }
        ]
      }
    });
    expect(wrapper.findAll("mw-button-stub").length).toBe(2);
    expect(wrapper.element).toMatchSnapshot();
  });
});
