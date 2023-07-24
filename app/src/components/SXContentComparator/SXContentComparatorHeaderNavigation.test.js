import SXContentComparatorHeaderNavigation from "./SXContentComparatorHeaderNavigation";
import { mount } from "@vue/test-utils";
import mockStore from "./contentComparatorMockStore";

jest.mock("../../store", () =>
  jest.requireActual("./contentComparatorMockStore")
);

const mockSelectPageSectionByIndex = jest.fn();
jest.mock("../../composables/usePageSectionSelect", () => () => ({
  selectPageSectionByIndex: mockSelectPageSectionByIndex,
}));

describe("SXContentComparator Header Navigation test", () => {
  mockStore.dispatch = jest.fn();
  const sectionSourceTitles = ["title 0", "title 1", "title 2"];

  const wrapper = mount(SXContentComparatorHeaderNavigation, {
    global: { plugins: [mockStore] },
    props: {
      sectionSourceTitles,
    },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Previous section method emitting update event correctly", () => {
    wrapper.find("button").trigger("click");
    expect(mockSelectPageSectionByIndex).toHaveBeenCalledWith(2);
  });

  it("Next section method emitting update event correctly", () => {
    wrapper.findAll("button")[1].trigger("click");

    expect(mockSelectPageSectionByIndex).toHaveBeenCalledWith(1);
  });
});
