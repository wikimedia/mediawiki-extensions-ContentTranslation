import { shallowMount } from "@vue/test-utils";
import { mwIconAdd, mwIconTrash } from "../icons";
import MwInput from "./MWInput.vue";

describe("MWInput.vue", () => {
  it("renders props.id when passed", () => {
    const inputClass = "mw-ui-input";
    const value = "InputContent";
    const wrapper = shallowMount(MwInput, {
      propsData: { value }
    });
    expect(wrapper.find("input").exists()).toBe(true);
    expect(wrapper.find("input").element.value).toMatch(value);
    expect(wrapper.classes(inputClass)).toBe(true);
  });

  it("renders <textarea> tag when type is passed so", () => {
    const type = "textarea";
    const placeholder = "Enter some text";
    const wrapper = shallowMount(MwInput, {
      propsData: { type, placeholder }
    });
    expect(wrapper.find("textarea").exists()).toBe(true);
    expect(wrapper.find("textarea").attributes("placeholder")).toMatch(
      placeholder
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders icons and indicator when passed", () => {
    const wrapper = shallowMount(MwInput, {
      propsData: { icon: mwIconTrash, indicator: mwIconAdd }
    });
    expect(wrapper.find(".mw-ui-input__indicator").exists()).toBe(true);
    expect(wrapper.find(".mw-ui-input__icon").exists()).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
