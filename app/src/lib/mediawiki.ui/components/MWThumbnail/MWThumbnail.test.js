import { shallowMount } from "@vue/test-utils";
import { MwThumbnail } from "..";

describe("MwThumbnail.vue", () => {
  it("renders image when passed", () => {
    const wrapper = shallowMount(MwThumbnail, {
      props: { thumbnail: { source: "randomimage.png" } },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("use fallback icon when image not passed", () => {
    const wrapper = shallowMount(MwThumbnail, {
      props: {},
    });

    expect(wrapper.find(".mw-ui-thumbnail--missing").exists()).toBe(true);
  });
});
