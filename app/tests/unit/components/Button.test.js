import { shallowMount } from "@vue/test-utils";
import MwButton from "@/lib/mediawiki.ui/components/MWButton";

describe("Button.vue", () => {
  it("renders props.id when passed", () => {
    const id = "buttonId";
    const buttonClass = "mw-ui-button";
    const wrapper = shallowMount(MwButton, {
      propsData: { id }
    });
    expect(wrapper.attributes("id")).toMatch(id);
    expect(wrapper.classes(buttonClass)).toBe(true);
  });

  it("matches the snapshot with an HTML element passed as slot", () => {
    const wrapper = shallowMount(MwButton, {
      propsData: {
        type: "progressive"
      },
      slots: {
        default: '<span class="italic">button text</span>'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("matches the snapshot with an destructive type", () => {
    const wrapper = shallowMount(MwButton, {
      propsData: {
        type: "destructive"
      },
      slots: {
        default: '<span class="italic">button text</span>'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
