import { shallowMount } from "@vue/test-utils";
import MwCard from "./MWCard.vue";

describe("MwCard.vue", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MwCard);
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders correctly", () => {
    const title = "Card title";
    const wrapper = shallowMount(MwCard, { propsData: { title } });
    expect(wrapper.find(".mw-ui-card__title").text()).toMatch(title);
    expect(wrapper.element).toMatchSnapshot();
  });
});
