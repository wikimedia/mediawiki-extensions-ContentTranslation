import { createLocalVue, mount } from "@vue/test-utils";
import SubSection from "./SubSection";
import Vue from "vue";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
import MTProviderGroup from "../../wiki/mw/models/mtProviderGroup";
import segmentedContentConverter from "@/utils/segmentedContentConverter";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueBananaI18n);

const subSectionHtml = `
<html>
  <body>
    <section data-mw-section-number="3" id="cxSourceSection17" rel="cx:Section">
      <h2>
        <span class="cx-segment" data-segmentid="89">Test title</span>
      </h2>
    </section>
    <section id="cxSourceSection18" data-mw-section-number="3" rel="cx:Section">
      <p id="mweA">
        <span class="cx-segment" data-segmentid="109">
          The Chinese competitive game as stated by FIFA, is the earliest form of
          football for which there is scientific evidence and appears in a
          military manual dated to the second and third centuries BC.
        </span>
        <span class="cx-segment" data-segmentid="111">
          It existed during the Han dynasty and possibly the Qin dynasty, in the
          second and third centuries BC.
        </span>
      </p>
    </section>
  </body>
</html>
`;

const pageSections = segmentedContentConverter.convertSegmentedContentToPageSections(
  subSectionHtml.trim()
);
describe("SXSentenceSelector SubSection component", () => {
  /** @type SubSection **/
  const subSection = pageSections[0].subSections[0];
  const applicationModule = {
    namespaced: true,
    actions: {
      selectSentenceForCurrentSection: ({}, { id }) => {
        const sentence = subSection.getSentenceById(id);
        sentence.selected = true;
      }
    }
  };
  const mediawikiModule = {
    namespaced: true,
    state: {},
    getters: {
      getSupportedMTProviders: state => () => [
        MTProviderGroup.ORIGINAL_TEXT_PROVIDER_KEY
      ]
    }
  };
  const store = new Vuex.Store({
    modules: {
      mediawiki: mediawikiModule,
      application: applicationModule
    }
  });

  const wrapper = mount(SubSection, {
    localVue,
    store,
    propsData: { subSection }
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Component should bounce translation preview when already selected sentence is selected", async () => {
    const sentence = wrapper.find(".cx-segment");
    sentence.trigger("click");
    await Vue.nextTick();
    sentence.trigger("click");
    expect(wrapper.emitted("bounce-translation")).toBeTruthy();
  });

  it("Component should dispatch correct action on new sentence selected", () => {
    store.dispatch = jest.fn();
    const sentence = wrapper.findAll(".cx-segment").at(1);
    sentence.trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith(
      "application/selectSentenceForCurrentSection",
      {
        id: sentence.element.dataset.segmentid
      }
    );
  });
});
