import { mount } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import SXSearchArticleSuggestion from "./SXSearchArticleSuggestion";

describe("SXSearchArticleSuggestion", () => {
  const pageSuggestion = new Page({
    thumbnail: { source: "/thumbnail.jpg" },
    title: "Test page",
    description: "Test description",
    langlinkscount: 5,
  });

  const wrapper = mount(SXSearchArticleSuggestion, {
    props: {
      suggestion: pageSuggestion,
    },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component renders thumbnail properly when present", () => {
    expect(wrapper.find(".mw-ui-thumbnail")).toBeTruthy();
  });

  it("Component renders thumbnail placeholder when thumbnail is missing", async () => {
    const updateSuggestion = new Page(pageSuggestion);
    updateSuggestion.thumbnail = null;

    await wrapper.setProps({ suggestion: updateSuggestion });
    expect(wrapper.find("div.mw-ui-thumbnail").exists()).toBe(false);
    expect(wrapper.find("span.mw-ui-thumbnail--missing")).toBeTruthy();
  });
});
