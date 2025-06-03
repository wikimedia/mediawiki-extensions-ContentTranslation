import { ref } from "vue";
import suggestionsApi from "@/wiki/cx/api/suggestions";

const UNGROUPED_KEY = "ungrouped";
/**
 * @type {Ref<{ [group: string]: PageCollection[] }>}
 */
const pageCollectionGroups = ref({});
const pageCollectionGroupsFetched = ref(false);

const usePageCollections = () => {
  const fetchPageCollectionGroups = async () => {
    try {
      const collectionGroups = await suggestionsApi.fetchPageCollectionGroups();

      const sortedGroups = Object.fromEntries(
        Object.keys(collectionGroups)
          .sort((a, b) => {
            if (a === UNGROUPED_KEY) return 1;
            if (b === UNGROUPED_KEY) return -1;

            return a.localeCompare(b);
          })
          .map((key) => [key, collectionGroups[key]])
      );

      if (sortedGroups[UNGROUPED_KEY]) {
        sortedGroups[UNGROUPED_KEY] = sortedGroups[UNGROUPED_KEY].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      pageCollectionGroups.value = sortedGroups;
      pageCollectionGroupsFetched.value = true;
    } catch (error) {
      mw.log.error("Failed to fetch page collections", error);
    }
  };

  return {
    fetchPageCollectionGroups,
    pageCollectionGroupsFetched,
    pageCollectionGroups,
  };
};

export default usePageCollections;
