import { mount } from "@vue/test-utils";
import SXSectionSelectorSectionList from "./SXSectionSelectorSectionList";

const sections = {
  "source section 0": "target section 0",
  "source section 1": "target section 1",
  "source section 2": "target section 2",
  "source section 3": "target section 3"
};

const createWrapper = (options = {}) =>
  mount(SXSectionSelectorSectionList, {
    propsData: {
      sections
    },
    ...options
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
        default: slotTemplate
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component emits select-section event on section item click", async () => {
    const wrapper = createWrapper();
    const sourceSections = Object.keys(sections);
    const randomIndex = Math.floor(Math.random() * (sourceSections.length - 1));
    const button = wrapper.findAll("button").at(randomIndex);
    await button.trigger("click");
    expect(wrapper.emitted("select-section")[0]).toEqual([
      sourceSections[randomIndex]
    ]);
  });
});
