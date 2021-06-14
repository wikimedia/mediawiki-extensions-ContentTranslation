import { ref, watch, computed } from "@vue/composition-api";

function keyboardNavigation(searchQuery, searchResults, suggestions) {
  const selectedLanguage = ref("");
  const selectedIndex = ref(-1);
  const langSelectorContainer = ref(null);

  const next = () => {
    selectedIndex.value++;

    if (selectedIndex.value >= shownLanguages.value.length) {
      selectedIndex.value = 0;
    }
  };

  const shownLanguages = computed(() =>
    !!searchQuery.value
      ? searchResults.value
      : [...suggestions, ...searchResults.value]
  );

  const prev = () => {
    selectedIndex.value--;

    if (selectedIndex.value < 0) {
      selectedIndex.value = 0;
    }
  };

  watch(searchQuery, () => {
    selectedIndex.value = -1;
  });

  watch(selectedIndex, async () => {
    if (selectedIndex.value < 0) {
      // Reset
      selectedLanguage.value = "";

      return;
    }
    selectedLanguage.value = shownLanguages.value[selectedIndex.value];
    langSelectorContainer.value
      .querySelectorAll(`.language[lang="${selectedLanguage.value}"]`)[0]
      ?.scrollIntoView(false);
  });

  return { next, prev, langSelectorContainer, selectedLanguage };
}

export default keyboardNavigation;
