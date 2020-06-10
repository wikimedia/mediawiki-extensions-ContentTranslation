import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import MwAutonym from "../../components/MWAutonym";
import mediawiki from "@/store/modules/mediawiki";

describe("MwAutonym.vue", () => {
  let store,
    localVue,
    storeConfig = { modules: { mediawiki } };

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(storeConfig);
  });

  it("renders the autonym for the passed language", () => {
    const lang = "ml";
    const autonym = "മലയാളം";
    const dir = "ltr";
    const languageInfo = {
      ml: {
        autonym,
        dir
      }
    };
    expect(Object.keys(store.state.mediawiki.languageInfo).length).toBe(0);
    store.commit("mediawiki/setLanguageInfo", languageInfo);
    const wrapper = shallowMount(MwAutonym, {
      propsData: { lang },
      store,
      localVue
    });
    expect(wrapper.find("span").text()).toMatch("മലയാളം");
    expect(wrapper.find("span").attributes("lang")).toBe(lang);
    expect(wrapper.find("span").attributes("dir")).toBe(dir);
    expect(wrapper.element).toMatchSnapshot();
  });
});
