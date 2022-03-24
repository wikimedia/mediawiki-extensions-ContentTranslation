import { mount } from "@vue/test-utils";
import SXSentenceSelectorContentHeader from "../SXSentenceSelectorContentHeader";
import mockStore from "./sentenceSelectorContentHeaderMockStore";

jest.mock("@/store", () =>
  jest.requireActual("./sentenceSelectorContentHeaderMockStore")
);

describe("SXSentenceSelector Section Content Header", () => {
  const wrapper = mount(SXSentenceSelectorContentHeader, {
    global: { plugins: [mockStore] },
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
