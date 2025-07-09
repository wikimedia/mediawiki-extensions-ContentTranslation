import { ref } from "vue";
import usePublishTarget from "@/composables/usePublishTarget";

const mockIsCurrentSectionPresent = ref(false);
jest.mock("@/composables/useCurrentSectionSuggestion", () => () => ({
  isCurrentSectionPresent: mockIsCurrentSectionPresent,
}));

jest.mock("@/composables/useURLHandler", () => () => ({
  sourceLanguageURLParameter: { value: "en" },
  targetLanguageURLParameter: { value: "es" },
  pageURLParameter: { value: "Uranus" },
}));

const {
  resetPublishTarget,
  target,
  PUBLISHING_TARGETS,
  setTarget,
  clearPublishTarget,
} = usePublishTarget();
describe("usePublishTarget", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("resets target to EXPAND if isCurrentSectionPresent is true", () => {
    mockIsCurrentSectionPresent.value = true;
    resetPublishTarget();

    expect(target.value).toBe(PUBLISHING_TARGETS.EXPAND);
  });

  it("resets target to NEW_SECTION if isCurrentSectionPresent is false", () => {
    mockIsCurrentSectionPresent.value = false;
    resetPublishTarget();

    expect(target.value).toBe(PUBLISHING_TARGETS.NEW_SECTION);
  });

  it("can manually set a target", () => {
    setTarget(PUBLISHING_TARGETS.SANDBOX);
    expect(target.value).toBe(PUBLISHING_TARGETS.SANDBOX);
  });

  it("can clear the target", () => {
    target.value = "NEW_SECTION";
    clearPublishTarget();
    expect(target.value).toBeNull();
  });
});
