import { computed, ref, watch, watchEffect } from "vue";
import useURLHandler from "@/composables/useURLHandler";
import { useStore } from "vuex";

const validLists = ["suggestions", "draft", "published"];

const useActiveTabInitialize = () => {
  const store = useStore();
  const { getUrlParam, setUrlParam } = useURLHandler();
  const urlActiveList = getUrlParam("active-list");

  const activeTab = ref(null);

  if (validLists.includes(urlActiveList)) {
    activeTab.value = urlActiveList;
  } else {
    const draftTranslationsLoaded = computed(
      () => store.state.translator.translationsLoaded.draft
    );

    const translations = computed(() =>
      store.getters["translator/getTranslationsByStatus"]("draft")
    );

    if (draftTranslationsLoaded.value) {
      activeTab.value = translations.value.length > 0 ? "draft" : "suggestions";
    } else {
      activeTab.value = "suggestions";
      watch(draftTranslationsLoaded, (newValue) => {
        if (newValue) {
          activeTab.value =
            translations.value.length > 0 ? "draft" : "suggestions";
        }
      });
    }
  }

  watchEffect(() => {
    setUrlParam("active-list", activeTab.value);
    window.scrollTo(0, 0);
  });

  return activeTab;
};

export default useActiveTabInitialize;
