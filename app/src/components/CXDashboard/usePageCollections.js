import { ref } from "vue";
import suggestionsApi from "@/wiki/cx/api/suggestions";

/**
 * @type {Ref<PageCollection[]>}
 */
const pageCollections = ref([]);
const pageCollectionsFetched = ref(false);

const usePageCollections = () => {
  const fetchPageCollections = async () => {
    try {
      pageCollections.value = await suggestionsApi.fetchPageCollections();
      pageCollections.value.sort((a, b) => a.name.localeCompare(b.name));
      pageCollectionsFetched.value = true;
    } catch (error) {
      mw.log.error("Failed to fetch page collections", error);
    }
  };

  return { pageCollections, fetchPageCollections, pageCollectionsFetched };
};

export default usePageCollections;
