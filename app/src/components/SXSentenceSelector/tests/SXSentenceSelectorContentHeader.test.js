import { mount } from "@vue/test-utils";
import SXSentenceSelectorContentHeader from "../SXSentenceSelectorContentHeader";
import PageSection from "@/wiki/cx/models/pageSection";
import Page from "@/wiki/mw/models/page";
import { ref } from "vue";

const mockValues = {
  sourceSection: ref(
    new PageSection({
      title: "Test source section title",
    })
  ),
  isSectionTitleSelected: ref(false),
};

jest.mock("@/composables/useCurrentPageSection", () => () => mockValues);

const mockCurrentPage = new Page({ title: "Test source article title" });
jest.mock("@/composables/useCurrentPages", () => () => ({
  currentSourcePage: { value: mockCurrentPage },
}));

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: { value: "en" },
}));

jest.mock(
  "@/components/SXSentenceSelector/useTranslationUnitSelect",
  () => () => ({
    selectTranslationUnitById: jest.fn(),
  })
);

describe("SXSentenceSelector Section Content Header", () => {
  const wrapper = mount(SXSentenceSelectorContentHeader);

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
