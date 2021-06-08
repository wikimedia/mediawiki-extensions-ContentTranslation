import SXContentComparatorHeaderNavigation from "./SXContentComparatorHeaderNavigation";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("SXContentComparator Header Navigation test", () => {
  const sectionSourceTitles = ["title 0", "title 1", "title 2"];
  const store = new Vuex.Store({
    modules: {
      application: {
        namespaced: true,
        getters: {
          getCurrentSourceSectionTitle: state => sectionSourceTitles[0]
        }
      }
    }
  });
  store.dispatch = jest.fn();
  const wrapper = mount(SXContentComparatorHeaderNavigation, {
    store,
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
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/selectPageSectionByIndex",
      2
    );
  });

  it("Next section method emitting update event correctly", () => {
    wrapper
      .findAll("button")
      .at(1)
      .trigger("click");

    expect(store.dispatch).toHaveBeenCalledWith(
      "application/selectPageSectionByIndex",
      1
    );
  });
});
