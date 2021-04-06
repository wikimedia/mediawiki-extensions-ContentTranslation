import { mount, createLocalVue } from "@vue/test-utils";
import Page from "../../wiki/mw/models/page";
import pageApi from "../../wiki/mw/api/page";
import NearbySuggestionsCard from "./NearbySuggestionsCard";
import Vuex from "vuex";
import VueBananaI18n from "vue-banana-i18n";
const localVue = createLocalVue();
localVue.use(VueBananaI18n);
localVue.use(Vuex);

const mockNearbyPages = {
  en: [
    new Page({
      thumbnail: { source: "/thumbnail1.jpg" },
      title: "Test page1",
      description: "Test description1",
      langLinksCount: 5
    }),
    new Page({
      thumbnail: { source: "/thumbnail2.jpg" },
      title: "Test page2",
      description: "Test description2",
      langLinksCount: 10
    })
  ]
};

jest.mock("../../wiki/mw/api/page", () => {
  return {
    fetchNearbyPages: language => {
      if (mockNearbyPages[language]) {
        return Promise.resolve(mockNearbyPages[language]);
      }
      return Promise.reject();
    }
  };
});

describe("NearbySuggestionsCard", () => {
  const sourceLanguage = "en";

  const applicationState = { sourceLanguage };
  const applicationModule = {
    namespaced: true,
    state: applicationState
  };

  const mediawikiState = { nearbyPages: mockNearbyPages };
  const fetchNearbyPages = jest.fn(({ commit, rootState, state }) =>
    pageApi.fetchNearbyPages(rootState.application.sourceLanguage)
  );
  const mediawikiModule = {
    namespaced: true,
    state: mediawikiState,
    actions: { fetchNearbyPages },
    getters: {
      getNearbyPages: () =>
        mediawikiState.nearbyPages[applicationState.sourceLanguage]
    }
  };

  const store = new Vuex.Store({
    modules: { application: applicationModule, mediawiki: mediawikiModule }
  });

  const wrapper = mount(NearbySuggestionsCard, {
    localVue,
    store
  });

  it("Component output matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Nearby suggestions length is valid", () => {
    expect(fetchNearbyPages).toHaveBeenCalledTimes(1);
    expect(wrapper.findAll(".cx-search-suggestion").length).toBe(
      mockNearbyPages[sourceLanguage].length
    );
  });

  it("suggestion-clicked event is emitted on search suggestion click", async () => {
    const searchSuggestion = wrapper.find(".cx-search-suggestion");
    await searchSuggestion.trigger("click");
    expect(wrapper.emitted("suggestion-clicked")[0]).toEqual([
      mockNearbyPages[sourceLanguage][0]
    ]);
  });

  it("fetchNearbyPages is called on source language change", async () => {
    applicationState.sourceLanguage = "es";
    await wrapper.vm.$nextTick();
    expect(fetchNearbyPages).toHaveBeenCalledTimes(2);
  });

  it("Nearby suggestions card is removed from DOM when fetchNearbyPages action fails", async () => {
    expect(wrapper.find(".sx-article-search__nearby").exists()).toBe(false);
  });
});
