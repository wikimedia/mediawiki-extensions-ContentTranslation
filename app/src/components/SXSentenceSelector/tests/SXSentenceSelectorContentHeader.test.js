import { mount, createLocalVue } from "@vue/test-utils";
import SXSentenceSelectorContentHeader from "../SXSentenceSelectorContentHeader";
import Vuex from "vuex";
import CompositionApi from "@vue/composition-api";
import mockStore from "./sentenceSelectorContentHeaderMockStore";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(Vuex);

jest.mock("@/store", () =>
  jest.requireActual("./sentenceSelectorContentHeaderMockStore")
);

describe("SXSentenceSelector Section Content Header", () => {
  const wrapper = mount(SXSentenceSelectorContentHeader, {
    store: mockStore,
    localVue
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
