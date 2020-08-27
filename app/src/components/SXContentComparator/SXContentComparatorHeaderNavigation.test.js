import SXContentComparatorHeaderNavigation from "./SXContentComparatorHeaderNavigation";
import  { mount } from "@vue/test-utils";

describe("SXContentComparator Header Navigation test", () => {
  const sectionSourceTitles = ["title 0", "title 1", "title 2"];
  const wrapper = mount(SXContentComparatorHeaderNavigation, {
    propsData: {
      sourceSectionTitle: sectionSourceTitles[0],
      sectionSourceTitles
    }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it("Previous section method emitting update event correctly", () => {
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('update:sourceSectionTitle')).toBeTruthy()
    expect(wrapper.emitted('update:sourceSectionTitle')[0]).toEqual([sectionSourceTitles[2]])
  })

  it("Next section method emitting update event correctly", () => {
    wrapper.findAll('button').at(1).trigger('click')
    expect(wrapper.emitted('update:sourceSectionTitle')).toBeTruthy()
    expect(wrapper.emitted('update:sourceSectionTitle')[1]).toEqual([sectionSourceTitles[1]])
  })
})
