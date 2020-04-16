import { shallowMount, mount } from "@vue/test-utils";
import MwLanguageSelector from "@/lib/mediawiki.ui/components/MWLanguageSelector";

const languages = [
  {
    code: "en",
    name: "English"
  },
  {
    code: "ml",
    name: "മലയാളം"
  },
  {
    code: "es",
    name: "Espanol"
  }
];

describe("MWLanguageSelector.vue", () => {
  it("renders passed languages", () => {
    const componentClass = "mw-ui-language-selector";
    const placeholder = "Search for languages";
    const wrapper = shallowMount(MwLanguageSelector, {
      propsData: { placeholder, languages }
    });
    expect(wrapper.contains("mw-input-stub")).toBe(true);
    expect(wrapper.find("mw-input-stub").attributes("placeholder")).toMatch(
      placeholder
    );
    expect(wrapper.findAll(".mw-ui-language-selector__result").length).toBe(
      languages.length
    );
    expect(wrapper.classes(componentClass)).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("render search results when queried", async () => {
    const componentClass = "mw-ui-language-selector";
    const wrapper = shallowMount(MwLanguageSelector, {
      propsData: { languages }
    });
    wrapper.find("mw-input-stub").vm.$emit("update", "Engl");
    expect(wrapper.vm.results).toStrictEqual([{ code: "en", name: "English" }]);
    await wrapper.vm.$nextTick();
    expect(wrapper.find("mw-input-stub").attributes("suggestion")).toBe(
      "English"
    );
    expect(wrapper.find("mw-input-stub").attributes("value")).toBe("Engl");
    expect(wrapper.findAll(".mw-ui-language-selector__result").length).toBe(1);
    expect(wrapper.element).toMatchSnapshot();
  });
});
