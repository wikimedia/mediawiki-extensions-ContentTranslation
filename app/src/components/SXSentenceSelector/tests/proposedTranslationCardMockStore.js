import Vuex from "vuex";
import Vue from "vue";

const applicationModule = {
  namespaced: true,
  state: {
    currentMTProvider: "Apertium",
    content: "<div>Test translation</div>",
    targetLanguage: "es"
  },
  getters: {
    getCurrentProposedTranslation: state => state.content
  },
  mutations: {
    setCurrentMTProvider: (state, provider) => {
      state.currentMTProvider = provider;
    }
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { application: applicationModule }
});
