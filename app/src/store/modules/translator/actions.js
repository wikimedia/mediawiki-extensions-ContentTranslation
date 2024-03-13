import translator from "@/wiki/cx/api/translator";

async function fetchTranslatorStats({ commit }) {
  const translatorStats = await translator.fetchTranslatorStats();

  commit("setTranslatorStats", translatorStats);
}

export default {
  fetchTranslatorStats,
};
