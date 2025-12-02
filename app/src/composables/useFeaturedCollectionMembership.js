import useFeaturedCollectionFilter from "@/composables/useFeaturedCollectionFilter";
import cxSuggestionsApi from "@/wiki/cx/api/suggestions";

const useFeaturedCollectionMembership = () => {
  const { featuredCollectionPromise, featuredCollection } =
    useFeaturedCollectionFilter();

  /**
   * Check if the given QIDs are in the featured collection.
   * @param {string[]} qids - The QIDs to check.
   * @param {string} language - The language of the titles.
   * @param {string[]} titles - The titles to check.
   * @param {string|undefined} featuredCollectionName - The featured collection name or undefined for the current one
   * @returns {Promise<Object>} - A promise that resolves to an object indicating membership status.
   */
  async function inFeaturedCollection(
    qids,
    language,
    titles,
    featuredCollectionName
  ) {
    const noQids = !Array.isArray(qids) || qids.length === 0;
    const noLangTitles = !language || !Array.isArray(titles) || !titles.length;

    if (noQids && noLangTitles) {
      return {};
    }

    if (!featuredCollectionName) {
      await featuredCollectionPromise.value;

      if (featuredCollection.value?.name) {
        featuredCollectionName = featuredCollection.value.name;
      } else {
        return {};
      }
    }

    const membershipData = await cxSuggestionsApi.fetchPageCollectionMembership(
      featuredCollectionName,
      qids,
      language,
      titles
    );

    return membershipData;
  }

  return {
    inFeaturedCollection,
  };
};

export default useFeaturedCollectionMembership;
