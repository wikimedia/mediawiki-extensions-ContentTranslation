import { mount } from "@vue/test-utils";
import SXSectionSelectorSectionList from "./SXSectionSelectorSectionList";

const sections = [
  { sourceTitle: "source section 0", targetTitle: "target section 0" },
  { sourceTitle: "source section 1", targetTitle: "target section 1" },
  { sourceTitle: "source section 2", targetTitle: "target section 2" },
  { sourceTitle: "source section 3", targetTitle: "target section 3" },
];

const createWrapper = (options = {}) =>
  mount(SXSectionSelectorSectionList, {
    props: {
      sections,
    },
    ...options,
  });
describe("SXSectionSelector Section List", () => {
  it("Component output matches snapshot for specified sections with label", () => {
    const wrapper = createWrapper();
    expect(wrapper.element).toMatchSnapshot();
  });
  it("Component output matches snapshot for specified props with slot", () => {
    const slotTemplate = `
      <template v-slot="{ targetSection, sourceSection }">
        <div class="sx-section-selector__present-section-button-content">
            <h5
              class="sx-section-selector__present-section-button-source"
              v-text="sourceSection"
            />
            <h6
              class="sx-section-selector__present-section-button-target"
              v-text="targetSection"
            />
          </div>
      </template>
    `;
    const wrapper = createWrapper({
      scopedSlots: {
        default: slotTemplate,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component emits select-section event on section item click", async () => {
    const wrapper = createWrapper();
    const randomIndex = Math.floor(Math.random() * (sections.length - 1));
    const button = wrapper.findAll("button")[randomIndex];
    await button.trigger("click");
    expect(wrapper.emitted("select-section")[0]).toEqual([
      sections[randomIndex].sourceTitle,
    ]);
  });
});
