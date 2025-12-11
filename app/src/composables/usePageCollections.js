import { ref } from "vue";
import suggestionsApi from "@/wiki/cx/api/suggestions";

const UNGROUPED_KEY = "ungrouped";
/**
 * @type {Ref<{ [group: string]: PageCollection[] }>}
 */
const pageCollectionGroups = ref({});
const pageCollections = ref({});
const pageCollectionGroupsFetched = ref(false);
let pageCollectionGroupsPromise = null;

const usePageCollections = () => {
  const doFetchPageCollectionGroups = async () => {
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
      pageCollections.value = Object.values(collectionGroups).flat();
      pageCollectionGroupsFetched.value = true;
    } catch (error) {
      mw.log.error("Failed to fetch page collections", error);
    }
  };

  const fetchPageCollectionGroups = () => {
    if (!pageCollectionGroupsPromise) {
      pageCollectionGroupsPromise = doFetchPageCollectionGroups();
    }

    return pageCollectionGroupsPromise;
  };

  return {
    fetchPageCollectionGroups,
    pageCollectionGroupsFetched,
    pageCollectionGroups,
    pageCollections,
  };
};

export default usePageCollections;
