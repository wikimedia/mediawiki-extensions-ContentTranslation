import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel";
import { mount, createLocalVue } from "@vue/test-utils";
import VueBananaI18n from "vue-banana-i18n";
import Vuex from "vuex";
import colors from "../../lib/mediawiki.ui/plugins/colors";
import CompositionApi from "@vue/composition-api";
import mockStore from "./actionPanelMockStore";

const localVue = createLocalVue();
localVue.use(CompositionApi);
localVue.use(VueBananaI18n);
localVue.use(Vuex);
localVue.use(colors);

jest.mock("../../store", () => jest.requireActual("./actionPanelMockStore"));

describe("SXTranslationConfirmer Action Panel test", () => {
  const wrapper = mount(SxTranslationConfirmerActionPanel, {
    localVue,
    store: mockStore
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Action information message is computed correctly", () => {
    const i18nArgs = [
      "cx-sx-existing-translation-additional-info",
      `"source1"`,
      2
    ];
    expect(wrapper.vm.actionInformationMessage).toBe(
      wrapper.vm.$i18n(...i18nArgs)
    );
  });

  it("translationExists property is computed correctly", () => {
    expect(wrapper.vm.translationExists).toBe(true);
  });
});
