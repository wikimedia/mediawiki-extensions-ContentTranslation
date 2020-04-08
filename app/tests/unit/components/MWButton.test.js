import { shallowMount } from "@vue/test-utils";
import MwButton from "@/lib/mediawiki.ui/components/MWButton";
import { mwIconTrash, mwIconAdd } from "@/lib/mediawiki.ui/components/icons";

describe("MWButton.vue", () => {
  it("renders props.id when passed", () => {
    const id = "buttonId";
    const buttonClass = "mw-ui-button";
    const wrapper = shallowMount(MwButton, {
      propsData: { id }
    });
    expect(wrapper.attributes("id")).toMatch(id);
    expect(wrapper.contains("button")).toBe(true);
    expect(wrapper.classes(buttonClass)).toBe(true);
  });

  it("renders <a> tag when href is passed", () => {
    const href = "wikipedia.org";
    const wrapper = shallowMount(MwButton, {
      propsData: { href }
    });
    expect(wrapper.contains("a")).toBe(true);
    expect(wrapper.attributes("href")).toMatch(href);
  });

  it("renders indicator icon when passed", () => {
    const href = "wikipedia.org";
    const wrapper = shallowMount(MwButton, {
      propsData: { href, indicator: mwIconTrash, label: "Label" }
    });
    expect(wrapper.contains(".mw-ui-button__indicator")).toBe(true);
    expect(wrapper.contains(".mw-ui-button__icon")).toBe(false);
  });

  it("matches the snapshot with an HTML label", () => {
    const wrapper = shallowMount(MwButton, {
      propsData: {
        progressive: true,
        large: true,
        label: "Large button text with <b>html</b>",
        indicator: mwIconAdd
      }
    });

    // HTML label should be converted to text.
    expect(wrapper.find(".mw-ui-button__label").text()).toBe(
      "Large button text with <b>html</b>"
    );
    // ... and not an html element as child.
    expect(wrapper.contains(".mw-ui-button__label b")).toBe(false);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("matches the snapshot with an destructive type icon button", () => {
    const wrapper = shallowMount(MwButton, {
      propsData: {
        type: "icon",
        destructive: true,
        icon: mwIconTrash
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
