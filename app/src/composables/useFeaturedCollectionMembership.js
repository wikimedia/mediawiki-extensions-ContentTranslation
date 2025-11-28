import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";

const useFeaturedCollectionMembership = () => {
  const { featureCollectionPromise, featuredCollection } =
    useFeaturedCollectionFilter();

  /**
   * Check if the given QIDs are in the featured collection.
   * @param {string[]} qids - The QIDs to check.
   * @returns {Promise<Object>} - A promise that resolves to an object indicating membership status.
   */
  async function inFeaturedCollection(qids) {
    if (!qids || !Array.isArray(qids) || qids.length === 0) {
      return {};
    }

    await featureCollectionPromise;

    if (!featuredCollection.value?.name) {
      return {};
    }

    const membershipData = await cxSuggestionsApi.fetchPageCollectionMembership(
      featuredCollection.value.name,
      qids
    );

    return membershipData;
  }

  return {
    inFeaturedCollection,
  };
};

export default useFeaturedCollectionMembership;
