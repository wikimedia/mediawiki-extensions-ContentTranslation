import { shallowMount } from "@vue/test-utils";
import MwInput from "@/lib/mediawiki.ui/components/MWInput";
import { mwIconTrash, mwIconAdd } from "@/lib/mediawiki.ui/components/icons";

describe("MWInput.vue", () => {
  it("renders props.id when passed", () => {
    const inputClass = "mw-ui-input";
    const value = "InputContent";
    const wrapper = shallowMount(MwInput, {
      propsData: { value }
    });
    expect(wrapper.contains("input")).toBe(true);
    expect(wrapper.find("input").element.value).toMatch(value);
    expect(wrapper.classes(inputClass)).toBe(true);
  });

  it("renders <textarea> tag when type is passed so", () => {
    const type = "textarea";
    const placeholder = "Enter some text";
    const wrapper = shallowMount(MwInput, {
      propsData: { type, placeholder }
    });
    expect(wrapper.contains("textarea")).toBe(true);
    expect(wrapper.find("textarea").attributes("placeholder")).toMatch(
      placeholder
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders icons and indicator when passed", () => {
    const wrapper = shallowMount(MwInput, {
      propsData: { icon: mwIconTrash, indicator: mwIconAdd }
    });
    expect(wrapper.contains(".mw-ui-input__indicator")).toBe(true);
    expect(wrapper.contains(".mw-ui-input__icon")).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
