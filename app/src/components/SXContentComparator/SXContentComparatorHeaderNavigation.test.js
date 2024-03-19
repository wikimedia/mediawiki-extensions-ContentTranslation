import SXContentComparatorHeaderNavigation from "./SXContentComparatorHeaderNavigation";
import { mount } from "@vue/test-utils";
import SectionSuggestion from "@/wiki/cx/models/sectionSuggestion";
import { createStore } from "vuex";

const sectionSourceTitles = [
  "Compare contents header navigation section title 0",
  "Compare contents header navigation section title 1",
  "Compare contents header navigation section title 2",
];

const mockStore = createStore({
  modules: {
    application: {
      namespaced: true,
      state: {
        currentSectionSuggestion: new SectionSuggestion({
          sourceTitle: "Compare contents header navigation page title 0",
        }),
      },
    },
  },
});

jest.mock("@/composables/useURLHandler", () => () => ({
  sectionURLParameter: {
    value: "Compare contents header navigation section title 0",
  },
}));

const mockSelectPageSectionByTitle = jest.fn();
jest.mock("@/composables/usePageSectionSelect", () => () => ({
  selectPageSectionByTitle: mockSelectPageSectionByTitle,
}));

describe("SXContentComparator Header Navigation test", () => {
  mockStore.dispatch = jest.fn();

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
    const previousButton = wrapper.find("button");
    // currently, the selected section is the "Title 0", after click we expect it to be "Title 2"
    previousButton.trigger("click");

    expect(mockSelectPageSectionByTitle).toHaveBeenCalledWith(
      "Compare contents header navigation section title 2"
    );
  });

  it("Next section method emitting update event correctly", () => {
    const nextButton = wrapper.findAll("button")[1];
    // currently, the selected section is the "Title 0", after click we expect it to be "Title 1"
    nextButton.trigger("click");

    expect(mockSelectPageSectionByTitle).toHaveBeenCalledWith(
      "Compare contents header navigation section title 1"
    );
  });
});
