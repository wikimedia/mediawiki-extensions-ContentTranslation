import { computed } from "@vue/composition-api";
import { getAutonym } from "@wikimedia/language-data";

function autocomplete(searchQuery, searchResults) {
  const autocompletion = computed(() => {
    if (!searchResults.value.length || !searchQuery.value.trim()) {
      return "";
    }

    for (let i = 0; i < searchResults.value.length; i++) {
      const autonym = getAutonym(searchResults.value[i]);

      if (autonym.startsWith(searchQuery.value)) {
        return autonym;
      }
    }

    return "";
  });

  const onTabSelect = () => {
    searchQuery.value = autocompletion.value;
  };

  return {
    autocompletion,
    onTabSelect
  };
}

export default autocomplete;
