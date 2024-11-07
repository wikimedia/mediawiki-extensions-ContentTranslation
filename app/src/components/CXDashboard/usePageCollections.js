import { ref } from "vue";
import suggestionsApi from "@/wiki/cx/api/suggestions";

const pageCollections = ref([]);
const pageCollectionsFetched = ref(false);

const usePageCollections = () => {
  const fetchPageCollections = async () => {
    try {
      pageCollections.value = await suggestionsApi.fetchPageCollections();
      pageCollectionsFetched.value = true;
    } catch (error) {
      mw.log.error("Failed to fetch page collections", error);
    }
  };

  return { pageCollections, fetchPageCollections, pageCollectionsFetched };
};

export default usePageCollections;
