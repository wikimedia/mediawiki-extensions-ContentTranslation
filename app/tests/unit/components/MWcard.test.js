import { shallowMount } from "@vue/test-utils";
import MwCard from "@/lib/mediawiki.ui/components/MWCard";

describe("MwCard.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders correctly", () => {
    const title = "Card title";
    const wrapper = shallowMount(MwCard, { propsData: { title } });
    expect(wrapper.find(".mw-ui-card__title").text()).toMatch(title);
    expect(wrapper.element).toMatchSnapshot();
  });
});
