import SXContentComparatorHeaderNavigation from "./SXContentComparatorHeaderNavigation";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import CompositionApi from "@vue/composition-api";
import mockStore from "./contentComparatorMockStore";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(CompositionApi);

jest.mock("../../store", () =>
  jest.requireActual("./contentComparatorMockStore")
);

describe("SXContentComparator Header Navigation test", () => {
  mockStore.dispatch = jest.fn();
  const sectionSourceTitles = ["title 0", "title 1", "title 2"];

  const wrapper = mount(SXContentComparatorHeaderNavigation, {
    store: mockStore,
    localVue,
    propsData: {
      sectionSourceTitles
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Previous section method emitting update event correctly", () => {
    wrapper.find("button").trigger("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      "application/selectPageSectionByIndex",
      2
    );
  });

  it("Next section method emitting update event correctly", () => {
    wrapper
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      "application/selectPageSectionByIndex",
      1
    );
  });
});
