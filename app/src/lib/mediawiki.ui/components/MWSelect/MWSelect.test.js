import { shallowMount } from "@vue/test-utils";
import { MwSelect } from "..";

describe("MWSelect.vue", () => {
  it("renders with given slots and options", async () => {
    const inputClass = "mw-ui-select__input";
    const value = "InputContent";
    const languages = [
      { label: "English", value: "en" },
      { label: "Spanish", value: "es" },
      { label: "Hindi", value: "hi" },
      { label: "French", value: "fr" }
    ];
    const wrapper = shallowMount(MwSelect, {
      propsData: { value: languages },
      slots: {
        "no-results": "<span class='err'>Error! No results!!!</span>",
        "list-header": "<span class='header'>Select from this list</span>",
        "list-footer": "<span class='footer'>That is the end of options</span>"
      }
    });
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);
    expect(input.classes(inputClass)).toBe(true);
    expect(wrapper.element).toMatchSnapshot();

    input.element.value = "fr";
    await input.trigger("input");
    expect(wrapper.findAll(".mw-ui-select__option").length).toBe(1);

    input.element.value = "en";
    await input.trigger("input");
    // En should return 2 results since it will match en and Fr*en*ch
    expect(wrapper.findAll(".mw-ui-select__option").length).toBe(2);

    // En should return 1 result when we set a custom filter function
    wrapper.setProps({ filterBy: ({ value }, query) => query === value });
    input.element.value = "en";
    await input.trigger("input");
    expect(wrapper.findAll(".mw-ui-select__option").length).toBe(1);
  });
});
