import { mount } from "@vue/test-utils";
import SxContentComparatorMappedSection from "./SXContentComparatorHeaderMappedSection.vue";
import { ref } from "vue";
import { createI18n } from "vue-banana-i18n";
import { mwIconTrash, mwIconUndo } from "@/lib/mediawiki.ui/components/icons";

jest.mock("@wikimedia/language-data", () => ({
  getAutonym: (lang) => lang,
}));

jest.mock("@/composables/useURLHandler", () => () => ({
  targetLanguageURLParameter: { value: "fr" },
}));

const mockActiveSectionTargetTitle = ref("Early life");
jest.mock("@/components/SXContentComparator/useCompareContents", () => () => ({
  activeSectionTargetTitle: mockActiveSectionTargetTitle,
}));

const mockSetExistingSectionPublishOption = jest.fn();
const mockExistingSectionPublishOption = ref("expand"); // or 'new'

jest.mock("@/composables/useExistingSectionPublishOption", () => () => ({
  existingSectionPublishOption: mockExistingSectionPublishOption,
  setExistingSectionPublishOption: mockSetExistingSectionPublishOption,
}));

describe("SxContentComparatorMappedSection", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(SxContentComparatorMappedSection, {
      global: { plugins: [createI18n()] },
    });
  });
  it("matches snapshot", async () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders mapped section header", () => {
    const header = wrapper.find("h6");
    expect(header.text()).toBe(
      "cx-sx-content-comparator-mapped-section-header-title"
    );
  });

  it('shows discard (trash) button when publish option is "expand"', () => {
    const trashButton = wrapper.findComponent(
      ".sx-content-comparator-header__mapped-section__discard-button"
    );
    expect(trashButton.exists()).toBe(true);
    expect(trashButton.props("icon")).toBe(mwIconTrash);
  });

  it('calls setExistingSectionPublishOption("new") when trash icon button clicked', async () => {
    const trashButton = wrapper.findComponent(
      ".sx-content-comparator-header__mapped-section__discard-button"
    );
    await trashButton.trigger("click");
    expect(mockSetExistingSectionPublishOption).toHaveBeenCalledWith("new");
  });

  it("renders target section title", () => {
    expect(wrapper.text()).toContain("Early life");
  });

  it('renders the "clarifications" text for "expand" publish option', () => {
    const clarification = wrapper.find(
      ".sx-content-comparator-header__mapped-section-clarifications"
    );
    expect(clarification.text()).toBe(
      "cx-sx-content-comparator-mapped-section-clarifications"
    );
  });

  it('renders undo icon button and line-through title when publish option is "new"', async () => {
    // Override mock to simulate discard mode
    mockExistingSectionPublishOption.value = "new";
    await wrapper.vm.$nextTick();

    const undoButton = wrapper.findComponent(
      ".sx-content-comparator-header__mapped-section__undo-button"
    );
    expect(undoButton.exists()).toBe(true);
    expect(undoButton.props("icon")).toBe(mwIconUndo);

    const title = wrapper.find(
      ".sx-content-comparator-header__mapped-section-target-title"
    );
    expect(title.classes()).toContain(
      "sx-content-comparator-header__mapped-section-target-title--discarded"
    );
  });

  it('calls setExistingSectionPublishOption("expand") when undo clicked', async () => {
    const undoButton = wrapper.findComponent({ name: "mw-button" });
    await undoButton.trigger("click");
    expect(mockSetExistingSectionPublishOption).toHaveBeenCalledWith("expand");
  });
});
