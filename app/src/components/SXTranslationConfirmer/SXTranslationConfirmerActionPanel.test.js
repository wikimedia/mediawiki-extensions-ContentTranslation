import SxTranslationConfirmerActionPanel from "./SXTranslationConfirmerActionPanel";
import { mount } from "@vue/test-utils";
import { createI18n } from "vue-banana-i18n";
import { colors } from "../../lib/mediawiki.ui/plugins/colors";
import router from "../../router";
import mockStore from "./actionPanelMockStore";

const i18n = createI18n();

jest.mock("../../store", () => jest.requireActual("./actionPanelMockStore"));

describe("SXTranslationConfirmer Action Panel test", () => {
  const wrapper = mount(SxTranslationConfirmerActionPanel, {
    global: {
      plugins: [mockStore, router, i18n],
      provide: {
        colors: {}
      }
    },
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
