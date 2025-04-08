import { ref, watch, computed } from "vue";

/**
 * Custom composable to handle basic keyboard navigation.
 *
 * Originally named keyboardnav.js
 *
 * @param {Ref} searchQuery
 * @param {Ref} searchResults
 * @param {Ref} suggestions
 *
 * @returns {Object} next, prev, keyboardNavigationContainer, selectedItem
 *
 * */
function useKeyboardNavigation(searchQuery, searchResults, suggestions) {
  const selectedItem = ref("");
  const selectedIndex = ref(-1);
  const keyboardNavigationContainer = ref(null);

  const next = () => {
    selectedIndex.value++;

    if (selectedIndex.value >= shownItems.value.length) {
      selectedIndex.value = 0;
    }
  };

  const shownItems = computed(() => {
    if (!!searchQuery.value) {
      return searchResults.value;
    } else if (suggestions && suggestions.value) {
      return [...suggestions.value, ...searchResults.value];
    }

    return [];
  });

  const prev = () => {
    selectedIndex.value--;

    if (selectedIndex.value < 0) {
      selectedIndex.value = 0;
    }
  };

  watch(searchQuery, () => {
    selectedIndex.value = -1;
  });

  watch(searchResults, () => {
    if (!!searchResults.value && shownItems.value.length > 0) {
      selectedIndex.value = 0;
    }
  });

  watch(selectedIndex, async () => {
    if (selectedIndex.value < 0) {
      // Reset
      selectedItem.value = "";

      return;
    }
    selectedItem.value = shownItems.value[selectedIndex.value];
    keyboardNavigationContainer.value
      .querySelectorAll(`.language[lang="${selectedItem.value}"]`)[0]
      ?.scrollIntoView(false);
  });

  return { next, prev, keyboardNavigationContainer, selectedItem };
}

export default useKeyboardNavigation;
